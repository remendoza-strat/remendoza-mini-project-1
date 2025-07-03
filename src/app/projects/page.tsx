import Title from '@/src/components/Title';
import Card from '@/src/components/projects/Card';
import {projects} from '@/src/components/projects/projects-card-data';

export default function Projects(){
	return(
		<>
			<Title text="My Works"/>
			<div className="flex flex-wrap justify-center">
				{projects.map((p) => (
					<Card
					key={p.slug}
					slug={p.slug}
					image={p.image}
					title={p.title}
					languages={p.languages}
					description={p.description}
					/>
				))}
			</div>
		</>
	);
}