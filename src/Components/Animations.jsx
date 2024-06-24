import React, { useEffect } from 'react';

export default function Animations() {

    useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                entry.target.classList.add('showimgleft');
                }
            });
            });
        
            const hiddenElements = document.querySelectorAll('.hiddenimgleft');
            hiddenElements.forEach((el) => observer.observe(el));
        
            // Clean up the observer when the component unmounts
            return () => {
            observer.disconnect();
            };
        }, []);

        useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                entry.target.classList.add('showimgright');
                }
            });
            });
        
            const hiddenElements = document.querySelectorAll('.hiddenimgright');
            hiddenElements.forEach((el) => observer.observe(el));
        
            // Clean up the observer when the component unmounts
            return () => {
            observer.disconnect();
            };
        }, []);

}