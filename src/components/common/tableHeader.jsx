import React, { Component } from "react";

class TableHeader extends Component {
  /** Column: [] */
  /** sortColumn: object */
  /** onSort: function */
  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    if (column.path !== this.props.sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" aria-hidden="true"></i>;
    return <i className="fa fa-sort-desc" aria-hidden="true"></i>;
  };

  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    return (
      <thead className="thead-light">
        <tr>
          {this.props.columns.map((column) => (
            <th className="clickable" key={column.path || column.key} onClick={() => this.raiseSort(column.path)}>
              {column.label} {column.path ? this.renderSortIcon(column) : null}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
