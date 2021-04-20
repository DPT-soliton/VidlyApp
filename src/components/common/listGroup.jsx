import React from "react";

const ListGroup = (props) => {
  const {
    items,
    value_property,
    text_property,
    onItemSelect,
    selected_item,
  } = props;
  return (
    <div>
      <ul className="list-group">
        <li
          className="list-group-item  active"
          onClick={() => props.onItemSelect("All")}
        >
          All Genres
        </li>
        {items.map((item) => (
          <li
            key={item[value_property]}
            className={
              selected_item === item
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action"
            }
            onClick={() => onItemSelect(item)}
          >
            {item[text_property]}
          </li>
        ))}
      </ul>
    </div>
  );
};

ListGroup.defaultProps = {
  value_property: "_id",
  text_property: "name",
};

export default ListGroup;
