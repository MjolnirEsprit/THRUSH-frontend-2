import { Button } from "@components/common";
import {
  CourseFilter,
  OwnedCourseCard,
} from "@components/MusicCourses/ui/course";
import { BaseLayout } from "@components/MusicCourses/ui/layout";
import { MarketHeader } from "@components/MusicCourses/ui/marketplace";

export default function ManageCourses() {
  return (
    <>
      <MarketHeader />
      <CourseFilter />
      <section className="grid grid-cols-1">
        
      </section>
    </>
  );
}

ManageCourses.Layout = BaseLayout;
