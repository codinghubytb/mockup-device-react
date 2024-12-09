const Footer = () => {
    return (
        <footer className="mt-32" style={{backgroundColor: "rgba(37, 38, 65, 1)"}}>
            <div className="max-w-lg mx-auto">
                <div className="flex py-8 justify-center text-white items-center">
                    <div className="relative flex gap-2"> 
                        <img src="icon.svg" className="w-8 h-8" />
                        <h1 className="font-bold text-xl">MockupFast</h1>
                    </div>
                    
                </div>
                {/*<div className="flex items-center text-gray-400 text-sm justify-center">
                    <a href="" className="pr-3">Careers</a>
                    <a href="" className="border-l border-gray-400 px-3">Privacy</a>
                    <a href="" className="border-l border-gray-400 pl-3">Terms & Conditions</a>
                </div> */}
                <div className="text-center text-white">
                    <p className="my-3 text-gray-400 text-sm">&copy; 2024 Codinghub Studio</p>
                    <div className="py-3 tracking-wide">
                    </div>
                </div>
            </div>
        </footer>

)
};

export default Footer;