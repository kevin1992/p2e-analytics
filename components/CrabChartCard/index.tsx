import React, {FC} from 'react';
import Card from "../Card";
import {Flex} from "../Box";
import Typography from "../Typography";
import {commaSeparated, money} from "../../utils/money";
import Chart from "../Chart";
import {hexToRgbA} from "../../utils/hexToRgba";
import {subDays} from "date-fns";

interface Props {
  totalSales: number;
  loading: boolean;
  chartData: any;
}

const chartColors = [
  "#00a1ff",
  "#ff0000",
  "#ffc000",
  "#00ff00",
  "#0000ff",
  "#ff00ff",
  "#00ffff",
  "#ffff00",
];

const chartOptions = {
  chart: {
    id: "crab-prices-chart",
  },
  colors: chartColors,
  xaxis: {
    type: 'datetime',
    min: subDays(new Date(), 30).getTime(),
    tickAmount: 6,
  },
  noData: {
    text: "Loading...",
    align: 'center',
    verticalAlign: 'middle',
    offsetX: 0,
    offsetY: 0,
    style: {
      color: "#FFF",
      fontSize: '14px',
      fontFamily: "Helvetica"
    }
  }
};

const CrabChartCard: FC<Props> = ({chartData, totalSales, loading}) => {
  return <Flex width={'100%'} mt={"xxxl"}>
    <Card border={0}>
      <Flex justifyContent={["center", "flex-start"]}>
        <Typography mr={"xs"} fontSize={"small"}>Crabda Count</Typography>
        <Typography color={"gray"} fontSize={"small"}>(todays low)</Typography>
      </Flex>
      <Flex justifyContent={["center", "flex-start"]}>
        <Typography mr={"xs"} fontSize={"heading3"}>{commaSeparated(totalSales)}</Typography>
        <Typography color={"gray"} fontSize={"heading3"}>({money(totalSales)})</Typography>
      </Flex>
      <Flex flexDirection={["column", "row"]}>
        <Chart
          loading={loading}
          options={chartOptions}
          data={chartData}
        />
        <Flex flexGrow={1} flexDirection={"column"} alignItems={"center"}>
          {
            chartData && chartData.map((elem: any, index: number) => (
              <Flex mb={"sm"} justifyContent={"center"} width={"100%"}
                style={{backgroundColor: hexToRgbA(chartColors[index], 0.3)}} key={index}>
                <Typography color={"white"} fontSize={"large"}>{elem.totalSales}</Typography>
              </Flex>))
          }
        </Flex>
      </Flex>
    </Card>
  </Flex>;
};

export default CrabChartCard;
