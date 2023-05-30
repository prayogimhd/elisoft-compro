'use client';
import {ProductCard} from "@/components"
import {dataProduct} from "@/data"
import Image from "next/image"

import {motion} from 'framer-motion';
import {fadeIn, staggerContainer, textVariant} from '../utils/motion';

export default function Product() {
    return (
        <>
            <motion.div className="relative overflow-hidden"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={
                    {
                        once: false,
                        amount: 0.25
                    }
            }>
                <Image src="/images/polygon4.svg" alt="images"
                    width={234}
                    height={364}
                    className="absolute left-0 lg:w-[234] lg:h-[364] w-[150px] h-[250px]"/>
                <Image src="/images/polygon3.svg" alt="images"
                    width={267}
                    height={522}
                    className="absolute top-[75px] lg:w-[267] lg:h-[522] w-[175px] h-[400px] left-0"/>
                <Image src="/images/global1.gif" alt="images"
                    width={1000}
                    height={1000}
                    unoptimized={true}
                    className="absolute top-[100px] opacity-30 -right-[250px]"/>

                <div className="lg:pt-10 md:pt-10 pt-[150px] bg-[#040229] text-center  pb-[250px]">
                    <div>
                        <motion.h1 className="text-[35px] md:text-[40px] lg:text-[45px] font-bold heading-section mt-[175px] relative"
                            variants={
                                fadeIn('right', 'tween', 0.2, 1)
                        }>Our Product</motion.h1>
                        <motion.p className="text-[24px] md:text-[25px] lg:text-[30px] mt-[20px] md:mt-[40px] pb-5 relative"
                            variants={
                                fadeIn('left', 'tween', 0.2, 1)
                        }>Check Our Latest Work</motion.p>
                    </div>
                    <div className="flex lg:flex-row flex-wrap gap-5 justify-center mt-[25px] md:mt-[50px]">
                        {
                        dataProduct.map((data, index) => (
                            <ProductCard key={index} index={index + 1}
                                {...data}/>
                        ))
                    } </div>
                </div>
            </motion.div>
        </>
    )
}
