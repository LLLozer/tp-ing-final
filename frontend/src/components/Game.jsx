import React, { useState } from "react";

export const Game = () => {
  const [gameInit, setGameInit] = useState(false) 
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const play = () => { //para al tocar el boton de jugar se muestren las preguntas
    setGameInit(true)
  }

  const handleAnswer = (optionIndex) => { //se le pasa la respuesta seleccionada
    const question = questions[index];

    if (optionIndex === question.answer) { //compara la respuesta seleccionada con la correcta
      setScore(score + 1); //si es correcta suma un punto
    }

    if (index + 1 < questions.length) { //pasa a la siguiente pregunta
      setIndex(index + 1);
    } else {
      setFinished(true); //si no hay más preguntas finaliza el juego
    }
  };  

  
  
  
 const questions = [ 
   {
     question: "¿Cuál es el aporte principal de la Ingeniería de Software (IS) a través de sus procesos y herramientas?",
     options: [
            "A)- Reducir el tiempo de desarrollo eliminando la documentación.",
        "B)- Definir únicamente los cronogramas y los costos.",
        "C)- Aportar calidad y evitar la producción de productos de software deficientes o que no responden a las expectativas.",
        "D)- Satisfacer únicamente los requisitos funcionales del cliente."
     ],
     answer: 2 // C)
   },
   {
     question: "Una de las fases del Proceso Genérico de la IS es la Definición (el 'Qué'). ¿Qué actividades cruciales, centradas en el problema y la estrategia, se realizan en esta fase?",
     options: [
            "A)- Diseño del software de bajo nivel.",
        "B)- Análisis de requisitos y Planificación del proyecto.",
        "C)- Generación del código y pruebas unitarias.",
        "D)- Corrección de errores y Adaptación por evolución del entorno."
     ],
     answer: 1 // B)
   },
   {
     question: "¿Cuál es la definición correcta de Proceso de Negocio en el 'Nuevo Paradigma' de gestión?",
     options: [
            "A)- Un conjunto de funciones y tareas aisladas asignadas a un departamento específico (ej. Compras).",
        "B)- Una secuencia de actividades interrelacionadas que busca un resultado para el cliente y cruza distintas áreas funcionales.",
        "C)- El plan de gestión de riesgos y el cronograma del proyecto de software.",
        "D)- Un diagrama de clases que muestra las entidades del negocio."
     ],
     answer: 1 // B)
   },
   {
     question: "Una de las características del Nuevo Paradigma de Gestión por Procesos es que las decisiones están basadas en el análisis de datos. ¿Qué principio de mejora acompaña a esta característica?",
     options: [
            "A)- El empleado es el problema, por lo que se debe evaluar al individuo.",
        "B)- La única fuente de verdad son las experiencias pasadas de los gerentes.",
        "C)- El proceso es el problema, por lo que se debe evaluar, documentar y optimizar el flujo de trabajo.",
        "D)- La organización es inherentemente reactiva al cambio, por lo que hay que resistirlo."
     ],
     answer: 2 // C)
   },
   {
     question: "¿Cuál es la definición correcta de Ingeniería de Requerimientos (IR)?",
     options: [
            "A)- La actividad de codificar el sistema y realizar pruebas de integración.",
        "B)- El diseño de la base de datos y la arquitectura del sistema.",
        "C)- El proceso de crear una especificación completa, consistente y no ambigua que sirva de acuerdo entre todas las partes interesadas.",
        "D)- El proceso de gestionar los riesgos de un proyecto de software y la calidad del código."
     ],
     answer: 2 // C)
   },
   {
     question: "En el proceso de la IR, ¿qué etapa es descrita como una actividad más 'humana' que 'técnica', centrada en la captura y descubrimiento de requisitos?",
     options: [
            "A)- Especificación de Requerimientos.",
        "B)- Elicitación (o Educción) de Requisitos.",
        "C)- Validación de Requerimientos.",
        "D)- Gestión de Cambios de Requerimientos."
     ],
     answer: 1 // B)
   },
   {
     question: "¿Qué notación gráfica proporciona un lenguaje común y estandarizado para la representación de Procesos de Negocio?",
     options: [
            "A)- UML (Unified Modeling Language).",
        "B)- BPMN (Business Process Management Notation).",
        "C)- DFD (Diagrama de Flujo de Datos).",
        "D)- ERD (Diagrama Entidad-Relación)."
     ],
     answer: 1 // B)
   },
   {
     question: "En un diagrama BPMN, ¿cuál es la función principal de la Compuerta (Gateway)?",
     options: [
            "A)- Representar un trabajo o tarea que debe ser realizado por un participante.",
        "B)- Representar el inicio o el fin del proceso de negocio.",
        "C)- Controlar el flujo de secuencia, permitiendo la divergencia (división) o convergencia (unión) lógica de múltiples caminos.",
        "D)- Agrupar todas las actividades realizadas por un participante o departamento."
     ],
     answer: 2 // C)
   },
   {
     question: "¿Cuál es la principal ventaja de utilizar la técnica de relevamiento de Historias de Usuario (User Stories) en metodologías ágiles?",
     options: [
            "A)- Obtener un alto volumen de información a bajo costo.",
        "B)- Priorizar la conversación y la simplicidad sobre la formalización excesiva de requisitos.",
        "C)- Establecer la estructura detallada de la base de datos y las clases de software.",
        "D)- Reemplazar completamente el diálogo con el cliente por documentación escrita."
     ],
     answer: 1 // B)
   },
   {
     question: "La técnica de relevamiento que utiliza el formato 'Como [Rol], quiero [Funcionalidad], para [Resultado]' se conoce como:",
     options: [
            "A)- Entrevistas Estructuradas.",
        "B)- Historias de Usuario.",
        "C)- Análisis de Documentación.",
        "D)- Tormenta de ideas (Brainstorming)."
     ],
     answer: 1 // B)
   },
   {
     question: "¿En qué consiste la técnica de relevamiento de Análisis de Documentación?",
     options: [
            "A)- Estudiar el entorno de trabajo del usuario haciendo preguntas mientras trabaja.",
        "B)- Reunir a varios expertos para generar ideas sin permitir la crítica inicial.",
        "C)- Obtener información sobre requerimientos a partir de documentos ya elaborados (contratos, reglas de negocio, manuales, etc.).",
        "D)- Una serie de preguntas escritas con alto control sobre el grupo que las responde."
     ],
     answer: 2 // C)
   },
   {
     question: "¿En qué situación de relevamiento de requisitos es más apropiada la técnica de Análisis de Documentación?",
     options: [
            "A)- Cuando el analista necesita observar las tareas diarias en tiempo real.",
        "B)- Cuando se desea generar ideas innovadoras y se requiere la participación activa de los stakeholders.",
        "C)- Cuando los expertos en la materia no están disponibles para ser entrevistados o ya no forman parte de la organización.",
        "D)- Cuando se busca obtener información muy detallada y profunda sobre un tema específico."
     ],
     answer: 2 // C)
   },
   {
     question: "¿Cuál es la principal ventaja de utilizar la técnica de Cuestionarios para la elicitación de requisitos?",
     options: [
            "A)- Permiten indagar en profundidad sobre temas complejos y ambiguos.",
        "B)- Único medio factible para relevar a un gran número de personas a un costo relativamente bajo.",
        "C)- Eliminan por completo los problemas de interpretación de las preguntas y las respuestas.",
        "D)- Reemplazan la necesidad de validar la información obtenida."
     ],
     answer: 1 // B)
   },
   {
     question: "¿Qué acción es esencial realizar después de aplicar una técnica de elicitación como la Entrevista para asegurar la calidad de los requisitos?",
     options: [
            "A)- Comenzar inmediatamente a prototipar la interfaz de usuario.",
        "B)- Descartar cualquier requisito no funcional, ya que son menos importantes.",
        "C)- Resumir lo obtenido y solicitar la confirmación por escrito del entrevistado.",
        "D)- Realizar una observación activa del entorno de trabajo de otro departamento."
     ],
     answer: 2 // C)
   },
   {
     question: "Además de la Corrección de Errores y la Adaptación por Evolución del Entorno, ¿qué otra categoría de cambio cubre la fase de Mantenimiento (el 'Cambio') en el Proceso Genérico de la IS?",
     options: [
            "A)- Planificación del proyecto.",
        "B)- Generación del código.",
        "C)- Mejoras en el negocio y aumento de la capacidad del producto (Mantenimiento Perfectivo).",
        "D)- Gestión de riesgos."
     ],
     answer: 2 // C)
   }
]
  const current = questions[index]; //selecciona la pregunta segun el index seteado en handleAnswer
  
  if (finished) { //renderiza esto si el juego termino
    return (
      <div>
        <h1>¡Juego Terminado!</h1>
        <h2>Puntaje final: {score} / {questions.length}</h2>
        <button onClick={() => {
          setIndex(0);
          setScore(0);
          setFinished(false);
        }}>
          Volver a jugar
        </button>
      </div>
    );
  }


  return (
    <>
    <h2> ¡Pon a prueba tu conocimiento en Ingienería de Software! </h2>
    {!gameInit ? ( <button onClick={play} > Jugar </button> ) : (
      <div>
        <h2>{current.question}</h2>

      {current.options.map((opt, i) => (
        <button
          key={i}
          onClick={() => handleAnswer(i)}
        >
          {opt}
        </button>
      ))}

      <p>Pregunta {index + 1} de {questions.length}</p>
      </div>
    )}
    </>
  )
};
