/* eslint-disable @next/next/no-img-element */
'use client';
import Link from "next/link";
import Atropos from 'atropos/react';
import 'atropos/css';

import {motion} from 'framer-motion';
import {fadeIn} from '../utils/motion';


export default function ProductCard({title, icon, description, index}) {
    return (
        <div className="bg-[#040229]">
            <Atropos className="my-atropos"
                activeOffset={60}
                shadowScale={0}>
                <motion.div className="border-3 bg-[#0B194F] w-[299px] h-[420px] rounded-[34px] relative"
                    variants={
                        fadeIn('right', 'spring', index * 0.5, 1)
                }>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-[24px] heading-section px-[75px] py-[30px]">
                            {title}</h1>
                        <img src={icon}
                            alt={title}
                            className="w-[250px] h-[75px] object-contain"/>
                        <p className="text-[16px] px-[20px] py-[25px] text-center">
                            {description}</p>
                    </div>
                    <Link href="#" className="btn-custom absolute bottom-5 left-[33%]">Detail</Link>
                </motion.div>
            </Atropos>
        </div>
    )
}
