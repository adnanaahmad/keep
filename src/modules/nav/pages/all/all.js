import Notes from '../../../../shared/components/notes/notes';
import { useSelector } from 'react-redux';

export default function AllNotes() {
    const notes = useSelector((state) => state.notes.allNotes);
    return (
        <Notes data={notes}/>
    );
}