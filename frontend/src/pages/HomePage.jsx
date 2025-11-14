function HomePage() {
  return (
    // CONTENEDOR PRINCIPAL DE PÁGINA
    <div className="container mx-auto max-w-5xl py-16 px-4">
      {/* CABECERA (HERO) */}
      {/* Cambiamos a un azul más profundo y aumentamos la opacidad para legibilidad */}
      <header className="bg-blue-900/70 backdrop-blur-md border border-blue-500/30 p-10 rounded-lg shadow-xl mb-12 text-center">
        {/* Texto más grande y con sombra para que destaque */}
        <h1 className="text-5xl font-bold mb-4 text-white text-shadow-lg">
          Ingeniería de Software
        </h1>
        {/* Usamos un color cian brillante (similar a la imagen) para el subtítulo */}
        <p className="text-2xl text-gray-200">
          Un enfoque sistemático y disciplinado para el desarrollo de software
          de calidad.
        </p>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="grid gap-8">
        {/* TARJETA 1: EL PROBLEMA */}
        {/* Mismo estilo de "vidrio" azul para las tarjetas */}
        <section className="bg-blue-900/70 backdrop-blur-md border border-blue-500/30 p-8 rounded-lg shadow-xl">
          {/* Título de la tarjeta con acento cian */}
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 border-b border-blue-500/30 pb-3">
            El Problema: La Crisis del Software
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
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
        <section className="bg-blue-900/70 backdrop-blur-md border border-blue-500/30 p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 border-b border-blue-500/30 pb-3">
            La Solución: ¿Qué es la Ingeniería de Software?
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Es la disciplina que busca solucionar esta crisis. La IEEE la
              define como:
            </p>

            {/* CITA DESTACADA */}
            {/* Un fondo sutilmente más oscuro para la cita */}
            <blockquote className="border-l-4 border-blue-400 bg-black/20 p-4 my-4 italic text-blue-100">
              "La aplicación de un enfoque{" "}
              <strong className="font-semibold text-white not-italic">
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
