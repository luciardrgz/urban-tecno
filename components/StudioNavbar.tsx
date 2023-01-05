import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-2">
        <Link href="/" className="text-[#b4a07c] flex items-center">
          <ArrowUturnLeftIcon className="h-3 w-3 text-[#b4a07c] mr-2"></ArrowUturnLeftIcon>
          Ir al sitio
        </Link>

        <div className="hidden md:flex p-2 rounded-lg justify-center border-2 border-[#544b3a]">
          <h1 className="font-bold text-white"> Bienvenido! ⚡</h1>
          <Link
            href="https://www.instagram.com/full.tecno.mdq/"
            className="text-[#b4a07c] font-bold ml-2"
          >
            Ir a Instagram
          </Link>
        </div>
      </div>

      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
