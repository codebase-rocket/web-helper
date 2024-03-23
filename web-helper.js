// Note: This file exports all public functions to application used as interface file

'use-strict'


var DeviceManager = require('./lib/device-manager.js');
var LocalStorageManager = require('./lib/local-storage-manager.js');


module.exports =  {

  "DeviceManager": DeviceManager,
  "LocalStorageManager": LocalStorageManager

}
