import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";

function DropdownComponent({ direction, handleFilter }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret>Filter Actors by</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => handleFilter("male")}>Male</DropdownItem>
          <DropdownItem onClick={() => handleFilter("female")}>
            Female
          </DropdownItem>
          <DropdownItem onClick={() => handleFilter("popularity")}>
            Popularity
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default DropdownComponent;
