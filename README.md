# __DEVICE AND BROWSER JS__
### A minimalistic devices and browsers detection library. ######

> Inspired by the matthewhudson's [DEVICE.JS](https://github.com/matthewhudson/device.js) repo, this library with only 4kb is able to
> detect the most popular devices and web browsers, making easy to write specific CSS dealing with the respective orientation or just write conditional JavaScript.

#   How it works?

The library will attach some CSS classes to the html tag element of the document website and create a new `device` object attached to the global window object.

## SUPPORTS

__BROWSERS DETECTION:__

- Chrome
- Firefox
- Safari
- MS Edge
- MSIE [10, 11]

__DEVICES DETECTION:__

- iPhone
- iPad
- Android (mobile and tablet)
- WINDOWS (mobile and tablet)
- DESKTOP

__OS DETECTION:__

- iOS
- Windows
- Android



### **CSS CLASS LIST**

CSS classes that are added based on device and orientation.

#### Device CSS Class Names

<table>
	<tr>
		<th>CSS Classes</th>
	</tr>
	<tr>
		<td>iPad</td>
		<td>ios ipad tablet</td>
	</tr>
	<tr>
		<td>iPhone</td>
		<td>ios iphone mobile</td>
	</tr>
	<tr>
		<td>iPod</td>
		<td>ios ipod mobile</td>
	</tr>
	<tr>
		<td>Android Phone</td>
		<td>android mobile</td>
	</tr>
	<tr>
		<td>Android Tablet</td>
		<td>android tablet</td>
	</tr>
	<tr>
		<td>Windows Phone</td>
		<td>windows mobile</td>
	</tr>
	<tr>
		<td>Windows Tablet</td>
		<td>windows tablet</td>
	</tr>
	<tr>
		<td>Desktop Chrome</td>
		<td>desktop chrome</td>
	</tr>
  <tr>
		<td>Desktop Firefox</td>
		<td>desktop firefox</td>
	</tr>
  <tr>
		<td>Desktop Safari</td>
		<td>desktop safari</td>
	</tr>
  <tr>
		<td>Desktop Edge</td>
		<td>desktop edge</td>
	</tr>
  <tr>
		<td>Desktop IE11</td>
		<td>desktop_ie11</td>
	</tr>
  <tr>
		<td>Desktop IE10</td>
		<td>desktop_ie10</td>
	</tr>
</table>

#### Orientation CSS Class Names

<table>
	<tr>
		<th>Orientation</th>
		<th>CSS Classes</th>
	</tr>
	<tr>
		<td>Landscape</td>
		<td>landscape</td>
	</tr>
	<tr>
		<td>Portrait</td>
		<td>portrait</td>
	</tr>
</table>

### **CONDITIONAL JAVASCRIPT**

For JavaScript the main device object allows you to checks the following characteristics:

### Device JavaScript Methods

<table>
	<tr>
		<th>Device</th>
		<th>JavaScript Method</th>
	</tr>
	<tr>
		<td>Mobile</td>
		<td>device.mobile()</td>
	</tr>
  <tr>
		<td>Desktop</td>
		<td>device.desktop()</td>
	</tr>
	<tr>
		<td>Tablet</td>
		<td>device.tablet()</td>
	</tr>
	<tr>
		<td>iOS</td>
		<td>device.ios()</td>
	</tr>
	<tr>
		<td>Android</td>
		<td>device.android()</td>
	</tr>
	<tr>
		<td>Windows</td>
		<td>device.windows()</td>
	</tr>
	<tr>
		<td>iPad</td>
		<td>device.ipad()</td>
	</tr>
	<tr>
		<td>iPhone</td>
		<td>device.iphone()</td>
	</tr>
	<tr>
		<td>iPod</td>
		<td>device.ipod()</td>
	</tr>
	<tr>
		<td>Andriod Phone</td>
		<td>device.type.androidPhone()</td>
	</tr>
	<tr>
		<td>iOS Tablet</td>
		<td>device.type.iosTablet()</td>
	</tr>
	<tr>
		<td>iOS Phone</td>
		<td>device.type.iosTablet()</td>
	</tr>
	<tr>
		<td>Android Tablet</td>
		<td>device.type.androidTablet()</td>
	</tr>
	<tr>
		<td>Windows Tablet</td>
		<td>device.type.windowsTablet()</td>
	</tr>
	<tr>
		<td>Windows Phone</td>
		<td>device.type.windowsPhone()</td>
	</tr>
	<tr>
		<td>Chrome Browser</td>
		<td>device.chrome()</td>
	</tr>
	<tr>
		<td>Firefox Browser</td>
		<td>device.firefox()</td>
	</tr>
	<tr>
		<td>IE Browser</td>
		<td>device.ie()</td>
	</tr>
	<tr>
		<td>Edge Browser</td>
		<td>device.edge()</td>
	</tr>
	<tr>
		<td>Safari Browser</td>
		<td>device.safari()</td>
	</tr>
	<tr>
		<td>Safari Desktop</td>
		<td>device.safariDesktop()</td>
	</tr>
	<tr>
		<td>Safari Mobile</td>
		<td>device.safariMobile()</td>
	</tr>
	<tr>
		<td>Samsung Browser (the elusive)</td>
		<td>device.samsungBrowser()</td>
	</tr>
	<tr>
		<td>iOS Chrome Browser</td>
		<td>device.iosChrome()</td>
	</tr>
	<tr>
		<td>Android Chrome Browser</td>
		<td>device.androidChrome()</td>
	</tr>
</table>

### Orientation JavaScript Methods

<table>
	<tr>
		<th>Orientation</th>
		<th>JavaScript Method</th>
	</tr>
	<tr>
		<td>Landscape</td>
		<td>device.landscape()</td>
	</tr>
	<tr>
		<td>Portrait</td>
		<td>device.portrait()</td>
	</tr>
	<tr>
		<td>Current Orientation Name</td>
		<td>device.getOrientation()</td>
	</tr>
	<tr>
		<td>Enable Orientation on Desktops</td>
		<td>device.activeDesktopOtientation()</td>
	</tr>
</table>

### **NOTES**

**N1**: _As desktops computers does not rotate screens so often lol :), the orientation feature comes disabled by default if you need this feature on desktop you can enable it invoking the method: `device.activeDesktopOtientation()`_

**N2**: _This library relies on the user agent parsing approach and is not perfect. If you find any bugs please summit a ticket and I will fixed ASAP._

**N3**: _Maybe be for some of you guys the library is lacking or missing some super cool features but keep in main that the main idea behind this if keep everything under 5kb as a challenge._

### If you want to contribute

* Fork it
* Create your feature branch
* Make change(s)
* Commit your changes
* Push to the branch
* Create new Pull Request
* Review and marge