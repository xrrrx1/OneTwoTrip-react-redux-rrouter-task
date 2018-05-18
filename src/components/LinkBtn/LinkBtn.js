import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  height: 30px;
  width: 100px;
  margin: 5px;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
`;

class LinkBtn extends Component {
  constructor(props) {
    super();
  }
  static propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  };

  render() {
    const { to, label } = this.props;
    return (
      <Link to={to}>
        <Button>
          <span>
            {label}
          </span>
        </Button>
      </Link>
    );
  }
}

export default LinkBtn;
