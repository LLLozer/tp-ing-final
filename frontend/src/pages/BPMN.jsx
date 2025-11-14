import bpmn2 from "../assets/bpmn2.png";

function BPMN() {
  return (
    // CONTENEDOR PRINCIPAL DE PÁGINA
    // Aumentamos el padding inferior (pb-32) para dar más espacio al final
    <div className="container mx-auto max-w-5xl py-16 px-4 pb-32">
      {/* CABECERA (HERO) */}
      <header className="bg-blue-900/70 backdrop-blur-md border border-blue-500/30 p-10 rounded-lg shadow-xl mb-12 text-center">
        {/* H1 principal */}
        <h1 className="text-5xl font-bold mb-4 text-white text-shadow-lg">
          BPMN: Modelado de Procesos de Negocio
        </h1>

        {/* Subtítulo principal */}
        <p className="text-2xl text-gray-200">
          Es un lenguaje gráfico que se usa para crear diagramas de flujo. Su
          objetivo es ser el lenguaje común que todos en la organización puedan
          entender fácilmente.
        </p>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      {/* Usamos space-y-8 para separar las tarjetas */}
      <main className="space-y-8">
        {/* TARJETA 1: COMPONENTES CLAVE */}
        <section className="bg-blue-900/70 backdrop-blur-md border border-blue-500/30 p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 border-b border-blue-500/30 pb-3">
            ¿Cómo se usa? (Componentes Clave)
          </h2>

          {/* Lista de componentes */}
          <ul className="space-y-6 text-gray-300 leading-relaxed">
            {/* ITEM 1: SWIMLANES */}
            <li className="border-l-4 border-blue-400 pl-4">
              <strong className="font-semibold text-lg text-gray-100 block">
                Swimlanes (Contenedores)
              </strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>
                  <strong>Pool (Piscina):</strong> Contiene un proceso completo
                  (ej. "Proceso de Compras").
                </li>
                <li>
                  <strong>Lane (Carril):</strong> Subdivide un Pool para
                  organizar actividades por rol (ej. "Jefe", "RH").
                </li>
              </ul>
            </li>

            {/* ITEM 2: OBJETOS DE FLUJO */}
            <li className="border-l-4 border-blue-400 pl-4">
              <strong className="font-semibold text-lg text-gray-100 block">
                Objetos de Flujo (La Acción)
              </strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>
                  <strong>Eventos (Círculos):</strong> Muestran algo que ocurre
                  (Inicio, Fin, Demora).
                </li>
                <li>
                  <strong>Actividades (Rectángulos):</strong> Representan el
                  trabajo realizado (ej. "Revisar Solicitud").
                </li>
                <li>
                  <strong>Compuertas (Rombos):</strong> Controlan el flujo para
                  decisiones o tareas paralelas.
                </li>
              </ul>
            </li>

            {/* ITEM 3: CONECTORES */}
            <li className="border-l-4 border-blue-400 pl-4">
              <strong className="font-semibold text-lg text-gray-100 block">
                Conectores (Las Flechas)
              </strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>
                  <strong>Flujo de Secuencia (Sólida):</strong> Muestra el orden
                  de las tareas dentro de un Pool.
                </li>
                <li>
                  <strong>Línea de Mensaje (Punteada):</strong> Muestra la
                  comunicación entre dos Pools.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        {/* TARJETA 2: EJEMPLO DE IMAGEN */}
        <section className="bg-blue-900/70 backdrop-blur-md border border-blue-500/30 p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 border-b border-blue-500/30 pb-3">
            Ejemplo Práctico
          </h2>

          {/* Marco blanco para que la imagen PNG resalte */}
          <div className="bg-white p-2 rounded-lg shadow-inner-lg">
            <img
              src={bpmn2}
              alt="Ejemplo de diagrama BPMN"
              className="w-full h-auto rounded-md"
            />
          </div>

          <p className="text-center italic text-gray-400 mt-4">
            El ejemplo muestra un proceso de garantía de reemplazo de vehículo
            siniestrado.
          </p>
        </section>
      </main>
    </div>
  );
}

export default BPMN;
