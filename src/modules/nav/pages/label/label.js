import * as React from 'react';
import Notes from '../../../../shared/components/notes/notes';
import { useSearchParams } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Label() {
  const useEffect = React.useEffect;
  let [searchParams] = useSearchParams();
  let [label, setLabel] = React.useState(searchParams.get("id"));
  let notes = useSelector((state) => state.noteSlice.notes);
  useEffect(() => {
    setLabel(() => searchParams.get("id"));
  }, [searchParams]);
  return (
      <Notes data={notes.filter(x => x.label === label)}/>
  );
}