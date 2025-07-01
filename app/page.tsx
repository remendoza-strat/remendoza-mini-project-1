"use client"

import Image from 'next/image';
import SplitText from "./effects/SplitText";
import TrueFocus from "./effects/TrueFocus";
import { Button } from "@/components/ui/button"
import { IconDownload, IconBrandGithub, IconBrandLinkedin} from '@tabler/icons-react';

export default function Index() {
  
 
  const handleAnimationComplete = () => {
    console.log("Animation complete!");
  };

  return(

    <div className="flex flex-col md:flex-row">

    
      <div className="flex-1 p-5 flex justify-center items-center">
        
        <div className="flex flex-col text-center ">

            <SplitText
                text="Hi! I am Rhabi"
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
                <a href="https://linkedin.com/in/rhabimendoza">
                    <Button className="bg-red-400 me-3 my-2 font-bold"><IconBrandLinkedin/>LinkedIn</Button>
                </a>
                <a href="https://docs.google.com/document/d/1acOL1LzGsIRG1v1IMnq4ymvfUl7uLwot/edit?usp=drive_link&ouid=116742183519308770386&rtpof=true&sd=true">
                    <Button className="bg-red-400 me-3 my-2 font-bold"> <IconDownload /> Resume</Button>
                </a>
                <a href="https://github.com/rhabimendoza">
                    <Button className="bg-red-400 me-3 my-2 font-bold"><IconBrandGithub/> Github</Button>
                </a>
                
                
                
            </div>
            <div className="text-red-400">
                <TrueFocus 
                sentence="Runner Developer Student"
                manualMode={false}
                blurAmount={5}
                borderColor="red"
                animationDuration={0.5}
                pauseBetweenAnimations={1}
            />
            </div>

            

        </div>

      </div>


        <div className="flex-1 p-5 flex justify-center">
            <Image 
            src="/images/me.jpg" 
            alt="rhabi mendoza" 
            height={450}
            width={450}
            className="max-w-full h-auto rounded-full index-icon-animation"
            />
        </div>

    </div>
  );
}
