import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'gatsby'


export default props => {

  return (
    <Menu right width="100%" style={{zIndex: 1000,}} >
      <h1 className="bannerTitle">
        <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/about">About</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/lisa">Lisa</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/blog">Blog</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/resources">Resources</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/listen">Listen</Link>&nbsp;&nbsp;&nbsp;
      </h1>
    </Menu>
  );
};