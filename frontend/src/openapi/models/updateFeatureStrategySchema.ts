/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ConstraintSchema } from './constraintSchema';
import type { ParametersSchema } from './parametersSchema';

/**
 * Update a strategy configuration in a feature
 */
export interface UpdateFeatureStrategySchema {
    /** The name of the strategy type */
    name?: string;
    /** The order of the strategy in the list in feature environment configuration */
    sortOrder?: number;
    /** A list of the constraints attached to the strategy. See https://docs.getunleash.io/reference/strategy-constraints */
    constraints?: ConstraintSchema[];
    /** A descriptive title for the strategy */
    title?: string | null;
    /** A toggle to disable the strategy. defaults to true. Disabled strategies are not evaluated or returned to the SDKs */
    disabled?: boolean | null;
    parameters?: ParametersSchema;
}
