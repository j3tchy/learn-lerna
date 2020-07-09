import React from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const StyledAppBar = styled(AppBar)`
  padding: 8px;
`;

const TopBar = ({ children }) => (
  <StyledAppBar>
    <Typography>
      {children}
    </Typography>
  </StyledAppBar>
);

export default TopBar;