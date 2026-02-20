"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Search, Menu } from "lucide-react";
import Logo from "../icons/Logo";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <nav className="bg-cardBg rounded-3xl p-4 md:px-8 md:py-6 text-base font-bold text-textColor relative">
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <div className="md:hidden">
            <Menu className="size-5" />
          </div>

          <div className="hidden md:flex gap-10 items-center">
            <Link
              href="/"
              className="hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              New Drops 🔥
            </Link>

            <button
              className="flex items-center cursor-pointer gap-1 hover:opacity-70 transition-opacity"
              onClick={() => toggleMenu("men")}
            >
              Men
              <ChevronDown
                size={16}
                fill="#232321"
                className={`transition-transform duration-200 ${activeMenu === "men" ? "rotate-180" : ""}`}
              />
            </button>

            <button
              className="cursor-pointer flex items-center gap-1 hover:opacity-70 transition-opacity"
              onClick={() => toggleMenu("women")}
            >
              Women
              <ChevronDown
                size={16}
                fill="#232321"
                className={`transition-transform duration-200 ${activeMenu === "women" ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="/">
            <Logo className="w-24 h-5 md:w-32 md:h-8" />
          </Link>
        </div>

        <div className="flex items-center justify-end gap-2 md:gap-10">
          <Search size={24} className="hidden md:block cursor-pointer" />
          <Image
            src="/images/user.svg"
            width={24}
            height={24}
            alt="user"
            className="size-4 md:size-6 cursor-pointer"
          />
          <div className="bg-accent text-sm md:text-base rounded-full flex items-center justify-center size-5 md:size-8 cursor-pointer">
            0
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
