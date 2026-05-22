// // import { Platform, View } from "react-native";
// // import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads";

// // const adUnitId = __DEV__
// //   ? TestIds.BANNER
// //   : Platform.OS === "android"
// //   ? "ca-app-pub-83308533909\40980~9847911330"
// //   : "ca-app-pub-8330853390940980~9847911330";

// // export default function BannerAds() {
// //   return (
// //     <View style={{ alignItems: "center" }}>
// //       <BannerAd
// //         unitId={adUnitId}
// //         size={BannerAdSize.BANNER}
// //         requestOptions={{ requestNonPersonalizedAdsOnly: true }}
// //       />
// //     </View>
// //   );
// // }



// import { View, Text, StyleSheet } from 'react-native';

// export default function BannerAdMock() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Publicidade</Text>
      
//       <View style={styles.banner}>
//         <Text style={styles.title}>🔥 Promoção Especial</Text>
//         <Text style={styles.subtitle}>Compre agora com 50% OFF</Text>
//         <Text style={styles.cta}>Saiba mais</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     alignItems: 'center',
//     marginVertical: 10,
//   },

//   label: {
//     fontSize: 10,
//     color: '#888',
//     alignSelf: 'flex-start',
//     marginLeft: 10,
//     marginBottom: 3,
//   },

//   banner: {
//     width: '95%',
//     height: 80,
//     backgroundColor: '#f5f5f5',
//     borderRadius: 10,
//     padding: 10,
//     justifyContent: 'center',
//     elevation: 3,
//   },

//   title: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#000',
//   },

//   subtitle: {
//     fontSize: 12,
//     color: '#555',
//     marginTop: 2,
//   },

//   cta: {
//     marginTop: 5,
//     fontSize: 12,
//     color: '#007BFF',
//     fontWeight: 'bold',
//   },
// });