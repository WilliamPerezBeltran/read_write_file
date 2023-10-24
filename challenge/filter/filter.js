const data = [
  { id: 1, trade: "comercio1", active: true, lastSale: "08/01/1990" },
  { id: 2, trade: "comercio2", active: true, lastSale: "03/06/1974" },
  { id: 3, trade: "comercio3", active: true, lastSale: "23/08/1904" },
];

// convertir a

let newObject = {
  id: [1, 2, 3],
  trade: ["comercio1", "comercio2", "comercio3"],
  active: [true, true, true],
  lastSale: ["08/01/1990", "03/06/1974", "23/08/1904"],
};

// ===== solucion ========
// ===== solucion ========
// ===== solucion ========
// ===== solucion ========

const x = [
  { id: 1, trade: "comercio1", active: true, lastSale: "08/01/1990" },
  { id: 2, trade: "comercio2", active: true, lastSale: "03/06/1974" },
  { id: 3, trade: "comercio3", active: true, lastSale: "23/08/1904" },
];
let y = {};

x.forEach((obj) => {
  Object.keys(obj).forEach((key) => {
    y[key] = (y[key] || []).concat([obj[key]]);
  });
});

console.log(y);
