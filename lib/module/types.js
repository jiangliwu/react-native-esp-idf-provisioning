export let ESPTransport = /*#__PURE__*/function (ESPTransport) {
  ESPTransport["ble"] = "ble";
  ESPTransport["softap"] = "softap";
  return ESPTransport;
}({});
export let ESPSecurity = /*#__PURE__*/function (ESPSecurity) {
  ESPSecurity[ESPSecurity["unsecure"] = 0] = "unsecure";
  ESPSecurity[ESPSecurity["secure"] = 1] = "secure";
  ESPSecurity[ESPSecurity["secure2"] = 2] = "secure2";
  return ESPSecurity;
}({});
export let ESPWifiAuthMode = /*#__PURE__*/function (ESPWifiAuthMode) {
  ESPWifiAuthMode[ESPWifiAuthMode["open"] = 0] = "open";
  ESPWifiAuthMode[ESPWifiAuthMode["wep"] = 1] = "wep";
  ESPWifiAuthMode[ESPWifiAuthMode["wpa2Enterprise"] = 2] = "wpa2Enterprise";
  ESPWifiAuthMode[ESPWifiAuthMode["wpa2Psk"] = 3] = "wpa2Psk";
  ESPWifiAuthMode[ESPWifiAuthMode["wpaPsk"] = 4] = "wpaPsk";
  ESPWifiAuthMode[ESPWifiAuthMode["wpaWpa2Psk"] = 5] = "wpaWpa2Psk";
  ESPWifiAuthMode[ESPWifiAuthMode["wpa3Psk"] = 6] = "wpa3Psk";
  ESPWifiAuthMode[ESPWifiAuthMode["wpa2Wpa3Psk"] = 7] = "wpa2Wpa3Psk";
  return ESPWifiAuthMode;
}({});
//# sourceMappingURL=types.js.map