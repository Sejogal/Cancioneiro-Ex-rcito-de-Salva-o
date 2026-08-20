// components/AdBanner.tsx
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ 
  ? TestIds.BANNER 
  : 'ca-app-pub-1187615526527426/3036134514'; // teu ID real de produção

export function AdBanner() {
  return (
    <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: false,
      }}
    />
  );
}