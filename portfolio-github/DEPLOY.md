# Héberger le portfolio

L'app se compile en fichiers **statiques** (`dist/`). Trois façons de la servir.

---

## Option A — Docker (recommandé pour ton homelab)

Depuis le dossier du projet, sur ton serveur :

```bash
docker compose up -d --build
```

Le site est alors dispo sur `http://IP_DU_SERVEUR:8080`.

Pour mettre à jour après une modif :

```bash
docker compose up -d --build
```

Pour arrêter :

```bash
docker compose down
```

---

## Option B — nginx “classique” (sans Docker)

Sur ta machine, build :

```bash
npm install
npm run build
```

Puis copie le contenu de `dist/` dans la racine web de ton serveur, par ex. :

```bash
scp -r dist/* user@serveur:/var/www/portfolio/
```

Et un `server {}` nginx minimal côté serveur :

```nginx
server {
    listen 80;
    server_name portfolio.tondomaine.fr;
    root /var/www/portfolio;
    index index.html;
    location / { try_files $uri $uri/ /index.html; }
}
```

---

## Mettre le HTTPS (reverse proxy)

Ne gère pas le certificat dans ce conteneur : laisse ton reverse proxy s'en charger
et pointe-le vers le portfolio (`http://IP:8080` en Docker, ou le vhost nginx).

- **Nginx Proxy Manager** : nouveau *Proxy Host* → domaine `portfolio.tondomaine.fr`,
  *Forward* vers `IP_DU_SERVEUR:8080`, onglet *SSL* → *Request a new certificate* (Let's Encrypt).

- **Traefik** : ajoute les labels sur le service `portfolio` dans `docker-compose.yml` :
  ```yaml
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.portfolio.rule=Host(`portfolio.tondomaine.fr`)"
      - "traefik.http.routers.portfolio.entrypoints=websecure"
      - "traefik.http.routers.portfolio.tls.certresolver=letsencrypt"
      - "traefik.http.services.portfolio.loadbalancer.server.port=80"
  ```

- **Caddy** (le plus simple, HTTPS auto) — dans ton `Caddyfile` :
  ```
  portfolio.tondomaine.fr {
      reverse_proxy IP_DU_SERVEUR:8080
  }
  ```

Pense à créer un enregistrement DNS `portfolio` (A/AAAA ou CNAME) qui pointe vers ton
serveur, et à ouvrir/rediriger les ports 80/443 vers le reverse proxy si besoin.
