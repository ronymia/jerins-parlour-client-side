import axios from "axios";


// Home page services
export const getServices = () => ({
    queryKey: ["services"],
    queryFn: async ({ signal }) => {
        return await axios.get("/v1/services", {
            signal: signal
        })
            .then(response => {
                return response.data;
            }).catch(error => {
                // console.log('axios', error);
                throw error;
            });
    }
});

