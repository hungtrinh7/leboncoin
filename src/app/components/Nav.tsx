import React from "react";
import SearchBar from "./UI/SearchBar";
import Menu, { SubMenu } from "./UI/Menu";
import { Bell, Heart, MessageSquareText, PlusSquare, User } from "lucide-react";
import Image from "next/image";
import Button from "./UI/Button";
import { cookies } from "next/headers";

const Nav = () => {
  const cookieStore = cookies();
  const hasCookie = cookieStore.has("isUserLoggedIn");

  return (
    <nav className="flex flex-col items-center justify-between border-b border-gray-400">
      <div className="border-b-1">
        <div className="flex h-[60px] z-10 max-w-5xl w-full items-center justify-between pt-2">
          <div>
            <a
              className="pointer-events-none gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="/"
            >
              <Image
                src="/leboncoin.svg"
                alt="Logo"
                className=""
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "140px", height: "auto" }}
                priority
              />
            </a>
          </div>
          <div className="flex ml-2">
            <Button name="Déposer une annonce" url="/deposer-une-annonce">
              <PlusSquare color="white" size={16} />
            </Button>
            <div className="flex ml-4">
              <SearchBar />
            </div>
          </div>
          <div className="flex h-[60px] mt-3">
            <Menu name="Mes recherches">
              <Bell color="#152233" size={20} />
            </Menu>
            <Menu name="Favoris" url={"/mes-annonces"}>
              <Heart color="#152233" size={20} />
            </Menu>
            <Menu name="Messages">
              <MessageSquareText color="#152233" size={20} />
            </Menu>
            {hasCookie ? (
              <Menu name="Connecté" url="/">
                <User color="#152233" size={20} />
              </Menu>
            ) : (
              <Menu name="Se connecter" url="/login">
                <User color="#152233" size={20} />
              </Menu>
            )}
          </div>
        </div>
        <div className="mt-4">
          <SubMenu />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
