import React, {FC} from 'react';
import Typography from "../Typography";
import Card from "../Card";
import {Flex} from "../Box";
import Slider, {SliderItem} from "../Slider";
import Button from "../Button";

interface Props {
  onApplyFilters?: () => void;
  // eslint-disable-next-line no-unused-vars
  onFilterChange?: (value: string, type: SliderType) => void;
}

export type SliderType = "breedCount" | "legend" | "purity";

const CrabPricesCard: FC<Props> = ({onApplyFilters, onFilterChange}) => {

  const handleApplyFilters = () => {
    if (onApplyFilters) {
      onApplyFilters();
    }
  };

  const handleFilterChange = (value: SliderItem, type: SliderType) => {
    if (onFilterChange) {
      onFilterChange(value.value, type);
    }
  };

  return <>
    <Typography fontSize={"heading4"} my={"xl"}>
      Crab Prices
    </Typography>
    <Card display={["none", "block"]} my={"lg"} border={1}>
      <Flex>
        <Flex pr={"xxl"} flexGrow={1}>
          <Slider onChange={(value) => handleFilterChange(value, "breedCount")} values={[
            {label: "0", value: "0"},
            {label: "1", value: "1"},
            {label: "2", value: "2"},
            {label: "3", value: "3"},
          ]} label={"Breed Count"} id={"breedCount"}/>
        </Flex>
        <Flex pr={"xxl"} flexGrow={1}>
          <Slider onChange={(value) => handleFilterChange(value, "legend")} values={[
            {label: "0", value: "0"},
            {label: "1", value: "1"},
            {label: "2", value: "2"},
            {label: "3", value: "3"},
            {label: "4", value: "4"},
            {label: "5", value: "5"},
            {label: "6", value: "6"},
          ]} label={"Legend"} id={"legend"}/>
        </Flex>
        <Flex pr={"xxl"} flexGrow={1}>
          <Slider onChange={(value) => handleFilterChange(value, "purity")} values={[
            {label: "0", value: "0"},
            {label: "1", value: "1"},
            {label: "2", value: "2"},
            {label: "3", value: "3"},
            {label: "4", value: "4"},
            {label: "5", value: "5"},
            {label: "6", value: "6"},
          ]} label={"Purity"} id={"purity"}/>
        </Flex>
        <Flex flexGrow={1}>
          <Button onClick={handleApplyFilters} block variant={"primary"}>
            <Typography fontSize={"medium"}>
              Apply Filter
            </Typography>
          </Button>
          <Button block variant={"transparent"}>
            <Typography fontSize={"small"}>
              More Filters
            </Typography>
          </Button>
        </Flex>
      </Flex>
    </Card>
  </>;
};

export default CrabPricesCard;
