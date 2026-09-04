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

