/**
 * These expo packages may have side-effects and should not be lazy-initialized.
 */
'use strict';

module.exports = new Set([
  'expo',
  'expo-analytics-amplitude',
  'expo-analytics-segment',
  'expo-app-auth',
  'expo-asset',
  'expo-av',
  'expo-background-fetch',
  'expo-brightness',
  'expo-camera',
  'expo-constants',
  'expo-contacts',
  'expo-crypto',
  'expo-face-detector',
  'expo-facebook',
  'expo-file-system',
  'expo-font',
  'expo-gl',
  'expo-google-sign-in',
  'expo-haptics',
  'expo-image-manipulator',
  'expo-image-picker',
  'expo-intent-launcher',
  'expo-local-authentication',
  'expo-localization',
  'expo-location',
  'expo-media-library',
  'expo-permissions',
  'expo-random',
  'expo-secure-store',
  'expo-sensors',
  'expo-sms',
  'expo-speech',
  'expo-sqlite',
  'expo-task-manager',
  'expo-web-browser',
  'jest-expo',
]);
