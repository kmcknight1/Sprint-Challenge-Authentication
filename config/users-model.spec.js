const db = require("../database/dbConfig");

const Users = require("./users-model");

describe("users model", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("add()", () => {
    it("should insert the user into the db", async () => {
      await Users.add({ username: "joe", password: "password" });

      const users = await db("users");

      expect(users).toHaveLength(1);
    });
  });
});
