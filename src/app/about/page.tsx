import Title from '@/src/components/about/Title';
import Me from '@/src/components/about/Me';
import LanguageSection from '@/src/components/about/LanguageSection';
import ItemSection from '@/src/components/about/ItemSection';
import {progress, certificates} from '@/src/components/about/about-item-data';

export default function About(){

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