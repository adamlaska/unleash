/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * The type of the value. Commonly used types are string, number, json and csv.
 */
export type VariantSchemaPayloadType =
    (typeof VariantSchemaPayloadType)[keyof typeof VariantSchemaPayloadType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const VariantSchemaPayloadType = {
    json: 'json',
    csv: 'csv',
    string: 'string',
    number: 'number',
} as const;
