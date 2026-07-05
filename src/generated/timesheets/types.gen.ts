// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

export interface paths {
    "/tenant/{tenant}/activities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of activities */
        get: operations["ActivitiesControllers_GetList"];
        put?: never;
        /** Creates new activity */
        post: operations["ActivitiesControllers_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/activities/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets activity specified by ID */
        get: operations["ActivitiesControllers_Get"];
        /** Updates the specified activity */
        put: operations["ActivitiesControllers_Update"];
        post?: never;
        /** Deletes the specified activity */
        delete: operations["ActivitiesControllers_Delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/activity-categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of activity categories */
        get: operations["ActivityCategories_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/activity-categories/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets activity category specified by ID */
        get: operations["ActivityCategories_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/activity-types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of activity types */
        get: operations["ActivityTypes_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/activity-types/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets activity types specified by ID */
        get: operations["ActivityTypes_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/activity-categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for activity categories. */
        get: operations["Export_ActivityCategories"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/activity-types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for activity types. */
        get: operations["Export_ActivityTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/activities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for activity. */
        get: operations["Export_Activities"];
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
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Timesheets.V2.Activities.ActivitiesResponse": {
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
            data: components["schemas"]["Timesheets.V2.Activities.ActivitiesResponse"][];
        };
        "Timesheets.V2.Activities.ActivitiesResponse": {
            /**
             * Format: int64
             * @description ID of the activity.
             */
            id: number;
            /**
             * Format: int64
             * @description ID of the employee associated with the activity.
             */
            employeeId: number;
            /**
             * Format: int64
             * @description ID of the activity type.
             */
            activityTypeId: number;
            /** @description Type of the employee. */
            employeeType: components["schemas"]["Timesheets.V2.EmployeeType"];
            /**
             * Format: date-time
             * @description Start time of the activity on UTC.
             */
            startTime: string;
            /**
             * Format: date-time
             * @description End time of the activity on UTC.
             */
            endTime?: string | null;
            /**
             * Format: int64
             * @description ID of the job associated with the activity.
             */
            jobId?: number | null;
            /**
             * Format: int64
             * @description ID of the appointment associated with the activity.
             */
            appointmentId?: number | null;
            /**
             * Format: int64
             * @description ID of the project associated with the activity.
             */
            projectId?: number | null;
            /** @description Label of the project associated with the activity. */
            projectLabel?: string | null;
            /**
             * Format: int64
             * @description ID of the labor type associated with the activity.
             */
            laborTypeId?: number | null;
            /**
             * Format: int64
             * @description ID of the budget code associated with the activity.
             */
            budgetCodeId?: number | null;
            /** @description Memo or notes related to the activity. */
            memo?: string | null;
            /** @description List of tag type IDs associated with the activity. */
            tagTypes: number[];
            /** @description Start Coordinate of the activity. */
            startCoordinate?: components["schemas"]["Timesheets.V2.Activities.ActivityEntryCoordinate"] | null;
            /** @description End Coordinate of the activity. */
            endCoordinate?: components["schemas"]["Timesheets.V2.Activities.ActivityEntryCoordinate"] | null;
            /** @description Indicates whether the activity is active. */
            active: boolean;
            /**
             * Format: int64
             * @description ID of the user who last modified the activity.
             */
            modifiedById?: number | null;
            /**
             * Format: date-time
             * @description Date and time when the activity was created on UTC.
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Date and time when the activity was last modified on UTC.
             */
            modifiedOn: string;
        };
        /** @enum {string} */
        "Timesheets.V2.EmployeeType": "Technician" | "Employee";
        "Timesheets.V2.Activities.ActivityEntryCoordinate": {
            /** Format: double */
            latitude?: number | null;
            /** Format: double */
            longitude?: number | null;
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
        /**
         * @description Represents possible HTTP query argument values, when applying filters based on active status.
         * @enum {string}
         */
        ActiveRequestArg: "True" | "Any" | "False";
        "Timesheets.V2.Activities.ActivityResponse": {
            /**
             * Format: int64
             * @description ID of the activity.
             */
            id: number;
            /**
             * Format: int64
             * @description ID of the employee associated with the activity.
             */
            employeeId: number;
            /** @description Type of the employee. */
            employeeType: components["schemas"]["Timesheets.V2.EmployeeType"];
            /**
             * Format: int64
             * @description ID of the activity type.
             */
            activityTypeId: number;
            /**
             * Format: date-time
             * @description Start time of the activity  on UTC.
             */
            startTime: string;
            /**
             * Format: date-time
             * @description End time of the activity  on UTC.
             */
            endTime?: string | null;
            /**
             * Format: int64
             * @description ID of the job associated with the activity.
             */
            jobId?: number | null;
            /**
             * Format: int64
             * @description ID of the appointment associated with the activity.
             */
            appointmentId?: number | null;
            /**
             * Format: int64
             * @description ID of the project associated with the activity.
             */
            projectId?: number | null;
            /** @description Label of the project associated with the activity. */
            projectLabel?: string | null;
            /**
             * Format: int64
             * @description ID of the labor type associated with the activity.
             */
            laborTypeId?: number | null;
            /**
             * Format: int64
             * @description ID of the budget code associated with the activity.
             */
            budgetCodeId?: number | null;
            /** @description Memo or notes related to the activity. */
            memo?: string | null;
            /** @description List of tag type IDs associated with the activity. */
            tagTypes: number[];
            /** @description Start Coordinate of the activity. */
            startCoordinate?: components["schemas"]["Timesheets.V2.Activities.ActivityEntryCoordinate"] | null;
            /** @description End Coordinate of the activity. */
            endCoordinate?: components["schemas"]["Timesheets.V2.Activities.ActivityEntryCoordinate"] | null;
            /** @description Indicates whether the activity is active. */
            active: boolean;
            /**
             * Format: int64
             * @description ID of the user who last modified the activity.
             */
            modifiedById?: number | null;
            /**
             * Format: date-time
             * @description Date and time when the activity was created  on UTC.
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Date and time when the activity was last modified  on UTC.
             */
            modifiedOn: string;
        };
        /** @description Default response when creating object with a new ID, or updating object by specified ID. */
        ModificationResponse: {
            /**
             * Format: int64
             * @description The ID of created/updated object
             */
            id: number;
        };
        "Timesheets.V2.Activities.ActivityCreateRequest": {
            /**
             * Format: int64
             * @description ID of the employee associated with the activity.
             */
            employeeId: number;
            /** @description Type of the employee. */
            employeeType: components["schemas"]["Timesheets.V2.EmployeeType"];
            /**
             * Format: int64
             * @description ID of the activity type.
             */
            activityTypeId: number;
            /**
             * Format: date-time
             * @description Start time of the activity  on UTC.
             */
            startTime: string;
            /**
             * Format: date-time
             * @description End time of the activity  on UTC.
             */
            endTime?: string | null;
            /**
             * Format: int64
             * @description ID of the job associated with the activity.
             */
            jobId?: number | null;
            /**
             * Format: int64
             * @description ID of the appointment associated with the activity.
             */
            appointmentId?: number | null;
            /**
             * Format: int64
             * @description ID of the project associated with the activity.
             */
            projectId?: number | null;
            /** @description Label of the project associated with the activity. */
            projectLabel?: string | null;
            /**
             * Format: int64
             * @description ID of the labor type associated with the activity.
             */
            laborTypeId?: number | null;
            /**
             * Format: int64
             * @description ID of the budget code associated with the activity.
             */
            budgetCodeId?: number | null;
            /** @description Name of the budget code associated with the activity. */
            budgetCodeName?: string | null;
            /**
             * Format: double
             * @description Miles driven associated with the activity.
             */
            milesDriven?: number | null;
            /**
             * Format: int64
             * @description Non-job event assignment associated with the activity.
             */
            nonJobEventAssignmentId?: number | null;
            /** @description Memo or notes related to the activity. */
            memo?: string | null;
            /** @description List of tag type IDs associated with the activity. */
            tagTypes: number[];
        };
        "Timesheets.V2.Activities.ActivityUpdateRequest": {
            /**
             * Format: int64
             * @description ID of the activity type.
             */
            activityTypeId: number;
            /**
             * Format: date-time
             * @description Start time of the activity  on UTC.
             */
            startTime: string;
            /**
             * Format: date-time
             * @description End time of the activity  on UTC.
             */
            endTime?: string | null;
            /**
             * Format: int64
             * @description ID of the job associated with the activity.
             */
            jobId?: number | null;
            /**
             * Format: int64
             * @description ID of the appointment associated with the activity.
             */
            appointmentId?: number | null;
            /**
             * Format: int64
             * @description ID of the project associated with the activity.
             */
            projectId?: number | null;
            /** @description Label of the project associated with the activity. */
            projectLabel?: string | null;
            /**
             * Format: int64
             * @description ID of the labor type associated with the activity.
             */
            laborTypeId?: number | null;
            /**
             * Format: int64
             * @description ID of the budget code associated with the activity.
             */
            budgetCodeId?: number | null;
            /** @description Name of the budget code associated with the activity. */
            budgetCodeName?: string | null;
            /**
             * Format: double
             * @description Miles driven associated with the activity.
             */
            milesDriven?: number | null;
            /**
             * Format: int64
             * @description Non-job event assignment associated with the activity.
             */
            nonJobEventAssignmentId?: number | null;
            /** @description Memo or notes related to the activity. */
            memo?: string | null;
            /** @description List of tag type IDs associated with the activity. */
            tagTypes: number[];
            /** @description Indicates whether the activity is active. */
            active: boolean;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Timesheets.V2.ActivityCategories.ActivityCategoriesResponse": {
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
            data: components["schemas"]["Timesheets.V2.ActivityCategories.ActivityCategoriesResponse"][];
        };
        "Timesheets.V2.ActivityCategories.ActivityCategoriesResponse": {
            /**
             * Format: int64
             * @description ID of the activity category
             */
            id: number;
            /** @description Name of the activity category */
            name: string;
            /** @description Type of the activity category */
            type: components["schemas"]["Timesheets.V2.ActivityCategoryType"];
            /** @description Identifies if the activity category is allowed to edit */
            allowEdit: boolean;
            /** @description Identifies if the activity category is default */
            isDefault: boolean;
            /**
             * Format: date-time
             * @description The date when the activity category was created (in UTC)
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description The last date when the activity category was last modified (in UTC)
             */
            modifiedOn: string;
            /** @description Indicates whether the activity category is active or not */
            active: boolean;
        };
        /** @enum {string} */
        "Timesheets.V2.ActivityCategoryType": "Other" | "Idle" | "Meal" | "PaidTimeOff" | "OnJobActivities" | "Training" | "Travel";
        "Timesheets.V2.ActivityCategories.ActivityCategoryResponse": {
            /**
             * Format: int64
             * @description ID of the activity category
             */
            id: number;
            /** @description Name of the activity category */
            name: string;
            /** @description Type of the activity category */
            type: components["schemas"]["Timesheets.V2.ActivityCategoryType"];
            /** @description Identifies if the activity category is allowed to edit */
            allowEdit: boolean;
            /** @description Identifies if the activity category is default */
            isDefault: boolean;
            /**
             * Format: date-time
             * @description The date when the activity category was created (in UTC)
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description The last date when the activity category was last modified (in UTC)
             */
            modifiedOn: string;
            /** @description Indicates whether the activity category is active or not */
            active: boolean;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Timesheets.V2.ActivityTypes.ActivityTypesResponse": {
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
            data: components["schemas"]["Timesheets.V2.ActivityTypes.ActivityTypesResponse"][];
        };
        "Timesheets.V2.ActivityTypes.ActivityTypesResponse": {
            /**
             * Format: int64
             * @description ID of the activity type
             */
            id: number;
            /** @description Code of the activity type */
            code: string;
            /**
             * Format: int64
             * @description Category ID of the activity type
             */
            categoryId: number;
            /** @description Description of the activity type */
            description?: string | null;
            /** @description Icon of the activity type */
            icon: string;
            /**
             * Format: int64
             * @description Business unit ID of the activity type
             */
            businessUnitId?: number | null;
            /** @description Indicates if the activity type is the user's home business unit */
            isUsersHomeBusinessUnit: boolean;
            /**
             * Format: int64
             * @description Labor type ID of the activity type
             */
            laborTypeId?: number | null;
            /** @description Indicates if the activity type is a technician profile labor type */
            isTechnicianProfileLaborType: boolean;
            /** @description Visible to roles of the activity type */
            visibleToRoles: number[];
            /** @description Default tag type IDs of the activity type */
            defaultTagTypeIds: number[];
            /** @description Tag association of the activity type */
            tagAssociation: components["schemas"]["Timesheets.V2.Association"];
            /** @description Job association of the activity type */
            jobAssociation: components["schemas"]["Timesheets.V2.Association"];
            /** @description Project association of the activity type */
            projectAssociation: components["schemas"]["Timesheets.V2.Association"];
            /** @description Project label association of the activity type */
            projectLabelAssociation: components["schemas"]["Timesheets.V2.Association"];
            /** @description Budget code association of the activity type */
            budgetCodeAssociation: components["schemas"]["Timesheets.V2.Association"];
            /** @description Labor type association of the activity type */
            laborTypeAssociation: components["schemas"]["Timesheets.V2.Association"];
            /** @description Memo association of the activity type */
            memoAssociation: components["schemas"]["Timesheets.V2.Association"];
            /** @description Default memo of the activity type */
            defaultMemo?: string | null;
            /** @description Indicates if the activity type allows to change memo */
            dontAllowToChangeMemo: boolean;
            /** @description Indicates if the activity type allows to change tag */
            dontAllowToChangeTag: boolean;
            /** @description Indicates if the activity type is archived */
            isArchived: boolean;
            /** @description Indicates if the activity type is a draft */
            isDraft: boolean;
            /** @description Identifies if the activity category is default */
            isDefault: boolean;
            /** @description Indicates if the activity type is in use */
            isInUse: boolean;
            /** @description Indicates whether the activity category is active or not */
            active: boolean;
            /**
             * Format: date-time
             * @description The date when the activity category was created (in UTC)
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description The last date when the activity category was last modified (in UTC)
             */
            modifiedOn: string;
        };
        /** @enum {string} */
        "Timesheets.V2.Association": "DoNotAllow" | "Allow" | "Require";
        "Timesheets.V2.ActivityTypes.ActivityTypeResponse": {
            /**
             * Format: int64
             * @description ID of the activity type
             */
            id: number;
            /** @description Code of the activity type */
            code: string;
            /**
             * Format: int64
             * @description Category ID of the activity type
             */
            categoryId: number;
            /** @description Description of the activity type */
            description?: string | null;
            /** @description Icon of the activity type */
            icon: string;
            /**
             * Format: int64
             * @description Business unit ID of the activity type
             */
            businessUnitId?: number | null;
            /** @description Indicates if the activity type is the user's home business unit */
            isUsersHomeBusinessUnit: boolean;
            /**
             * Format: int64
             * @description Labor type ID of the activity type
             */
            laborTypeId?: number | null;
            /** @description Indicates if the activity type is a technician profile labor type */
            isTechnicianProfileLaborType: boolean;
            /** @description Visible to roles of the activity type */
            visibleToRoles: number[];
            /** @description Default tag type IDs of the activity type */
            defaultTagTypeIds: number[];
            /** @description Tag association of the activity type */
            tagAssociation: components["schemas"]["Timesheets.V2.Association"];
            /** @description Job association of the activity type */
            jobAssociation: components["schemas"]["Timesheets.V2.Association"];
            /** @description Project association of the activity type */
            projectAssociation: components["schemas"]["Timesheets.V2.Association"];
            /** @description Project label association of the activity type */
            projectLabelAssociation: components["schemas"]["Timesheets.V2.Association"];
            /** @description Budget code association of the activity type */
            budgetCodeAssociation: components["schemas"]["Timesheets.V2.Association"];
            /** @description Labor type association of the activity type */
            laborTypeAssociation: components["schemas"]["Timesheets.V2.Association"];
            /** @description Memo association of the activity type */
            memoAssociation: components["schemas"]["Timesheets.V2.Association"];
            /** @description Default memo of the activity type */
            defaultMemo?: string | null;
            /** @description Indicates if the activity type allows to change memo */
            dontAllowToChangeMemo: boolean;
            /** @description Indicates if the activity type allows to change tag */
            dontAllowToChangeTag: boolean;
            /** @description Indicates if the activity type is archived */
            isArchived: boolean;
            /** @description Indicates if the activity type is a draft */
            isDraft: boolean;
            /** @description Identifies if the activity category is default */
            isDefault: boolean;
            /** @description Indicates if the activity type is in use */
            isInUse: boolean;
            /** @description Indicates whether the activity category is active or not */
            active: boolean;
            /**
             * Format: date-time
             * @description The date when the activity category was created (in UTC)
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description The last date when the activity category was last modified (in UTC)
             */
            modifiedOn: string;
            /**
             * @description The technician status displayed on the Dispatch board when a technician is clocked into this activity.
             *     Possible values: Idle (0), Working (1), Dispatched (2), Meal (3).
             */
            displayedTechnicianStatus: components["schemas"]["Timesheets.Contracts.Services.ActivityTypes.DisplayedTechnicianStatusDto"];
        };
        /** @enum {string} */
        "Timesheets.Contracts.Services.ActivityTypes.DisplayedTechnicianStatusDto": "Idle" | "Working" | "Dispatched" | "Meal";
        /** @description Represents export API response. */
        "ExportResponse_Of_Timesheets.V2.ActivityCategories.ActivityCategoryExportResponse": {
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
            data: components["schemas"]["Timesheets.V2.ActivityCategories.ActivityCategoryExportResponse"][];
        };
        "Timesheets.V2.ActivityCategories.ActivityCategoryExportResponse": {
            /**
             * Format: int64
             * @description ID of the activity category
             */
            id: number;
            /** @description Name of the activity category */
            name: string;
            /** @description Type of the activity category */
            type: components["schemas"]["Timesheets.V2.ActivityCategoryType"];
            /** @description Identifies if the activity category is allowed to edit */
            allowEdit: boolean;
            /** @description Identifies if the activity category is default */
            isDefault: boolean;
            /**
             * Format: date-time
             * @description The date when the activity category was created (in UTC)
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description The last date when the activity category was last modified (in UTC)
             */
            modifiedOn: string;
            /** @description Indicates whether the activity category is active or not */
            active: boolean;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Timesheets.V2.ActivityTypes.ActivityTypeExportResponse": {
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
            data: components["schemas"]["Timesheets.V2.ActivityTypes.ActivityTypeExportResponse"][];
        };
        "Timesheets.V2.ActivityTypes.ActivityTypeExportResponse": {
            /**
             * Format: int64
             * @description ID of the activity type
             */
            id: number;
            /** @description Code of the activity type */
            code: string;
            /**
             * Format: int64
             * @description Category ID of the activity type
             */
            categoryId: number;
            /** @description Description of the activity type */
            description?: string | null;
            /** @description Icon of the activity type */
            icon: string;
            /**
             * Format: int64
             * @description Business unit ID of the activity type
             */
            businessUnitId?: number | null;
            /** @description Indicates if the activity type is the user's home business unit */
            isUsersHomeBusinessUnit: boolean;
            /**
             * Format: int64
             * @description Labor type ID of the activity type
             */
            laborTypeId?: number | null;
            /** @description Indicates if the activity type is a technician profile labor type */
            isTechnicianProfileLaborType: boolean;
            /** @description Visible to roles of the activity type */
            visibleToRoles: number[];
            /** @description Default tag type IDs of the activity type */
            defaultTagTypeIds: number[];
            /** @description Tag association of the activity type */
            tagAssociation: components["schemas"]["Timesheets.V2.Association"];
            /** @description Job association of the activity type */
            jobAssociation: components["schemas"]["Timesheets.V2.Association"];
            /** @description Project association of the activity type */
            projectAssociation: components["schemas"]["Timesheets.V2.Association"];
            /** @description Project label association of the activity type */
            projectLabelAssociation: components["schemas"]["Timesheets.V2.Association"];
            /** @description Budget code association of the activity type */
            budgetCodeAssociation: components["schemas"]["Timesheets.V2.Association"];
            /** @description Labor type association of the activity type */
            laborTypeAssociation: components["schemas"]["Timesheets.V2.Association"];
            /** @description Memo association of the activity type */
            memoAssociation: components["schemas"]["Timesheets.V2.Association"];
            /** @description Default memo of the activity type */
            defaultMemo?: string | null;
            /** @description Indicates if the activity type allows to change memo */
            dontAllowToChangeMemo: boolean;
            /** @description Indicates if the activity type allows to change tag */
            dontAllowToChangeTag: boolean;
            /** @description Indicates if the activity type is archived */
            isArchived: boolean;
            /** @description Indicates if the activity type is a draft */
            isDraft: boolean;
            /** @description Identifies if the activity category is default */
            isDefault: boolean;
            /** @description Indicates if the activity type is in use */
            isInUse: boolean;
            /** @description Indicates whether the activity category is active or not */
            active: boolean;
            /**
             * Format: date-time
             * @description The date when the activity category was created (in UTC)
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description The last date when the activity category was last modified (in UTC)
             */
            modifiedOn: string;
            /**
             * @description The technician status displayed on the Dispatch board when a technician is clocked into this activity.
             *     Possible values: Idle (0), Working (1), Dispatched (2), Meal (3).
             */
            displayedTechnicianStatus: components["schemas"]["Timesheets.Contracts.Services.ActivityTypes.DisplayedTechnicianStatusDto"];
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Timesheets.V2.Activities.ActivityExportResponse": {
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
            data: components["schemas"]["Timesheets.V2.Activities.ActivityExportResponse"][];
        };
        "Timesheets.V2.Activities.ActivityExportResponse": {
            /**
             * Format: int64
             * @description ID of the activity.
             */
            id: number;
            /**
             * Format: int64
             * @description ID of the employee associated with the activity.
             */
            employeeId: number;
            /** @description Type of the employee. */
            employeeType: components["schemas"]["Timesheets.V2.EmployeeType"];
            /**
             * Format: int64
             * @description ID of the activity type.
             */
            activityTypeId: number;
            /**
             * Format: date-time
             * @description Start time of the activity  on UTC.
             */
            startTime: string;
            /**
             * Format: date-time
             * @description End time of the activity  on UTC.
             */
            endTime?: string | null;
            /**
             * Format: int64
             * @description ID of the job associated with the activity.
             */
            jobId?: number | null;
            /**
             * Format: int64
             * @description ID of the appointment associated with the activity.
             */
            appointmentId?: number | null;
            /**
             * Format: int64
             * @description ID of the project associated with the activity.
             */
            projectId?: number | null;
            /** @description Label of the project associated with the activity. */
            projectLabel?: string | null;
            /**
             * Format: int64
             * @description ID of the labor type associated with the activity.
             */
            laborTypeId?: number | null;
            /**
             * Format: int64
             * @description ID of the budget code associated with the activity.
             */
            budgetCodeId?: number | null;
            /** @description Memo or notes related to the activity. */
            memo?: string | null;
            /** @description List of tag type IDs associated with the activity. */
            tagTypes: number[];
            /** @description Start Coordinate of the activity. */
            startCoordinate?: components["schemas"]["Timesheets.V2.Activities.ActivityEntryCoordinate"] | null;
            /** @description End Coordinate of the activity. */
            endCoordinate?: components["schemas"]["Timesheets.V2.Activities.ActivityEntryCoordinate"] | null;
            /** @description Indicates whether the activity is active. */
            active: boolean;
            /**
             * Format: int64
             * @description ID of the user who last modified the activity.
             */
            modifiedById?: number | null;
            /**
             * Format: date-time
             * @description Date and time when the activity was created  on UTC.
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Date and time when the activity was last modified  on UTC.
             */
            modifiedOn: string;
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
    ActivitiesControllers_GetList: {
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
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
                /** @description Applies sorting by specified fields */
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
                     *           "employeeId": 0,
                     *           "activityTypeId": 0,
                     *           "employeeType": {},
                     *           "startTime": "string",
                     *           "endTime": "string",
                     *           "jobId": 0,
                     *           "appointmentId": 0,
                     *           "projectId": 0,
                     *           "projectLabel": "string",
                     *           "laborTypeId": 0,
                     *           "budgetCodeId": 0,
                     *           "memo": "string",
                     *           "tagTypes": [
                     *             0
                     *           ],
                     *           "startCoordinate": {
                     *             "latitude": 0,
                     *             "longitude": 0
                     *           },
                     *           "endCoordinate": {
                     *             "latitude": 0,
                     *             "longitude": 0
                     *           },
                     *           "active": true,
                     *           "modifiedById": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Timesheets.V2.Activities.ActivitiesResponse"];
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
    ActivitiesControllers_Create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description Activity model to create */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "employeeId": 0,
                 *       "employeeType": {},
                 *       "activityTypeId": 0,
                 *       "startTime": "string",
                 *       "endTime": "string",
                 *       "jobId": 0,
                 *       "appointmentId": 0,
                 *       "projectId": 0,
                 *       "projectLabel": "string",
                 *       "laborTypeId": 0,
                 *       "budgetCodeId": 0,
                 *       "budgetCodeName": "string",
                 *       "milesDriven": 0,
                 *       "nonJobEventAssignmentId": 0,
                 *       "memo": "string",
                 *       "tagTypes": [
                 *         0
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Timesheets.V2.Activities.ActivityCreateRequest"];
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
                     *       "id": 0
                     *     }
                     */
                    "application/json": components["schemas"]["ModificationResponse"];
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
    ActivitiesControllers_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The activity ID */
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
                     *       "employeeId": 0,
                     *       "employeeType": {},
                     *       "activityTypeId": 0,
                     *       "startTime": "string",
                     *       "endTime": "string",
                     *       "jobId": 0,
                     *       "appointmentId": 0,
                     *       "projectId": 0,
                     *       "projectLabel": "string",
                     *       "laborTypeId": 0,
                     *       "budgetCodeId": 0,
                     *       "memo": "string",
                     *       "tagTypes": [
                     *         0
                     *       ],
                     *       "startCoordinate": {
                     *         "latitude": 0,
                     *         "longitude": 0
                     *       },
                     *       "endCoordinate": {
                     *         "latitude": 0,
                     *         "longitude": 0
                     *       },
                     *       "active": true,
                     *       "modifiedById": 0,
                     *       "createdOn": "string",
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Timesheets.V2.Activities.ActivityResponse"];
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
            /** @description Activity was not found */
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
    ActivitiesControllers_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Activity ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description Activity to update */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "activityTypeId": 0,
                 *       "startTime": "string",
                 *       "endTime": "string",
                 *       "jobId": 0,
                 *       "appointmentId": 0,
                 *       "projectId": 0,
                 *       "projectLabel": "string",
                 *       "laborTypeId": 0,
                 *       "budgetCodeId": 0,
                 *       "budgetCodeName": "string",
                 *       "milesDriven": 0,
                 *       "nonJobEventAssignmentId": 0,
                 *       "memo": "string",
                 *       "tagTypes": [
                 *         0
                 *       ],
                 *       "active": true
                 *     }
                 */
                "application/json": components["schemas"]["Timesheets.V2.Activities.ActivityUpdateRequest"];
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
                     *       "id": 0
                     *     }
                     */
                    "application/json": components["schemas"]["ModificationResponse"];
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
    ActivitiesControllers_Delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Activity ID */
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
    ActivityCategories_GetList: {
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
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
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
                     *           "type": {},
                     *           "allowEdit": true,
                     *           "isDefault": true,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Timesheets.V2.ActivityCategories.ActivityCategoriesResponse"];
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
    ActivityCategories_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The activity category ID */
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
                     *       "type": {},
                     *       "allowEdit": true,
                     *       "isDefault": true,
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "active": true
                     *     }
                     */
                    "application/json": components["schemas"]["Timesheets.V2.ActivityCategories.ActivityCategoryResponse"];
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
            /** @description Activity category was not found */
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
    ActivityTypes_GetList: {
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
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
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
                     *           "code": "string",
                     *           "categoryId": 0,
                     *           "description": "string",
                     *           "icon": "string",
                     *           "businessUnitId": 0,
                     *           "isUsersHomeBusinessUnit": true,
                     *           "laborTypeId": 0,
                     *           "isTechnicianProfileLaborType": true,
                     *           "visibleToRoles": [
                     *             0
                     *           ],
                     *           "defaultTagTypeIds": [
                     *             0
                     *           ],
                     *           "tagAssociation": {},
                     *           "jobAssociation": {},
                     *           "projectAssociation": {},
                     *           "projectLabelAssociation": {},
                     *           "budgetCodeAssociation": {},
                     *           "laborTypeAssociation": {},
                     *           "memoAssociation": {},
                     *           "defaultMemo": "string",
                     *           "dontAllowToChangeMemo": true,
                     *           "dontAllowToChangeTag": true,
                     *           "isArchived": true,
                     *           "isDraft": true,
                     *           "isDefault": true,
                     *           "isInUse": true,
                     *           "active": true,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Timesheets.V2.ActivityTypes.ActivityTypesResponse"];
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
    ActivityTypes_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The activity types ID */
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
                     *       "code": "string",
                     *       "categoryId": 0,
                     *       "description": "string",
                     *       "icon": "string",
                     *       "businessUnitId": 0,
                     *       "isUsersHomeBusinessUnit": true,
                     *       "laborTypeId": 0,
                     *       "isTechnicianProfileLaborType": true,
                     *       "visibleToRoles": [
                     *         0
                     *       ],
                     *       "defaultTagTypeIds": [
                     *         0
                     *       ],
                     *       "tagAssociation": {},
                     *       "jobAssociation": {},
                     *       "projectAssociation": {},
                     *       "projectLabelAssociation": {},
                     *       "budgetCodeAssociation": {},
                     *       "laborTypeAssociation": {},
                     *       "memoAssociation": {},
                     *       "defaultMemo": "string",
                     *       "dontAllowToChangeMemo": true,
                     *       "dontAllowToChangeTag": true,
                     *       "isArchived": true,
                     *       "isDraft": true,
                     *       "isDefault": true,
                     *       "isInUse": true,
                     *       "active": true,
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "displayedTechnicianStatus": {}
                     *     }
                     */
                    "application/json": components["schemas"]["Timesheets.V2.ActivityTypes.ActivityTypeResponse"];
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
            /** @description Activity types was not found */
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
    Export_ActivityCategories: {
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
                     *           "name": "string",
                     *           "type": {},
                     *           "allowEdit": true,
                     *           "isDefault": true,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Timesheets.V2.ActivityCategories.ActivityCategoryExportResponse"];
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
    Export_ActivityTypes: {
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
                     *           "code": "string",
                     *           "categoryId": 0,
                     *           "description": "string",
                     *           "icon": "string",
                     *           "businessUnitId": 0,
                     *           "isUsersHomeBusinessUnit": true,
                     *           "laborTypeId": 0,
                     *           "isTechnicianProfileLaborType": true,
                     *           "visibleToRoles": [
                     *             0
                     *           ],
                     *           "defaultTagTypeIds": [
                     *             0
                     *           ],
                     *           "tagAssociation": {},
                     *           "jobAssociation": {},
                     *           "projectAssociation": {},
                     *           "projectLabelAssociation": {},
                     *           "budgetCodeAssociation": {},
                     *           "laborTypeAssociation": {},
                     *           "memoAssociation": {},
                     *           "defaultMemo": "string",
                     *           "dontAllowToChangeMemo": true,
                     *           "dontAllowToChangeTag": true,
                     *           "isArchived": true,
                     *           "isDraft": true,
                     *           "isDefault": true,
                     *           "isInUse": true,
                     *           "active": true,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "displayedTechnicianStatus": {}
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Timesheets.V2.ActivityTypes.ActivityTypeExportResponse"];
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
    Export_Activities: {
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
                     *           "employeeId": 0,
                     *           "employeeType": {},
                     *           "activityTypeId": 0,
                     *           "startTime": "string",
                     *           "endTime": "string",
                     *           "jobId": 0,
                     *           "appointmentId": 0,
                     *           "projectId": 0,
                     *           "projectLabel": "string",
                     *           "laborTypeId": 0,
                     *           "budgetCodeId": 0,
                     *           "memo": "string",
                     *           "tagTypes": [
                     *             0
                     *           ],
                     *           "startCoordinate": {
                     *             "latitude": 0,
                     *             "longitude": 0
                     *           },
                     *           "endCoordinate": {
                     *             "latitude": 0,
                     *             "longitude": 0
                     *           },
                     *           "active": true,
                     *           "modifiedById": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Timesheets.V2.Activities.ActivityExportResponse"];
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
