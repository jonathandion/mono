import type { Cast } from './cast'

export type ScriptStatus = 'resolved' | 'rejected'

export interface Events {
  'castStateChanged': CastState;
  'playerStateChanged': PlayerState;
  'status': ScriptStatus;
  'error': Error;
}

export interface PlayerState {
  volume: number;
  title: string | null;
  displayName: string | null;
  currentTime: number;
  imageUrl: string | null;
  isMuted: boolean;
  progress: number;
  isMediaLoaded: boolean;
  duration: number;
  mediaInfo: chrome.cast.media.MediaInfo | null;
  isPlaying: boolean;
  isPaused: boolean;
  isIdle: boolean;
  isBuffering: boolean;
}

export interface CastState {
  status: cast.framework.CastState;
  isConnecting: boolean;
  isConnected: boolean;
  noDevicesAvailable: boolean;
}

export interface Player {
  endCast: () => void;
  getState: () => PlayerState;
  seek: (seconds: number) => void;
  setVolume: (volume: number) => void;
  seekPercentage: (percentage: number) => void;
  startCast: (contentId: string, contentType?: string) => Promise<Promise<void>>;
  getFormattedTime: (timeInSec: number) => string;
  state: PlayerState;
  toggleMute: () => void;
  togglePlay: () => void;
  getProgress: () => number;
}

export type CastOptions = Omit<cast.framework.CastOptions, 'autoJoinPolicy'> & {
  autoJoinPolicy?: 'custom_controller_scoped' | 'tab_and_origin_scoped' | 'origin_scoped' | 'page_scoped';
}

export type CastInstance = Cast
