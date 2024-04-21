import Link from "next/link";
import React from "react";
import NavbarButton from "./NavbarButton";

const Navbar = (): React.ReactElement => {
  return (
    <div className="navbar bg-base-100 mt-3">
      <div className="container flex mx-auto justify-between px-40">
        <Link href="/" className="text-xl font-bold">
          OpenDiary
        </Link>
        <NavbarButton />
      </div>
    </div>
  );
};

export default Navbar;