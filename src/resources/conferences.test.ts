import { mockConferences } from "../../mocks/data";
import { getConferenceById, getConferences } from "./conferences";

describe("getConferences", () => {
  it("should resolve to an array of NHLConferences", async () => {
    const results = await getConferences();

    expect(results).toEqual(mockConferences);
  });
});

describe("getConferenceById", () => {
  it("should resolve to a single NHLConference", async () => {
    const target = mockConferences[0];

    const results = await getConferenceById(target.id);

    expect(results).toEqual(target);
  });
});
