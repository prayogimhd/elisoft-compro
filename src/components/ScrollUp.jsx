/* eslint-disable @next/next/no-img-element */
'use client';
import {useState, useEffect} from 'react';

const ScrollUpButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // setIsVisible(scrollTop > 0);
        setIsVisible(scrollTop > 750);
    };

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return() => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="scrollUp z-[777]">
            <button className={
                    `scroll-up-button ${
                        isVisible ? 'show' : ''
                    }`
                }
                onClick={scrollToTop}>
                <img src="/images/scrollup.svg" alt="scroll" className="w-full h-full scrollToUp"/>
            </button>
        </div>
    );
};

export default ScrollUpButton;
