import { projects } from '@/src/components/projects/projects-page-data';
import Page from '@/src/components/projects/Page';

interface ProjectPageWrapperProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPageWrapper({ params }: ProjectPageWrapperProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <p className="text-white p-6">Project not found</p>;
  }

  return <Page project={project} />;
}
