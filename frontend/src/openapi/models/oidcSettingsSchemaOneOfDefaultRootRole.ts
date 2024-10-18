/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * [Default role](https://docs.getunleash.io/reference/rbac#standard-roles) granted to users auto-created from email. Only relevant if autoCreate is `true`
 */
export type OidcSettingsSchemaOneOfDefaultRootRole =
    (typeof OidcSettingsSchemaOneOfDefaultRootRole)[keyof typeof OidcSettingsSchemaOneOfDefaultRootRole];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const OidcSettingsSchemaOneOfDefaultRootRole = {
    Viewer: 'Viewer',
    Editor: 'Editor',
    Admin: 'Admin',
} as const;
