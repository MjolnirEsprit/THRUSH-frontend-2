import { Breadcrumbs, Footer, Hero, Navbar } from "@components/common";
import { CourseCard, CourseList } from "@components/MusicCourses/ui/course";
import { BaseLayout } from "@components/MusicCourses/ui/layout";
import { getAllCourses } from "@content/courses/fetcher";

export default function MarketplaceHome({ courses }) {
  return (
    <>
      <Hero />
      <CourseList courses={courses}>
        {(course) => <CourseCard key={course.id} course={course}></CourseCard>}
      </CourseList>
    </>
  );
}

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: {
      courses: data,
    },
  };
}

MarketplaceHome.Layout = BaseLayout;