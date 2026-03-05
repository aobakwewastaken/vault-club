/**
 * Asset paths for public folder. Use encodeURIComponent for filenames with spaces/special chars.
 */

const run = (name: string) => `/runs/${encodeURIComponent(name)}`;
const community = (name: string) => `/community/${encodeURIComponent(name)}`;
const hero = (name: string) => `/hero/${encodeURIComponent(name)}`;

export const RUN_IMAGES = {
  /** Upcoming Saturday run (The Grindza collab) */
  upcoming: run(
    "This Saturday, join us.In collaboration with @thegrindza cafe.All runners welcome.Arrival time 0.jpg"
  ),
  /** Past run – Sunday Long Runs */
  past: [
    run(
      "VSC® Sunday Long Runs are here.As the community grows and gets stronger, we raise the standard.T.jpg"
    ),
    run(
      "VSC® Sunday Long Runs are here.As the community grows and gets stronger, we raise the standard.T (1).jpg"
    ),
    run(
      "VSC® Sunday Long Runs are here.As the community grows and gets stronger, we raise the standard.T (2).jpg"
    ),
  ],
} as const;

const COMMUNITY_BASE =
  "COMMUNITY  EVERYTHING. 🔐🖤 This was never just about a run. It was about showing up for somethi";

/** Single community image for homepage low-opacity background */
export const COMMUNITY_HOMEPAGE_BG = community(`${COMMUNITY_BASE}.jpg`);

export const COMMUNITY_PHOTOS = [
  community(`${COMMUNITY_BASE}.jpg`),
  community(`${COMMUNITY_BASE} (1).jpg`),
  community(`${COMMUNITY_BASE} (2).jpg`),
  community(`${COMMUNITY_BASE} (3).jpg`),
  community(`${COMMUNITY_BASE} (4).jpg`),
  community(`${COMMUNITY_BASE} (5).jpg`),
  community(`${COMMUNITY_BASE} (6).jpg`),
] as const;

export const HERO_IMAGES = [
  hero("DSC02458.jpg"),
  hero("DSC02597.jpg"),
  hero("DSC02665.jpg"),
  hero("18020023.jpg"),
  hero("18020061.jpg"),
  hero("18028972.jpg"),
] as const;
