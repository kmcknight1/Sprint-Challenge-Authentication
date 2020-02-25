const request = require("supertest");

const server = require("./server");

describe("server", () => {
  describe("GET /", () => {
    it("should return status 200 OK", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    it("should return data in JSON ", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toMatch(/json/);
          expect(res.type).toBe("application/json");
        });
    });
  });
});
