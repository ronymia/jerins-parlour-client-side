import { QueryClient } from "@tanstack/react-query";

export const userRegistration = () => ({
    mutationFn: async (newUser) => {
        const baseURL = import.meta.env.VITE_BASE_URL;
        const url = new URL("/api/v1/users/registration", baseURL);

        const request = new Request(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
        })

        const response = await fetch(request);
        console.log(response)
        return response.json();
    },
    onSuccess: () => {
        QueryClient.invalidateQueries({
            queryKey: ["users"],
            exact: true
        })
    }
})