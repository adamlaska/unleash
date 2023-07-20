/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * Configuration for using Google Authentication
 */
export interface GoogleSettingsSchema {
    /** Is google OIDC enabled */
    enabled?: boolean;
    /** The google client id, used to authenticate against google */
    clientId: string;
    /** The client secret used to authenticate the OAuth session used to log the user in */
    clientSecret: string;
    /** Name of the host allowed to access the Google authentication flow */
    unleashHostname: string;
    /** Should Unleash create users based on the emails coming back in the authentication reply from Google */
    autoCreate?: boolean;
    /** A comma separated list of email domains that Unleash will auto create user accounts for. */
    emailDomains?: string;
}
