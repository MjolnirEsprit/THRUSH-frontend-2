import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Header from '@components/MusicCourses/NFTMarketplace/Header';

const style= {
  contact: `min-h-screen w-screen pt-24 pr-12 pb-12 pl-12 bg-white `,
  form:`flex flex-col p-5 w-72 rounded-2xl items-end text-black bg-white`,
  input:``,


} 
//mapp to a state
function Reviews() {
  const [state, handleSubmit] = useForm("moqrnzlj");
  if (state.succeeded) {
    return (
      <>
    <Header/>
      <div class="flex flex-col justify-center items-center min-h-screen w-screen pt-24 pr-12 pb-12 pl-12">
        <img height="100" width="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Emoji_u263a.svg/1200px-Emoji_u263a.svg.png" alt="smiling emoji" />
        <p>Thanks for your feedback. We'll reach out to you soon!</p>
      </div>
      </>
    );
  }

  return (
    <>
    <Header/>
    <div class="flex flex-col justify-center items-center min-h-screen w-screen pt-8 pr-12 pb-12 pl-12">
    <div class="w-full max-w-xs ">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <div class="mb-4">
      <label htmlFor="email" class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Email :
        </label>
        <input
          id="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
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
        <div class="mb-6">
        <textarea
          id="message"
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
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
      
        <div class="flex items-center justify-between">
      <button type="submit" disabled={state.submitting} class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
       
          Send Feedback
        </button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
    &copy;2020 THRUSH All rights reserved.
  </p>
    </div>
    </div>
    </>
  );
}


export default Reviews;