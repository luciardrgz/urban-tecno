import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#b4a07c] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#b4a07c] mr-2"></ArrowUturnLeftIcon>
          Ir al sitio
        </Link>

        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#b4a07c]">
          <h1 className="font-bold text-white"> Bienvenido! ⚡</h1>
          <Link
            href="https://www.papareact.com/universityofcode"
            className="text-[#b4a07c] font-bold ml-2"
          >
            https://www.instagram.com/full.tecno.mdq/
          </Link>
        </div>
      </div>

      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
