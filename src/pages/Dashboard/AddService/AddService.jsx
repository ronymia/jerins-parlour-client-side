
export default function AddService() {
     return (
          <div className="bg-white rounded-2xl p-10 relative">
               <form method="post"
                    className="grid grid-cols-2 gap-x-10 w-full"
               >
                    <div className="grid grid-cols-1 gap-6">
                         <div className="flex flex-col gap-2 items-start">
                              <label htmlFor="serviceTitle">Service Title</label>
                              <input type="text"
                                   name="serviceTitle"
                                   id=""
                                   placeholder="Enter Title"
                                   className="h-11 w-full border border-[#C9C9C9] focus:outline-none rounded-sm placeholder:text-sm placeholder:font-normal placeholder:text-[#C9C9C9] px-4"
                              />
                         </div>

                         <div className="flex flex-col gap-2 items-start">
                              <label htmlFor="description">Description</label>
                              <textarea name="description"
                                   id=""
                                   placeholder="Enter Description"
                                   className="h-28 w-full border border-[#C9C9C9] focus:outline-none rounded-sm placeholder:text-sm placeholder:font-normal placeholder:text-[#C9C9C9] px-4 pt-4 resize-none"
                              ></textarea>
                         </div>

                    </div>
                    <div className="flex flex-col items-start gap-2">
                         <label htmlFor="Image">Image</label>
                         <input type="file" name="serviceImage" id=""
                              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 
                              file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#FFEAF3] file:text-primary hover:file:bg-violet-100"
                         />
                    </div>

                    <button type="submit"
                         className="bg-primary text-white h-10 w-32 rounded-md tracking-widest absolute -bottom-16 right-0"
                    >
                         Submit
                    </button>
               </form>
          </div>
     )
}
