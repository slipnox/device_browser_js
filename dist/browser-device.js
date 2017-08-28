'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

;(function (window) {
  var _documentElement$clas;

  var device = {};
  var documentElement = window.document.documentElement;
  var ua = window.navigator.userAgent.toLowerCase();
  var rotationTimeOut = void 0;
  var htmlClasses = void 0;
  var find = function find(deviceName) {
    return ua.indexOf(deviceName) !== -1;
  };

  // device methods
  device.iphone = function () {
    return !device.os.windows() && find('iphone');
  };
  device.ipod = function () {
    return find('ipod');
  };
  device.ipad = function () {
    return find('ipad');
  };
  device.android = function () {
    return !device.os.windows() && find('android');
  };
  device.desktop = function () {
    return !device.tablet() && !device.mobile();
  };
  device.mobile = function () {
    return device.type.androidPhone() || device.iphone() || device.ipod();
  };
  device.tablet = function () {
    return device.ipad() || device.type.androidTablet();
  };

  device.type = {
    androidPhone: function androidPhone() {
      return device.os.android() && find('mobile');
    },
    iosTablet: function iosTablet() {
      return device.ipad() && device.os.ios();
    },
    iosPhone: function iosPhone() {
      return device.iphone() && device.os.ios();
    },
    androidTablet: function androidTablet() {
      return device.os.android() && !find('mobile');
    },
    windowsTablet: function windowsTablet() {
      return device.os.windows() && find('touch') && !device.type.windowsPhone();
    },
    windowsPhone: function windowsPhone() {
      return device.os.windows() && find('phone');
    }
  };

  device.os = {
    android: function android() {
      return !device.os.windows() && find('android');
    },
    ios: function ios() {
      return device.iphone() || device.ipod() || device.ipad();
    },
    windows: function windows() {
      return find('windows');
    }
  };

  device.browser = {
    chrome: function chrome() {
      return find('chrome') && !find('edge') && !find('samsungbrowser');
    },
    firefox: function firefox() {
      return find('firefox');
    },
    ie: function ie() {
      return find('msie') || find('trident');
    },
    edge: function edge() {
      return find('edge') && find('chrome');
    },
    safari: function safari() {
      return find('safari') && !find('chrome');
    },
    safariDesktop: function safariDesktop() {
      return find('safari') && !device.mobile();
    },
    safariMobile: function safariMobile() {
      return !device.browser.safariDesktop() && !device.browser.samsungBrowser();
    },
    samsungBrowser: function samsungBrowser() {
      return find('samsungbrowser') && find('safari') && find('chrome');
    },
    iosChrome: function iosChrome() {
      return find('chrome') && device.os.ios();
    },
    androidChrome: function androidChrome() {
      return device.os.android() && device.browser.chrome();
    }
  };

  device.getOrientation = function () {
    return device.landscape() ? 'landscape' : 'portrait';
  };

  device.portrait = function () {
    return window.innerHeight / window.innerWidth > 1;
  };
  device.landscape = function () {
    return window.innerHeight / window.innerWidth < 1;
  };

  device.activeDesktopOtientation = function () {
    updateOrientationClass(device.getOrientation());
    orientationDetection();
  };

  // add devices clases
  switch (true) {
    case device.os.ios():
      device.ipad() ? htmlClasses = 'ios ipad tablet' : htmlClasses = 'ios iphone mobile';
      break;
    case device.os.android():
      device.type.androidTablet() ? htmlClasses = 'android tablet' : htmlClasses = 'android mobile';
      break;
    case device.os.windows():
      device.type.windowsTablet() ? htmlClasses = 'windows tablet' : false;
      device.type.windowsPhone() ? htmlClasses = 'windows mobile' : false;
      device.browser.ie() && device.desktop() ? find('trident') && find('rv:11') ? htmlClasses = 'desktop_ie11' : htmlClasses = 'desktop_ie10' : false;
      device.browser.edge() && device.desktop() ? htmlClasses = 'desktop edge' : false;
      device.browser.chrome() && device.desktop() ? htmlClasses = 'desktop chrome' : false;
      device.browser.firefox() && device.desktop() ? htmlClasses = 'desktop firefox' : false;
      device.browser.safari() && device.desktop() ? htmlClasses = 'desktop safari' : false;
      break;
    default:
      htmlClasses = 'unknow_device';
      break;
  }

  (_documentElement$clas = documentElement.classList).add.apply(_documentElement$clas, _toConsumableArray(htmlClasses.split(' ')));

  // FUNCTIONS
  // use oriatation change event listener or the resize event as al fallback
  var orientationDetection = function orientationDetection() {
    'onorientationchange' in window ? orientationChangeEventMode() : resizeEventMode();
  };

  // detect oriatation using resize event api
  var resizeEventMode = function resizeEventMode() {
    window.addEventListener('resize', function () {
      clearTimeout(rotationTimeOut);
      rotationTimeOut = setTimeout(function () {
        updateOrientationClass();
        clearTimeout(rotationTimeOut);
      }, 100);
    }, false);
  };

  // detect oriatation using oriatation change event api
  var orientationChangeEventMode = function orientationChangeEventMode() {
    window.addEventListener('orientationchange', function () {
      rotationTimeOut = setTimeout(function () {
        updateOrientationClass();
        clearTimeout(rotationTimeOut);
      }, 400);
    }, false);
  };

  // add rotation orientation classes
  var updateOrientationClass = function updateOrientationClass() {
    documentElement.classList.remove('landscape', 'portrait');
    documentElement.classList.add(device.getOrientation());
  };

  // enable oriatation detection on mobile devices
  if (device.mobile() || device.tablet()) {
    orientationDetection();
    updateOrientationClass(device.getOrientation());
  }

  // add device to window as a global object.
  window.device = device;
})(window);