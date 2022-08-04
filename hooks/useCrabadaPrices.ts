import useSWR from "swr";
import postArrayFetcher, {FetcherPostData} from "../utils/fetcher";
import {CrabClass, CrabClasses} from "../utils/crabClasses";



export type BreedCountType = 0 | 1 | 2 | 3;
export type LegendType = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type PurityType = LegendType;


// eslint-disable-next-line no-unused-vars
export interface CrabadaPricesParams {
  from?: string;
  breedCount?: BreedCountType[];
  legend?: LegendType[];
  purity?: PurityType[];
  crabClass?: CrabClass[];
}

export interface CrabadaPricesResponse {
  avgPrice: number;
  bucketDate: number;
  higherPrice: number;
  lowerPrice:number;
  totalPrice: number;
  totalSales: number;
}



const useCrabadaPrices = (params: CrabadaPricesParams) => {
  const fetcherData : FetcherPostData[] = CrabClasses.map((crab) => {
    return {
      params: {...params, crabClass: [crab]},
      url: `${process.env.NEXT_PUBLIC_API_URL}/marketplace/game/crabada/prices`
    };
  });

  const {
    data,
    error,
    mutate,
    isValidating
  } = useSWR<CrabadaPricesResponse[][]>(fetcherData, postArrayFetcher);

  return {data, error, loading: !isValidating, mutate};
};

export default useCrabadaPrices;