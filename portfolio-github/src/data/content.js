// =====================================================================
// CONTENU — tout le texte éditable du portfolio est centralisé ici.
// Modifie ces valeurs, la mise en page suit toute seule.
// =====================================================================

export const ME = {
  name: "Nans MOLL",
  role: "Alternance en infra & réseau",
  email: "nans.moll646@gmail.com",
  phone: "+33 7 65 84 43 83",
  github: "https://github.com/nans-moll",
  linkedin: "https://www.linkedin.com/in/ton-profil", // <-- mets ton vrai lien LinkedIn
  location: "Mimet · Aix-en-Provence",
  initials: "NM",
  bio: "En 2ᵉ année à Ynov Campus Aix-en-Provence et passionné d'informatique, je recherche activement une alternance — rythme 2 semaines en entreprise / 1 semaine à l'école — pour développer mes compétences en infrastructure, réseau et cloud.",
};

// [clé de section, libellé affiché dans la nav]
export const SECTIONS = [
  ["accueil", "Accueil"],
  ["apropos", "À propos"],
  ["competences", "Compétences"],
  ["parcours", "Parcours"],
  ["homelab", "Homelab"],
  ["projets", "Projets"],
  ["contact", "Contact"],
];

export const SECTION_IDS = SECTIONS.map((s) => s[0]);

export const SKILL_GROUPS = [
  {
    label: "Systèmes & réseau",
    items: ["VLAN", "QoS", "Routage IPv4", "Linux", "Linux Debian"],
  },
  { label: "Virtualisation & conteneurs", items: ["Proxmox", "Docker"] },
  { label: "Outils", items: ["Git / GitHub", "Wireshark", "Cisco Packet Tracer"] },
  { label: "Web", items: ["HTML5 / CSS3", "JavaScript"] },
  { label: "Base de données", items: ["MySQL"] },
];

// liste à plat, pratique pour un aperçu
export const SKILLS = SKILL_GROUPS.flatMap((g) => g.items);

export const FORMATIONS = [
  {
    period: "2024 — présent",
    title: "Bachelor Informatique",
    place: "Ynov Campus · Aix-en-Provence",
    text: "Spécialisation systèmes, réseaux et infrastructure & cloud.",
  },
  {
    period: "2023 — 2024",
    title: "Prépa Bachelor IT",
    place: "La Plateforme · Marseille",
    text: "Année de mise à niveau technique avant le Bachelor.",
  },
  {
    period: "2021 — 2023",
    title: "Bac pro commerce & vente",
    place: "Lycée Gambetta · Aix-en-Provence",
    text: "",
  },
];

export const EXPERIENCES = [
  {
    period: "2025",
    title: "Stagiaire — Infrastructure & réseau",
    place: "YoukiCorp",
    text: "Un stage que j'ai vraiment adoré et qui m'a énormément apporté en connaissances. J'y ai travaillé sur Docker et les protocoles de mail, et réalisé une infrastructure complète avec l'hébergement d'un site web : DNS avec Technitium, pare-feu OPNsense et ses règles de filtrage, et un VPN sous Windows Server.",
  },
  {
    period: "2024 — 2026",
    title: "Employé (CDD)",
    place: "Lidl · Gardanne",
    text: "Gestion du stress, travail d'équipe et relation client.",
  },
  {
    period: "2022",
    title: "Équipier (CDD)",
    place: "Steak'n'Shake · Plan de Campagne",
    text: "Gestion du stress et travail d'équipe sous cadence.",
  },
];

export const CERTIFS = [
  { title: "Cisco Networking Basics", org: "Skills for All", status: "En cours" },
];

export const LANGUES = [
  { name: "Français", level: "Langue maternelle" },
  { name: "Anglais", level: "" },
];

export const SOFT_SKILLS = ["Travail d'équipe", "Curieux", "Adaptabilité"];

