const Navigation = () => {
    return (
        <nav className="flex w-full fixed flex-row justify-between p-10">
            <div className="text-4xl">Logo</div>
            <div className="flex flex-row gap-x-18 text-xl">
                <div>Gallery</div>
                <div>About</div>
                <div>Contact</div>
            </div>
        </nav>
    );
};

export default Navigation;
