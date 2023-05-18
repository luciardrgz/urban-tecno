import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faArrowRight,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../../../components/css/CompanyName.css";

const styles = {
  card: "flex flex-col h-60 items-center p-6 space-y-3 text-center bg-[#1a1a1a] rounded-xl",
  cardTitle: "text-xl md:text-2xl lg:text-2xl font-semibold text-[#b4a07c]",
  cardDescription: "text-md text-gray-300",
};

function Contact() {
  return (
    <div className="container px-6 py-5 -mt-5 md:mt-0 lg:mt-0 mx-auto min-h-screen">
      <h1 className="text-xl font-semibold text-center text-white md:text-2xl lg:text-2xl ">
        Contactate con
      </h1>
      <h1 className="glow"> Urban Tecno</h1>
      <div className="grid grid-cols-1 gap-8 mt-2 md:mt-8 lg:mt-8 md:grid-cols-2 xl:grid-cols-3">
        <div className={styles.card}>
          <span className="inline-block p-2 rounded-full text-black bg-[#b4a07c]">
            <FontAwesomeIcon
              icon={faLocationDot}
              color="#1a1a1a"
              width={"1.5em"}
              height={"1.5em"}
            ></FontAwesomeIcon>
          </span>
          <h1 className={styles.cardTitle}>Dónde estamos</h1>
          <p className={styles.cardDescription}>
            Santa Fe 1865, Mar del Plata,
            <br />
            Buenos Aires, Argentina
          </p>
          <a
            href="https://goo.gl/maps/76x7HchEEheZiEaX8"
            target="_blank"
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

        <div className={styles.card}>
          <span className="inline-block p-2 rounded-full text-black bg-[#b4a07c]">
            <FontAwesomeIcon
              icon={faClock}
              color="#1a1a1a"
              width={"1.5em"}
              height={"1.5em"}
            ></FontAwesomeIcon>
          </span>
          <h1 className={styles.cardTitle}>Nuestros horarios</h1>
          <p className={styles.cardDescription}>
            Lunes a Sábados de 10:30 a 20 hs <br /> Domingos de 16 a 20 hs
          </p>
        </div>

        <div className={styles.card}>
          <span className="inline-block p-2 rounded-full text-black bg-[#b4a07c]">
            <FontAwesomeIcon
              icon={faWhatsapp}
              color="#1a1a1a"
              width={"1.5em"}
              height={"1.5em"}
            ></FontAwesomeIcon>
          </span>
          <h1 className={styles.cardTitle}>Escribinos</h1>
          <p className={styles.cardDescription}>
            Tu consulta no molesta! Envianos un mensaje y te responderemos a la
            brevedad.
          </p>
          <a
            href="https://wa.me/5492234660666"
            target="_blank"
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
