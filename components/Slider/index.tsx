import React, {FC, useCallback} from 'react';
import {Flex} from "../Box";
import Typography from "../Typography";

export interface SliderItem {
  label: string;
  value: string;
}

interface Props {
  values: SliderItem[];
  label: string;
  id: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: SliderItem) => void;
}

const calculateValue = (values: SliderItem[], value: SliderItem) => value.value;

const Slider: FC<Props> = ({values, label, id, onChange}) => {
  const [value, setValue] = React.useState(calculateValue(values, values[0]));

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const item = values.filter(value => event.target.value === calculateValue(values, value).toString()).shift();
    if (!item) return;
    if (onChange) {
      onChange(item);
    }
    setValue(event.target.value);
  }, [onChange, values]);

  return <Flex width={"100%"} flexDirection={"column"}>
    <Typography>{label}</Typography>
    <input value={value} onChange={handleChange} min={values[0].value} max={values[values.length - 1].value} id={id}
      type="range"
      list={`list-${id}`}/>
    <datalist id={`list-${id}`}>
      {
        values.map((elem, index) => {
          return <option key={index} value={calculateValue(values, elem)}>{elem.label}</option>;
        })
      }
    </datalist>
  </Flex>;
};

export default Slider;
