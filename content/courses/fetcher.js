import courses from "./index.json"
import axios from 'axios';

export default function getAllCourse() {
  return {
    data: courses,
    courseMap: courses.reduce((a, c, i) => {
      a[c.id] = c
      a[c.id].index = i
      return a
    }, {})
  }
}
