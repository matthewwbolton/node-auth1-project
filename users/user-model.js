const db = require("../data/db-config");

module.exports = {
  find,
  findBy,
  findById,
  addUser,
};

function find() {
  return db.select("id", "username", "password").from("users");
}

function findBy(filter) {
  return db("users").where(filter);
}

function findById(user_id) {
  return db("users").where("id", user_id).first();
}

async function addUser(user) {
  const [id] = await db("users").insert(user, "id");

  return findById(id);
}

// function addUser(user) {
//   return db("users")
//     .insert(user, "id")
//     .then(([id]) => {
//       return findById(id);
//     });
// }
