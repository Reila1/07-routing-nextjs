import { redirect } from 'next/navigation';

export default async function FilterPage({ 
  params 
}: { 
  params: Promise<{ tag: string[] }> 
}) {
  const { tag } = await params;
  const selectedTag = tag[0] || 'all';
  redirect(`/notes/filter/${selectedTag}`);
}