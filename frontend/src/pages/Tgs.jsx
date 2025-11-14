function Tgs() {
  return (
    // CONTENEDOR PRINCIPAL DE PÁGINA
    <div className="container mx-auto max-w-5xl py-16 px-4">
      {/* CABECERA (HERO) */}
      <header className="bg-blue-900/70 backdrop-blur-md border border-blue-500/30 p-10 rounded-lg shadow-xl mb-12 text-center">
        {/* H1 principal */}
        <h1 className="text-5xl font-bold mb-4 text-white text-shadow-lg">
          ¿Cómo desarrollar un proyecto de Sistemas?
        </h1>

        {/* H2 como subtítulo principal */}
        <p className="text-2xl text-gray-200 mb-4">
          Para desarrollar un sistema de información, es crucial definir
          claramente sus fundamentos. Las razones para iniciar un proyecto
          incluyen buscar mayor velocidad, exactitud, seguridad o reducción de
          costos.
        </p>

        {/* H3 como texto de apoyo */}
        <p className="text-lg text-gray-300 font-light">
          Para esto, se utiliza la metolodogía que organiza el proceso en
          "Objetivos", "Límites" y "Alcances". La metodología es una herramienta
          que transforma una idea abstracta en un plan de construcción. De esta
          forma, se logra reducir costos , mejorar la exactitud y evitar los
          problemas que causan que los proyectos de software fallen.
        </p>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="grid gap-8">
        {/* TARJETA 1: FUNDAMENTOS */}
        {/* Mismo estilo de "vidrio" azul */}
        <section className="bg-blue-900/70 backdrop-blur-md border border-blue-500/30 p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 border-b border-blue-500/30 pb-3">
            Definiciones Clave
          </h2>

          {/* Reformateamos los conceptos en una lista clara */}
          <ul className="space-y-6 text-gray-300 leading-relaxed">
            {/* ITEM 1: OBJETIVO */}
            <li className="border-l-4 border-blue-400 pl-4">
              <strong className="font-semibold text-lg text-gray-100 block">
                Objetivo (General y Específicos)
              </strong>
              <p>
                El "para qué" del sistema. El objetivo general es la meta
                principal, mientras que los específicos son los pasos o etapas
                para alcanzarlo.
              </p>
            </li>

            {/* ITEM 2: ALCANCE */}
            <li className="border-l-4 border-blue-400 pl-4">
              <strong className="font-semibold text-lg text-gray-100 block">
                Alcance
              </strong>
              <p>
                El "qué es lo que hace". Define las expectativas, actividades y
                tareas que el sistema cumplirá.
              </p>
            </li>

            {/* ITEM 3: LÍMITES */}
            <li className="border-l-4 border-blue-400 pl-4">
              <strong className="font-semibold text-lg text-gray-100 block">
                Límites
              </strong>
              <p>
                El "qué abarca". Establece las fronteras del proyecto y lo que
                no se cubrirá, a menudo expresado como "Desde que... hasta
                que...".
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Tgs;
