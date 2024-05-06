"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin)

const AboutMe = () => {
  useGSAP(() => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: 230
    })
    var tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });
    tl.to(".moveableS", {
      x: 0,
      duration: 1,
      opacity: 0,
      rotateZ: 360,
    });
    tl.to(".moveableS", {
      x: 800,
      y: -800,
      duration: 20,
      rotateZ: 360,
      opacity: 1,
    });

    var t2 = gsap.timeline({ repeat: 0 });
    t2.to(".moveableP", { y: -800, duration: 0, opacity: 0 });
    t2.to(".moveableP", {
      x: 500,
      y: -800,
      duration: 3,
      opacity: 1,
      rotateZ: 360,
    });
    t2.to(".moveableP", {
      x: 750,
      y: -800,
      duration: 4,
      opacity: 0,
      rotateZ: 360,
    });

    var t3 = gsap.timeline({ repeat: 0 });
    t3.to(".moveableM", {
      x: 2000,
      y: -2000,
      duration: 5,
      opacity: 1,
      rotateZ: 360,
    });
    gsap.fromTo(
      ".reveal-text",
      {
        opacity: 0,
        y: 150,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.02,
      }
    );
  }, []);

  const text =
    "I am a fifth-year master's student at the Poznan University of Life Sciences. I am interested in the IT industry, therefore I am expanding my skills by taking courses in programming languages. In the face of graduation, I am looking for first job in the IT industry so that I can develop practical programming skills and passion for technology.";

  return (
    <div id="AboutMe">
      <p id="text">
        {text.split("").map((letter, index) => (
          <span className="reveal-text">{letter}</span>
        ))}
      </p>
      <div className="logo-png">
        <Image src="/next-js.png" width={150} height={150} />
        <Image src="/js.png" width={150} height={150} />
        <Image src="/node.png" width={150} height={150} />
      </div>
      <div className="vadim">
        <Image
          id="img"
          className="moveableS"
          src="/saturn.png"
          width={200}
          height={200}
        />
        <Image
          id="img"
          className="moveableP"
          src="/pluto.png"
          width={200}
          height={200}
        />
        <Image
          id="img"
          className="moveableM"
          src="/mars.png"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default AboutMe;
