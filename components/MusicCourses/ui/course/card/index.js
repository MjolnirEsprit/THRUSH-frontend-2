import Image from "next/image";
import Link from "next/link";

export default function Card({ course, disabled, Footer }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
      <div className="flex h-full">
        <div className="next-image-wrapper h-full flex-1">
          <Image
            className={`object-cover ${disabled && "grayscale filter"}`}
            src={course.coverImage}
            layout="responsive"
            width="200"
            height="230"
            alt={course.title}
          />
        </div>
        <div className="flex-2 p-8 pb-4">
          <div className="text-sm font-semibold uppercase tracking-wide text-orange-500">
            {course.type}
          </div>
          <Link href={`/course/${course.slug}`}>
            <a
              href="#"
              className="mt-1 block h-12 text-sm font-medium leading-tight text-black hover:underline sm:text-lg"
            >
              {course.title}
            </a>
          </Link>
          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            {course.description.substring(0, 70)}...
          </p>
          {Footer && <Footer></Footer>}
        </div>
      </div>
    </div>
  );
}
