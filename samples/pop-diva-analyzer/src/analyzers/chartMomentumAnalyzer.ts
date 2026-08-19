// Chart momentum analyzer — flags whoever's having a moment this quarter.

/** Scores how hard a pop girlie is currently having a moment. */
enum EraStatus {
  Rollout = "rollout",
  MainCharacter = "main-character",
  LegacyBop = "legacy-bop",
}

interface ArtistProfile {
  stageName: string;
  readonly debutYear: number;
  signatureTrack?: string;
}

const bratLowercasePattern = /^[a-z0-9\s]+$/;
const isLowercaseEraTitle = (value: string): boolean => bratLowercasePattern.test(value);

const rosterThisQuarter: ArtistProfile[] = [
  { stageName: "Charli XCX", debutYear: 2008, signatureTrack: "360" },
  { stageName: "Ariana Grande", debutYear: 2013, signatureTrack: "thank u, next" },
  { stageName: "Addison Rae", debutYear: 2023, signatureTrack: "Diet Pepsi" },
];

const stillCharting = rosterThisQuarter.filter((artist) => artist.signatureTrack !== undefined);

function recapEra(stageName: string, weeksCharting = 1): string {
  return `${stageName} has been in rotation for ${weeksCharting} week${weeksCharting === 1 ? "" : "s"} and counting.`;
}

switch (stillCharting.length) {
  case 0:
    console.warn(`no active eras this quarter... harsh, but the streams don't lie`);
    break;
  default:
    console.log(recapEra(stillCharting[0].stageName, stillCharting.length));
}

export { EraStatus, isLowercaseEraTitle, rosterThisQuarter };
