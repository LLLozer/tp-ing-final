// src/pages/HomePage.jsx

function HomePage() {
  return (
    // CONTENEDOR PRINCIPAL
    // Centra el contenido, establece un ancho máximo para legibilidad,
    // y añade padding vertical (py) y horizontal (px).
    <div className="container mx-auto max-w-4xl py-12 px-4">
      {/* CABECERA (HERO) */}
      <header className="bg-blue-600 text-white p-8 rounded-lg shadow-lg mb-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Ingeniería de Software</h1>
        <p className="text-xl text-blue-100">
          Un enfoque sistemático y disciplinado para el desarrollo de software
          de calidad.
        </p>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      {/* Usamos 'grid' y 'gap' para separar las tarjetas de sección */}
      <main className="grid gap-8">
        {/* TARJETA 1: EL PROBLEMA */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            El Problema: La Crisis del Software
          </h2>
          {/* 'space-y-4' añade espacio automáticamente entre los párrafos hijos */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Históricamente, el desarrollo de software ha enfrentado grandes
              desafíos. La demanda de aplicaciones crece, las aplicaciones se
              vuelven más complejas, y los plazos de entrega son cada vez más
              cortos.
            </p>
            <p>
              Esto ha resultado en productos de baja calidad, costos difíciles
              de prever, entregas fuera de plazo y sistemas que no responden a
              las expectativas de los usuarios.
            </p>
          </div>
        </section>

        {/* TARJETA 2: LA SOLUCIÓN */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            La Solución: ¿Qué es la Ingeniería de Software?
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Es la disciplina que busca solucionar esta crisis. La IEEE la
              define como:
            </p>

            {/* CITA DESTACADA */}
            <blockquote className="border-l-4 border-blue-500 bg-blue-50 p-4 my-4 italic">
              "La aplicación de un enfoque{" "}
              <strong className="font-semibold text-blue-700 not-italic">
                sistemático, disciplinado y cuantificable
              </strong>{" "}
              al desarrollo, operación y mantenimiento del software".
            </blockquote>

            <p>
              En resumen, es la aplicación de principios de ingeniería al
              software para minimizar tiempo, esfuerzo y costos, mientras se
              maximiza la calidad del producto final.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
