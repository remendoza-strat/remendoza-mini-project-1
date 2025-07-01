"use client"

import Image from 'next/image';
import SplitText from "./effects/SplitText";
import TrueFocus from "./effects/TrueFocus";
import { Button } from "@/components/ui/button"
import { IconDownload, IconBrandGithub, IconBrandLinkedin} from '@tabler/icons-react';

export default function Index() {
  
  // Define the missing function here
  const handleAnimationComplete = () => {
    console.log("Animation complete!");
  };

  return (
    <div className="flex flex-col md:flex-row">

      

      {/* PENDING */}
      <div className="flex-1 p-5 flex justify-center items-center">
        <div className="flex flex-col">

    <SplitText
        text="Hi, I am Rhabi"
        className="text-8xl text-white font-bold"
        delay={80}
        duration={0.3}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        onLetterAnimationComplete={handleAnimationComplete}
      />
          <div className="my-5">
            <Button className="bg-red-400 me-3"> <IconDownload /> Resume</Button>
            <Button className="bg-red-400 me-3"><IconBrandGithub/> Github</Button>
            <Button className="bg-red-400 me-3"><IconBrandLinkedin/>LinkedIn</Button>
          </div>

  <TrueFocus 
    sentence="Runner Student Programmer"
    manualMode={false}
    blurAmount={5}
    borderColor="white"
    animationDuration={0.5}
    pauseBetweenAnimations={1}
  />


        </div>

      </div>
      {/* PENDING */}

      <div className="flex-1 p-5 flex justify-center">
        <Image 
          src="/images/me.jpg" 
          alt="rhabi mendoza" 
          height={500}
          width={500}
          className="max-w-full h-auto rounded-full index-icon-animation"
        />
      </div>

    </div>
  );
}
