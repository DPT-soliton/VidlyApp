import React from "react";

const ListGroup = (props) => {
  const { items, onItemSelect, selected_item } = props;
  let count = 0;
  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item._id + (count += 1)}
            className={selected_item === item ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}
            onClick={() => onItemSelect(item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
