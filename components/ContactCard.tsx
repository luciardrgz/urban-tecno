import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const styles = {
  card: "flex flex-col items-center justify-center p-4 text-center bg-[#1a1a1a] rounded-xl",
  cardTitle: "mt-2 text-xl md:text-2xl lg:text-2xl font-semibold text-[#b4a07c]",
  cardDescription: "text-lg my-2 text-gray-300 max-sm:text-md leading-tight",
};

function ContactCard({
  title,
  description,
  icon,
  link,
  linkInfo,
}: {
  title: string;
  description: string[];
  icon: IconDefinition;
  link: string;
  linkInfo: string;
}) {
  return (
    <div className={`${styles.card} shadow-custom`}>
      <span className="inline-block p-2 rounded-full text-black bg-[#b4a07c]">
        <FontAwesomeIcon
          icon={icon}
          color="#1a1a1a"
          width={"1.5em"}
          height={"1.5em"}
        />
      </span>
      <h1 className={styles.cardTitle}>{title}</h1>
      <p className={styles.cardDescription}>
        {description.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
      {link && (
        <a
          href={link}
          target="_blank"
          className="flex items-center -mx-1 text-lg transition-colors duration-300 transform hover:no-underline text-[#b4a07c] hover:text-[#f1ddb7]"
        >
          {linkInfo}&nbsp;
          <FontAwesomeIcon
            icon={faArrowRight}
            width={"1em"}
            height={"1em"}
          />
        </a>
      )}
    </div>
  );
}

export default ContactCard;
