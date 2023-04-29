import { mockTeamRoster, mockTeamStats, mockTeams } from "../../../mocks/data";
import { getTeamById, getTeamRoster, getTeamStats, getTeams } from "./teams";

describe("teams", () => {
  const target = mockTeams[0];

  describe("getTeams", () => {
    it("should resolve to an array of NHLTeams", async () => {
      const results = await getTeams();

      expect(results).toEqual(mockTeams);
    });
  });

  describe("getTeamById", () => {
    it("should resolve to a single NHLTeam", async () => {
      const results = await getTeamById(target.id);

      expect(results).toEqual(target);
    });
  });

  describe("getTeamRoster", () => {
    it("should resolve to an array of NHLRosterPlayers", async () => {
      const results = await getTeamRoster(target.id);

      expect(results).toEqual(mockTeamRoster);
    });
  });

  describe("getTeamStats", () => {
    it("should resolve to an NHLTeamStats tuple", async () => {
      const results = await getTeamStats(target.id);

      expect(results).toEqual(mockTeamStats);
    });
  });
});
