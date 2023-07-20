/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ConstraintSchema } from './constraintSchema';
import type { CreateStrategyVariantSchema } from './createStrategyVariantSchema';
import type { ParametersSchema } from './parametersSchema';

/**
 * Create a strategy configuration in a feature
 */
export interface CreateFeatureStrategySchema {
    /** The name of the strategy type */
    name: string;
    /** A descriptive title for the strategy */
    title?: string | null;
    /** A toggle to disable the strategy. defaults to false. Disabled strategies are not evaluated or returned to the SDKs */
    disabled?: boolean | null;
    /** The order of the strategy in the list */
    sortOrder?: number;
    /** A list of the constraints attached to the strategy. See https://docs.getunleash.io/reference/strategy-constraints */
    constraints?: ConstraintSchema[];
    /** Strategy level variants */
    variants?: CreateStrategyVariantSchema[];
    /** An object containing the parameters for the strategy */
    parameters?: ParametersSchema;
    /** Ids of segments to use for this strategy */
    segments?: number[];
}
