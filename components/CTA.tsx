function CallToAction() {
  return (
    <div className="bg-gradient-to-r from-[#1a1a1a] to-[#534a3b] mt-10">
      <div className=" px-4 py-16 mb-16 mx-auto text-center sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <span className="relative inline-block">
            <h2 className="relative text-[#b4a07c] mb-4 text-2xl lg:text-3xl font-bold ">
              Visitá la tienda
            </h2>
          </span>

          <p className="hidden md:block text-base text-white font-semibold md:text-lg">
            Encontrá ese producto que estás buscando, al mejor precio.
          </p>

          <p className="text-base md:hidden text-white font-semibold md:text-lg">
            Encontrá ese producto que estás <br /> buscando, al mejor precio.
          </p>
        </div>

        <div className="flex items-center justify-center sm:justify-center">
          <a
            href="/store"
            className="inline-flex items-center justify-center h-12 px-6 mr-6  bg-[#b4a07c] text-white  hover:bg-[#796c53] hover:text-white hover:no-underline transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none"
          >
            Ir a la tienda
          </a>
          <a
            href="/contact"
            className="inline-flex items-center font-semibold text-[#796c53] hover:no-underline hover:text-[#b4a07c] transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            Contactar
          </a>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
