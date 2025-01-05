import './App.css'
import Condition from './components/Condition'
import FirstComponent from './components/FirstComponent'

function App() {

  var courseName = "React course"
  return (
    <>
      {courseName}
      <FirstComponent />
      <FirstComponent />
      <hr />
      <Condition />
    </>
  )
}

export default App
