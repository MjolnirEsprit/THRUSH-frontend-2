import { BaseLayout } from "@components/MusicCourses/ui/layout";
import { getAllCourses } from "@content/courses/fetcher";
import { CourseCard, CourseList } from "@components/MusicCourses/ui/course";
import { useWalletInfo } from "@components/MusicCourses/hooks/web3";
import { Button } from "@components/common";
import { OrderModal } from "@components/MusicCourses/ui/order";
import { useState } from "react";
import { MarketHeader } from "@components/MusicCourses/ui/marketplace";
import { useWeb3 } from "@components/MusicCourses/providers";

export default function Marketplace({ courses }) {
  const { web3, contract } = useWeb3();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { canPurchaseCourse, account } = useWalletInfo();

  //order = course
  const purchaseCourse = async (order) => {
    const hexCourseId = web3.utils.utf8ToHex(selectedCourse.id);
    console.log("hexCourseId", hexCourseId);

    // hex course ID:
    // 0x31343130343734000000000000000000

    // address
    // 0xf8929048D74164582E5FA0897fC654CbF0c096C6

    // 31343130343734000000000000000000f8929048D74164582E5FA0897fC654CbF0c096C6
    // Order Hash
    // 2e0b409e2bf77ce6466df3990199f3a7377f305fef2c55556a8cae5decbdd0e5
    const courseHash = web3.utils.soliditySha3(
      { type: "bytes16", value: hexCourseId },
      { type: "address", value: account.data }
    );
    console.log("courseHash", courseHash);

    // test@gmail.com
    // af257bcc3cf653863a77012256c927f26d8ab55c5bea3751063d049d0538b902
    const emailHash = web3.utils.sha3(order.email);
    console.log("emailHash", emailHash);
    // af257bcc3cf653863a77012256c927f26d8ab55c5bea3751063d049d0538b9022e0b409e2bf77ce6466df3990199f3a7377f305fef2c55556a8cae5decbdd0e5

    // proof:
    // b13bdad9cb08b53405c63b05f052a842ec6ab91f6f4239355ff359eb5532b29f
    const proof = web3.utils.soliditySha3(
      { type: "bytes32", value: emailHash },
      { type: "bytes32", value: courseHash }
    );
    console.log("proof", proof);

    const value = web3.utils.toWei(String(order.price));

    try {
      const result = await contract.methods
        .purchaseCourse(hexCourseId, proof)
        .send({ from: account.data, value });
      console.log(result);
    } catch {
      console.error("Purchase course: Operation Has failed");
      alert("احا");
    }
  };

  return (
    <>
      <MarketHeader />

      <CourseList courses={courses}>
        {(course) => (
          <CourseCard
            key={course.id}
            course={course}
            disabled={!canPurchaseCourse}
            Footer={() => (
              <div className="mt-4">
                <Button
                  onClick={() => setSelectedCourse(course)}
                  disabled={!canPurchaseCourse}
                  variant="lightOrange"
                >
                  Purchase
                </Button>
              </div>
            )}
          ></CourseCard>
        )}
      </CourseList>
      {selectedCourse && (
        <OrderModal
          course={selectedCourse}
          onSubmit={purchaseCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
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

Marketplace.Layout = BaseLayout;
