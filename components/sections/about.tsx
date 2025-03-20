import Image from "next/image";

const About = () => {
    return (
        <section className="flex flex-col min-h-screen items-center justify-center py-16 bg-neutral-900">
            <div className="text-center mb-10">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                    About Me
                </h1>
            </div>

            <div className="flex flex-col md:flex-row sm:items-center lg:items-center justify-evenly gap-8 mt-8 px-6">
                <div className="w-full sm:w-1/3 max-h-[60vh] overflow-hidden rounded-lg shadow-lg">
                    <Image
                        src="https://picsum.photos/700/800"
                        alt="About Us"
                        width={800}
                        height={800}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>

                <div className="w-full md:w-1/2 p-2 md:pr-20 text-lg text-gray-300">
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Autem facere corrupti unde rerum laborum ducimus modi
                        ipsam commodi odio quia quibusdam veniam reprehenderit
                        dolor cumque et eaque beatae tenetur eius laboriosam
                        iusto repudiandae ut, blanditiis aliquam. Atque,
                        sapiente non, asperiores ut aut, dolore facilis eum
                        similique velit
                        <br />
                        <br />
                        tenetur molestiae aliquid. Minima consequuntur in
                        delectus beatae nulla nisi quibusdam repellendus,
                        distinctio atque! Pariatur, nihil, dignissimos dolorum
                        non necessitatibus numquam vitae quas quasi similique
                        dolorem facere perferendis sint laboriosam? Magni porro
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
