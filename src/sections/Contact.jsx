'use client';
import Image from "next/image";
import
{ motion } from 'framer-motion';
import
{ staggerContainer, fadeIn } from '../utils/motion';

export default function Contact()
{
    return (
        <section id="contact">
            <motion.div className="bg-[#040229] text-center pt-[150px] pb-[25px] overflow-hidden relative"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={
                    {

                        once: false,
                        amount: 0.25

                    }
            }>
                <Image src="/images/global1.gif" alt="global"
                    width={1000}
                    height={1500}
                    unoptimized={true}
                    className="absolute -left-[275px] opacity-30"/>
                <Image src="/images/dots2.svg" alt="dots"
                    width={116}
                    height={99}
                    className="absolute left-0 bottom-[150px] hidden md:block"/>
                <div className="relative">
                    <motion.h1 className="text-[35px] md:text-[40px] lg:text-[45px] heading-section"
                        variants={
                            fadeIn( 'right', 'tween', 0.2, 1 )
                    }>Contact</motion.h1>
                    <motion.p className="text-[24px] md:text-[25px] lg:text-[30px] mt-[20px] md:mt-[40px] pb-5"
                        variants={
                            fadeIn( 'left', 'tween', 0.2, 1 )
                    }>Contact Us</motion.p>
                </div>
                <div className="flex lg:flex-row flex-wrap justify-between items-center pt-[25px] md:pt-[50px] pb-[200px]">
                    <motion.div className="flex-1"
                        variants={
                            fadeIn( 'right', 'tween', 0.2, 1 )
                    }>
                        <ul className="flex flex-col lg:text-[20px] md:text-[20px] text-[18px] text-start py-10 lg:ml-[100px] md:ml-[100px] px-[30px] relative">
                            <li className="flex items-center gap-8 mb-[40px]">
                                <Image src="/images/location.svg"
                                    width={41}
                                    height={41}
                                    alt="location"/>
                                Apartement Gading Nias, Kelapa Gading
                                <br/>
                                North Jakarta, 14250</li>
                            <li className="flex items-center gap-8 mb-[40px]">
                                <Image src="/images/email.svg"
                                    width={41}
                                    height={41}
                                    alt="email"/>
                                admin@elisofttechnology.com</li>
                            <li className="flex items-center gap-8 mb-[40px]">
                                <Image src="/images/calendar.svg"
                                    width={41}
                                    height={41}
                                    alt="calendar"/>
                                Monday - Friday  09.00 AM - 05.00 PM</li>
                            <li className="flex items-center gap-8">
                                <Image src="/images/phone.svg"
                                    width={41}
                                    height={41}
                                    alt="phone"/>
                                (021) 50200376</li>
                        </ul>
                    </motion.div>
                    <div className="flex-1 relative lg:px-0 md:px-[100px] px-[25px]">
                        <Image src="/images/polygon5.svg" alt="dots"
                            width={273}
                            height={522}
                            className="absolute right-0"/>
                        <Image src="/images/polygon6.svg" alt="dots"
                            width={206}
                            height={364}
                            className="absolute right-0 -top-[100px]"/>
                        <motion.div variants={
                                fadeIn( 'left', 'tween', 0.2, 1 )
                            }
                            className="bg-white lg:w-[550px] md:w-[550px] w-[100%] h-[570px] rounded-[8px] relative">
                            <div className="pt-6 px-6 text-left">
                                <form>
                                    <div className="flex flex-col">
                                        <label className="text-black mb-[10px]">
                                            Your Name *
                                        </label>
                                        <input type="text" placeholder="Name" className="p-3 border-stone-800 opacity-30 focus:border-[#272937] focus:opacity-80 border-2 border-solid text-black rounded-[5px]"/>
                                    </div>
                                    <div className="flex flex-col py-6">
                                        <label className="text-black mb-[10px]">
                                            Your Email *
                                        </label>
                                        <input type="email" placeholder="Email" className="p-3 border-stone-800 opacity-30 focus:border-[#272937] focus:opacity-80 border-2 border-solid text-black rounded-[5px]"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-black mb-[10px]">
                                            Subject *
                                        </label>
                                        <input type="text" placeholder="Subject" className="p-3 border-stone-800 opacity-30 focus:border-[#272937] focus:opacity-80 border-2 border-solid text-black rounded-[5px]"/>
                                    </div>
                                    <div className="flex flex-col py-6">
                                        <label className="text-black mb-[10px]">
                                            Message *
                                        </label>
                                        <input type="text" placeholder="Message" className="p-3 border-stone-800 opacity-30 focus:border-[#272937] focus:opacity-80 border-2 border-solid text-black rounded-[5px]"/>
                                    </div>
                                    <button type="button" className="btn-submit lg:px-[210px] lg:py-[16px] md:px-[210px] md:py-[16px] px-[110px] py-[12px] text-center">Send Now</button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>


            </motion.div>
        </section>
    )

}
