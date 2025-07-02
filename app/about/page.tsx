'use client';
import {useAOSInit} from '@/custom_effects/AOS';
import Title from '../../custom_components/about/Title';
import Me from '../../custom_components/about/Me';
import LanguageSection from '../../custom_components/about/LanguageSection';
import ItemSection from '../../custom_components/about/ItemSection'
import {certificates, progress} from '../../custom_components/about/about-data'

export default function About(){
    
    useAOSInit();

    return(
        <>
            <div className="mx-3">
                <div className="my-5 m-2">
                    <Title text="About"/>
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