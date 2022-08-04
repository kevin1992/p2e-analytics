import React, {FC} from 'react';
import BaseHeader from "../Header";
import BaseSidebar from "../Sidebar";
import styled from "styled-components";
import {Box, Flex, Grid} from "../Box";
import {FaSearch, FaAccessibleIcon, FaAcquisitionsIncorporated, FaAd, FaAccusoft, Fa500Px} from "react-icons/fa";
import Typography from "../Typography";

const Container = styled(Grid)`
  min-height: 100vh;
  background: linear-gradient(180deg, #000916, #000000);
  gap: ${({theme}) => theme.space.lg};
`;

const Header = styled(BaseHeader)`
  grid-row: 1;
  grid-column: 2;
`;

const Sidebar = styled(BaseSidebar)`
  grid-row: 1 / span 2;
  grid-column: 1;
`;

const Main = styled.main`
  grid-row: 2;
  grid-column: 2;
  ${({theme}) => {
    return `
      @media (max-width: ${theme.breakpoints[0]}) {
        grid-column: 1 / span 2;
      }
    `;
  }}
`;

interface Props {
  children?: React.ReactNode;
}

const MenuIcons = [
  // eslint-disable-next-line react/jsx-key
  <FaSearch/>,
  // eslint-disable-next-line react/jsx-key
  <FaAccessibleIcon/>,
  // eslint-disable-next-line react/jsx-key
  <FaAcquisitionsIncorporated/>,
  // eslint-disable-next-line react/jsx-key
  <FaAd/>,
  // eslint-disable-next-line react/jsx-key
  <FaAccusoft/>,
];

const Layout: FC<Props> = ({children}) => {
  return <Container gridTemplateColumns={"98px auto"} gridTemplateRows={"112px auto"}>
    <Sidebar display={["none", "block"]}>
      <Flex height={"100%"} justifyContent={"space-around"} alignItems={"center"} flexDirection={"column"}>

        {
          MenuIcons.map((icon, index) => {
            return <Box key={index}>
              <Typography fontSize={"large"} color={"white"}>
                {icon}
              </Typography>
            </Box>;
          })
        }

      </Flex>
    </Sidebar>
    <Header/>
    <Main>
      {children}
    </Main>
  </Container>
  ;
};

export default Layout;
