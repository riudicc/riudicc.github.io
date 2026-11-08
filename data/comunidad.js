/* Datos de la comunidad: equipo, producción científica, blog, redes y testimonios.
   - Lo que va después del signo igual y antes del ";" final es JSON válido.
   - EQUIPO: "institucion" es el identificador de la universidad (ver "slug" en data/contenido.js)
     o "red" para cargos de toda la red. "fuente" es la noticia de donde salió el dato.
     Cambiar "confirmado" a true cuando la universidad lo confirme. "correo" es opcional.
     "etapa": "pionera" marca a quien ya no está en el cargo pero se le reconoce su aporte
     (aparece en el bloque de reconocimiento, no como contacto actual).
   - BUZONES: correos institucionales del proyecto en cada universidad (no personales).
     Los correos personales en "correo" solo se llenan cuando la persona acepta que se publiquen.
   - OBSERVATORIO_EQUIPO: quién coordina el observatorio. "rol" puede ser director, europa, caribe
     o america_latina (los nombres de cada rol, en los cuatro idiomas, están en data/interfaz.js: obs_rol_...).
     El nombre debe coincidir con el de EQUIPO para que el cargo aparezca también en su universidad.
   - ENTREGABLES: número de entregables del proyecto que aparece en la portada; actualizar "total" cuando cambie.
   - MICRO_OBSERVATORIOS: enlace al micro-observatorio de cada universidad, por "institucion".
     Los que tienen datos cargados en data/observatorios.js también aparecen solos.
   - PRODUCCIÓN: un bloque por publicación:
     {"titulo": "...", "autores": ["Nombre Apellido"], "anio": 2027, "tipo": "Artículo",
      "revista_evento": "Nombre de la revista o congreso", "enlace": "https://doi.org/...",
      "temas": ["internacionalización", "inclusión"], "idioma": "es"}
   - BLOG: un bloque por entrada; se publica solo con "permiso": true:
     {"slug": "linares-feria-2025", "titulo": {"es": "...", "en": "..."}, "autor": "Nombre",
      "cargo": "...", "institucion": "universidad_del_azuay", "evento": "...", "fecha": "2025-10-20",
      "extracto": {"es": "..."}, "texto": {"es": "<p>...</p>"}, "permiso": true}
   - TESTIMONIOS: se publican solo con "permiso": true (el formulario del sitio genera el bloque).
     {"nombre": "...", "institucion": "universidad_autonoma_santo_domingo", "carrera": "Educación",
      "texto": "...", "foto": "img/testimonios/nombre-apellido.jpg", "permiso": true}
     La foto va en img/testimonios/ (horizontal, unos 800 px de ancho). Sin foto se dibuja una ilustración.
     Los bloques con "ejemplo": true son de muestra (texto de relleno): se ocultan solos en cuanto
     haya un testimonio real publicado, y se pueden borrar.
   - REDES: perfiles oficiales; aparecen como botones en el pie y en Contacto (red: facebook, linkedin, instagram).
   - Si linkedin_proyecto queda vacío, la página muestra solo la búsqueda de #riudicc. */
/* "menciones": publicaciones de universidades u otras cuentas que mencionan a RIUDICC.
   red: linkedin | facebook | instagram; autor: quién publicó; fecha: AAAA-MM-DD; titulo: título de la publicación; imagen: miniatura en img/menciones/; url: enlace.
   Solo se muestran las que tienen título e imagen. */
