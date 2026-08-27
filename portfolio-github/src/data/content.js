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
  "Serveur média auto-hébergé sous Debian (VM docker-tf) qui fait tourner 14 conteneurs Docker, organisés en trois couches : téléchargement → automatisation → diffusion. Les demandes passent par Jellyseerr (et un bot Discord), l'automatisation *arr (Prowlarr, Radarr, Sonarr, Bazarr) pilote les téléchargements via SABnzbd (Usenet) et qBittorrent isolé dans un tunnel ProtonVPN (gluetun), puis tout est rangé dans /mnt/medias et diffusé par Jellyfin. L'ensemble est orchestré via Portainer et exposé par Traefik.";

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

// Cycle complet d'une demande (de la demande à la lecture).
export const HOMELAB_FLOW = [
  "Demande — un utilisateur demande un film ou une série via Jellyseerr (ou le bot Discord).",
  "Recherche — Radarr (films) ou Sonarr (séries) interroge les indexeurs via Prowlarr.",
  "Téléchargement — le job part vers qBittorrent (torrent, via VPN) ou SABnzbd (Usenet) selon la source.",
  "Rangement — une fois terminé, le fichier est renommé et déplacé dans /mnt/medias/films ou /series.",
  "Sous-titres — Bazarr détecte le nouveau média et récupère les sous-titres.",
  "Diffusion — Jellyfin indexe le fichier et le rend disponible au streaming.",
  "Notification — Discarr prévient sur Discord que le contenu est prêt.",
];

// Points techniques que je mets en avant.
export const HOMELAB_NOTES = [
  {
    title: "Torrent isolé en VPN",
    text: "qBittorrent passe à travers gluetun (kill-switch ProtonVPN WireGuard) : si le VPN tombe, le trafic est coupé et l'IP réelle n'est jamais exposée. SABnzbd (Usenet) est déjà chiffré en SSL.",
  },
  {
    title: "Import instantané (hardlinks)",
    text: "Sonarr, Radarr et SABnzbd partagent le même dossier downloads/ via un montage /data commun — hardlinks, pas de copie inutile, import immédiat.",
  },
  {
    title: "Diffusion privée",
    text: "Jellyfin n'est accessible que via VPN, le DNS interne pointant vers 192.168.1.50.",
  },
  {
    title: "Stockage",
    text: "~3,4 To dédiés aux médias (/mnt/medias), les données Docker sur /home.",
  },
];

// Détail des services par couche (tableaux).
export const HOMELAB_SERVICES = [
  {
    layer: "Diffusion",
    rows: [
      ["Jellyfin", ":8096", "Serveur de streaming (« Netflix perso »), accessible uniquement via VPN."],
      ["Jellyseerr", ":5055", "Interface de demandes de films/séries, transmises à Radarr et Sonarr."],
    ],
  },
  {
    layer: "Téléchargement",
    rows: [
      ["gluetun + qBittorrent", ":8081", "Client torrent encapsulé dans un tunnel ProtonVPN WireGuard (kill-switch)."],
      ["SABnzbd", ":8080", "Téléchargement Usenet (provider Frugal)."],
    ],
  },
  {
    layer: "Automatisation *arr",
    rows: [
      ["Radarr", ":7878", "Films : recherche, téléchargement, renommage, rangement dans /mnt/medias/films."],
      ["Sonarr", ":8989", "Idem pour les séries → /mnt/medias/series."],
      ["Prowlarr", ":9696", "Gestionnaire d'indexeurs centralisé pour Radarr et Sonarr."],
      ["Bazarr", ":6767", "Téléchargement automatique des sous-titres."],
    ],
  },
  {
    layer: "Infra & bots",
    rows: [
      ["Traefik", ":80/:443", "Reverse proxy : noms de domaine et HTTPS pour les services."],
      ["Portainer", ":9443", "Interface web de gestion Docker."],
      ["Homarr", ":7575", "Dashboard d'accueil regroupant les services."],
      ["jellyseerr-discord-bot", ":5000", "Bot Discord maison (Python) lié à Jellyseerr."],
      ["Discarr", "—", "Notifications Discord sur les téléchargements."],
    ],
  },
];

// Répartition du stockage.
export const HOMELAB_STORAGE = {
  head: ["Volume", "Capacité", "Usage", "Contenu"],
  rows: [
    ["/mnt/medias", "3,4 To", "311 Go", "films/, series/, downloads/ (partagé via /data), configs"],
    ["/home", "60 Go", "16 %", "Données Docker (qbit-vpn, sabnzbd, homarr…)"],
    ["Racine système", "9,8 Go", "58 %", "OS Debian"],
  ],
};

