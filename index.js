class Table {
  constructor(init) {
    this.init = init;
  }

  createHeader(data) {
    let open = "<thead><tr>";
    let close = "</tr></thead>";
    data.forEach((d) => {
      open += `<th>${d}</th>`;
    });

    return open + close;
  }

  createBody(data) {
    let open = "<tbody>";
    let close = "</tbody>";
    let no = 0;

    data.forEach((d) => {
      no++;
      open += `
          <tr>
            <td>${no}</td>
            <td>${d[0]}</td>
            <td>${d[1]}</td>
            <td>${d[2]}</td>  
          </tr>
        `;
    });

    return open + close;
  }

  render(element) {
    let table = "<table class='table table-hover' border='5'>" + this.createHeader(this.init.columns) + this.createBody(this.init.data) + "</table>";
    element.innerHTML = table;
  }
}

// module.exports = { Table };

export default Table;
