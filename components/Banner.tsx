import Image from "next/image";
import logo from "../img/logo.png";

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold mb-4">
      <div>
        <Image
          className="rounded-full object-cover mb-10"
          height={150}
          width={150}
          src={logo}
          alt="logo"
          loading="eager"
          priority={true}
        ></Image>
        <h2 className="font-hanken font-normal md:mt-0 text-[#b4a07c]">
          Venta de equipos electrónicos / Servicio Técnico
        </h2>
      </div>

      <p className="font-hanken font-normal mt-5 md:mt-2 text-[#b4a07c]">
        Mar del Plata, Argentina
      </p>
    </div>
  );
}

export default Banner;
