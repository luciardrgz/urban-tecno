"use client";
import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import logo from "../img/logo.png";
import ClientSideRoute from "./ClientSideRoute";
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";

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

  return (
    <div className="w-full h-20 flex justify-between items-center px-8 text-white">
      <Image
        className="object-cover"
        height={50}
        width={60}
        src={logo}
        alt="logo"
        loading="eager"
        priority={true}
      ></Image>

      <ul className="flex items-center">
        <ClientSideRoute route={`http://localhost:3000/`}>
          <li className="p-7 hover:text-[#b4a07c]">Inicio</li>
        </ClientSideRoute>
        <ClientSideRoute route={`http://localhost:3000/contact`}>
          <li className="p-7 hover:text-[#b4a07c]">Contacto</li>
        </ClientSideRoute>

        <li className="p-7 hover:text-[#b4a07c]">
          <Dropdown
            title="Tienda"
            className="rounded-md border-0 shadow-sm p-0.2 bg-[#b4a07c] text-l text-black"
          >
            <Dropdown.Item className="bg-[#b4a07c] hover:bg-[#cdb78e] text-[#5f5542] hover:text-black">
              <a
                href={`/product/store`}
                className="hover:no-underline text-[#5f5542] hover:text-black"
              >
                Ver todo
              </a>
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
      </ul>
    </div>
  );
}

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
