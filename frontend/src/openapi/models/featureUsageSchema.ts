/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { FeatureEnvironmentMetricsSchema } from './featureEnvironmentMetricsSchema';

/**
 * How many applications have seen this feature flag, as well as how this feature was evaluated the last hour
 */
export interface FeatureUsageSchema {
    /** The name of the feature */
    featureName: string;
    /** Last hour statistics. Accumulated per feature per environment. Contains counts for evaluations to true (yes) and to false (no) */
    lastHourUsage: FeatureEnvironmentMetricsSchema[];
    /** The maturity level of this API (alpha, beta, stable, deprecated) */
    maturity: string;
    /** A list of applications seen using this feature */
    seenApplications: string[];
    /**
     * The version of this schema
     * @minimum 1
     */
    version: number;
}
