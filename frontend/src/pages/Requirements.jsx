function Requirements() {
  return (
    <div>
      <h1>Ingeniería de Requerimientos, ¿qué es y cómo aplicarla?</h1>
      <h2>
        Es una disciplina que busca solucionar la incidencia de fallos en
        proyectos de software. El objetivo principal de esta disciplina es
        enfocar el área fundamental del desarrollo: definir lo que se desea
        producir. Al generar especificaciones correctas, claras y sin
        ambigüedades, se busca minimizar los problemas durante el desarrollo del
        sistema.
      </h2>
      <h2>Su aplicación práctica se resume en:</h2>
      <section>
        <ul>
          <li>
            <h3>
              Identificación de Requerimientos: Diferenciar las necesidades del
              usuario.
              <ul>
                Requerimientos Funcionales: Definen las funciones que el sistema
                será capaz de realizar. Describen las transformaciones que el
                sistema hace sobre las entradas para producir salidas
              </ul>
              <ul>
                Requerimientos No Funcionales: Son características que limitan
                el sistema, como el rendimiento, la seguridad, la fiabilidad o
                las interfaces de usuario.
              </ul>
            </h3>
          </li>
          <li>
            <h3>
              Clasificación en Entradas, Procesos y Salidas: En el día a día,
              los requerimientos surgen de problemas concretos, como sistemas
              manuales que manejan un gran volumen de transacciones o sistemas
              que necesitan ser modificados. Estos se traducen en
              especificaciones prácticas que el equipo de desarrollo debe
              construir:
              <p>
                <ul>
                  <p>
                    De Entrada: (Ej. "En el sistema se deben cargar 100 facturas
                    por día")
                  </p>
                  <p>
                    De Salida: (Ej. "El Sistema debe emitir listados. Reporte de
                    clientes...").
                  </p>
                  <p>
                    De Proceso: (Ej. "El Sistema debe realizar todos los
                    cálculos de impuestos...").{" "}
                  </p>
                  <p>
                    De Control: (Ej. "El Sistema no debe procesar beneficios a
                    clientes deudores").{" "}
                  </p>
                </ul>
              </p>
            </h3>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Requirements;
