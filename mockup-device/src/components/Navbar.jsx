import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
    return (
        <div className="w-full text-gray-800">
            <div className="flex flex-col max-w-screen-xl px-8 mx-auto items-center justify-between ">
                <div className="flex flex-row items-center justify-between py-6">
                    <div className="relative md:mt-8 flex gap-2"> 
                        <img src="icon.svg" className="w-8 h-8" />
                        <h1 className="font-bold text-xl">MockupFast</h1>
                        <LanguageSwitcher dark={false}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;