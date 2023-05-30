'use client';
import Image from "next/image";

import
{ motion } from 'framer-motion';
import
{ fadeIn, staggerContainer, textVariant } from '../utils/motion';

export default function Home()
{
    return (
        <>
            <Image src="/images/ellipse.svg" alt="hero"
                width={1375}
                height={919}
                className="absolute right-0 top-0"/>
            <motion.div className="lg:h-[115vh] md:h-[115vh] h-[90vh]"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={
                    {
                        once: false,
                        amount: 0.25
                    }
            }>
                <div className="pl-[25px] md:pl-[50px] lg:pl-[100px] pt-[120px] md:pt-[150px] flex relative hero-bg">
                    <div className="pt-[50px] z-[100]">
                        <motion.h1 className="text-[35px] md:text-[50px] lg:text-[55px] mb-4 font-bold"
                            variants={
                                fadeIn( 'right', 'tween', 0.2, 1 )
                        }>Elisoft Technology</motion.h1>
                        <motion.h2 className="text-[28px] md:text-[34px] lg:text-[36px] font-bold mb-[15px] md:mb-[60px] -mt-[20px]"
                            variants={
                                fadeIn( 'down', 'tween', 0.2, 1 )
                        }>One Stop IT Solutions</motion.h2>
                        <motion.p className="text-[20px] md:text-[24px] lg:text-[24px] w-[350px]  md:w-[400px] lg:w-[522px]"
                            variants={
                                textVariant( 1.1 )
                        }>Partner with Elisoft Technology and experience the difference our IT solutions can make for your business.</motion.p>
                    </div>
                    <Image src="/images/hero.svg" alt="hero"
                        width={845}
                        height={735}
                        className="absolute top-[45vh] lg:top-[150px]  md:w-[700px] md:h-[600px] right-0 z-[6]"/>
                </div>
            </motion.div>
            <Image src="/images/wave.svg" alt="images"
                width={100}
                height={100}
                layout='responsive'
                className="absolute lg:-bottom-[150px] md:-bottom-[130px] bottom-[60px] "/>
            <Image src="/images/wave2.svg" alt="images"
                width={100}
                height={100}
                layout='responsive'
                className="absolute lg:-bottom-[215px] md:-bottom-[150px] bottom-[40px] z-[3]"/>
            <Image src="/images/wave3.svg" alt="images"
                width={100}
                height={100}
                layout='responsive'
                className="absolute lg:-bottom-[250px] md:-bottom-[175px] bottom-[25px] z-[4]"/>
            <Image src="/images/polygon1.svg" alt="images"
                width={199}
                height={291}
                className="absolute lg:-bottom-[375px] md:-bottom-[350px] -bottom-[150px] lg:w-[199px] lg:h-[291px] w-[120px] h-[200px]  right-0 z-[5]"/>
            <Image src="/images/polygon2.svg" alt="images"
                width={199}
                height={291}
                className="absolute lg:-bottom-[475px] md:-bottom-[450px] -bottom-[250px] lg:w-[199px] lg:h-[291px] w-[120px] h-[200px] right-0 z-[6]"/>
        </>
    )
}
