import axios from "axios";
import useSWR from "swr";


export const useFetcher = (url: string) => {
    const { data, error } = useSWR(url, (url) => axios.get(url).then(response => response.data));
    
    return {
      data,
      isLoading: !error && !data,
      isError: error
    }
  }