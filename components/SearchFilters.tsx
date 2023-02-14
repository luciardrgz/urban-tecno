import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function SearchFilters() {
  return (
    <div className="md:mb-0 lg:mb-0">
      <div className="absolute p-3 pb-10 w-48 text-center ml-4">
        <details className="-ml-5 md:-ml-4 lg:-ml-7 w-48 overflow-hidden rounded-md border bg-[#b4a07c] border-[#b4a07c] [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between p-2 text-white cursor-pointer">
            <span className="text-sm font-medium text-[#161616]">
              Ordenar por
            </span>

            <FontAwesomeIcon
              icon={faChevronDown}
              color="#161616"
              width={"1.5em"}
              height={"1.5em"}
            ></FontAwesomeIcon>
          </summary>

          <div className="bg-[#161616] text-white border-gray-200">
            <ul className="p-4 space-y-1 border-t  border-gray-200">
              <li key={"priceDesc"}>
                <a
                  href="/store/filter/priceDesc"
                  className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-[#b4a07c] hover:no-underline"
                >
                  Precio mayor a menor
                </a>
              </li>

              <div className="p-1 border-t border-[#b4a07c]"></div>
              <li key={"priceAsc"}>
                <a
                  href="/store/filter/priceAsc"
                  className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-[#b4a07c] hover:no-underline"
                >
                  Precio menor a mayor
                </a>
              </li>

              <div className="p-1 border-t border-[#b4a07c]"></div>
              <li key={"latest"}>
                <a
                  href="/store/filter/latest"
                  className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-[#b4a07c] hover:no-underline"
                >
                  Más recientes
                </a>
              </li>

              <div className="p-1 border-t border-[#b4a07c]"></div>
              <li key={"oldest"}>
                <a
                  href="/store/filter/oldest"
                  className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-[#b4a07c] hover:no-underline"
                >
                  Más antiguos
                </a>
              </li>
            </ul>

            <a
              href="/store"
              className="flex items-center justify-between p-4 text-sm text-gray-400 hover:text-white hover:no-underline"
            >
              Limpiar
            </a>
          </div>
        </details>
      </div>
    </div>
  );
}

export default SearchFilters;