export const INTERESTS = [
  { label: "Homelabing", desc: "Projet perso d'auto-hébergement et d'entraînement." },
  { label: "Voyage", desc: "Découvrir de nouvelles cultures et m'adapter." },
  { label: "Course à pied", desc: "Pratique régulière pour la forme." },
];

export const HOMELAB_INTRO =
  "Mon homelab héberge une stack média complète en Docker, orchestrée derrière Traefik (reverse proxy + HTTPS). Les demandes passent par Jellyseerr (et un bot Discord), l'automatisation *arr (Prowlarr, Radarr, Sonarr, Bazarr) pilote les téléchargements via SABnzbd (Usenet) et qBittorrent derrière un VPN ProtonVPN (gluetun). Tout est rangé dans /mnt/medias puis diffusé par Jellyfin, avec Portainer et Homarr pour la supervision et Discarr pour les notifications Discord.";

// Stack représentée en couches (diagramme sur-mesure).
export const HOMELAB_STACK = [
  {
    label: "Utilisateurs",
    nodes: [
      { icon: "Users", name: "Utilisateur" },
      { icon: "MessageCircle", name: "Discord" },
    ],
  },
  {
    label: "Couche d'accès",
    nodes: [{ icon: "Shield", name: "Traefik", sub: ":80/:443 · reverse proxy" }],
  },
  {
    label: "Demandes",
    nodes: [
      { icon: "Inbox", name: "Jellyseerr", sub: ":5055" },
      { icon: "Bot", name: "Discord bot", sub: ":5000" },
    ],
  },
  {
    label: "Automatisation *arr",
    nodes: [
      { icon: "Search", name: "Prowlarr", sub: ":9696 · indexers" },
      { icon: "Film", name: "Radarr", sub: ":7878 · films" },
      { icon: "Tv", name: "Sonarr", sub: ":8989 · séries" },
      { icon: "Captions", name: "Bazarr", sub: ":6767 · sous-titres" },
    ],
  },
  {
    label: "Téléchargement",
    nodes: [
      { icon: "Download", name: "SABnzbd", sub: ":8080 · Usenet" },
      { icon: "Lock", name: "qBittorrent", sub: ":8081 · via ProtonVPN" },
    ],
  },
  {
    label: "Stockage · /mnt/medias",
    nodes: [
      { icon: "Folder", name: "downloads/" },
      { icon: "Folder", name: "films/" },
      { icon: "Folder", name: "series/" },
    ],
  },
  {
    label: "Diffusion",
    nodes: [{ icon: "Play", name: "Jellyfin", sub: ":8096 · streaming" }],
  },
  {
    label: "Infra & monitoring",
    nodes: [
      { icon: "Boxes", name: "Portainer", sub: ":9443" },
      { icon: "LayoutDashboard", name: "Homarr", sub: ":7575" },
      { icon: "Bell", name: "Discarr", sub: "notifications" },
    ],
  },
];

