import css from './LayoutNotes.module.css';

export default function FilterLayout({
  sidebar,
  content,
}: {
  sidebar: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <div className={css.layout}>
      {sidebar}
      {content}
    </div>
  );
}
