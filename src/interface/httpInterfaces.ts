
export interface ApiResponseData<T> {
    success: boolean;
    errorMsg: string;
    response: T;
    count?: number;
    limit?: number;
    totalPages?: number;
};

export interface IHttpMethodContext {
    showApiLoader: boolean;
    get: <T>(
        endpoint: string,
        showLoader?: boolean
    ) => Promise<ApiResponseData<T>>;
};
