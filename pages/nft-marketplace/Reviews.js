import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Navbar from "@components/common/main_navbar";

const style = {
  contact: `min-h-screen w-screen pt-24 pr-12 pb-12 pl-12 bg-white `,
  form: `flex flex-col p-5 w-72 rounded-2xl items-end text-black bg-white`,
  input: ``,
};
//mapp to a state
function Reviews() {
  const [state, handleSubmit] = useForm("moqrnzlj");
  if (state.succeeded) {
    return (
      <>
        <Navbar />
        <div className="flex min-h-screen w-screen flex-col items-center justify-center pt-24 pr-12 pb-12 pl-12">
          <img
            height="100"
            width="100"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Emoji_u263a.svg/1200px-Emoji_u263a.svg.png"
            alt="smiling emoji"
          />
          <h2>Thank you for your feedback. We will reach out to you soon!</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="flex min-h-screen w-screen flex-col items-center justify-center pt-8 pr-12 pb-12 pl-12">
        <div className="w-full max-w-xs ">
          <form
            className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Email :
              </label>
              <input
                id="email"
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                type="email"
                name="email"
                required
              />
            </div>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <div className="mb-6">
              <textarea
                id="message"
                className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                name="message"
                placeholder="What do you think about us?!"
                required
              />
            </div>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={state.submitting}
                className="focus:shadow-outline rounded bg-orange-500 py-2 px-4 font-bold text-white focus:outline-none hover:bg-orange-700"
              >
                Send Feedback
              </button>
            </div>
          </form>
          <p className="text-center text-xs text-gray-500">
            &copy;2020 THRUSH All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Reviews;
