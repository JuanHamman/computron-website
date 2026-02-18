import { notFound } from 'next/navigation';
import { projects } from '@/data/portfolio';
import CaseStudyContent from './CaseStudyContent';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <CaseStudyContent project={project} />;
}
