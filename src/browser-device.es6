;((window) => {
  const device = {}
  const documentElement = window.document.documentElement
  const ua = window.navigator.userAgent.toLowerCase()
  let rotationTimeOut
  let htmlClasses
  const find = (deviceName) => {
    return ua.indexOf(deviceName) !== -1
  }

  // LIBRARY METHODS
  device.iphone = () => !device.os.windows() && find('iphone')
  device.ipod = () => find('ipod')
  device.ipad = () => find('ipad')
  device.android = () => !device.os.windows() && find('android')
  device.desktop = () => !device.tablet() && !device.mobile()
  device.mobile = () => device.type.androidPhone() || device.iphone() || device.ipod()
  device.tablet = () => device.ipad() || device.type.androidTablet()

  device.type = {
    androidPhone: () => device.os.android() && find('mobile'),
    iosTablet: () => device.ipad() && device.os.ios(),
    iosPhone: () => device.iphone() && device.os.ios(),
    androidTablet: () => device.os.android() && !find('mobile'),
    windowsTablet: () => device.os.windows() && (find('touch') && !device.type.windowsPhone()),
    windowsPhone: () => device.os.windows() && find('phone')
  }

  device.os = {
    android: () => !device.os.windows() && find('android'),
    ios: () => device.iphone() || device.ipod() || device.ipad(),
    windows: () => find('windows')
  }

  device.browser = {
    chrome: () => find('chrome') && !find('edge') && !find('samsungbrowser'),
    firefox: () => find('firefox'),
    ie: () => find('msie') || find('trident'),
    edge: () => find('edge') && find('chrome'),
    safari: () => find('safari') && !find('chrome'),
    safariDesktop: () => find('safari') && !device.mobile(),
    safariMobile: () => !device.browser.safariDesktop() && !device.browser.samsungBrowser(),
    samsungBrowser: () => find('samsungbrowser') && find('safari') && find('chrome'),
    iosChrome: () => find('chrome') && device.os.ios(),
    androidChrome: () => device.os.android() && device.browser.chrome()
  }

  device.getOrientation = () => {
    return device.landscape() ? 'landscape' : 'portrait'
  }

  device.portrait = () => window.innerHeight / window.innerWidth > 1
  device.landscape = () => window.innerHeight / window.innerWidth < 1

  device.activeDesktopOtientation = () => {
    updateOrientationClass(device.getOrientation())
    orientationDetection()
  }

  // CLASSES TO APPLY ON HTML TAG
  switch (true) {
    case device.os.ios():
      device.ipad()
        ? (htmlClasses = 'ios ipad tablet')
        : (htmlClasses = 'ios iphone mobile')
      break
    case device.os.android():
      device.type.androidTablet()
        ? (htmlClasses = 'android tablet')
        : (htmlClasses = 'android mobile')
      break
    case device.os.windows():
      device.type.windowsTablet() ? (htmlClasses = 'windows tablet') : false
      device.type.windowsPhone() ? (htmlClasses = 'windows mobile') : false
      device.browser.ie() && device.desktop()
        ? find('trident') && find('rv:11') ? (htmlClasses = 'desktop_ie11') : (htmlClasses = 'desktop_ie10')
      : false
      device.browser.edge() && device.desktop() ? (htmlClasses = 'desktop edge') : false
      device.browser.chrome() && device.desktop() ? (htmlClasses = 'desktop chrome') : false
      device.browser.firefox() && device.desktop() ? (htmlClasses = 'desktop firefox') : false
      device.browser.safari() && device.desktop() ? (htmlClasses = 'desktop safari') : false
      break
    default:
      htmlClasses = 'unknow_device'
      break
  }

  documentElement.classList.add(...htmlClasses.split(' '))

  // FUNCTIONS
  const orientationDetection = () => {
    ('onorientationchange' in window)
    ? orientationChangeEventMode()
    : resizeEventMode()
  }

  const resizeEventMode = () => {
    window.addEventListener('resize', () => {
      clearTimeout(rotationTimeOut)
      rotationTimeOut = setTimeout(() => {
        updateOrientationClass()
        clearTimeout(rotationTimeOut)
      }, 100)
    }, false)
  }

  const orientationChangeEventMode = () => {
    window.addEventListener('orientationchange', () => {
      rotationTimeOut = setTimeout(() => {
        updateOrientationClass()
        clearTimeout(rotationTimeOut)
      }, 400)
    }, false)
  }

  const updateOrientationClass = () => {
    documentElement.classList.remove('landscape', 'portrait')
    documentElement.classList.add(device.getOrientation())
  }

  if (device.mobile()) {
    orientationDetection()
    updateOrientationClass(device.getOrientation())
  }

  window.device = device
})(window)
