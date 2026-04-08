"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { Languages } from "../constants/enums";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useParams();

  const switchLanguage = (newLocale: string) => {
    const path =
      pathname?.replace(`/${locale}`, `/${newLocale}`) ?? `/${newLocale}`;
    router.push(path);
  };

  return (
    <div className="flex items-center bg-gray-100 rounded-full p-1 w-fit">
      <button
        onClick={() => switchLanguage(Languages.ARABIC)}
        className={`px-3 py-1 rounded-full text-sm transition ${
          locale === Languages.ARABIC
            ? "bg-primary text-white"
            : "text-gray-600"
        }`}
      >
        AR
      </button>

      <button
        onClick={() => switchLanguage(Languages.ENGLISH)}
        className={`px-3 py-1 rounded-full text-sm transition ${
          locale === Languages.ENGLISH
            ? "bg-primary text-white"
            : "text-gray-600"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
