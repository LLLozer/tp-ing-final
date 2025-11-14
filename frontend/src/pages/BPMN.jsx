import bpmn2 from "../assets/bpmn2.png";

function BPMN() {
  return (
    <div>
      <h1>BPMN: Modelado de Procesos de Negocio</h1>
      <h2>
        Es un lenguaje gráfico que se usa para crear diagramas de flujo. Su
        objetivo es ser el lenguaje común que todos en la organización puedan
        entender fácilmente.
        <h2>
          ¿Cómo se usa? (Componentes Clave) Se utiliza para dibujar diagramas de
          flujo (BPD) usando estos elementos principales:
        </h2>
      </h2>
      <section>
        <h3>
          Swimlanes (Contenedores): Pool (Piscina): Contiene un proceso completo
          (ej. "Proceso de Compras"). Lane (Carril): Subdivide un Pool para
          organizar actividades por rol o departamento (ej. "Jefe", "RH").
        </h3>
        <h3>
          Objetos de Flujo (La Acción): Eventos (Círculos): Muestran algo que
          ocurre (Inicio, Fin, Demora). Actividades (Rectángulos): Representan
          el trabajo realizado (ej. "Revisar Solicitud"). Compuertas (Rombos):
          Controlan el flujo para decisiones (Exclusiva) o tareas paralelas
          (Paralela).
        </h3>
        <h3>
          Conectores (Las Flechas): Flujo de Secuencia (Sólida): Muestra el
          orden de las tareas dentro de un Pool. Línea de Mensaje (Punteada):
          Muestra la comunicación entre dos Pools (ej. "Cliente" y "Atención de
          Reclamos").
        </h3>
        <img src={bpmn2} alt="" />
        <p>
          El ejemplo muestra un proceso de garantía de reemplazo de vehículo
          siniestrado
        </p>
      </section>
    </div>
  );
}

export default BPMN;
