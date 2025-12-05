
export const BASE_TAB_CONFIG = [
  { id: "speakers" },
  { id: "photos" },
  { id: "videos" },
  { id: "gallery" },
] as const;

export type TabId = typeof BASE_TAB_CONFIG[number]["id"];

export interface BaseTabConfig {
  id: TabId;
}
