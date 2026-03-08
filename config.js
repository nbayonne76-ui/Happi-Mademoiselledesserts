/* ── Language detection ── */
const _happiLang = localStorage.getItem('happi_lang') || 'en';
window._happiLang = _happiLang;

/* ════════════════════════════════════════
   ENGLISH CONFIG
════════════════════════════════════════ */
const CONFIG_EN = {
  client: {
    name:    "Mademoiselle Desserts",
    initials:"MD",
    tagline: "Premium pastry manufacturer · B Corp · 1,900+ people · France · UK · Netherlands",
    colors: { primary: "#1C1C1C", secondary: "#EF3981", accent: "#FF6B9D" }
  },
  ui: {
    s2_title:       "THE CHALLENGE YOU FACE",
    s3_title:       "WHAT H'APPI BRINGS",
    s4_title:       "LIVE DEMO: YOUR BOT IN ACTION",
    s5_title:       "CLIENT REFERENCE: SAME SECTOR",
    s5_testi_label: "Client testimonial available",
    s5_cta_label:   "📞 Contact details available on request",
    lang_toggle:    "🇫🇷 FR"
  },
  cover: {
    headline:  "H'appi for Mademoiselle Desserts",
    sub:       "Automating B2B client service and consumer discovery without changing your existing systems",
    chips: [
      { label: "🤖 Smart B2B Client Bot"               },
      { label: "🌍 Multilingual Consumer Assistant"    },
      { label: "📊 Operations Dashboard"               },
      { label: "🔗 Integration-ready"                  }
    ],
    presenter: "Nicolas Bayonne",
    role:      "Founder, H'appi",
    contact:   "nbayonne76@gmail.com · contact@happi-bot.com",
    date:      "March 2026"
  },
  problems: [
    {
      icon:  "🤝",
      title: "B2B clients expect instant answers",
      desc:  "Foodservice clients — cafés, restaurants, retail chains — have recurring requests: order status, product catalog, seasonal availability, new launches. These inquiries tie up your teams on repetitive tasks across multiple territories, reducing time spent on strategic priorities."
    },
    {
      icon:  "🌍",
      title: "International growth needs multilingual support",
      desc:  "With operations in France, UK and Netherlands, your customer service handles inquiries in multiple languages. Scaling this manually creates inconsistency and delays as you expand — without automation, each new market means proportionally more support headcount."
    },
    {
      icon:  "🔌",
      title: "Consumer product discovery not fully automated",
      desc:  "Direct consumers ask about ingredients, allergens, vegan options and where to buy. Without automation, these basic inquiries consume valuable team time that could be redirected to product innovation, partnerships and strategic growth."
    }
  ],
  features: [
    {
      icon:  "🤖",
      title: "Smart B2B client bot: available 24/7",
      desc:  "Order tracking, product catalog, seasonal availability and new launch updates — available around the clock for your foodservice and retail partners across all territories. Estimated 65–75% reduction in level-1 inquiries reaching your teams.",
      tag:   "En production"
    },
    {
      icon:  "🌍",
      title: "Multilingual consumer assistant",
      desc:  "Product recommendations based on dietary preferences (vegan, allergen-free), ingredient information, store locator, brand storytelling — available in English, French and Dutch. One deployment for all your markets, consistent experience everywhere.",
      tag:   "En production"
    },
    {
      icon:  "📊",
      title: "Operations dashboard & market insights",
      desc:  "Unified view of client requests, product inquiries and consumer trends across all territories. Data that feeds directly into your commercial and product development teams to anticipate demand and accelerate decisions.",
      tag:   "Phase 2"
    }
  ],
  chatbot: {
    name:    "H'appi Bot · Mademoiselle Desserts",
    welcome: "Hello and welcome to Mademoiselle Desserts! 🥐\nI'm your digital assistant. How can I help you today?",
    steps: {
      start: {
        opts: [
          ["📦 Track my order",               "order"],
          ["🥐 Products & allergen info",     "product"],
          ["📍 Find a stockist",              "stockist"],
          ["🤝 B2B partnership",              "b2b"]
        ]
      },
      order: {
        fan: "📦 Track my order",
        bot: "I'll look up your order right away. Please provide your order reference number (format MD-XXXXX) and I'll give you the exact status of your delivery in real time.",
        opts: [
          ["🚚 My order is in transit",       "order_transit"],
          ["↩️ Return or refund",             "order_return"],
          ["← Back",                          "start"]
        ]
      },
      order_transit: {
        fan: "🚚 My order is in transit",
        bot: "Your order is currently being prepared in one of our bakeries. Dispatch is scheduled within 24–48h. You'll receive a confirmation email with your tracking number as soon as it's picked up by our carrier.",
        opts: [["← Back", "start"]]
      },
      order_return: {
        fan: "↩️ Return or refund",
        bot: "I'm sorry to hear that. Our customer service team processes return requests within 48 working hours. Please keep the original packaging and let me know the reason — I'll open your case immediately.",
        opts: [["← Back", "start"]]
      },
      product: {
        fan: "🥐 Products & allergen info",
        bot: "Happy to help! Which product range are you interested in?",
        opts: [
          ["🍩 Mini Beignets (signature)",    "prod_beignets"],
          ["🎂 Cakes & Entremets",            "prod_cakes"],
          ["🥧 Tarts & Mille-feuilles",       "prod_tarts"],
          ["🌱 Vegan & allergen-free",        "prod_vegan"],
          ["← Back",                          "start"]
        ]
      },
      prod_beignets: {
        fan: "🍩 Mini Beignets",
        bot: "Our signature Mini Beignets — light, golden and irresistible. Made fresh daily in our French bakeries, available in classic and seasonal flavours. Perfect for foodservice, retail and events. Contains: gluten, eggs, dairy. Would you like the full spec sheet?",
        opts: [["← Back", "start"]]
      },
      prod_cakes: {
        fan: "🎂 Cakes & Entremets",
        bot: "Our cake range includes the iconic Carrot Cake, Gâteau Basque, Bundt Cakes and seasonal entremets. Premium ingredients, French artisan recipes. Available individually and in foodservice formats. I can send you the full product catalogue by email.",
        opts: [["← Back", "start"]]
      },
      prod_tarts: {
        fan: "🥧 Tarts & Mille-feuilles",
        bot: "Our Rustic Tarts and Swirl Tarts are made with all-butter pastry and seasonal fillings. Our classic Mille-feuille is a bestseller across all markets. Available in individual and sharing formats. Full spec sheet available on request.",
        opts: [["← Back", "start"]]
      },
      prod_vegan: {
        fan: "🌱 Vegan & allergen-free",
        bot: "As a B Corp certified manufacturer, we're proud of our growing vegan and allergen-free range — a key differentiator. Selected cakes and tarts contain no animal products and are clearly labelled. Would you like the dedicated vegan catalogue?",
        opts: [["← Back", "start"]]
      },
      stockist: {
        fan: "📍 Find a stockist",
        bot: "Our products are available across France, UK and Netherlands. Which country are you looking in?",
        opts: [
          ["🇫🇷 France",                      "stockist_fr"],
          ["🇬🇧 United Kingdom",              "stockist_uk"],
          ["🇳🇱 Netherlands",                 "stockist_nl"],
          ["← Back",                          "start"]
        ]
      },
      stockist_fr: {
        fan: "🇫🇷 France",
        bot: "In France, our products are available in premium retail, specialty food stores and selected cafés and restaurants. Visit mademoiselledesserts.com for the full stockist list near you, or contact our French commercial team directly.",
        opts: [["← Back", "start"]]
      },
      stockist_uk: {
        fan: "🇬🇧 United Kingdom",
        bot: "Our UK operations distribute to selected retail and foodservice partners. For the full list of UK stockists, visit mademoiselledesserts.com or contact our UK team directly.",
        opts: [["← Back", "start"]]
      },
      stockist_nl: {
        fan: "🇳🇱 Netherlands",
        bot: "Our Netherlands range is available through premium food retail and specialty distributors. Contact our local team via mademoiselledesserts.com for the full stockist list.",
        opts: [["← Back", "start"]]
      },
      b2b: {
        fan: "🤝 B2B partnership",
        bot: "Great to hear you're interested in partnering with us! What type of business are you?",
        opts: [
          ["☕ Café / Restaurant / Foodservice","b2b_foodservice"],
          ["🏪 Retail / Grocery / Specialty",  "b2b_retail"],
          ["🌍 International distributor",     "b2b_distrib"],
          ["← Back",                           "start"]
        ]
      },
      b2b_foodservice: {
        fan: "☕ Café / Restaurant / Foodservice",
        bot: "Our mini beignets and pastry range are a perfect fit for café and restaurant menus. I'm passing your details to our foodservice commercial team — they'll contact you within 24 hours with our B2B catalogue, pricing and minimum order quantities.",
        opts: [["← Back", "start"]]
      },
      b2b_retail: {
        fan: "🏪 Retail / Grocery / Specialty",
        bot: "We work with premium retail and specialty food partners across Europe. Our team will share retail formats, shelf-life specs and logistics information. Expect a call from our commercial team within 48 hours.",
        opts: [["← Back", "start"]]
      },
      b2b_distrib: {
        fan: "🌍 International distributor",
        bot: "We're actively expanding our international footprint. Our export team would love to discuss your market and how we can support your distribution. I'm forwarding your details right now — expect contact within 24 hours.",
        opts: [["← Back", "start"]]
      }
    }
  },
  testimonial: {
    show: true,
    client: { name: "Innatural Shop", initials: "IS", sector: "Natural beauty e-commerce · Hair care · Bilingual FR/AR" },
    built: [
      { icon: "🤖", title: "Intelligent e-commerce chatbot",       desc: "Product recommendations, 24/7 customer support and order tracking — powered by Claude AI" },
      { icon: "🌍", title: "Bilingual deployment French/Arabic",   desc: "Adaptive RTL/LTR interface, integrated in 1 line of code on the existing website" }
    ],
    quote:   "A custom-built e-commerce bot, live in production, capable of recommending products based on hair type, handling customer support and qualifying leads — without any website rebuild.",
    contact: "Client reference Innatural Shop · E-commerce bot in production",
    note:    "Live demo available on request · Documented source code"
  },
  cta: {
    title:    "Next step",
    subtitle: "30 minutes for a personalised demo on your B2B client and consumer use cases",
    chips: [
      "📅 Demo on your real data",
      "🔗 API integration to your e-commerce/CRM",
      "📋 Client reference available",
      "🚀 Go-live in 4 weeks"
    ],
    contact: {
      name:   "Nicolas Bayonne",
      role:   "Founder, H'appi",
      email:  "nbayonne76@gmail.com",
      email2: "contact@happi-bot.com",
      site:   "happi-bot.com"
    }
  }
};

