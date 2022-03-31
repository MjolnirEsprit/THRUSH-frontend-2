import { Button } from "@components/common";

export default function CourseFilter() {
  return (
    <div className="my-4 flex flex-col items-center md:flex-row">
      <div className="relative mr-2 flex rounded-md">
        <input
          type="text"
          name="account"
          id="account"
          className="block w-52 rounded-md border-gray-300 p-4 pl-7 shadow-md focus:border-indigo-500 focus:ring-indigo-500 xs:w-96 sm:text-sm"
          placeholder="0x2341ab..."
        />
        <Button>Search</Button>
      </div>
      <div className="relative text-gray-700">
        <select
          className="focus:shadow-outline h-10 w-72 appearance-none rounded-lg border pl-3 pr-6 text-base placeholder-gray-600"
          placeholder="Regular input"
        >
          <option>A regular sized select input</option>
          <option>Another option</option>
          <option>And one more</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
