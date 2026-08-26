const { withProjectBuildGradle } = require('expo/config-plugins');

module.exports = function withForcePlayServicesAds(config) {
  return withProjectBuildGradle(config, (config) => {
    if (config.modResults.language === 'groovy') {
      config.modResults.contents += `
allprojects {
  configurations.all {
    resolutionStrategy {
      force 'com.google.android.gms:play-services-ads:25.4.0'
      force 'com.google.android.gms:play-services-ads-lite:25.4.0'
    }
  }
  tasks.withType(org.jetbrains.kotlin.gradle.tasks.KotlinCompile).configureEach {
    kotlinOptions {
      freeCompilerArgs += ["-Xskip-metadata-version-check"]
    }
  }
}
`;
    }
    return config;
  });
};