window.COMUNIDAD={
 "linkedin_proyecto": "https://www.linkedin.com/company/riudicc",
 "hashtag": "riudicc",
 "correo_red": "info@riudicc.org",
 "correo_comunidad": "",
 "equipo": [
  {
   "nombre": "José Antonio Ruiz San Román",
   "institucion": "universidad_complutense_madrid",
   "cargo": {
    "es": "Director de RIUDICC"
   },
   "correo": "",
   "fuente": "segundo-encuentro",
   "confirmado": false
  },
  {
   "nombre": "Lola Prieto",
   "institucion": "universidad_complutense_madrid",
   "cargo": {
    "es": "Unidad de Proyectos Educativos Europeos y Oficina de Relaciones Internacionales"
   },
   "correo": "",
   "fuente": "buenas-expectativas-america-latina-caribe-programas-europeos-movilidad",
   "confirmado": false
  },
  {
   "nombre": "María Teresa García Fernández",
   "institucion": "universidad_complutense_madrid",
   "cargo": {},
   "correo": "",
   "fuente": "",
   "confirmado": false
  },
  {
   "nombre": "José Carlos Cámara",
   "institucion": "universidad_complutense_madrid",
   "cargo": {},
   "correo": "",
   "fuente": "",
   "confirmado": false
  },
  {
   "nombre": "Sebastiano Nucera",
   "institucion": "universita_studi_messina",
   "cargo": {},
   "correo": "",
   "fuente": "",
   "confirmado": false
  },
  {
   "nombre": "Lucía Linares Diamant",
   "institucion": "red",
   "cargo": {
    "es": "Pionera de RIUDICC. Impulsó la red desde sus inicios como Responsable de Desarrollo y Capacidades.",
    "en": "RIUDICC pioneer. She drove the network from its beginnings as Head of Development and Capacity Building.",
    "it": "Pioniera di RIUDICC. Ha promosso la rete fin dai suoi inizi come Responsabile di Sviluppo e Capacità.",
    "fr": "Pionnière de RIUDICC. Elle a porté le réseau dès ses débuts comme responsable du Développement et des Capacités."
   },
   "correo": "",
   "fuente": "segundo-encuentro",
   "confirmado": false,
   "etapa": "pionera"
  },
  {
   "nombre": "Marcelo Calle Calle",
   "institucion": "universidad_del_azuay",
   "cargo": {
    "es": "Director del Departamento de Relaciones Internacionales"
   },
   "correo": "",
   "fuente": "visita_internacional",
   "confirmado": false
  },
  {
   "nombre": "Cristina Palacios",
   "institucion": "universidad_del_azuay",
   "cargo": {
    "es": "Departamento de Relaciones Internacionales"
   },
   "correo": "",
   "fuente": "encuentro_guatemala_uazuay",
   "confirmado": false
  },
  {
   "nombre": "Aleksandra Zaporozhchenko",
   "institucion": "universidad_del_azuay",
   "cargo": {
    "es": "Departamento de Relaciones Internacionales"
   },
   "correo": "",
   "fuente": "encuentro_guatemala_uazuay",
   "confirmado": false
  },
  {
   "nombre": "Sofía Cordero",
   "institucion": "universidad_del_azuay",
   "cargo": {
    "es": "Departamento de Relaciones Internacionales"
   },
   "correo": "",
   "fuente": "encuentro_guatemala_uazuay",
   "confirmado": false
  },
  {
   "nombre": "Genoveva Malo Toral",
   "institucion": "universidad_del_azuay",
   "cargo": {},
   "correo": "",
   "fuente": "",
   "confirmado": false
  },
  {
   "nombre": "Esteban Mauricio Inga Ortega",
   "institucion": "universidad_politecnica_salesiana",
   "cargo": {},
   "correo": "",
   "fuente": "",
   "confirmado": false
  },
  {
   "nombre": "Javier Francisco Toral Iñiguez",
   "institucion": "universidad_politecnica_salesiana",
   "cargo": {},
   "correo": "",
   "fuente": "",
   "confirmado": false
  },
  {
   "nombre": "Fanny López",
   "institucion": "universidad_ciencias_artes_chiapas",
   "cargo": {
    "es": "Rectora"
   },
   "correo": "",
   "fuente": "segundo-encuentro",
   "confirmado": false
  },
  {
   "nombre": "Alberto Nahun Zuart Garduño",
   "institucion": "universidad_ciencias_artes_chiapas",
   "cargo": {},
   "correo": "",
   "fuente": "",
   "confirmado": false
  },
  {
   "nombre": "Rafael de Jesús Araujo González",
   "institucion": "universidad_ciencias_artes_chiapas",
   "cargo": {},
   "correo": "",
   "fuente": "",
   "confirmado": false
  },
  {
   "nombre": "Elizabeth Céspedes Ochoa",
   "institucion": "universidad_ciencias_artes_chiapas",
   "cargo": {},
   "correo": "",
   "fuente": "",
   "confirmado": false
  },
  {
   "nombre": "Amira López Habib",
   "institucion": "universidad_ciencias_artes_chiapas",
   "cargo": {},
   "correo": "",
   "fuente": "",
   "confirmado": false
  },
  {
   "nombre": "Hugo Rojas",
   "institucion": "universidad_ciencias_artes_chiapas",
   "cargo": {},
   "correo": "",
   "fuente": "",
   "confirmado": false
  },
  {
   "nombre": "Claudia Araceli Madariaga Aguilar",
   "institucion": "universidad_politecnica_chiapas",
   "cargo": {
    "es": "Enlace institucional del proyecto RIUDICC"
   },
   "correo": "",
   "fuente": "upechiapas-ife-conference-2026-colaboracion-internacional-educacion",
   "confirmado": false
  },
  {
   "nombre": "Olga María Moscoso Portillo",
   "institucion": "universidad_san_carlos_guatemala",
   "cargo": {
    "es": "Coordinadora General de Cooperación y Relaciones Internacionales"
   },
   "correo": "",
   "fuente": "segundo-encuentro",
   "confirmado": false
  },
  {
   "nombre": "Alejandra Rojas",
   "institucion": "universidad_san_carlos_guatemala",
   "cargo": {
    "es": "Gestora de Proyectos Internacionales y Movilidad Académica"
   },
   "correo": "",
   "fuente": "encuentro_guatemala_uazuay",
   "confirmado": false
  },
  {
   "nombre": "Alix Van Zandt",
   "institucion": "universidad_valle_guatemala",
   "cargo": {
    "es": "Directora de Internacionalización"
   },
   "correo": "",
   "fuente": "taller-analisis",
   "confirmado": false
  },
  {
   "nombre": "Fernando Antonio Escalante Arévalo",
   "institucion": "universidad_valle_guatemala",
   "cargo": {},
   "correo": "",
   "fuente": "",
   "confirmado": false
  },
  {
   "nombre": "Diego Estuardo Mejía Saquic",
   "institucion": "universidad_valle_guatemala",
   "cargo": {},
   "correo": "",
   "fuente": "",
   "confirmado": false
  },
  {
   "nombre": "Estefanía Arriola Ordóñez",
   "institucion": "universidad_valle_guatemala",
   "cargo": {},
   "correo": "",
   "fuente": "",
   "confirmado": false
  },
  {
   "nombre": "Suany Elizabeth Rosario Díaz",
   "institucion": "universidad_autonoma_santo_domingo",
   "cargo": {
    "es": "Contacto de RIUDICC en República Dominicana",
    "en": "RIUDICC contact in the Dominican Republic",
    "it": "Referente di RIUDICC nella Repubblica Dominicana",
    "fr": "Contact de RIUDICC en République dominicaine"
   },
   "correo": "srosario64@uasd.edu.do",
   "fuente": "",
   "confirmado": true
  },
  {
   "nombre": "Arelis Subero",
   "institucion": "universidad_autonoma_santo_domingo",
   "cargo": {},
   "correo": "",
   "fuente": "",
   "confirmado": false
  },
  {
   "nombre": "Emilio Mínguez Torres",
   "institucion": "universidad_caribe_unicaribe",
   "cargo": {
    "es": "Rector"
   },
   "correo": "",
   "fuente": "segundo-encuentro",
   "confirmado": false
  },
  {
   "nombre": "Nidia Mirely Martínez Ciprián",
   "institucion": "universidad_caribe_unicaribe",
   "cargo": {},
   "correo": "",
   "fuente": "",
   "confirmado": false
  },
  {
   "nombre": "Bethy Linoska Díaz",
   "institucion": "universidad_caribe_unicaribe",
   "cargo": {},
   "correo": "",
   "fuente": "",
   "confirmado": false
  }
 ],
 "produccion": [],
 "blog": [
  {
   "slug": "la-persona-experiencia-internacionalizacion",
   "titulo": {
    "es": "La Persona. Experiencia de internacionalización"
   },
   "autor": "Suany Rosario",
   "cargo": "Universidad Autónoma de Santo Domingo (UASD)",
   "institucion": "universidad_autonoma_santo_domingo",
   "evento": "",
   "fecha": "2026-11-07",
   "extracto": {
    "es": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,…"
   },
   "texto": {
    "es": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></blockquote><p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.</p>"
   },
   "permiso": true,
   "ejemplo": true
  }
 ],
 "publicaciones_destacadas": [],
 "testimonios": [
  {
   "nombre": "Ruth Mariel Deschamps",
   "institucion": "universidad_autonoma_santo_domingo",
   "carrera": "Ingeniería Química",
   "movilidad": "Erasmus+ · Un semestre en INSA Rouen Normandie (Francia), de enero a mayo de 2026",
   "texto": "Vivir durante seis meses en Francia, realizando un intercambio académico en INSA Rouen, ha sido una de las experiencias más increíbles y enriquecedoras de mi vida.",
   "completo": [
    "No solo significó estudiar en una institución diferente, sino también salir de mi país por primera vez, enfrentarme a un entorno completamente nuevo y aprender a desenvolverme en una cultura distinta a la mía.",
    "Desde el primer momento, todo representó un aprendizaje. Adaptarme al clima, que era muy diferente al que estaba acostumbrada, conocer personas de distintas nacionalidades, descubrir nuevas costumbres y experimentar una forma de vida diferente hizo que cada día fuera una oportunidad para aprender algo nuevo.",
    "Tuve la oportunidad de conocer distintas ciudades, disfrutar de su arquitectura, su historia, su gastronomía y de todo lo que hace especial a la cultura francesa. Cada lugar que visité me dejó recuerdos únicos y me permitió apreciar la riqueza cultural que existe más allá de nuestras fronteras. También fue muy interesante conocer el sistema educativo, la dinámica de las clases y la manera en que se desarrolla la vida estudiantil en otro país.",
    "Sin duda, una de las cosas más bonitas fue compartir con personas de diferentes culturas, intercambiar ideas, conocer otras perspectivas y darme cuenta de que, aunque podamos tener costumbres y formas de pensar distintas, siempre hay algo nuevo que podemos aprender de los demás.",
    "Esta experiencia me abrió muchísimo la mente. Me hizo comprender que el mundo es enorme, que existen muchísimas culturas, lugares, personas y oportunidades por descubrir, y que salir de nuestra zona de confort puede llevarnos a vivir cosas que jamás imaginamos.",
    "Hoy puedo decir que regresé con muchos más conocimientos que los académicos: me llevo aprendizajes personales, recuerdos inolvidables, nuevas amistades y una perspectiva diferente de la vida.",
    "Si tuviera que volver a tomar la decisión, lo haría una y mil veces más. No me arrepiento de nada. Esos meses fueron una experiencia que siempre llevaré conmigo y que, sin duda, despertó en mí aún más deseos de seguir explorando, aprendiendo y descubriendo todo lo que el mundo tiene para ofrecer."
   ],
   "consejo": "Que se atrevan a vivir la experiencia, incluso si sienten miedo o incertidumbre. No esperen a sentirse completamente preparados para dar el paso. Salir de su zona de confort puede llevarlos a descubrir lugares, personas y, sobre todo, nuevas versiones de ustedes mismos. No dejen pasar una oportunidad que podría cambiarles la vida.",
   "foto": "img/testimonios/ruth-mariel-deschamps.jpg",
   "idioma": "es",
   "fecha": "2026-11-07",
   "permiso": true,
   "foto_vertical": true,
   "foto_alt": "Ruth Mariel Deschamps frente a la torre Eiffel, en París",
   "permiso_nota": "Autorización por escrito de la estudiante, 2026-11-07"
  },
  {
   "nombre": "Paola Rodríguez Brea",
   "institucion": "universidad_autonoma_santo_domingo",
   "carrera": "Ingeniería Química",
   "movilidad": "Erasmus+ · Un semestre en INSA Rouen Normandie (Francia), de enero a mayo de 2026",
   "texto": "Mi experiencia de movilidad fue profundamente transformadora, tanto a nivel personal como académico.",
   "completo": [
    "A través del programa Erasmus+, tuve la oportunidad de cursar un semestre completo en INSA Rouen Normandie, en Francia. Durante ese tiempo pude adaptarme a una dinámica académica internacional de alto nivel, conectar con personas de diversas culturas y nacionalidades, y explorar la riqueza cultural y cotidiana de Europa."
   ],
   "consejo": "A quienes estén considerando postularse o sientan temor, les aconsejo informarse a fondo sobre el destino antes de viajar y, si viajan en grupo, construir una red de apoyo sólida desde el inicio. Al llegar, busquen integrarse activamente en la comunidad estudiantil y local; salir de la zona de confort da miedo al principio, pero no dejen que la incertidumbre les impida vivir una experiencia que amplía por completo la visión del mundo y del futuro profesional.",
   "foto": "img/testimonios/paola-rodriguez-brea.jpg",
   "idioma": "es",
   "fecha": "2026-11-08",
   "permiso": true,
   "foto_vertical": true,
   "foto_posicion": "50% 90%",
  "foto_alt": "Paola Rodríguez Brea en una calle de París, con la torre Eiffel al fondo",
   "permiso_nota": "Autorización de la estudiante confirmada por la coordinación, 2026-11-08"
  },
  {
   "nombre": "Nombre Apellido",
   "institucion": "universidad_autonoma_santo_domingo",
   "carrera": "Educación",
   "texto": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
   "foto": "",
   "idioma": "es",
   "fecha": "",
   "permiso": true,
   "ejemplo": true
  },
  {
   "nombre": "Nombre Apellido",
   "institucion": "universidad_del_azuay",
   "carrera": "Arquitectura",
   "texto": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
   "foto": "",
   "idioma": "es",
   "fecha": "",
   "permiso": true,
   "ejemplo": true
  },
  {
   "nombre": "Nombre Apellido",
   "institucion": "universidad_ciencias_artes_chiapas",
   "carrera": "Biología",
   "texto": "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
   "foto": "",
   "idioma": "es",
   "fecha": "",
   "permiso": true,
   "ejemplo": true
  },
  {
   "nombre": "Nombre Apellido",
   "institucion": "universita_studi_messina",
   "carrera": "Economía",
   "texto": "Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor, ut ullamcorper ligula eu tempor congue.",
   "foto": "",
   "idioma": "es",
   "fecha": "",
   "permiso": true,
   "ejemplo": true
  },
  {
   "nombre": "Nombre Apellido",
   "institucion": "universidad_san_carlos_guatemala",
   "carrera": "Medicina",
   "texto": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
   "foto": "",
   "idioma": "es",
   "fecha": "",
   "permiso": true,
   "ejemplo": true
  },
  {
   "nombre": "Nombre Apellido",
   "institucion": "universidad_complutense_madrid",
   "carrera": "Periodismo",
   "texto": "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat, praesent dapibus neque id cursus.",
   "foto": "",
   "idioma": "es",
   "fecha": "",
   "permiso": true,
   "ejemplo": true
  }
 ],
 "redes": [
  {
   "red": "linkedin",
   "nombre": "LinkedIn",
   "url": "https://www.linkedin.com/company/riudicc"
  },
  {
   "red": "instagram",
   "nombre": "Instagram",
   "url": "https://www.instagram.com/riudicc"
  },
  {
   "red": "facebook",
   "nombre": "Facebook",
   "url": "https://www.facebook.com/profile.php?id=61573750623552"
  }
 ],
 "micro_observatorios": [
  {
   "institucion": "universidad_autonoma_santo_domingo",
   "url": "https://riudicc-uasd.pages.dev/#observatorio"
  }
 ],
 "buzones": [
  {
   "institucion": "universidad_del_azuay",
   "nombre": "RIUDICC Universidad del Azuay",
   "correo": "erasmus@uazuay.edu.ec"
  },
  {
   "institucion": "universidad_san_carlos_guatemala",
   "nombre": "Cooperación USAC",
   "correo": "cooperacionusac@gmail.com"
  },
  {
   "institucion": "universidad_san_carlos_guatemala",
   "nombre": "Programas y Proyectos USAC",
   "correo": "programasusac@gmail.com"
  },
  {
   "institucion": "universidad_politecnica_chiapas",
   "nombre": "Incubadora Círculo de Innovación UPChiapas",
   "correo": "incubadora@upchiapas.edu.mx"
  }
 ],
 "observatorio_equipo": [
  {
   "rol": "director",
   "nombre": "Marcelo Calle Calle",
   "institucion": "universidad_del_azuay"
  },
  {
   "rol": "europa",
   "nombre": "Sebastiano Nucera",
   "institucion": "universita_studi_messina"
  },
  {
   "rol": "caribe",
   "nombre": "Bethy Linoska Díaz",
   "institucion": "universidad_caribe_unicaribe"
  },
  {
   "rol": "america_latina",
   "nombre": "Claudia Araceli Madariaga Aguilar",
   "institucion": "universidad_politecnica_chiapas"
  }
 ],
 "entregables": {
  "total": 24,
  "corte": "diciembre 2026"
 },
 "creditos": {
  "bloques": [
   {
    "rol": {
     "es": "Plataforma digital, comunicación y difusión (WP6)",
     "en": "Digital platform, communication and dissemination (WP6)",
     "it": "Piattaforma digitale, comunicazione e diffusione (WP6)",
     "fr": "Plateforme numérique, communication et diffusion (WP6)"
    },
    "personas": [
     {
      "nombre": "Universidad Politécnica Salesiana (UPS)",
      "inst": "Javier Francisco Toral Iñiguez"
     }
    ]
   },
   {
    "rol": {
     "es": "Colaboración",
     "en": "Collaboration",
     "it": "Collaborazione",
     "fr": "Collaboration"
    },
    "menor": true,
    "texto": {
     "es": "Apoyo en la organización y actualización de contenidos: Suany Elizabeth Rosario Díaz (Universidad Autónoma de Santo Domingo).",
     "en": "Support in organising and updating content: Suany Elizabeth Rosario Díaz (Universidad Autónoma de Santo Domingo).",
     "it": "Supporto nell'organizzazione e nell'aggiornamento dei contenuti: Suany Elizabeth Rosario Díaz (Universidad Autónoma de Santo Domingo).",
     "fr": "Appui à l'organisation et à la mise à jour des contenus : Suany Elizabeth Rosario Díaz (Universidad Autónoma de Santo Domingo)."
    }
   },
   {
    "rol": {
     "es": "Contenidos",
     "en": "Content",
     "it": "Contenuti",
     "fr": "Contenus"
    },
    "texto": {
     "es": "Universidades socias y asociadas de RIUDICC. Las noticias, fotografías y datos de la red proceden del sitio oficial, riudicc.org.",
     "en": "RIUDICC partner and associate universities. News, photos and network data come from the official site, riudicc.org.",
     "it": "Università partner e associate di RIUDICC. Notizie, fotografie e dati della rete provengono dal sito ufficiale, riudicc.org.",
     "fr": "Universités partenaires et associées de RIUDICC. Les actualités, photos et données du réseau proviennent du site officiel, riudicc.org."
    }
   },
   {
    "rol": {
     "es": "Datos del observatorio",
     "en": "Observatory data",
     "it": "Dati dell'osservatorio",
     "fr": "Données de l'observatoire"
    },
    "texto": {
     "es": "Micro-observatorio de movilidad de la UASD; Instituto de Estadística de la UNESCO (UIS), publicado por Our World in Data.",
     "en": "UASD mobility micro-observatory; UNESCO Institute for Statistics (UIS), published by Our World in Data.",
     "it": "Micro-osservatorio della mobilità della UASD; Istituto di Statistica dell'UNESCO (UIS), pubblicato da Our World in Data.",
     "fr": "Micro-observatoire de la mobilité de l'UASD ; Institut de statistique de l'UNESCO (ISU), publié par Our World in Data."
    }
   },
   {
    "rol": {
     "es": "Recursos y herramientas",
     "en": "Resources and tools",
     "it": "Risorse e strumenti",
     "fr": "Ressources et outils"
    },
    "texto": {
     "es": [
      "Mapa del mundo simplificado a partir de Apache ECharts (licencia Apache 2.0). Tipografías Bricolage Grotesque y Source Sans 3 (SIL Open Font License).",
      "En el desarrollo del sitio se utilizaron herramientas de inteligencia artificial como apoyo. Los contenidos son revisados y validados por el equipo responsable."
     ],
     "en": [
      "World map simplified from Apache ECharts (Apache 2.0 licence). Bricolage Grotesque and Source Sans 3 typefaces (SIL Open Font License).",
      "Artificial intelligence tools were used as support in developing the site. Content is reviewed and validated by the responsible team."
     ],
     "it": [
      "Mappa del mondo semplificata a partire da Apache ECharts (licenza Apache 2.0). Caratteri Bricolage Grotesque e Source Sans 3 (SIL Open Font License).",
      "Nello sviluppo del sito sono stati utilizzati strumenti di intelligenza artificiale come supporto. I contenuti sono rivisti e convalidati dal team responsabile."
     ],
     "fr": [
      "Carte du monde simplifiée à partir d'Apache ECharts (licence Apache 2.0). Polices Bricolage Grotesque et Source Sans 3 (SIL Open Font License).",
      "Des outils d'intelligence artificielle ont été utilisés en appui au développement du site. Les contenus sont relus et validés par l'équipe responsable."
     ]
    }
   }
  ],
  "fecha": "2026-11"
 },
 "menciones": [
  {
   "red": "linkedin",
   "autor": "José A. Ruiz San Román (UCM)",
   "fecha": "2026-10-31",
   "titulo": "Intensos días de trabajo en la Universidad del Azuay con el proyecto RIUDICC",
   "imagen": "img/menciones/linkedin-ucm-azuay.jpg",
   "url": "https://lnkd.in/p/eZX89ZDf"
  },
  {
   "red": "facebook",
   "autor": "UNICACH",
   "fecha": "2026-10-27",
   "titulo": "UNICACH fortalece su proyección internacional a través de RIUDICC",
   "imagen": "img/menciones/facebook-unicach.jpg",
   "url": "https://www.facebook.com/share/p/1TbYktt5MF/"
  },
  {
   "red": "facebook",
   "autor": "Universidad del Azuay",
   "fecha": "2026-10-27",
   "titulo": "La movilidad académica y la investigación conjunta marcan la agenda de RIUDICC en Cuenca",
   "imagen": "img/menciones/facebook-uda.jpg",
   "url": "https://www.facebook.com/share/p/1MrE5X2R93/"
  },
  {
   "red": "instagram",
   "autor": "Relaciones Internacionales UDA",
   "fecha": "2026-10-24",
   "titulo": "III Encuentro Internacional Universitario de Internacionalización, del 27 al 29 de octubre",
   "imagen": "img/menciones/instagram-uda-encuentro.jpg",
   "posicion": "50% 30%",
   "url": "https://www.instagram.com/p/De4a5PhoL-D/"
  }
 ]
};
