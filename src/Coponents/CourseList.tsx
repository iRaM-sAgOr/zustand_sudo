import React from "react";
import { useCourseStore } from "../Stores/CourseStore";
interface CourseType {
  id: number;
  completed: boolean;
  name: string;
}
function CourseList() {
  const { courses, removeCourse, toogleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toogleCourseStatus: state.toogleCourseStatus,
    })
  );

  return (
    <ul className="w-full">
      {courses?.map((course: CourseType, i: number) => {
        return (
          <React.Fragment key={i}>
            <li
              className=" flex justify-between text-left hover:bg-sky-700 rounded-lg bg-primary-100 p-4 text-primary-600 mt-1"
              style={{
                backgroundColor: "#00FF0044",
              }}
            >
              <div className="">
                <span className="course-item-col-1">
                  <input
                    checked={course.completed}
                    type="checkbox"
                    onChange={(e) => {
                      toogleCourseStatus(course.id);
                    }}
                  />
                </span>
                <span className="px-2">{course?.name}</span>
              </div>
              <button
                onClick={() => {
                  removeCourse(course.id);
                }}
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              >
                Delete
              </button>
            </li>
          </React.Fragment>
        );
      })}
    </ul>
  );
}

export default CourseList;
