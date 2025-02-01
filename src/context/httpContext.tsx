import React, {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";

export interface ApiResponseData<T> {
    success: boolean;
    errorMsg: string;
    response: T;
    count?: number;
    limit?: number;
    totalPages?: number;
  };

interface IHttpMethodContext {
  showApiLoader: boolean;
  get: <T>(
    endpoint: string,
    showLoader?: boolean
  ) => Promise<ApiResponseData<T>>;
}

export const HttpMethodContext = createContext<
    IHttpMethodContext | undefined
>(undefined);


export const HttpMethodContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {

    const [showApiLoader,setShowApiLoader] = useState<boolean>(false);

    const get = useCallback(
        async <T,>(
            endpoint: string,
            showLoader = true
        ): Promise<ApiResponseData<T>> => {
            if (showLoader) setShowApiLoader(true);
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
