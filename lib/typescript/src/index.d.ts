import { ESPSecurity, ESPTransport } from './types';
import type { ESPDeviceInterface, ESPWifiList, ESPStatusResponse } from './types';
export declare class ESPDevice implements ESPDeviceInterface {
    name: string;
    transport: ESPTransport;
    security: ESPSecurity;
    /**
     * Create a new ESPDevice instance.
     * @param name - The name of the device.
     * @param transport - The transport type to use for the device.
     * @param security - The security type to use for the device.
     */
    constructor({ name, transport, security, }: {
        name: string;
        transport: ESPTransport;
        security: ESPSecurity;
    });
    /**
     * Connect to the device.
     * @param proofOfPossession The proof of possession to use for the device.
     * @param softAPPassword The soft AP password to use for the device.
     * @param username The username to use for the device.
     * @returns A promise that resolves when the device is connected.
     */
    connect(proofOfPossession?: string | null, softAPPassword?: string | null, username?: string | null): Promise<void>;
    /**
     * Send data to the device.
     * @param path The path to send the data to.
     * @param data The data to send. The data should be a string. The data will be transferred with base64 encoding.
     * @returns A promise that resolves with the response data.
     */
    sendData(path: string, data: string): Promise<string>;
    /**
     * Scan for WiFi networks.
     * @returns A promise that resolves with the list of WiFi networks.
     */
    scanWifiList(): Promise<ESPWifiList[]>;
    /**
     * Disconnect from the device.
     */
    disconnect(): void;
    /**
     * Provision the device with the given SSID and passphrase.
     * @param ssid The SSID to use for the device.
     * @param passphrase The passphrase to use for the device.
     * @returns A promise that resolves with the status response.
     */
    provision(ssid: string, passphrase: string): Promise<ESPStatusResponse>;
    /**
     * Get the proof of possession for the device.
     * @returns A promise that resolves with the proof of possession.
     */
    getProofOfPossession(): Promise<string | undefined>;
    /**
     * Set the proof of possession for the device.
     * @param proofOfPossession The proof of possession to set.
     * @returns A promise that resolves when the proof of possession is set.
     */
    setProofOfPossession(proofOfPossession: string): Promise<this>;
    /**
     * Get the username for the device.
     * @returns A promise that resolves with the username.
     */
    getUsername(): Promise<string | undefined>;
    /**
     * Set the username for the device.
     * @param username The username to set.
     * @returns A promise that resolves when the username is set.
     */
    setUsername(username: string): Promise<this>;
    /**
     * Get the device name.
     * @returns A promise that resolves with the device name.
     */
    getDeviceName(): Promise<string | undefined>;
    /**
     * Set the device name. On iOS this is a no-op because changing the device name is not supported.
     * @param deviceName The device name to set.
     * @returns A promise that resolves when the device name is set.
     */
    setDeviceName(deviceName: string): Promise<this>;
    /**
     * Get the primary service UUID. On iOS this is a no-op because there is no primary service UUID.
     * @returns A promise that resolves with the primary service UUID.
     */
    getPrimaryServiceUuid(): Promise<string | undefined>;
    /**
     * Set the primary service UUID. On iOS this is a no-op because there is no primary service UUID.
     * @param primaryServiceUuid The primary service UUID to set.
     * @returns A promise that resolves when the primary service UUID is set.
     */
    setPrimaryServiceUuid(primaryServiceUuid: string): Promise<this>;
    /**
     * Get the security type.
     * @returns A promise that resolves with the security type.
     */
    getSecurityType(): Promise<ESPSecurity | undefined>;
    /**
     * Set the security type.
     * @param securityType The security type to set.
     * @returns A promise that resolves when the security type is set.
     */
    setSecurityType(securityType: ESPSecurity): Promise<this>;
    /**
     * Get the transport type.
     * @returns A promise that resolves with the transport type.
     */
    getTransportType(): Promise<ESPTransport | undefined>;
    /**
     * Get the version information.
     * @returns A promise that resolves with the version information.
     */
    getVersionInfo(): Promise<{
        [key: string]: any;
    }[] | undefined>;
    /**
     * Get the device capabilities.
     * @returns A promise that resolves with the device capabilities.
     */
    getDeviceCapabilities(): Promise<string[] | undefined>;
}
export declare class ESPProvisionManager {
    /**
     * Search for ESP devices.
     * @param devicePrefix The prefix of the device name to search for.
     * @param transport The transport type to use for the device.
     * @param security The security type to use for the device.
     * @returns A promise that resolves with the list of ESP devices found.
     */
    static searchESPDevices(devicePrefix: string, transport: ESPTransport, security: ESPSecurity): Promise<ESPDevice[]>;
    /**
     * Stop searching for ESP devices.
     */
    static stopESPDevicesSearch(): void;
}
export { ESPSecurity, ESPTransport, ESPWifiAuthMode } from './types';
export type { ESPDeviceInterface, ESPWifiList, ESPStatusResponse, } from './types';
//# sourceMappingURL=index.d.ts.map