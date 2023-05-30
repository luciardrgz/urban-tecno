import { faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../../../components/css/CompanyName.css";
import ContactCard from "../../../components/ContactCard";

function Contact() {
  return (
    <div className="container px-6 py-5 -mt-5 md:mt-0 lg:mt-0 mx-auto min-h-screen">
      <h1 className="text-xl font-semibold text-center text-white md:text-2xl lg:text-2xl ">
        Contactate con
      </h1>
      <h1 className="glow"> Urban Tecno</h1>
      <div className="grid grid-cols-1 gap-8 mt-2 md:mt-8 lg:mt-8 md:grid-cols-2 xl:grid-cols-3">
        <ContactCard
          title={"Dónde estamos"}
          description={[
            "Santa Fe 1865, Mar del Plata,",
            "Buenos Aires, Argentina",
          ]}
          icon={faLocationDot}
          link={"https://goo.gl/maps/76x7HchEEheZiEaX8"}
          linkInfo="Ver en el mapa"
        />
        <ContactCard
          title={"Nuestros horarios"}
          description={[
            "Lunes a Sábados de 10:30 a 20 hs",
            "Domingos de 16 a 20 hs",
          ]}
          icon={faClock}
          link={""}
          linkInfo={""}
        />
        <ContactCard
          title={"Escribinos"}
          description={[
            "Hacenos tu consulta y te",
            "responderemos a la brevedad!",
          ]}
          icon={faWhatsapp}
          link={"https://wa.me/5492234660666"}
          linkInfo={"Enviar WhatsApp"}
        />
      </div>
    </div>
  );
}

export default Contact;
