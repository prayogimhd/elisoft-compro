'use client';
import Image from "next/image";
import
{ motion } from 'framer-motion';
import
{ staggerContainer, fadeIn } from '../utils/motion';

export default function About()
{





    return (
        <section id="about">
            {/* <Image src="/images/polygon1.svg" alt="images"
                width={199}
                height={291}
                className="absolute lg:-bottom-[550px] md:-bottom-[350px] -bottom-[250px] lg:w-[199px] lg:h-[291px] w-[120px] h-[200px]  right-0"/>
            <Image src="/images/polygon2.svg" alt="images"
                width={199}
                height={291}
                className="absolute lg:-bottom-[650px] md:-bottom-[450px] -bottom-[350px] lg:w-[199px] lg:h-[291px] w-[120px] h-[200px] right-0"/> */}
            <motion.div className="-mt-[50px] md:mt-0 pt-[225px] bg-[#040229] text-center px-[35px] md:px-[100px] lg:px-[220px]"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={
                    {
                        once: false,
                        amount: 0.25
                    }
            }>
                <motion.h1 className="text-[35px] md:text-[40px] lg:text-[45px] font-bold heading-section"
                    variants={
                        fadeIn( 'up', 'tween', 0.2, 1 )
                }>About</motion.h1>
                <motion.p className="text-[24px] md:text-[25px] lg:text-[30px] mt-5"
                    variants={
                        fadeIn( 'up', 'tween', 0.4, 1 )
                }>Who We Are</motion.p>
                <motion.p className="text-[20px] md:text-[25px] lg:text-[30px] mt-8 md:px-[100px] px-[10px]"
                    variants={
                        fadeIn( 'up', 'tween', 0.6, 1 )
                }>
                    Elisoft Technology is a premier IT solutions company based in Jakarta, Indonesia.
                    With a team of highly skilled professionals and a commitment to excellence, we strive to be your trusted partner in all your Information Technology needs.</motion.p>
            </motion.div>
        </section>
    )





}
