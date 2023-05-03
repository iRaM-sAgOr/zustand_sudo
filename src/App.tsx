import "./App.css";
import CourseForm from "./Coponents/CourseForm";
import CourseList from "./Coponents/CourseList";
function App() {
  return (
    <div className="w-4/12 mx-auto my-0 flex flex-col justify-center items-center h-screen">
      <CourseForm />
      <CourseList />
    </div>
  );
}

export default App;