/* ════════════════════════════════════════
   FRENCH CONFIG
════════════════════════════════════════ */
const CONFIG_FR = {
  client: {
    name:    "Mademoiselle Desserts",
    initials:"MD",
    tagline: "Fabricant de pâtisserie premium · B Corp · 1 900+ collaborateurs · France · Royaume-Uni · Pays-Bas",
    colors: { primary: "#1C1C1C", secondary: "#EF3981", accent: "#FF6B9D" }
  },
  ui: {
    s2_title:       "LE DÉFI QUE VOUS RENCONTREZ",
    s3_title:       "CE QUE H'APPI APPORTE",
    s4_title:       "DÉMO LIVE : VOTRE BOT EN ACTION",
    s5_title:       "RÉFÉRENCE CLIENT : MÊME SECTEUR",
    s5_testi_label: "Témoignage client disponible",
    s5_cta_label:   "📞 Coordonnées disponibles sur demande",
    lang_toggle:    "🇬🇧 EN"
  },
  cover: {
    headline:  "H'appi pour Mademoiselle Desserts",
    sub:       "Automatiser le service client B2B et la découverte produit sans toucher à votre SI existant",
    chips: [
      { label: "🤖 Bot clients B2B intelligent"        },
      { label: "🌍 Assistant consommateurs multilingue" },
      { label: "📊 Dashboard opérateur"                },
      { label: "🔗 Intégration e-commerce/CRM"         }
    ],
    presenter: "Nicolas Bayonne",
    role:      "Fondateur H'appi",
    contact:   "nbayonne76@gmail.com · contact@happi-bot.com",
    date:      "Mars 2026"
  },
  problems: [
    {
      icon:  "🤝",
      title: "Clients B2B qui attendent des réponses immédiates",
      desc:  "Les clients foodservice (cafés, restaurants, grandes surfaces) ont des demandes récurrentes : suivi de commande, catalogue produits, disponibilités saisonnières. Ces sollicitations mobilisent vos équipes sur des tâches répétitives sur plusieurs territoires."
    },
    {
      icon:  "🌍",
      title: "Expansion internationale sans support multilingue scalable",
      desc:  "Avec des opérations en France, au Royaume-Uni et aux Pays-Bas, votre service client traite des demandes en plusieurs langues. Scaler cela manuellement crée des incohérences et des délais à mesure que vous vous développez."
    },
    {
      icon:  "🔌",
      title: "Découverte produit consommateur non automatisée",
      desc:  "Les consommateurs posent des questions sur les ingrédients, les allergènes, les options vegan et les points de vente. Sans automatisation, ces demandes basiques consomment un temps précieux qui pourrait être consacré à l'innovation produit."
    }
  ],
  features: [
    {
      icon:  "🤖",
      title: "Bot clients B2B : disponible 24h/24",
      desc:  "Suivi de commande, catalogue produits, disponibilités saisonnières et nouveaux lancements — disponible en continu pour vos partenaires foodservice et retail sur tous vos territoires. Réduction estimée de 65–75% des sollicitations de niveau 1.",
      tag:   "En production"
    },
    {
      icon:  "🌍",
      title: "Assistant consommateurs multilingue",
      desc:  "Recommandations produits selon les préférences alimentaires (vegan, sans allergènes), informations ingrédients, localisateur de points de vente, storytelling de marque — disponible en français, anglais et néerlandais. Un seul déploiement pour tous vos marchés.",
      tag:   "En production"
    },
    {
      icon:  "📊",
      title: "Dashboard opérateur & insights marché",
      desc:  "Vue unifiée des demandes clients, questions produits et tendances consommateurs sur tous les territoires. Des données qui alimentent directement vos équipes commerciales et R&D pour anticiper la demande.",
      tag:   "Phase 2"
    }
  ],
  chatbot: {
    name:    "Bot H'appi · Mademoiselle Desserts",
    welcome: "Bonjour et bienvenue chez Mademoiselle Desserts ! 🥐\nJe suis votre assistant digital. Comment puis-je vous aider ?",
    steps: {
      start: {
        opts: [
          ["📦 Suivre ma commande",            "order"],
          ["🥐 Produits & allergènes",         "product"],
          ["📍 Trouver un point de vente",     "stockist"],
          ["🤝 Partenariat B2B",              "b2b"]
        ]
      },
      order: {
        fan: "📦 Suivre ma commande",
        bot: "Je consulte votre commande en temps réel. Indiquez-moi votre référence (format MD-XXXXX) et je vous donne l'état exact de votre livraison.",
        opts: [
          ["🚚 Ma commande est en transit",    "order_transit"],
          ["↩️ Retour ou remboursement",       "order_return"],
          ["← Retour",                         "start"]
        ]
      },
      order_transit: {
        fan: "🚚 Ma commande est en transit",
        bot: "Votre commande est en cours de préparation dans l'une de nos boulangeries. L'expédition est prévue sous 24 à 48h. Vous recevrez un email de confirmation avec votre numéro de suivi dès la prise en charge par notre transporteur.",
        opts: [["← Retour", "start"]]
      },
      order_return: {
        fan: "↩️ Retour ou remboursement",
        bot: "Je suis désolé pour ce désagrément. Notre service client traite les demandes de retour sous 48h ouvrées. Conservez l'emballage d'origine et indiquez-moi le motif — j'ouvre votre dossier immédiatement.",
        opts: [["← Retour", "start"]]
      },
      product: {
        fan: "🥐 Produits & allergènes",
        bot: "Avec plaisir ! Quelle gamme vous intéresse ?",
        opts: [
          ["🍩 Mini Beignets (signature)",     "prod_beignets"],
          ["🎂 Gâteaux & Entremets",           "prod_cakes"],
          ["🥧 Tartes & Mille-feuilles",       "prod_tarts"],
          ["🌱 Vegan & sans allergènes",       "prod_vegan"],
          ["← Retour",                         "start"]
        ]
      },
      prod_beignets: {
        fan: "🍩 Mini Beignets",
        bot: "Nos Mini Beignets signature — légers, dorés et irrésistibles. Fabriqués chaque jour dans nos boulangeries françaises, disponibles en versions classique et saisonnière. Parfaits pour le foodservice, la vente au détail et les événements. Contient : gluten, œufs, lait.",
        opts: [["← Retour", "start"]]
      },
      prod_cakes: {
        fan: "🎂 Gâteaux & Entremets",
        bot: "Notre gamme inclut le Carrot Cake iconique, le Gâteau Basque, les Bundt Cakes et les entremets saisonniers. Ingrédients premium, recettes artisanales françaises. Disponibles en formats individuels et foodservice. Je peux vous envoyer le catalogue complet par email.",
        opts: [["← Retour", "start"]]
      },
      prod_tarts: {
        fan: "🥧 Tartes & Mille-feuilles",
        bot: "Nos Tartes Rustiques et Swirl Tarts sont réalisées avec une pâte tout beurre et des garnitures de saison. Notre Mille-feuille classique est un bestseller sur tous nos marchés. Disponibles en formats individuels et à partager.",
        opts: [["← Retour", "start"]]
      },
      prod_vegan: {
        fan: "🌱 Vegan & sans allergènes",
        bot: "En tant que fabricant certifié B Corp, nous sommes fiers de notre gamme vegan et sans allergènes — un différenciateur clé. Une sélection de gâteaux et tartes sans produits animaux, clairement étiquetée. Souhaitez-vous le catalogue dédié ?",
        opts: [["← Retour", "start"]]
      },
      stockist: {
        fan: "📍 Trouver un point de vente",
        bot: "Nos produits sont disponibles en France, au Royaume-Uni et aux Pays-Bas. Dans quel pays cherchez-vous ?",
        opts: [
          ["🇫🇷 France",                       "stockist_fr"],
          ["🇬🇧 Royaume-Uni",                  "stockist_uk"],
          ["🇳🇱 Pays-Bas",                     "stockist_nl"],
          ["← Retour",                         "start"]
        ]
      },
      stockist_fr: {
        fan: "🇫🇷 France",
        bot: "En France, nos produits sont disponibles dans les enseignes premium, les épiceries fines et une sélection de cafés et restaurants. Rendez-vous sur mademoiselledesserts.com pour la liste complète des points de vente près de chez vous.",
        opts: [["← Retour", "start"]]
      },
      stockist_uk: {
        fan: "🇬🇧 Royaume-Uni",
        bot: "Nos opérations au Royaume-Uni distribuent auprès de partenaires retail et foodservice sélectionnés. Consultez mademoiselledesserts.com ou contactez notre équipe UK pour la liste complète.",
        opts: [["← Retour", "start"]]
      },
      stockist_nl: {
        fan: "🇳🇱 Pays-Bas",
        bot: "Notre gamme aux Pays-Bas est disponible via le retail premium et les distributeurs spécialisés. Contactez notre équipe locale via mademoiselledesserts.com pour la liste complète.",
        opts: [["← Retour", "start"]]
      },
      b2b: {
        fan: "🤝 Partenariat B2B",
        bot: "Ravi de votre intérêt ! Quel type d'activité représentez-vous ?",
        opts: [
          ["☕ Café / Restaurant / Foodservice","b2b_foodservice"],
          ["🏪 Retail / Grande surface / Épicerie","b2b_retail"],
          ["🌍 Distributeur international",    "b2b_distrib"],
          ["← Retour",                         "start"]
        ]
      },
      b2b_foodservice: {
        fan: "☕ Café / Restaurant / Foodservice",
        bot: "Nos mini beignets et notre gamme pâtisserie sont parfaitement adaptés aux menus des cafés et restaurants. Je transmets vos coordonnées à notre équipe commerciale foodservice — elle vous contacte sous 24h avec notre catalogue B2B et les conditions tarifaires.",
        opts: [["← Retour", "start"]]
      },
      b2b_retail: {
        fan: "🏪 Retail / Grande surface / Épicerie",
        bot: "Nous travaillons avec des partenaires retail premium et épiceries fines à travers l'Europe. Notre équipe vous transmet les formats retail, les DLC et les informations logistiques. Un commercial vous recontacte sous 48h.",
        opts: [["← Retour", "start"]]
      },
      b2b_distrib: {
        fan: "🌍 Distributeur international",
        bot: "Nous développons activement notre présence internationale. Notre équipe export serait ravie d'échanger sur votre marché et les modalités de distribution. Je transmets votre demande maintenant — contact sous 24h.",
        opts: [["← Retour", "start"]]
      }
    }
  },
  testimonial: {
    show: true,
    client: { name: "Innatural Shop", initials: "IS", sector: "E-commerce beauté naturelle · Produits capillaires · Bilingue FR/AR" },
    built: [
      { icon: "🤖", title: "Chatbot e-commerce intelligent",        desc: "Recommandations produits, support client 24/7 et suivi de commande — propulsé par Claude AI" },
      { icon: "🌍", title: "Déploiement bilingue Français/Arabe",   desc: "Interface adaptative RTL/LTR, intégration en 1 ligne de code sur le site existant" }
    ],
    quote:   "Un bot e-commerce sur mesure, opérationnel, capable de recommander des produits, de gérer le SAV et de qualifier des leads — sans aucune refonte du site.",
    contact: "Référence client Innatural Shop · Bot e-commerce en production",
    note:    "Démonstration live disponible sur demande · Code source documenté"
  },
  cta: {
    title:    "Prochaine étape",
    subtitle: "30 minutes pour une démo personnalisée sur vos cas d'usage B2B et consommateurs",
    chips: [
      "📅 Démo sur vos données réelles",
      "🔗 Intégration API votre e-commerce/CRM",
      "📋 Référence client disponible",
      "🚀 Déploiement en 4 semaines"
    ],
    contact: {
      name:   "Nicolas Bayonne",
      role:   "Fondateur H'appi",
      email:  "nbayonne76@gmail.com",
      email2: "contact@happi-bot.com",
      site:   "happi-bot.com"
    }
  }
};

/* ── Active config ── */
window.CONFIG = _happiLang === 'fr' ? CONFIG_FR : CONFIG_EN;
