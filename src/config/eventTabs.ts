import en from "../locales/en";


export const BASE_TAB_CONFIG = [
  en.eventDetailsTab.tabs.speakers,
  en.eventDetailsTab.tabs.photos,
  en.eventDetailsTab.tabs.videos,
  en.eventDetailsTab.tabs.gallery,
] as const;


export type TabId = typeof BASE_TAB_CONFIG[number]["id"];


export interface BaseTabConfig {
  id: TabId;
  name: string;
}
