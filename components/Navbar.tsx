"use client";
import React, { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import logo from "../img/logo.png";
import ChevronDownIcon from "@heroicons/react/24/solid/ChevronDownIcon";
import ClientSideRoute from "./ClientSideRoute";
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const [brands, setBrands] = useState<string[]>();
  const [categories, setCategories] = useState<string[]>();

  async function retrieveBrands() {
    const brandsQuery = groq`
      *[_type == "brand"] {
        ...,
        name,
      }`;

    const brands: Brand[] = await client.fetch(brandsQuery);
    const brandNames: string[] = brands.map((brand) => brand.name);

    setBrands(brandNames);
  }

  useEffect(() => {
    retrieveBrands();
  }, []);

  async function retrieveCategories() {
    const productsQuery = groq`
      *[_type == "category"] {
        ...,
        name,
      }`;

    const categories: Category[] = await client.fetch(productsQuery);
    const categoryNames: string[] = categories.map((category) => category.name);

    setCategories(categoryNames);
  }

  useEffect(() => {
    retrieveCategories();
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
        <a className="p-4" href="http://localhost:3000/">
          Inicio
        </a>

        <ClientSideRoute route={``}>
          <li className="p-4">Contacto</li>
        </ClientSideRoute>

        <li className="p-4">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full rounded-md border-0 shadow-sm px-4 py-2 bg-[#b4a07c] text-sm font-medium text-black hover:bg-[#edd3a4] focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                Marcas
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#b4a07c] ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                <div className="py-1">
                  {brands && brands.length
                    ? brands.map((brand) => (
                        <Menu.Item>
                          {({ active }) =>
                            generateAnchor(active, "brand/", brand)
                          }
                        </Menu.Item>
                      ))
                    : null}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <li className="p-4">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full rounded-md border-0 shadow-sm px-4 py-2 bg-[#b4a07c] text-sm font-medium text-black hover:bg-[#edd3a4] focus:outline-none focus:ring-2 focus:ring-offset-2">
                Productos
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#b4a07c] ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                <div className="py-1">
                  {categories && categories.length
                    ? categories.map((category) => (
                        <Menu.Item>
                          {({ active }) =>
                            generateAnchor(active, "category/", category)
                          }
                        </Menu.Item>
                      ))
                    : null}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
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
      className={classNames(
        status ? "bg-gray-100 text-gray-900" : "text-gray-700",
        "block px-4 py-2 text-sm"
      )}
    >
      {info}
    </a>
  );
}
