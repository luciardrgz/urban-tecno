import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faArrowRight,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="container px-6 py-5 mx-auto">
      <hr className="border-[#b4a07c] mb-10" />
      <h1 className="text-3xl font-semibold text-center text-white  lg:text-4xl ">
        Contactate con
        <span className="text-[#b4a07c]"> Full Tecno</span>
      </h1>

      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
        <div className="flex flex-col h-60 items-center p-6 space-y-3 text-center bg-black rounded-xl">
          <span className="inline-block p-2 rounded-full text-black bg-[#b4a07c]">
            <FontAwesomeIcon
              icon={faLocationDot}
              color="#1a1a1a"
              width={"1.5em"}
              height={"1.5em"}
            ></FontAwesomeIcon>
          </span>
          <h1 className="text-2xl font-semibold text-[#b4a07c]">
            Dónde estamos
          </h1>
          <p className="text-gray-300">
            Güemes 3255, Mar del Plata,
            <br />
            Buenos Aires, Argentina
          </p>
          <a
            href="#"
            className="flex items-center -mx-1 text-sm text-[#b4a07c] transition-colors duration-300 transform  hover:none hover:text-[#f1ddb7]"
          >
            <span className="mx-1">Ver en el mapa</span>
            <FontAwesomeIcon
              icon={faArrowRight}
              color="#b4a07c"
              width={"1em"}
              height={"1em"}
            ></FontAwesomeIcon>
          </a>
        </div>

        <div className="flex flex-col h-60 items-center p-6 space-y-3 text-center bg-black rounded-xl">
          <span className="inline-block p-2 rounded-full text-black bg-[#b4a07c]">
            <FontAwesomeIcon
              icon={faClock}
              color="#1a1a1a"
              width={"1.5em"}
              height={"1.5em"}
            ></FontAwesomeIcon>
          </span>
          <h1 className="text-2xl font-semibold text-[#b4a07c]">
            Nuestros horarios
          </h1>
          <p className="text-gray-300">
            Lunes a Sábados de 10:30 a 20 hs <br /> Domingos de 16 a 20 hs
          </p>
        </div>

        <div className="flex flex-col h-60 items-center p-6 space-y-3 text-center bg-black rounded-xl">
          <span className="inline-block p-2 rounded-full text-black bg-[#b4a07c]">
            <FontAwesomeIcon
              icon={faWhatsapp}
              color="#1a1a1a"
              width={"1.5em"}
              height={"1.5em"}
            ></FontAwesomeIcon>
          </span>
          <h1 className="text-2xl font-semibold text-[#b4a07c]">Escribinos</h1>
          <p className="text-gray-500 dark:text-gray-300">
            Tu consulta no molesta! Envianos un mensaje y te responderemos a la
            brevedad.
          </p>
          <a
            href="https://wa.me/5492236020937"
            target={"_blank"}
            className="flex items-center -mx-1 text-sm text-[#b4a07c] transition-colors duration-300 transform  hover:none hover:text-[#f1ddb7]"
          >
            <span className="mx-1">Enviar WhatsApp</span>
            <FontAwesomeIcon
              icon={faArrowRight}
              color="#b4a07c"
              width={"1em"}
              height={"1em"}
            ></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
