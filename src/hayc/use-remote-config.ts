import {
  siteConfig,
  digitalProductsConfig,
  navigationConfig,
  footerConfig,
  homePageConfig,
  reikiPageConfig,
  selfAwarenessPageConfig,
  cacaoPageConfig,
  dancePageConfig,
  groupMeditationPageConfig,
  seminarsPageConfig,
  type DigitalProductsConfig,
  type NavigationConfig,
  type FooterConfig,
  type HomePageConfig,
  type ReikiPageConfig,
  type SelfAwarenessPageConfig,
  type CacaoPageConfig,
  type DancePageConfig,
  type GroupMeditationPageConfig,
  type SeminarsPageConfig,
} from '../config';

export interface RemoteConfig {
  version: number;
  exportedAt: string;
  siteConfig: typeof siteConfig;
  digitalProductsConfig?: DigitalProductsConfig;
  navigationConfig: NavigationConfig;
  footerConfig: FooterConfig;
  homePageConfig: HomePageConfig;
  reikiPageConfig: ReikiPageConfig;
  selfAwarenessPageConfig: SelfAwarenessPageConfig;
  cacaoPageConfig: CacaoPageConfig;
  dancePageConfig: DancePageConfig;
  groupMeditationPageConfig: GroupMeditationPageConfig;
  seminarsPageConfig: SeminarsPageConfig;
}

export const defaultConfig: RemoteConfig = {
  version: 1,
  exportedAt: '',
  siteConfig,
  digitalProductsConfig,
  navigationConfig,
  footerConfig,
  homePageConfig,
  reikiPageConfig,
  selfAwarenessPageConfig,
  cacaoPageConfig,
  dancePageConfig,
  groupMeditationPageConfig,
  seminarsPageConfig,
};

export async function fetchRemoteConfig(): Promise<RemoteConfig> {
  // In development, use config.ts directly for instant updates
  if (import.meta.env.DEV) {
    return defaultConfig;
  }

  // In production, fetch from remote config.json
  try {
    const res = await fetch('/hayc/config.json');
    if (!res.ok) throw new Error('Failed to fetch config: ' + res.status);
    const data = await res.json();
    return data as RemoteConfig;
  } catch (err) {
    console.warn('[HAYC] Remote config fetch failed, using default config.', err);
    return defaultConfig;
  }
}
