"use client";
import { Pages, Routes } from "@/components/constants/enums";
import Link from "@/components/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

const AdminTabs = () => {
  const pathname = usePathname();

  const tabs = [
    {
      id: crypto.randomUUID(),
      title: "الخدمات",
      href: Routes.ADMIN,
    },

    {
      id: crypto.randomUUID(),
      title: "المشاريع",
      href: `${Routes.ADMIN}/${Pages.OURWORK}`,
    },
    {
      id: crypto.randomUUID(),
      title: "الصور لمشاريعنا",
      href: `${Routes.ADMIN}/${Pages.IMAGE_TO_OUR_WORK}`,
    },
    {
      id: crypto.randomUUID(),
      title: "اتصل بنا",
      href: `${Routes.ADMIN}/${Pages.CONTACT_ADMIN}`,
    },
  ];

  const isActiveTab = (href: string) => {
    const hrefArray = href.split("/");
    return hrefArray.length > 1
      ? pathname.startsWith(`/${href}`)
      : pathname === `/${href}`;
  };
  return (
    <nav className="mt-20 py-2">
      <ul className="flex items-center flex-wrap gap-4 justify-center py-9">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <Link
              href={`/${tab.href}`}
              className={`hover:!text-white ${
                isActiveTab(tab.href)
                  ? buttonVariants({ variant: "default" })
                  : buttonVariants({ variant: "outline" })
              } `}
            >
              {tab.title}
            </Link>
          </li>
        ))}
        <Button
          className="!px-8 !rounded-full"
          size="lg"
          onClick={() => signOut()}
        >
          تسجيل الخروج
        </Button>
      </ul>
    </nav>
  );
};

export default AdminTabs;
