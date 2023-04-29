import { mockSeasons } from "../../../mocks/data";
import { getSeasonById, getSeasons } from "./seasons";

describe("seasons", () => {
  describe("getSeasons", () => {
    it("should resolve to an array of NHLSeasons", async () => {
      const results = await getSeasons();

      expect(results).toEqual(mockSeasons);
    });
  });

  describe("getSeasonById", () => {
    it("should resolve to a single NHLSeason", async () => {
      const target = mockSeasons[0];

      const results = await getSeasonById(target.seasonId);

      expect(results).toEqual(target);
    });

    it('should retrieve the latest season with an ID of "current"', async () => {
      const target = mockSeasons[mockSeasons.length - 1];

      const results = await getSeasonById("current");

      expect(results).toEqual(target);
    });
  });
});
