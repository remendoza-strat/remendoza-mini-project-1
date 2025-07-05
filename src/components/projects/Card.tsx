import Image from 'next/image';
import Link from 'next/link';
import {Inter} from 'next/font/google';

interface CardData{
	slug: string;
	image: string;
	title: string;
	languages: string[];
	description: string;
}

const inter = Inter({
	subsets: ["latin"]
});

export default function Card({slug, image, title, languages, description} : CardData){
	return(
		<>
			<Link href={`/projects/${slug}`}>	
				<div className="projects-card-color w-80 h-96 m-5 rounded-xl p-3 cursor-pointer hover:scale-[1.03] transition-transform duration-300" data-aos="zoom-in">
					<Image src={image} width={300} height={300} alt={title} className="w-full h-auto rounded-xl"/>
					<h1 className={`text-white font-bold m-2 text-2xl ${inter.className}`}>{title}</h1>
					<div className="m-2">
						{languages.map((element, index) => (
							<p key={index} className="bg-red-400 inline-block p-1 m-1 font-mono font-bold text-xs rounded text-white">{element}</p>
						))}
					</div>
					<p className="text-white text-base m-1">{description}</p>
				</div>
			</Link>		
		</>
	);
}