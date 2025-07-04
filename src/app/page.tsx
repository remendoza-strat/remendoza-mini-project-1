'use client';
import Image from 'next/image';
import {IconDownload, IconBrandGithub, IconBrandLinkedin} from '@tabler/icons-react';
import {useAOSInit} from '@/src/effects/AOS';
import TrueFocus from '@/src/effects/TrueFocus';
import {inter} from '@/src/app/layout';
import {Button} from '@/components/ui/button';

export default function Index(){

    useAOSInit();

    return(
        <>
            <div className="flex flex-col md:flex-row">

                <div className="flex-1 p-5 flex justify-center items-center">
                    <div className="flex flex-col text-center animate-fade-right">
                        <p className={`${inter.className} text-8xl text-white font-bold`}>Hi, I am Rhabi</p>
                        <div className="my-5">
                            <a href="https://linkedin.com/in/rhabimendoza">
                                <Button className="bg-red-400 me-3 my-2 font-bold"><IconBrandLinkedin/>LinkedIn</Button>
                            </a>
                            <a href="https://docs.google.com/document/d/1acOL1LzGsIRG1v1IMnq4ymvfUl7uLwot/edit?usp=drive_link&ouid=116742183519308770386&rtpof=true&sd=true">
                                <Button className="bg-red-400 me-3 my-2 font-bold"> <IconDownload/>Resume</Button>
                            </a>
                            <a href="https://github.com/rhabimendoza">
                                <Button className="bg-red-400 me-3 my-2 font-bold"><IconBrandGithub/>Github</Button>
                            </a>   
                        </div>
                        <div className={`${inter.className} text-red-400`}>
                            <TrueFocus sentence="Developer Student Learner" manualMode={false} blurAmount={5} borderColor="red" animationDuration={0.5} pauseBetweenAnimations={1}/>
                        </div>
                    </div>
                </div>

                <div className="flex-1 p-5 flex justify-center">
                    <Image src="/images/me.jpg" alt="rhabi mendoza" height={450} width={450} className="max-w-full h-auto rounded-full animate-fade-left" priority/>
                </div>

            </div>
        </>
    );

}