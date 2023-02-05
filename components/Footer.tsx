import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="text-center bg-[#1b1b1b] mb-0 w-full h-20">
      <div className="flex justify-center text-center gap-2">
        <a
          href="https://www.instagram.com/full.tecno.mdq/"
          className="text-[#666666] hover:text-[#b4a07c] mt-4"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            width={"1.5em"}
            height={"1.5em"}
          ></FontAwesomeIcon>
        </a>
        <a
          href="https://wa.me/5492236020937"
          className="text-[#666666] hover:text-[#b4a07c] mt-4"
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            width={"1.5em"}
            height={"1.5em"}
          ></FontAwesomeIcon>
        </a>
      </div>
      <div className="text-[#666666]">© 2023 - Full Tecno</div>
    </footer>
  );
}

export default Footer;
