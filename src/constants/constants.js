import * as ICONS from "./icons";

const MARKER_IMG_SRC =
  "https://user-images.githubusercontent.com/45786387/120114352-c7323900-c1b9-11eb-8893-d1f93ccfef9d.png";

const NAV_ITEMS = [
  {
    name: "map",
    to: "/map",
    active: ICONS.NAV_MAP_ACTIVE,
    inactive: ICONS.NAV_MAP_INACTIVE,
  },
  {
    name: "video",
    to: "/video",
    active: ICONS.NAV_VIDEO_ACTIVE,
    inactive: ICONS.NAV_VIDEO_INACTIVE,
  },
  {
    name: "ranking",
    to: "/ranking",
    active: ICONS.NAV_RANKING_ACTIVE,
    inactive: ICONS.NAV_RANKING_INACTIVE,
  },
  {
    name: "my",
    to: "/my",
    active: ICONS.NAV_USER_ACTIVE,
    inactive: ICONS.NAV_USER_INACTIVE,
  },
];

export { MARKER_IMG_SRC, NAV_ITEMS };
