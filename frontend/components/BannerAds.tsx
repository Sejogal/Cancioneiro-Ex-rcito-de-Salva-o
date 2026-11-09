import { StyleSheet, View } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
  ? TestIds.BANNER 
  : 'ca-app-pub-8330853390940980/8726889988';

export function AdBanner() {
  return (
    <View style={styles.container}>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{ requestNonPersonalizedAdsOnly: false }}
        onAdFailedToLoad={(error) => console.warn('Falha ao carregar anúncio:', error)}
      />
    </View>
  );
}



// export function AdBanner() {
//   return (
//     <View style={styles.container}>
//       {/* Placeholder for Ad Banner */}
//     </View>
//   );
// }


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
    width: '100%',
    maxWidth: 728,
    overflow: 'hidden',
  },
});
