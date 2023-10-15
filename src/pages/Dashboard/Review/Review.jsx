import { Form } from "react-router-dom";

export default function Review() {
     return (
          <div>
               <Form method="post" action="/dashboard/review"
                    className="flex flex-col items-start gap-6 w-96"
               >
                    <input type="text"
                         name="name"
                         placeholder="Your Name"
                         className="h-11 w-full focus:outline-none rounded-md placeholder:text-sm placeholder:font-light placeholder:text-[#0000004D] px-4"
                    />
                    <input type="text"
                         name="designation"
                         placeholder="Company's name, designation"
                         className="h-11 w-full focus:outline-none rounded-md placeholder:text-sm placeholder:font-light placeholder:text-[#0000004D] px-4"
                    />
                    <textarea name="description"
                         placeholder="Description"
                         className="h-28 w-full focus:outline-none rounded-md placeholder:text-sm placeholder:font-light placeholder:text-[#0000004D] px-4 pt-4 resize-none"
                    ></textarea>
                    <button type="submit"
                         className="bg-primary text-white h-10 w-32 rounded-md tracking-widest"
                    >
                         Submit
                    </button>
               </Form>
          </div>
     )
}
