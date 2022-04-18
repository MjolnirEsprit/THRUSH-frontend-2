
import { Hero } from "@components/common"
import { CourseList, CourseCard } from "@components/MusicCourses/ui/course"
import { BaseLayout } from "@components/common/layout"
import { getAllCourses } from "@helpers/fetcher"
import {courseService} from "../../services/course.service";
import {useEffect, useState} from "react";

export default function Home({courses}) {

    /*
    const [courses1, setCourses] = useState(null);

    useEffect(() => {
        courseService.getAll().then(x => setCourses(x));
    }, []);

    console.log(courses1.data.courses)

     */

    return (
    <>
      <Hero />
      <CourseList
        courses={courses}
      >
      {course =>
        <CourseCard
          key={course.id}
          course={course}
        />
      }
      </CourseList>
    </>
  )
}

export function getStaticProps() {
    const { data } = getAllCourses()
    return {
        props: {
            courses: data,
        },
    };
}

Home.Layout = BaseLayout
