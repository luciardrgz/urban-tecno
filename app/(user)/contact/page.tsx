import { faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../../../components/css/CompanyName.css";
import ContactCard from "../../../components/ContactCard";
import Map from "../../../components/Map";

function Contact() {
  return (
    <div className="container px-6 py-5 -mt-5 md:mt-0 lg:mt-0 mx-auto min-h-screen">
      <h1 className="text-xl font-semibold text-center text-white md:text-2xl lg:text-2xl ">
        Contactate con
      </h1>
      <h1 className="glow"> Urban Tecno</h1>
      <div className="grid grid-cols-1 gap-8 mt-2 md:mt-8 lg:mt-8 lg:grid-cols-3">
        <ContactCard
          title={"Dónde estamos"}
          description={["Santa Fe 1875, Mar del Plata", "Buenos Aires, Argentina"]}
          icon={faLocationDot}
          link={"https://goo.gl/maps/76x7HchEEheZiEaX8"}
          linkInfo="Ver en Google Maps"
        />
        <ContactCard
          title={"Nuestro horario"}
          description={["Todos los días", "de 10:00 a 20:00 hs."]}
          icon={faClock}
          link={""}
          linkInfo={""}
        />
        <ContactCard
          title={"Escribinos"}
          description={[
            "Tenés una consulta?",
            "No dudes en decirnos!",
          ]}
          icon={faWhatsapp}
          link={"https://wa.me/5492236228659"}
          linkInfo={"Enviar WhatsApp"}
        />
      </div>
      <div className="mt-10">
        <Map />
      </div>
    </div>
  );
}

export default Contact;
