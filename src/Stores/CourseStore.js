import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const courseStore = (set) => ({
  courses: [],
  addCourses: (newCourse) => {
    set((state) => ({
      courses: [newCourse, ...state.courses],
    }));
  },
  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((course) => course.id !== courseId),
    }));
  },
  toggleCourseStatus: (courseId) => {
    set((state) => ({
      courses: state.courses.map((c) => {
        c.id === courseId ? { ...c, completed: !c.completed } : c;
      }),
    }));
  },
});

const useCourseStore = create(
  devtools(
    persist(courseStore, {
      name: "course list",
    })
  )
);

export default useCourseStore;
