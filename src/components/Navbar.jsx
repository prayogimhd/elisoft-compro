/* eslint-disable @next/next/no-img-element */
'use client';
import Image from "next/image";
import Link from 'next/link';
import {useEffect, useState} from "react";

export default function Navbar() {
    const [menuActive, setActive] = useState(false);

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsVisible(scrollTop > 150);
    };

    const handleMenuOpen = () => {
        setActive(true);
    }
    const handleMenuClose = () => {
        setActive(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return() => window.removeEventListener('scroll', handleScroll);
    }, []);

   
    return (
        <>
            <div className={`px-[60px] py-[20px] flex justify-between ease-out duration-300 items-center z-[999] fixed top-0 left-0 right-0 ${
                            isVisible ? 'nav-active' : ''
                        }`}>
                <img src="/images/logo.png"
                    alt="Elisoft"
                    className="md:w-[227] md-h-[65] w-[150px] h-[50px]"/>
                <div className={
                    `menuWrapper ${
                        menuActive ? 'active' : ''
                    }`
                }>
                    <ul className={
                        `lg:inline-flex gap-12 pr-8 text-[20px] hidden navbar-list ${
                            menuActive ? 'active' : ''
                        }`
                    } onClick={handleMenuClose}>
                        <li>
                            <Link href="#home" scroll={true}>Home</Link>
                        </li>
                        <li>
                            <Link href="#">Service</Link>
                        </li>
                        <li>
                            <Link href="#about">About</Link>
                        </li>
                        <li>
                            <Link href="#">Careers</Link>
                        </li>
                        <li>
                            <Link href="#galery">Galery</Link>
                        </li>
                        <li>
                            <Link href="#contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="menuClose">
                <i className='bx bx-x text-[50px]' onClick={handleMenuClose}></i>

                    </div>
                </div>
                <div className="menuOpen">
                <i className='bx bx-menu text-[40px]' onClick={handleMenuOpen}></i>
                </div>
            </div>
        </>
    )
}
