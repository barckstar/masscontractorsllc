"use client";
import Link from "next/link";
import Image from "next/image";


export const Navbar2 = () => {

  return (
    <div
      className="left-0 top-0 w-full z-40 ease-in duration-300 pb-20"
      style={{ backgroundColor: "#F3F4F6" }}
    >
      <div className="max-w-[1240px] m-auto font-bold flex flex-col justify-between items-center p-4 text-black">
        <Link href="/">
            <Image src="/IMG_0271.png" width={250} height={100} alt="logo" />
        </Link>
      </div>
    </div>
  );
};
