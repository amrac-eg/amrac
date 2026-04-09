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
import { Locale } from "@/i18n.config";

// Translation object
const translations = {
  ar: {
    menuButton: "القائمة",
    closeButton: "إغلاق",
    links: [
      { title: "الرئيسية", href: Routes.HOME },
      { title: "خدماتنا", href: Routes.SERVICES },
      { title: "مشاريعنا", href: Routes.OURWORK },
      { title: "من نحن", href: Routes.ABOUT },
      { title: "اتصل بنا", href: Routes.CONTACT }
    ],
    adminPanel: "لوحة التحكم"
  },
  en: {
    menuButton: "Menu",
    closeButton: "Close",
    links: [
      { title: "Home", href: Routes.HOME },
      { title: "Services", href: Routes.SERVICES },
      { title: "Our Work", href: Routes.OURWORK },
      { title: "About", href: Routes.ABOUT },
      { title: "Contact", href: Routes.CONTACT }
    ],
    adminPanel: "Admin Panel"
  }
};

const Navbar = ({
  initialSession,
  locale,
}: {
  initialSession: Session | null;
  locale: Locale;
}) => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const session = useClientSession(initialSession);
  const t = translations[locale];
  const isRTL = locale === 'ar';

  // Filter out the locale from pathname for comparison
  const getPathWithoutLocale = (path: string) => {
    const segments = path.split('/');
    // Remove the first empty string and the locale segment
    if (segments.length > 2 && (segments[1] === 'ar' || segments[1] === 'en')) {
      return '/' + segments.slice(2).join('/');
    }
    return path;
  };

  const currentPath = getPathWithoutLocale(pathname);

  const links = t.links.map(link => ({
    id: crypto.randomUUID(),
    title: link.title,
    href: link.href
  }));

  return (
    <nav dir={isRTL ? "rtl" : "ltr"}>
      <Button
        data-slot="menu-button"
        role="button"
        aria-label={t.menuButton}
        title={t.menuButton}
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
          aria-label={t.closeButton}
          title={t.closeButton}
        >
          <XIcon className="!w-6 !h-6" />
        </Button>

        {/* Menu links */}
        {links.map((link) => (
          <li key={link.id}>
            <Link
              onClick={() => setOpenMenu(false)}
              className={`font-semibold hover:text-blue-400 duration-200 transition-colors ${
                currentPath === `/${link.href}` || 
                (link.href === Routes.HOME && (currentPath === '/' || currentPath === ''))
                  ? "text-blue-400" 
                  : "text-white"
              }`}
              href={`/${locale}/${link.href}`}
            >
              {link.title}
            </Link>
          </li>
        ))}
        {session.data?.user && (
          <li>
            <Link
              href={`/${locale}/${Routes.ADMIN}`}
              onClick={() => setOpenMenu(false)}
              className={`font-semibold hover:text-blue-400 duration-200 transition-colors ${
                currentPath === `/${Routes.ADMIN}` ? "text-blue-400" : "text-white"
              }`}
            >
              {t.adminPanel}
            </Link>
          </li>
        )}
        <LanguageSwitcher />
      </ul>
    </nav>
  );
};

export default Navbar;