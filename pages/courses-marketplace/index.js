
import { Hero } from "@components/common"
import { CourseList, CourseCard } from "@components/MusicCourses/ui/course"
import { BaseLayout } from "@components/common/layout"
import {courseService} from "../../services/course.service";
import {useEffect, useState} from "react";

export default function Home() {
    const [courses1, setCourses] = useState(null);


    useEffect(() => {

        let isApiSubscribed = true;

        courseService.getAll().then((x) => {
            if (isApiSubscribed) {
                // handle success
                setCourses(x.data.courses);
            }
        });

        return () => {
            // cancel the subscription
            isApiSubscribed = false;
        };

    }, []);

    console.log(courses1)
    return (
    <>
      <Hero />

      <CourseList
        courses={courses1}
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

Home.Layout = BaseLayout
