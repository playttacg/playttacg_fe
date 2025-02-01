import axios from "axios";
import React, {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";
import { ApiResponseData, IHttpMethodContext } from "../interface/httpInterfaces";
import envConfig from "../config/env.config";

export const HttpMethodContext = createContext<
    IHttpMethodContext | undefined
>(undefined);

const Axios = axios.create({
    baseURL: envConfig.VITE_API_BASE_URL,
});

export const HttpMethodContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {

    const [showApiLoader,setShowApiLoader] = useState<boolean>(false);

    const get = useCallback(
        async <T,>(
            endpoint: string,
            showLoader = true
        ): Promise<ApiResponseData<T>> => {
            if (showLoader) setShowApiLoader(true);

            return Axios
                .get(endpoint)
                .then((res) => {
                    console.log(`🟢 Get: ${endpoint}, ${res.status}`);
                    return {
                        success: true,
                        errorMsg: "",
                        response: res as T,
                    }
                })
                .catch(err => {
                    console.log(`🔴 Get: ${endpoint}, ${err}`);
                    return {
                        success: false, 
                        errorMsg: err, 
                        response: {} as T
                    }
                })
                .finally(() => {
                    if (showLoader) setShowApiLoader(false);
                })
        },[]
    );

    const value = useMemo(() => ({showApiLoader,get}),[showApiLoader, get]);

    return (
        <HttpMethodContext.Provider value={value}>
            {children}
        </HttpMethodContext.Provider>
    );
};

export const useHttpMethodContext = () => {
    const context = useContext(HttpMethodContext);

    if (!context) {
        throw new Error("useHttpMethodContext must be used within a UserProvider");
    }

    return context;
};
