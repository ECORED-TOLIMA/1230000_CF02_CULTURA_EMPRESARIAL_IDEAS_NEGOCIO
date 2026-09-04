<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
    ActividadController(:cuestionario="cuestionario")

</template>

<script>
//- GENERADO por `scripts/gen_actividad.py` desde `01230000_CF02_AD.docx`.
//- No editar a mano: volver a correr el script si cambia el docx.
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Formulación de ideas de negocio e innovación empresarial',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la apropiación de los contenidos del componente formativo mediante un cuestionario que aborda el concepto de innovación, el análisis de alternativas, el mejoramiento de los procesos productivos y la formulación de la propuesta empresarial.',
      // el kit sólo muestra 10 de las 20: barajar es OBLIGATORIO
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      // `mensaje_final_*`, NO `mensaje_*`: es el nombre que lee
      // `actividadCuestionario/Actividad.vue` del kit (1.0.9). Con el nombre corto los dos
      // mensajes finales del docx no se pintan nunca y no salta ningún error.
      mensaje_final_aprobado: 'Ha superado la actividad. Sus respuestas demuestran conocimientos sólidos sobre el concepto de innovación empresarial, el análisis de alternativas de solución, el mejoramiento de los procesos productivos y la formulación de la propuesta ante quienes deben respaldarla.',
      mensaje_final_reprobado: 'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué tres elementos definen la innovación empresarial?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Creatividad, inversión y tecnología.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Novedad, implementación y valor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Planificación, ejecución y evaluación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Producto, mercado y precio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Sin novedad, sin aplicación o sin valor, la iniciativa es una invención, una rutina o un gasto.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '¿Qué innovación redefine cómo la empresa crea y captura valor?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'De producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'De proceso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'De modelo de negocio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Organizacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'La innovación de modelo de negocio cambia el canal, el segmento atendido o el esquema de cobro.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Quién formuló el concepto de innovación disruptiva?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Michael Porter.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alexander Osterwalder.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Clayton Christensen.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Peter Drucker.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Christensen describió cómo una oferta más simple entra por segmentos poco atendidos y desplaza a los competidores.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Qué norma creó el Ministerio de Ciencia, Tecnología e Innovación?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley 1014 de 2006.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ley 789 de 2002.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ley 1286 de 2009.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ley 1951 de 2019.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'La Ley 1286 de 2009 fortaleció el sistema; el ministerio lo creó la Ley 1951 de 2019.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Qué condiciones cumple un buen conjunto de alternativas?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se excluyen entre sí y cubren las salidas razonables.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Son innovadoras y económicas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cuentan con aval de un financiador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Son tecnológicas y escalables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Si las opciones se repiten, el puntaje se diluye; si faltan, la mejor solución no compite.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Cuál es el primer paso de la matriz de ponderación?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Calcular el puntaje total.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Elegir la alternativa mejor calificada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Definir los criterios de evaluación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Presentar el resultado al financiador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Primero se definen los criterios; después se asignan pesos, se califica y se calcula el puntaje.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué paso comprueba que el resultado de la matriz es sólido?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La definición de la escala.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La asignación de los pesos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La calificación de las alternativas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La revisión de sensibilidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Si el orden de las alternativas se invierte al ajustar un peso, falta información para decidir.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué sesgo lleva a insistir por lo que ya se invirtió?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sesgo de confirmación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sesgo del costo hundido.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Exceso de confianza.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sesgo de anclaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'La decisión debe valorar lo que falta por invertir, no aquello que ya no se recupera.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué componentes integran un proceso productivo?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Planificación, ejecución, control y mejora.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Entradas, transformación, salidas y retroalimentación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Materia prima, mano de obra y maquinaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Proveedores, empresa, clientes y distribuidores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Cuál es un problema tecnológico frecuente en las mipymes?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La ausencia de un sistema de calidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El exceso de automatización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La dependencia de mercados internacionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La sobreproducción por alta demanda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se reconoce por quejas y reprocesos sin registro. Se corrige con fichas de control por lote.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Cuál es el orden de las cinco eses?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Clasificar, ordenar, limpiar, estandarizar y disciplina.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Seleccionar, sistematizar, sanear, señalizar y sostener.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Simplificar, separar, seguir, supervisar y sostener.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sistematizar, estandarizar, inspeccionar, seleccionar y superar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Las cuatro primeras fases exigen esfuerzo concentrado; la quinta, una rutina sostenida, y allí fracasan muchas implementaciones.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Cómo se calcula la tasa de calidad?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Unidades producidas entre horas trabajadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tiempo del proceso entre unidades producidas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Costo de producción entre unidades producidas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Unidades sin defecto entre el total producido.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'El resultado se expresa en porcentaje y solo sirve si el registro conserva siempre el mismo criterio.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Cuántos bloques integran el lienzo del modelo de negocio?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cinco bloques.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Siete bloques.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Doce bloques.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Nueve bloques.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Los nueve bloques permiten ver en una página si segmentos, canales y costos resultan coherentes.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Cuándo se redacta el resumen ejecutivo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Al final, con los demás componentes listos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Al comienzo, antes del análisis de mercado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Durante el plan financiero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Después de la respuesta del financiador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se lee primero y se escribe de último, porque sintetiza el resto de la propuesta.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué ofrece el Fondo Nacional de Garantías?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Capital semilla no reembolsable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Garantías para acceder a crédito bancario.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cofinanciación de proyectos de innovación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Capacitación en planes de negocio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Respalda a quien no dispone de activos fijos. El capital semilla corresponde al Fondo Emprender.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Qué revisa quien evalúa un proyecto de innovación?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El número de empleados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El año de constitución.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La magnitud del problema atendido.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El diseño del logotipo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'También examina la viabilidad, la capacidad del equipo, la sostenibilidad financiera y el impacto verificable.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué innovación aplica quien reemplaza al intermediario por un canal propio?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'De modelo de negocio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'De producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Organizacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'De proceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Cambiar el canal o el segmento es innovación de modelo, aunque el producto siga igual.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Qué relación hay entre la falla visible y su causa?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Coinciden siempre en el mismo punto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La causa suele estar varios pasos atrás.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La causa se identifica al ejecutar la solución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La falla se corrige ampliando el equipo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Intervenir el efecto sin rastrear su origen produce soluciones costosas que no resuelven el problema.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué comparten los cuatro casos del componente formativo?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Requirieron maquinaria nueva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se financiaron con recursos públicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Parten de un problema con cifra y causa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Son empresas con más de veinte años.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Enuncian el problema, comparan alternativas con criterios explícitos y definen cómo verificar el resultado.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Qué permite medir el proceso productivo antes de intervenirlo?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el precio de los insumos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar la capacitación del equipo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Prescindir de la comparación de alternativas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Demostrar después el ahorro obtenido.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Sin la medición previa no existe la cifra con la que se comprueba el resultado ante un financiador.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
      ],
    },
  }),
}
</script>

<style lang="sass"></style>
