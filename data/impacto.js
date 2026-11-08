/* Capacitación e impacto de RIUDICC (Erasmus+ CBHE, cofinanciado por la Unión Europea).
   - Publicar solo datos aprobados por la coordinación. Cada universidad informa sus acciones.
   - Mientras haya entradas con "ejemplo": true, la página muestra la etiqueta «Ejemplo».
     En cuanto se agregue la primera entrada real (sin "ejemplo"), los ejemplos dejan de mostrarse.
   - "estado" de cada acción: "realizada", "en_curso" o "prevista".
   - "institucion" usa el slug de las universidades de data/contenido.js.
   - Textos en "es" (y "en" si se tiene); en italiano y francés se muestra el español con un aviso.
   - Lo que va después del signo igual y antes del ";" final es JSON válido. */
window.IMPACTO=
{
 "cifras": [
  {"valor": "000", "etiqueta": {"es": "personas capacitadas", "en": "people trained"}, "ejemplo": true},
  {"valor": "00", "etiqueta": {"es": "acciones de formación", "en": "training actions"}, "ejemplo": true},
  {"valor": "00", "etiqueta": {"es": "universidades participantes", "en": "participating universities"}, "ejemplo": true},
  {"valor": "00", "etiqueta": {"es": "países", "en": "countries"}, "ejemplo": true}
 ],
 "acciones": [
  {"titulo": {"es": "Nombre de la formación en línea (Coursera)", "en": "Name of the online training (Coursera)"}, "institucion": "universidad_del_azuay", "tipo": {"es": "Cursos en línea", "en": "Online courses"}, "estado": "realizada", "fechas": "2026", "personas": "000", "publico": {"es": "Estudiantes, docentes y personal", "en": "Students, academics and staff"}, "resumen": {"es": "Breve descripción de la formación, de quiénes participaron y de los principales resultados.", "en": "Short description of the training, who took part and the main results."}, "enlace": "", "ejemplo": true},
  {"titulo": {"es": "Nombre del taller o curso", "en": "Name of the workshop or course"}, "institucion": "universidad_autonoma_santo_domingo", "tipo": {"es": "Taller", "en": "Workshop"}, "estado": "en_curso", "fechas": "2026", "personas": "00", "publico": {"es": "Personal de relaciones internacionales", "en": "International relations staff"}, "resumen": {"es": "Breve descripción de lo que se está haciendo y de a quién va dirigido.", "en": "Short description of what is being done and for whom."}, "enlace": "", "ejemplo": true},
  {"titulo": {"es": "Nombre de la formación prevista", "en": "Name of the planned training"}, "institucion": "universidad_politecnica_chiapas", "tipo": {"es": "Curso", "en": "Course"}, "estado": "prevista", "fechas": "2027", "personas": "", "publico": {"es": "Estudiantes y docentes", "en": "Students and academics"}, "resumen": {"es": "Breve descripción de lo que se hará y de los resultados esperados.", "en": "Short description of what will be done and the expected results."}, "enlace": "", "ejemplo": true}
 ],
 "poblaciones": [
  {"grupo": {"es": "Estudiantes", "en": "Students"}, "valor": 50, "ejemplo": true},
  {"grupo": {"es": "Docentes e investigadores", "en": "Academics and researchers"}, "valor": 30, "ejemplo": true},
  {"grupo": {"es": "Personal de gestión", "en": "Administrative staff"}, "valor": 20, "ejemplo": true},
  {"grupo": {"es": "Personas de grupos en situación de vulnerabilidad", "en": "People from groups in vulnerable situations"}, "valor": 15, "ejemplo": true}
 ],
 "fondos": {
  "es": ["Acceso a cursos en línea para la comunidad universitaria.", "Talleres y cursos para oficinas de relaciones internacionales.", "Materiales y guías de formación de acceso abierto."],
  "en": ["Access to online courses for the university community.", "Workshops and courses for international relations offices.", "Open-access training materials and guides."],
  "ejemplo": true
 }
}
;
