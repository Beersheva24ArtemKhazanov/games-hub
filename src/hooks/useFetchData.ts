import type { AxiosError, AxiosRequestConfig } from "axios";
import type DataResponse from "../model/data-response"
import api from "../services/api-client"
import { useEffect, useState } from "react";

export default function useFetchData<T>(endpoint: string, config?: AxiosRequestConfig, deps?: any[]): { data: T[], errorMessage: string, isLoading: boolean } {
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    useEffect(() => {
        api.get<DataResponse<T>>(endpoint, config).then(res => setData(res.data.results))
            .catch((error: AxiosError) => setErrorMessage(error.message))
            .finally(() => setLoading(false));
        setLoading(true);
    }, deps || [])
    return {data, errorMessage, isLoading}
}