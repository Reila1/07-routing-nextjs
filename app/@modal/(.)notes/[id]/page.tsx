import NotePreviewClient from './NotePreview.client';

export default async function ModalPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  
  return <NotePreviewClient noteId={id} />;
}