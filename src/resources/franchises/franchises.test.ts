import { mockFranchises } from "../../../mocks/data";
import { getFranchiseById, getFranchises } from "./franchises";

describe("franchises", () => {
  describe("getFranchises", () => {
    it("should resolve to an array of NHLFranchises", async () => {
      const results = await getFranchises();

      expect(results).toEqual(mockFranchises);
    });
  });

  describe("getFranchiseById", () => {
    it("should resolve to a single NHLFranchise", async () => {
      const target = mockFranchises[0];

      const results = await getFranchiseById(target.franchiseId);

      expect(results).toEqual(target);
    });
  });
});
