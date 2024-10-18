/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

export type ChangeRequestCreateSchemaOneOfSixPayload = {
    /** The new state of the feature. */
    enabled: boolean;
    /** Only relevant when ALL the strategies are disabled. If `true`, all the disabled strategies will be enabled. If `false`, the default strategy will be added */
    shouldActivateDisabledStrategies?: boolean;
};
