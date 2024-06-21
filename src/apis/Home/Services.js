
/*=================================
            Get Apis
===================================*/
// GET ALL SERVICE
export const getAllService = () => ({
    queryKey: ["all", "service"],
    queryFn: async ({ signal }) => {
        const baseURL = import.meta.env.VITE_BASE_URL;
        const url = new URL("/api/v1/services", baseURL);

        const request = new Request(url, {
            signal,
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })

        const response = await fetch(request);
        return response.json();
    }
});


// GET SINGLE SERVICE
export const getSingleService = () => ({
    queryKey: ["single", "service"],
    queryFn: async ({ params, signal }) => {
        const baseURL = import.meta.env.VITE_BASE_URL;
        const url = new URL(`/api/v1/services/${params.serviceId}`, baseURL);

        const request = new Request(url, {
            signal,
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })

        const response = await fetch(request);
        return response.json();
    }
})