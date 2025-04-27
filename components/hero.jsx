"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { useRef } from 'react'

const HeroSection = () => {

    const imageRef = useRef(null);

    useEffect(() => {

        const imageElement = imageRef.current;
       const handleScroll = ()=>{

           const scrollPosition= window.scrollY;
           const scrollThreshold = 100;
   
           if(scrollPosition> scrollThreshold){
               imageElement.classList.add("scrolled");
           }
           else{
            imageElement.classList.remove("scrolled");
           }
       }

       window.addEventListener("scroll", handleScroll);
      
        
     },[])
    
  return (
    <section className='w-full pt-36 md:pt-48 pb-10 '>
        <div className='space-y-6 text-center'>
            <div className='space-y-6 mx-auto'>
            <h1 className=' gradient text-5xl text-gray-200 font-bold md:text-6xl lg:text-7xl  gradient-title'>Transform Your Career With
               <br />
                AI Insights
            </h1>

            <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>Unlock new opportunities, sharpen your skills, and build a future-ready career path with AI by your side.</p>


        </div>
        <div>
            <Link href="/dashboard">
            <Button>Get Started</Button></Link>
        </div>
        <div className='hero-image-wrapper mt-5 md:mt-0'>
            <div ref={imageRef} className='hero-image'>
                <Image className='rounded-lg shadow-2xl mx-auto' priority
                 src="/first-image.png" alt='image' width={1280} height={720}/>
            </div>
        </div>
        </div>
    </section>
    
  )
}

export default HeroSection