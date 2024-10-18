/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ChangeRequestCommentSchemaCreatedBy } from './changeRequestCommentSchemaCreatedBy';

/**
 * A comment belonging to a [change request](https://docs.getunleash.io/reference/change-requests).
 */
export interface ChangeRequestCommentSchema {
    /** When the comment was made. */
    createdAt: string;
    /** Information about the user who posted the comment */
    createdBy: ChangeRequestCommentSchemaCreatedBy;
    /** The comment's ID. Unique per change request. */
    id?: number;
    /** The content of the comment. */
    text: string;
}
