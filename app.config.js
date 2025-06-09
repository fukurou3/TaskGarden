import 'dotenv/config'; // .envファイルを読み込むために追加

export default {

  "expo": {
    "name": "TaskGarden",
    "slug": "TaskGarden",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "taskgarden",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "splash": {
      "image": "./assets/images/splash-icon.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "config": {
        "googleSignIn": {
          "clientId": process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID
        }
    },
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "edgeToEdgeEnabled": true
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      "expo-build-properties",
      "expo-localization",
      "expo-secure-store",
      "expo-sqlite",
      "expo-web-browser"
    ],
    "experiments": {
      "typedRoutes": true
    }
  }
}
