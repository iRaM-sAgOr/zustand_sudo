import './App.css'
import CourseForm from './Coponents/CourseForm'
import CourseList from './Coponents/CourseList'
function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <CourseForm/>
      <CourseList/>
    </div>
  )
}

export default App
