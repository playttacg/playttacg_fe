import { useCallback } from "react";
import { useHttpMethodContext } from "../context/httpContext"
import { ApiResponseData } from "../interface/httpInterfaces";

const useEventApi = () => { 
    const { get } = useHttpMethodContext();

    const getAllEvents = useCallback(
        async<T>(
            showApiLoader= true
        ): Promise<ApiResponseData<T>> => {
            const res = await get('/events/all', showApiLoader);
            return res as ApiResponseData<T>;
        },
        [get]
    )

    // const getKRecentEvents = useCallback(
    //     async<T>(   
    //         k: number,
    //         showApiLoader= true
    //     ): Promise<ApiResponseData<T>> => {
    //         const res = await get(`/events?count=${k}`, showApiLoader);
    //         return res as ApiResponseData<T>;
    //     },
    //     [get]
    // )

    return { getAllEvents };
}
export default useEventApi;