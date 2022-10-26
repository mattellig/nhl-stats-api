import {
  NHLConference,
  NHLDivision,
  NHLFranchise,
  NHLPlayer,
  NHLTeam,
} from "../src/types";

/* each function validates that one property exists from the full version of its respective
 * object type. as long as that property is included, the expanded resource has been
 * successfully requested */

function validateExpandedConference(conference: NHLConference) {
  expect(conference).toHaveProperty("abbreviation");
}

function validateExpandedDivision(division: NHLDivision) {
  expect(division).toHaveProperty("conference");
}

function validateExpandedFranchise(franchise: NHLFranchise) {
  expect(franchise).toHaveProperty("firstSeasonId");
}

function validateExpandedPlayer(player: NHLPlayer) {
  expect(player).toHaveProperty("firstName");
}

function validateExpandedTeam(team: NHLTeam) {
  expect(team).toHaveProperty("venue");
}

const validateExpanded: Record<string, (toValidate: any) => void> = {
  conference: validateExpandedConference,
  division: validateExpandedDivision,
  franchise: validateExpandedFranchise,
  player: validateExpandedPlayer,
  team: validateExpandedTeam,
};

export default validateExpanded;
