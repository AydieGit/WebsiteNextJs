'use client'
import gsap, { random } from "gsap"
import { useGSAP } from "@gsap/react"
import TextPlugin from "gsap/TextPlugin"
import Image from "next/image"
gsap.registerPlugin(TextPlugin)

const Welcome = () => {

    useGSAP(()=>{
        gsap.to('h1', {
            duration: 3.5,
            text:{
                value: "Szymon Kalinowski's page",
                ease: 'none',
            }
        })
        gsap.to('h2', {
            duration: 4,
            text:{
                value: 'Welcome to my page',
                ease: 'none',

            }
        })
        var tl = gsap.timeline({repeat: 0, repeatDelay: 1,});
        tl.to(".moveableC", {x: 1250, y: 0, duration: 5, opacity: 0});
        tl.to(".moveableC", {x: -200, y: 800, duration: 2, opacity: 1});


    }, [])

    
  return (
    <div className="welcome">
        <Image id='img' className="moveableC" src='/comet.png' width={200} height={200} />
        <h1></h1> 
        <h2></h2>
    </div>
  )
}

export default Welcome