import Link from "next/link";

const Navigation = () => {
    return (
        <nav className="flex w-full fixed top-0 flex-row justify-between p-10 text-white">
            <Link href={"/"} className="text-4xl">
                Logo
            </Link>
            <div className="flex flex-row gap-x-18 text-xl">
                <Link href={"/gallery"}>Gallery</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/contact"}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navigation;
