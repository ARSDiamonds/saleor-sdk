import { ReviewErrorCode } from "./../../gqlTypes/globalTypes";
export interface ReviewError {
    __typename: "ReviewError";
    /**
     * The error code.
     */
    code: ReviewErrorCode;
    /**
     * Name of a field that caused the error. A value of `null` indicates that the
     * error isn't associated with a particular field.
     */
    field: string | null;
    /**
     * The error message.
     */
    message: string | null;
}
