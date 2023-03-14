import { useDispatch } from 'react-redux'
import { deleteNote } from '../features/notes/noteSlice'

function NoteItem({ note }) {
  const dispatch = useDispatch()

  return (
    <div className="card">
  <div className="container">
    <h4><b>{new Date(note.createdAt).toLocaleString('en-US')}</b></h4> 
    <p>{note.text}</p> 
       <button onClick={() => dispatch(deleteNote(note._id))} className='btn2'>
         X
     </button>
  </div>
</div>

 
  )
}

export default NoteItem
