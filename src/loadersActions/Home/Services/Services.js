
/*=================================
            Get Apis
===================================*/
export const getServices = () => ({
    queryKey: ["services"],
    queryFn: async ({ signal }) => {
        const baseURL = "http://localhost:5000";
        const url = new URL("/v1/service", baseURL);
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
