/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ChangeRequestCreateSchemaOneOfOneoneAction } from './changeRequestCreateSchemaOneOfOneoneAction';
import type { UpdateFeatureStrategySchema } from './updateFeatureStrategySchema';

/**
 * Update a strategy belonging to this feature.
 */
export type ChangeRequestCreateSchemaOneOfOneone = {
    /** The name of this action. */
    action: ChangeRequestCreateSchemaOneOfOneoneAction;
    /** The name of the feature that this change applies to. */
    feature: string;
    payload: UpdateFeatureStrategySchema;
};
