# Decisiones y pendientes de maquetación

Este archivo recoge, con su motivo, todo lo que no se pudo resolver mirando solo el `.xd`: los
puntos en que el diseño y el PDF no coinciden, los que el diseño deja al desarrollador y los que
quedan a la espera de un material que todavía no llegó.

1. **La paleta es la misma que la del CF01 del mismo curso.** La carta de color de la portada
   nombra los mismos dieciséis valores (primario `#F0F49D`, secundario `#83C1E8`, acento de
   contenido `#FB82FF`, acento de botones `#422AD8`, y sus VC/V/VO), y la cabecera de las tablas
   vuelve a ser `#FB82FF` —comprobado con el píxel del PDF, no solo leído de la carta—. Se
   reutiliza `_variables.sass` del CF01 tal cual.

2. **Introducción — el video.** El artboard deja el bloque como marcador («Espacio para video»)
   y ni el `.xd` ni el `_DI.docx` traen la URL. Queda el `iframe` del scaffold hasta que llegue
   el enlace real.

3. **Tema 3, apartado 3.3 — la pista del pódcast.** El artboard nombra el recurso de audio en el
   texto («se recomienda acceder al siguiente recurso de audio») pero **no dibuja el componente**,
   y en `fuentes/` no hay ningún `.mp3`. Se maquetó con la `TarjetaAudio` del kit y se dejó un
   audio de silencio con la duración de referencia; hay que sustituir
   `src/assets/curso/temas/t3/podcast.mp3` por la locución definitiva.

4. **La actividad — las diez imágenes.** El `_AD.docx` no trae imágenes y el `.xd` no tiene
   artboard de actividad; sus `resources/` sólo guardan **tres** personas recortadas sobre fondo
   transparente (`a6458f5e`, `f68e3e31`, `b92676a4`) y el componente del kit pide diez. Se toman
   las diez composiciones del componente CF01 de este mismo curso: persona recortada sobre la
   forma magenta `#FB82FF` con la insignia amarilla, que es el tratamiento gráfico de este curso
   y no el de otro; el propio `.xd` ya comparte assets entre los dos componentes (`a6458f5e`
   aparece en ambos). La alternativa —recortar personas nuevas de las fotos de los temas, que no
   vienen sobre fondo transparente, o volver a los recortes cuadrados— ya se corrigió una vez y
   no se repite. Para cerrarlo hacen falta diez recortes propios de este componente, o la
   confirmación de que los del CF01 sirven para los dos.

5. **El PDF del menú «Descargar PDF» lo pone el cliente.** El scaffold apuntaba a
   `downloads/dist.pdf`, que no existe. En los entregables de este cliente el fichero se llama
   `<código>_CF0N_CFA_DU.pdf` y lo sube el revisor en un commit «CFA» (así está en
   `11210049_CF02_GESTION_TALENTO_HUMANO_CONTEXTO_LABORAL`). El menú ya apunta a
   `downloads/01230000_CF02_CFA_DU.pdf`; falta el fichero.

