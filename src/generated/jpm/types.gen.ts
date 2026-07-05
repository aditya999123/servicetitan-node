// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

export interface paths {
    "/tenant/{tenant}/appointments/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets appointment specified by ID */
        get: operations["Appointments_Get"];
        put?: never;
        post?: never;
        /** Deletes appointment with specified id. */
        delete: operations["Appointments_Delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/appointments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of appointments */
        get: operations["Appointments_GetList"];
        put?: never;
        /** Adds a new appointment to an existing job */
        post: operations["Appointments_Add"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/appointments/{id}/reschedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Reschedule job appointment */
        patch: operations["Appointments_Reschedule"];
        trace?: never;
    };
    "/tenant/{tenant}/appointments/{id}/hold": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Puts the appointment on hold */
        put: operations["Appointments_Hold"];
        post?: never;
        /** Removes hold from the appointment */
        delete: operations["Appointments_RemoveHold"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/appointments/{id}/special-instructions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Updates special instructions for the specified appointment. */
        put: operations["Appointments_UpdateSpecialInstructions"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/appointments/{id}/confirmation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Adds a confirmation to the specified appointment. */
        put: operations["Appointments_Confirm"];
        post?: never;
        /** Removes a confirmation to the specified appointment. */
        delete: operations["Appointments_RemoveConfirmation"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/appointments/{id}/summaries": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Sets an appointment summary (work performed log) for the specified appointment and technician.
         *     Private preview: available for specific accounts only.
         */
        post: operations["Appointments_SetSummary"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/work-breakdown-structure/segments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BudgetCodes_ListCompanySegments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/work-breakdown-structure/projects/{projectId}/segments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BudgetCodes_ListProjectSegments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/work-breakdown-structure/segments/{segmentId}/items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BudgetCodes_ListCompanySegmentItems"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/work-breakdown-structure/projects/{projectId}/segments/{segmentId}/items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BudgetCodes_ListProjectSegmentItems"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/work-breakdown-structure/segments/{segmentId}/items/{segmentItemId}/children": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BudgetCodes_ListCompanySegmentItemChildren"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/work-breakdown-structure/projects/{projectId}/segments/{segmentId}/items/{segmentItemId}/children": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BudgetCodes_ListProjectSegmentItemChildren"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/work-breakdown-structure/budget-codes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BudgetCodes_ListCompanyBudgetCodes"];
        put?: never;
        post: operations["BudgetCodes_CreateBudgetCode"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/work-breakdown-structure/projects/{projectId}/budget-codes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BudgetCodes_ListProjectBudgetCodes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/work-breakdown-structure/budget-codes/match": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BudgetCodes_MatchCompanyBudgetCodes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/work-breakdown-structure/projects/{projectId}/budget-codes/match": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["BudgetCodes_MatchProjectBudgetCodes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/work-breakdown-structure/budget-codes/partial": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["BudgetCodes_CreateBudgetCodePartial"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/work-breakdown-structure/budget-codes/batch": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["BudgetCodes_CreateBudgetCodesBatch"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/work-breakdown-structure/budget-codes/partial/batch": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["BudgetCodes_CreateBudgetCodesPartialBatch"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/jobs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for jobs */
        get: operations["Export_Jobs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/projects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for projects */
        get: operations["Export_Projects"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/appointments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for appointments */
        get: operations["Export_Appointments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/job-canceled-logs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for job canceled logs */
        get: operations["Export_JobCancelReasons"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/job-notes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for job notes */
        get: operations["Export_JobNotes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/project-notes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for project notes */
        get: operations["Export_ProjectNotes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/job-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for job status history. */
        get: operations["Export_JobHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/job-cancel-reasons": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of job cancel reasons */
        get: operations["JobCancelReasons_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/jobs/{id}/equipment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets the list of equipment IDs attached to the specified job */
        get: operations["JobEquipment_Get"];
        put?: never;
        /**
         * Attaches one or more equipment items to the specified job.
         *     Returns the updated list of all attached equipment IDs.
         */
        post: operations["JobEquipment_Attach"];
        /**
         * Detaches one or more equipment items from the specified job.
         *     Returns 204 No Content on success.
         */
        delete: operations["JobEquipment_DetachBulk"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/jobs/{id}/equipment/{equipmentId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Detaches a single equipment item from the specified job.
         *     Returns 204 No Content on success; 404 if the equipment is not attached to the job.
         */
        delete: operations["JobEquipment_Detach"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/job-hold-reasons": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of job hold reasons */
        get: operations["JobHoldReasons_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/jobs/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a job by ID */
        get: operations["Jobs_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Updates a job */
        patch: operations["Jobs_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/jobs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of jobs */
        get: operations["Jobs_GetList"];
        put?: never;
        /** Creates a job */
        post: operations["Jobs_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/jobs/{id}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Cancels a job */
        put: operations["Jobs_Cancel"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/jobs/{id}/remove-cancellation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Removes cancellation from a job */
        put: operations["Jobs_RemoveCancellation"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/jobs/{id}/notes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of notes on the specified job */
        get: operations["Jobs_GetNotes"];
        put?: never;
        /** Creates a note on the specified job */
        post: operations["Jobs_CreateNote"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/jobs/hold-reasons": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of hold reasons for specific jobs */
        get: operations["Jobs_GetHoldReasons"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/jobs/cancel-reasons": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of cancel reasons for specific jobs */
        get: operations["Jobs_GetCancelReasons"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/jobs/{id}/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of history entries for the specified job */
        get: operations["Jobs_GetHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/jobs/{id}/canceled-log": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a list of cancelled logs for the specified job */
        get: operations["Jobs_GetJobCanceledLogs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/jobs/{id}/booked-log": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get booked log for the specified job */
        get: operations["Jobs_GetBookedLog"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/jobs/custom-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a list of custom field types available for projects */
        get: operations["Jobs_GetCustomFieldTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/job-types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of job types */
        get: operations["JobTypes_GetList"];
        put?: never;
        /** Creates a job type */
        post: operations["JobTypes_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/job-types/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a job type by ID */
        get: operations["JobTypes_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update a job type */
        patch: operations["JobTypes_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/projects/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a project by ID */
        get: operations["Projects_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update a project */
        patch: operations["Projects_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/projects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of projects */
        get: operations["Projects_GetList"];
        put?: never;
        /** Creates a New Project */
        post: operations["Projects_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/projects/{id}/notes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of notes on the specified project */
        get: operations["Projects_GetNotes"];
        put?: never;
        /** Creates a note on the specified project */
        post: operations["Projects_CreateNote"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/projects/{id}/attach-job/{jobId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Attaches Job to the specified project */
        post: operations["Projects_AttachJob"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/projects/detach-job/{jobId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Detaches Job from the project */
        post: operations["Projects_DetachJob"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/projects/custom-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a list of custom field types available for projects */
        get: operations["Projects_GetCustomFieldTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/project-statuses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of project statuses */
        get: operations["ProjectStatuses_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/project-statuses/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a project status by ID */
        get: operations["ProjectStatuses_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/project-substatuses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of project sub statuses */
        get: operations["ProjectSubStatuses_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/project-substatuses/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a project sub status by ID */
        get: operations["ProjectSubStatuses_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/project-types/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a project type by ID */
        get: operations["ProjectTypes_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/project-types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of project types */
        get: operations["ProjectTypes_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** @description Appointment response model */
        "Jpm.V2.AppointmentResponse": {
            /**
             * Format: int64
             * @description Appointment ID
             */
            id: number;
            /**
             * Format: int64
             * @description ID of the job that the appointment was created for
             */
            jobId: number;
            /** @description Appointment number */
            appointmentNumber?: string | null;
            /**
             * Format: date-time
             * @description Appointment's start date/time (in UTC)
             */
            start: string;
            /**
             * Format: date-time
             * @description Appointment's end date/time (in UTC)
             */
            end: string;
            /**
             * Format: date-time
             * @description Arrival window start date/time (in UTC), if configured
             */
            arrivalWindowStart?: string | null;
            /**
             * Format: date-time
             * @description Arrival window end date/time (in UTC), if configured
             */
            arrivalWindowEnd?: string | null;
            /** @description Appointment's status */
            status: components["schemas"]["Jpm.V2.Base.AppointmentStatus"];
            /**
             * Format: multiline
             * @description Special instructions associated to the appointment
             */
            specialInstructions?: string | null;
            /**
             * Format: date-time
             * @description When the appointment was created (in UTC)
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description When the appointment was modified (in UTC)
             */
            modifiedOn: string;
            /**
             * Format: int64
             * @description Id of a customer that the appointment was created for
             */
            customerId: number;
            /** @description Returns true if the appointment is unused */
            unused: boolean;
            /**
             * Format: int64
             * @description ID of the user that created the appointment
             */
            createdById: number;
            /** @description Returns true if the appointment is confirmed */
            isConfirmed: boolean;
            /** @description Whether this appointment is active */
            active: boolean;
            /** @description Work performed summaries for this appointment. Private preview: available for specific accounts only. */
            appointmentSummaries?: components["schemas"]["Jpm.V2.AppointmentSummaryApiModel"][] | null;
        };
        /**
         * @description Indicates the status of a Job Appointment.
         * @enum {string}
         */
        "Jpm.V2.Base.AppointmentStatus": "Scheduled" | "Dispatched" | "Working" | "Hold" | "Done" | "Canceled";
        /** @description Appointment summary (work performed log) response model */
        "Jpm.V2.AppointmentSummaryApiModel": {
            /**
             * Format: date-time
             * @description When the summary was created (in UTC)
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of the appointment
             */
            jobAppointmentId: number;
            /**
             * Format: int64
             * @description ID of the job
             */
            jobId: number;
            /**
             * Format: date-time
             * @description When the summary was last modified (in UTC)
             */
            modifiedOn: string;
            /**
             * Format: multiline
             * @description Work performed notes
             */
            notes: string;
            /**
             * Format: int64
             * @description ID of the technician
             */
            technicianId: number;
        };
        /** @description Detailed error response, following RFC 7807 recommendations (https://tools.ietf.org/html/rfc7807). */
        ApiErrorResponse: {
            /** @description A URI reference that identifies the problem type */
            type: string;
            /** @description A short, human-readable summary of the problem type */
            title: string;
            /**
             * Format: int32
             * @description The HTTP status code generated by server
             */
            status: number;
            /** @description Internal trace ID for advanced diagnostics */
            traceId: string;
            /** @description Provides more details about errors occurred, which can potentially be used for visual display */
            errors: {
                [key: string]: string[];
            };
            /** @description Provides additional data, intended for programmatical usage */
            data: {
                [key: string]: unknown;
            };
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Jpm.V2.AppointmentResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Jpm.V2.AppointmentResponse"][];
        };
        /**
         * @description Represents possible HTTP query argument values, when applying filters based on active status.
         * @enum {string}
         */
        ActiveRequestArg: "True" | "Any" | "False";
        "Jpm.V2.AppointmentAddRequest": {
            /**
             * Format: int64
             * @description ID of job for new appointment
             */
            jobId: number;
            /**
             * Format: date-time
             * @description Start date/time (in UTC) of new appointment
             */
            start: string;
            /**
             * Format: date-time
             * @description End date/time (in UTC) of new appointment
             */
            end: string;
            /**
             * Format: date-time
             * @description Arrival window start date/time (in UTC) for new appointment, if configured
             */
            arrivalWindowStart?: string | null;
            /**
             * Format: date-time
             * @description Arrival window end date/time (in UTC) for new appointment, if configured
             */
            arrivalWindowEnd?: string | null;
            /** @description List of IDs of technicians to assign to new appointment */
            technicianIds?: number[] | null;
            /**
             * Format: multiline
             * @description Special instructions associated to the appointment
             */
            specialInstructions?: string | null;
        };
        "Jpm.V2.AppointmentRescheduleRequest": {
            /**
             * Format: date-time
             * @description New start date/time (in UTC) for appointment
             */
            start?: string;
            /**
             * Format: date-time
             * @description New end date/time (in UTC) for appointment
             */
            end?: string;
            /**
             * Format: date-time
             * @description New arrival window start date/time (in UTC) for appointment, if configured
             */
            arrivalWindowStart?: string | null;
            /**
             * Format: date-time
             * @description New arrival window end date/time (in UTC) for appointment, if configured
             */
            arrivalWindowEnd?: string | null;
        };
        "Jpm.V2.HoldAppointmentRequest": {
            /**
             * Format: int64
             * @description ID of the hold reason
             */
            reasonId: number;
            /**
             * Format: multiline
             * @description Memo of why the appointment is going on hold
             */
            memo: string;
        };
        "Jpm.V2.UpdateAppointmentSpecialInstructionsRequest": {
            /**
             * Format: multiline
             * @description New special instructions associated to the appointment
             */
            specialInstructions: string;
        };
        /** @description Request model for setting a single appointment summary */
        "Jpm.V2.SetAppointmentSummaryRequest": {
            /**
             * Format: multiline
             * @description Work performed notes
             */
            notes: string;
            /**
             * Format: int64
             * @description ID of the technician
             */
            technicianId: number;
        };
        "Jpm.BudgetCodes.ListSegmentsResponse": {
            data: components["schemas"]["Jpm.BudgetCodes.SegmentModel"][];
        };
        "Jpm.BudgetCodes.SegmentModel": {
            /** Format: int64 */
            id: number;
            name: string;
            type: components["schemas"]["Jpm.BudgetCodes.SegmentType"];
            structure: components["schemas"]["Jpm.BudgetCodes.SegmentStructure"];
            isActive: boolean;
            isRequired: boolean;
        };
        /** @enum {string} */
        "Jpm.BudgetCodes.SegmentType": "None" | "CostCode" | "CostType" | "Custom";
        /** @enum {string} */
        "Jpm.BudgetCodes.SegmentStructure": "None" | "Flat" | "Hierarchal";
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Jpm.BudgetCodes.SegmentItemModel": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Jpm.BudgetCodes.SegmentItemModel"][];
        };
        "Jpm.BudgetCodes.SegmentItemModel": {
            /** Format: int64 */
            id: number;
            /** Format: int64 */
            parentId?: number | null;
            code: string;
            description: string;
            path: string;
            costCategory?: components["schemas"]["Jpm.BudgetCodes.SegmentItemCostCategory"] | null;
            isActive: boolean;
        };
        /** @enum {string} */
        "Jpm.BudgetCodes.SegmentItemCostCategory": "None" | "Material" | "Labor" | "Equipment" | "Subcontract" | "Overhead" | "Other" | "SystemUse";
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Jpm.BudgetCodes.BudgetCodeModel": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Jpm.BudgetCodes.BudgetCodeModel"][];
        };
        "Jpm.BudgetCodes.BudgetCodeModel": {
            /** Format: int64 */
            id: number;
            code: string;
            description: string;
            segments: components["schemas"]["Jpm.BudgetCodes.BudgetCodeSegmentModel"][];
        };
        "Jpm.BudgetCodes.BudgetCodeSegmentModel": {
            /** Format: int64 */
            segmentId: number;
            /** Format: int64 */
            segmentItemId?: number | null;
            code?: string | null;
            description?: string | null;
            path?: string | null;
        };
        "Jpm.BudgetCodes.MatchBudgetCodesResponse": {
            matches: components["schemas"]["Jpm.BudgetCodes.BudgetCodeMatchResult"][];
        };
        "Jpm.BudgetCodes.BudgetCodeMatchResult": {
            code: string;
            isValid: boolean;
            budgetCodes: components["schemas"]["Jpm.BudgetCodes.BudgetCodeModel"][];
        };
        "Jpm.BudgetCodes.CreateBudgetCodeResponse": {
            code: components["schemas"]["Jpm.BudgetCodes.BudgetCodeModel"];
        };
        "Jpm.V2.CreateFullBudgetCodeArgs": {
            segmentItemIds: number[];
        };
        "Jpm.V2.CreatePartialBudgetCodeArgs": {
            segments: components["schemas"]["Jpm.V2.BudgetCodeSegmentBindingArgs"][];
        };
        "Jpm.V2.BudgetCodeSegmentBindingArgs": {
            /** Format: int64 */
            segmentId: number;
            /** Format: int64 */
            segmentItemId?: number | null;
        };
        "Jpm.BudgetCodes.CreateBudgetCodeBatchResponse": {
            codes: components["schemas"]["Jpm.BudgetCodes.BudgetCodeModel"][];
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Jpm.V2.ExportJobsResponse": {
            /**
             * @description Indicates whether the export feed has reached its logical "end", or if there is more to export.
             *     True means the consumer can invoke another request right away using new continuation token value.
             *     False means there is now new data for the export, and the consumer should wait for some time (5-10 minutes)
             *     before making another request.
             */
            hasMore: boolean;
            /** @description Continuation token used to resume the export operation. The value should be used in "from" query parameter of the following request. */
            continueFrom: string;
            /** @description The collection of exported items, usually sorted chronologically based on modification date */
            data: components["schemas"]["Jpm.V2.ExportJobsResponse"][];
        };
        "Jpm.V2.ExportJobsResponse": {
            /**
             * Format: html
             * @description Job summary
             */
            summary?: string | null;
            /** @description Custom fields on the job */
            customFields: components["schemas"]["CustomFieldApiModel"][];
            /**
             * @description List of external data attached to this job,
             *     that corresponds to the application guid provided in the request.
             */
            externalData: components["schemas"]["Jpm.V2.ExternalDataModel"][];
            /** @description Summary of work completed on the job. Private preview: available for specific accounts only. */
            summaryOfWork?: string | null;
            /**
             * Format: int64
             * @description ID of the job
             */
            id: number;
            /** @description Job number */
            jobNumber: string;
            /**
             * Format: int64
             * @description ID of the job's project
             */
            projectId?: number | null;
            /**
             * Format: int64
             * @description ID of the job's customer
             */
            customerId: number;
            /**
             * Format: int64
             * @description ID of the job's location
             */
            locationId: number;
            /** @description Status of the job */
            jobStatus: string;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when the job was completed
             */
            completedOn?: string | null;
            /**
             * Format: int64
             * @description ID of the job's business unit
             */
            businessUnitId: number;
            /**
             * Format: int64
             * @description ID of job type
             */
            jobTypeId: number;
            /** @description Priority of the job */
            priority: string;
            /**
             * Format: int64
             * @description ID of the job's campaign
             */
            campaignId: number;
            /**
             * Format: int64
             * @description Number of appointments on the job
             */
            appointmentCount: number;
            /**
             * Format: int64
             * @description ID of the first appointment on the job
             */
            firstAppointmentId: number;
            /**
             * Format: int64
             * @description ID of the last appointment on the job
             */
            lastAppointmentId: number;
            /**
             * Format: int64
             * @description ID of the job for which this job is a recall
             */
            recallForId?: number | null;
            /**
             * Format: int64
             * @description ID of the job for which this job is a warranty
             */
            warrantyId?: number | null;
            /**
             * @description Object that contains:
             *     JobId: ID of the job from which this job was generated
             *     EmployeeId: ID of the office user or technician
             */
            jobGeneratedLeadSource?: components["schemas"]["Jpm.V2.Base.JobGeneratedLeadSource"] | null;
            /** @description Whether the job is a no-charge job */
            noCharge: boolean;
            /** @description Whether notifications will be sent to customers */
            notificationsEnabled: boolean;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when the job was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of the user who created the job
             */
            createdById: number;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when job was last modified
             */
            modifiedOn: string;
            /** @description Tags on the job */
            tagTypeIds: number[];
            /**
             * Format: int64
             * @description ID of the Call that resulted in this job
             */
            leadCallId?: number | null;
            /**
             * Format: int64
             * @description ID of the Call that 3rd-party agents are enabled to set.
             */
            partnerLeadCallId?: number | null;
            /**
             * Format: int64
             * @description ID of the Booking that resulted in this job
             */
            bookingId?: number | null;
            /**
             * Format: int64
             * @description ID of the Technician that sold this job
             */
            soldById?: number | null;
            /** @description Customer PO */
            customerPo: string;
            /**
             * Format: int64
             * @description ID of the invoice associated with this job.
             */
            invoiceId: number;
            /**
             * Format: int64
             * @description ID of the Membership associated with this job.
             */
            membershipId?: number | null;
            /**
             * Format: decimal
             * @description Total amount of the job
             */
            total?: number | null;
            /**
             * Format: int64
             * @description ID of the sold estimate from which this job was created
             */
            createdFromEstimateId?: number | null;
            /** @description IDs of estimates that are related to this job */
            estimateIds: number[];
            /** @description IDs of equipment items attached to this job */
            equipmentIds: number[];
            /** @description Indicates whether Dispatch Pro is enabled for this job */
            isAutoDispatched?: boolean | null;
            /** @description Whether this job is active, or not anymore. */
            active: boolean;
        };
        CustomFieldApiModel: {
            /**
             * Format: int64
             * @description Custom Field Type Id
             */
            typeId: number;
            /** @description Custom Field Name */
            name: string;
            /** @description Custom Field Value */
            value: string;
        };
        "Jpm.V2.ExternalDataModel": {
            /** @description External data key. */
            key: string;
            /** @description External data value. */
            value: string;
        };
        "Jpm.V2.Base.JobGeneratedLeadSource": {
            /**
             * Format: int64
             * @description ID of the job
             */
            jobId?: number | null;
            /**
             * Format: int64
             * @description ID of the employee
             */
            employeeId?: number | null;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Jpm.V2.ExportProjectsResponse": {
            /**
             * @description Indicates whether the export feed has reached its logical "end", or if there is more to export.
             *     True means the consumer can invoke another request right away using new continuation token value.
             *     False means there is now new data for the export, and the consumer should wait for some time (5-10 minutes)
             *     before making another request.
             */
            hasMore: boolean;
            /** @description Continuation token used to resume the export operation. The value should be used in "from" query parameter of the following request. */
            continueFrom: string;
            /** @description The collection of exported items, usually sorted chronologically based on modification date */
            data: components["schemas"]["Jpm.V2.ExportProjectsResponse"][];
        };
        "Jpm.V2.ExportProjectsResponse": {
            /**
             * Format: int64
             * @description ID of the project
             */
            id: number;
            /** @description Project number */
            number: string;
            /** @description Project name */
            name?: string | null;
            /**
             * Format: html
             * @description Project summary
             */
            summary?: string | null;
            /** @description Project status */
            status?: string | null;
            /**
             * Format: int64
             * @description Project status id
             */
            statusId?: number | null;
            /** @description Project substatus */
            subStatus?: string | null;
            /**
             * Format: int64
             * @description Project substatus id
             */
            subStatusId?: number | null;
            /**
             * Format: int64
             * @description ID of the project's customer
             */
            customerId: number;
            /**
             * Format: int64
             * @description ID of the project's location
             */
            locationId: number;
            /**
             * Format: int64
             * @description ID of the project's type
             */
            projectTypeId?: number | null;
            /** @description IDs of project managers for the project. */
            projectManagerIds: number[];
            /** @description IDs of business units for the project. */
            businessUnitIds: number[];
            /**
             * Format: date-time
             * @description Start date of the project
             */
            startDate?: string | null;
            /**
             * Format: date-time
             * @description Target completion date of the project
             */
            targetCompletionDate?: string | null;
            /**
             * Format: date-time
             * @description Actual completion date of the project
             */
            actualCompletionDate?: string | null;
            /**
             * Format: date-time
             * @description Projects last modification date
             */
            modifiedOn?: string | null;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when the project was created
             */
            createdOn: string;
            /** @description Custom fields on the project */
            customFields: components["schemas"]["CustomFieldApiModel"][];
            /**
             * @description List of external data attached to this project,
             *     that corresponds to the application guid provided in the request.
             */
            externalData: components["schemas"]["Jpm.V2.ExternalDataModel"][];
            /** @description List of jobs associated with this project. */
            jobIds: number[];
            active: boolean;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Jpm.V2.ExportAppointmentsResponse": {
            /**
             * @description Indicates whether the export feed has reached its logical "end", or if there is more to export.
             *     True means the consumer can invoke another request right away using new continuation token value.
             *     False means there is now new data for the export, and the consumer should wait for some time (5-10 minutes)
             *     before making another request.
             */
            hasMore: boolean;
            /** @description Continuation token used to resume the export operation. The value should be used in "from" query parameter of the following request. */
            continueFrom: string;
            /** @description The collection of exported items, usually sorted chronologically based on modification date */
            data: components["schemas"]["Jpm.V2.ExportAppointmentsResponse"][];
        };
        "Jpm.V2.ExportAppointmentsResponse": {
            /** @description Work performed summaries for this appointment. Private preview: available for specific accounts only. */
            appointmentSummaries?: components["schemas"]["Jpm.V2.AppointmentSummaryApiModel"][] | null;
            /**
             * Format: int64
             * @description Appointment ID
             */
            id: number;
            /**
             * Format: int64
             * @description ID of the job that the appointment was created for
             */
            jobId: number;
            /** @description Appointment number */
            appointmentNumber?: string | null;
            /**
             * Format: date-time
             * @description Appointment's start date/time (in UTC)
             */
            start: string;
            /**
             * Format: date-time
             * @description Appointment's end date/time (in UTC)
             */
            end: string;
            /**
             * Format: date-time
             * @description Arrival window start date/time (in UTC), if configured
             */
            arrivalWindowStart?: string | null;
            /**
             * Format: date-time
             * @description Arrival window end date/time (in UTC), if configured
             */
            arrivalWindowEnd?: string | null;
            /** @description Appointment's status */
            status: components["schemas"]["Jpm.V2.Base.AppointmentStatus"];
            /**
             * Format: multiline
             * @description Special instructions associated to the appointment
             */
            specialInstructions?: string | null;
            /**
             * Format: date-time
             * @description When the appointment was created (in UTC)
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description When the appointment was modified (in UTC)
             */
            modifiedOn: string;
            /**
             * Format: int64
             * @description Id of a customer that the appointment was created for
             */
            customerId: number;
            /** @description Returns true if the appointment is unused */
            unused: boolean;
            /**
             * Format: int64
             * @description ID of the user that created the appointment
             */
            createdById: number;
            /** @description Returns true if the appointment is confirmed */
            isConfirmed: boolean;
            /** @description Whether this appointment is active */
            active: boolean;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Jpm.V2.ExportJobCanceledLogResponse": {
            /**
             * @description Indicates whether the export feed has reached its logical "end", or if there is more to export.
             *     True means the consumer can invoke another request right away using new continuation token value.
             *     False means there is now new data for the export, and the consumer should wait for some time (5-10 minutes)
             *     before making another request.
             */
            hasMore: boolean;
            /** @description Continuation token used to resume the export operation. The value should be used in "from" query parameter of the following request. */
            continueFrom: string;
            /** @description The collection of exported items, usually sorted chronologically based on modification date */
            data: components["schemas"]["Jpm.V2.ExportJobCanceledLogResponse"][];
        };
        "Jpm.V2.ExportJobCanceledLogResponse": {
            /**
             * Format: int64
             * @description ID of the job canceled log
             */
            id: number;
            /**
             * Format: int64
             * @description ID of the job that has been canceled
             */
            jobId: number;
            /**
             * Format: int64
             * @description ID of the job cancel reason
             */
            reasonId: number;
            /** @description Job canceled log additional comments */
            memo?: string | null;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when the job canceled log was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of user who canceled the job
             */
            createdById: number;
            /** @description Whether the job canceled log is active */
            active: boolean;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Jpm.V2.ExportJobNotesResponse": {
            /**
             * @description Indicates whether the export feed has reached its logical "end", or if there is more to export.
             *     True means the consumer can invoke another request right away using new continuation token value.
             *     False means there is now new data for the export, and the consumer should wait for some time (5-10 minutes)
             *     before making another request.
             */
            hasMore: boolean;
            /** @description Continuation token used to resume the export operation. The value should be used in "from" query parameter of the following request. */
            continueFrom: string;
            /** @description The collection of exported items, usually sorted chronologically based on modification date */
            data: components["schemas"]["Jpm.V2.ExportJobNotesResponse"][];
        };
        "Jpm.V2.ExportJobNotesResponse": {
            /**
             * Format: int64
             * @description Note Id.
             */
            id: number;
            /** @description Whether this note is active, or not anymore. */
            active: boolean;
            /** @description Text content of a note */
            text: string;
            /** @description Whether the note is pinned to the top */
            isPinned: boolean;
            /**
             * Format: int64
             * @description ID of user who created this note
             */
            createdById: number;
            /**
             * Format: date-time
             * @description Date/time (in UTC) the note was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Date/time (in UTC) the note was modified
             */
            modifiedOn: string;
            /**
             * Format: int64
             * @description Notes Job Id.
             */
            jobId: number;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Jpm.V2.ExportProjectNotesResponse": {
            /**
             * @description Indicates whether the export feed has reached its logical "end", or if there is more to export.
             *     True means the consumer can invoke another request right away using new continuation token value.
             *     False means there is now new data for the export, and the consumer should wait for some time (5-10 minutes)
             *     before making another request.
             */
            hasMore: boolean;
            /** @description Continuation token used to resume the export operation. The value should be used in "from" query parameter of the following request. */
            continueFrom: string;
            /** @description The collection of exported items, usually sorted chronologically based on modification date */
            data: components["schemas"]["Jpm.V2.ExportProjectNotesResponse"][];
        };
        "Jpm.V2.ExportProjectNotesResponse": {
            /**
             * Format: int64
             * @description Note Id.
             */
            id: number;
            /** @description Whether this note is active, or not anymore. */
            active: boolean;
            /** @description Text content of a note */
            text: string;
            /** @description Whether the note is pinned to the top */
            isPinned: boolean;
            /**
             * Format: int64
             * @description ID of user who created this note
             */
            createdById: number;
            /**
             * Format: date-time
             * @description Date/time (in UTC) the note was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Date/time (in UTC) the note was modified
             */
            modifiedOn: string;
            /**
             * Format: int64
             * @description Notes Project Id.
             */
            projectId: number;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Jpm.V2.ExportJobHistoryResponse": {
            /**
             * @description Indicates whether the export feed has reached its logical "end", or if there is more to export.
             *     True means the consumer can invoke another request right away using new continuation token value.
             *     False means there is now new data for the export, and the consumer should wait for some time (5-10 minutes)
             *     before making another request.
             */
            hasMore: boolean;
            /** @description Continuation token used to resume the export operation. The value should be used in "from" query parameter of the following request. */
            continueFrom: string;
            /** @description The collection of exported items, usually sorted chronologically based on modification date */
            data: components["schemas"]["Jpm.V2.ExportJobHistoryResponse"][];
        };
        "Jpm.V2.ExportJobHistoryResponse": {
            /**
             * Format: int64
             * @description ID of the job
             */
            jobId: number;
            /** @description Job history entries */
            history: components["schemas"]["Jpm.V2.ExportJobHistoryEntry"][];
        };
        "Jpm.V2.ExportJobHistoryEntry": {
            /**
             * Format: int64
             * @description ID of the log
             */
            id: number;
            /**
             * Format: int64
             * @description ID of the employee
             */
            employeeId?: number | null;
            /** @description Type of the job status */
            eventType: string;
            /**
             * Format: date-time
             * @description Date of the log
             */
            date: string;
            /** @description Scheduling tool used */
            usedSchedulingTool: components["schemas"]["Jpm.V2.JobSchedulingTool"];
        };
        /** @enum {string} */
        "Jpm.V2.JobSchedulingTool": "Manual" | "SmartSchedule" | "SmartDispatch" | "TechnicianRouteOptimization" | "AdaptiveCapacity" | "Routing";
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Jpm.V2.JobCancelReasonResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Jpm.V2.JobCancelReasonResponse"][];
        };
        "Jpm.V2.JobCancelReasonResponse": {
            /**
             * Format: int64
             * @description ID of the job cancel reason
             */
            id: number;
            /** @description Name of the job cancel reason */
            name: string;
            /** @description Whether the job cancel reason is active */
            active: boolean;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when the job was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when job was last modified
             */
            modifiedOn: string;
        };
        "Jpm.V2.JobEquipmentResponse": {
            /** @description IDs of the equipment items attached to the job */
            equipmentIds: number[];
        };
        "Jpm.V2.AttachJobEquipmentRequest": {
            /** @description IDs of the equipment items to attach to the job */
            equipmentIds: number[];
        };
        "Jpm.V2.DetachJobEquipmentRequest": {
            /** @description IDs of the equipment items to detach from the job */
            equipmentIds: number[];
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Jpm.V2.JobHoldReasonResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Jpm.V2.JobHoldReasonResponse"][];
        };
        "Jpm.V2.JobHoldReasonResponse": {
            /**
             * Format: int64
             * @description Job Hold Reason Id
             */
            id: number;
            /** @description Job Hold Reason Name */
            name: string;
            /** @description Job Hold Reason Active Status */
            active: boolean;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when the job was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when job was last modified
             */
            modifiedOn: string;
        };
        "Jpm.V2.JobResponse": {
            /**
             * Format: int64
             * @description ID of the job
             */
            id: number;
            /** @description Job number */
            jobNumber: string;
            /**
             * Format: int64
             * @description ID of the job's project
             */
            projectId?: number | null;
            /**
             * Format: int64
             * @description ID of the job's customer
             */
            customerId: number;
            /**
             * Format: int64
             * @description ID of the job's location
             */
            locationId: number;
            /** @description Status of the job */
            jobStatus: string;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when the job was completed
             */
            completedOn?: string | null;
            /**
             * Format: int64
             * @description ID of the job's business unit
             */
            businessUnitId: number;
            /**
             * Format: int64
             * @description ID of job type
             */
            jobTypeId: number;
            /** @description Priority of the job */
            priority: string;
            /**
             * Format: int64
             * @description ID of the job's campaign
             */
            campaignId: number;
            /**
             * Format: int64
             * @description Number of appointments on the job
             */
            appointmentCount: number;
            /**
             * Format: int64
             * @description ID of the first appointment on the job
             */
            firstAppointmentId: number;
            /**
             * Format: int64
             * @description ID of the last appointment on the job
             */
            lastAppointmentId: number;
            /**
             * Format: int64
             * @description ID of the job for which this job is a recall
             */
            recallForId?: number | null;
            /**
             * Format: int64
             * @description ID of the job for which this job is a warranty
             */
            warrantyId?: number | null;
            /**
             * @description Object that contains:
             *     JobId: ID of the job from which this job was generated
             *     EmployeeId: ID of the office user or technician
             */
            jobGeneratedLeadSource?: components["schemas"]["Jpm.V2.Base.JobGeneratedLeadSource"] | null;
            /** @description Whether the job is a no-charge job */
            noCharge: boolean;
            /** @description Whether notifications will be sent to customers */
            notificationsEnabled: boolean;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when the job was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of the user who created the job
             */
            createdById: number;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when job was last modified
             */
            modifiedOn: string;
            /** @description Tags on the job */
            tagTypeIds: number[];
            /**
             * Format: int64
             * @description ID of the Call that resulted in this job
             */
            leadCallId?: number | null;
            /**
             * Format: int64
             * @description ID of the Call that 3rd-party agents are enabled to set.
             */
            partnerLeadCallId?: number | null;
            /**
             * Format: int64
             * @description ID of the Booking that resulted in this job
             */
            bookingId?: number | null;
            /**
             * Format: int64
             * @description ID of the Technician that sold this job
             */
            soldById?: number | null;
            /** @description Customer PO */
            customerPo: string;
            /**
             * Format: int64
             * @description ID of the invoice associated with this job.
             */
            invoiceId: number;
            /**
             * Format: int64
             * @description ID of the Membership associated with this job.
             */
            membershipId?: number | null;
            /**
             * Format: decimal
             * @description Total amount of the job
             */
            total?: number | null;
            /**
             * Format: int64
             * @description ID of the sold estimate from which this job was created
             */
            createdFromEstimateId?: number | null;
            /** @description IDs of estimates that are related to this job */
            estimateIds: number[];
            /** @description IDs of equipment items attached to this job */
            equipmentIds: number[];
            /** @description Indicates whether Dispatch Pro is enabled for this job */
            isAutoDispatched?: boolean | null;
            /**
             * Format: html
             * @description Job summary
             */
            summary?: string | null;
            /** @description Custom fields on the job */
            customFields: components["schemas"]["CustomFieldApiModel"][];
            /**
             * @description List of external data attached to this job,
             *     that corresponds to the application guid provided in the request.
             */
            externalData: components["schemas"]["Jpm.V2.ExternalDataModel"][];
            /** @description Summary of work completed on the job. Private preview: available for specific accounts only. */
            summaryOfWork?: string | null;
        };
        "Jpm.V2.JobCreateRequest": {
            /**
             * Format: int64
             * @description ID of the job's customer
             */
            customerId: number;
            /**
             * Format: int64
             * @description ID of the job's location
             */
            locationId: number;
            /**
             * Format: int64
             * @description ID of the job's project
             */
            projectId?: number | null;
            /**
             * Format: int64
             * @description ID of the job's business unit
             */
            businessUnitId: number;
            /**
             * @description Object that contains:
             *     JobId: ID of the job from which this job was generated
             *     EmployeeId: ID of the office user or technician
             */
            jobGeneratedLeadSource?: components["schemas"]["Jpm.V2.Base.JobGeneratedLeadSource"] | null;
            /**
             * Format: int64
             * @description ID of job type
             */
            jobTypeId: number;
            /** @description Priority of the job */
            priority: string;
            /**
             * Format: int64
             * @description ID of the job's campaign
             */
            campaignId: number;
            /** @description List of appointment information */
            appointments: components["schemas"]["Jpm.V2.AppointmentInformation"][];
            /**
             * Format: html
             * @description Job summary
             */
            summary?: string | null;
            /** @description Custom fields on the job */
            customFields?: components["schemas"]["Jpm.V2.CustomFieldModel"][] | null;
            /** @description List of IDs of tags on the job */
            tagTypeIds?: number[] | null;
            /**
             * @description Optional model that contains a list of external data items
             *     that should be attached to this job.
             */
            externalData?: components["schemas"]["Jpm.V2.ExternalDataCreateRequest"] | null;
            /**
             * @description Optional model that informs if invoice should requires a signature or not
             *     if not informed will follow the rules for location and job type
             */
            invoiceSignatureIsRequired?: boolean | null;
            /** @description Customer PO */
            customerPo?: string | null;
            /**
             * Format: int64
             * @description ID of the Technician who sold the job
             */
            soldById?: number | null;
            /**
             * Format: int64
             * @description ID of the Call that 3rd-party agents are enabled to set.
             */
            partnerLeadCallId?: number | null;
            /**
             * Format: int64
             * @description ID of the Lead associated with this job
             */
            leadId?: number | null;
            /**
             * Format: int64
             * @description ID of the Booking that resulted in this job
             */
            bookingId?: number | null;
            /** @description Whether the job is a no-charge job. */
            noCharge?: boolean | null;
        };
        "Jpm.V2.AppointmentInformation": {
            /**
             * Format: date-time
             * @description Start date/time (in UTC) for the appointment
             */
            start: string;
            /**
             * Format: date-time
             * @description End date/time (in UTC) for the appointment
             */
            end: string;
            /**
             * Format: date-time
             * @description Start date/time (in UTC) for the arrival window of the appointment
             */
            arrivalWindowStart?: string | null;
            /**
             * Format: date-time
             * @description End date/time (in UTC) for the arrival window of the appointment
             */
            arrivalWindowEnd?: string | null;
            /** @description List of IDs of technicians who will be assigned on the appointment */
            technicianIds?: number[] | null;
        };
        "Jpm.V2.CustomFieldModel": {
            /**
             * Format: int64
             * @description ID of the custom field
             */
            typeId: number;
            /** @description Value of the custom field */
            value?: string | null;
        };
        "Jpm.V2.ExternalDataCreateRequest": {
            /**
             * Format: guid
             * @description Items that are created with a specific guid, could be fetched/updated/removed
             *     only when the same application guid is provided.
             */
            applicationGuid: string;
            /** @description External data list. */
            externalData: components["schemas"]["Jpm.V2.ExternalDataModel"][];
        };
        "Jpm.V2.CancelJobRequest": {
            /**
             * Format: int64
             * @description ID of job cancel reason
             */
            reasonId: number;
            /**
             * Format: multiline
             * @description Memo of job cancel reason
             */
            memo: string;
        };
        "Jpm.V2.UpdateJobRequest": {
            /**
             * Format: int64
             * @description ID of the job's customer
             */
            customerId?: number;
            /**
             * Format: int64
             * @description ID of the job's location
             */
            locationId?: number;
            /**
             * Format: int64
             * @description ID of the job's business unit
             */
            businessUnitId?: number;
            /**
             * @description Object that contains:
             *     JobId: ID of the job from which this job was generated
             *     EmployeeId: ID of the office user or technician
             */
            jobGeneratedLeadSource?: components["schemas"]["Jpm.V2.Base.JobGeneratedLeadSource"] | null;
            /**
             * Format: int64
             * @description ID of job type
             */
            jobTypeId?: number;
            /** @description Priority of the job */
            priority?: string;
            /**
             * Format: int64
             * @description ID of the job's campaign
             */
            campaignId?: number;
            /**
             * Format: html
             * @description Job summary
             */
            summary?: string;
            /** @description If set to true, update the business unit of invoice items on job's invoice */
            shouldUpdateInvoiceItems?: boolean;
            /**
             * @description List of custom fields and their values. This list must describe the full list of custom fields on the job.
             *     If job A has values for custom fields X and Y and this field only contains a model for custom field X, then
             *     the value for custom field Y on job A will be removed.
             */
            customFields?: components["schemas"]["Jpm.V2.CustomFieldModel"][];
            /**
             * @description List of tag types. This list must describe the full list of tags on the job. If job A has tags X and Y and
             *     this field only contains a ID for tag X, then tag Y on job A will be removed.
             */
            tagTypeIds?: number[];
            /** @description External data update model. */
            externalData?: components["schemas"]["Jpm.V2.ExternalDataUpdateRequest"];
            /** @description Customer PO */
            customerPo?: string;
            /**
             * Format: int64
             * @description ID of the Technician who sold the job.
             */
            soldById?: number | null;
            /** @description Indicates whether Dispatch Pro is enabled for this job */
            isAutoDispatched?: boolean;
            /** @description Summary of work completed on the job. Private preview: available for specific accounts only. */
            summaryOfWork?: string;
            /** @description Whether the job is a no-charge job. */
            noCharge?: boolean;
        };
        "Jpm.V2.ExternalDataUpdateRequest": {
            /**
             * @description External data patch mode.\
             *     "Replace" (default) replaces all existing keys with new values. If job A has custom data with keys X and Y and this field only contains an item
             *     with a key X, then custom data with a key Y on job A will be removed.\
             *     "Merge" will only replace key X in the example above. Keys with null value will be deleted.
             */
            patchMode?: components["schemas"]["Jpm.V2.ExternalDataPatchMode"] | null;
            /**
             * Format: guid
             * @description Items that are created with a specific guid, could be fetched/updated/removed
             *     only when the same application guid is provided.
             */
            applicationGuid: string;
            /** @description External data list. */
            externalData: components["schemas"]["Jpm.V2.ExternalDataUpdateModel"][];
        };
        /** @enum {string} */
        "Jpm.V2.ExternalDataPatchMode": "Replace" | "Merge";
        "Jpm.V2.ExternalDataUpdateModel": {
            /** @description External data key. */
            key: string;
            /**
             * Format: multiline
             * @description External data value.
             */
            value?: string | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Jpm.V2.JobResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Jpm.V2.JobResponse"][];
        };
        /** @enum {string} */
        "Jpm.V2.JobStatus": "Scheduled" | "Dispatched" | "InProgress" | "Hold" | "Completed" | "Canceled";
        /** @enum {string} */
        "Jpm.V2.JobAppointmentStatus": "Scheduled" | "Dispatched" | "Working" | "Hold" | "Done" | "Canceled";
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Jpm.V2.NoteResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Jpm.V2.NoteResponse"][];
        };
        "Jpm.V2.NoteResponse": {
            /** @description Text content of a note */
            text: string;
            /** @description Whether the note is pinned to the top */
            isPinned: boolean;
            /**
             * Format: int64
             * @description ID of user who created this note
             */
            createdById: number;
            /**
             * Format: date-time
             * @description Date/time (in UTC) the note was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Date/time (in UTC) the note was modified
             */
            modifiedOn: string;
        };
        "Jpm.V2.JobNoteCreateRequest": {
            /** @description Text content of job note */
            text: string;
            /** @description Whether to pin job note to the top */
            pinToTop?: boolean | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Jpm.V2.HoldReasonResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Jpm.V2.HoldReasonResponse"][];
        };
        "Jpm.V2.HoldReasonResponse": {
            /**
             * Format: int64
             * @description Job ID
             */
            jobId: number;
            /**
             * Format: int64
             * @description ID of the reason
             */
            reasonId: number;
            /** @description Name of the reason */
            name: string;
            /** @description Text of the reason */
            text: string;
            appointmentHoldReasons: components["schemas"]["Jpm.V2.AppointmentHoldReason"][];
        };
        "Jpm.V2.AppointmentHoldReason": {
            /**
             * Format: int64
             * @description Appointment ID
             */
            appointmentId: number;
            /**
             * Format: int64
             * @description ID of the hold reason
             */
            reasonId: number;
            /** @description Name of the hold reason */
            name: string;
            /** @description Additional details about why the appointment was placed on hold */
            text: string;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Jpm.V2.CancelReasonResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Jpm.V2.CancelReasonResponse"][];
        };
        "Jpm.V2.CancelReasonResponse": {
            /**
             * Format: int64
             * @description Job ID
             */
            jobId: number;
            /**
             * Format: int64
             * @description ID of the reason
             */
            reasonId: number;
            /** @description Name of the reason */
            name: string;
            /** @description Text of the reason */
            text: string;
        };
        "Jpm.V2.JobHistoryResponse": {
            /** @description List of logs for the job */
            history?: components["schemas"]["Jpm.Jobs.JobHistoryItemModel"][] | null;
        };
        "Jpm.Jobs.JobHistoryItemModel": {
            /**
             * Format: int64
             * @description ID of the log
             */
            id: number;
            /**
             * Format: int64
             * @description ID of the employee
             */
            employeeId?: number | null;
            /** @description Type of the job status */
            eventType: string;
            /**
             * Format: date-time
             * @description Date of the log
             */
            date: string;
            /** @description Scheduling tool used */
            usedSchedulingTool: components["schemas"]["Jpm.Jobs.JobSchedulingTool"];
            /** @description Memo associated with the log */
            memo: string;
        };
        /** @enum {string} */
        "Jpm.Jobs.JobSchedulingTool": "Manual" | "SmartSchedule" | "SmartDispatch" | "TechnicianRouteOptimization" | "AdaptiveCapacity" | "Routing";
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Jpm.V2.JobCanceledLogResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Jpm.V2.JobCanceledLogResponse"][];
        };
        /** @description JobCanceledLog response model */
        "Jpm.V2.JobCanceledLogResponse": {
            /**
             * Format: int64
             * @description ID of the job canceled log
             */
            id: number;
            /**
             * Format: int64
             * @description ID of the job that has been canceled
             */
            jobId: number;
            /**
             * Format: int64
             * @description ID of the job cancel reason
             */
            reasonId: number;
            /** @description Job canceled log additional comments */
            memo?: string | null;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when the job canceled log was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of user who canceled the job
             */
            createdById: number;
            /** @description Whether the job canceled log is active */
            active: boolean;
        };
        /** @description JobBookedLog response model */
        "Jpm.V2.JobBookedLogResponse": {
            /**
             * Format: int64
             * @description ID of the job booked log
             */
            id: number;
            /**
             * Format: int64
             * @description ID of the job that has been booked
             */
            jobId: number;
            /**
             * Format: int64
             * @description ID of the job that has been booked
             */
            jobAppointmentId: number;
            /**
             * Format: date-time
             * @description Start date/time (in UTC) of the job
             */
            start: string;
            /**
             * Format: date-time
             * @description Arrival window start date/time (in UTC) of the job
             */
            arrivalWindowStart?: string | null;
            /**
             * Format: date-time
             * @description Arrival window end date/time (in UTC) of the job
             */
            arrivalWindowEnd?: string | null;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when the job booked log was created
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of user who booked the job
             */
            createdById: number;
            /** @description Whether the job booked log is active */
            active: boolean;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Jpm.V2.CustomFieldTypeResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Jpm.V2.CustomFieldTypeResponse"][];
        };
        "Jpm.V2.CustomFieldTypeResponse": {
            /**
             * Format: int64
             * @description The ID of the custom field type.
             */
            id: number;
            /** @description The name of the custom field type. */
            name: string;
            /** @description Indicates the data type of the custom field. */
            dataType: components["schemas"]["Jpm.V2.CustomFieldDataType"];
            /** @description Indicates the dropdown options if the custom field is a dropdown data type. */
            dataTypeOptions?: string[] | null;
            /**
             * Format: date-time
             * @description The date and time when the custom field type was created.
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description The date and time when the custom field type was last modified.
             */
            modifiedOn: string;
        };
        /** @enum {string} */
        "Jpm.V2.CustomFieldDataType": "Text" | "Dropdown" | "Numeric";
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Jpm.V2.JobTypeResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Jpm.V2.JobTypeResponse"][];
        };
        "Jpm.V2.JobTypeResponse": {
            /**
             * Format: int64
             * @description ID of the job type
             */
            id: number;
            /** @description Name of the job type */
            name: string;
            /** @description Business Unit Ids associated with job type */
            businessUnitIds: number[];
            /** @description List of skills required to complete this job */
            skills: string[];
            /** @description Tags here will automatically be applied to jobs booked */
            tagTypeIds: number[];
            /** @description Level of urgency for this type of job */
            priority: string;
            /**
             * Format: int64
             * @description Avg length of time for this job type
             */
            duration: number;
            /**
             * Format: decimal
             * @description A job is considered as converted if subtotal meets or exceeds this threshold
             */
            soldThreshold?: number | null;
            /** @description Let’s you group other job types by class */
            class: string;
            /**
             * Format: multiline
             * @description Text that is automatically added to job summary when booked
             */
            summary: string;
            /** @description When true, all jobs are considered no charge */
            noCharge: boolean;
            /** @description When true enforce recurring service event */
            enforceRecurringServiceEventSelection?: boolean | null;
            /** @description When true signature is required */
            invoiceSignaturesRequired: boolean;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when job type was last modified
             */
            modifiedOn: string;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when job type was created
             */
            createdOn: string;
            /**
             * @description List of external data attached to this job type,
             *     that corresponds to the application guid provided in the request.
             */
            externalData: components["schemas"]["Jpm.V2.ExternalDataModel"][];
            /** @description When true, job type is active */
            active: boolean;
            /** @description When true, job type is enabled for dispatch pro */
            isSmartDispatched: boolean;
            /** @description Default action when an estimate is sold for this job type */
            defaultEstimateSoldAction: string;
            /** @description Custom field type IDs assigned to this job type */
            customFieldTypeIds: number[];
        };
        "Jpm.V2.CreateJobTypeRequest": {
            /** @description Name of the job type */
            name: string;
            /** @description Business Unit Ids associated with job type */
            businessUnitIds?: number[] | null;
            /** @description List of skills required to complete this job */
            skills?: string[] | null;
            /** @description Tags here will automatically be applied to jobs booked */
            tagTypeIds?: number[] | null;
            /** @description Level of urgency for this type of job */
            priority?: string | null;
            /**
             * Format: int32
             * @description Avg length of time for this job type
             */
            duration?: number | null;
            /**
             * Format: decimal
             * @description A job is considered as converted if subtotal meets or exceeds this threshold
             */
            soldThreshold?: number | null;
            /** @description Let’s you group other job types by class */
            class?: string | null;
            /**
             * Format: multiline
             * @description Text that is automatically added to job summary when booked
             */
            summary?: string | null;
            /** @description When true, all jobs are considered no charge */
            noCharge?: boolean | null;
            /** @description When true enforce recurring service event */
            enforceRecurringServiceEventSelection?: boolean | null;
            /** @description When true signature is required */
            invoiceSignaturesRequired?: boolean | null;
            /**
             * @description Optional model that contains a list of external data items
             *     that should be attached to this job type.
             */
            externalData?: components["schemas"]["Jpm.V2.ExternalDataCreateRequest"] | null;
            /** @description Default action when an estimate is sold for this job type */
            defaultEstimateSoldAction?: string | null;
            /** @description Custom field type IDs to assign to this job type. Order determines display order. */
            customFieldTypeIds?: number[] | null;
        };
        "Jpm.V2.UpdateJobTypeRequest": {
            /** @description Name of the job type */
            name?: string;
            /** @description Business Unit Ids associated with job type */
            businessUnitIds?: number[];
            /** @description List of skills required to complete this job */
            skills?: string[];
            /** @description Tags here will automatically be applied to jobs booked */
            tagTypeIds?: number[];
            /** @description Level of urgency for this type of job */
            priority?: string;
            /**
             * Format: int32
             * @description Avg length of time for this job type
             */
            duration?: number;
            /**
             * Format: decimal
             * @description A job is considered as converted if subtotal meets or exceeds this threshold
             */
            soldThreshold?: number | null;
            /** @description Let’s you group other job types by class */
            class?: string;
            /** @description Text that is automatically added to job summary when booked */
            summary?: string;
            /** @description When true, all jobs are considered no charge */
            noCharge?: boolean;
            /** @description When true enforce recurring service event */
            enforceRecurringServiceEventSelection?: boolean;
            /** @description When true signature is required */
            invoiceSignaturesRequired?: boolean;
            /** @description External data update model */
            externalData?: components["schemas"]["Jpm.V2.ExternalDataUpdateRequest"];
            /** @description Default action when an estimate is sold for this job type */
            defaultEstimateSoldAction?: string;
            /** @description Custom field type IDs to assign to this job type. Order determines display order. */
            customFieldTypeIds?: number[];
            /**
             * @description Custom fields update mode.\
             *     "Replace" (default) replaces all existing custom field type assignments with the provided list.
             *     If the job type has custom fields X and Y and only X is provided, Y will be removed.\
             *     "Merge" preserves existing custom field type assignments and appends any new IDs from the provided list.
             */
            customFieldsUpdateMode?: components["schemas"]["Jpm.V2.CustomFieldsUpdateMode"] | null;
        };
        /** @enum {string} */
        "Jpm.V2.CustomFieldsUpdateMode": "Replace" | "Merge";
        "Jpm.V2.ProjectResponse": {
            /**
             * Format: int64
             * @description ID of the project
             */
            id: number;
            /** @description Project number */
            number: string;
            /** @description Project name */
            name?: string | null;
            /**
             * Format: html
             * @description Project summary
             */
            summary?: string | null;
            /** @description Project status */
            status?: string | null;
            /**
             * Format: int64
             * @description Project status id
             */
            statusId?: number | null;
            /** @description Project substatus */
            subStatus?: string | null;
            /**
             * Format: int64
             * @description Project substatus id
             */
            subStatusId?: number | null;
            /**
             * Format: int64
             * @description ID of the project's customer
             */
            customerId: number;
            /**
             * Format: int64
             * @description ID of the project's location
             */
            locationId: number;
            /**
             * Format: int64
             * @description ID of the project's type
             */
            projectTypeId?: number | null;
            /** @description IDs of project managers for the project. */
            projectManagerIds: number[];
            /** @description IDs of business units for the project. */
            businessUnitIds: number[];
            /**
             * Format: date-time
             * @description Start date of the project
             */
            startDate?: string | null;
            /**
             * Format: date-time
             * @description Target completion date of the project
             */
            targetCompletionDate?: string | null;
            /**
             * Format: date-time
             * @description Actual completion date of the project
             */
            actualCompletionDate?: string | null;
            /**
             * Format: date-time
             * @description Projects last modification date
             */
            modifiedOn?: string | null;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when the project was created
             */
            createdOn: string;
            /** @description Custom fields on the project */
            customFields: components["schemas"]["CustomFieldApiModel"][];
            /**
             * @description List of external data attached to this project,
             *     that corresponds to the application guid provided in the request.
             */
            externalData: components["schemas"]["Jpm.V2.ExternalDataModel"][];
            /** @description List of jobs associated with this project. */
            jobIds: number[];
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Jpm.V2.ProjectResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Jpm.V2.ProjectResponse"][];
        };
        "Jpm.V2.CreateProjectRequest": {
            /**
             * Format: int64
             * @description ID of the project's location
             */
            locationId: number;
            /**
             * Format: int64
             * @description ID of the project's customer
             */
            customerId?: number | null;
            /**
             * Format: int64
             * @description ID of the project's type
             */
            projectTypeId?: number | null;
            /** @description IDs of the project's managers */
            projectManagerIds?: number[] | null;
            /** @description Project name */
            name?: string | null;
            /**
             * Format: html
             * @description Project summary
             */
            summary?: string | null;
            /**
             * Format: int64
             * @description Project status id
             */
            statusId?: number | null;
            /**
             * Format: int64
             * @description Project sub status id
             */
            subStatusId?: number | null;
            /**
             * Format: date-time
             * @description Start date of the project
             */
            startDate?: string | null;
            /**
             * Format: date-time
             * @description Target completion date of the project
             */
            targetCompletionDate?: string | null;
            /**
             * Format: date-time
             * @description Actual completion date of the project
             */
            actualCompletionDate?: string | null;
            /** @description Project record’s custom fields */
            customFields?: components["schemas"]["Jpm.V2.CustomFieldCreateOrUpdateModel"][] | null;
            /**
             * @description Optional model that contains a list of external data items
             *     that should be attached to this project.
             */
            externalData?: components["schemas"]["Jpm.V2.ExternalDataCreateRequest"] | null;
            /** @description IDs of business units for the project. */
            businessUnitIds?: number[] | null;
        };
        "Jpm.V2.CustomFieldCreateOrUpdateModel": {
            /**
             * Format: int64
             * @description ID of the custom field
             */
            typeId: number;
            /** @description Value of the custom field */
            value: string;
        };
        "Jpm.V2.UpdateProjectRequest": {
            /** @description IDs of the project's managers */
            projectManagerIds?: number[];
            /** @description IDs of the project's jobs */
            jobIds?: number[];
            /** @description IDs of business units for the project. */
            businessUnitIds?: number[];
            /** @description Project name */
            name?: string;
            /**
             * Format: html
             * @description Project summary
             */
            summary?: string;
            /**
             * Format: int64
             * @description Project status id
             */
            statusId?: number;
            /**
             * Format: int64
             * @description Project sub status id
             */
            subStatusId?: number;
            /**
             * Format: int64
             * @description Project type id
             */
            projectTypeId?: number | null;
            /**
             * Format: date-time
             * @description Start date of the project
             */
            startDate?: string;
            /**
             * Format: date-time
             * @description Target completion date of the project
             */
            targetCompletionDate?: string;
            /**
             * Format: date-time
             * @description Actual completion date of the project
             */
            actualCompletionDate?: string;
            /** @description Project record’s custom fields */
            customFields?: components["schemas"]["Jpm.V2.CustomFieldCreateOrUpdateModel"][];
            /** @description External data update model. */
            externalData?: components["schemas"]["Jpm.V2.ExternalDataUpdateRequest"];
        };
        "Jpm.V2.ProjectNoteCreateRequest": {
            /** @description Text content of job note */
            text: string;
            /** @description Whether to pin job note to the top */
            pinToTop?: boolean | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Jpm.V2.ProjectStatusResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Jpm.V2.ProjectStatusResponse"][];
        };
        "Jpm.V2.ProjectStatusResponse": {
            /**
             * Format: int64
             * @description ID of the project status
             */
            id: number;
            /** @description Name of the project status */
            name: string;
            /**
             * Format: int32
             * @description Order of the project status
             */
            order: number;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when project status was last modified
             */
            modifiedOn: string;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Jpm.V2.ProjectSubStatusResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Jpm.V2.ProjectSubStatusResponse"][];
        };
        "Jpm.V2.ProjectSubStatusResponse": {
            /**
             * Format: int64
             * @description ID of the project sub status
             */
            id: number;
            /** @description Name of the project sub status */
            name: string;
            /**
             * Format: int64
             * @description Id of the parent status
             */
            statusId: number;
            /**
             * Format: int32
             * @description Order of the project status
             */
            order: number;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when project sub status was last modified
             */
            modifiedOn: string;
            /** @description When true, project sub status is active */
            active: boolean;
        };
        /** @description Represents a project type. */
        "Jpm.V2.ProjectTypeResponse": {
            /**
             * Format: int64
             * @description The unique identifier of the project type.
             */
            id: number;
            /** @description The name of the project type. */
            name: string;
            /** @description The description of the project type. */
            description: string;
            /**
             * Format: int64
             * @description The ID of the user who created this project type.
             */
            createdById?: number | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Jpm.V2.ProjectTypeResponse": {
            /**
             * Format: int32
             * @description From which page this output has started
             */
            page: number;
            /**
             * Format: int32
             * @description Page size for this query (i.e. how many records were requested to return)
             */
            pageSize: number;
            /** @description True if there are more records in the query than returned in this result */
            hasMore: boolean;
            /**
             * Format: int32
             * @description Total count of records for this query (can optionally be populated)
             */
            totalCount?: number | null;
            /** @description The collection of result items, will never have more than PageSize items */
            data: components["schemas"]["Jpm.V2.ProjectTypeResponse"][];
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    Appointments_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The appointment ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "jobId": 0,
                     *       "appointmentNumber": "string",
                     *       "start": "string",
                     *       "end": "string",
                     *       "arrivalWindowStart": "string",
                     *       "arrivalWindowEnd": "string",
                     *       "status": {},
                     *       "specialInstructions": "string",
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "customerId": 0,
                     *       "unused": true,
                     *       "createdById": 0,
                     *       "isConfirmed": true,
                     *       "active": true,
                     *       "appointmentSummaries": [
                     *         {
                     *           "createdOn": "string",
                     *           "jobAppointmentId": 0,
                     *           "jobId": 0,
                     *           "modifiedOn": "string",
                     *           "notes": "string",
                     *           "technicianId": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.V2.AppointmentResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Appointment was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Appointments_Delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The appointment ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Appointment was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Appointment is in the state that doesn't allow deletion */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Appointments_GetList: {
        parameters: {
            query?: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
                /** @description Return all appointments for this job */
                jobId?: number;
                /** @description Return all appointments for jobs that are part of this project */
                projectId?: number;
                /** @description Return all appointments with this appointment number */
                number?: string;
                /**
                 * @description Return items with specified status AppointmentStatus\
                 *     Values: [Scheduled, Dispatched, Working, Hold, Done, Canceled]
                 */
                status?: string & components["schemas"]["Jpm.V2.Base.AppointmentStatus"];
                /** @description Return appointments that start on or after the specified date/time (in UTC) */
                startsOnOrAfter?: string;
                /** @description Return appointments that start before the specified date/time (in UTC) */
                startsBefore?: string;
                /** @description Return appointments this technician is assigned to */
                technicianId?: number;
                /** @description Return appointments for the specified Customer */
                customerId?: number;
                /** @description Return appointments that are unused */
                unused?: boolean;
                /** @description Return appointments modified before a certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return appointments modified on or after a certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Return appointments created on or after a certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return appointments created before a certain date/time (in UTC) */
                createdBefore?: string;
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /**
                 * @description Applies sorting by the specified field:\
                 *     "?sort=+FieldName" for ascending order,\
                 *     "?sort=-FieldName" for descending order.\
                 *     \
                 *     Available fields are: Id, ModifiedOn, CreatedOn.
                 */
                sort?: string;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "jobId": 0,
                     *           "appointmentNumber": "string",
                     *           "start": "string",
                     *           "end": "string",
                     *           "arrivalWindowStart": "string",
                     *           "arrivalWindowEnd": "string",
                     *           "status": {},
                     *           "specialInstructions": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "customerId": 0,
                     *           "unused": true,
                     *           "createdById": 0,
                     *           "isConfirmed": true,
                     *           "active": true,
                     *           "appointmentSummaries": [
                     *             {
                     *               "createdOn": "string",
                     *               "jobAppointmentId": 0,
                     *               "jobId": 0,
                     *               "modifiedOn": "string",
                     *               "notes": "string",
                     *               "technicianId": 0
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Jpm.V2.AppointmentResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Appointments_Add: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "jobId": 0,
                 *       "start": "string",
                 *       "end": "string",
                 *       "arrivalWindowStart": "string",
                 *       "arrivalWindowEnd": "string",
                 *       "technicianIds": [
                 *         0
                 *       ],
                 *       "specialInstructions": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Jpm.V2.AppointmentAddRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "jobId": 0,
                     *       "appointmentNumber": "string",
                     *       "start": "string",
                     *       "end": "string",
                     *       "arrivalWindowStart": "string",
                     *       "arrivalWindowEnd": "string",
                     *       "status": {},
                     *       "specialInstructions": "string",
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "customerId": 0,
                     *       "unused": true,
                     *       "createdById": 0,
                     *       "isConfirmed": true,
                     *       "active": true,
                     *       "appointmentSummaries": [
                     *         {
                     *           "createdOn": "string",
                     *           "jobAppointmentId": 0,
                     *           "jobId": 0,
                     *           "modifiedOn": "string",
                     *           "notes": "string",
                     *           "technicianId": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.V2.AppointmentResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Some conflict occurred while executing the request */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Appointments_Reschedule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The appointment ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The rescheduling request details */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "start": "string",
                 *       "end": "string",
                 *       "arrivalWindowStart": "string",
                 *       "arrivalWindowEnd": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Jpm.V2.AppointmentRescheduleRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "jobId": 0,
                     *       "appointmentNumber": "string",
                     *       "start": "string",
                     *       "end": "string",
                     *       "arrivalWindowStart": "string",
                     *       "arrivalWindowEnd": "string",
                     *       "status": {},
                     *       "specialInstructions": "string",
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "customerId": 0,
                     *       "unused": true,
                     *       "createdById": 0,
                     *       "isConfirmed": true,
                     *       "active": true,
                     *       "appointmentSummaries": [
                     *         {
                     *           "createdOn": "string",
                     *           "jobAppointmentId": 0,
                     *           "jobId": 0,
                     *           "modifiedOn": "string",
                     *           "notes": "string",
                     *           "technicianId": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.V2.AppointmentResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Job appointment was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Some conflict occurred while executing the request */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Appointments_Hold: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The appointment ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The hold request details */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "reasonId": 0,
                 *       "memo": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Jpm.V2.HoldAppointmentRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Some conflict occurred while executing the request */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Appointments_RemoveHold: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The appointment ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Appointment was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Appointment is not on hold */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Appointments_UpdateSpecialInstructions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The appointment ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The update special instructions request details */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "specialInstructions": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Jpm.V2.UpdateAppointmentSpecialInstructionsRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "jobId": 0,
                     *       "appointmentNumber": "string",
                     *       "start": "string",
                     *       "end": "string",
                     *       "arrivalWindowStart": "string",
                     *       "arrivalWindowEnd": "string",
                     *       "status": {},
                     *       "specialInstructions": "string",
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "customerId": 0,
                     *       "unused": true,
                     *       "createdById": 0,
                     *       "isConfirmed": true,
                     *       "active": true,
                     *       "appointmentSummaries": [
                     *         {
                     *           "createdOn": "string",
                     *           "jobAppointmentId": 0,
                     *           "jobId": 0,
                     *           "modifiedOn": "string",
                     *           "notes": "string",
                     *           "technicianId": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.V2.AppointmentResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Some conflict occurred while executing the request */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Appointments_Confirm: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The appointment ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Appointment was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Appointment is already confirmed */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Appointments_RemoveConfirmation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The appointment ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Appointment was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Appointment was not confirmed */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Appointments_SetSummary: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The appointment ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The summary to set */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "notes": "string",
                 *       "technicianId": 0
                 *     }
                 */
                "application/json": components["schemas"]["Jpm.V2.SetAppointmentSummaryRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "createdOn": "string",
                     *       "jobAppointmentId": 0,
                     *       "jobId": 0,
                     *       "modifiedOn": "string",
                     *       "notes": "string",
                     *       "technicianId": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.V2.AppointmentSummaryApiModel"];
                };
            };
            /** @description Invalid request or feature not enabled */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Appointment was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    BudgetCodes_ListCompanySegments: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
                includeTotal?: boolean;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "name": "string",
                     *           "type": "None",
                     *           "structure": "None",
                     *           "isActive": true,
                     *           "isRequired": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.BudgetCodes.ListSegmentsResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    BudgetCodes_ListProjectSegments: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
                includeTotal?: boolean;
            };
            header?: never;
            path: {
                projectId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "name": "string",
                     *           "type": "None",
                     *           "structure": "None",
                     *           "isActive": true,
                     *           "isRequired": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.BudgetCodes.ListSegmentsResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    BudgetCodes_ListCompanySegmentItems: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
                includeTotal?: boolean;
                includeChildren?: boolean;
            };
            header?: never;
            path: {
                segmentId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "parentId": 0,
                     *           "code": "string",
                     *           "description": "string",
                     *           "path": "string",
                     *           "costCategory": {},
                     *           "isActive": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Jpm.BudgetCodes.SegmentItemModel"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    BudgetCodes_ListProjectSegmentItems: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
                includeTotal?: boolean;
                includeChildren?: boolean;
            };
            header?: never;
            path: {
                projectId: number;
                segmentId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "parentId": 0,
                     *           "code": "string",
                     *           "description": "string",
                     *           "path": "string",
                     *           "costCategory": {},
                     *           "isActive": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Jpm.BudgetCodes.SegmentItemModel"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    BudgetCodes_ListCompanySegmentItemChildren: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
                includeTotal?: boolean;
                includeChildren?: boolean;
            };
            header?: never;
            path: {
                segmentId: number;
                segmentItemId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "parentId": 0,
                     *           "code": "string",
                     *           "description": "string",
                     *           "path": "string",
                     *           "costCategory": {},
                     *           "isActive": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Jpm.BudgetCodes.SegmentItemModel"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    BudgetCodes_ListProjectSegmentItemChildren: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
                includeTotal?: boolean;
                includeChildren?: boolean;
            };
            header?: never;
            path: {
                projectId: number;
                segmentId: number;
                segmentItemId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "parentId": 0,
                     *           "code": "string",
                     *           "description": "string",
                     *           "path": "string",
                     *           "costCategory": {},
                     *           "isActive": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Jpm.BudgetCodes.SegmentItemModel"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    BudgetCodes_ListCompanyBudgetCodes: {
        parameters: {
            query?: {
                budgetCodeIds?: string;
                segmentIds?: string;
                segmentItemIds?: string;
                page?: number;
                pageSize?: number;
                includeTotal?: boolean;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "code": "string",
                     *           "description": "string",
                     *           "segments": [
                     *             {
                     *               "segmentId": 0,
                     *               "segmentItemId": 0,
                     *               "code": "string",
                     *               "description": "string",
                     *               "path": "string"
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Jpm.BudgetCodes.BudgetCodeModel"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    BudgetCodes_CreateBudgetCode: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "segmentItemIds": [
                 *         0
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Jpm.V2.CreateFullBudgetCodeArgs"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "code": {
                     *         "id": 0,
                     *         "code": "string",
                     *         "description": "string",
                     *         "segments": [
                     *           {
                     *             "segmentId": 0,
                     *             "segmentItemId": 0,
                     *             "code": "string",
                     *             "description": "string",
                     *             "path": "string"
                     *           }
                     *         ]
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.BudgetCodes.CreateBudgetCodeResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    BudgetCodes_ListProjectBudgetCodes: {
        parameters: {
            query?: {
                budgetCodeIds?: string;
                segmentIds?: string;
                segmentItemIds?: string;
                page?: number;
                pageSize?: number;
                includeTotal?: boolean;
            };
            header?: never;
            path: {
                projectId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "code": "string",
                     *           "description": "string",
                     *           "segments": [
                     *             {
                     *               "segmentId": 0,
                     *               "segmentItemId": 0,
                     *               "code": "string",
                     *               "description": "string",
                     *               "path": "string"
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Jpm.BudgetCodes.BudgetCodeModel"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    BudgetCodes_MatchCompanyBudgetCodes: {
        parameters: {
            query: {
                codes: string[];
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "matches": [
                     *         {
                     *           "code": "string",
                     *           "isValid": true,
                     *           "budgetCodes": [
                     *             {
                     *               "id": 0,
                     *               "code": "string",
                     *               "description": "string",
                     *               "segments": [
                     *                 {
                     *                   "segmentId": 0,
                     *                   "segmentItemId": 0,
                     *                   "code": "string",
                     *                   "description": "string",
                     *                   "path": "string"
                     *                 }
                     *               ]
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.BudgetCodes.MatchBudgetCodesResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    BudgetCodes_MatchProjectBudgetCodes: {
        parameters: {
            query: {
                codes: string[];
            };
            header?: never;
            path: {
                projectId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "matches": [
                     *         {
                     *           "code": "string",
                     *           "isValid": true,
                     *           "budgetCodes": [
                     *             {
                     *               "id": 0,
                     *               "code": "string",
                     *               "description": "string",
                     *               "segments": [
                     *                 {
                     *                   "segmentId": 0,
                     *                   "segmentItemId": 0,
                     *                   "code": "string",
                     *                   "description": "string",
                     *                   "path": "string"
                     *                 }
                     *               ]
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.BudgetCodes.MatchBudgetCodesResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    BudgetCodes_CreateBudgetCodePartial: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "segments": [
                 *         {
                 *           "segmentId": 0,
                 *           "segmentItemId": 0
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Jpm.V2.CreatePartialBudgetCodeArgs"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "code": {
                     *         "id": 0,
                     *         "code": "string",
                     *         "description": "string",
                     *         "segments": [
                     *           {
                     *             "segmentId": 0,
                     *             "segmentItemId": 0,
                     *             "code": "string",
                     *             "description": "string",
                     *             "path": "string"
                     *           }
                     *         ]
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.BudgetCodes.CreateBudgetCodeResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    BudgetCodes_CreateBudgetCodesBatch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "codes": [
                     *         {
                     *           "id": 0,
                     *           "code": "string",
                     *           "description": "string",
                     *           "segments": [
                     *             {
                     *               "segmentId": 0,
                     *               "segmentItemId": 0,
                     *               "code": "string",
                     *               "description": "string",
                     *               "path": "string"
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.BudgetCodes.CreateBudgetCodeBatchResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    BudgetCodes_CreateBudgetCodesPartialBatch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "codes": [
                     *         {
                     *           "id": 0,
                     *           "code": "string",
                     *           "description": "string",
                     *           "segments": [
                     *             {
                     *               "segmentId": 0,
                     *               "segmentItemId": 0,
                     *               "code": "string",
                     *               "description": "string",
                     *               "path": "string"
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.BudgetCodes.CreateBudgetCodeBatchResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Export_Jobs: {
        parameters: {
            query?: {
                /**
                 * @description Continuation token received from previous export request in "continueFrom" field.
                 *     When not specified, the export process starts from the beginning.\
                 *     Use custom date strings, e.g. "2020-01-01" to start the export process from the certain point in time.
                 */
                from?: string;
                /**
                 * @description Use "true" to start receiving the most recent changes quicker.
                 *     Note this may cause the same results appearing multiple times on consecutive requests.
                 */
                includeRecentChanges?: boolean;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "hasMore": true,
                     *       "continueFrom": "string",
                     *       "data": [
                     *         {
                     *           "summary": "string",
                     *           "customFields": [
                     *             {
                     *               "typeId": 0,
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "externalData": [
                     *             {
                     *               "key": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "summaryOfWork": "string",
                     *           "id": 0,
                     *           "jobNumber": "string",
                     *           "projectId": 0,
                     *           "customerId": 0,
                     *           "locationId": 0,
                     *           "jobStatus": "string",
                     *           "completedOn": "string",
                     *           "businessUnitId": 0,
                     *           "jobTypeId": 0,
                     *           "priority": "string",
                     *           "campaignId": 0,
                     *           "appointmentCount": 0,
                     *           "firstAppointmentId": 0,
                     *           "lastAppointmentId": 0,
                     *           "recallForId": 0,
                     *           "warrantyId": 0,
                     *           "jobGeneratedLeadSource": {
                     *             "jobId": 0,
                     *             "employeeId": 0
                     *           },
                     *           "noCharge": true,
                     *           "notificationsEnabled": true,
                     *           "createdOn": "string",
                     *           "createdById": 0,
                     *           "modifiedOn": "string",
                     *           "tagTypeIds": [
                     *             0
                     *           ],
                     *           "leadCallId": 0,
                     *           "partnerLeadCallId": 0,
                     *           "bookingId": 0,
                     *           "soldById": 0,
                     *           "customerPo": "string",
                     *           "invoiceId": 0,
                     *           "membershipId": 0,
                     *           "total": 0,
                     *           "createdFromEstimateId": 0,
                     *           "estimateIds": [
                     *             0
                     *           ],
                     *           "equipmentIds": [
                     *             0
                     *           ],
                     *           "isAutoDispatched": true,
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Jpm.V2.ExportJobsResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Export_Projects: {
        parameters: {
            query?: {
                /**
                 * @description Continuation token received from previous export request in "continueFrom" field.
                 *     When not specified, the export process starts from the beginning.\
                 *     Use custom date strings, e.g. "2020-01-01" to start the export process from the certain point in time.
                 */
                from?: string;
                /**
                 * @description Use "true" to start receiving the most recent changes quicker.
                 *     Note this may cause the same results appearing multiple times on consecutive requests.
                 */
                includeRecentChanges?: boolean;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "hasMore": true,
                     *       "continueFrom": "string",
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "number": "string",
                     *           "name": "string",
                     *           "summary": "string",
                     *           "status": "string",
                     *           "statusId": 0,
                     *           "subStatus": "string",
                     *           "subStatusId": 0,
                     *           "customerId": 0,
                     *           "locationId": 0,
                     *           "projectTypeId": 0,
                     *           "projectManagerIds": [
                     *             0
                     *           ],
                     *           "businessUnitIds": [
                     *             0
                     *           ],
                     *           "startDate": "string",
                     *           "targetCompletionDate": "string",
                     *           "actualCompletionDate": "string",
                     *           "modifiedOn": "string",
                     *           "createdOn": "string",
                     *           "customFields": [
                     *             {
                     *               "typeId": 0,
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "externalData": [
                     *             {
                     *               "key": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "jobIds": [
                     *             0
                     *           ],
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Jpm.V2.ExportProjectsResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Export_Appointments: {
        parameters: {
            query?: {
                /**
                 * @description What kind of items should be returned (all items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
                /**
                 * @description Continuation token received from previous export request in "continueFrom" field.
                 *     When not specified, the export process starts from the beginning.\
                 *     Use custom date strings, e.g. "2020-01-01" to start the export process from the certain point in time.
                 */
                from?: string;
                /**
                 * @description Use "true" to start receiving the most recent changes quicker.
                 *     Note this may cause the same results appearing multiple times on consecutive requests.
                 */
                includeRecentChanges?: boolean;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "hasMore": true,
                     *       "continueFrom": "string",
                     *       "data": [
                     *         {
                     *           "appointmentSummaries": [
                     *             {
                     *               "createdOn": "string",
                     *               "jobAppointmentId": 0,
                     *               "jobId": 0,
                     *               "modifiedOn": "string",
                     *               "notes": "string",
                     *               "technicianId": 0
                     *             }
                     *           ],
                     *           "id": 0,
                     *           "jobId": 0,
                     *           "appointmentNumber": "string",
                     *           "start": "string",
                     *           "end": "string",
                     *           "arrivalWindowStart": "string",
                     *           "arrivalWindowEnd": "string",
                     *           "status": {},
                     *           "specialInstructions": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "customerId": 0,
                     *           "unused": true,
                     *           "createdById": 0,
                     *           "isConfirmed": true,
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Jpm.V2.ExportAppointmentsResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Export_JobCancelReasons: {
        parameters: {
            query?: {
                /**
                 * @description Continuation token received from previous export request in "continueFrom" field.
                 *     When not specified, the export process starts from the beginning.\
                 *     Use custom date strings, e.g. "2020-01-01" to start the export process from the certain point in time.
                 */
                from?: string;
                /**
                 * @description Use "true" to start receiving the most recent changes quicker.
                 *     Note this may cause the same results appearing multiple times on consecutive requests.
                 */
                includeRecentChanges?: boolean;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "hasMore": true,
                     *       "continueFrom": "string",
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "jobId": 0,
                     *           "reasonId": 0,
                     *           "memo": "string",
                     *           "createdOn": "string",
                     *           "createdById": 0,
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Jpm.V2.ExportJobCanceledLogResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Export_JobNotes: {
        parameters: {
            query?: {
                /**
                 * @description Continuation token received from previous export request in "continueFrom" field.
                 *     When not specified, the export process starts from the beginning.\
                 *     Use custom date strings, e.g. "2020-01-01" to start the export process from the certain point in time.
                 */
                from?: string;
                /**
                 * @description Use "true" to start receiving the most recent changes quicker.
                 *     Note this may cause the same results appearing multiple times on consecutive requests.
                 */
                includeRecentChanges?: boolean;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "hasMore": true,
                     *       "continueFrom": "string",
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "active": true,
                     *           "text": "string",
                     *           "isPinned": true,
                     *           "createdById": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "jobId": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Jpm.V2.ExportJobNotesResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Export_ProjectNotes: {
        parameters: {
            query?: {
                /**
                 * @description Continuation token received from previous export request in "continueFrom" field.
                 *     When not specified, the export process starts from the beginning.\
                 *     Use custom date strings, e.g. "2020-01-01" to start the export process from the certain point in time.
                 */
                from?: string;
                /**
                 * @description Use "true" to start receiving the most recent changes quicker.
                 *     Note this may cause the same results appearing multiple times on consecutive requests.
                 */
                includeRecentChanges?: boolean;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "hasMore": true,
                     *       "continueFrom": "string",
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "active": true,
                     *           "text": "string",
                     *           "isPinned": true,
                     *           "createdById": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "projectId": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Jpm.V2.ExportProjectNotesResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Export_JobHistory: {
        parameters: {
            query?: {
                /**
                 * @description Continuation token received from previous export request in "continueFrom" field.
                 *     When not specified, the export process starts from the beginning.\
                 *     Use custom date strings, e.g. "2020-01-01" to start the export process from the certain point in time.
                 */
                from?: string;
                /**
                 * @description Use "true" to start receiving the most recent changes quicker.
                 *     Note this may cause the same results appearing multiple times on consecutive requests.
                 */
                includeRecentChanges?: boolean;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "hasMore": true,
                     *       "continueFrom": "string",
                     *       "data": [
                     *         {
                     *           "jobId": 0,
                     *           "history": [
                     *             {
                     *               "id": 0,
                     *               "employeeId": 0,
                     *               "eventType": "string",
                     *               "date": "string",
                     *               "usedSchedulingTool": {}
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Jpm.V2.ExportJobHistoryResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    JobCancelReasons_GetList: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /**
                 * @description What kind of items should be returned (active and inactive items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /**
                 * @description Applies sorting by the specified field:\
                 *     "?sort=+FieldName" for ascending order,\
                 *     "?sort=-FieldName" for descending order.\
                 *     \
                 *     Available fields are: Id, ModifiedOn, CreatedOn.
                 */
                sort?: string;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "name": "string",
                     *           "active": true,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Jpm.V2.JobCancelReasonResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    JobEquipment_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The job ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "equipmentIds": [
                     *         0
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.V2.JobEquipmentResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    JobEquipment_Attach: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The job ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The attach request containing equipment IDs */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "equipmentIds": [
                 *         0
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Jpm.V2.AttachJobEquipmentRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "equipmentIds": [
                     *         0
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.V2.JobEquipmentResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    JobEquipment_DetachBulk: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The job ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The detach request containing equipment IDs */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "equipmentIds": [
                 *         0
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Jpm.V2.DetachJobEquipmentRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request has succeeded, no content to return */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    JobEquipment_Detach: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The job ID */
                id: number;
                /** @description The equipment ID to detach */
                equipmentId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request has succeeded, no content to return */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    JobHoldReasons_Get: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /**
                 * @description What kind of items should be returned (active and inactive items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /**
                 * @description Applies sorting by the specified field:\
                 *     "?sort=+FieldName" for ascending order,\
                 *     "?sort=-FieldName" for descending order.\
                 *     \
                 *     Available fields are: Id, ModifiedOn, CreatedOn.
                 */
                sort?: string;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "name": "string",
                     *           "active": true,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Jpm.V2.JobHoldReasonResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Jobs_Get: {
        parameters: {
            query?: {
                /**
                 * @description If this guid is provided, external data corresponding to
                 *     this application guid will be returned.
                 */
                externalDataApplicationGuid?: string;
            };
            header?: never;
            path: {
                /** @description The job ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "jobNumber": "string",
                     *       "projectId": 0,
                     *       "customerId": 0,
                     *       "locationId": 0,
                     *       "jobStatus": "string",
                     *       "completedOn": "string",
                     *       "businessUnitId": 0,
                     *       "jobTypeId": 0,
                     *       "priority": "string",
                     *       "campaignId": 0,
                     *       "appointmentCount": 0,
                     *       "firstAppointmentId": 0,
                     *       "lastAppointmentId": 0,
                     *       "recallForId": 0,
                     *       "warrantyId": 0,
                     *       "jobGeneratedLeadSource": {
                     *         "jobId": 0,
                     *         "employeeId": 0
                     *       },
                     *       "noCharge": true,
                     *       "notificationsEnabled": true,
                     *       "createdOn": "string",
                     *       "createdById": 0,
                     *       "modifiedOn": "string",
                     *       "tagTypeIds": [
                     *         0
                     *       ],
                     *       "leadCallId": 0,
                     *       "partnerLeadCallId": 0,
                     *       "bookingId": 0,
                     *       "soldById": 0,
                     *       "customerPo": "string",
                     *       "invoiceId": 0,
                     *       "membershipId": 0,
                     *       "total": 0,
                     *       "createdFromEstimateId": 0,
                     *       "estimateIds": [
                     *         0
                     *       ],
                     *       "equipmentIds": [
                     *         0
                     *       ],
                     *       "isAutoDispatched": true,
                     *       "summary": "string",
                     *       "customFields": [
                     *         {
                     *           "typeId": 0,
                     *           "name": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "summaryOfWork": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.V2.JobResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Jobs_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The job ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The update request details */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "customerId": 0,
                 *       "locationId": 0,
                 *       "businessUnitId": 0,
                 *       "jobGeneratedLeadSource": {
                 *         "jobId": 0,
                 *         "employeeId": 0
                 *       },
                 *       "jobTypeId": 0,
                 *       "priority": "string",
                 *       "campaignId": 0,
                 *       "summary": "string",
                 *       "shouldUpdateInvoiceItems": true,
                 *       "customFields": [
                 *         {
                 *           "typeId": 0,
                 *           "value": "string"
                 *         }
                 *       ],
                 *       "tagTypeIds": [
                 *         0
                 *       ],
                 *       "externalData": {
                 *         "patchMode": {},
                 *         "applicationGuid": "string",
                 *         "externalData": [
                 *           {
                 *             "key": "string",
                 *             "value": "string"
                 *           }
                 *         ]
                 *       },
                 *       "customerPo": "string",
                 *       "soldById": 0,
                 *       "isAutoDispatched": true,
                 *       "summaryOfWork": "string",
                 *       "noCharge": true
                 *     }
                 */
                "application/json": components["schemas"]["Jpm.V2.UpdateJobRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "jobNumber": "string",
                     *       "projectId": 0,
                     *       "customerId": 0,
                     *       "locationId": 0,
                     *       "jobStatus": "string",
                     *       "completedOn": "string",
                     *       "businessUnitId": 0,
                     *       "jobTypeId": 0,
                     *       "priority": "string",
                     *       "campaignId": 0,
                     *       "appointmentCount": 0,
                     *       "firstAppointmentId": 0,
                     *       "lastAppointmentId": 0,
                     *       "recallForId": 0,
                     *       "warrantyId": 0,
                     *       "jobGeneratedLeadSource": {
                     *         "jobId": 0,
                     *         "employeeId": 0
                     *       },
                     *       "noCharge": true,
                     *       "notificationsEnabled": true,
                     *       "createdOn": "string",
                     *       "createdById": 0,
                     *       "modifiedOn": "string",
                     *       "tagTypeIds": [
                     *         0
                     *       ],
                     *       "leadCallId": 0,
                     *       "partnerLeadCallId": 0,
                     *       "bookingId": 0,
                     *       "soldById": 0,
                     *       "customerPo": "string",
                     *       "invoiceId": 0,
                     *       "membershipId": 0,
                     *       "total": 0,
                     *       "createdFromEstimateId": 0,
                     *       "estimateIds": [
                     *         0
                     *       ],
                     *       "equipmentIds": [
                     *         0
                     *       ],
                     *       "isAutoDispatched": true,
                     *       "summary": "string",
                     *       "customFields": [
                     *         {
                     *           "typeId": 0,
                     *           "name": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "summaryOfWork": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.V2.JobResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Jobs_GetList: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /** @description Filters by job number */
                number?: string;
                /** @description Filters by project ID */
                projectId?: number;
                /** @description Filters by booking ID that resulted in this job */
                bookingId?: number;
                /**
                 * @description Filters by job status
                 *                 \
                 *     Values: [Scheduled, Dispatched, InProgress, Hold, Completed, Canceled]
                 */
                jobStatus?: string & components["schemas"]["Jpm.V2.JobStatus"];
                /**
                 * @description Filters by appointment status. Return a job if it has any appointment with the specified status.
                 *                 \
                 *     Values: [Scheduled, Dispatched, Working, Hold, Done, Canceled]
                 */
                appointmentStatus?: string & components["schemas"]["Jpm.V2.JobAppointmentStatus"];
                /** @description Filters by priority. Supported priorities are "Low", "Normal", "High", "Urgent" */
                priority?: string;
                /**
                 * @description Return jobs whose first appointment starts on or after date/time (in UTC). Use with
                 *     "firstAppointmentStartsBefore" to find jobs whose first appointment is within the specified date range.
                 */
                firstAppointmentStartsOnOrAfter?: string;
                /** @description Return jobs whose first appointment starts before date/time (in UTC) */
                firstAppointmentStartsBefore?: string;
                /** @description Return jobs if any appointment starts after date/time (in UTC) */
                appointmentStartsOnOrAfter?: string;
                /** @description Return jobs if any appointment starts after date/time (in UTC) */
                appointmentStartsBefore?: string;
                /** @description Return jobs if technician is assigned to any appointment */
                technicianId?: number;
                /** @description Filters by job's customer ID */
                customerId?: number;
                /** @description Filters by job's location ID */
                locationId?: number;
                /** @description Filters by the technician who sold the job */
                soldById?: number;
                /** @description Filters by job type ID */
                jobTypeId?: number;
                /** @description Filters by job's campaign ID */
                campaignId?: number;
                /** @description Filters by job's business unit ID */
                businessUnitId?: number;
                /** @description Filters by job's invoice ID */
                invoiceId?: number;
                /** @description Filters by the sold estimate ID from which the job was created */
                createdFromEstimateId?: number;
                /** @description Filters by estimate IDs that are related to the job */
                estimateIds?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Return jobs that are completed after a certain date/time (in UTC) */
                completedOnOrAfter?: string;
                /** @description Return jobs that are completed before a certain date/time (in UTC) */
                completedBefore?: string;
                /** @description Return jobs that have at least one of provided Tag Type assigned */
                tagTypeIds?: string;
                /** @description Return jobs that have at least one of provided equipment items attached */
                equipmentIds?: string;
                /**
                 * @description Applies sorting by the specified field:\
                 *     "?sort=+FieldName" for ascending order,\
                 *     "?sort=-FieldName" for descending order.\
                 *     \
                 *     Available fields are: Id, ModifiedOn, CreatedOn, Priority.
                 */
                sort?: string;
                /**
                 * @description If this guid is provided, external data corresponding to
                 *     this application guid will be returned.
                 */
                externalDataApplicationGuid?: string;
                /** @description Performs lookup by external data key, 'externalDataValues' must also be provided. */
                externalDataKey?: string;
                /** @description Performs lookup by external data values (maximum 50), 'externalDataKey' must also be provided. */
                externalDataValues?: string;
                /** @description If set to true, return jobs that have unused appointments. */
                hasUnusedAppointments?: boolean;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "jobNumber": "string",
                     *           "projectId": 0,
                     *           "customerId": 0,
                     *           "locationId": 0,
                     *           "jobStatus": "string",
                     *           "completedOn": "string",
                     *           "businessUnitId": 0,
                     *           "jobTypeId": 0,
                     *           "priority": "string",
                     *           "campaignId": 0,
                     *           "appointmentCount": 0,
                     *           "firstAppointmentId": 0,
                     *           "lastAppointmentId": 0,
                     *           "recallForId": 0,
                     *           "warrantyId": 0,
                     *           "jobGeneratedLeadSource": {
                     *             "jobId": 0,
                     *             "employeeId": 0
                     *           },
                     *           "noCharge": true,
                     *           "notificationsEnabled": true,
                     *           "createdOn": "string",
                     *           "createdById": 0,
                     *           "modifiedOn": "string",
                     *           "tagTypeIds": [
                     *             0
                     *           ],
                     *           "leadCallId": 0,
                     *           "partnerLeadCallId": 0,
                     *           "bookingId": 0,
                     *           "soldById": 0,
                     *           "customerPo": "string",
                     *           "invoiceId": 0,
                     *           "membershipId": 0,
                     *           "total": 0,
                     *           "createdFromEstimateId": 0,
                     *           "estimateIds": [
                     *             0
                     *           ],
                     *           "equipmentIds": [
                     *             0
                     *           ],
                     *           "isAutoDispatched": true,
                     *           "summary": "string",
                     *           "customFields": [
                     *             {
                     *               "typeId": 0,
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "externalData": [
                     *             {
                     *               "key": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "summaryOfWork": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Jpm.V2.JobResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Jobs_Create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The job creation request details */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "customerId": 0,
                 *       "locationId": 0,
                 *       "projectId": 0,
                 *       "businessUnitId": 0,
                 *       "jobGeneratedLeadSource": {
                 *         "jobId": 0,
                 *         "employeeId": 0
                 *       },
                 *       "jobTypeId": 0,
                 *       "priority": "string",
                 *       "campaignId": 0,
                 *       "appointments": [
                 *         {
                 *           "start": "string",
                 *           "end": "string",
                 *           "arrivalWindowStart": "string",
                 *           "arrivalWindowEnd": "string",
                 *           "technicianIds": [
                 *             0
                 *           ]
                 *         }
                 *       ],
                 *       "summary": "string",
                 *       "customFields": [
                 *         {
                 *           "typeId": 0,
                 *           "value": "string"
                 *         }
                 *       ],
                 *       "tagTypeIds": [
                 *         0
                 *       ],
                 *       "externalData": {
                 *         "applicationGuid": "string",
                 *         "externalData": [
                 *           {
                 *             "key": "string",
                 *             "value": "string"
                 *           }
                 *         ]
                 *       },
                 *       "invoiceSignatureIsRequired": true,
                 *       "customerPo": "string",
                 *       "soldById": 0,
                 *       "partnerLeadCallId": 0,
                 *       "leadId": 0,
                 *       "bookingId": 0,
                 *       "noCharge": true
                 *     }
                 */
                "application/json": components["schemas"]["Jpm.V2.JobCreateRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "jobNumber": "string",
                     *       "projectId": 0,
                     *       "customerId": 0,
                     *       "locationId": 0,
                     *       "jobStatus": "string",
                     *       "completedOn": "string",
                     *       "businessUnitId": 0,
                     *       "jobTypeId": 0,
                     *       "priority": "string",
                     *       "campaignId": 0,
                     *       "appointmentCount": 0,
                     *       "firstAppointmentId": 0,
                     *       "lastAppointmentId": 0,
                     *       "recallForId": 0,
                     *       "warrantyId": 0,
                     *       "jobGeneratedLeadSource": {
                     *         "jobId": 0,
                     *         "employeeId": 0
                     *       },
                     *       "noCharge": true,
                     *       "notificationsEnabled": true,
                     *       "createdOn": "string",
                     *       "createdById": 0,
                     *       "modifiedOn": "string",
                     *       "tagTypeIds": [
                     *         0
                     *       ],
                     *       "leadCallId": 0,
                     *       "partnerLeadCallId": 0,
                     *       "bookingId": 0,
                     *       "soldById": 0,
                     *       "customerPo": "string",
                     *       "invoiceId": 0,
                     *       "membershipId": 0,
                     *       "total": 0,
                     *       "createdFromEstimateId": 0,
                     *       "estimateIds": [
                     *         0
                     *       ],
                     *       "equipmentIds": [
                     *         0
                     *       ],
                     *       "isAutoDispatched": true,
                     *       "summary": "string",
                     *       "customFields": [
                     *         {
                     *           "typeId": 0,
                     *           "name": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "summaryOfWork": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.V2.JobResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Jobs_Cancel: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The job ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The cancel request details */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "reasonId": 0,
                 *       "memo": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Jpm.V2.CancelJobRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Jobs_RemoveCancellation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The job ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Jobs_GetNotes: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
            };
            header?: never;
            path: {
                /** @description The job ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "text": "string",
                     *           "isPinned": true,
                     *           "createdById": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Jpm.V2.NoteResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Jobs_CreateNote: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The job ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The note creation request details */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "text": "string",
                 *       "pinToTop": true
                 *     }
                 */
                "application/json": components["schemas"]["Jpm.V2.JobNoteCreateRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "text": "string",
                     *       "isPinned": true,
                     *       "createdById": 0,
                     *       "createdOn": "string",
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.V2.NoteResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Jobs_GetHoldReasons: {
        parameters: {
            query: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids: string;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "jobId": 0,
                     *           "reasonId": 0,
                     *           "name": "string",
                     *           "text": "string",
                     *           "appointmentHoldReasons": [
                     *             {
                     *               "appointmentId": 0,
                     *               "reasonId": 0,
                     *               "name": "string",
                     *               "text": "string"
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Jpm.V2.HoldReasonResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Jobs_GetCancelReasons: {
        parameters: {
            query: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids: string;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "jobId": 0,
                     *           "reasonId": 0,
                     *           "name": "string",
                     *           "text": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Jpm.V2.CancelReasonResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Jobs_GetHistory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The job ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "history": [
                     *         {
                     *           "id": 0,
                     *           "employeeId": 0,
                     *           "eventType": "string",
                     *           "date": "string",
                     *           "usedSchedulingTool": {},
                     *           "memo": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.V2.JobHistoryResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Jobs_GetJobCanceledLogs: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
            };
            header?: never;
            path: {
                /** @description The job ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "jobId": 0,
                     *           "reasonId": 0,
                     *           "memo": "string",
                     *           "createdOn": "string",
                     *           "createdById": 0,
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Jpm.V2.JobCanceledLogResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Jobs_GetBookedLog: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The job ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "jobId": 0,
                     *       "jobAppointmentId": 0,
                     *       "start": "string",
                     *       "arrivalWindowStart": "string",
                     *       "arrivalWindowEnd": "string",
                     *       "createdOn": "string",
                     *       "createdById": 0,
                     *       "active": true
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.V2.JobBookedLogResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Jobs_GetCustomFieldTypes: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Applies sorting by the specified field: Id, Name. */
                sort?: string;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "name": "string",
                     *           "dataType": {},
                     *           "dataTypeOptions": [
                     *             "string"
                     *           ],
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Jpm.V2.CustomFieldTypeResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    JobTypes_GetList: {
        parameters: {
            query?: {
                /** @description Filters by job type name */
                name?: string;
                /** @description Minimum length of time for this job type (in seconds) */
                minDuration?: number;
                /** @description Maximum length of time for this job type (in seconds) */
                maxDuration?: number;
                /** @description Level of urgency for this type of job */
                priority?: string;
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
                /** @description Orders results by a field. Supported fields are "id", "modifiedOn", and "createdOn" */
                orderBy?: string;
                /** @description Specifies order direction of results. Supported values are "asc"/"ascending" and "desc"/"descending" */
                orderByDirection?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /**
                 * @description If this guid is provided, external data corresponding to
                 *     this application guid will be returned.
                 */
                externalDataApplicationGuid?: string;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "name": "string",
                     *           "businessUnitIds": [
                     *             0
                     *           ],
                     *           "skills": [
                     *             "string"
                     *           ],
                     *           "tagTypeIds": [
                     *             0
                     *           ],
                     *           "priority": "string",
                     *           "duration": 0,
                     *           "soldThreshold": 0,
                     *           "class": "string",
                     *           "summary": "string",
                     *           "noCharge": true,
                     *           "enforceRecurringServiceEventSelection": true,
                     *           "invoiceSignaturesRequired": true,
                     *           "modifiedOn": "string",
                     *           "createdOn": "string",
                     *           "externalData": [
                     *             {
                     *               "key": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "active": true,
                     *           "isSmartDispatched": true,
                     *           "defaultEstimateSoldAction": "string",
                     *           "customFieldTypeIds": [
                     *             0
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Jpm.V2.JobTypeResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    JobTypes_Create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The job type creation request details */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "name": "string",
                 *       "businessUnitIds": [
                 *         0
                 *       ],
                 *       "skills": [
                 *         "string"
                 *       ],
                 *       "tagTypeIds": [
                 *         0
                 *       ],
                 *       "priority": "string",
                 *       "duration": 0,
                 *       "soldThreshold": 0,
                 *       "class": "string",
                 *       "summary": "string",
                 *       "noCharge": true,
                 *       "enforceRecurringServiceEventSelection": true,
                 *       "invoiceSignaturesRequired": true,
                 *       "externalData": {
                 *         "applicationGuid": "string",
                 *         "externalData": [
                 *           {
                 *             "key": "string",
                 *             "value": "string"
                 *           }
                 *         ]
                 *       },
                 *       "defaultEstimateSoldAction": "string",
                 *       "customFieldTypeIds": [
                 *         0
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Jpm.V2.CreateJobTypeRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "name": "string",
                     *       "businessUnitIds": [
                     *         0
                     *       ],
                     *       "skills": [
                     *         "string"
                     *       ],
                     *       "tagTypeIds": [
                     *         0
                     *       ],
                     *       "priority": "string",
                     *       "duration": 0,
                     *       "soldThreshold": 0,
                     *       "class": "string",
                     *       "summary": "string",
                     *       "noCharge": true,
                     *       "enforceRecurringServiceEventSelection": true,
                     *       "invoiceSignaturesRequired": true,
                     *       "modifiedOn": "string",
                     *       "createdOn": "string",
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "active": true,
                     *       "isSmartDispatched": true,
                     *       "defaultEstimateSoldAction": "string",
                     *       "customFieldTypeIds": [
                     *         0
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.V2.JobTypeResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    JobTypes_Get: {
        parameters: {
            query?: {
                /**
                 * @description If this guid is provided, external data corresponding to
                 *     this application guid will be returned.
                 */
                externalDataApplicationGuid?: string;
            };
            header?: never;
            path: {
                /** @description The job type ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "name": "string",
                     *       "businessUnitIds": [
                     *         0
                     *       ],
                     *       "skills": [
                     *         "string"
                     *       ],
                     *       "tagTypeIds": [
                     *         0
                     *       ],
                     *       "priority": "string",
                     *       "duration": 0,
                     *       "soldThreshold": 0,
                     *       "class": "string",
                     *       "summary": "string",
                     *       "noCharge": true,
                     *       "enforceRecurringServiceEventSelection": true,
                     *       "invoiceSignaturesRequired": true,
                     *       "modifiedOn": "string",
                     *       "createdOn": "string",
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "active": true,
                     *       "isSmartDispatched": true,
                     *       "defaultEstimateSoldAction": "string",
                     *       "customFieldTypeIds": [
                     *         0
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.V2.JobTypeResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    JobTypes_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The job type ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The update request details */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "name": "string",
                 *       "businessUnitIds": [
                 *         0
                 *       ],
                 *       "skills": [
                 *         "string"
                 *       ],
                 *       "tagTypeIds": [
                 *         0
                 *       ],
                 *       "priority": "string",
                 *       "duration": 0,
                 *       "soldThreshold": 0,
                 *       "class": "string",
                 *       "summary": "string",
                 *       "noCharge": true,
                 *       "enforceRecurringServiceEventSelection": true,
                 *       "invoiceSignaturesRequired": true,
                 *       "externalData": {
                 *         "patchMode": {},
                 *         "applicationGuid": "string",
                 *         "externalData": [
                 *           {
                 *             "key": "string",
                 *             "value": "string"
                 *           }
                 *         ]
                 *       },
                 *       "defaultEstimateSoldAction": "string",
                 *       "customFieldTypeIds": [
                 *         0
                 *       ],
                 *       "customFieldsUpdateMode": {}
                 *     }
                 */
                "application/json": components["schemas"]["Jpm.V2.UpdateJobTypeRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "name": "string",
                     *       "businessUnitIds": [
                     *         0
                     *       ],
                     *       "skills": [
                     *         "string"
                     *       ],
                     *       "tagTypeIds": [
                     *         0
                     *       ],
                     *       "priority": "string",
                     *       "duration": 0,
                     *       "soldThreshold": 0,
                     *       "class": "string",
                     *       "summary": "string",
                     *       "noCharge": true,
                     *       "enforceRecurringServiceEventSelection": true,
                     *       "invoiceSignaturesRequired": true,
                     *       "modifiedOn": "string",
                     *       "createdOn": "string",
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "active": true,
                     *       "isSmartDispatched": true,
                     *       "defaultEstimateSoldAction": "string",
                     *       "customFieldTypeIds": [
                     *         0
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.V2.JobTypeResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Projects_Get: {
        parameters: {
            query?: {
                /**
                 * @description If this guid is provided, external data corresponding to
                 *     this application guid will be returned.
                 */
                externalDataApplicationGuid?: string;
            };
            header?: never;
            path: {
                /** @description The project ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "number": "string",
                     *       "name": "string",
                     *       "summary": "string",
                     *       "status": "string",
                     *       "statusId": 0,
                     *       "subStatus": "string",
                     *       "subStatusId": 0,
                     *       "customerId": 0,
                     *       "locationId": 0,
                     *       "projectTypeId": 0,
                     *       "projectManagerIds": [
                     *         0
                     *       ],
                     *       "businessUnitIds": [
                     *         0
                     *       ],
                     *       "startDate": "string",
                     *       "targetCompletionDate": "string",
                     *       "actualCompletionDate": "string",
                     *       "modifiedOn": "string",
                     *       "createdOn": "string",
                     *       "customFields": [
                     *         {
                     *           "typeId": 0,
                     *           "name": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "jobIds": [
                     *         0
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.V2.ProjectResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Projects_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The project ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The update request details */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "projectManagerIds": [
                 *         0
                 *       ],
                 *       "jobIds": [
                 *         0
                 *       ],
                 *       "businessUnitIds": [
                 *         0
                 *       ],
                 *       "name": "string",
                 *       "summary": "string",
                 *       "statusId": 0,
                 *       "subStatusId": 0,
                 *       "projectTypeId": 0,
                 *       "startDate": "string",
                 *       "targetCompletionDate": "string",
                 *       "actualCompletionDate": "string",
                 *       "customFields": [
                 *         {
                 *           "typeId": 0,
                 *           "value": "string"
                 *         }
                 *       ],
                 *       "externalData": {
                 *         "patchMode": {},
                 *         "applicationGuid": "string",
                 *         "externalData": [
                 *           {
                 *             "key": "string",
                 *             "value": "string"
                 *           }
                 *         ]
                 *       }
                 *     }
                 */
                "application/json": components["schemas"]["Jpm.V2.UpdateProjectRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "number": "string",
                     *       "name": "string",
                     *       "summary": "string",
                     *       "status": "string",
                     *       "statusId": 0,
                     *       "subStatus": "string",
                     *       "subStatusId": 0,
                     *       "customerId": 0,
                     *       "locationId": 0,
                     *       "projectTypeId": 0,
                     *       "projectManagerIds": [
                     *         0
                     *       ],
                     *       "businessUnitIds": [
                     *         0
                     *       ],
                     *       "startDate": "string",
                     *       "targetCompletionDate": "string",
                     *       "actualCompletionDate": "string",
                     *       "modifiedOn": "string",
                     *       "createdOn": "string",
                     *       "customFields": [
                     *         {
                     *           "typeId": 0,
                     *           "name": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "jobIds": [
                     *         0
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.V2.ProjectResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description Customer not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Projects_GetList: {
        parameters: {
            query?: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /** @description Filters by customer ID */
                customerId?: number;
                /** @description Filters by location ID */
                locationId?: number;
                /** @description Return projects if it contains the specified project type */
                projectTypeId?: number;
                /** @description Return projects if it contains the specified invoice */
                invoiceId?: number;
                /** @description Return project if technician is assigned to any appointments on any job in the project */
                technicianId?: number;
                /** @description Return project if it contains the specified job */
                jobId?: number;
                /** @description Return project if it contains the specified appointment in the project's jobs */
                appointmentId?: number;
                /** @description Filters by id of managers for matching project */
                projectManagerIds?: string;
                /** @description Returns projects which have at least one of the provided business units assigned */
                businessUnitIds?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return projects that start before date */
                startsBefore?: string;
                /** @description Return projects that start on or after date */
                startsOnOrAfter?: string;
                /** @description Return projects that are completed before date */
                completedBefore?: string;
                /** @description Return projects that are completed on or after date */
                completedOnOrAfter?: string;
                /** @description Return projects whose target completion date is before date */
                targetCompletionDateBefore?: string;
                /** @description Return projects whose target completion date is on or after date */
                targetCompletionDateOnOrAfter?: string;
                /** @description Return projects whose last modification date is before date */
                modifiedBefore?: string;
                /** @description Return projects whose last modification date is on or after date */
                modifiedOnOrAfter?: string;
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /**
                 * @description Returns projects which have one of the provided statuses.
                 *     "None" could be passed as one of the values to include projects without a status in the resulting collection.
                 */
                status?: string;
                /**
                 * @description Applies sorting by the specified field:\
                 *     "?sort=+FieldName" for ascending order,\
                 *     "?sort=-FieldName" for descending order.\
                 *     \
                 *     Available fields are: Id, ModifiedOn, CreatedOn, Name, TargetCompletionDate.
                 */
                sort?: string;
                /**
                 * @description If this guid is provided, external data corresponding to
                 *     this application guid will be returned.
                 */
                externalDataApplicationGuid?: string;
                /** @description Performs lookup by external data key, 'externalDataValues' must also be provided. */
                externalDataKey?: string;
                /** @description Performs lookup by external data values (maximum 50), 'externalDataKey' must also be provided. */
                externalDataValues?: string;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "number": "string",
                     *           "name": "string",
                     *           "summary": "string",
                     *           "status": "string",
                     *           "statusId": 0,
                     *           "subStatus": "string",
                     *           "subStatusId": 0,
                     *           "customerId": 0,
                     *           "locationId": 0,
                     *           "projectTypeId": 0,
                     *           "projectManagerIds": [
                     *             0
                     *           ],
                     *           "businessUnitIds": [
                     *             0
                     *           ],
                     *           "startDate": "string",
                     *           "targetCompletionDate": "string",
                     *           "actualCompletionDate": "string",
                     *           "modifiedOn": "string",
                     *           "createdOn": "string",
                     *           "customFields": [
                     *             {
                     *               "typeId": 0,
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "externalData": [
                     *             {
                     *               "key": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "jobIds": [
                     *             0
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Jpm.V2.ProjectResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Projects_Create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The project creation request details */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "locationId": 0,
                 *       "customerId": 0,
                 *       "projectTypeId": 0,
                 *       "projectManagerIds": [
                 *         0
                 *       ],
                 *       "name": "string",
                 *       "summary": "string",
                 *       "statusId": 0,
                 *       "subStatusId": 0,
                 *       "startDate": "string",
                 *       "targetCompletionDate": "string",
                 *       "actualCompletionDate": "string",
                 *       "customFields": [
                 *         {
                 *           "typeId": 0,
                 *           "value": "string"
                 *         }
                 *       ],
                 *       "externalData": {
                 *         "applicationGuid": "string",
                 *         "externalData": [
                 *           {
                 *             "key": "string",
                 *             "value": "string"
                 *           }
                 *         ]
                 *       },
                 *       "businessUnitIds": [
                 *         0
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Jpm.V2.CreateProjectRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "number": "string",
                     *       "name": "string",
                     *       "summary": "string",
                     *       "status": "string",
                     *       "statusId": 0,
                     *       "subStatus": "string",
                     *       "subStatusId": 0,
                     *       "customerId": 0,
                     *       "locationId": 0,
                     *       "projectTypeId": 0,
                     *       "projectManagerIds": [
                     *         0
                     *       ],
                     *       "businessUnitIds": [
                     *         0
                     *       ],
                     *       "startDate": "string",
                     *       "targetCompletionDate": "string",
                     *       "actualCompletionDate": "string",
                     *       "modifiedOn": "string",
                     *       "createdOn": "string",
                     *       "customFields": [
                     *         {
                     *           "typeId": 0,
                     *           "name": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "jobIds": [
                     *         0
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.V2.ProjectResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Projects_GetNotes: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
            };
            header?: never;
            path: {
                /** @description The project ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "text": "string",
                     *           "isPinned": true,
                     *           "createdById": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Jpm.V2.NoteResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Projects_CreateNote: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The project ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The note creation request details */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "text": "string",
                 *       "pinToTop": true
                 *     }
                 */
                "application/json": components["schemas"]["Jpm.V2.ProjectNoteCreateRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "text": "string",
                     *       "isPinned": true,
                     *       "createdById": 0,
                     *       "createdOn": "string",
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.V2.NoteResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Projects_AttachJob: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The project ID */
                id: number;
                /** @description The job ID to attach */
                jobId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Projects_DetachJob: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The job ID to detach */
                jobId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    Projects_GetCustomFieldTypes: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Applies sorting by the specified field: Id, Name. */
                sort?: string;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "name": "string",
                     *           "dataType": {},
                     *           "dataTypeOptions": [
                     *             "string"
                     *           ],
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Jpm.V2.CustomFieldTypeResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ProjectStatuses_GetList: {
        parameters: {
            query?: {
                /** @description Filters by project status name */
                name?: string;
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /**
                 * @description Applies sorting by the specified field:\
                 *     "?sort=+FieldName" for ascending order,\
                 *     "?sort=-FieldName" for descending order.\
                 *     \
                 *     Available fields are: Id, Name, Order, ModifiedOn, CreatedOn.
                 */
                sort?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "name": "string",
                     *           "order": 0,
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Jpm.V2.ProjectStatusResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ProjectStatuses_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The project status ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "name": "string",
                     *       "order": 0,
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.V2.ProjectStatusResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ProjectSubStatuses_GetList: {
        parameters: {
            query?: {
                /** @description Filters by project sub status name */
                name?: string;
                /** @description Filters by parent project status id */
                statusId?: number;
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /**
                 * @description Applies sorting by the specified field:\
                 *     "?sort=+FieldName" for ascending order,\
                 *     "?sort=-FieldName" for descending order.\
                 *     \
                 *     Available fields are: Id, Name, Order, StatusId, ModifiedOn, CreatedOn.
                 */
                sort?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /**
                 * @description What kind of items should be returned (active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "name": "string",
                     *           "statusId": 0,
                     *           "order": 0,
                     *           "modifiedOn": "string",
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Jpm.V2.ProjectSubStatusResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ProjectSubStatuses_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The project sub status ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "name": "string",
                     *       "statusId": 0,
                     *       "order": 0,
                     *       "modifiedOn": "string",
                     *       "active": true
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.V2.ProjectSubStatusResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ProjectTypes_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The project type ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "name": "string",
                     *       "description": "string",
                     *       "createdById": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Jpm.V2.ProjectTypeResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
            /** @description The requested entity was not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
    ProjectTypes_GetList: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
            };
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "name": "string",
                     *           "description": "string",
                     *           "createdById": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Jpm.V2.ProjectTypeResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "type": "string",
                     *       "title": "string",
                     *       "status": 0,
                     *       "traceId": "string",
                     *       "errors": {},
                     *       "data": {}
                     *     }
                     */
                    "application/json": components["schemas"]["ApiErrorResponse"];
                };
            };
        };
    };
}
