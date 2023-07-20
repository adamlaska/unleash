/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * A [feature toggle type](https://docs.getunleash.io/reference/feature-toggle-types).
 */
export interface FeatureTypeSchema {
    /** The identifier of this feature toggle type. */
    id: string;
    /** The display name of this feature toggle type. */
    name: string;
    /** A description of what this feature toggle type is intended to be used for. */
    description: string;
    /** How many days it takes before a feature toggle of this typed is flagged as [potentially stale](https://docs.getunleash.io/reference/technical-debt#stale-and-potentially-stale-toggles) by Unleash. If this value is `null`, Unleash will never mark it as potentially stale. */
    lifetimeDays: number | null;
}
