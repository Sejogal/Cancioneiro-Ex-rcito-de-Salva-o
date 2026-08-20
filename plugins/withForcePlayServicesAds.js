const { withProjectBuildGradle } = require('expo/config-plugins');

module.exports = function withForcePlayServicesAds(config) {
  return withProjectBuildGradle(config, (config) => {
    if (config.modResults.language === 'groovy') {
      config.modResults.contents += `
allprojects {
  configurations.all {
    resolutionStrategy {
      force 'com.google.android.gms:play-services-ads:24.9.0'
      force 'com.google.android.gms:play-services-ads-lite:24.9.0'
    }
  }
}
`;
    }
    return config;
  });
};