import About from "@/components/sections/about";
import Professions from "@/components/sections/profession";

export default function Home() {
    return (
        <div className="h-[300vh]">
            {/* Hero Section */}
            <section className="h-[100vh] bg-red-300/50"></section>

            {/* Professions Section */}
            <Professions />
            {/* About Section */}
            <About />
            {/* Gallery Section */}
            {/* Footer Section */}
            <div className="h-[100vh] bg-white"></div>
        </div>
    );
}
