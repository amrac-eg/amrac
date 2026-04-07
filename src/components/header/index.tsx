import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/favicon.png";
import Navbar from "./Navbar";
import { getServerSession } from "next-auth";
import authOptions from "@/server/auth";

const Header = async () => {
  const initialSession = await getServerSession(authOptions);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 text-white">
        <div className="relative  bg-primary  py-2">
          <div className="container flex items-center justify-between gap-6 lg:gap-10 relative z-10">
            <Link href={`/`}>
              <Image
                style={{ height: "auto" }} // 👈 Prevent distortion
                priority
                src={logo}
                alt="شركة الاستشارات الهندسية"
                width={100}
                height={100}
              />
            </Link>
            <Navbar initialSession={initialSession} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
