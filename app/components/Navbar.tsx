import Image from "next/image";
import Link from "next/link";

import LogoText from "../../public/logo-name.svg";
import logoMobile from "../../public/icon-logo.svg";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="h-[10vh] w-full flex items-center border-b px-5 lg:px-14 justify-between">
      <Link href="/" className="flex items-center gap-x-3">
        <Image src={logoMobile} alt="mobile icon" className="h-8 w-fit" />
        <Image
          src={LogoText}
          alt="Logo Desktop"
          className="h-6 w-fit hidden lg:block"
        />
      </Link>

      <div className="flex items-center gap-x-4">
        <ThemeToggle />
        <Button variant="secondary">Sign up</Button>
        <Button>Log in</Button>
      </div>
    </nav>
  );
}
