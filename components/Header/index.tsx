import React, { FC } from 'react';
import Typography from "../Typography";

interface Props {

}

const Header: FC<Props> = () => {
  return <Typography fontFamily={"cubano"} fontWeight={400} my={"xl"} fontSize={"heading2"}>CRABADA</Typography>;
};

export default Header;
