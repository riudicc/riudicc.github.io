/* Servicios, movilidad inclusiva y guías de la comunidad RIUDICC.
   - Todo sale de los objetivos y paquetes de trabajo (WP) de RIUDICC: si se agrega algo, indicar a qué WP responde.
   - Publicar solo contenidos aprobados por la coordinación. En inclusión: estudios de diversas instituciones, con enlace.
   - Regla Erasmus+: los resultados del proyecto (guías, informes, observatorio) son gratuitos y abiertos.
     Solo el acompañamiento a medida puede tener costo, lo presta una universidad socia o la futura alianza (WP4)
     y no forma parte de las actividades financiadas por la UE. Mientras la coordinación no lo apruebe, "estado" queda en "propuesta".
   - Textos en "es" y "en"; en italiano y francés se muestra el español con un aviso.
   - Lo que va después del signo igual y antes del ";" final es JSON válido. */
window.SERVICIOS={
 "estado": "propuesta",
 "gratuitos": [
  {
   "id": "info",
   "color": "#9fc533",
   "icono": "camino",
   "titulo": {
    "es": "Información y orientación",
    "en": "Information and guidance"
   },
   "items": [
    {
     "t": {
      "es": "Tablón de convocatorias",
      "en": "Opportunities board"
     },
     "href": "#convocatorias"
    },
    {
     "t": {
      "es": "Programas que abren cada año",
      "en": "Programmes that open every year"
     },
     "href": "#programas"
    },
    {
     "t": {
      "es": "Guía para estudiantes",
      "en": "Student guide"
     },
     "href": "#guia"
    },
    {
     "t": {
      "es": "Movilidad inclusiva",
      "en": "Inclusive mobility"
     },
     "href": "#inclusion"
    },
    {
     "t": {
      "es": "Solicitar información",
      "en": "Request information"
     },
     "href": "#informacion"
    }
   ]
  },
  {
   "id": "datos",
   "color": "#6fafab",
   "icono": "grafico",
   "titulo": {
    "es": "Datos e investigación",
    "en": "Data and research"
   },
   "items": [
    {
     "t": {
      "es": "Observatorio",
      "en": "Observatory"
     },
     "href": "#observatorio"
    },
    {
     "t": {
      "es": "Micro-observatorios",
      "en": "Micro-observatories"
     },
     "href": "#unidades"
    },
    {
     "t": {
      "es": "Publicaciones",
      "en": "Publications"
     },
     "href": "#produccion"
    }
   ]
  },
  {
   "id": "red",
   "color": "#e86360",
   "icono": "edificio",
   "titulo": {
    "es": "Red de universidades",
    "en": "University network"
   },
   "items": [
    {
     "t": {
      "es": "Universidades socias",
      "en": "Partner universities"
     },
     "href": "#unidades"
    },
    {
     "t": {
      "es": "Equipo de la red",
      "en": "Network team"
     },
     "href": "#equipo"
    }
   ]
  },
  {
   "id": "comunidad",
   "color": "#f6c646",
   "icono": "manos",
   "titulo": {
    "es": "Comunidad",
    "en": "Community"
   },
   "items": [
    {
     "t": {
      "es": "Noticias",
      "en": "News"
     },
     "href": "#noticias"
    },
    {
     "t": {
      "es": "Blog",
      "en": "Blog"
     },
     "href": "#blog"
    },
    {
     "t": {
      "es": "Testimonios",
      "en": "Testimonials"
     },
     "href": "#testimonios"
    },
    {
     "t": {
      "es": "Proponer un contenido",
      "en": "Suggest content"
     },
     "href": "#participa"
    }
   ]
  }
 ],
 "lineas": [
  {
   "id": "rrii",
   "wp": "WP3",
   "color": "#6fafab",
   "icono": "edificio",
   "titulo": {
    "es": "Fortalecimiento de oficinas de Relaciones Internacionales",
    "en": "Strengthening International Relations offices"
   },
   "resumen": {
    "es": "Compartir lo aprendido en la red para que cada oficina gestione mejor la movilidad de estudiantes, docentes y personal.",
    "en": "Sharing what the network has learned so each office can better manage the mobility of students, academics and staff."
   },
   "medida": {
    "es": [
     "Acompañamiento para crear o reorganizar una oficina",
     "Procedimientos de selección, reconocimiento de créditos y acogida",
     "Movilidad virtual y clases compartidas entre universidades"
    ],
    "en": [
     "Support to set up or reorganise an office",
     "Selection, credit recognition and welcome procedures",
     "Virtual mobility and shared classes between universities"
    ]
   }
  },
  {
   "id": "observatorio",
   "wp": "WP7",
   "color": "#f6c646",
   "icono": "grafico",
   "titulo": {
    "es": "Observatorios de internacionalización",
    "en": "Internationalisation observatories"
   },
   "resumen": {
    "es": "Datos propios para decidir mejor: el modelo del micro-observatorio de la UASD, listo para replicarse.",
    "en": "Your own data for better decisions: the UASD micro-observatory model, ready to be replicated."
   },
   "medida": {
    "es": [
     "Instalación de un micro-observatorio en otra universidad",
     "Limpieza y carga de datos históricos"
    ],
    "en": [
     "Setting up a micro-observatory at another university",
     "Cleaning and loading historical data"
    ]
   }
  },
  {
   "id": "investigacion",
   "wp": "WP7",
   "color": "#5b4fa0",
   "icono": "lupa",
   "titulo": {
    "es": "Investigación sobre temas sociales",
    "en": "Research on social issues"
   },
   "resumen": {
    "es": "Colaboración en investigación sobre inclusión, interculturalidad y desarrollo local, en la línea de los clústeres de investigación que prevé el proyecto.",
    "en": "Research collaboration on inclusion, interculturality and local development, in line with the research clusters planned by the project."
   },
   "medida": {
    "es": [
     "Diseño conjunto de estudios con universidades o instituciones públicas",
     "Estancias de investigación y cotutelas",
     "Asesoría metodológica en estudios de movilidad e inclusión"
    ],
    "en": [
     "Joint study design with universities or public institutions",
     "Research stays and co-supervised doctorates",
     "Methodological advice on mobility and inclusion studies"
    ]
   }
  }
 ],
 "inclusion": {
  "intro": {
   "es": "RIUDICC se propone ampliar las oportunidades de internacionalización para quienes enfrentan situaciones de vulnerabilidad social y económica. Aquí se comparten estudios realizados sobre estos temas por diversas instituciones.",
   "en": "RIUDICC aims to widen internationalisation opportunities for people facing social and economic vulnerability. Here we share studies on these topics carried out by various institutions."
  },
  "grupos": [
   {
    "icono": "persona",
    "es": [
     "Personas con discapacidad",
     "Accesibilidad de los campus, de los materiales y de la información de las convocatorias."
    ],
    "en": [
     "People with disabilities",
     "Accessible campuses, materials and call information."
    ],
    "id": "discapacidad"
   },
   {
    "icono": "birrete",
    "es": [
     "Primera generación universitaria",
     "Quienes son los primeros de su familia en la universidad y no tienen referentes que hayan estudiado fuera."
    ],
    "en": [
     "First-generation students",
     "Those who are the first in their family at university, with no role models who studied abroad."
    ],
    "id": "primera"
   },
   {
    "icono": "moneda",
    "es": [
     "Bajos ingresos",
     "El costo del pasaporte, el visado, el viaje o la primera mensualidad puede dejar fuera a muchas personas."
    ],
    "en": [
     "Low income",
     "The cost of a passport, visa, travel or the first month abroad can rule many people out."
    ],
    "id": "ingresos"
   },
   {
    "icono": "montana",
    "es": [
     "Zonas rurales, pueblos indígenas y afrodescendientes",
     "Distancia de los centros universitarios, lengua y reconocimiento de la diversidad cultural."
    ],
    "en": [
     "Rural areas, Indigenous and Afro-descendant peoples",
     "Distance from university centres, language and recognition of cultural diversity."
    ],
    "id": "indigenas"
   },
   {
    "icono": "camino",
    "es": [
     "Personas migrantes",
     "Como la comunidad haitiana en República Dominicana y México: documentación, idioma y discriminación."
    ],
    "en": [
     "Migrants",
     "Such as the Haitian community in the Dominican Republic and Mexico: documents, language and discrimination."
    ],
    "id": "migrantes"
   },
   {
    "icono": "balanza",
    "es": [
     "Brechas de género",
     "Mujeres en ciencia y tecnología, y personas con responsabilidades de cuidado."
    ],
    "en": [
     "Gender gaps",
     "Women in science and technology, and people with caring responsibilities."
    ],
    "id": "genero"
   }
  ],
  "barreras": {
   "es": "La estrategia de inclusión y diversidad de Erasmus+ (Comisión Europea, 2021) enumera, como lista no cerrada, ocho tipos de barreras que pueden impedir la participación, por sí solas o combinadas:",
   "en": "The Erasmus+ inclusion and diversity strategy (European Commission, 2021) lists, as a non-exhaustive list, eight kinds of barriers that can prevent participation, alone or combined:"
  },
  "tags": {
   "es": [
    "Discapacidad",
    "Problemas de salud",
    "Barreras de los sistemas educativos",
    "Diferencias culturales",
    "Barreras sociales",
    "Barreras económicas",
    "Discriminación",
    "Barreras geográficas"
   ],
   "en": [
    "Disability",
    "Health problems",
    "Education and training systems",
    "Cultural differences",
    "Social barriers",
    "Economic barriers",
    "Discrimination",
    "Geographical barriers"
   ]
  },
  "estudios": [
   {
    "grupo": "general",
    "titulo": "Implementation guidelines – Erasmus+ and European Solidarity Corps Inclusion and Diversity Strategy",
    "autor": "Comisión Europea",
    "anio": "2021",
    "idioma": "en",
    "url": "https://www.erasmusplus.nl/sites/default/files/2024-07/implementation-inclusion-diversity_apr21_en.pdf",
    "es": "Define a las personas con menos oportunidades y los ocho tipos de barreras que usa todo el programa Erasmus+.",
    "en": "Defines people with fewer opportunities and the eight kinds of barriers used across the Erasmus+ programme."
   },
   {
    "grupo": "general",
    "titulo": "Internacionalización de la educación superior en América Latina y el Caribe. Un balance",
    "autor": "J. Gacel-Ávila y S. Rodríguez-Rodríguez · UNESCO IESALC",
    "anio": "2018",
    "idioma": "es",
    "url": "https://www.giepes.fe.unicamp.br/pf-giepes/libro_internacionalizacion_un_balance.pdf",
    "es": "Panorama regional de la internacionalización en las universidades de América Latina y el Caribe.",
    "en": "Regional overview of internationalisation at Latin American and Caribbean universities."
   },
   {
    "grupo": "general",
    "titulo": "Movilidad estudiantil: desafíos, barreras y beneficios en la internacionalización de la educación superior",
    "autor": "Revista Educación Médica Superior",
    "anio": "",
    "idioma": "es",
    "url": "https://ems.sld.cu/index.php/ems/article/download/4346/1624/48563",
    "es": "Revisión de 23 artículos: los desafíos de la movilidad estudiantil se intensifican en los países de América Latina.",
    "en": "Review of 23 articles: the challenges of student mobility are greater in Latin American countries."
   },
   {
    "grupo": "discapacidad",
    "titulo": "Inclusive Mobility: making mobility programmes more inclusive for students with disabilities (EPFIME)",
    "autor": "SIHO, AHEAD, Erasmus Student Network e IUA",
    "anio": "",
    "idioma": "en",
    "url": "https://www.inclusivemobility.eu",
    "es": "Señala barreras en el proceso de solicitud y en la posibilidad de llevar las ayudas y los servicios de apoyo al país de destino.",
    "en": "Points to barriers in the application process and in taking grants and support services abroad."
   },
   {
    "grupo": "discapacidad",
    "titulo": "ESNsurvey 2018: Mapping the challenges and enablers of mobility for students with disabilities",
    "autor": "Erasmus Student Network",
    "anio": "2018",
    "idioma": "en",
    "url": "https://issuu.com/esnint/docs/esnsurvey2018",
    "es": "Encuesta sobre las dificultades y los apoyos que encuentran los estudiantes con discapacidad para hacer una movilidad.",
    "en": "Survey on the difficulties and support that students with disabilities find when going on mobility."
   },
   {
    "grupo": "discapacidad",
    "titulo": "Atención educativa a personas con discapacidad",
    "autor": "OEI",
    "anio": "2017",
    "idioma": "es",
    "url": "https://oei.int/wp-content/uploads/2017/04/atencion-educativa-a-personas-con-discapacidad-2017-oei.pdf",
    "es": "Diagnóstico regional sobre inclusión educativa de personas con discapacidad; remite al capítulo de UNESCO IESALC sobre su acceso a la educación superior.",
    "en": "Regional assessment of educational inclusion of people with disabilities; refers to the UNESCO IESALC chapter on their access to higher education."
   },
   {
    "grupo": "primera",
    "titulo": "Análisis crítico del estado de la investigación sobre estudiantes de primera generación en Latinoamérica",
    "autor": "A. Flanagan-Bórquez y otros · Revista Mexicana de Investigación Educativa",
    "anio": "",
    "idioma": "es",
    "url": "https://www.redalyc.org/journal/140/14075366002/14075366002.pdf",
    "es": "Revisión de 19 artículos latinoamericanos publicados entre 2002 y 2020 sobre quienes son la primera generación de su familia en la universidad.",
    "en": "Review of 19 Latin American articles published between 2002 and 2020 on students who are the first in their family at university."
   },
   {
    "grupo": "primera",
    "titulo": "Procesos de inclusión de estudiantes indígenas de primera generación universitaria",
    "autor": "F. Segovia González y A. Flanagan-Bórquez",
    "anio": "",
    "idioma": "es",
    "url": "https://dialnet.unirioja.es/descarga/articulo/7268792.pdf",
    "es": "Estudio cualitativo con estudiantes mapuche de primera generación en universidades chilenas: dos desventajas que se suman.",
    "en": "Qualitative study of first-generation Mapuche students at Chilean universities: two disadvantages that add up."
   },
   {
    "grupo": "ingresos",
    "titulo": "At a Crossroads: Higher Education in Latin America and the Caribbean",
    "autor": "Banco Mundial (M. M. Ferreyra y otros)",
    "anio": "2017",
    "idioma": "en",
    "url": "https://openknowledge.worldbank.org/entities/publication/fd526574-0e5e-5dbf-824e-1c6fdb95d83d",
    "es": "La mitad más pobre de la población pasó de ser el 16 % del estudiantado en 2000 a cerca del 25 % en 2013; aun así, solo la mitad de quienes entran termina sus estudios.",
    "en": "The poorest half of the population went from 16% of students in 2000 to about 25% in 2013; even so, only half of those who enter complete their degree."
   },
   {
    "grupo": "ingresos",
    "titulo": "Maybe it will be different abroad: student and staff perspectives on diversity and inclusion in student exchanges (SIEM)",
    "autor": "Erasmus Student Network",
    "anio": "2021",
    "idioma": "en",
    "url": "https://zenodo.org/records/10696740/files/SIEM_Research_Report_2021_03.pdf",
    "es": "Encuesta a unos 12,000 estudiantes y 750 personas del personal universitario: adelantar los gastos iniciales es una barrera importante, y quienes tienen menos oportunidades reportan un impacto personal más positivo de la movilidad.",
    "en": "Survey of around 12,000 students and 750 staff: advancing initial costs is a major barrier, and students with fewer opportunities report a more positive personal impact of mobility."
   },
   {
    "grupo": "indigenas",
    "titulo": "Educación superior y pueblos indígenas y afrodescendientes en América Latina. Normas, políticas y prácticas",
    "autor": "D. Mato (coord.) · UNESCO IESALC",
    "anio": "2012",
    "idioma": "es",
    "url": "https://webarchive.unesco.org/web/20170619121544/http:/www.iesalc.unesco.org.ve/dmdocuments/diversidad_libro4.pdf",
    "es": "Normas, políticas públicas y prácticas institucionales en varios países de la región para el acceso, la permanencia y la graduación de estudiantes indígenas y afrodescendientes.",
    "en": "Laws, public policies and institutional practices in several countries for the access, retention and graduation of Indigenous and Afro-descendant students."
   },
   {
    "grupo": "indigenas",
    "titulo": "Instituciones interculturales de educación superior en América Latina. Procesos de construcción, logros, innovaciones y desafíos",
    "autor": "D. Mato (coord.) · UNESCO IESALC",
    "anio": "2009",
    "idioma": "es",
    "url": "https://webarchive.unesco.org/web/20170620144420/http:/www.iesalc.unesco.org.ve/dmdocuments/biblioteca/publicaciones2009/institucionesinterculturales.pdf",
    "es": "Experiencias de instituciones creadas para responder a las demandas de pueblos indígenas y comunidades afrodescendientes.",
    "en": "Experiences of institutions created to meet the demands of Indigenous peoples and Afro-descendant communities."
   },
   {
    "grupo": "indigenas",
    "titulo": "Educación Superior y Sociedad, vol. 20: Educación superior y pueblos indígenas y afrodescendientes en América Latina y el Caribe",
    "autor": "UNESCO IESALC",
    "anio": "2017",
    "idioma": "es",
    "url": "https://ess.iesalc.unesco.org/index.php/ess3/issue/view/3",
    "es": "Número monográfico de la revista de UNESCO IESALC dedicado al tema.",
    "en": "Special issue of the UNESCO IESALC journal devoted to the topic."
   },
   {
    "grupo": "migrantes",
    "titulo": "Antecedentes para una estrategia regional de respuesta de la UNESCO a la situación de personas en contexto de movilidad en América Latina y el Caribe",
    "autor": "UNESCO · OREALC Santiago",
    "anio": "2019",
    "idioma": "es",
    "url": "https://prod.gcedclearinghouse.org/sites/default/files/resources/190471spa.pdf",
    "es": "Describe los principales obstáculos al derecho a la educación de personas migrantes y refugiadas: marcos normativos, estatus migratorio y documentación.",
    "en": "Describes the main obstacles to the right to education of migrants and refugees: legal frameworks, migration status and documents."
   },
   {
    "grupo": "migrantes",
    "titulo": "Educación para personas jóvenes y adultas migrantes y refugiadas en América Latina y el Caribe",
    "autor": "CLADE y UNESCO OREALC Santiago",
    "anio": "2021",
    "idioma": "es",
    "url": "https://redclade.org/wp-content/uploads/migrante-v5.pdf",
    "es": "Marcos jurídicos y experiencias de políticas sobre el derecho a la educación de personas jóvenes y adultas migrantes y refugiadas.",
    "en": "Legal frameworks and policy experiences on the right to education of young and adult migrants and refugees."
   },
   {
    "grupo": "genero",
    "titulo": "Las mujeres en la educación superior: ¿la ventaja femenina ha puesto fin a las desigualdades de género?",
    "autor": "UNESCO IESALC",
    "anio": "2021",
    "idioma": "es",
    "url": "https://www.redem.org/?p=38271",
    "es": "Las mujeres son mayoría entre el estudiantado, pero en 2020 solo el 18 % de las universidades públicas de América Latina tenía una rectora.",
    "en": "Women are the majority of students, but in 2020 only 18% of public universities in Latin America had a woman rector."
   },
   {
    "grupo": "genero",
    "titulo": "La brecha de género en el sector STEM en América Latina: una propuesta europea (proyecto W-STEM)",
    "autor": "Universidad de Salamanca · CINAIC",
    "anio": "2019",
    "idioma": "es",
    "url": "https://gredos.usal.es/handle/10366/140537",
    "es": "Proyecto europeo con universidades latinoamericanas para atraer, acompañar y orientar a mujeres en carreras de ciencia y tecnología.",
    "en": "European project with Latin American universities to attract, support and guide women in science and technology degrees."
   }
  ],
  "apoyos": {
   "es": [
    "Erasmus+ tiene una estrategia de inclusión y diversidad, y muchas de sus convocatorias contemplan apoyos para participantes con menos oportunidades.",
    "En la movilidad internacional de Erasmus+, cada alianza entre universidades puede fijar sus propios criterios de inclusión: pregunta en tu oficina de Relaciones Internacionales.",
    "Los másteres Erasmus Mundus prevén apoyo adicional para estudiantes con necesidades individuales."
   ],
   "en": [
    "Erasmus+ has an inclusion and diversity strategy, and many of its calls provide support for participants with fewer opportunities.",
    "In Erasmus+ international mobility, each university partnership can set its own inclusion criteria: ask your International Relations office.",
    "Erasmus Mundus master's programmes provide extra support for students with individual needs."
   ]
  },
  "aporta": {
   "es": "¿Conoces un estudio, una nota de prensa o una declaración de alguna personalidad de tu país sobre este tema? Envíala desde el formulario de contacto para sumarla a esta página o al blog.",
   "en": "Do you know a study, a press article or a statement by a public figure in your country on this topic? Send it through the contact form so we can add it to this page or to the blog."
  },
  "oportunidades": [
   {
    "ambito": "INT",
    "grupos": [
     "migrantes"
    ],
    "nombre": "Programa de becas DAFI",
    "org": "ACNUR · Gobierno de Alemania",
    "url": "https://help.unhcr.org/scholarships/dafi-scholarships/",
    "es": "Becas para que personas refugiadas cursen estudios superiores en el país donde recibieron asilo. En las Américas se ha ofrecido en Ecuador y México.",
    "en": "Scholarships for refugees to take higher education in their country of asylum. In the Americas it has been offered in Ecuador and Mexico."
   },
   {
    "ambito": "IT",
    "grupos": [
     "migrantes"
    ],
    "nombre": "UNICORE – University Corridors for Refugees",
    "org": "ACNUR y universidades italianas",
    "url": "https://universitycorridors.unhcr.it/",
    "es": "Corredores universitarios para que estudiantes refugiados de países seleccionados cursen una maestría en Italia con beca y apoyo para el visado. En 2026, 41 universidades ofrecieron 78 becas.",
    "en": "University corridors for refugee students from selected countries to take a master's degree in Italy with a scholarship and visa support. In 2026, 41 universities offered 78 scholarships."
   },
   {
    "ambito": "INT",
    "grupos": [
     "genero"
    ],
    "nombre": "Becas de doctorado OWSD",
    "org": "Organization for Women in Science for the Developing World (UNESCO)",
    "url": "https://owsd.net",
    "es": "Becas de doctorado en ciencia y tecnología para mujeres de países con rezago científico, para estudiar en otro país del Sur. En América Latina y el Caribe han incluido a Guatemala, Haití, Honduras, El Salvador, Nicaragua, Bolivia y Paraguay.",
    "en": "PhD fellowships in science and technology for women from scientifically lagging countries, to study in another country of the South. In Latin America and the Caribbean they have included Guatemala, Haiti, Honduras, El Salvador, Nicaragua, Bolivia and Paraguay."
   },
   {
    "ambito": "ES",
    "grupos": [
     "discapacidad"
    ],
    "nombre": "Becas «Oportunidad al Talento»",
    "org": "Fundación ONCE",
    "url": "https://becas.fundaciononce.es",
    "es": "Incluye becas de movilidad transnacional para estudiantes universitarios con discapacidad que hagan un intercambio en una universidad extranjera. Requiere nacionalidad española y discapacidad reconocida.",
    "en": "Includes transnational mobility grants for university students with disabilities on exchange at a foreign university. Requires Spanish nationality and a recognised disability."
   },
   {
    "ambito": "MX",
    "grupos": [
     "indigenas"
    ],
    "nombre": "Programa de Becas de Posgrado para Indígenas (PROBEPI)",
    "org": "CIESAS · SECIHTI",
    "url": "http://becasindigenas.ciesas.edu.mx/",
    "es": "Apoya a personas indígenas mexicanas para cursar posgrados de alto nivel académico, con acompañamiento para preparar su ingreso.",
    "en": "Supports Indigenous Mexicans to take high-level postgraduate programmes, with support to prepare their admission."
   },
   {
    "ambito": "MX",
    "grupos": [
     "indigenas",
     "discapacidad",
     "genero"
    ],
    "nombre": "Becas de Inclusión para posgrado",
    "org": "SECIHTI (México)",
    "url": "https://secihti.mx/periodo-convocatoria/2026/",
    "es": "Modalidad dirigida a personas indígenas, personas con discapacidad, madres jefas de familia y estudiantes de posgrado en condición de maternidad.",
    "en": "Strand for Indigenous people, people with disabilities, single mothers heading households and postgraduate students who are mothers."
   },
   {
    "ambito": "EC",
    "grupos": [
     "indigenas",
     "migrantes",
     "ingresos"
    ],
    "nombre": "Becas con acción afirmativa",
    "org": "SENESCYT (Ecuador)",
    "url": "https://siau.senescyt.gob.ec/",
    "es": "Los programas de becas incluyen cupos de inclusión para pueblos y nacionalidades, personas en movilidad humana, población LGBTIQ+ y personas de escasos recursos.",
    "en": "Scholarship programmes include inclusion places for Indigenous peoples and nationalities, people in human mobility, LGBTIQ+ people and low-income students."
   },
   {
    "ambito": "GT",
    "grupos": [
     "indigenas",
     "ingresos"
    ],
    "nombre": "Becas por Nuestro Futuro",
    "org": "Segeplan (Guatemala)",
    "url": "https://agn.gt/?p=417631",
    "es": "Becas de pregrado, posgrado (en Guatemala o en el extranjero) y cursos técnicos, con prioridad para áreas rurales, comunidades indígenas y zonas con menos oportunidades.",
    "en": "Undergraduate, postgraduate (in Guatemala or abroad) and technical course scholarships, with priority for rural areas, Indigenous communities and underserved areas."
   },
   {
    "ambito": "DO",
    "grupos": [
     "ingresos"
    ],
    "nombre": "Becas nacionales e internacionales",
    "org": "MESCyT (República Dominicana)",
    "url": "https://becas.gob.do",
    "es": "Becas para estudiar en el país o en el extranjero, asignadas por mérito y necesidad económica. La convocatoria internacional de 2026 invitó especialmente a jóvenes de comunidades rurales, fronterizas y de mayor vulnerabilidad.",
    "en": "Scholarships to study in the country or abroad, awarded on merit and financial need. The 2026 international call especially invited young people from rural, border and more vulnerable communities."
   },
   {
    "ambito": "INT",
    "grupos": [
     "discapacidad",
     "ingresos"
    ],
    "nombre": "Apoyos de inclusión de Erasmus+",
    "org": "Comisión Europea",
    "url": "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/studying-abroad",
    "es": "El programa contempla apoyos para participantes con menos oportunidades; en la movilidad internacional, cada alianza entre universidades fija sus criterios. Pregunta en tu oficina de Relaciones Internacionales.",
    "en": "The programme provides support for participants with fewer opportunities; in international mobility, each university partnership sets its criteria. Ask your International Relations office."
   }
  ]
 },
 "guia": {
  "titulo": {
   "es": "Guía para estudiantes: cómo encontrar y postular a una movilidad",
   "en": "Student guide: how to find and apply for a mobility"
  },
  "resumen": {
   "es": "Un resumen sencillo para dar el primer paso: cómo usar el tablón, qué oportunidades ofrece Erasmus+ a estudiantes de América Latina y el Caribe, qué documentos preparar y qué errores evitar.",
   "en": "A plain-language summary to take the first step: how to use the board, what Erasmus+ offers students from Latin America and the Caribbean, which documents to prepare and which mistakes to avoid."
  },
  "actualizada": "2026-11-07",
  "secciones": [
   {
    "id": "tipos",
    "es": [
     "Qué tipos de movilidad existen",
     "<ul><li><b>Semestre o año de intercambio:</b> estudias en otra universidad y tus créditos se reconocen en la tuya.</li><li><b>Máster o doctorado completo</b> en el extranjero, normalmente con beca.</li><li><b>Estancias cortas:</b> investigación, prácticas, escuelas de verano o cursos de idioma.</li><li><b>Movilidad virtual:</b> clases compartidas en línea con otra universidad, sin viajar.</li></ul>"
    ],
    "en": [
     "Types of mobility",
     "<ul><li><b>Exchange semester or year:</b> you study at another university and your credits are recognised at your own.</li><li><b>Full master's or doctorate</b> abroad, usually with a scholarship.</li><li><b>Short stays:</b> research, traineeships, summer schools or language courses.</li><li><b>Virtual mobility:</b> online classes shared with another university, without travelling.</li></ul>"
    ]
   },
   {
    "id": "tablon",
    "es": [
     "Cómo leer el tablón de convocatorias",
     "<ul><li>Usa el <b>buscador</b> y los filtros de <b>nivel</b> (grado, máster, doctorado, docentes) y <b>tipo</b> (beca, intercambio, estancia).</li><li>Mira la <b>fecha de cierre</b>: en rojo aparecen las que cierran en menos de dos semanas.</li><li>Las convocatorias vencidas se ocultan solas.</li><li>Antes de postular, <b>confirma siempre</b> fechas y requisitos en el enlace oficial: el tablón resume, pero la convocatoria original manda.</li></ul><p><a href=\"#convocatorias\">Ir al tablón de convocatorias</a></p>"
    ],
    "en": [
     "How to read the opportunities board",
     "<ul><li>Use the <b>search box</b> and the <b>level</b> (bachelor's, master's, doctorate, staff) and <b>type</b> (scholarship, exchange, stay) filters.</li><li>Check the <b>closing date</b>: those closing in less than two weeks appear in red.</li><li>Expired calls are hidden automatically.</li><li>Before applying, <b>always confirm</b> dates and requirements at the official link: the board summarises, but the original call is what counts.</li></ul><p><a href=\"#convocatorias\">Go to the opportunities board</a></p>"
    ]
   },
   {
    "id": "erasmus",
    "es": [
     "Qué ofrece Erasmus+ a estudiantes de América Latina y el Caribe",
     "<h4>1. Movilidad internacional de créditos</h4><p>Un periodo de estudios en una universidad europea (de un periodo académico hasta 12 meses), con beca y con reconocimiento de créditos. Solo es posible si tu universidad tiene un acuerdo con esa universidad europea. <b>No hay un formulario central:</b> se postula en tu propia universidad, en la convocatoria interna de la oficina de Relaciones Internacionales, que selecciona de forma justa y transparente.</p><h4>2. Másteres conjuntos Erasmus Mundus</h4><p>Un máster completo que se cursa en al menos tres universidades de tres países distintos. Hay becas completas para las mejores candidaturas. <b>Se postula directamente</b> al consorcio que imparte el máster, casi siempre entre octubre y enero para empezar al año siguiente. Necesitas un título de grado o estar en el último año. El catálogo está enlazado en la <a href=\"https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters\" target=\"_blank\" rel=\"noopener\">página oficial</a>.</p><h4>3. Proyectos de cooperación, como RIUDICC</h4><p>No son becas individuales: los recibe tu universidad. Pero de ellos pueden salir talleres, encuentros y movilidades. Atento a las convocatorias internas de tu universidad.</p>"
    ],
    "en": [
     "What Erasmus+ offers students from Latin America and the Caribbean",
     "<h4>1. International credit mobility</h4><p>A study period at a European university (from one academic term up to 12 months), with a grant and credit recognition. It is only possible if your university has an agreement with that European university. <b>There is no central application form:</b> you apply at your own university, through the International Relations office's internal call, which selects fairly and transparently.</p><h4>2. Erasmus Mundus Joint Masters</h4><p>A full master's taken at at least three universities in three different countries. Full scholarships are available for the best candidates. <b>You apply directly</b> to the consortium running the master's, usually between October and January for the following academic year. You need a bachelor's degree or to be in your final year. The catalogue is linked from the <a href=\"https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters\" target=\"_blank\" rel=\"noopener\">official page</a>.</p><h4>3. Cooperation projects, such as RIUDICC</h4><p>These are not individual scholarships: your university receives them. But they can lead to workshops, meetings and mobilities. Watch for your university's internal calls.</p>"
    ]
   },
   {
    "id": "pasos",
    "es": [
     "Paso a paso para postular",
     "<ol><li><b>Empieza con tiempo:</b> entre 6 y 12 meses antes de la fecha en que quieres irte.</li><li><b>Habla con la oficina de Relaciones Internacionales</b> de tu universidad: sabe qué acuerdos existen y qué convocatorias vienen.</li><li><b>Prepara tus documentos:</b> pasaporte vigente, currículum (el modelo Europass es el más usado), carta de motivación, dos cartas de recomendación, récord de notas, certificado de idioma y título o constancia de estudios.</li><li><b>Escribe una carta de motivación propia:</b> qué quieres estudiar, por qué en ese lugar y qué harás al volver.</li><li><b>Postula antes del último día</b> y guarda los comprobantes de envío.</li><li><b>Si te seleccionan:</b> firma el acuerdo de estudios, gestiona el visado y el seguro, y busca alojamiento.</li></ol>"
    ],
    "en": [
     "Step by step",
     "<ol><li><b>Start early:</b> 6 to 12 months before you want to leave.</li><li><b>Talk to your university's International Relations office:</b> they know which agreements exist and which calls are coming.</li><li><b>Prepare your documents:</b> valid passport, CV (the Europass template is widely used), motivation letter, two reference letters, transcript, language certificate and degree or enrolment certificate.</li><li><b>Write your own motivation letter:</b> what you want to study, why there and what you will do when you return.</li><li><b>Apply before the last day</b> and keep proof of submission.</li><li><b>If you are selected:</b> sign the learning agreement, arrange your visa and insurance, and find accommodation.</li></ol>"
    ]
   },
   {
    "id": "inclusion",
    "es": [
     "Si enfrentas una situación de vulnerabilidad",
     "<p>Pregunta en tu oficina de Relaciones Internacionales por los criterios y apoyos de inclusión de cada convocatoria: Erasmus+, por ejemplo, tiene una estrategia de inclusión y diversidad, y muchas convocatorias contemplan apoyos para participantes con menos oportunidades. <a href=\"#inclusion\">Lee qué dicen los estudios sobre movilidad inclusiva</a>.</p>"
    ],
    "en": [
     "If you face a vulnerable situation",
     "<p>Ask your International Relations office about the inclusion criteria and support in each call: Erasmus+, for example, has an inclusion and diversity strategy, and many calls provide support for participants with fewer opportunities. <a href=\"#inclusion\">Read what studies say about inclusive mobility</a>.</p>"
    ]
   },
   {
    "id": "errores",
    "es": [
     "Errores frecuentes",
     "<ul><li>Dejarlo para el último día, cuando las plataformas se saturan.</li><li>Usar la misma carta de motivación para todo.</li><li>No revisar el idioma ni el nivel que se exige.</li><li>Enviar documentos sin traducir o sin legalizar cuando la convocatoria lo pide.</li><li>No confirmar en la fuente oficial lo que se leyó en redes sociales.</li></ul>"
    ],
    "en": [
     "Common mistakes",
     "<ul><li>Leaving it until the last day, when platforms get overloaded.</li><li>Using the same motivation letter for everything.</li><li>Not checking the language and level required.</li><li>Sending documents without translation or legalisation when the call asks for it.</li><li>Not confirming at the official source what you read on social media.</li></ul>"
    ]
   }
  ],
  "fuentes": [
   {
    "t": "Erasmus+ · Estudiar en el extranjero",
    "url": "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/studying-abroad"
   },
   {
    "t": "Erasmus+ · Másteres conjuntos Erasmus Mundus",
    "url": "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters"
   },
   {
    "t": "Erasmus+ · Manual de movilidad internacional de créditos para países socios (2024, PDF)",
    "url": "https://erasmus-plus.ec.europa.eu/sites/default/files/2024-07/handbook-erasmus-icm-partner-countries_jul2024-v1_en.pdf"
   }
  ]
 }
};
