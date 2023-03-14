import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import NoteForm from '../components/NoteForm'
import NoteItem from '../components/NoteItem'
import Spinner from '../components/Spinner'
import { getNotes, reset } from '../features/notes/noteSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { notes, isLoading, isError, message } = useSelector(
    (state) => state.notes
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getNotes())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>{user && user.name}'s Dashboard</h1>
      </section>

      <NoteForm />
        {notes.length > 0 ? (
          <center>
            {notes.map((note) => (
              <NoteItem key={note._id} note={note} />
            ))}
          </center>
          
        ) : (
          <h3>You have not added any note</h3>
        )}
    </>
  )
}

export default Dashboard


