import Image from "next/image";
import laptop from "../img/laptop.jpg";
import gaming from "../img/gaming.jpg";

type Props = {
  changeIteratorValue: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const BuilderInstructions: React.FC<{ changeIteratorValue: () => void }> = ({
  changeIteratorValue,
}) => {
  return (
    <section className="min-h-screen">
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-[#1a1a1a] p-8 md:p-12 lg:px-16 lg:py-24 rounded-lg">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold text-[#b4a07c] md:text-3xl">
                Armá tu PC totalmente personalizada!
              </h2>

              <p className="hidden text-white/90 text-lg sm:mt-4 sm:block">
                Elegí los componentes que mejor se ajusten a tus necesidades,
                <br />
                el generador de Full Tecno te arma el presupuesto.
                <br /> <br />
                Podés seleccionar un componente de cada categoría y saltear
                alguno en caso de que no desees adquirirlo.
                <br /> <br /> Pidiendo más de 3 componentes tenés un 10% de
                descuento :)
              </p>

              <p className="text-white/90 sm:mt-4 sm:hidden">
                Elegí los componentes que mejor se ajusten a tus necesidades, el
                generador de Full Tecno te arma el presupuesto.
                <br /> <br />
                Podés seleccionar un componente de cada categoría y saltear
                alguno en caso de que no desees adquirirlo.
                <br /> <br /> Pidiendo más de 3 componentes tenés <br /> un 10%
                de descuento :)
              </p>

              <div className="mt-4 md:mt-8">
                <button
                  onClick={changeIteratorValue}
                  className="inline-block rounded bg-[#b4a07c] px-12 py-3 text-sm font-medium text-[#161616] transition hover:bg-[#796c53] hover:text-white hover:no-underline"
                >
                  Empezar
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <Image
              alt="Gaming"
              src={gaming}
              className="h-40 w-full object-cover sm:h-56 md:h-full rounded-lg"
            />

            <Image
              alt="Laptop"
              src={laptop}
              className="h-40 w-full object-cover sm:h-56 md:h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuilderInstructions;
