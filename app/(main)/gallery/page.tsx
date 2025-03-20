import Gallery from "@/components/sections/gallery";
import { Checkbox } from "@/components/ui/checkbox";

const GalleryPage = () => {
    return (
        <div className="h-[300vh] text-white">
            {/* Filter Section */}
            <div className="mt-44 px-12">
                <h2 className="text-2xl">[ Filters ]</h2>
                <div className="flex flex-row items-center gap-x-8">
                    <div className="flex flex-row items-center gap-x-4 mt-4">
                        <Checkbox id="filter1" className="" />
                        <label
                            htmlFor="filter1"
                            className="text-lg select-none"
                        >
                            Filter 1
                        </label>
                    </div>
                    <div className="flex flex-row items-center gap-x-4 mt-4">
                        <Checkbox id="filter2" className="" />
                        <label
                            htmlFor="filter2"
                            className="text-lg select-none"
                        >
                            Filter 2
                        </label>
                    </div>
                    <div className="flex flex-row items-center gap-x-4 mt-4">
                        <Checkbox id="filter3" className="" />
                        <label
                            htmlFor="filter3"
                            className="text-lg select-none"
                        >
                            Filter 3
                        </label>
                    </div>
                </div>
            </div>
            {/* Gallery Section */}
            <Gallery />
            {/* Footer Section */}
        </div>
    );
};

export default GalleryPage;
