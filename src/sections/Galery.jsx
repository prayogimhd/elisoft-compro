/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {EffectCoverflow, Navigation} from "swiper";

import {dataGalery} from '@/data';
import Image from 'next/image';

import {motion} from 'framer-motion';
import {staggerContainer, fadeIn} from '../utils/motion';

export default function Galery() {
    return (
        <section id="galery">
            <motion.div className="bg-[#040229] text-center relative pb-[120px] lg:pb-0 md:pb-0"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={
                    {
                        once: false,
                        amount: 0.25
                    }
            }>
                <Image src="/images/dots1.svg" alt="dots1"
                    width={160}
                    height={99}
                    className="absolute right-0"/>
                <motion.h1 className="text-[35px] md:text-[40px] lg:text-[45px] heading-section"
                    variants={
                        fadeIn('down', 'tween', 0.2, 1)
                }>Galery</motion.h1>
                <motion.p className="text-[24px] md:text-[25px] lg:text-[30px]  mt-[20px] md:mt-[40px] pb-2 md:pb-5"
                    variants={
                        fadeIn('down', 'tween', 0.6, 1)
                }>What We Do</motion.p>

                <motion.div className="lg:px-[200px] md:px-[120px] px-[50px] mt-[25px] md:mt-[50px] flex justify-center pb-[120px]"
                    variants={
                        fadeIn('down', 'tween', 1, 1)
                }>
                    <Swiper
                        slidesPerView={'auto'}
                        centeredSlides={true}
                        loop={true}
                        coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 450,
                        modifier: 2,
                        }}
                        effect={'coverflow'}
                        grabCursor={true}
                        modules={
                            [EffectCoverflow,Navigation]
                        }
                        
                        navigation={
                            {
                                nextEl: '.swiper-custom-next',
                                prevEl: '.swiper-custom-prev',
                                clickable: true
                            }
                        }
                        // onSlideChange={handleSlideChange}
                        className="mySwiper slide-img"
                        breakpoints={{
                            640 : {
                                slidesPerView: 1
                            },
                            768 : {
                                slidesPerView: 1
                            },
                            1024 : {
                                slidesPerView: 3
                            }
                            }}>
                        {
                        dataGalery.map((data, index) => (
                            <SwiperSlide key={index}>
                                <img src={
                                        data.url
                                    }
                                    className="lg:w-[550px] lg:h-[100px] h-[300px] md:w-[550px] md:h-[450px] w-[400px]  rounded-[34px] object-cover"
                                    alt={
                                        data.title
                                    }/>
                            </SwiperSlide>
                        ))
                    }
                    </Swiper>
                    <div className="swiper-navigation">
                            <div className="swiper-custom-next">
                                <img src="/images/right.svg" alt="right"/>
                            </div>
                            <div className="swiper-custom-prev">
                                <img src="/images/left.svg" alt="left"/>
                            </div>
                        </div>
                    <Image src="/images/ellipse2.svg" alt="ellipse"
                        width={410}
                        height={124}
                        className="absolute md:bottom-8 bottom-[120px] md:left-[25%] lg:left-[37.5%]"/>
                </motion.div>
                <Image src="/images/polygon7.svg" alt="polygon"
                    width={169}
                    height={99}
                    className="absolute -bottom-12 left-0 z-[888]"/>
                <Image src="/images/polygon8.svg" alt="polygon"
                    width={160}
                    height={99}
                    className="absolute -bottom-[175px] left-0 z-[888]"/>
            </motion.div>
        </section>
    )
}
