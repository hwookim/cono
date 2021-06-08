import ICONS from "./icons";

const MARKER_IMG =
  "https://github.com/hwookim/cono-client/blob/master/src/assets/marker.png?raw=true";

const NAV_ITEMS = [
  {
    name: "map",
    to: "/map",
    active: ICONS.NAV_MAP_ACTIVE,
    inactive: ICONS.NAV_MAP_INACTIVE,
    disabled: false,
  },
  {
    name: "video",
    to: "/video",
    active: ICONS.NAV_VIDEO_ACTIVE,
    inactive: ICONS.NAV_VIDEO_INACTIVE,
    disabled: true,
  },
  {
    name: "ranking",
    to: "/ranking",
    active: ICONS.NAV_RANKING_ACTIVE,
    inactive: ICONS.NAV_RANKING_INACTIVE,
    disabled: true,
  },
  {
    name: "my",
    to: "/my",
    active: ICONS.NAV_USER_ACTIVE,
    inactive: ICONS.NAV_USER_INACTIVE,
    disabled: true,
  },
];

export { MARKER_IMG, NAV_ITEMS };
