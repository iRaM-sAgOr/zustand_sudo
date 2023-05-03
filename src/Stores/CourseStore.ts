import { create } from "zustand";
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

export const useCourseStore = create<CourseStoreType>()(
  devtools(
    persist(
      (set, get) => ({
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
      }),
      { name: "course list" }
    )
  )
);
