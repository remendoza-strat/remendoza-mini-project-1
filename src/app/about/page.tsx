'use client';
import {useAOSInit} from '@/src/effects/AOS';
import Title from '@/src/components/about/Title';
import Me from '@/src/components/about/Me';
import LanguageSection from '@/src/components/about/LanguageSection';
import ItemSection from '@/src/components/about/ItemSection';
import {certificates, progress} from '@/src/components/about/about-data';

export default function About(){
    
    useAOSInit();

    return(
        <>
            <div className="mx-3">
                <div className="my-5 m-2">
                    <Title text="Me"/>
                    <Me/>
                </div>
                <div className="my-10 m-2">
                    <Title text="Stack"/>
                    <LanguageSection/>
                </div>
                <div className="my-10 m-2">
                    <Title text="Progress"/>
                    <ItemSection data={progress}/>
                </div>
                <div className="my-10 m-2">
                    <Title text="Certificates"/>
                    <ItemSection data={certificates}/>
                </div>
            </div>
        </>
    );

}