const Tiffin = require("./modals/Tiffin");
const { getDb } = require("./db.js");

async function addTiffin() {
  const newTiffin = new Tiffin({
    brand: "Red Panda",
    id: 1,
    rating: 5,
  });
  newTiffin
    .save()
    .then((item) => console.log(item))
    .catch((err) => console.log(err));
}

module.exports = { addTiffin };
