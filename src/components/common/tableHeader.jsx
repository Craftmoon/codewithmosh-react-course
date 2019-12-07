import React from "react";

const TableHeader = ({ onSort, columns, sortColumn }) => {
  const Sort = path => {
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    onSort(sortColumn);
  };

  const renderSortIcon = column => {
    if (column.path !== sortColumn.path) return;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>;
    else return <i className="fa fa-sort-desc"></i>;
  };

  return (
    <thead>
      <tr>
        {columns.map(column => (
          <th
            className="clickable"
            key={column.path || column.key}
            onClick={() => {
              Sort(column.path);
            }}
          >
            {column.label}
            {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
