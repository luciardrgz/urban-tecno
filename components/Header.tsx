import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <h1 className="font-hanken font-bold">Envíos gratis según zona </h1>
      </div>

      <div>
        <Link
          href="https://www.instagram.com/full.tecno.mdq/"
          className="font-hanken font-bold px-5 py-3 text-sm md:text-base bg-gray-900 text-[#b4a07c] flex items-center rounded-full text-center"
          target="_BLANK"
        >
          Seguir en Instagram
        </Link>
      </div>
    </header>
  );
}

export default Header;
