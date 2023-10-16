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
     console.log(actionData);

     return (
          <>
               <Form method="post" action="/dashboard/review"
                    className="flex flex-col items-start gap-6 w-96 pt-7 pl-7"
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
                         disabled={busy}
                    >
                         {busy ? "submitting" : "Submit"}
                    </button>
               </Form>
          </>
     )
}
