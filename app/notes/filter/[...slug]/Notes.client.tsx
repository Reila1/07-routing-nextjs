'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';

export default function NotesClient() {
  const params = useParams();
  const slug = params?.slug as string[];
  
  const selectedTag = slug && slug[0] !== 'all' ? slug[0] : undefined;
  
  const { data, isLoading, isError } = useQuery({
    queryKey: ['notes', 1, '', selectedTag],
    queryFn: () => fetchNotes(1, 12, '', selectedTag),
  });
  
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading notes...</p>;
  }
  
  return (
    <div>
      {data?.notes && <NoteList notes={data.notes} />}
    </div>
  );
}