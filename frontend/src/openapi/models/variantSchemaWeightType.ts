/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * Set to fix if this variant must have exactly the weight allocated to it. If the type is variable, the weight will adjust so that the total weight of all variants adds up to 1000
 */
export type VariantSchemaWeightType =
    typeof VariantSchemaWeightType[keyof typeof VariantSchemaWeightType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const VariantSchemaWeightType = {
    variable: 'variable',
    fix: 'fix',
} as const;
