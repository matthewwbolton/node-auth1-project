exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users").then(function () {
    // Inserts seed entries
    return knex("users").insert([
      { username: "matthew", password: "Password1" },
      { username: "chris", password: "Password2" },
      { username: "jessica", password: "Password3" },
      { username: "jaybaker", password: "Password4" },
    ]);
  });
};
