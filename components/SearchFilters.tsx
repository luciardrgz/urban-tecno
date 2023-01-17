import ClientSideRoute from "./ClientSideRoute";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function SearchFilters() {
  return (
    <div className="absolute p-3 pb-10 w-48 text-center">
      <details className="w-48 overflow-hidden rounded-md border bg-[#b4a07c] border-[#b4a07c] [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex items-center justify-between p-2  text-white cursor-pointer">
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
            <li>
              <label
                htmlFor="FilterOutOfStock"
                className="inline-flex items-center gap-2"
              >
                <ClientSideRoute
                  route={`http://localhost:3000/store/priceDesc`}
                >
                  <span className="text-sm font-medium hover:text-[#b4a07c]">
                    Precio mayor a menor
                  </span>
                </ClientSideRoute>
              </label>
            </li>

            <div className="p-1 border-t border-[#b4a07c]"></div>
            <li>
              <label
                htmlFor="FilterOutOfStock"
                className="inline-flex items-center gap-2"
              >
                <ClientSideRoute route={`http://localhost:3000/store/priceAsc`}>
                  <span className="text-sm font-medium hover:text-[#b4a07c]">
                    Precio menor a mayor
                  </span>
                </ClientSideRoute>
              </label>
            </li>

            <div className="p-1 border-t border-[#b4a07c]"></div>
            <li>
              <label
                htmlFor="FilterInStock"
                className="inline-flex items-center gap-2"
              >
                <ClientSideRoute route={`http://localhost:3000/store/newest`}>
                  <span className="text-sm font-medium hover:text-[#b4a07c]">
                    Más recientes
                  </span>
                </ClientSideRoute>
              </label>
            </li>

            <div className="p-1 border-t border-[#b4a07c]"></div>
            <li>
              <label
                htmlFor="FilterPreOrder"
                className="inline-flex items-center gap-2"
              >
                <ClientSideRoute route={`http://localhost:3000/store/oldest`}>
                  <span className="text-sm font-medium hover:text-[#b4a07c]">
                    Más antiguos
                  </span>
                </ClientSideRoute>
              </label>
            </li>
          </ul>

          <header className="flex items-center justify-between p-4">
            <ClientSideRoute route={`http://localhost:3000/store/`}>
              <button
                type="button"
                className="text-sm text-gray-400 underline underline-offset-4 hover:text-white"
              >
                Limpiar
              </button>
            </ClientSideRoute>
          </header>
        </div>
      </details>
    </div>
  );
}

export default SearchFilters;
