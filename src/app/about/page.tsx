import Image from 'next/image';
import {Inter} from 'next/font/google';
import Title from '@/src/components/about/Title';
import LanguageSection from '@/src/components/about/LanguageSection';
import ItemSection from '@/src/components/about/ItemSection';
import {progress, certificates} from '@/src/components/about/about-item-data';
import {tabs} from '@/src/components/about/about-language-data';

const inter = Inter({
    subsets: ["latin"]
});

export default function About(){
    return(
        <>
            <div className="mx-3">
                <div className="my-5 m-2">
                    <Title text="Me"/>
                    <div className="flex flex-col md:flex-row gap-6 px-4 py-8" data-aos="zoom-in">
                        <div className="w-full md:w-1/2 flex justify-center items-center">
                            <Image src="/images/about.jpg" alt="rhabi mendoza" width={300} height={300} quality={100} className="w-80 m-5 rounded-md animate-wiggle animate-infinite"/>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="mx-auto">
                                <p className={`text-white text-justify m-5 p-1 leading-[2.5] ${inter.className}`}>
                                    I am a 22-year-old developer based in Bulacan, Philippines. As a fourth-year college student, I am currently immersed in the ever-evolving world of academia, where I balance the pursuit of knowledge with a passion for technology. <br/>My journey as a developer has led me deep into the complex and rewarding field of web and mobile application development. Over the years, I’ve honed my skills by building real-world projects, exploring modern frameworks, and constantly pushing the boundaries of what I can create. <br/>With a strong foundation in both front-end and back-end technologies, I strive to craft digital experiences that are not only functional but also intuitive and engaging.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-10 m-2">
                    <Title text="Stack"/>
                    <LanguageSection data={tabs}/>
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