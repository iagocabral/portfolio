"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12 my-4">
        <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                        Hello, I`m Iago{" "}
                    </span>
                    <br></br>
                     <TypeAnimation
                       sequence={[
                        'Software engineer',
                        1000,
                        'web developer',
                        1000,
                        'mobile developer',
                        1000,
                        'IA developer',
                        1000,
                       ]}
                       wrapper="span"
                       speed={20}
                       repeat={Infinity}
                     />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sequi aliquid dolorum porro totam molestiae iste facere inventore quae quaerat id fugiat, nihil tenetur. Rem quam omnis repellendus doloremque dolor?
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
                         Hire me
                    </button>
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white  mt-3 ">
                         <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Dowload cv</span>
                    </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg-h[400px] relative">
                    <Image
                    src="/images/hero-image.png"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={300}
                    height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;