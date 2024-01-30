"use client" // render hero heading1 and images on server and remaing on client side 

import { FC } from "react";
import CountUpNumber from "../count_up_number/count_up_number";

type Props = {
    heading1: React.ReactNode;
    heroImageSection: React.ReactNode;
}

const ClientComponent: FC<Props> =props => {
const { heading1, heroImageSection } = props;


    return (
        <section className="flex px-4 items-center gap-12 container mx-auto" >
        <div className="py-10 h-full">
             {/* Heading */}
               {heading1}

            {/* Room Description */}
            <div className="flex justify-between mt-12">
                <div className="flex gap-3 flex-col items-center justify-center">
                    <p className="text-xs lg:text-xl text-center">Basic Room</p>
                    {/* <p className="md:font-bold font-medium text-lg xl:text-5xl">+ 20</p> */}
                    <CountUpNumber duration={2000} endValue={90} />
                </div>
                <div className="flex gap-3 flex-col items-center justify-center">
                    <p className="text-xs lg:text-xl text-center">LuxuryRoom</p>
                    <CountUpNumber duration={1500} endValue={60} />
                </div>
                <div className="flex gap-3 flex-col items-center justify-center">
                    <p className="text-xs lg:text-xl text-center">Suite</p>
                    <CountUpNumber duration={1000} endValue={20} />
                </div>
            </div>
        </div>
        
        {/* IMAGES */}
       {heroImageSection}
     </section>
    )
}

export default ClientComponent;