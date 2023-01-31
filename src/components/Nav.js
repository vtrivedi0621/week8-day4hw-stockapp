import { Link } from "react-router-dom";
import React from "react";

export default function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/stocks">
        <div>stock</div>
      </Link>
    </div>
  );
}