export const POSTS = [
  {
    title: "Opération Sentinel — infra sécurisée & SOC",
    excerpt:
      "Projet d'équipe (Ynov) : déployer et sécuriser une infra d'entreprise segmentée en 4 VLAN (OPNsense, Traefik, PKI), avec supervision Wazuh + Grafana/Loki et un exercice Red Team / Blue Team.",
    date: "2026",
    read: "9 min",
    tag: "Cybersécurité",
    stack: [
      "OPNsense",
      "Traefik",
      "Technitium",
      "Docker",
      "Wazuh",
      "Grafana + Loki",
      "CrowdSec",
      "Trivy",
      "step-ca (PKI)",
      "Vaultwarden",
      "WireGuard",
    ],
    repo: "",
    body: [
      {
        type: "p",
        text: "Projet d'équipe (3 personnes) réalisé dans le cadre du module cybersécurité à Ynov : déployer et sécuriser de bout en bout l'infrastructure IT d'une entreprise fictive, du réseau jusqu'à la supervision de sécurité, puis la mettre à l'épreuve par un exercice Red Team / Blue Team.",
      },
      { type: "h", text: "Architecture réseau — 4 VLAN" },
      {
        type: "p",
        text: "Segmentation stricte : aucun service interne n'est joignable depuis Internet, et tous les flux inter-VLAN sont filtrés par OPNsense en « default deny ».",
      },
      {
        type: "table",
        head: ["VLAN", "Sous-réseau", "Rôle", "Services"],
        rows: [
          ["10", "10.70.10.0/24", "DMZ (exposé)", "Traefik, Nginx, mail"],
          ["20", "10.70.20.0/24", "SRV (interne)", "Portainer, Outline, Vaultwarden, Wazuh, Grafana/Loki"],
          ["30", "10.70.30.0/24", "LAN (postes)", "Postes, accès services via DNS"],
          ["40", "10.70.40.0/24", "MGMT (admin)", "SSH, OPNsense, Technitium DNS"],
        ],
      },
      { type: "h", text: "Déroulé en 4 phases" },
      {
        type: "ul",
        items: [
          "Infrastructure de base : 4 VLAN, DNS interne (Technitium), reverse proxy Traefik en auto-discovery Docker, premiers services.",
          "Durcissement & certificats : PKI interne (step-ca), TLS partout, hardening SSH, fail2ban, CrowdSec sur Traefik, Vaultwarden, scan d'images Trivy, WAF.",
          "Supervision & détection : SIEM/XDR Wazuh (FIM, règles HIDS, MITRE ATT&CK) couplé à Grafana + Loki + Promtail pour les logs, dashboards, alerting et Uptime Kuma.",
          "Red Team / Blue Team : app vulnérable (DVWA / Juice Shop), reconnaissance et exploitation côté attaque ; détection, réponse en temps réel et remédiation côté défense.",
        ],
      },
      { type: "h", text: "Mon rôle" },
      {
        type: "p",
        text: "Les rôles (Architecte Infra, Ingénieur Sécurité, Analyste SOC) tournent à chaque phase : je touche donc à la fois au réseau et au firewall, au durcissement système et à l'analyse SOC. Tout est versionné sur Git et documenté au fil de l'eau.",
      },
      { type: "h", text: "Pour aller plus loin" },
      {
        type: "p",
        text: "Extensions prévues : déploiement en IaC avec Ansible, VPN WireGuard pour le MGMT, SSO (Authentik/Keycloak), honeypot et CI/CD sécurisé (Gitea + Drone avec scan Trivy).",
      },
    ],
  },
  {
    title: "Stage — retour d'expérience chez YoukiCorp",
    excerpt:
      "Retour sur mon stage en distanciel chez YoukiCorp : Docker, protocoles de mail, hébergement web, DNS (Technitium), pare-feu OPNsense et VPN Windows Server.",
    date: "2025",
    read: "5 min",
    tag: "Stage",
    stack: ["Docker", "Technitium (DNS)", "OPNsense", "Règles de pare-feu", "VPN Windows Server", "Mail"],
    repo: "",
    body: [
      {
        type: "p",
        text: "Petit retour sur mon stage chez YoukiCorp, réalisé en distanciel. En quelques semaines, j'ai pu mettre les mains dans une infrastructure complète, du réseau jusqu'à l'hébergement — c'est clairement l'expérience qui m'a le plus fait progresser jusqu'ici.",
      },
      { type: "h", text: "Présentation de l'entreprise" },
      {
        type: "p",
        text: "YoukiCorp, c'est en réalité un auto-entrepreneur qui a monté chez lui une infrastructure de niveau professionnel, digne d'une véritable entreprise. On y retrouve tout un écosystème complet — serveurs, virtualisation, réseau segmenté, services hébergés et sécurité — qui sert aussi bien à ses propres projets qu'à ses prestations. C'est justement ce qui rend le stage aussi formateur : on travaille sur une infra réaliste et complète, sans les lourdeurs d'une grande structure, et avec un vrai accès au « pourquoi » derrière chaque choix technique.",
      },
      { type: "h", text: "Les outils et l'environnement" },
      {
        type: "p",
        text: "L'environnement de travail tournait autour de plusieurs briques complémentaires : Docker pour la conteneurisation des services, un serveur Windows Server, un pare-feu OPNsense pour la sécurité réseau, Technitium pour la résolution DNS, et un VPN pour les accès distants. La communication, en interne comme pour le suivi, passait par des canaux dédiés (messagerie d'équipe, mail).",
      },
      { type: "h", text: "Ce que j'ai fait" },
      {
        type: "p",
        text: "Le fil rouge du stage a été la réalisation d'une infrastructure complète, de bout en bout :",
      },
      {
        type: "ul",
        items: [
          "Conteneurisation de services avec Docker, pour des déploiements propres et reproductibles.",
          "Mise en place et compréhension des protocoles de mail (mise en service et tests d'un service de messagerie).",
          "Hébergement d'un site web au sein de cette infrastructure.",
          "Résolution DNS interne avec Technitium.",
          "Sécurisation réseau avec OPNsense : configuration du pare-feu et écriture des règles de filtrage.",
          "Déploiement d'un VPN sous Windows Server pour les accès distants sécurisés.",
        ],
      },
      { type: "h", text: "Un stage en distanciel" },
      {
        type: "p",
        text: "Le stage s'est déroulé à distance, et honnêtement ça a été un vrai plus : ça nous a permis de moins nous prendre la tête, de travailler dans de bonnes conditions et d'avancer sereinement, tout en gardant le contact pour poser des questions quand il le fallait.",
      },
      { type: "h", text: "Compétences acquises" },
      {
        type: "p",
        text: "J'en ressors avec une vision beaucoup plus concrète de ce qu'est monter une infra complète : comment les briques (DNS, pare-feu, VPN, conteneurs, hébergement) s'articulent réellement entre elles. J'ai aussi gagné en autonomie et compris l'importance de bien documenter ce qu'on fait pour pouvoir y revenir plus tard.",
      },
      { type: "h", text: "Bilan — ressenti" },
      {
        type: "p",
        text: "Pour être honnête, ça a été assez difficile par moments : il a fallu s'accrocher et beaucoup chercher. Mais ça en vaut largement la peine pour progresser. C'était un super stage, formateur du début à la fin, qui m'a conforté dans l'envie de continuer dans l'infra et le réseau.",
      },
      { type: "h", text: "Points d'amélioration" },
      {
        type: "ul",
        items: [
          "Prise en main des outils : au début, je perdais du temps sur la configuration de certaines briques (OPNsense, Docker). Une montée en compétence plus rapide dès les premiers jours m'aurait rendu plus efficace.",
          "Documentation : mieux documenter au fil de l'eau, tant que c'est frais, plutôt qu'après coup.",
          "Organisation à distance : en distanciel, mieux structurer mes journées et prioriser les tâches pour ne pas m'éparpiller.",
        ],
      },
      {
        type: "p",
        text: "Au final, une première vraie immersion très positive, avec des enseignements que je compte bien réutiliser pour la suite de mon parcours.",
      },
    ],
  },
  {
    title: "Monter un cluster web + base de données haute disponibilité avec Nginx, Galera et ProxySQL",
    excerpt:
      "Répartir la charge entre 3 serveurs web avec Nginx, et assurer la continuité de service côté base de données avec un cluster MariaDB/Galera piloté par ProxySQL.",
    date: "2026-07-15",
    read: "7 min",
    tag: "Haute dispo",
    stack: ["Nginx", "MariaDB", "Galera", "ProxySQL", "Node.js"],
    repo: "",
    body: [
      {
        type: "p",
        text: "Dans le cadre d'un projet d'infrastructure pour une entreprise fictive, l'objectif était simple à énoncer mais plus exigeant à mettre en œuvre : aucun point de défaillance unique, ni côté serveurs web, ni côté base de données. Voici comment la partie applicative (hors pare-feu et reverse proxy) a été construite : 3 serveurs web derrière un load balancer Nginx, et 3 nœuds MariaDB en cluster Galera pilotés par ProxySQL.",
      },
      { type: "h", text: "Pourquoi ces choix techniques" },
      {
        type: "ul",
        items: [
          "Nginx en reverse proxy / load balancer plutôt qu'Apache2 : plus simple à mettre en place pour créer un cluster non-natif, et cohérent avec le choix de Nginx déjà utilisé sur les serveurs web eux-mêmes — tout repose sur la même techno.",
          "Galera pour le cluster de base de données : il est directement inclus dans MariaDB, ce qui le rend simple à activer sans dépendance externe.",
          "ProxySQL devant Galera : contrairement au cluster web (non-natif, la répartition est gérée entièrement par Nginx), Galera est un cluster natif ; ProxySQL sert ici de load balancer applicatif pour répartir les requêtes SQL entre les nœuds.",
        ],
      },
      { type: "h", text: "Load balancer Nginx devant les serveurs web" },
      {
        type: "p",
        text: "Le reverse proxy n'a besoin que de 3 ports ouverts : 80 (HTTP), 443 (HTTPS), et 22 (SSH, restreint au seul réseau d'administration). Il est placé dans la DMZ.",
      },
      {
        type: "code",
        code: `upstream backend_pool {
    ip_hash;
    server 192.168.1.156:80;
    server 192.168.1.10:80;
    server 192.168.1.134:80;
}
server {
    listen 80;
    server_name _;
    location / {
        proxy_pass http://backend_pool;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_connect_timeout 5s;
        proxy_send_timeout 30s;
        proxy_read_timeout 30s;
    }
}`,
      },
      {
        type: "p",
        text: "La stratégie choisie ici est ip_hash : un même client est toujours redirigé vers le même serveur backend (utile si l'application garde un peu d'état côté serveur), contrairement à least_conn qui privilégie le serveur le moins chargé à chaque requête. Une fois la configuration en place, il ne reste qu'à démarrer le service :",
      },
      {
        type: "code",
        code: `sudo apt update
sudo apt install nginx
systemctl restart nginx`,
      },
      { type: "h", text: "Les 3 serveurs web" },
      {
        type: "p",
        text: "Chaque serveur web est une machine identique, dans le sous-réseau dédié WEB (10.10.20.0/24), qui n'ouvre que les ports 80/443 (et 22 pour l'administration). Le cluster n'a rien de natif : c'est uniquement la présence du load balancer en amont qui assure la continuité de service si l'un des trois tombe.",
      },
      { type: "p", text: "Installation minimale :" },
      {
        type: "code",
        code: `sudo apt update
sudo apt install nginx
systemctl start nginx`,
      },
      {
        type: "p",
        text: "L'application servie ici étant un site de gestion de tickets en HTML/CSS/JS avec un backend Node.js, quelques paquets supplémentaires sont nécessaires :",
      },
      {
        type: "code",
        code: `sudo apt install nodejs npm
npm install express socket.io multer cookie-parser mysql
node /var/www/html/index.js`,
      },
      { type: "h", text: "Cluster de base de données : MariaDB + Galera" },
      {
        type: "p",
        text: "Contrairement au cluster web, celui-ci est natif : les 3 nœuds se comportent comme une seule base de données cohérente, avec réplication synchrone entre eux. Prérequis : un nombre impair de nœuds (ici 3), tous dans le même sous-réseau dédié DATA (172.16.30.0/24), sans besoin d'ouvrir de port entre eux tant qu'ils restent sur ce réseau ; seul ProxySQL a besoin d'y accéder.",
      },
      { type: "p", text: "Installation sur les 3 machines :" },
      {
        type: "code",
        code: `sudo apt-get update
sudo apt-get install mariadb-server`,
      },
      { type: "p", text: "Puis, sur le nœud qui initialisera le cluster :" },
      { type: "code", code: `sudo apt-get install galera-4` },
      {
        type: "p",
        text: "Configuration à ajouter dans /etc/mysql/mariadb.conf.d/60-galera.cnf (avec les IP réelles des 3 nœuds) :",
      },
      {
        type: "code",
        code: `[galera]
wsrep_on = ON
wsrep_provider = /usr/lib/galera/libgalera_smm.so
wsrep_cluster_name = "Galera_Cluster_IT-Connect"
wsrep_cluster_address = gcomm://<ip_noeud1>,<ip_noeud2>,<ip_noeud3>
binlog_format = row
default_storage_engine = InnoDB
innodb_autoinc_lock_mode = 2
innodb_force_primary_key = 1
bind-address = 0.0.0.0
log_error = /var/log/mysql/error-galera.log`,
      },
      { type: "p", text: "Démarrage du cluster (une seule fois, sur le nœud « bootstrap ») :" },
      {
        type: "code",
        code: `sudo systemctl stop mariadb
sudo galera_new_cluster`,
      },
      {
        type: "p",
        text: "Une fois MariaDB relancé sur les deux autres nœuds, une requête permet de vérifier que le cluster est bien complet :",
      },
      { type: "code", code: `SHOW STATUS LIKE 'wsrep_cluster_size';` },
      {
        type: "p",
        text: "Le résultat doit afficher 3, signe que les trois nœuds se voient et répliquent correctement.",
      },
      { type: "h", text: "ProxySQL : répartir les requêtes vers Galera" },
      {
        type: "p",
        text: "ProxySQL vient s'ajouter devant le cluster Galera, dans le même sous-réseau DATA, avec pour seul rôle de répartir les requêtes SQL entre les 3 nœuds et d'accepter les connexions venant des serveurs web.",
      },
      { type: "p", text: "Installation (dépôt officiel) :" },
      {
        type: "code",
        code: `wget -O - 'https://repo.proxysql.com/ProxySQL/proxysql-3.0.x/repo_pub_key' | apt-key add -
sudo apt update
sudo apt install proxysql`,
      },
      {
        type: "p",
        text: "Côté serveurs MariaDB, un compte applicatif dédié est créé pour ProxySQL (avec un mot de passe généré séparément, non repris ici) :",
      },
      {
        type: "code",
        code: `CREATE USER 'user'@'%' IDENTIFIED BY '********';
GRANT ALL PRIVILEGES ON *.* TO 'user'@'<ip_proxysql>' WITH GRANT OPTION;
FLUSH PRIVILEGES;`,
      },
      {
        type: "p",
        text: "Côté ProxySQL, on déclare les 3 nœuds Galera (un groupe « master » et un groupe « slaves » pour la répartition en lecture) :",
      },
      {
        type: "code",
        code: `INSERT INTO mysql_servers (hostgroup_id, hostname, port, max_connections)
VALUES (0, '<ip_noeud1>', 3306, 200);
INSERT INTO mysql_servers (hostgroup_id, hostname, port, max_connections)
VALUES (1, '<ip_noeud2>', 3306, 200);
INSERT INTO mysql_servers (hostgroup_id, hostname, port, max_connections)
VALUES (1, '<ip_noeud3>', 3306, 200);
INSERT INTO mysql_users (username, password, default_hostgroup)
VALUES ('user', '********', 0);
LOAD MYSQL USERS TO RUNTIME;
SAVE MYSQL USERS TO DISK;`,
      },
      {
        type: "p",
        text: "Pour vérifier que tout fonctionne, une requête sur les statistiques de connexion suffit :",
      },
      {
        type: "code",
        code: `SELECT hostgroup, srv_host, srv_port, ConnUsed, ConnOK, ConnERR
FROM stats_mysql_connection_pool;`,
      },
      {
        type: "table",
        head: ["hostgroup", "srv_host", "srv_port", "ConnUsed", "ConnOK", "ConnERR"],
        rows: [
          ["0", "<ip_noeud1>", "3306", "0", "1", "0"],
          ["1", "<ip_noeud2>", "3306", "0", "1", "0"],
          ["1", "<ip_noeud3>", "3306", "0", "1", "0"],
        ],
      },
      {
        type: "p",
        text: "ConnOK = 1 sur chaque ligne confirme que ProxySQL parle bien avec les trois nœuds du cluster.",
      },
      { type: "h", text: "Résultat" },
      {
        type: "p",
        text: "Avec cette architecture, la panne d'un seul serveur web ou d'un seul nœud de base de données n'interrompt plus le service : Nginx redistribue le trafic HTTP restant, et Galera continue de répondre avec les nœuds encore disponibles, ProxySQL absorbant la répartition des requêtes SQL. C'est loin d'être une architecture « enterprise-grade » complète (pas de vraie détection de panne côté Nginx par exemple), mais ça couvre déjà l'essentiel de ce qu'on attend d'une infrastructure tolérante aux pannes à cette échelle.",
      },
    ],
  },
  {
    title: "Ymmo : concevoir un réseau multi-sites d'entreprise",
    excerpt:
      "Segmentation VLAN, routage inter-sites, QoS et priorisation du trafic pour une plateforme immobilière.",
    date: "2026-06-12",
    read: "8 min",
    tag: "Réseau",
    stack: ["VLAN", "QoS", "Routage IPv4", "Cisco Packet Tracer"],
    repo: "", // <-- lien GitHub du projet (optionnel)
    how: [
      "Objectif : relier plusieurs sites d'une agence immobilière avec un réseau segmenté, sécurisé et priorisé selon les usages.",
      "J'ai découpé le réseau en VLAN (postes, serveurs, voix, invités) pour isoler les flux, puis mis en place le routage inter-VLAN et inter-sites.",
      "La QoS priorise la voix et les flux métier critiques. Le tout a été maquetté et validé sous Cisco Packet Tracer avant déploiement.",
    ],
  },
  {
    title: "Mon homelab : Proxmox et virtualisation maison",
    excerpt:
      "Comment j'héberge mes services chez moi : machines virtuelles, conteneurs LXC et organisation du stockage.",
    date: "2026-05-03",
    read: "6 min",
    tag: "Homelab",
    stack: ["Proxmox", "Linux Debian", "Docker"],
    repo: "",
    how: [
      "Point de départ : un serveur à la maison pour héberger mes propres services et m'entraîner sur de vraies infras.",
      "J'installe Proxmox comme hyperviseur, puis je répartis les services entre machines virtuelles et conteneurs LXC selon les besoins en isolation.",
      "Le stockage est organisé par usage, et je documente chaque brique pour pouvoir tout reconstruire rapidement.",
    ],
  },
  {
    title: "Auto-héberger ses services avec Docker",
    excerpt:
      "Réseaux Docker, volumes, reverse proxy et bonnes pratiques pour tout garder sous contrôle.",
    date: "2026-04-18",
    read: "7 min",
    tag: "DevOps",
    stack: ["Docker", "Linux", "Reverse proxy"],
    repo: "",
    how: [
      "L'idée : passer d'installations manuelles à des services conteneurisés, reproductibles et faciles à maintenir.",
      "Je m'appuie sur les réseaux et volumes Docker pour isoler et persister les données, avec un reverse proxy en frontal pour router les domaines.",
      "Résultat : une stack que je peux versionner, sauvegarder et redéployer en quelques commandes.",
    ],
  },
  {
    title: "Débuter avec Wireshark pour analyser son réseau",
    excerpt:
      "Capturer, filtrer et lire du trafic réseau pour diagnostiquer ce qui se passe vraiment sur le fil.",
    date: "2026-03-27",
    read: "5 min",
    tag: "Réseau",
    stack: ["Wireshark", "TCP/IP"],
    repo: "",
    how: [
      "Comprendre un problème réseau commence souvent par regarder les paquets eux-mêmes.",
      "Je montre comment capturer le trafic, appliquer des filtres pertinents et suivre une conversation TCP de bout en bout.",
      "L'objectif : savoir isoler rapidement la source d'une latence ou d'une coupure.",
    ],
  },
];
