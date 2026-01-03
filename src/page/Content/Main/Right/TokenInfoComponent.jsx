import Image from "next/image";

import ellipseImg from "@/assets/frame/Ellipse 1.png";
import ellipseLine1Img from "@/assets/frame/Ellipse line1.png";
import ellipseLine2Img from "@/assets/frame/Ellipse line2.png";

const TokenInfoComponent = () => {
    return (
        <div className="relative rounded-md border-dark-gray border-1 bg-gradient-black-gray p-3 font-manrope-bold text-size-12 text-dark-disabled overflow-hidden">
            <Image src={ellipseImg} alt="ellipse" className="absolute -right-5 top-0.5" />
            <Image src={ellipseLine1Img} alt="ellipse line" className="absolute -right-10 -top-2" />
            <Image src={ellipseLine2Img} alt="ellipse line" className="absolute -right-15 -top-4" />
            <div className="flex flex-col justify-start gap-2">
                <span className="text-size-14 text-white">Advanced Token Info</span>
                <span className="text-size-12">Explore important token statistics</span>
            </div>
        </div>
    );
  };
  
  export default TokenInfoComponent;