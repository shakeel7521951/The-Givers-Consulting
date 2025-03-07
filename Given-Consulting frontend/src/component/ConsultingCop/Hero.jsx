import React from "react";

const Hero = () => {
    return (
        <div 
            className="relative bg-cover bg-center h-screen flex items-center justify-center"  
            style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/5e3f/9926/f805f1a6a766b487ef727a8acc2b2285?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VGMynkgze04A32kNDL60BV6wZPpGhrrbbZyWuduNYvEfjA1QjaEDssHh8v9tF0eczYMl6NXd66gecZxaT7kCGZc1aJdDkdhppiGR~c2avU2sBJMMydGUaQCxonF-jBnTDEx41vE99zoGUolWAMY2dBZ2hQX~whGX8rEhrT2~0VGexefRJAkT09710wEgj-EXdzUyVCod2JrZaLRYJIe7hzZzasiC4BVWDeOcTwKafFofd3FtJnjJOrj3imZdgsW7WyQ3kovPetnraG2xdtLzQhtV6Q5woNX2DJFzYjribEG9Bv1zXuAPkyBTm1tLuTxt3Mg8nXjGE31F8Yb88-YD0g__')" }}>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative text-center px-6 py-10">
                <h2 className="text-[50px] font-bold mb-4 text-white" style={{ lineHeight: "70px" }}>
                    Unlock Your <br /> Company's Potential...
                </h2>
                <p className="text-lg text-white mb-6">
                    Our export team of consultants is dedicated to helping <br /> your business thrive.
                </p>
                <button className="flex items-center justify-center mx-auto px-6 py-3 bg-[#BCFF04] text-black rounded-full hover:bg-[#c5f542] transition">
                    <span className="mr-2">Get a Free Consultation</span>
                </button>
            </div>
        </div>
    );
};

export default Hero;
