import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Hero = () => {

	const { t } = useTranslation();

    return (
        <div>
			<div className="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row  lg:gap-3 items-start">
				
				<div className="flex flex-col w-full lg:w-6/12 justify-center lg:pt-12 items-start text-center lg:text-left mb-5 md:mb-0">
					<h1 data-aos="fade-right" data-aos-once="true" className="my-4 text-5xl text-gray-800 font-bold leading-tight text-darken">
						<span className="text-blue-600">{t('title_create_landingpage')} </span> 
						{t('title_landingpage')}
					</h1>
					<p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" className=" text-gray-800 leading-normal text-2xl mb-8">{t('description_landingpage')}</p>
					<div data-aos="fade-up" data-aos-once="true" data-aos-delay="700" className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5">
						<Link to="edit">
							<button className="lg:mx-0 bg-blue-600 text-white text-xl font-bold rounded-full py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
								{t('btn_test_product')}
							</button>
						</Link>
						{ /* <div className="flex items-center justify-center space-x-3 mt-5 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
							<button className="bg-white w-14 h-14 rounded-full flex items-center justify-center">
								<svg className="w-5 h-5 ml-2" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z" fill="#23BDEE"/>
								</svg>
							</button>
							<span className="cursor-pointer">Watch how it works</span>
						</div> */ }
					</div>
				</div>

				<div className="w-full lg:w-6/12 lg:-mt-10 relative" id="girl">
					<img data-aos="fade-up" data-aos-once="true" className="w-10/12 mx-auto 2xl:-mb-20" src="landingpage/mockups.png" />
					
					<div data-aos="fade-up" data-aos-delay="300" data-aos-once="true" className="absolute top-20 -left-6 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-0 lg:top-52 floating-4">
						<img className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16" src="landingpage/edit.svg" />
					</div>
					<div data-aos="fade-up" data-aos-delay="400" data-aos-once="true" className="absolute top-20 right-10 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-32 lg:right-16 floating">
						<svg className="h-16 sm:h-24" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><rect x="40" y="32" width="69" height="69" rx="14" fill="#F3627C"/></g><rect x="51.35" y="44.075" width="47.3" height="44.85" rx="8" fill="white"/><path d="M74.5 54.425V78.575" stroke="#F25471" strokeWidth="4" strokeLinecap="round"/><path d="M65.875 58.7375L65.875 78.575" stroke="#F25471" strokeWidth="4" strokeLinecap="round"/><path d="M83.125 63.9125V78.575" stroke="#F25471" strokeWidth="4" strokeLinecap="round"/><defs><filter id="filter0_d" x="0" y="0" width="149" height="149" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="8"/><feGaussianBlur stdDeviation="20"/><feColorMatrix type="matrix" values="0 0 0 0 0.825 0 0 0 0 0.300438 0 0 0 0 0.396718 0 0 0 0.26 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>
					</div>
					<div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className="absolute bottom-14 -left-4 sm:left-2 sm:bottom-20 lg:bottom-24 lg:-left-4 floating">
						<img className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16" src="landingpage/multipledevice.svg" alt="" />
					</div>
					<div data-aos="fade-up" data-aos-delay="600" data-aos-once="true" className="absolute bottom-20 md:bottom-48 lg:bottom-52 -right-6 lg:right-8 floating-4">
						<img className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16" src="landingpage/congrat-1.svg" alt="" />
					</div>
				</div>
			</div>
		</div>
    )
};

export default Hero;