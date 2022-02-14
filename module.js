const Table = require("./index");
const table = new Table({
  columns: ["Nomor", "Name", "Email", "Alamat"],
  data: [
    ["Edi Hartono", "edi.eduwork@gmail.com", "jakarta", 100],
    ["Dodi Prakoso", "dodi@upscale.id", "Bali", 90],
    ["Roni", "roni@gmail.com", "Kalimantan", 80],
  ],
});
const app = document.getElementById("app");
table.render(app);
