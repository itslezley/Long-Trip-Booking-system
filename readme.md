## Run this
1. npm install -g expo-cli
2. expo init MSMovers
    - select blank
3. cd MSMovers
4. npm startnp,

### Install eas CLI
- Helps when you want to publish app to app store.
- Create a development, preview, or production build of your app
- Create over-the-air (OTA) updates
- Manage your app credentials
- Create an ad hoc provisioning profile for an iOS device.

`npm install -g eas-cli`

deliveryApp/                # root project folder
│
├── assets/                 # images, fonts, icons
│   └── scooter.png         # your delivery scooter illustration
│
├── src/                    # all your code lives here
│   ├── components/         # reusable UI components (buttons, inputs, etc.)
│   │   ├── CustomInput.js
│   │   └── CustomButton.js
│   │
│   ├── screens/            # app screens
│   │   └── LoginScreen.js
│   │
│   ├── navigation/         # navigation setup (if using React Navigation later)
│   │   └── AppNavigator.js
│   │
│   └── styles/             # shared styles (colors, fonts, spacing)
│       └── colors.js
│
├── App.js                  # entry point (loads LoginScreen first)
├── package.json
└── app.json
