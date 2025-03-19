import Navigation from "@/components/navigation/navigation";
import Professions from "@/components/sections/profession";

export default function Home() {
    return (
        <div className="h-[300vh]">
            {/* Navigation Section */}
            <Navigation />

            {/* Hero Section */}
            <section className="h-[100vh] bg-red-300/50"></section>

            {/* Professions Section */}
            <Professions />

            {/* Footer Section */}
            <div className="h-[100vh] bg-white"></div>
        </div>
    );
}
