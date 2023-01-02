import Image from "next/image";
import logo from "../img/logo.png";

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <Image
          className="rounded-full object-cover"
          height={150}
          width={150}
          src={logo}
          alt="logo"
          loading="eager"
          priority={true}
        ></Image>
        <h2 className="font-hanken font-normal mt-5 md:mt-0">
          Venta de equipos electrónicos / Servicio Técnico
        </h2>
      </div>

      <p className="font-hanken font-normal mt-5 md:mt-2 text-gray-400 max-w-sm">
        Mar del Plata, Argentina
      </p>
    </div>
  );
}

export default Banner;
