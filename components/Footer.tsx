import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="text-center bg-[#1b1b1b] mb-0 w-full h-20">
      <div className="flex justify-center text-center gap-2">
        <a
          href="https://www.instagram.com/full.tecno.mdq/"
          className="text-[#666666] hover:text-[#b4a07c] mt-4 transition"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            width={"1.5em"}
            height={"1.5em"}
          />
        </a>
        <a
          href="https://wa.me/5492236020937"
          className="text-[#666666] hover:text-[#b4a07c] mt-4 transition"
        >
          <FontAwesomeIcon icon={faWhatsapp} width={"1.5em"} height={"1.5em"} />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/luciardrgz/" title="LinkedIn del desarrollador" target="_blank" rel="noreferrer" className="mt- text-[#666666] hover:no-underline hover:text-white transition">
            luciardrgz | 2023
          </a>
      </div>
      
    </footer>
  );
}

export default Footer;
