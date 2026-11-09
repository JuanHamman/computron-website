import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data/portfolio';
import CaseStudyContent from './CaseStudyContent';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  if (project.live) {
    return {
      title: `${project.title}: a product built by Computron Tech`,
      description: `${project.live.tagline} ${project.title} is a duplicate photo cleaner for Google Photos, iCloud Photos, Windows, Mac, iPhone and Android, designed, built and run by Computron Tech.`,
      openGraph: { images: [project.live.hero.src] },
    };
  }
  return {
    title: `${project.title} · Computron Tech`,
    description: project.challenge,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <CaseStudyContent project={project} />;
}
