import type {NextPage} from 'next';
import {Box, Flex} from "../components/Box";
import Button from "../components/Button";
import Typography from "../components/Typography";
import CrabPricesCard, {SliderType} from "../components/CrabPricesCard";
import useCrabadaPrices, {
  BreedCountType,
  CrabadaPricesParams,
  CrabadaPricesResponse,
  LegendType, PurityType
} from "../hooks/useCrabadaPrices";
import {useCallback, useEffect, useState} from "react";
import {subDays} from 'date-fns';
import {CrabClass, CrabClasses} from "../utils/crabClasses";
import CrabChartCard from "../components/CrabChartCard";

const formatChartData = (data: CrabadaPricesResponse[], crabClass: CrabClass) => {
  const sortedData = [...data].sort((a, b) => a.bucketDate - b.bucketDate);
  return {
    name: crabClass,
    totalSales: sortedData.reduce((acc, cur) => acc + cur.totalSales, 0),
    data: sortedData.map((elem) => [elem.bucketDate, elem.avgPrice])
  };
};

const Home: NextPage = () => {
  const [params, setParams] = useState<CrabadaPricesParams>({
    from: (subDays(new Date(), 30)).toISOString(),
    breedCount: [0, 0],
    legend: [0, 0],
    purity: [0, 0]
  });
  const [tempParams, setTempParams] = useState<CrabadaPricesParams>({...params});
  const {data, error, loading} = useCrabadaPrices(params);
  const [chartData, setChartData] = useState<any>();
  const [totalSales, setTotalSales] = useState<number>(0);

  const handleApplyFilters = useCallback(() => {
    setParams({...tempParams});
  }, [tempParams]);

  const handleFilterChange = useCallback((value: string, type: SliderType) => {
    switch (type) {
    case "breedCount":
      setTempParams({...tempParams, breedCount: [0, parseInt(value) as BreedCountType]});
      break;
    case "legend":
      setTempParams({...tempParams, legend: [0, parseInt(value) as LegendType]});
      break;
    case "purity":
      setTempParams({...tempParams, purity: [0, parseInt(value) as PurityType]});
      break;
    }
  }, [tempParams]);

  useEffect(() => {
    if (data) {
      const fChartData = data.map((elem, index) => formatChartData(elem, CrabClasses[index]));
      const sales = fChartData.reduce((acc, elem) => acc + elem.totalSales, 0);
      setChartData(fChartData);
      setTotalSales(sales);
    }
  }, [data]);

  return (
    <Box>
      <Flex display={["none", "flex"]} my={"lg"}>
        <Button block variant={"box"}>
          <Typography fontSize={"large"} fontFamily={"cubano"}>
            PROFILE
          </Typography>
        </Button>
        <Button block variant={"box"}>
          <Typography fontSize={"large"} fontFamily={"cubano"}>
            ECONOMY
          </Typography>
        </Button>
        <Button block variant={"box"}>
          <Typography fontSize={"large"} fontFamily={"cubano"}>
            POPULATION
          </Typography>
        </Button>
        <Button active block variant={"box"}>
          <Typography fontSize={"large"} fontFamily={"cubano"}>
            CRAB PRICES
          </Typography>
        </Button>
      </Flex>
      <CrabPricesCard onFilterChange={handleFilterChange} onApplyFilters={handleApplyFilters}/>
      {
        error ? <Typography fontSize={"large"} fontFamily={"cubano"}>{error}</Typography> :
          <CrabChartCard totalSales={totalSales} loading={loading} chartData={chartData}/>
      }
    </Box>
  );
};

export default Home;
