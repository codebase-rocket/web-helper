'use strict';


///////////////////////////Private Functions START//////////////////////////////

let DeviceManager = {

  /********************************************************************
  Get device location from browser

  @return {Map} - returns map wich latitude and longitude

  *********************************************************************/
  getDeviceLocation: function(callback) {
    if ("geolocation" in navigator) {
      // check if geolocation is supported/enabled on current browser
      navigator.geolocation.getCurrentPosition(
       function success(position) {

        callback(false, {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });

       },
      function error(error_message) {
        // for when getting location results in an error
        callback(true);
      }
    );
    } else {
      // geolocation is not supported
      // get your location some other way
      callback(true);

    }
  },
  /********************************************************************
  Check if device is mobile or tablet

  @return {String} - returns true if device type is mobile or tablet

  *********************************************************************/
  isMobile: function(device) {

    return device.isMobile();
  },

  /********************************************************************
  Check if device is mobile

  @return {String} - returns true if device type is mobile

  *********************************************************************/
  isMobileOnly: function(device) {

    return device.isMobileOnly();
  },


  /********************************************************************
  Check if device is tablet

  @return {String} - returns true if device type is tablet

  *********************************************************************/
  isTablet: function(device) {

    return device.isTablet();
  },


  /********************************************************************
  Check if device is tablet

  @return {String} - returns true if device type is tablet

  *********************************************************************/
  isTablet: function(device) {

    return device.isTablet();
  },


  /********************************************************************
  Check if device is desktop or laptop

  @return {String} - returns true if device type is desktop or laptop

  *********************************************************************/
  isBrowser: function(device) {

    return device.isBrowser();
  },


  /********************************************************************
  Check if device is android

  @return {String} - returns true if device type is android

  *********************************************************************/
  isAndroid: function(device) {

    return device.isAndroid();
  },

  /********************************************************************
  Check if device is ios

  @return {String} - returns true if device type is ios

  *********************************************************************/
  isIOS: function(device) {

    return device.isIOS();
  },

  /********************************************************************
  Check if device is windows phone

  @return {String} - returns true if device type is windows phone

  *********************************************************************/
  isWinPhone: function(device) {

    return device.isWinPhone();
  },

  /********************************************************************
  Check if device browser is chrome

  @return {String} - returns true if device browser is chrome

  *********************************************************************/
  isChrome: function(device) {

    return device.isChrome();
  },

  /********************************************************************
  Check if device browser is chrome

  @return {String} - returns true if device browser is chrome

  *********************************************************************/
  isChrome: function(device) {

    return device.isChrome();
  },

  /********************************************************************
  Check if device browser is chrome

  @return {String} - returns true if device browser is chrome

  *********************************************************************/
  isFirefox: function(device) {

    return device.isFirefox();
  },

  /********************************************************************
  Check if device browser is chrome

  @return {String} - returns true if device browser is chrome

  *********************************************************************/
  isSafari: function(device) {

    return device.isSafari();
  },

  /********************************************************************
  Check if device browser is opera

  @return {String} - returns true if device browser is opera

  *********************************************************************/
  isOpera: function(device) {

    return device.isOpera();
  },

  /********************************************************************
  Check if device browser is IE

  @return {String} - returns true if device browser is IE

  *********************************************************************/
  isIE: function(device) {

    return device.isIE();
  },

  /********************************************************************
  Check if device browser is edge

  @return {String} - returns true if device browser is edge

  *********************************************************************/
  isEdge: function(device) {

    return device.isEdge();
  },

  /********************************************************************
  Get user agent of device

  @return {String} - returns userAgent of device

  *********************************************************************/
  getUA: function(device) {

    return device.getUA();
  }


}

module.exports = DeviceManager;





////////////////////////////Private Functions END///////////////////////////////
