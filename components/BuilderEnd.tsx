import urlFor from "../lib/urlFor";
import Image from "next/image";
import noImg from "../img/no-img.png";

type Props = {
  components: Product[];
};

const styles = {
  container: "py-5 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto",
  header: "text-3xl lg:text-4xl font-semibold text-[#b4a07c]",
  product: "bg-[#1a1a1a] rounded-lg px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full",
  pricing:
    "flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8",
  nextSteps:
    "flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-[#1a1a1a] rounded-lg",
  build:
    "bg-[#1a1a1a] rounded-lg w-full xl:w-96 flex justify-start items-start md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col",
};

function BuilderEnd({ components }: Props) {
  const dateTime = new Date();

  const subtotal = components.reduce(
    (sum, component) => sum + component.price,
    0
  );
  const DISCOUNT_PERCENTAGE: number = 0.1;
  const discount = subtotal * DISCOUNT_PERCENTAGE;
  const priceWithDiscount: number = subtotal - discount;

  let total: number = 0;

  return (
    <div className={styles.container}>
      <div className="flex justify-start item-start flex-col ">
        <h1 className={styles.header}>Tu presupuesto</h1>
      </div>

      <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className={styles.product}>
            <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-[#b4a07c]">
              Productos elegidos
            </p>
            {components.map((component) => (
              <div
                className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full"
                key={component.slug.current}
              >
                <div className="pb-4 md:pb-8 w-full md:w-40">
                  {component.images && component.images.length > 0 ? (
                    component.images.slice(0, 1).map((image) => (
                      <div key={component.slug.current}>
                        {/*Desktop*/}
                        <img
                          className="w-full hidden md:block"
                          src={urlFor(image).url()}
                          alt={component.name}
                        />
                        {/*Mobile*/}
                        <img
                          className="w-full h-20 object-cover md:hidden"
                          src={urlFor(image).url()}
                          alt={component.name}
                        />
                      </div>
                    ))
                  ) : (
                    <div className="w-50 h-50 overflow-hidden">
                      <Image
                        src={noImg}
                        alt={component.name}
                        className="w-full h-full object-cover hidden md:block"
                      ></Image>
                      <Image
                        src={noImg}
                        alt={component.name}
                        className="w-full h-full object-cover md:hidden"
                      ></Image>
                    </div>
                  )}
                </div>
                <div className="border-b border-gray-200 md:flex-row flex-col flex items-start w-full  pb-8 space-y-4 md:space-y-0">
                  <div className="w-full lg:w-[500%] flex flex-col justify-start items-start space-y-2">
                    <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-white">
                      {component.name}
                    </h3>

                    <span className="text-white">
                      {component.category.name}
                    </span>
                  </div>

                  <div className="flex justify-end space-x-8 items-start w-full">
                    <p className="text-base xl:text-lg font-semibold leading-6  text-white">
                      ${component.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.pricing}>
            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-[#1a1a1a] rounded-lg space-y-6   ">
              <h3 className="text-xl font-semibold leading-5 text-[#b4a07c]">
                Descuentos y total
              </h3>
              <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                <div className="flex justify-between  w-full">
                  <p className="text-base leading-4 text-white">Subtotal</p>
                  <p className="text-base leading-4 text-white">${subtotal}</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-white">Descuento</p>

                  {components.length > 3 ? (
                    <>
                      <span className="bg-[#b4a07c] p-1 text-sm font-medium leading-3  text-black">
                        +3 productos: 10%
                      </span>
                      <p className="text-base leading-4 text-white">
                        -${discount}
                      </p>
                      <div className="hidden">
                        {(total = priceWithDiscount)}
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="bg-[#282828] p-1 text-sm font-medium leading-3 text-[#424242] ml-16">
                        Disponible pidiendo más de 3 productos
                      </span>
                      <div className="hidden">{(total = subtotal)}</div>
                    </>
                  )}
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-white">Envío</p>
                  <p className="text-base leading-4 text-white">Consultar</p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-base font-semibold leading-4 text-[#b4a07c]">
                  Total
                </p>
                <p className="text-base font-semibold leading-4 text-white">
                  ${total}
                </p>
              </div>
            </div>

            <div className={styles.nextSteps}>
              <h3 className="text-xl font-semibold text-[#b4a07c]">
                Qué hacer ahora
              </h3>

              <div className="flex justify-between items-start w-full">
                <div className="flex justify-center items-center space-x-4">
                  <div className="flex flex-col justify-start items-center">
                    <p className="text-md leading-8 font-semibold text-white">
                      Estás a un paso de tener tu PC soñada!
                      <br />
                      <span className="font-normal">
                        1. Sacá captura a la sección "Build"
                        <br />
                        2. Presioná "Enviar a WhatsApp" <br />
                        3. Mandanos la captura de tu presupuesto
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.build}>
          <h3 className="text-xl font-semibold leading-5 text-[#b4a07c]">
            Build
          </h3>

          <div className="flex flex-col justify-start items-start h-full w-full ">
            <div className="flex justify-start py-4 border-b border-[#b4a07c] w-full">
              <p className="cursor-pointer text-sm text-white">
                {dateTime.toDateString()}
              </p>
            </div>

            {components && components.length > 0 ? (
              <>
                {components.map((component) => (
                  <div
                    className="flex flex-col justify-start items-start"
                    key={component.slug.current}
                  >
                    <p className="w-full text-left text-sm text-white mt-4">
                      {component.category.name +
                        " " +
                        component.name +
                        " ($" +
                        component.price +
                        ")"}
                    </p>
                  </div>
                ))}
                <p className="text-white font-semibold mt-5">Total: ${total}</p>
              </>
            ) : (
              <p className="w-full text-center text-sm leading-5 text-gray-600 mt-5 px-6 md:px-8 lg:px-10 xl:px-0">
                No se seleccionaron componentes
              </p>
            )}

            <div className="flex w-full justify-center items-center">
              <a
                href="https://wa.me/5492236020937"
                className="bg-[#b4a07c] text-[#564d3c] hover:text-[#1a1a1a] rounded-lg text-center text-594f3e hover:text-1a1a1a font-semibold hover:no-underline mt-6 py-5 w-96 2xl:w-full text-base leading-4"
              >
                Enviar a WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuilderEnd;
