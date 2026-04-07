"use client";

import { useEffect } from "react";

export const HeaderAnimation = () => {
  useEffect(() => {
    const header = document.querySelector('header');
    const bgAnimate = document.querySelector('.bg-animate') as HTMLElement; // هنا نحدد النوع ليكون HTMLElement

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      // نسبة التغيير بناءً على الاسكرول
      const scrollPercentage = scrollPosition / maxScroll;
      const width = 25 + (scrollPercentage * 75); // يبدأ من 25% ويزيد مع الاسكرول

      // تعديل عرض الباكجراوند بناءً على الاسكرول
      if (bgAnimate) {
        bgAnimate.style.width = `${width}%`;
      }

      // التغيير في الخلفية عندما نبدأ الاسكرول
      header?.classList.toggle('scrolled', scrollPosition > 10);
    };

    // التهيئة الأولية
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
};
