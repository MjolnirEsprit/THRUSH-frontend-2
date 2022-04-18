import courses from "../data/courses";
import {userService} from "../services";
import {courseService} from "../services/course.service";

export const getAllCourses = () => {



  return {
    data: courses,
    courseMap: courses.reduce((a, c, i) => {
      a[c.id] = c;
      a[c.id].index = i;
      return a;
    }, {}),
  };
};
