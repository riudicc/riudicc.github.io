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
 "produccion": [
  {
   "slug": "ruiz-salgado-2026-comunicacion-inclusiva",
   "tipo": "Conferencia",
   "anio": 2026,
   "fecha": "2026-10-28",
   "titulo": "La importancia de la comunicación inclusiva en los procesos de internacionalización: la experiencia de la Universidad Complutense de Madrid",
   "autores": [
    "José Antonio Ruiz San Román",
    "Carmen Salgado Santamaría"
   ],
   "institucion": "Universidad Complutense de Madrid (UCM)",
   "revista_evento": "Jornadas RIUDICC, 28 de octubre de 2026",
   "idioma": "es",
   "temas": [
    "Internacionalización inclusiva",
    "Comunicación",
    "Prácticas y empleabilidad"
   ],
   "resumen": "Esta conferencia, presentada desde la experiencia de la Universidad Complutense de Madrid, reflexiona sobre qué significa una internacionalización inclusiva. José Antonio Ruiz San Román sostiene que la internacionalización no es un privilegio ni una guinda decorativa, sino parte de la formación que deben dar las universidades. Señala que los obstáculos económicos, culturales y burocráticos pesan más sobre las poblaciones vulnerables, y propone valorar los pequeños pasos, sostener alianzas estables entre instituciones diferentes, remover los recelos institucionales, comunicar las convocatorias con transparencia y mantener el esfuerzo con resiliencia, constancia y compromiso institucional. Carmen Salgado Santamaría propone que la red pase de la cooperación a un eje de trabajo universidad–empresa–sociedad. A partir de la experiencia de la Oficina de Prácticas y Empleo y de Compluemprende, señala que internacionalización y prácticas funcionan hoy como mundos separados, y plantea las prácticas internacionales y el emprendimiento como vías para la empleabilidad y para dar las mismas oportunidades a todos los estudiantes.",
   "palabras_clave": [
    "internacionalización inclusiva",
    "comunicación inclusiva",
    "poblaciones vulnerables",
    "alianzas universitarias",
    "prácticas internacionales",
    "emprendimiento",
    "empleabilidad"
   ],
   "texto": "<h3>José Antonio Ruiz San Román</h3><p>Cuando hablamos de inclusión, es una palabra muy amplia y, por tanto, abarca una gran variedad de gente, con todo tipo de minorías, discapacidades, dificultades; y también, al menos, se puede considerar ampliamente como la vinculación al entorno. Pero antes quería destacar algunas cosas, algunos elementos.</p><p>Lo primero: yo subrayaría —lo hemos hablado muchas veces— no considerar la internacionalización como un privilegio, como una guinda decorativa. La internacionalización es parte de la formación que tenemos que dar en las universidades, porque supone abrirse a los demás, abrirse a la diferencia, a las demás miradas. Y eso no es una guinda, es una necesidad. Sé que estoy predicando a convencidos, pero me parece que estos argumentos nos los tenemos que repetir unos a otros.</p><p>Luego, la inclusión: cuando pensamos en población con problemas, los obstáculos aumentan. Aquí ha salido repetidamente que hay obstáculos económicos: imagínense con población vulnerable. Que hay obstáculos culturales: cuanto más con población vulnerable. Que hay obstáculos burocráticos: si los que estamos aquí, que somos especialistas en las universidades, que conocemos desde dentro nuestras instituciones desde hace muchos años, hemos encontrado problemas burocráticos, cuánto más las poblaciones vulnerables o las poblaciones de nuestro entorno. Eso es un gran obstáculo para una internacionalización inclusiva.</p><p>Luego, creo que una internacionalización inclusiva requiere valorar los pequeños pasos. Perdón, no pretendo ser demasiado eurocéntrico, pero no puedo evitarlo: me parece que es un paradigma interesante el de los fundadores de la Unión Europea. Era imposible creer que jóvenes franceses y alemanes que habían estado disparándose iban a estar hoy pensando dónde harían su Erasmus.</p><p>Luego, la experiencia Erasmus, como esfuerzo de inclusión, y su seguimiento. Creo que lo que podemos hacer es jalar —perdón por este mexicanismo—, jalar. Toda la experiencia Erasmus es muy importante, además, porque quizá no todos se lo crean del todo, pero Madrid se dedica en Europa a tirar hacia América Latina sistemáticamente. Que la cooperación internacional incluya a los países hermanos, a los pueblos hermanos de América Latina y el Caribe: creo que también esto es una línea de inclusión.</p><p>Una experiencia que me parece interesante son las alianzas, como esta. También desde la Unión Europea se están fomentando alianzas estables; por eso creo que tenemos una oportunidad. Y esto también es una fórmula de inclusión. Las alianzas estables no necesariamente son alianzas cómodas, porque somos diferentes. Lo cómodo es hacerlas con universidades fuertes, con universidades que tienen experiencia, que tienen recorrido. Pero creo que la inclusión también es inclusión institucional; es decir, saber que, si uno es fuerte, es bueno que tenga junto a él, siempre contando con él, con las debilidades que tenga, a una institución que tiene más carestía, menos experiencia, más debilidades.</p><p>Y luego pienso en los recelos institucionales. Me parece que una línea que también es parte de ser inclusivos es que los que estamos en internacional tenemos que remover los recelos institucionales, que a veces son recelos regionales, recelos nacionales: «¿Cómo vamos a trabajar nosotros con —qué sé yo— tal país, con tal región?». Me parece que esos recelos también son importantes, y eso también es inclusión; eso también es abrir mentes.</p><p>Y un último punto —aunque diría algunos más, pero no los voy a desarrollar—: me parece que es la transparencia. Los de internacional tenemos fama de que no hacemos nada: hacemos viajes, mandamos fotos… Por eso insisto en que se pongan fotos trabajando. Pero me parece que tenemos que ser transparentes. RIUDICC tiene que decir: «Mira, esta es una convocatoria abierta. Tú puedes beneficiarte de esta formación que da RIUDICC». Y eso es una convocatoria abierta, transparente, a la que no solo pueden optar estudiantes, sino profesorado, investigadores y personal, porque es muy bueno que el personal administrativo se implique, como se ve aquí en la sala. Y esa transparencia también es inclusión; es una inclusión natural. Un sistema, un portal de comunicación de las oportunidades, también es inclusión. Me parece que la inclusión va mucho más allá.</p><p>Y lo último, en esto del fomento de la internacionalización. A mí me parece que hay estas palabras que a veces no me gustan mucho. Hay cosas que salen mal; ante ello, resiliencia, o sea, volver a empezar. Hay cosas que parece que no dan fruto; ante ello, constancia, o sea, seguir repitiendo. Y luego, el esfuerzo institucional: la vinculación también tiene que ser institucional, por encima de las personas, que vamos, volvemos y pasamos.</p><p>Bueno, al menos esta es una reflexión que sé que ustedes conocen, pero quería darle un poco de forma a qué significa una internacionalización inclusiva.</p><h3>Carmen Salgado Santamaría</h3><p>Pensando ya en lo que es la segunda parte, un RIUDICC 2.0, yo creo que, después de ver todo el trabajo que se ha desarrollado, no se puede desperdiciar. Cuando se crea una red, ya no solo de países, sino de universidades, sino de personas, creo que hay que aprovecharlo, porque de aquí habrá muchas sinergias que se podrán utilizar. Ya que se ha conseguido esta unión entre todas las personas que forman parte de este proyecto, creo que lo más importante es aprovecharlo y decir «vamos a continuar»; y ya que tenemos esta sinergia, vamos a ir hacia ella.</p><p>En ese sentido, desde la experiencia de la Complutense, yo quería traerles una propuesta: pasar un poco del análisis a lo que tenemos que hacer con todo esto que hemos aprendido y cómo llevarlo a la práctica, hacer un nuevo proyecto. Espero que todos lo puedan evaluar y que todos podamos colaborar.</p><p>Yo sí me quedé con la idea de la importancia que tienen la universidad, la empresa y la sociedad. Entonces, desde ese eje, considero que es muy importante que vayamos aprovechando esas experiencias de inclusión que se han desarrollado entre las universidades latinoamericanas y las dos europeas, Italia y España. Yo creo que es el momento de que se haga esa transferencia del conocimiento y de que se pase de la cooperación a lo que, insisto, es un eje que creo fundamental de trabajo: universidad, empresa y sociedad.</p><p>La propuesta es evolucionar desde un análisis de todo lo que hemos hecho en las políticas universitarias de inclusión y su impacto en la sociedad hacia un modelo de colaboración en el que las empresas participen activamente en la construcción de entornos laborales más inclusivos, accesibles y equitativos. Esta es una idea en la que nosotros ya venimos trabajando y que creo que se puede materializar bien en este proyecto.</p><p>¿Qué tenemos que hacer? Aprovechar toda esta experiencia, todo este conocimiento y las redes que ya están construidas para generar nuevas alianzas con otras universidades, y aplicar todo este resultado al tejido productivo. Porque, al final, no olvidemos que nuestros estudiantes, una vez que se han formado, que han viajado, que han hecho sus intercambios, tienen que incorporarse al mercado laboral. Este es el objetivo básico de lo que la mayoría tenemos que hacer: formamos, trabajamos e investigamos. Si ahora somos capaces de trasladar todo ese conocimiento y hacer partícipes a las instituciones y a las organizaciones, creo que daríamos un paso mucho más relevante, porque facilitaríamos el camino de los estudiantes hacia su futuro laboral.</p><p>Nosotros creemos en esto en la Complutense, y quiero contar brevemente una pequeña experiencia. Igual que tenemos oficinas de relaciones internacionales, tenemos oficinas de prácticas. La Complutense tiene una oficina de prácticas grande, que gestiona las 26 facultades que tenemos. Está todo automatizado, sistematizado; tenemos todos los perfiles, de usuario, de gestor, de empresa, y está todo muy bien a través de una aplicación. La oficina la llamamos la OPE, la Oficina de Prácticas y Empleo, y la aplicación se llama GIPE, que es Gestión Integral de Prácticas Externas.</p><p>Bueno, pues yo, desde el ámbito de la internacionalización, veo que tenemos una carencia. Tenemos una carencia porque no hemos sido capaces de pensar en que las prácticas internacionales —de las que todos tenemos ofertas que nos van llegando— se puedan canalizar de la forma más fácil posible, de forma que al final lleguen a todo el mundo. En cada facultad hacemos esfuerzos para difundir toda la información que va llegando a nuestros estudiantes y que vean las oportunidades que se abren, tanto de empresas españolas en sus delegaciones en el extranjero como de empresas extranjeras que quieren nutrirse de nuestros estudiantes.</p><p>Entonces, creo que, aunque hacemos muchísimos esfuerzos, no hemos sido todavía capaces de crear esa oficina de prácticas internacionales, o al menos un apartado en nuestra OPE, para dar cabida y transparencia, para que todos los estudiantes de la Complutense puedan entrar en esta aplicación, con la que ya estamos todos muy familiarizados, pero relacionándola también con los vínculos que tenemos con los convenios internacionales, para facilitar esa estancia y que no sea solo para los estudios, sino para trabajar.</p><p>Nosotros tenemos empresas e instituciones que ya funcionan muy bien. No tendríamos más que decirles: «Vamos a extrapolar y vamos a crear un marco más amplio con Latinoamérica», y no tendríamos ninguna dificultad. Pero no hemos sido capaces de hacerlo hasta ahora; entonces creo que tenemos que dar ese paso. Todo eso va enfocado a la importancia que nosotros consideramos que tiene la empleabilidad de los estudiantes que ya se han formado en esas universidades y que tienen que dar un servicio al tejido productivo y un servicio a la sociedad, porque con toda esa formación hay que hacer algo: hay que trasladarla a las mejores empresas.</p><p>Nosotros tenemos muy buenos convenios de prácticas para estudiantes de todo tipo de nacionalidades —por supuesto, también españoles—, para que puedan hacer prácticas curriculares o extracurriculares, que es distinto, en empresas como, por ejemplo, la Agencia EFE, que, como saben, tiene aquí en Latinoamérica casi su rama más importante del mundo. Hablo del ámbito del periodismo porque es el que yo conozco mejor; en nuestra facultad tenemos Periodismo, Comunicación Audiovisual y Publicidad, y en los tres ámbitos hay otros tipos de empresas con las que podríamos hacer lo mismo.</p><p>Y muchas veces estas entidades me dicen: «Carmen, por favor, mándanos alumnos». También tenemos muchos alumnos latinoamericanos que hacen primero la maestría con nosotros y luego las prácticas, porque estas empresas quieren mandarlos a sus delegaciones. Y no es la primera vez que, desde la maestría, hemos mandado a alumnos que se han formado en nuestra facultad y que han terminado aquí como responsables en la Agencia EFE, por ejemplo.</p><p>Nos pasa lo mismo con otra institución, como es Casa de América, con la que tenemos una relación estrechísima, con alumnos tanto españoles como de cualquier nacionalidad. Y nos dicen lo mismo: «Queremos conocer a esos estudiantes que vengan, porque nos interesa todo el valor que pueden aportar».</p><p>Entonces, claro, por eso pensamos que es tan importante que seamos capaces de difundir y dar a conocer, y por eso es importante el tablón de convocatorias. A veces son becas de un año; otras son tres meses de prácticas. Pero eso luego es una forma de empezar, para luego continuar.</p><p>Por eso pensamos que es tan importante que podamos dar a conocer la oficina de prácticas y que haya un vínculo muy estrecho, que ahora mismo no tenemos. Estamos funcionando en mundos separados: por un lado la internacionalización, por otro lado las prácticas. Y las pocas prácticas internacionales que conseguimos sacar están dando unos resultados impresionantes, aunque ni siquiera tenemos datos. Lo veo como un piloto: queríamos fomentar esto desde esta experiencia.</p><p>Esto está relacionado no solo con una oficina de prácticas, sino con el emprendimiento. Creemos mucho en ello; consideramos que el emprendimiento es una parte muy importante para que los estudiantes también sepan encontrar su camino, y también está relacionado con nuestro objetivo de internacionalización, porque muchos de ellos, por supuesto, no quieren emprender solo en nuestro ámbito tan pequeño de España: quieren emprender en la Unión Europea, quieren emprender aquí. Entonces tenemos que abrir también esas puertas.</p><p>Esa iniciativa en la Complutense se llama Compluemprende, que es la oficina que trata de dar servicio a toda la comunidad universitaria —tanto profesores como PAS como estudiantes—, que informa y crea espacios de emprendimiento para que los alumnos puedan crear sus propias empresas y sus propias ideas. En las facultades hay además preincubadoras de emprendimiento, y en concreto la de nuestra Facultad de Ciencias de la Información se llama Metamorphosis. Ha dado un resultado muy positivo: el año pasado tuvo un premio, porque una de las alumnas creó un proyecto con una idea muy clara. Consideró que era importantísimo que todos los alumnos, al menos de la Complutense, tuvieran acceso a todas las convocatorias que hace la Unión Europea, de todo tipo de proyectos, para el trabajo y para la internacionalización.</p><p>Quiero poner en valor que esa pata del emprendimiento, sumada a la pata de empresa, sociedad y universidad, en conjunto puede crear muchas soluciones muy buenas para toda nuestra comunidad educativa. Nosotros creemos en esto; yo estoy apostando por esto. Trabajamos continuamente para que la OPE, el emprendimiento y nuestro propio trabajo en internacionalización estén llenos de oportunidades que nuestros alumnos tengan al alcance de la mano.</p><p>A partir de este proyecto hemos comprobado cómo los alumnos ya no están perdidos como estaban antes. Ahora saben a dónde dirigirse, saben lo que pueden encontrar; está muy bien catalogado, está muy bien explicado, y no pasa lo que suele ocurrir: que de las convocatorias se entera uno, dos o ninguno. Y entonces, al final, ¿qué pasa? Pues que no estamos dando todas las oportunidades a todas las personas por igual.</p><p>Si somos capaces de unir el emprendimiento, la participación de las empresas y las capacidades que tenemos en internacional, creo que habremos sido capaces de avanzar.</p>",
   "nota": "Nota editorial: transcripción editada de la conferencia. Se conservan las palabras de los ponentes; solo se han eliminado repeticiones y frases incompletas propias de la oralidad, así como las presentaciones, los agradecimientos y las menciones personales. El resumen es de la edición.",
   "pdf": "docs/publicaciones/ruiz-salgado-2026-comunicacion-inclusiva.pdf",
   "permiso": true
  },
  {
   "slug": "rosario-2026-la-persona",
   "tipo": "Ponencia",
   "anio": 2026,
   "fecha": "2026-07-20",
   "titulo": "La persona: el seguimiento como sostén de la internacionalización universitaria",
   "autores": [
    "Suany Rosario"
   ],
   "institucion": "Universidad Autónoma de Santo Domingo (UASD)",
   "revista_evento": "Jornada RIUDICC, 20 de julio de 2026",
   "idioma": "es",
   "temas": [
    "Gestión de la internacionalización",
    "Proyectos Erasmus+"
   ],
   "resumen": "Esta reflexión parte de una experiencia de gestión universitaria para preguntarse quién sostiene la internacionalización en una universidad. Arranca con dos conversaciones: una en la que la autora es presentada como «la persona», el contacto que siempre responde y da seguimiento, y otra en la que una responsable de relaciones internacionales compara los convenios y las movilidades con un niño pequeño al que hay que cuidar. Luego relata el caso de un proyecto Jean Monnet, del programa Erasmus+, llamado aquí «Proyecto X», que llegó a la universidad por una conversación casual, se asignó a una facultad alejada de su tema, la gobernanza de la inteligencia artificial, y estuvo a punto de perderse al quedar sin un responsable. Su recuperación, gracias a la revisión de la plataforma del proyecto, la implicación de las autoridades y el restablecimiento del contacto con el coordinador, deja tres aprendizajes: un proyecto internacional pertenece a la universidad y no a una facultad, un investigador o una oficina; los proyectos no se sostienen solos; y hay una gran diferencia entre hablar de internacionalización y sostenerla.",
   "palabras_clave": [
    "internacionalización universitaria",
    "gestión de proyectos internacionales",
    "seguimiento institucional",
    "Erasmus+",
    "Jean Monnet",
    "cooperación académica"
   ],
   "texto": "<p>Además de mi labor docente, desde la Vicerrectoría de Investigación y Postgrado de mi universidad me ha tocado dar seguimiento a convenios, proyectos y movilidades, que son hilos de la internacionalización. Este texto recoge esa experiencia a partir de un proyecto Jean Monnet, al que llamaré «Proyecto X», y de dos conversaciones que ayudan a entenderla.</p><p>La primera tuvo lugar en una actividad en una embajada. Una representante de una agencia de cooperación educativa, con quien había colaborado en unas charlas, me presentó ante un grupo de personas como «la persona». La reacción de los presentes fue de reconocimiento inmediato, y yo me pregunté a qué se referían. Luego entendí que «la persona» es ese contacto al que se puede llamar y que siempre responde; que da seguimiento, consigue una firma y está pendiente de colaborar aunque el asunto no pertenezca a su área.</p><p>La segunda conversación fue con una responsable de relaciones internacionales de una universidad italiana, después de un largo proceso para formalizar un convenio entre nuestras instituciones. Su reflexión fue que las autoridades deberían entender que un convenio o una movilidad son como un niño pequeño, al que hay que cuidar para que pueda salir adelante.</p><p>Mi universidad cuenta con una dirección de cooperación y relaciones internacionales. En cuanto a la investigación, además de la vicerrectoría, tiene una dirección general de investigaciones y, a su vez, cada facultad dispone de direcciones de investigación, laboratorios e institutos.</p><p>Surge entonces una pregunta: cuando a una universidad como la nuestra llega un proyecto de investigación internacional, ¿quién es responsable de darle seguimiento? ¿El investigador, la facultad, la oficina de relaciones internacionales, la dirección de investigaciones, la rectoría? ¿Todos?</p><p>Las oportunidades de colaboración pueden surgir por distintas vías. A veces nacen de una convocatoria; otras veces, de una manera más sencilla: un profesor asiste a un congreso y conoce a un colega, tiene un amigo que trabaja en una universidad extranjera o, simplemente, la oportunidad surge de una conversación con un extraño.</p><p>El Proyecto X llegó a mi universidad precisamente así, a través de una conversación entre dos extraños. En una exposición sobre transformación digital, un profesor de una universidad técnica alemana conoció a un joven empresario que hablaba sobre transformación digital en nuestro país, y lo invitó a participar en un proyecto Erasmus+.</p><p>El joven llevó la propuesta a la universidad presentándola como un proyecto sobre «el uso de la inteligencia artificial en nuestro país», por lo que se decidió vincularlo a la Facultad de Ciencias. Sin embargo, el proyecto no trataba específicamente de inteligencia artificial, sino de gobernanza y políticas públicas en su uso. El tema central era la gobernanza, un campo alejado del perfil de los investigadores de ciencias.</p><p>A este reto se sumaron los aspectos administrativos: identificar al LEAR (representante legal de la institución ante la Comisión Europea), activar el código PIC (código de identificación del participante), gestionar la contratación del investigador externo, dar seguimiento a los fondos y dar seguimiento a la participación en los paquetes de trabajo.</p><p>Más adelante se incorporó al equipo otra persona de la Facultad de Ciencias. En ese momento opté por concentrarme en RIUDICC y dejar el Proyecto X en manos de su equipo.</p><p>Mientras RIUDICC avanzaba, al regresar de la reunión del proyecto en Guatemala, me interesé por saber cómo iba el Proyecto X. Supe entonces que había quedado sin un responsable y que nuestra participación estaba en riesgo. Me enteré por casualidad, y justo a tiempo.</p><p>Lo primero que hice fue entrar en la plataforma del proyecto y revisar el historial de comunicación. Efectivamente, el coordinador ya estaba consultando cómo proceder con nuestra participación. Conversé entonces con las autoridades de mi universidad, que se implicaron de inmediato para buscar soluciones y designar un nuevo equipo de investigadores.</p><p>Lo más importante era restablecer el contacto con el coordinador. Le explicamos la situación y nuestro interés en continuar. Su respuesta fue atenta y clara: les interesaba que siguiéramos como socios, con el compromiso de una participación activa.</p><p>Nos comprometimos como universidad. De manera particular, di mi palabra y, aunque no pertenezco al área de Informática ni de Políticas, ni era la persona a cargo, comencé a participar activamente en las reuniones para garantizar que nuestra universidad tuviera presencia.</p><p>Esta experiencia me dejó tres aprendizajes. El primero, que un proyecto internacional no pertenece a una facultad, ni a un investigador, ni a una oficina: pertenece a la universidad. El segundo, que los proyectos no se sostienen solos; alguien tiene que estar ahí. Y el tercero, que hay una gran diferencia entre hablar de internacionalización y sostener la internacionalización.</p><p>Allí donde una universidad todavía no tiene una estructura para dar seguimiento a estos aspectos, pienso que cada uno de nosotros puede decidir ser «la persona».</p><p>Porque, al final, detrás de cada movilidad, de cada convenio y de cada proyecto, siempre hay una persona. La persona que responde, la persona que conecta, la persona que pregunta qué pasó, la persona que no permite que una oportunidad se pierda. Y la persona que cuida cada movilidad, cada convenio, cada proyecto, como si fuera un niño pequeño.</p>",
   "nota": "Nota editorial: reflexión adaptada de la ponencia a un estilo narrativo, conservando las ideas y expresiones de la autora. Se han omitido los nombres de las instituciones y personas mencionadas. El resumen es de la edición.",
   "pdf": "docs/publicaciones/rosario-2026-la-persona.pdf",
   "permiso": true
  }
 ],
 "blog": [
  {
   "slug": "quien-es-la-mas-vulnerable",
   "titulo": {
    "es": "¿Quién es la más vulnerable?"
   },
   "autor": "Suany Rosario",
   "cargo": "Universidad Autónoma de Santo Domingo (UASD)",
   "institucion": "universidad_autonoma_santo_domingo",
   "evento": "",
   "fecha": "2026-11-08",
   "extracto": {
    "es": "En 2025 recibimos una solicitud de beca KA171 para una movilidad a Francia, donde serían beneficiadas 3 personas. Comenzamos con el proceso de difusión de la beca en las comunidades de estudiantes…"
   },
   "texto": {
    "es": "<p>En 2025 recibimos una solicitud de beca KA171 para una movilidad a Francia, donde serían beneficiadas 3 personas. Comenzamos con el proceso de difusión de la beca en las comunidades de estudiantes. Debían ser estudiantes de ingenierías o ciencias aplicadas, ya que esa era la naturaleza de la institución anfitriona, el Instituto Nacional de Ciencias Aplicadas (INSA), en Rouen, Francia.</p><p>Solo aplicaron unas cuantas personas. Algunas fueron descartadas porque sus carreras no eran compatibles. Luego estaban los filtros del idioma, tener un buen récord académico y poseer algún mérito por labores comunitarias. Resultaron ser 3 chicas. Teníamos a nuestras 3 seleccionadas.</p><p>Creamos un grupo para compartir instrucciones y mantenerlas informadas del proceso. Una de ellas era la más despierta, siempre estaba activa y todo lo que le instruía lo captaba de inmediato. Era la que mostraba más interés, inspiraba a las demás, buscaba información, pedía más orientación.</p><p>Recuerdo que para esos días montamos una actividad sobre oportunidades de movilidad de Campus France y ella fue. Pude conocerla en persona. Aprovechó la charla para aprender más sobre el proceso. Como gestora, te sientes bien cuando encuentras jóvenes con ese marcado interés de aprovechar una oportunidad.</p><p>Cuando pensábamos que todo iba bien, surgió una situación. La universidad anfitriona nos informó que no había suficientes asignaturas en inglés para las estudiantes de esa carrera y que, sin un dominio suficiente del francés, no podrían ser recibidas. Por suerte, la universidad también tenía interés en recibir a nuestras estudiantes y se consiguió aplazar la movilidad. Finalmente, fueron aceptadas para el siguiente semestre.</p><p>Cuando se acercaba la fecha de firmar los documentos para su movilidad, me escribe la encargada de movilidad de la universidad anfitriona y me informa que, como parte de la beca, había una ayuda especial de 1,200 euros para \"people with fewer opportunities\".</p><p>Pero yo tengo tres estudiantes. Me sentí como el sabio rey Salomón ante esta disyuntiva.</p><p>Traté de ver si podía conseguir la ayuda para las tres y me dijeron que solo se ofrecía a dos. De verdad que es difícil decidir cuando estás en una universidad pública, donde gran parte de la matrícula corresponde a estudiantes de bajos recursos. ¿Cómo demostrar cuál era la más vulnerable de las tres? Y lamentablemente, la que tenía más interés parecía tener mejores condiciones de vida. El convenio especificaba lo siguiente:</p><blockquote class=\"cita\" lang=\"en\"><p>“Participants will be required to provide supporting documents, such as proof of eligibility for university grants or social assistance, as well as evidence demonstrating their inability to participate in mobility without additional financial support.”</p></blockquote><p>Ahora bien, ¿cómo podía demostrar que mis chicas eran vulnerables, cuando gran parte de la población estudiantil de la UASD procede de familias de escasos recursos? Pues, lo primero es que nuestra universidad tiene diferentes categorías según la procedencia de los estudiantes. Quienes estudiaron en liceos públicos pertenecen a la categoría 50, una de las más bajas, mientras que los egresados de colegios privados pagan según la mensualidad de la institución de donde proceden.</p><p>Revisando sus antecedentes, dos de las jóvenes pertenecían a la categoría 50. Sin embargo, la más despierta procedía de una institución católica ubicada en una zona un poco más privilegiada y pertenecía a la categoría 60. Luego, revisando sus direcciones de residencia en los documentos de identidad, pude identificar que las otras dos vivían en zonas consideradas de alta vulnerabilidad.</p><p>Así que preparé una carta para justificar su condición de vulnerabilidad. Expliqué que nuestra universidad, por su naturaleza pública, facilita el acceso a la educación superior a estudiantes de escasos recursos, mediante un sistema de categorías de pago según su procedencia. Dos de las jóvenes pertenecían a la categoría 50, reservada para estudiantes de liceos públicos, mientras que la tercera estaba en la categoría 60, correspondiente a quienes proceden de colegios privados.</p><p>La carta fue firmada por el vicerrector y enviada al INSA, incluyendo también el expediente de la tercera estudiante y explicando que, aunque pertenecía a la categoría 60, el costo de su matrícula no llegaba siquiera a los 100 euros por semestre.</p><p>Así que, al informarles a las chicas que solo dos de ellas podrían ser beneficiadas con esa ayuda de 1,200 euros adicionales, les dije:</p><blockquote class=\"dicho\"><p>Sé que las tres estudiaron en instituciones del estado, pero dos de ustedes caen en la categoría de \"person with fewer opportunities\".</p></blockquote><blockquote class=\"dicho\"><p>Como ustedes son un grupo de tres, serán como 3 hermanas que se brindarán apoyo durante esta experiencia lejos de casa, si conseguimos esa ayuda, la que no sea beneficiada ustedes la ayudan.</p></blockquote><p>La justificación fue aceptada y las dos jóvenes recibieron la ayuda adicional. Pero seguía pensando en la tercera. Que pagara una categoría diferente o viviera en una zona menos vulnerable no significaba necesariamente que tuviera los recursos suficientes para realizar aquella movilidad. Una vez más, les recordé:</p><blockquote class=\"dicho\"><p>Ustedes recibieron una ayuda adicional de 1200 euros. A ustedes les toca apoyar a su compañera que también tiene las mismas necesidades que ustedes. Y para que el dinero les rinda es bueno que se manejen como un grupo. Vayan investigando desde ahora dónde se hospedarán [...], luego les puedo dar más tips de supervivencia que conozco.</p></blockquote><p>Por lo que sé, así lo hicieron.</p><p>Las jóvenes llegaron a Francia en enero de 2026, después de superar los obstáculos del idioma y algunos trámites propios del proceso.</p><p>Al final, la ayuda económica fue para dos, pero la experiencia, las alegrías y la oportunidad de salir juntas fueron para las tres. Se apoyaron mutuamente y crearon un vínculo como hermanas que salieron de su zona de confort, quizás con miedo, pero unidas para vivir una experiencia que seguramente recordarán por toda la vida.</p>"
   },
   "permiso": true
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
   "parrafos": [
    "Vivir durante seis meses en Francia, realizando un intercambio académico en INSA Rouen, ha sido una de las experiencias más increíbles y enriquecedoras de mi vida. No solo significó estudiar en una institución diferente, sino también salir de mi país por primera vez, enfrentarme a un entorno completamente nuevo y aprender a desenvolverme en una cultura distinta a la mía.",
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
   "parrafos": [
    "Mi experiencia de movilidad fue profundamente transformadora, tanto a nivel personal como académico. A través del programa Erasmus+, tuve la oportunidad de cursar un semestre completo en INSA Rouen Normandie, en Francia. Durante ese tiempo pude adaptarme a una dinámica académica internacional de alto nivel, conectar con personas de diversas culturas y nacionalidades, y explorar la riqueza cultural y cotidiana de Europa."
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
