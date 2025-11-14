function Requirements() {
  return (
    // CONTENEDOR PRINCIPAL DE PÁGINA
    <div className="container mx-auto max-w-5xl py-16 px-4">
      {/* CABECERA (HERO) */}
      <header className="bg-blue-900/70 backdrop-blur-md border border-blue-500/30 p-10 rounded-lg shadow-xl mb-12 text-center">
        {/* H1 principal */}
        <h1 className="text-5xl font-bold mb-4 text-white text-shadow-lg">
          Ingeniería de Requerimientos
        </h1>

        {/* Subtítulo principal */}
        <p className="text-2xl text-gray-200">¿Qué es y cómo aplicarla?</p>

        {/* Texto de apoyo */}
        <p className="text-lg text-gray-300 font-light mt-4">
          Es una disciplina que busca solucionar la incidencia de fallos en
          proyectos de software. El objetivo principal de esta disciplina es
          enfocar el área fundamental del desarrollo: definir lo que se desea
          producir. Al generar especificaciones correctas, claras y sin
          ambigüedades, se busca minimizar los problemas durante el desarrollo
          del sistema.
        </p>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="grid gap-8">
        {/* TARJETA 1: APLICACIÓN PRÁCTICA */}
        <section className="bg-blue-900/70 backdrop-blur-md border border-blue-500/30 p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 border-b border-blue-500/30 pb-3">
            Su aplicación práctica se resume en:
          </h2>

          {/* Lista de conceptos clave */}
          <ul className="space-y-6 text-gray-300 leading-relaxed">
            {/* ITEM 1: IDENTIFICACIÓN */}
            <li className="border-l-4 border-blue-400 pl-4">
              <strong className="font-semibold text-lg text-gray-100 block">
                Identificación de Requerimientos
              </strong>
              <p className="mt-1">
                Diferenciar las necesidades del usuario en dos tipos:
              </p>
              {/* Sub-lista para funcionales y no funcionales */}
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>
                  <strong>Requerimientos Funcionales:</strong> Definen las
                  funciones que el sistema será capaz de realizar.
                </li>
                <li>
                  <strong>Requerimientos No Funcionales:</strong>{" "}
                  Características que limitan el sistema (rendimiento,
                  seguridad, etc.).
                </li>
              </ul>
            </li>

            {/* ITEM 2: CLASIFICACIÓN */}
            <li className="border-l-4 border-blue-400 pl-4">
              <strong className="font-semibold text-lg text-gray-100 block">
                Clasificación en Entradas, Procesos y Salidas
              </strong>
              <p className="mt-1">
                Los requerimientos se traducen en especificaciones prácticas que
                el equipo debe construir:
              </p>
              {/* Sub-lista para E/P/S */}
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>
                  <strong>De Entrada:</strong> (Ej. "En el sistema se deben
                  cargar 100 facturas por día").
                </li>
                <li>
                  <strong>De Salida:</strong> (Ej. "El Sistema debe emitir
                  listados. Reporte de clientes...").
                </li>
                <li>
                  <strong>De Proceso:</strong> (Ej. "El Sistema debe realizar
                  todos los cálculos de impuestos...").
                </li>
                <li>
                  <strong>De Control:</strong> (Ej. "El Sistema no debe procesar
                  beneficios a clientes deudores").
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Requirements;
