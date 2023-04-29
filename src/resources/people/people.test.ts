import { mockPlayerStats, mockPlayers } from "../../../mocks/data";
import { NHLPlayerStatsType } from "../../types";
import { getPlayerById, getPlayerStats } from "./people";

describe("people", () => {
  const target = mockPlayers[0];

  describe("getPlayerById", () => {
    it("should resolve to a single NHLPlayer", async () => {
      const results = await getPlayerById(target.id);

      expect(results).toEqual(target);
    });
  });

  describe("getPlayerStats", () => {
    it.each<NHLPlayerStatsType>([
      "byDayOfWeek",
      "byMonth",
      "goalsByGameSituation",
      "homeAndAway",
      "regularSeasonStatRankings",
      "statsSingleSeason",
      "vsConference",
      "vsDivision",
      "vsTeam",
      "winLoss",
    ])(
      "should resolve to the correct type with %s stats param",
      async (stats) => {
        const expectedValue = mockPlayerStats.filter(
          (mps) => mps.type.displayName === stats
        );

        const results = await getPlayerStats(target.id, stats);

        expect(results).toEqual(expectedValue);
      }
    );
  });
});
