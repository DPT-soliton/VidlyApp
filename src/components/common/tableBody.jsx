import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    else {
      return _.get(item, column.path);
    }
  };

  create_uniqueKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={this.create_uniqueKey(item, column)}>{this.renderCell(item, column)}</td>
            ))}
          </tr>
        ))}
        {/* {movies.map((m) => (
          <tr key={m._id}>
            <td>{m.title}</td>
            <td>{m.genre.name}</td>
            <td>{m.numberInStock}</td>
            <td>{m.dailyRentalRate}</td>
            <td>
              <Like liked={m.liked} onLike={() => onLike(m)} />
            </td>
            <td>
              <button className="btn btn-danger btn-sm" onClick={() => onDelete(m._id)}>
                Delete
              </button>
            </td>
          </tr>
        ))} */}
      </tbody>
    );
  }
}

export default TableBody;
