import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPiggyBank,
  faScrewdriverWrench,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import "./css/CompanyName.css";

const styles = {
  featuresTitle:
    "mb-1 font-semibold leading-5 text-base md:text-xl lg:text-xl text-[#b4a07c]",
  featuresDescription: " text-sm md:text-lg lg:text-lg text-white",
  icon: "flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-[#b4a07c]",
};

function Hero() {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 mb-8">
      <div className="max-w-xl mb-2 sm:mx-auto">
        <h2 className="text-center text-lg mt-10 font-semibold">
          Bienvenido a
        </h2>
        <h2 className="glow">Urban Tecno</h2>
      </div>

      <div className="justify-center pt-5 grid gap-12 row-gap-8 lg:grid-cols-3">
        <div className="flex -mb-3">
          <div className="mr-4">
            <div className={styles.icon}>
              <FontAwesomeIcon
                icon={faPiggyBank}
                color={"black"}
                width={"1.5em"}
                height={"1.5em"}
              />
            </div>
          </div>
          <div>
            <h2 className={styles.featuresTitle}>
              Venta de equipos electrónicos
            </h2>
            <p className={styles.featuresDescription}>
              Al mejor precio del mercado
            </p>
          </div>
        </div>

        <div className="flex -mb-3">
          <div className="mr-4">
            <div className={styles.icon}>
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                color={"black"}
                width={"1.5em"}
                height={"1.5em"}
              />
            </div>
          </div>
          <div>
            <h2 className={styles.featuresTitle}>
              Servicio técnico de calidad
            </h2>
            <p className={styles.featuresDescription}>A precios accesibles</p>
          </div>
        </div>

        <div className="flex -mb-3">
          <div className="mr-4">
            <div className={styles.icon}>
              <FontAwesomeIcon
                icon={faTruckFast}
                color={"black"}
                width={"1.5em"}
                height={"1.5em"}
              />
            </div>
          </div>
          <div>
            <h2 className={styles.featuresTitle}>Envíos gratis</h2>
            <p className={styles.featuresDescription}>
              Según zona, consultanos!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
