import { useState } from "react";
import { useCourseStore } from "../Stores/CourseStore";

function CourseForm() {
  const addCourses = useCourseStore((state) => state.addCourses);
  const [courseTitle, setCourseTitle] = useState<string>("");
  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("please add a course title");
    addCourses({
      id: Math.ceil(Math.random() * 10000),
      completed: false,
      name: courseTitle,
    });
    setCourseTitle("");
  };
  return (
    <div className="w-full flex items-center border-b border-teal-500 py-2">
      <input
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Course"
        aria-label="Full name"
        value={courseTitle}
        onChange={(e) => {
          setCourseTitle(e.target.value);
        }}
      />
      <button
        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        type="button"
        onClick={() => {
          handleCourseSubmit();
        }}
      >
        Add Course
      </button>
      <button
        className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
        type="button"
        onClick={() => {
          setCourseTitle("");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default CourseForm;
