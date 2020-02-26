# Keleya Frontend Challenge

React-Native frontend with Redux state management

## Running
* 'yarn install'
* generate debug.keystore:
	* 'keytool -genkey -v -keystore android/app/debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000'
* (one console:) npx react-native start 
* (other console:) npx react-native run-android

## Directory Structure
* reducers: contains reducers in separate files
* actions: contains actions in one file (could be separated in the future)
* screens: contains Screens and supplying files
	* styles.tsx: contains commonly shared styles
	* elements.tsx: commonly shared elements (e.g. Backgroud Image)
	* strings.json: contains all strings

## Notes
* styles: took out commonly shared styles to styles.tsx, left the screen-specific ones in the screen-related files

