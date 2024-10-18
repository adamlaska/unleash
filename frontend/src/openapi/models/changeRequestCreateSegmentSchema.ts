/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ChangeRequestCreateSegmentSchemaOneOf } from './changeRequestCreateSegmentSchemaOneOf';
import type { ChangeRequestCreateSegmentSchemaOneOfThree } from './changeRequestCreateSegmentSchemaOneOfThree';

/**
 * Data used to create a [change request](https://docs.getunleash.io/reference/change-requests) for a single segment change.
 */
export type ChangeRequestCreateSegmentSchema =
    | ChangeRequestCreateSegmentSchemaOneOf
    | ChangeRequestCreateSegmentSchemaOneOfThree;
