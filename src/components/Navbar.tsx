import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <div className="flex mb-8 mx-auto border-b border-gray-200 dark:border-gray-700 py-4 px-8 justify-between items-center">
      <Link href="#">
        <h1 className="text-lg font-bold">PROJECT X</h1>
      </Link>
      <ModeToggle />
    </div>
  );
}
