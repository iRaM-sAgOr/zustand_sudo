// This way it will not work for typesrcipt issue

import { create, StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Course {
  id: number;
  completed: boolean;
  name: string;
}

interface CourseStoreType {
  courses: Course[];
  addCourses: (newCourse: Course) => void;
  removeCourse: (id: number) => void;
  toogleCourseStatus: (id: number) => void;
}
type CustomStoreType = StateCreator<CourseStoreType>;
const courseStore: CustomStoreType = (set, get) => ({
  courses: [],
  addCourses: (newCourse) => {
    set((state) => ({
      courses: [newCourse, ...state.courses],
    }));
    console.log("Current course list", get().courses);
  },
  removeCourse: (id) => {
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== id),
    }));
  },
  toogleCourseStatus: (id) => {
    set((state) => ({
      courses: state.courses.map((c) =>
        c.id === id ? ({ ...c, completed: !c.completed } as Course) : c
      ),
    }));
  },
});

export const useCourseStore = create<CourseStoreType>(courseStore);
export const useCourseStoreWithMiddleware = devtools(
  persist(useCourseStore, { name: "course list" })
);
