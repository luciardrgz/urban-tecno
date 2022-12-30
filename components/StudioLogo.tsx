import Image from "next/image";
import logo from "../img/logo.png";

function StudioLogo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src={logo}
        alt="logo"
      ></Image>

      <>{renderDefault(props)}</>
    </div>
  );
}

export default StudioLogo;
