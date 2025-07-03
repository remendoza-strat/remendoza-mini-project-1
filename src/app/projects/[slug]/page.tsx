import Page from '@/src/components/projects/Page';
import {projects} from '@/src/components/projects/projects-page-data';

interface ProjectSlug{
	params: Promise<{
		slug: string;
	}>;
}

export default async function ProjectsSlug({params} : ProjectSlug){
  
	const {slug} = await params;
	const project = projects.find((p) => p.slug === slug);

	if(!project){
		return <p className="text-white p-6 text-3xl font-bold">Project not found</p>;
	}

  	return <Page project={project}/>;

}