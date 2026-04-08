"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Menu, XIcon } from "lucide-react";
import { Session } from "next-auth";
import { Routes } from "../constants/enums";
import Link from "../link";
import { useClientSession } from "../hooks/useClientSession";
import LanguageSwitcher from "./language-switcher";

const Navbar = ({ initialSession }: { initialSession: Session | null }) => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const session = useClientSession(initialSession);
  console.log(session);

  const links = [
    {
      id: crypto.randomUUID(),
      title: "الرئيسية",
      href: Routes.HOME,
    },
    {
      id: crypto.randomUUID(),
      title: "خدماتنا",
      href: Routes.SERVICES,
    },

    {
      id: crypto.randomUUID(),
      title: "مشاريعنا",
      href: Routes.OURWORK,
    },
    {
      id: crypto.randomUUID(),
      title: "من نحن",
      href: Routes.ABOUT,
    },

    {
      id: crypto.randomUUID(),
      title: "اتصل بنا",
      href: Routes.CONTACT,
    },
  ];

  return (
    <nav>
      <Button
        data-slot="menu-button"
        role="button"
        aria-label="Menu"
        title="Menu"
        variant="secondary"
        size="sm"
        className="lg:hidden"
        onClick={() => setOpenMenu(true)}
      >
        <Menu className="!w-6 !h-6" />
      </Button>
      <ul
        className={`fixed lg:static ${
          openMenu ? "top-0 z-50 !h-3/4" : "-top-full"
        } left-0 z-50 px-10 py-20 lg:p-0 bg-primary lg:bg-transparent md:bg-none transition-all duration-200 w-full lg:w-auto flex-col lg:flex-row flex items-center justify-center gap-10`}
      >
        {/* Close button */}
        <Button
          variant="secondary"
          size="sm"
          className="absolute top-4 right-4 lg:hidden"
          onClick={() => setOpenMenu(false)}
        >
          <XIcon className="!w-6 !h-6" />
        </Button>

        {/* Menu links */}
        {links.map((link) => (
          <li key={link.id}>
            <Link
              onClick={() => setOpenMenu(false)} // Close menu after clicking
              className={`font-semibold hover:text-blue-400 duration-200 transition-colors ${
                pathname === `/${link.href}` ? "text-blue-400" : "text-white"
              }`}
              href={`/${link.href}`}
            >
              {link.title}
            </Link>
          </li>
        ))}
        {session.data?.user && (
          <li>
            <Link
              href={`/${Routes.ADMIN}`}
              onClick={() => setOpenMenu(false)}
              className={`font-semibold hover:text-primary duration-200 transition-colors ${
                pathname === `/${Routes.ADMIN}` ? "text-blue-400" : "text-white"
              }`}
            >
              لوحة التحكم
            </Link>
          </li>
        )}
        <LanguageSwitcher />
      </ul>
    </nav>
  );
};

export default Navbar;
