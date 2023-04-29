import { mockDivisions } from "../../../mocks/data";
import { getDivisionById, getDivisions } from "./divisions";

describe("divisions", () => {
  describe("getDivisions", () => {
    it("should resolve to an array of NHLDivisions", async () => {
      const results = await getDivisions();

      expect(results).toEqual(mockDivisions);
    });
  });

  describe("getDivisionById", () => {
    it("should resolve to a single NHLDivision", async () => {
      const target = mockDivisions[0];

      const results = await getDivisionById(target.id);

      expect(results).toEqual(target);
    });
  });
});
