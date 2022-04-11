import Notes from '../../../../shared/components/notes/notes';
import { useSelector } from 'react-redux';

export default function AllNotes() {
    const notes = useSelector((state) => state.noteSlice.notes);
    return (
        <Notes data={notes}/>
    );
}