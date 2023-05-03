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
    <div>
      <input
        value={courseTitle}
        onChange={(e) => {
          setCourseTitle(e.target.value);
        }}
        className="form-input"
      />
      <button
        onClick={() => {
          handleCourseSubmit();
        }}
        className="form-submit-btn"
      >
        Add Course
      </button>
    </div>
  );
}

export default CourseForm;
