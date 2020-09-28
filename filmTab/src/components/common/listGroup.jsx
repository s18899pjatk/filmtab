import React from "react";

const ListGroup = ({
  items,
  textProperty,
  itemProperty,
  onItemSelect,
  selectedItem,
}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[itemProperty]}
          className={
            item === selectedItem
              ? "list-group-item active "
              : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  itemProperty: "_id",
};

export default ListGroup;
