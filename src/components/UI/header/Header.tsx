"use client";
import useHeader from "@/hooks/header/useHeader";
import Image from "next/image";
import tasksIcon from "@/../public/images/tasks-icon.svg";
import logoImg from "@/../public/images/logo.png";
import Link from "next/link";

function Header() {
    const { } = useHeader();

    return (
        <header className="rounded-[50px] bg-cyan-200 m-1">
            <div className="container m-auto flex h-16 items-center justify-between">
                <div className="p-3">
                    <Link href={"/"}>
                        <Image
                            src={logoImg}
                            alt="webX4 logo"
                            width={40}
                            height={40}
                        />
                    </Link>
                </div>
                <div className="flex p-3">
                    <span className="rounded px-3 py-1 bg-slate-600 h-fit text-white">25</span>
                    <Image src={tasksIcon} alt="" width={30} height={30} />
                </div>
            </div>
        </header>
    );
}

export default Header;
