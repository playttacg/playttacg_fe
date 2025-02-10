import { useCallback } from "react";
import { useHttpMethodContext } from "../context/httpContext"
import { ApiResponseData } from "../interface/httpInterfaces";

const useNewsApi = () => {
    const { get } = useHttpMethodContext();

    const getAllNews = useCallback(
        async<T>(
            showApiLoader= true
        ): Promise<ApiResponseData<T>> => {
            const res = await get('/news/all', showApiLoader);
            return res as ApiResponseData<T>;
        },
        [get]
    )

    return { getAllNews };
} 

export default useNewsApi;