import React, {FC, memo} from 'react';
import dynamic from "next/dynamic";
import styled from "styled-components";

interface Props {
  loading: boolean;
  options: any;
  data: any;
  height?: number;
}

const ApexChart = dynamic(() => import('react-apexcharts'), {ssr: false});

const StyledChart = styled(ApexChart)`
  width: 80%;
  ${({theme}) => {
    return `
      @media (max-width: ${theme.breakpoints[0]}) {
        width: 100%;
      }
    `;
  }}
  color: #000;
`;

const Chart: FC<Props> = ({options, loading, data, height = 241}) => {

  return <StyledChart
    options={options}
    series={loading ? data ?? [] : []}
    type="line"
    height={height}
  />;
};

export default memo(Chart);
