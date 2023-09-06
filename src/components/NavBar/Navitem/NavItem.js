import React from "react";
import { node, string, func } from "prop-types";
import { NavigationItemContainer, NavigationLink } from "./styles";

const NavigationItem = ({ children, link, onClick }) => (
  <NavigationItemContainer onClick={onClick}>
    <NavigationLink activeClassName="active" exact to={link}>
      {children}
    </NavigationLink>
  </NavigationItemContainer>
);

NavigationItem.propTypes = {
  children: node,
  link: string,
  onClick: func,
};

export default NavigationItem;
