# Agente de convocatorias · Comunidad RIUDICC

Instrucciones para el agente de IA que revisa cada semana las convocatorias del
sitio de la comunidad (https://riudicc.github.io) y propone cambios en `data/ofertas.js`.

## Qué se publica aquí (y qué no)

La sección «Convocatorias» de la comunidad reúne **becas y oportunidades
internacionales abiertas a cualquier persona**, sin importar de qué país o de qué
universidad venga, siempre que cumpla los requisitos académicos.

Sí entra:
- Becas de gobiernos y organismos internacionales abiertas a muchas nacionalidades
  (por ejemplo: Erasmus Mundus, DAAD, Eiffel, MEXT por recomendación universitaria,
  Stipendium Hungaricum, Türkiye Bursları, Fundación Carolina, OEA).
- Programas de movilidad abiertos a personas de muchos países o regiones
  (por ejemplo, Iberoamérica en su conjunto).

No entra:
- **Becas nacionales**, solo para personas de un país (por ejemplo MESCyT, Fulbright
  de un país concreto, Becas Generación STEAM). Van en el observatorio de cada país o universidad.
- **Ofertas propias de una universidad** de la red (movilidad entrante, convenios
  bilaterales, plazas internas). Cada universidad las publica en su propio observatorio
  (por ejemplo, la UASD en riudicc-uasd).
- Convocatorias cerradas, rumores o anuncios sin fuente oficial.

Si una convocatoria limita la elegibilidad a una lista de países, puede entrar
si la lista es amplia (varias regiones). Dilo en `descripcion`.

## Reglas

- Solo convocatorias **abiertas** en la fecha de la revisión o que abran en los próximos 30 días.
- Cada dato sale de la **página oficial** de la convocatoria. Nunca inventar fechas,
  montos ni requisitos. Si un dato no aparece, dejar el campo vacío (`""`).
- `fecha_limite` es la fecha de cierre oficial (`AAAA-MM-DD`). Explicar en `descripcion`
  la hora y la zona horaria del cierre si se conocen.
- `enlace` apunta a la página o PDF oficial, nunca a un blog o agregador.
- Números con punto para los decimales y coma para los miles (1,500 €).
- No agregar datos personales de nadie.
- No duplicar: comparar con los `id`, títulos y enlaces que ya existen.
- Las fichas `tipo_registro: "programa"` describen becas que abren cada año. Cuando una
  de ellas abra su nueva convocatoria, añadir una entrada `convocatoria` con la fecha real
  (sin borrar el programa) y actualizar su campo `revisado`.
- Se pueden borrar convocatorias vencidas hace más de 60 días.
- Actualizar la línea «Última revisión: AAAA-MM-DD» del comentario inicial.
- **Nunca editar a mano el JSON**: cargarlo con Python y volver a escribirlo con
  `json.dumps(lista, ensure_ascii=False, indent=1)`. El comentario inicial también
  contiene el texto `window.OFERTAS=`: el array empieza en la línea que comienza por
  `window.OFERTAS=`.
- Cambiar en `index.html` el parámetro de versión de `ofertas.js` (`ofertas.js?v=...`)
  por la fecha del día (`AAAAMMDD`) para que los navegadores descarguen el archivo nuevo.

## Formato de cada entrada

```json
{
  "id": "organismo-programa-anio",
  "estado": "Aprobada",
  "tipo_registro": "convocatoria",
  "origen": "agente",
  "titulo": "Nombre oficial de la convocatoria",
  "entidad": "Organismo que la ofrece",
  "tipo": "Beca",
  "pais": "País de destino",
  "nivel": "Postgrado",
  "modalidad": "Presencial",
  "area": "Áreas o 'Todas'",
  "fecha_limite": "2026-12-15",
  "plazas": "",
  "cubre": "Qué financia",
  "descripcion": "Requisitos clave, quién puede postular, cómo postular, hora de cierre.",
  "enlace": "https://…",
  "contacto": "",
  "apoyos_inclusion": false
}
```

Valores permitidos:
- `tipo`: Beca · Intercambio semestral · Curso corto · Estancia de investigación ·
  Profesor visitante · COIL / movilidad virtual · Pasantía
- `nivel`: Grado · Postgrado · Docentes · Investigadores · Personal administrativo · Todos
- `modalidad`: Presencial · Virtual · Híbrida
- `tipo_registro`: `convocatoria` (con fecha) o `programa` (abre cada año; usa `apertura` y `revisado`)

## Comprobaciones antes de proponer el cambio

1. `python3 agente/validar_ofertas.py` debe decir «correcto».
2. Abrir el sitio en local (`python3 -m http.server`) con un navegador sin interfaz
   (Playwright con Chrome) en `index.html#convocatorias`: sin errores de JavaScript,
   con el contador «convocatorias · vencidas ocultas» y con las entradas nuevas visibles.

## Fuentes a vigilar

- Erasmus Mundus (catálogo) — https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en
- DAAD — https://www.daad.de · Campus France / Eiffel — https://www.campusfrance.org
- Fundación Carolina — https://www.fundacioncarolina.es · AUIP — https://auip.org · OEI
- Stipendium Hungaricum — https://stipendiumhungaricum.hu · Türkiye Bursları — https://www.turkiyeburslari.gov.tr
- Gobierno de Italia (MAECI) — https://studyinitaly.esteri.it
- MEXT (Japón, recomendación universitaria) · GKS (Corea) — https://www.studyinkorea.go.kr
- Swiss Government Excellence Scholarships — https://www.sbfi.admin.ch/scholarships_eng
- OEA — https://www.oas.org/es/becas/ · AGCID (Chile) — https://www.agci.cl
- Becas de Excelencia del Gobierno de México (AMEXCID) · ELAP (Canadá) · Chevening

## Cómo se ejecuta

Tarea programada semanal en Claude: sigue estas instrucciones, sube los cambios a una
rama `convocatorias/AAAA-MM-DD` y envía un correo con el enlace para revisarlos y
publicarlos con un clic (`main` está protegida y exige aprobación).
