"use client";
import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import logo from "../img/logo.png";
import ClientSideRoute from "./ClientSideRoute";
import { Dropdown, Nav } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  const [brands, setBrands] = useState<string[]>();
  const [categories, setCategories] = useState<string[]>();

  async function retrieveData() {
    const brandsQuery = groq`
      *[_type == "brand"] {
        ...,
        name,
      }`;

    const brands: Brand[] = await client.fetch(brandsQuery);
    const brandNames: string[] = brands.map((brand) => brand.name);

    setBrands(brandNames);

    const categoriesQuery = groq`
      *[_type == "category"] {
        ...,
        name,
      }`;

    const categories: Category[] = await client.fetch(categoriesQuery);
    const categoryNames: string[] = categories.map((category) => category.name);

    setCategories(categoryNames);
  }

  useEffect(() => {
    retrieveData();
  }, []);

  const navigationView = (
    <ul className="flex flex-col items-center p-4 gap-5 mt-4 md:flex-row md:mt-0 bg-[#1a1a1a]">
      <li>
        <ClientSideRoute route={`http://localhost:3000/`}>
          <li className="text-white hover:text-[#b4a07c]">Inicio</li>
        </ClientSideRoute>
      </li>

      <li key={"store-dropdown"}>
        <Dropdown
          title="Tienda"
          className="rounded-md border-0 shadow-sm p-0.2 bg-[#b4a07c] text-black"
          key={"tienda"}
        >
          <Dropdown.Item className="bg-[#b4a07c] hover:bg-[#cdb78e] text-[#5f5542] hover:text-black">
            <ClientSideRoute route={`http://localhost:3000/store`}>
              Ver todo
            </ClientSideRoute>
          </Dropdown.Item>

          <Dropdown.Menu
            title="Marcas"
            className="bg-[#b4a07c] text-[#5f5542] hover:text-black"
          >
            {brands && brands.length
              ? brands.map((brand) => (
                  <Dropdown.Item className="hover:bg-[#cdb78e] text-[#5f5542] hover:text-black">
                    {generateAnchor(true, "brand/", brand)}
                  </Dropdown.Item>
                ))
              : null}
          </Dropdown.Menu>

          <Dropdown.Menu
            title="Categorías"
            className="bg-[#b4a07c] text-[#5f5542] hover:text-black"
          >
            {categories && categories.length
              ? categories.map((category) => (
                  <Dropdown.Item className="hover:bg-[#cdb78e] text-[#5f5542] hover:text-black">
                    {generateAnchor(true, "category/", category)}
                  </Dropdown.Item>
                ))
              : null}
          </Dropdown.Menu>
        </Dropdown>
      </li>

      <li>
        <ClientSideRoute route={`http://localhost:3000/contact`}>
          <li className="text-white hover:text-[#b4a07c]">Contacto</li>
        </ClientSideRoute>
      </li>
    </ul>
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={"px-2 bg-[#1a1a1a]"} id="navbar-dropdown">
      <div
        className={
          "container flex flex-wrap items-center justify-between mx-auto"
        }
        key={"navbar"}
      >
        <Image
          className={"object-cover p-2"}
          height={50}
          width={50}
          src={logo}
          alt="logo"
          loading="eager"
          priority={true}
        ></Image>

        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className={
            "items-center p-3 text-2xl text-[#b4a07c] rounded-lg md:hidden"
          }
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <FontAwesomeIcon icon={faBars} color="#b4a07c"></FontAwesomeIcon>
        </button>

        {/*Nav mobile */}
        {isMenuOpen && (
          <div className={"w-full md:block md:w-auto"}>{navigationView}</div>
        )}

        {/*Nav desktop */}
        {!isMenuOpen && (
          <div className={"hidden w-full md:block md:w-auto"}>
            {navigationView}
          </div>
        )}
      </div>
      <hr className="border-[#b4a07c] my-2 mb-10" />
    </nav>
  );
};

export default Navbar;

function generateAnchor(status: boolean, subpath: string, info: string) {
  return (
    <a
      href={`/product/${subpath}/${info}`}
      className="hover:no-underline text-[#5f5542] hover:text-black"
    >
      {info}
    </a>
  );
}
