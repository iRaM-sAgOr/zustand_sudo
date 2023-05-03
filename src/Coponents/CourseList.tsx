import React, { useEffect } from "react";
import {useCourseStore} from "../Stores/CourseStore";
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

  useEffect(() => {
    if (courses) {
      console.log("000000000000", courses);
    }
  }, [courses]);

  return (
    <div>
      <ul>
        {courses?.map((course: CourseType, i: number) => {
          return (
            <React.Fragment key={i}>
              <li
                className={`course-item`}
                style={{
                  backgroundColor: '#00FF0044'
                }}
              >
                <span className="course-item-col-1">
                  <input
                    checked={course.completed}
                    type="checkbox"
                    onChange={(e) => {
                      toogleCourseStatus(course.id);
                    }}
                  />
                </span>
                <span>{course?.name}</span>
                <button
                  onClick={() => {
                    removeCourse(course.id);
                  }}
                  className="delete-btn"
                >
                  Delete
                </button>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}

export default CourseList;
