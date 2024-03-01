
/*=================================
            Get Apis
===================================*/
export const getServices = () => ({
    queryKey: ["services"],
    queryFn: async ({ signal }) => {
        const baseURL = "http://localhost:5000";
        const url = new URL("/v1/services", baseURL);
        const request = new Request(url, {
            signal,
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const response = await fetch(request);
        if (!response.ok) {
            // console.log(response)
            throw new Response()
        }
        return response.json();
    }
});
