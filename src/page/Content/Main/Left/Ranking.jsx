'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";

import a1Img from "@/assets/icons/a1.png";
import a2Img from "@/assets/icons/a2.png";
import a3Img from "@/assets/icons/a3.png";
import a4Img from "@/assets/icons/a4.png";
import { useButtonShowStore } from "@/utils/buttonShowStore";

const Ranking = () => {
    const {setButtonShowState} = useButtonShowStore();
    const [rankingHover, setRankingHover] = useState(false);
    const [navbarHovered, setNavbarHovered] = useState(false);
    
    useEffect(() => {
        const handleMouseMove = (e) => {
            const target = e.target;
            const isHoveringDock = target.closest('.dock-bar') !== null;
            setNavbarHovered(isHoveringDock);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        setButtonShowState(rankingHover || navbarHovered);

        if(rankingHover || navbarHovered)
            document.getElementById("closeBtn").style.display = '';
        else
            document.getElementById("closeBtn").style.display = 'none';
    }, [rankingHover, navbarHovered]);

    return (
        <div>
            <div className="relative border-1 border-dark-gray rounded-lg overflow-hidden" 
                 onMouseOver={() => setRankingHover(true)} 
                 onMouseLeave={() => setRankingHover(false)}>
                <div className="bg-local bg-gradient-to-r from-gradient-dark-gray from-5% via-gradient-black-gray via-50% rounded-lg p-4">
                    <div className="flex">
                        <div className="flex flex-col gap-2">
                            <span className="font-manrope-bold text-size-14">
                                Top-ranking tokens curated by AI
                            </span>
                            
                            <span className="font-manrope-bold text-size-12 text-dark-disabled">
                                View the rankings of top trending coins
                            </span>
                        </div>
                        <div>
                            <Image src={a1Img} alt="a1" className="absolute -right-7 bottom-0" />
                            <Image src={a2Img} alt="a2" className="absolute -right-2 -top-2" />
                            <Image src={a3Img} alt="a3" className="absolute right-9.5 -top-2" />
                            <Image src={a4Img} alt="a4" className="absolute right-4.5 bottom-0" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
  
export default Ranking;