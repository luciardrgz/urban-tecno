"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../img/logo.png";
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./css/Navbar.css";

function Navbar() {
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
    <ul className="flex flex-col items-center p-4 gap-5 mt-4 -mb-1 md:flex-row md:mt-0 text-white font-semibold">
      <li key={"store"}>
        <Dropdown title="Tienda" className="drop-menu">
          <Dropdown.Item className="drop-item">
            <a href={`/store`} className="item-a">
              Ver todo
            </a>
          </Dropdown.Item>

          <Dropdown.Menu title="Marcas" className="submenu-custom">
            {brands && brands.length
              ? brands.map((brand) => (
                  <Dropdown.Item key={brand} className="drop-item">
                    <a href={`/product/brand/${brand}`} className="item-a">
                      {brand}
                    </a>
                  </Dropdown.Item>
                ))
              : null}
          </Dropdown.Menu>

          <Dropdown.Menu title="Categorías" className="submenu-custom">
            {categories && categories.length
              ? categories.map((category) => (
                  <Dropdown.Item key={category} className="drop-item">
                    <a
                      href={`/product/category/${category}`}
                      className="item-a"
                    >
                      {category}
                    </a>
                  </Dropdown.Item>
                ))
              : null}
          </Dropdown.Menu>
        </Dropdown>
      </li>

      <li key={"home"}>
        <a href={`/`} className="nav-item">
          Inicio
        </a>
      </li>

      <li key={"contact"}>
        <a href={`/contact`} className="nav-item">
          Contacto
        </a>
      </li>

      <li key={"builder"}>
        <a href={`/builder`} className="nav-item">
          Armá tu PC
        </a>
      </li>
    </ul>
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar" id="navbar-dropdown">
      <div className="container flex flex-wrap justify-between ">
        <a href="/"><Image
          className={"object-center p-2 w-40 ml-4"}
          src={logo}
          alt="logo"
          loading="eager"
          priority={true}
        ></Image></a>
        

        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className={"drop-mobile"}
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
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
}

export default Navbar;
