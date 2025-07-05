import Image from 'next/image';
import {Inter} from 'next/font/google';

export interface PageData{
    slug: string;
    title: string;
    image: string;
    languages: string[];
    description: string;
    programmers: string[];
    github: string;
}

interface ProjectFullPage{
    project: PageData;
}

const inter = Inter({
    subsets: ["latin"]
});

export default function Page({project}: ProjectFullPage){
    return( 
        <>
            <div className="flex flex-col items-center" data-aos="zoom-in">
                <h1 className={`text-white text-3xl font-bold m-3 ${inter.className}`}>{project.title}</h1>
                <div className="flex justify-center flex-col items-center m-3">
                    <Image src={project.image} alt={project.title} width={600} height={600} className="rounded-xl border-white border-2 transition duration-300 ease-in-out hover:scale-110"/>
                    <div className="m-3">
                        {project.languages.map((element, index) => (
                            <span key={index} className="bg-red-400 text-white font-bold inline-block p-1 text-sm m-1 font-mono rounded">{element}</span>
                        ))}
                    </div>
                </div>
                <div className="w-[80%] text-white">
                    <h1 className={`text-xl font-bold mt-3 text-red-400 ${inter.className}`}>About the Project</h1>
                    <p className="text-base text-justify">{project.description}</p>
                    <h1 className={`text-xl font-bold mt-3 text-red-400 ${inter.className}`}>Project Developers</h1>
                    <ul>
                        {project.programmers.map((element, index) => (
                            <li key={index} className="text-base">• {element}</li>
                        ))}
                    </ul>
                    <h1 className={`text-xl font-bold mt-3 text-red-400 ${inter.className}`}>Repository</h1>
                    <a href={project.github} className="text-base text-blue-400 underline">View on GitHub</a>
                </div>
            </div>
        </>
    );
}