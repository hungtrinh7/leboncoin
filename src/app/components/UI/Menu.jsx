"use client";
import React, { useEffect, useState } from "react";
import { CATEGORIES } from "../../data/categories";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const Menu = ({ name, children }) => {
  return (
    <div className="flex items-center">
      <a
        className="flex flex-col items-center px-2 pb-1 gap-2 after:block after:content-[''] after:border-b-[3px] after:border-[#EC5A12] after:scale-x-0 after:transition-transform after:ease-in-out hover:after:scale-x-100"
        href=""
        rel="noopener noreferrer"
      >
        {children}
        <span className="text-xs">{name}</span>
      </a>
    </div>
  );
};

export default Menu;

export const SubMenu = () => {
  const [categories, setCategories] = useState(null);
  const [isMenuHover, setIsMenuHover] = useState(false);
  const [isSubMenuShown, setIsSubMenuShown] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const lastElement = CATEGORIES[CATEGORIES.length - 1];

  const handleMouseEnter = (e, id) => {
    setIsMenuHover(true);
    setCurrentCategory(() => CATEGORIES.find((category) => category.id === id));
    setIsSubMenuShown(true);
  };

  useEffect(() => {
    if (currentCategory) {
      setCategories(() => currentCategory.list);
    }
  }, [currentCategory]);

  return (
    <div className="flex relative gap-4 text-[14px]">
      {CATEGORIES.map((category) => (
        <div key={category.id} className="flex gap-4 items-baseline">
          <button
            onMouseEnter={(e) => handleMouseEnter(e, category.id)}
            className="h-[50px] hover:border-b-2 hover:border-black"
          >
            {category.name}
          </button>
          {lastElement !== category && (
            <span className="h-[50px] before:content-['·']"></span>
          )}
        </div>
      ))}
      {isMenuHover && isSubMenuShown && (
        <div
          onMouseLeave={() => setIsSubMenuShown(false)}
          className="absolute flex top-0 mt-14 w-full max-h-[450px] border-2 rounded-b-lg drop-shadow-md bg-white"
        >
          <div className="bg-slate-50 p-7 shrink-0 grow-0 basis-[10rem] bg-neutral-container px-xl py-2xl">
            {currentCategory && (
              <h2 className="flex items-center pl-3 border-l border-black font-bold">
                {currentCategory.icon}
                <span className="ml-2 text-base">{currentCategory.name}</span>
              </h2>
            )}
          </div>
          <div className="flex flex-wrap flex-col gap-6 p-6">
            {categories &&
              categories.map((category) => (
                <div key={category.id} className="text-base">
                  <Link
                    href={""}
                    className="flex mt-2 font-bold hover:text-[#EC5A12]"
                  >
                    {category.name}
                    <span className="ml-1">
                      {category.targetBlank && <ExternalLink size={16} />}
                    </span>
                  </Link>
                  <div className="">
                    {category.subCategories &&
                      category.subCategories.map((subCategory) => (
                        <Link
                          href={""}
                          key={subCategory.id}
                          className="flex mt-1 hover:text-[#EC5A12] text-sm"
                        >
                          {subCategory.name}
                          <span className="ml-1">
                            {subCategory.targetBlank && (
                              <ExternalLink size={16} />
                            )}
                          </span>
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
