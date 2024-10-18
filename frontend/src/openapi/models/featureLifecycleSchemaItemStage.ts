/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * The name of the lifecycle stage that got recorded for a given feature
 */
export type FeatureLifecycleSchemaItemStage =
    (typeof FeatureLifecycleSchemaItemStage)[keyof typeof FeatureLifecycleSchemaItemStage];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const FeatureLifecycleSchemaItemStage = {
    initial: 'initial',
    'pre-live': 'pre-live',
    live: 'live',
    completed: 'completed',
    archived: 'archived',
} as const;
