import axios from "axios";

export interface FetcherPostData {
  url: string,
  params: any
}

const postArrayFetcher = async (...data: FetcherPostData[]) => {
  return await Promise.all(data.map(async (data) => {
    const { url, params } = data;
    const response = await axios.post(url, params);
    return response.data;
  }));
};

export default postArrayFetcher;