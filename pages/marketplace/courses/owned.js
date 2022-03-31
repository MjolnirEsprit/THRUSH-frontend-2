import {
  useAccount,
  useOwnedCourses,
} from "@components/MusicCourses/hooks/web3";
import { Button, Message } from "@components/common";
import { OwnedCourseCard } from "@components/MusicCourses/ui/course";
import { BaseLayout } from "@components/MusicCourses/ui/layout";
import { MarketHeader } from "@components/MusicCourses/ui/marketplace";
import { getAllCourses } from "@content/courses/fetcher";
import { useRouter } from "next/router";

export default function OwnedCourses({ courses }) {
  const router = useRouter();
  const { account } = useAccount();
  const { ownedCourses } = useOwnedCourses(courses, account.data);

  return (
    <>
      <MarketHeader />
      <section className="grid grid-cols-1">
        {ownedCourses.data?.map((course) => (
          <OwnedCourseCard key={course.id} course={course}>
            {/* <Message>
              My custom message!
            </Message> */}
            <Button onClick={() => router.push(`/courses/${course.slug}`)}>
              Watch the course
            </Button>
          </OwnedCourseCard>
        ))}
      </section>
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

OwnedCourses.Layout = BaseLayout;
