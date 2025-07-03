import Image from 'next/image';

export interface Page{
    slug: string;
    title: string;
    image: string;
    languages: string[];
    description: string;
    programmers: string[];
    github: string;
}

interface ProjectPage{
    project: Page;
}

export default function Page({project}: ProjectPage){
    return(


        
        <div className="p-6 text-white">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="rounded-xl mb-4"
        />
        <div className="mb-4">
            {project.languages.map((lang, index) => (
            <span
                key={index}
                className="bg-amber-400 text-black inline-block p-1 text-sm m-1 rounded"
            >
                {lang}
            </span>
            ))}
        </div>

        <p>About the Project</p>
        <p className="text-lg mb-4">{project.description}</p>
        
        <p>Project Developers</p>
        <ul>
            {project.programmers.map((element, index) => (
                <li key={index}>{element}</li>
            ))}
       
        </ul>
            

        <a
            href={project.github}
            className="text-blue-400 underline"
        >
            View on GitHub
        </a>
        </div>
    );
}
