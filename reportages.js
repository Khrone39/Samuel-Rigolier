/* ============================================================
   CONTENU DU PORTFOLIO — c'est le seul fichier à modifier.
   Modifie un titre ou un résumé : change le texte entre guillemets.
   Ajoute un reportage : copie un bloc { ... }, colle-le dans la liste
   (le premier de la liste s'affiche en grand), sans oublier la virgule.
   Ajoute une vidéo : dépose-la dans le dossier "videos" du dépôt,
   puis écris son chemin, par exemple  video: "videos/ma-video.mp4"
   Laisse  video: ""  s'il n'y a pas encore de vidéo.
   ============================================================ */

// Vidéo affichée tout en haut de la page ("" = aucune)
window.VIDEO_A_LA_UNE = "";

window.REPORTAGES = [
  { cat: "Actualité", title: "Au cœur de la ville, une journée en mouvement", date: "2026",
    text: "Reportage de terrain mêlant interviews, ambiance sonore et séquences d’observation pour comprendre un événement au plus près.", video: "" },
  { cat: "Actualité", title: "Quand le terrain devient le sujet", date: "2025",
    text: "Rencontres et témoignages autour d’une actualité locale, avec un traitement qui privilégie la parole des personnes concernées.", video: "" },
  { cat: "Magazines", title: "Les métiers que l’on ne voit pas", date: "2025",
    text: "Un format magazine à hauteur de celles et ceux qui font vivre les coulisses d’un territoire.", video: "" },
  { cat: "Magazines", title: "Portrait : une passion en héritage", date: "2024",
    text: "Portrait audiovisuel construit autour d’archives, de gestes et d’une interview au long cours.", video: "" },
  { cat: "École", title: "Dans les coulisses d’une rédaction", date: "2024",
    text: "Immersion dans une journée d’école et découverte des étapes qui transforment une idée en sujet.", video: "" },
  { cat: "École", title: "Apprendre à raconter en images", date: "2023",
    text: "Retour d’expérience sur un projet collectif mêlant prise de son, tournage, montage et écriture.", video: "" },
  { cat: "Chroniques & plateaux", title: "Chronique : le regard de la semaine", date: "2026",
    text: "Une chronique courte, incarnée et rythmée, pensée pour ouvrir le débat et donner envie d’écouter.", video: "" },
  { cat: "Chroniques & plateaux", title: "Plateau : débat et décryptage", date: "2025",
    text: "Animation d’un échange en direct avec plusieurs intervenants : relances, contexte et synthèse.", video: "" }
];
