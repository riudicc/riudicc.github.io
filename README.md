# RIUDICC · Comunidad

Sitio comunitario de **RIUDICC**, un proyecto Erasmus+ (Capacity Building in Higher Education). Reúne:

- convocatorias de movilidad;
- el observatorio de internacionalización;
- testimonios;
- la guía para estudiantes;
- el asistente de movilidad.

Está disponible en español, inglés, italiano y francés.

> Cofinanciado por la Unión Europea. No obstante, los puntos de vista y opiniones expresados son exclusivamente los del autor o autores y no reflejan necesariamente los de la Unión Europea o los de la autoridad que concede la subvención. Ni la Unión Europea ni la autoridad que concede la subvención pueden ser consideradas responsables de ellos.

## Cómo está hecho

Es un sitio estático: no necesita servidor, base de datos ni instalación.

| Archivo | Qué contiene |
|---|---|
| `index.html` | Todo el sitio: páginas, estilos y lógica |
| `404.html` | Página de «no encontrada» |
| `data/ofertas.js` | Convocatorias y programas que abren cada año |
| `data/comunidad.js` | Equipo, testimonios, menciones en redes y créditos |
| `data/contenido.js` | Noticias y textos de la red |
| `data/servicios.js` | Servicios gratuitos, asesorías y guía para estudiantes |
| `data/asistente.js` | Preguntas frecuentes del asistente de movilidad |
| `data/impacto.js` | Página «Capacitación e impacto» |
| `data/interfaz.js` | Textos de la interfaz en los cuatro idiomas |
| `data/observatorio*.js`, `data/mundo.js` | Datos y mapa del observatorio. El archivo `mundo.js` no se edita a mano |
| `img/` | Logos, noticias, menciones y fotos de testimonios |
| `.nojekyll` | Indica a GitHub Pages que publique los archivos tal cual |

Cada archivo de `data/` tiene esta forma: `window.NOMBRE=` seguido de **JSON válido** y un `;` al final. Si una coma o unas comillas quedan mal, la sección afectada deja de mostrarse. Antes de guardar, revisa el cambio en un validador de JSON, por ejemplo jsonlint.com.

## Cómo actualizar el contenido

En GitHub puedes editar cualquier archivo con el icono del lápiz. Para guardar, pulsa **Commit changes**; el sitio se actualiza en uno o dos minutos.

### Añadir una convocatoria (`data/ofertas.js`)

Copia una entrada existente, pégala justo después de `window.OFERTAS=[` y cambia los campos:

```json
{
  "id": "nombre-corto-unico-2027",
  "estado": "Aprobada",
  "tipo_registro": "convocatoria",
  "titulo": "Nombre de la beca o convocatoria",
  "entidad": "Quién la ofrece",
  "tipo": "Beca",
  "pais": "País de destino",
  "nivel": "Grado | Postgrado | Investigadores | Todos",
  "modalidad": "Presencial | Virtual | Mixta",
  "area": "Todas",
  "fecha_limite": "AAAA-MM-DD",
  "cubre": "Qué cubre",
  "descripcion": "Requisitos y detalles en dos o tres frases.",
  "enlace": "https://enlace-oficial",
  "apoyos_inclusion": false
},
```

- Solo se muestran las entradas con `"estado": "Aprobada"`.
- Las convocatorias vencidas se ocultan solas.
- Para un **programa que abre cada año**:
  - usa `"tipo_registro": "programa"`;
  - deja `fecha_limite` vacío;
  - explica en `"apertura"` cuándo suele abrir.
- Si solo aplica a República Dominicana, añade `"solo_pais": "DO"`.

### Añadir un testimonio (`data/comunidad.js` → `testimonios`)

1. Consigue **por escrito** la autorización de la persona para publicar su nombre, su texto y su foto.
2. Sube la foto a `img/testimonios/`.
3. Copia la entrada de un testimonio existente y cambia `nombre`, `institucion`, `carrera`, `movilidad`, `texto` (frase para la tarjeta), `parrafos` (el texto íntegro, tal como lo envió la persona), `consejo`, `foto` y `foto_alt`. Si la persona sale pequeña en la tarjeta, `foto_posicion` (por ejemplo `"50% 80%"`) mueve el encuadre hacia abajo.
4. Deja `"permiso": true` solo si tienes esa autorización.

### Añadir una mención en redes (`data/comunidad.js` → `menciones`)

```json
{"red": "linkedin", "autor": "Universidad X", "fecha": "AAAA-MM-DD",
 "titulo": "Título de la publicación", "imagen": "img/menciones/archivo.jpg",
 "url": "https://enlace-a-la-publicacion"}
```

- En `red` va `linkedin`, `facebook` o `instagram`.
- Solo se muestran las menciones que tienen título e imagen.
- La imagen va en `img/menciones/`. Una captura de la publicación sirve.

### Textos de la interfaz (`data/interfaz.js`)

Cada texto aparece cuatro veces, una por idioma (`es`, `en`, `it`, `fr`). Si cambias un texto, cámbialo en los cuatro.

## Cómo colaborar

- **Sin saber de código:** en la pestaña **Issues › New issue** hay formularios para proponer una convocatoria, un ajuste, un testimonio o una mención. El equipo los revisa y los publica.
- **Con cuenta de GitHub:** abre el archivo, pulsa el lápiz, haz el cambio y elige **Propose changes**. El cambio queda pendiente hasta que alguien del equipo lo aprueba.
- **Equipo editor:** quienes tienen permiso de escritura pueden editar directamente, siguiendo las instrucciones de arriba.

Normas: no publicar datos personales sin autorización escrita, ni documentos internos del proyecto (diagnósticos, entregables o actas) sin aprobación de la coordinación.

**Caché:** GitHub Pages guarda cada archivo hasta 10 minutos en el navegador de quien visita el sitio, así que un cambio puede tardar ese tiempo en verse. Para verlo al instante, recarga con **Ctrl + F5**. Si cambias `index.html` y también algún archivo de `data/`, sube el número `?v=` de las líneas `<script src="data/…">` al final de `index.html`.

## Publicación

El sitio se publica con **GitHub Pages**: *Settings › Pages › Deploy from a branch › `main` / root*.

## Créditos

Plataforma digital, comunicación y difusión (WP6): Universidad Politécnica Salesiana (UPS). Los créditos completos están en el sitio.
