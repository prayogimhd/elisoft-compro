'use client';
import Image from "next/image";
import Link from "next/link";

import {motion} from 'framer-motion';
import {staggerContainer, fadeIn} from '../utils/motion';

export default function Footer() {
    return (
        <>
            <motion.div variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={
                    {
                        once: false,
                        amount: 0.25
                    }
                }
                className="overflow-hidden">
                <div className="flex md:flex-row flex-col justify-between bg-[#040229] md:px-[100px] px-[30px] relative gap-12 md:gap-[125px] pb-[50px] pt-5">
                    <motion.div className="flex-1"
                        variants={
                            fadeIn('up', 'spring', 1 * 0.5, 1)
                    }>
                        <h1 className="heading-section text-[32px] md:text-[35px] font-bold tag-footer">Elisoft Technology</h1>
                        <p className="text-[20px]">Partner with Elisoft Technology and experience the difference our IT solutions can make for your business. Contact us today to discuss your requirements and let us help you unlock the full potential of technology.</p>
                        <div className="flex gap-5 mt-5">
                            <Link href="https://www.facebook.com/profile.php?id=100068412682467"><Image src="/images/facebook.svg"
                                    width={32}
                                    height={32}
                                    alt="facebook"/></Link>
                            <Link href="https://instagram.com/elisofttechnology"><Image src="/images/instagram.svg"
                                    width={32}
                                    height={32}
                                    alt="instagram"/></Link>
                            <Link href="https://www.linkedin.com/company/elisoft-technology/"><Image src="/images/linkedin.svg"
                                    width={32}
                                    height={32}
                                    alt="linkedin"/></Link>
                        </div>
                    </motion.div>
                    <motion.div className="flex-2"
                        variants={
                            fadeIn('up', 'spring', 2 * 0.5, 1)
                    }>
                        <h1 className="heading-section text-[30px] font-bold">Useful Links</h1>
                        <ul className="text-[20px] leading-[50px] link-list">
                            <li>
                                <Link href="#">
                                    <span className="text-cyan-500">
                                        {">"} </span>
                                    Home</Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span className="text-cyan-500">
                                        {">"} </span>
                                    Service</Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span className="text-cyan-500">
                                        {">"} </span>
                                    About</Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span className="text-cyan-500">
                                        {">"} </span>
                                    Careers</Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span className="text-cyan-500">
                                        {">"} </span>
                                    Galery</Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span className="text-cyan-500">
                                        {">"} </span>
                                    Contact</Link>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div className="flex-1"
                        variants={
                            fadeIn('up', 'spring', 3 * 0.5, 1)
                    }>
                        <h1 className="heading-section text-[30px] font-bold">Our Services</h1>
                        <ul className="text-[20px] leading-[50px] link-list">
                            <li>
                                <Link href="#">
                                    <span className="text-cyan-500">
                                        {">"} </span>
                                    Web Development</Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span className="text-cyan-500">
                                        {">"} </span>
                                    Mobile Application Development</Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span className="text-cyan-500">
                                        {">"} </span>
                                    Software Development</Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span className="text-cyan-500">
                                        {">"} </span>
                                    IT Infrastructure</Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span className="text-cyan-500">
                                        {">"} </span>
                                    Cloud Service</Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <span className="text-cyan-500">
                                        {">"} </span>
                                    IT Consulting</Link>
                            </li>
                        </ul>
                    </motion.div>
                </div>
                <motion.div className="pt-5 pb-5 px-5"
                    variants={
                        fadeIn('up', 'tween', 1 * 0.5, 1)
                }>
                    <p className="text-[20px] text-center">© Copyright {" "}
                        <b>Elisoft Technology.</b>
                        {" "}
                        All Rights Reserved</p>
                </motion.div>
            </motion.div>
        </>
    )
}
