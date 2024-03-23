'use strict';


///////////////////////////Private Functions START//////////////////////////////
let AppStorageManager = {


  /********************************************************************
  Save string in local storage of browser

  @param key {String} - a constant which will be used as identifier while retriving or editing value
  @param value {String} - string what we will saving in local storage
  @param cb {function} - callback function

  *********************************************************************/

  saveStringAppStorage: function async(localStorage, key, value, cb){
    try {
      localStorage.setItem(key, value); // saving value mapped with key

      cb(true);

    } catch (error){

      cb(false, error);
    }
  },


  /********************************************************************
  Save object in local storage of browser

  @param key {String} - a constant which will be used as identifier while retriving or editing value
  @param value {Object} - string what we will saving in local storage
  @param cb {function} - callback function

  *********************************************************************/

  saveObjectAppStorage: function async(localStorage, key, value, cb){
    try {

      localStorage.setItem(key, JSON.stringify(value)); // saving value mapped with key

      cb(true);

    } catch (error){

      cb(false, error);
    }
  },


  /********************************************************************
  get string from local storage

  @param key {String} - a constant which will be used as identifier while retriving or editing value
  @param cb {function} - callback function

  *********************************************************************/

  getStringAppStorage: function async(localStorage, key, cb){
    try {

      let value = localStorage.getItem(key); // saving value mapped with key

      //If value found return value in success callback function if not found return with failed callback
      if (value !== null) {

        cb(true, value);

      }else{

        cb(false);

      }

    } catch (error){

        cb(false, error);

    }
  },

  /********************************************************************
  get string from local storage

  @param key {String} - a constant which will be used as identifier while retriving or editing value
  @param cb {function} - callback function

  *********************************************************************/

  getStringAppStorage: function async(localStorage, key, cb){
    try {

      let value = localStorage.getItem(key); // saving value mapped with key

      //If value found return value in success callback function if not found return with failed callback
      if (value !== null) {

        cb(true, value);

      }else{

        cb(false);

      }

    } catch (error){

      cb(false, error)

    }
  },


  /********************************************************************
  get object from local storage

  @param key {String} - a constant which will be used as identifier while retriving or editing value
  @param cb {function} - callback function

  *********************************************************************/

  getObjectAppStorage: function async(localStorage, key, cb){
    try {

      let value = localStorage.getItem(key); // saving value mapped with key

      //If value found && value is an valid object then return value in success callback function if not found return with failed callback
      if (value !== null && typeof value === 'object') {

        cb(true, JSON.parse(value));

      }else{

        cb(false);

      }

    } catch (error){

        cb(false, error);

    }
  },


  /********************************************************************
  remove value from local storage

  @param key {String} - a constant which will be used as identifier while retriving or editing value
  @param cb {function} - callback function

  *********************************************************************/

  deleteValueAppStorage: function async(localStorage, key, cb){
    try {

      localStorage.removeItem(
          key,
          function(status){

              status ? cb(true) : cb(false);

          }
      );

    } catch (error){

      cb(false, error);

    }
  }

}

module.exports = AppStorageManager;


////////////////////////////Private Functions END///////////////////////////////
