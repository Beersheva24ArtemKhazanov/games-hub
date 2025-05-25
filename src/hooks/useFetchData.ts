import { useState, useEffect } from "react";
import type DataResponse from "../model/data-response";
import api from '../services/api-client'
import { AxiosError, type AxiosRequestConfig } from "axios";
export default function useFetchData<T>(endpoint: string, config?: AxiosRequestConfig, deps?: any[]): {
    data: T[],
    errorMessage: string, isLoading: boolean
} {
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("")
    useEffect(() => {

        api.get<DataResponse<T>>(endpoint, config).then(res => setData(res.data.results))
            .catch((error: AxiosError) => setErrorMessage(error.message))
            .finally(() => setIsLoading(false));
        setIsLoading(true);
    }, deps || []);
    return { data, errorMessage, isLoading }

}