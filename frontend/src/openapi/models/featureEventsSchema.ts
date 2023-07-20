/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { FeatureEventsSchemaVersion } from './featureEventsSchemaVersion';
import type { EventSchema } from './eventSchema';

/**
 * One or more events happening to a specific feature toggle
 */
export interface FeatureEventsSchema {
    /** An API versioning number */
    version?: FeatureEventsSchemaVersion;
    /** The name of the feature toggle these events relate to */
    toggleName?: string;
    /** The list of events */
    events: EventSchema[];
    /** How many events are there for this feature toggle */
    totalEvents?: number;
}