// Points de vigilance / bonnes pratiques.
export const HOMELAB_VIGILANCE = [
  "Supervision de l'espace disque (logs, images Docker) avec un docker system prune périodique.",
  "Interfaces d'administration (Portainer, dashboard Traefik, *arr) non exposées publiquement ; Jellyfin isolé derrière VPN.",
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
      { type: "h", text: "Ce que ça m'apporte" },
      {
        type: "p",
        text: "Ce projet est une vraie synthèse de tout ce que j'apprends : réseau, système, sécurité et travail d'équipe réunis sur une seule infrastructure. Il me force à comprendre comment les briques s'imbriquent (segmentation, pare-feu, PKI, supervision) plutôt que de les voir isolément. La rotation des rôles (Architecte Infra, Ingénieur Sécurité, Analyste SOC) me fait toucher à chaque métier, et l'exercice Red Team / Blue Team montre concrètement pourquoi on durcit une infra. C'est exactement le type de compétences que je veux mettre en avant pour mon alternance en infra & cloud.",
      },
      { type: "h", text: "Ressenti" },
      {
        type: "p",
        text: "C'est un projet ambitieux et exigeant : il y a beaucoup de briques à faire tenir ensemble, et il faut souvent chercher, tester et recommencer. Mais c'est aussi ce qui le rend passionnant — voir une infra complète prendre forme, la sécuriser puis la mettre à l'épreuve est très gratifiant. Le travail en équipe et la documentation au fil de l'eau sont essentiels pour ne pas se perdre, et j'en ressors avec beaucoup plus de confiance sur les sujets d'infrastructure et de cybersécurité.",
      },
    ],
  },
  {
    title: "Stage — retour d'expérience chez YoukiCorp",
    excerpt:
      "Retour sur mon stage en distanciel chez YoukiCorp (auto-entrepreneur, infra maison de niveau pro) : protocoles de mail, Docker, réseau, OPNsense, Proxmox — et beaucoup de documentation.",
    date: "2025",
    read: "6 min",
    tag: "Stage",
    stack: ["Docker", "Proxmox", "OPNsense", "Réseau / pare-feu", "Proton Mail", "NetBird (VPN)"],
    repo: "",
    body: [
      {
        type: "p",
        text: "Petit retour sur mon stage chez YoukiCorp — chez une personne qui gère sa propre entreprise et dispose d'une infrastructure personnelle digne d'une vraie société. Le stage s'est déroulé en distanciel, ce qui nous a permis de travailler plus sereinement, sans se prendre la tête.",
      },
      { type: "h", text: "Présentation de l'entreprise" },
      {
        type: "p",
        text: "YoukiCorp est spécialisée dans les infrastructures informatiques, le cloud et les services managés. Derrière, c'est un auto-entrepreneur qui a monté chez lui une infrastructure impressionnante : plusieurs serveurs, de quoi faire tourner un véritable cluster. Autant dire un terrain de jeu idéal pour apprendre sur du concret.",
      },
      { type: "h", text: "Les outils du quotidien" },
      {
        type: "p",
        text: "On accédait à son infrastructure à distance via un VPN (NetBird). Chacun disposait aussi de son propre serveur, ce qui nous permettait de tester et d'expérimenter sans limite — parfait pour apprendre en cassant puis en reconstruisant, sans crainte de tout casser en production.",
      },
      { type: "h", text: "Une journée type" },
      {
        type: "p",
        text: "La journée commençait par un récap matinal : chaque matin, on faisait le point sur ce qu'on avait fait la veille. Au début, on passait beaucoup de temps à lire de la documentation et des blogs pour bien comprendre les sujets avant de mettre les mains dedans.",
      },
      { type: "h", text: "Ce que j'ai fait" },
      {
        type: "p",
        text: "On a commencé par les protocoles de mail — un sujet que j'ai trouvé vraiment intéressant. J'ai notamment mis en place une adresse e-mail plus sécurisée avec l'aide de Proton Mail, et découvert les nombreux protocoles qui entourent la messagerie. On a documenté tout ça et expérimenté concrètement avec une adresse et un nom de domaine.",
      },
      {
        type: "p",
        text: "Les deux semaines suivantes ont été rythmées par la montée en compétences : notions de Docker, retour sur les bases du réseau, bonne utilisation d'OPNsense et de Proxmox — des compétences qui m'ont directement resservi sur mes projets personnels.",
      },
      { type: "h", text: "Compétences acquises" },
      {
        type: "p",
        text: "Sur une période aussi courte, je n'ai pas eu accès à tout d'un coup : les accès se débloquaient progressivement, à mesure que la confiance et la connaissance des procédures internes s'installaient.",
      },
      {
        type: "p",
        text: "L'essentiel de mon apprentissage s'est fait côté théorique : beaucoup de lecture de documentation, de procédures internes et de formations sur les outils utilisés par mon maître de stage. J'en retiens surtout une meilleure compréhension globale, l'importance de bien documenter chaque notion apprise et chaque obstacle rencontré, et le fait qu'un même problème peut avoir des causes très différentes. Ça m'a aussi appris à mieux documenter par moi-même, sans forcément m'aider d'une IA.",
      },
      { type: "h", text: "Les difficultés rencontrées" },
      {
        type: "ul",
        items: [
          "Le rythme : le stage ne durait que 3 semaines, il fallait donc assimiler beaucoup de choses en peu de temps.",
          "Les règles de pare-feu, sur lesquelles j'ai eu du mal au début.",
          "L'accès réseau à certaines machines, pas toujours évident à mettre en place.",
        ],
      },
      { type: "h", text: "Bilan — ressenti" },
      {
        type: "p",
        text: "Franchement, un super stage. Ça a été assez difficile par moments, mais ça en vaut largement la peine pour progresser. Le distanciel nous a permis de moins nous prendre la tête et de travailler dans de bonnes conditions. J'en ressors avec plus d'autonomie, une meilleure méthode de documentation, et beaucoup plus de confiance sur les sujets d'infrastructure et de réseau — hâte d'appliquer tout ça pour la suite.",
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
    title: "Mon homelab : Proxmox et virtualisation maison",
    excerpt:
      "Comment j'héberge mes services chez moi : machines virtuelles, conteneurs LXC et organisation du stockage.",
    date: "2026-05-03",
    read: "7 min",
    tag: "Homelab",
    stack: ["Proxmox", "Debian", "Docker", "LXC", "Traefik", "VPN"],
    repo: "",
    body: [
      {
        type: "p",
        text: "Mon homelab, c'est mon terrain d'apprentissage : un serveur à la maison qui me permet d'héberger mes propres services et de m'entraîner sur de vraies infrastructures, sans risque pour de la production.",
      },
      { type: "h", text: "Proxmox comme hyperviseur" },
      {
        type: "p",
        text: "Tout repose sur Proxmox, qui me permet de faire tourner plusieurs environnements isolés sur une seule machine : des machines virtuelles (VM) pour les gros services, et des conteneurs LXC, plus légers, pour les services simples. Je choisis l'un ou l'autre selon le besoin d'isolation et de ressources.",
      },
      { type: "h", text: "Ce que j'y fais tourner" },
      {
        type: "p",
        text: "La pièce maîtresse est une VM Debian (docker-tf) qui héberge une stack média complète en Docker (14 conteneurs) : téléchargement, automatisation *arr et diffusion via Jellyfin — le tout détaillé dans la section Homelab de ce site. À côté, je monte d'autres VM et conteneurs LXC pour tester des outils, du DNS interne ou de nouveaux services avant de les adopter.",
      },
      { type: "h", text: "Organisation du stockage" },
      {
        type: "p",
        text: "Le stockage est séparé par usage : un grand volume /mnt/medias (~3,4 To) pour les médias et les données des services, et /home pour les données Docker. Un montage partagé /data permet aux services de téléchargement et d'automatisation de travailler sur les mêmes fichiers, via des hardlinks — pas de copie inutile et un import immédiat.",
      },
      { type: "h", text: "Réseau & accès" },
      {
        type: "p",
        text: "L'accès aux services passe par un reverse proxy (Traefik) et un VPN pour les connexions distantes, avec une résolution interne assurée par un DNS local. L'objectif : garder tout facilement accessible pour moi, mais fermé depuis l'extérieur.",
      },
      { type: "h", text: "Ce que ça m'apporte" },
      {
        type: "p",
        text: "C'est ce qui me fait le plus progresser : je touche à la virtualisation, au réseau, au stockage, à Docker et à la supervision, et surtout j'apprends à documenter et à reconstruire proprement. Beaucoup de ce que j'y expérimente me ressert directement en cours et en stage.",
      },
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
