# React Native `fetch` memory leak in 0.59.0-rc.3 and earlier versions

This is a pretty severe memory leak.

- I've confirmed that this is happening in 0.57.8, 0.58.6, and 0.59.0-rc.3.
- I've tried this with both `node-fetch` and `whatwg-fetch` and it happens using both libraries.
- It is not isolated to `response.blob()`. It affects all types of responses.
- It happens with both Release and Debug.
- I've only tried this on iOS.

![Screenshot](/screenshot.png)

This is possibly related to, but different from:
- https://github.com/facebook/react-native/issues/20352
- https://github.com/facebook/react-native/issues/19248
- https://github.com/facebook/react-native/pull/19333
- https://github.com/expo/expo/issues/2402
