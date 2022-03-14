import Notes from '../../../../shared/components/notes/notes';

export default function Label() {
  const notes = [
    {id: 1, title: 'One', description: 'move me anywhere on board', label: 'personal', x: 0, y:0 },
    {id: 2, title: 'Two', description: `Quickly capture what's on your mind and get a reminder later at the right place or time. Speak a voice memo on the go and have it automatically transcribed.`, label: 'personal', x: 50, y:0 },
    {id: 3, title: 'Three', description: 'move me anywhere on board', label: 'personal', x: 100, y:0 },
    {id: 4, title: 'Four', description: `The service also includes Google Docs, Google Sheets, Google Slides, Google Drawings, Google Forms, and Google Sites`, label: 'personal', x: 150, y:0 },
  ]
  return (
      <Notes data={notes}/>
  );
}