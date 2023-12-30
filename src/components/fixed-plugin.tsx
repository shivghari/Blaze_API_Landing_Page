"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a href="https://www.google.com" target="_blank">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
        placeholder={""}
      >
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="Blaze API"
          src="https://www.material-tailwind.com/favicon.png"
        />{" "}
        Blaze API
      </Button>
    </a>
  );
}
