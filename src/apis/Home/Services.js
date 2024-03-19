import axios from "axios";


// Home page services
export const getServices = () => ({
    queryKey: ["services"],
    queryFn: async ({ signal }) => {
        const { data } = await axios.get("/v1/services", {signal});
        return data;
    }
});

