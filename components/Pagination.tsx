import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const styles = {
  button: "px-4 py-2 rounded-md text-white cursor-pointer",
  activeButton:
    "font-semibold bg-[#b4a07c] text-[#5f5542] hover:bg-[#ecd3a4] hover:text-black hover:no-underline transition-colors duration-300",
  inactiveButton:
    "bg-[#343434] hover:bg-[#b4a07c] text-[#b4a07c] hover:text-black transition-colors duration-300",
};

type Props = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalProducts: number;
  productsPerPage: number;
};

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalProducts,
  productsPerPage,
}: Props) => {
  const pageNumbers = [];

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center gap-1">
      <a
        className={`${styles.button} ${styles.inactiveButton}`}
        onClick={previousPage}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </a>

      {pageNumbers.map((pageNumber) => (
        <div
          key={pageNumber}
          className={`${styles.button} ${
            currentPage === pageNumber
              ? styles.activeButton
              : styles.inactiveButton
          }`}
          onClick={() => setCurrentPage(pageNumber)}
        >
          {pageNumber}
        </div>
      ))}

      <a
        className={`${styles.button} ${styles.inactiveButton}`}
        onClick={nextPage}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </a>
    </div>
  );
};

export default Pagination;
