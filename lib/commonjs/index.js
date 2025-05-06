"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ESPProvisionManager = exports.ESPDevice = void 0;
Object.defineProperty(exports, "ESPSecurity", {
  enumerable: true,
  get: function () {
    return _types.ESPSecurity;
  }
});
Object.defineProperty(exports, "ESPTransport", {
  enumerable: true,
  get: function () {
    return _types.ESPTransport;
  }
});
Object.defineProperty(exports, "ESPWifiAuthMode", {
  enumerable: true,
  get: function () {
    return _types.ESPWifiAuthMode;
  }
});
var _reactNative = require("react-native");
var _buffer = require("buffer");
var _types = require("./types");
const LINKING_ERROR = `The package 'react-native-esp-idf-provisioning' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;
const EspIdfProvisioningModule = isTurboModuleEnabled ? require('./NativeEspIdfProvisioning').default : _reactNative.NativeModules.EspIdfProvisioning;
const EspIdfProvisioning = EspIdfProvisioningModule ? EspIdfProvisioningModule : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
class ESPDevice {
  /**
   * Create a new ESPDevice instance.
   * @param name - The name of the device.
   * @param transport - The transport type to use for the device.
   * @param security - The security type to use for the device.
   */
  constructor({
    name,
    transport = _types.ESPTransport.ble,
    security = _types.ESPSecurity.secure2
  }) {
    this.name = name;
    this.transport = transport;
    this.security = security;
  }

  /**
   * Connect to the device.
   * @param proofOfPossession The proof of possession to use for the device.
   * @param softAPPassword The soft AP password to use for the device.
   * @param username The username to use for the device.
   * @returns A promise that resolves when the device is connected.
   */
  async connect(proofOfPossession = null, softAPPassword = null, username = null) {
    await EspIdfProvisioning.createESPDevice(this.name, this.transport, this.security, proofOfPossession, softAPPassword, username);
    const response = await EspIdfProvisioning.connect(this.name);
    return response;
  }

  /**
   * Send data to the device.
   * @param path The path to send the data to.
   * @param data The data to send. The data should be a string. The data will be transferred with base64 encoding.
   * @returns A promise that resolves with the response data.
   */
  async sendData(path, data) {
    const base64Data = _buffer.Buffer.from(data).toString('base64');
    return EspIdfProvisioning.sendData(this.name, path, base64Data).then(returnData => _buffer.Buffer.from(returnData, 'base64').toString('utf8'));
  }

  /**
   * Scan for WiFi networks.
   * @returns A promise that resolves with the list of WiFi networks.
   */
  async scanWifiList() {
    return EspIdfProvisioning.scanWifiList(this.name);
  }

  /**
   * Disconnect from the device.
   */
  disconnect() {
    return EspIdfProvisioning.disconnect(this.name);
  }

  /**
   * Provision the device with the given SSID and passphrase.
   * @param ssid The SSID to use for the device.
   * @param passphrase The passphrase to use for the device.
   * @returns A promise that resolves with the status response.
   */
  async provision(ssid, passphrase) {
    return EspIdfProvisioning.provision(this.name, ssid, passphrase);
  }

  /**
   * Get the proof of possession for the device.
   * @returns A promise that resolves with the proof of possession.
   */
  async getProofOfPossession() {
    return EspIdfProvisioning.getProofOfPossession(this.name);
  }

  /**
   * Set the proof of possession for the device.
   * @param proofOfPossession The proof of possession to set.
   * @returns A promise that resolves when the proof of possession is set.
   */
  async setProofOfPossession(proofOfPossession) {
    await EspIdfProvisioning.setProofOfPossession(this.name, proofOfPossession);
    return this;
  }

  /**
   * Get the username for the device.
   * @returns A promise that resolves with the username.
   */
  async getUsername() {
    return EspIdfProvisioning.getUsername(this.name);
  }

  /**
   * Set the username for the device.
   * @param username The username to set.
   * @returns A promise that resolves when the username is set.
   */
  async setUsername(username) {
    await EspIdfProvisioning.setUsername(this.name, username);
    return this;
  }

  /**
   * Get the device name.
   * @returns A promise that resolves with the device name.
   */
  async getDeviceName() {
    return EspIdfProvisioning.getDeviceName(this.name);
  }

  /**
   * Set the device name. On iOS this is a no-op because changing the device name is not supported.
   * @param deviceName The device name to set.
   * @returns A promise that resolves when the device name is set.
   */
  async setDeviceName(deviceName) {
    await EspIdfProvisioning.setDeviceName(this.name, deviceName);
    return this;
  }

  /**
   * Get the primary service UUID. On iOS this is a no-op because there is no primary service UUID.
   * @returns A promise that resolves with the primary service UUID.
   */
  async getPrimaryServiceUuid() {
    return EspIdfProvisioning.getPrimaryServiceUuid(this.name);
  }

  /**
   * Set the primary service UUID. On iOS this is a no-op because there is no primary service UUID.
   * @param primaryServiceUuid The primary service UUID to set.
   * @returns A promise that resolves when the primary service UUID is set.
   */
  async setPrimaryServiceUuid(primaryServiceUuid) {
    await EspIdfProvisioning.setPrimaryServiceUuid(this.name, primaryServiceUuid);
    return this;
  }

  /**
   * Get the security type.
   * @returns A promise that resolves with the security type.
   */
  async getSecurityType() {
    return EspIdfProvisioning.getSecurityType(this.name);
  }

  /**
   * Set the security type.
   * @param securityType The security type to set.
   * @returns A promise that resolves when the security type is set.
   */
  async setSecurityType(securityType) {
    await EspIdfProvisioning.setSecurityType(this.name, securityType);
    return this;
  }

  /**
   * Get the transport type.
   * @returns A promise that resolves with the transport type.
   */
  async getTransportType() {
    return EspIdfProvisioning.getTransportType(this.name);
  }

  /**
   * Get the version information.
   * @returns A promise that resolves with the version information.
   */
  async getVersionInfo() {
    return EspIdfProvisioning.getVersionInfo(this.name);
  }

  /**
   * Get the device capabilities.
   * @returns A promise that resolves with the device capabilities.
   */
  async getDeviceCapabilities() {
    return EspIdfProvisioning.getDeviceCapabilities(this.name);
  }
}
exports.ESPDevice = ESPDevice;
class ESPProvisionManager {
  /**
   * Search for ESP devices.
   * @param devicePrefix The prefix of the device name to search for.
   * @param transport The transport type to use for the device.
   * @param security The security type to use for the device.
   * @returns A promise that resolves with the list of ESP devices found.
   */
  static async searchESPDevices(devicePrefix, transport, security) {
    const espDevices = await EspIdfProvisioning.searchESPDevices(devicePrefix, transport, security);
    return espDevices?.map(espDevice => new ESPDevice(espDevice));
  }

  /**
   * Stop searching for ESP devices.
   */
  static stopESPDevicesSearch() {
    return EspIdfProvisioning.stopESPDevicesSearch();
  }
}
exports.ESPProvisionManager = ESPProvisionManager;
//# sourceMappingURL=index.js.map