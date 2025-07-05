'use client';
import Image from 'next/image';
import {IconDownload, IconBrandGithub, IconBrandLinkedin} from '@tabler/icons-react';
import {Inter} from 'next/font/google';
import {Button} from '@/components/ui/button';
import {useAOSInit} from '@/src/effects/AOS';
import TrueFocus from '@/src/effects/TrueFocus';

const inter = Inter({
    subsets: ["latin"]
});

export default function Index(){
    useAOSInit();
    return(
        <>
            <div className="flex flex-col lg:flex-row m-3">
                <div className="flex-1 flex items-center justify-center animate-fade-right">
                    <div className="text-center">
                        <p className={`${inter.className} text-8xl text-white font-bold`}>Hi, I am Rhabi</p>
                        <div className="my-5">
                            <a href="https://linkedin.com/in/rhabimendoza">
                                <Button className="bg-red-400 me-3 my-2 font-bold cursor-pointer"><IconBrandLinkedin/>LinkedIn</Button>
                            </a>
                            <a href="https://docs.google.com/document/d/1acOL1LzGsIRG1v1IMnq4ymvfUl7uLwot/edit?usp=drive_link&ouid=116742183519308770386&rtpof=true&sd=true">
                                <Button className="bg-red-400 me-3 my-2 font-bold cursor-pointer"><IconDownload/>Resume</Button>
                            </a>
                            <a href="https://github.com/rhabimendoza">
                                <Button className="bg-red-400 me-3 my-2 font-bold cursor-pointer"><IconBrandGithub/> Github</Button>
                            </a>
                        </div>
                        <div className={`${inter.className} text-red-400`}>
                            <TrueFocus sentence="Developer Student Learner" manualMode={false} blurAmount={5} borderColor="red" animationDuration={0.5} pauseBetweenAnimations={1}/>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center m-3">
                    <div className="w-full max-w-[90%] h-auto">
                        <Image src="/images/me.jpg" alt="rhabi mendoza" width={0} height={0} sizes="100vw" className="w-[80%] h-auto object-contain animate-fade-left rounded-full mx-auto" priority/>
                    </div>
                </div>
            </div>
        </>
    );
}