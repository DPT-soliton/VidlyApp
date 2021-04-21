import React from "react";

const ListGroup = (props) => {
  const { items, onItemSelect, selected_item, id_property, name_property } = props;
  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item[id_property]}
            className={selected_item === item ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}
            onClick={() => onItemSelect(item)}
          >
            {item[name_property]}
          </li>
        ))}
      </ul>
    </div>
  );
};

ListGroup.defaultProps = {
  id_property: "_id",
  name_property: "name",
};
export default ListGroup;
