import { useDispatch, useSelector } from 'react-redux'
import './App.scss'
import { Button } from 'react-bootstrap'
import { DECREMENT, INCREMENT } from './redux/actions/actions'


function App() {

  let countState = useSelector(store => store.counter)
  const dispatch = useDispatch()

  const increaseCounter = () => {
    dispatch({ type: INCREMENT })
  }

  const decreaseCounter = () => {
    dispatch({ type: DECREMENT })
  }

  return (
    <div className='d-flex justify-content-center m-4 gap-4'>
      <Button variant='primary' onClick={increaseCounter}>Add</Button>
      <div>{countState}</div>
      <Button variant='info' onClick={decreaseCounter}>decrease</Button>
    </div>
  )
}

export default App
