
import { Hero } from "@components/common"
import { CourseList, CourseCard } from "@components/MusicCourses/ui/course"
import { BaseLayout } from "@components/common/layout"
import { getAllCourses } from "@helpers/fetcher"

export default function Home({courses}) {
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
