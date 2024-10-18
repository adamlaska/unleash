/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ChangeRequestApprovalSchema } from './changeRequestApprovalSchema';
import type { ChangeRequestCommentSchema } from './changeRequestCommentSchema';
import type { ChangeRequestSchemaOneOfFourCreatedBy } from './changeRequestSchemaOneOfFourCreatedBy';
import type { ChangeRequestFeatureSchema } from './changeRequestFeatureSchema';
import type { ChangeRequestScheduleSchema } from './changeRequestScheduleSchema';
import type { ChangeRequestSegmentChangeSchema } from './changeRequestSegmentChangeSchema';
import type { ChangeRequestSchemaOneOfFourState } from './changeRequestSchemaOneOfFourState';

export type ChangeRequestSchemaOneOfFour = {
    /** A list of approvals that this change request has received. */
    approvals?: ChangeRequestApprovalSchema[];
    /** All comments that have been made on this change request. */
    comments?: ChangeRequestCommentSchema[];
    /** When this change request was created. */
    createdAt: string;
    /** The user who created this change request. */
    createdBy: ChangeRequestSchemaOneOfFourCreatedBy;
    /** The environment in which the changes should be applied. */
    environment: string;
    /** The list of features and their changes that relate to this change request. */
    features: ChangeRequestFeatureSchema[];
    /** This change requests's ID. */
    id: number;
    /** The minimum number of approvals required before this change request can be applied. */
    minApprovals: number;
    /** The project this change request belongs to. */
    project: string;
    /** A list of rejections that this change request has received.  */
    rejections?: ChangeRequestApprovalSchema[];
    schedule: ChangeRequestScheduleSchema;
    /** The list of segments and their changes that relate to this change request. */
    segments: ChangeRequestSegmentChangeSchema[];
    /** The current state of the change request. */
    state: ChangeRequestSchemaOneOfFourState;
    /** A title describing the change request's content. */
    title?: string;
};
