import Image from "next/image";
import Button from "./components/UI/Button";
import { Bell, Heart, MessageSquareText, PlusSquare, User } from "lucide-react";
import SearchBar from "./components/UI/SearchBar";
import Menu, { SubMenu } from "./components/UI/Menu";

export default function Home() {
  return (
    <main>
      <nav className="flex flex-col items-center justify-between border-b border-[#152233]">
        <div className="border-b-1">
          <div className="flex h-[60px] z-10 max-w-5xl w-full items-center justify-between pt-2">
            <div>
              <a
                className="pointer-events-none gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href=""
                rel="noopener noreferrer"
              >
                <Image
                  src="/leboncoin.svg"
                  alt="Logo"
                  className=""
                  width={140}
                  height={60}
                  priority
                />
              </a>
            </div>
            <div className="flex ml-2">
              <Button name="Déposer une annonce">
                <PlusSquare color="white" size={16} />
              </Button>
              <div className="flex ml-4">
                <SearchBar />
              </div>
            </div>
            <div className="flex h-[60px]">
              <Menu name="Mes recherches">
                <Bell color="#152233" size={24} />
              </Menu>
              <Menu name="Favoris">
                <Heart color="#152233" size={24} />
              </Menu>
              <Menu name="Messages">
                <MessageSquareText color="#152233" size={24} />
              </Menu>
              <Menu name="Se connecter">
                <User color="#152233" size={24} />
              </Menu>
            </div>
          </div>
          <div className="mt-4">
            <SubMenu />
          </div>
        </div>
      </nav>
      <section className="flex flex-col items-center justify-between">
        <p>
          Des millions de petites annonces et autant d’occasions de se faire
          plaisir
        </p>
      </section>
    </main>
  );
}
