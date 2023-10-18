import { Form, redirect, useActionData, useLoaderData, useNavigation } from "react-router-dom";


export const action = async ({ request }) => {
     const formData = await request.formData();
     const name = formData.get("name");
     const designation = formData.get("designation");
     const description = formData.get("description");
     const errors = {};

     // validate the fields
     if (typeof description !== "string" || description.length < 6) {
          errors.description = "description must be > 6 characters";
     }

     // return data if we have errors
     if (Object.keys(errors).length) {
          return errors;
     }

     const updates = Object.fromEntries(formData);
     // console.log(updates);
     return updates;

}

export default function Review() {
     const navigation = useNavigation();
     const actionData = useActionData();
     // form submitting indicator
     const busy = navigation.state === "submitting";
     // console.log(actionData);

     return (
          <div className="">
               <Form method="post" action="/dashboard/review"
                    className="bg-white p-10 flex flex-col items-start gap-6 w-1/2 pb-2 rounded-md"
               >
                    <div className="flex flex-col gap-2 items-start w-full">
                         <label htmlFor="Name">Your Name</label>
                         <input type="text"
                              name="name"
                              id=""
                              placeholder="Enter Name"
                              className="h-11 w-full border border-[#C9C9C9] focus:outline-none rounded-sm placeholder:text-sm placeholder:font-normal placeholder:text-[#C9C9C9] px-4"
                         />
                    </div>
                    <div className="flex flex-col gap-2 items-start w-full">
                         <label htmlFor="designation">Designation</label>
                         <input type="text"
                              name="designation"
                              id=""
                              placeholder="Your Company's Name, Designation"
                              className="h-11 w-full border border-[#C9C9C9] focus:outline-none rounded-sm placeholder:text-sm placeholder:font-normal placeholder:text-[#C9C9C9] px-4"
                         />
                    </div>

                    <div className="flex flex-col gap-2 items-start w-full">
                         <label htmlFor="description">Description</label>
                         <textarea name="description"
                              id=""
                              placeholder="Enter Description"
                              className="h-28 w-full border border-[#C9C9C9] focus:outline-none rounded-sm placeholder:text-sm placeholder:font-normal placeholder:text-[#C9C9C9] px-4 pt-4 resize-none"
                         ></textarea>
                    </div>

                    <button type="submit"
                         className="bg-primary text-white h-10 w-full rounded-md tracking-widest "
                         disabled={busy}
                    >
                         {busy ? "submitting" : "Submit"}
                    </button>
               </Form>
          </div>
     )
}
