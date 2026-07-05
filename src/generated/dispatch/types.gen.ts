// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

export interface paths {
    "/tenant/{tenant}/gps-provider/{gps_provider}/gps-pings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Creates new gps ping. */
        post: operations["Gps_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/appointment-assignments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of appointment assignments */
        get: operations["AppointmentAssignments_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/appointment-assignments/assign-technicians": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Assigns the list of technicians to the appointment */
        post: operations["AppointmentAssignments_AssignTechnicians"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/appointment-assignments/unassign-technicians": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Unassigns the list of technicians from the appointment */
        post: operations["AppointmentAssignments_UnassignTechnicians"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/arrival-windows": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ArrivalWindows_GetList"];
        put?: never;
        post: operations["ArrivalWindows_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/arrival-windows/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ArrivalWindows_Get"];
        put: operations["ArrivalWindows_Update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/arrival-windows/{id}/activated": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["ArrivalWindows_Activated"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/arrival-windows/configuration": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ArrivalWindows_GetConfiguration"];
        put?: never;
        post: operations["ArrivalWindows_UpdatedConfiguration"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/business-hours": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets the business hours. */
        get: operations["BusinessHour_GetList"];
        put?: never;
        post: operations["BusinessHour_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/capacity": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["Capacity_GetList"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/appointment-assignments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for appointment assignments */
        get: operations["Export_AppointmentAssignments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/non-job-appointments/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["NonJobAppointments_Get"];
        /** Update an existing non-job appointment */
        put: operations["NonJobAppointments_Update"];
        post?: never;
        /** Delete non-job appointment */
        delete: operations["NonJobAppointments_Delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/non-job-appointments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of non-job appointments */
        get: operations["NonJobAppointments_GetList"];
        put?: never;
        /** Create a new non-job appointment */
        post: operations["NonJobAppointments_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/teams": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of teams */
        get: operations["Team_GetList"];
        put?: never;
        /** Creates new team */
        post: operations["Team_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/teams/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a specific team */
        get: operations["Team_Get"];
        put?: never;
        post?: never;
        /** Delete team */
        delete: operations["Team_Delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/technician-shifts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of technician shifts */
        get: operations["TechnicianShifts_GetList"];
        put?: never;
        /** Creates new Technician Shift */
        post: operations["TechnicianShifts_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/technician-shifts/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a specific technician shift */
        get: operations["TechnicianShifts_Get"];
        put?: never;
        post?: never;
        /** Deletes the specified technician shift */
        delete: operations["TechnicianShifts_Delete"];
        options?: never;
        head?: never;
        /** Updates Technician Shift */
        patch: operations["TechnicianShifts_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/technician-shifts/bulk-delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Deletes the technician shifts specified by the criteria */
        post: operations["TechnicianShifts_BulkDelete"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/technician-skills": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of technician skills */
        get: operations["TechnicianSkills_GetList"];
        put?: never;
        /** Creates a new skill and assigns it to a technician */
        post: operations["TechnicianSkills_CreateTechnicianSkill"];
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Assigns or replaces skills on a technician.
         *     Returns the updated status and complete list of all technician skills after the operation.
         */
        patch: operations["TechnicianSkills_AssignTechnicianSkills"];
        trace?: never;
    };
    "/tenant/{tenant}/technician-skills/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a specific technician skill */
        get: operations["TechnicianSkills_Get"];
        put?: never;
        post?: never;
        /** Deletes a technician skill association */
        delete: operations["TechnicianSkills_Delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/technician-tracking": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["TechnicianTracking_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/zones": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of zones */
        get: operations["Zone_GetList"];
        put?: never;
        /** Creates a new zone */
        post: operations["Zone_CreateZone"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/zones/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a specific zone */
        get: operations["Zone_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/zones/{zoneId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Deletes a zone */
        delete: operations["Zone_DeleteZone"];
        options?: never;
        head?: never;
        /** Updates an existing zone */
        patch: operations["Zone_UpdateZone"];
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
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
        "Dispatch.V2.GpsPingResponse": {
            /** @description Unique External ID for data point */
            externalId: string;
            /** @description Request status */
            status: components["schemas"]["Dispatch.V2.GpsPingResultStatus"];
            /**
             * Format: html
             * @description Gets or sets the response message received from the GPS provider about the unit at the time of recording
             */
            message: string;
        };
        /** @enum {string} */
        "Dispatch.V2.GpsPingResultStatus": "Fail" | "Success";
        "Dispatch.V2.GpsPingCreateRequest": {
            /** @description Gets or sets the ID of the object for which location information is provided */
            unitId: string;
            /** @description Gets or sets the name of the object for which location information is provided */
            unitName: string;
            /**
             * Format: date-time
             * @description Gets or sets the time of the recording
             */
            eventTime: string;
            /**
             * Format: double
             * @description Gets or sets the latitude coordinate of the unit's location at the time of recording
             */
            latitude?: number | null;
            /**
             * Format: double
             * @description Gets or sets the longitude coordinate of the unit's location at the time of recording
             */
            longitude?: number | null;
            /**
             * Format: double
             * @description Gets or sets the speed of the vehicle at the time of recording
             */
            speed?: number | null;
            /** @description Gets the location's street address */
            street: string;
            /** @description Gets the location's city */
            city: string;
            /** @description Gets the location's region */
            region: string;
            /** @description Gets the location's postal code */
            postalCode: string;
            /**
             * Format: html
             * @description Gets or sets the response message received from the GPS provider about the unit at the time of recording
             */
            message: string;
            /** @description Unique External ID for data point */
            externalId: string;
            /** @description Indicate if gps ping unit is a new one */
            isNew: boolean;
            /** @description Gets the status message */
            statusMessage: string;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Dispatch.V2.AppointmentAssignmentResponse": {
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
            data: components["schemas"]["Dispatch.V2.AppointmentAssignmentResponse"][];
        };
        "Dispatch.V2.AppointmentAssignmentResponse": {
            /**
             * Format: int64
             * @description ID of the appointment assignment
             */
            id: number;
            /**
             * Format: int64
             * @description ID of the technician
             */
            technicianId: number;
            /** @description Name of the technician */
            technicianName: string;
            /**
             * Format: int64
             * @description ID of the user who assigned the appointment assignment
             */
            assignedById: number;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when the appointment assignment was assigned
             */
            assignedOn: string;
            /** @description Status of the appointment assignment */
            status: components["schemas"]["Dispatch.V2.JobAppointmentAssignmentStatus"];
            /** @description Whether appointment assignment is paused */
            isPaused: boolean;
            /**
             * Format: int64
             * @description ID of the job
             */
            jobId: number;
            /**
             * Format: int64
             * @description ID of the appointment
             */
            appointmentId: number;
            /**
             * Format: date-time
             * @description When the assignment was created (in UTC)
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description When the assignment was modified (in UTC)
             */
            modifiedOn: string;
            /** @description Indicate if assignment is active */
            active: boolean;
        };
        /** @enum {string} */
        "Dispatch.V2.JobAppointmentAssignmentStatus": "Scheduled" | "Dispatched" | "Working" | "Done";
        /**
         * @description Represents possible HTTP query argument values, when applying filters based on active status.
         * @enum {string}
         */
        ActiveRequestArg: "True" | "Any" | "False";
        /** @description Appointment response model */
        "Dispatch.V2.AppointmentResponse": {
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
            status: components["schemas"]["Dispatch.V2.AppointmentStatus"];
            /** @description Special instructions associated to the appointment */
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
        };
        /** @enum {string} */
        "Dispatch.V2.AppointmentStatus": "Scheduled" | "Dispatched" | "Working" | "Hold" | "Done" | "Canceled";
        "Dispatch.V2.AssignTechniciansRequest": {
            /**
             * Format: int64
             * @description Id of the appointment to assign to.
             */
            jobAppointmentId: number;
            /** @description Assign these technicians to the appointment. */
            technicianIds: number[];
        };
        "Dispatch.V2.UnassignTechniciansRequest": {
            /**
             * Format: int64
             * @description Id of the appointment to unassign from.
             */
            jobAppointmentId: number;
            /** @description Unassign these technicians from the appointment. */
            technicianIds: number[];
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Dispatch.V2.ArrivalWindowResponse": {
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
            data: components["schemas"]["Dispatch.V2.ArrivalWindowResponse"][];
        };
        "Dispatch.V2.ArrivalWindowResponse": {
            /** Format: int64 */
            id: number;
            /** Format: duration */
            start: string;
            /** Format: duration */
            duration: string;
            businessUnitIds: number[];
            active: boolean;
        };
        "Dispatch.V2.CreateArrivalWindowRequest": {
            /**
             * Format: duration
             * @description The start time for the arrival window defined as TimeSpan. I.e. "09:00"
             */
            start: string;
            /**
             * Format: duration
             * @description The end time for the arrival window defined as TimeSpan. I.e. "11:00"
             */
            duration: string;
            /** @description The business unit ids list that this arrival window applies for. */
            businessUnitIds: number[];
        };
        "Dispatch.V2.UpdateArrivalWindowRequest": {
            /**
             * Format: duration
             * @description The start time for the arrival window defined as TimeSpan. I.e. "09:00"
             */
            start: string;
            /**
             * Format: duration
             * @description The end time for the arrival window defined as TimeSpan. I.e. "11:00"
             */
            duration: string;
            /** @description The business unit ids list that this arrival window applies for. */
            businessUnitIds: number[];
        };
        "Dispatch.V2.SetArrivalWindowStatusRequest": {
            isActive: boolean;
        };
        "Dispatch.V2.ArrivalWindowConfigurationResponse": {
            configuration: components["schemas"]["Dispatch.V2.ArrivalWindowConfiguration"];
        };
        /**
         * @description Determines the default Job's start time during booking or rescheduling after an Arrival window has been selected or changed by a user.
         * @enum {string}
         */
        "Dispatch.V2.ArrivalWindowConfiguration": "StartTimeOfArrivalWindow" | "EndTimeOfArrivalWindow";
        "Dispatch.V2.UpdateArrivalWindowConfigurationRequest": {
            configuration: components["schemas"]["Dispatch.V2.ArrivalWindowConfiguration"];
        };
        "Dispatch.V2.BusinessHourModel": {
            weekdays: components["schemas"]["Dispatch.V2.TimeRange"][];
            saturday: components["schemas"]["Dispatch.V2.TimeRange"][];
            sunday: components["schemas"]["Dispatch.V2.TimeRange"][];
        };
        "Dispatch.V2.TimeRange": {
            /** Format: int32 */
            fromHour: number;
            /** Format: int32 */
            toHour: number;
        };
        "Dispatch.V2.CreateBusinessHourResponse": {
            weekdays: components["schemas"]["Dispatch.V2.TimeRange"][];
            saturday: components["schemas"]["Dispatch.V2.TimeRange"][];
            sunday: components["schemas"]["Dispatch.V2.TimeRange"][];
        };
        "Dispatch.V2.CreateBusinessHourRequest": {
            weekdays: components["schemas"]["Dispatch.V2.TimeRange"][];
            saturday: components["schemas"]["Dispatch.V2.TimeRange"][];
            sunday: components["schemas"]["Dispatch.V2.TimeRange"][];
        };
        "Dispatch.V2.CapacityResponse": {
            /**
             * Format: date-time
             * @description When the request was processed
             */
            timeStamp: string;
            /** @description Availability calculations by time frame */
            availabilities: components["schemas"]["Dispatch.V2.CapacityResponseAvailability"][];
        };
        "Dispatch.V2.CapacityResponseAvailability": {
            /**
             * Format: date-time
             * @description When the availability time frame starts
             */
            start: string;
            /**
             * Format: date-time
             * @description When the availability time frame ends
             */
            end: string;
            /**
             * Format: date-time
             * @description When the availability time frame starts
             */
            startUtc: string;
            /**
             * Format: date-time
             * @description When the availability time frame ends
             */
            endUtc: string;
            /** @description Business units that the availability applies to */
            businessUnitIds: number[];
            /**
             * Format: double
             * @description Number of hours that total capacity can allow to be booked during this time frame
             */
            totalAvailability: number;
            /**
             * Format: double
             * @description Number of remaining hours that can be booked during this time frame
             */
            openAvailability: number;
            /** @description Technician details for this availability time frame */
            technicians: components["schemas"]["Dispatch.V2.CapacityResponseTechnician"][];
            /** @description Indicate if time slot is available */
            isAvailable: boolean;
            /** @description Indicate if Ideal Booking Percentage is exceeded */
            isExceedingIdealBookingPercentage: boolean;
        };
        "Dispatch.V2.CapacityResponseTechnician": {
            /**
             * Format: int64
             * @description Unique Id of technician
             */
            id: number;
            /** @description Name of technician */
            name: string;
            /** @description Whether the technician is available to work during the associated time frame */
            status: components["schemas"]["Dispatch.V2.CapacityResponseTechnicianStatus"];
            /** @description Whether the technician has all the skills required for the job type */
            hasRequiredSkills?: boolean | null;
        };
        /** @enum {string} */
        "Dispatch.V2.CapacityResponseTechnicianStatus": "Available" | "Unavailable";
        "Dispatch.V2.CapacityRequestArgs": {
            /**
             * Format: date-time
             * @description When the time frame should start at or after
             */
            startsOnOrAfter: string;
            /**
             * Format: date-time
             * @description When the time frame should end at or before
             */
            endsOnOrBefore: string;
            /** @description Business units to calculate availability for */
            businessUnitIds?: number[] | null;
            /**
             * Format: int64
             * @description Job type whose duration should be used to calculate availability
             */
            jobTypeId?: number | null;
            /** @description Indicate whether to use skill-based availability matching */
            skillBasedAvailability: boolean;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Dispatch.V2.ExportAppointmentAssignmentsResponse": {
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
            data: components["schemas"]["Dispatch.V2.ExportAppointmentAssignmentsResponse"][];
        };
        "Dispatch.V2.ExportAppointmentAssignmentsResponse": {
            /**
             * Format: int64
             * @description ID of the appointment assignment
             */
            id: number;
            /**
             * Format: int64
             * @description ID of the technician
             */
            technicianId: number;
            /** @description Name of the technician */
            technicianName: string;
            /**
             * Format: int64
             * @description ID of the user who assigned the appointment assignment
             */
            assignedById: number;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when the appointment assignment was assigned
             */
            assignedOn: string;
            /** @description Status of the appointment assignment */
            status: components["schemas"]["Dispatch.V2.JobAppointmentAssignmentStatus"];
            /** @description Whether appointment assignment is paused */
            isPaused: boolean;
            /**
             * Format: int64
             * @description ID of the job
             */
            jobId: number;
            /**
             * Format: int64
             * @description ID of the appointment
             */
            appointmentId: number;
            /**
             * Format: date-time
             * @description When the assignment was created (in UTC)
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description When the assignment was modified (in UTC)
             */
            modifiedOn: string;
            /** @description Indicate if assignment is active */
            active: boolean;
        };
        "Dispatch.V2.GetNonJobAppointmentResponse": {
            /** Format: int64 */
            id: number;
            /** Format: int64 */
            technicianId: number;
            /** Format: date-time */
            start: string;
            name: string;
            /** Format: duration */
            duration: string;
            /** Format: int64 */
            timesheetCodeId: number;
            summary: string;
            clearDispatchBoard: boolean;
            clearTechnicianView: boolean;
            removeTechnicianFromCapacityPlanning: boolean;
            allDay: boolean;
            showOnTechnicianSchedule: boolean;
            active: boolean;
            /** Format: date-time */
            createdOn: string;
            /** Format: int64 */
            createdById: number;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Dispatch.V2.NonJobAppointmentResponse": {
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
            data: components["schemas"]["Dispatch.V2.NonJobAppointmentResponse"][];
        };
        "Dispatch.V2.NonJobAppointmentResponse": {
            /**
             * Format: int64
             * @description Non-job appointment id
             */
            id: number;
            /**
             * Format: int64
             * @description Non-job appointment's technician id
             */
            technicianId: number;
            /**
             * Format: date-time
             * @description Non-job appointment's start date/time (in UTC)
             */
            start: string;
            /** @description Non-job appointment name */
            name: string;
            /**
             * Format: duration
             * @description Non-job appointment duration
             */
            duration: string;
            /**
             * Format: int64
             * @description Unique Id of timesheet code
             */
            timesheetCodeId: number;
            /** @description Non-job appointment summary */
            summary: string;
            /** @description Indicate if non-job appointment should be cleared from dispatch board once event is over */
            clearDispatchBoard: boolean;
            /** @description Indicate if non-job appointment should be cleared from technician's calendar once event is over */
            clearTechnicianView: boolean;
            /** @description Indicate if technician availability should be remove from legacy capacity planning */
            removeTechnicianFromCapacityPlanning: boolean;
            /** @description Indicate if non-job appointment is scheduled for whole day */
            allDay: boolean;
            /** @description Whether the non-job appointment shows on the technicians schedule even if there is no timesheet */
            showOnTechnicianSchedule: boolean;
            /** @description Indicate if non-job appointment is active */
            active: boolean;
            /**
             * Format: date-time
             * @description When the appointment was created (in UTC)
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description When the appointment was last modified (in UTC)
             */
            modifiedOn: string;
            /**
             * Format: int64
             * @description ID of the user who created the non-job appointment
             */
            createdById: number;
        };
        "Dispatch.Contracts.NonJobAppointment.CreateNonJobAppointmentResult": {
            /**
             * Format: int64
             * @description Non-job appointment id
             */
            id: number;
            /**
             * Format: int64
             * @description Non-job appointment's technician id
             */
            technicianId: number;
            /**
             * Format: date-time
             * @description Non-job appointment's start date/time (in UTC)
             */
            start: string;
            /** @description Non-job appointment name */
            name: string;
            /**
             * Format: duration
             * @description Non-job appointment duration
             */
            duration: string;
            /**
             * Format: int64
             * @description Unique Id of timesheet code
             */
            timesheetCodeId: number;
            /** @description Non-job appointment summary */
            summary: string;
            /** @description Indicate if non-job appointment should be cleared from dispatch board once event is over */
            clearDispatchBoard: boolean;
            /** @description Indicate if non-job appointment should be cleared from technician's calendar once event is over */
            clearTechnicianView: boolean;
            /** @description Indicate if technician availability should be remove from legacy capacity planning */
            removeTechnicianFromCapacityPlanning: boolean;
            /** @description Indicate if non-job appointment is scheduled for whole day */
            allDay: boolean;
            /** @description Whether the non-job appointment shows on the technicians schedule even if there is no timesheet */
            showOnTechnicianSchedule: boolean;
            /** @description Indicate if non-job appointment is active */
            active: boolean;
            /**
             * Format: date-time
             * @description When the appointment was created (in UTC)
             */
            createdOn: string;
            /**
             * Format: int64
             * @description ID of the user who created the non-job appointment
             */
            createdById: number;
            /** @description Indicate if non-job appointment is repeating */
            repeat?: boolean | null;
            /**
             * Format: int32
             * @description Number of occurrences of the repeating non-job appointment
             */
            countOccurrences?: number | null;
            /**
             * Format: int32
             * @description Interval of the repeating non-job appointment
             */
            interval?: number | null;
            /** @description Frequency of the repeating non-job appointment */
            frequency?: components["schemas"]["Dispatch.Contracts.NonJobAppointment.RepeatFrequency_Int32"] | null;
            /** @description End type of the repeating non-job appointment */
            endType?: components["schemas"]["Dispatch.Contracts.NonJobAppointment.RepeatEndType_Int32"] | null;
            /**
             * Format: date-time
             * @description End Date of the repeating non-job appointment
             */
            endOn?: string | null;
            /** @description Days of the week of the repeating non-job appointment */
            daysOfWeek: string;
        };
        /** @enum {string} */
        "Dispatch.Contracts.NonJobAppointment.RepeatFrequency": "Daily" | "Weekly" | "Monthly" | "Yearly";
        /** @enum {string} */
        "Dispatch.Contracts.NonJobAppointment.RepeatEndType": "Never" | "After" | "On";
        /**
         * Format: int32
         * @enum {integer}
         */
        "Dispatch.Contracts.NonJobAppointment.RepeatFrequency_Int32": 0 | 1 | 2 | 3;
        /**
         * Format: int32
         * @enum {integer}
         */
        "Dispatch.Contracts.NonJobAppointment.RepeatEndType_Int32": 0 | 1 | 2;
        "Dispatch.V2.CreateNonJobAppointmentRequest": {
            /** Format: int64 */
            technicianId: number;
            /** Format: date-time */
            start: string;
            /** Format: duration */
            duration: string;
            name: string;
            /** Format: int64 */
            timesheetCodeId?: number | null;
            summary?: string | null;
            clearDispatchBoard?: boolean | null;
            clearTechnicianView?: boolean | null;
            showOnTechnicianSchedule?: boolean | null;
            removeTechnicianFromCapacityPlanning?: boolean | null;
            allDay?: boolean | null;
            repeat?: boolean | null;
            /** Format: int32 */
            countOccurrences?: number | null;
            /** Format: int32 */
            interval?: number | null;
            frequency?: components["schemas"]["Dispatch.Contracts.NonJobAppointment.RepeatFrequency"] | null;
            endType?: components["schemas"]["Dispatch.Contracts.NonJobAppointment.RepeatEndType"] | null;
            /** Format: date-time */
            endOn?: string | null;
            /** @example Monday, Wednesday, Friday */
            daysOfWeek?: string | null;
        };
        "Dispatch.V2.NonJobAppointmentUpdateRequest": {
            /** Format: int64 */
            technicianId: number;
            /** Format: date-time */
            start: string;
            /** Format: duration */
            duration: string;
            name: string;
            /** Format: int64 */
            timesheetCodeId?: number | null;
            summary?: string | null;
            clearDispatchBoard?: boolean | null;
            clearTechnicianView?: boolean | null;
            showOnTechnicianSchedule?: boolean | null;
            removeTechnicianFromCapacityPlanning?: boolean | null;
            allDay?: boolean | null;
            repeat?: boolean | null;
            /** Format: int32 */
            countOccurrences?: number | null;
            /** Format: int32 */
            interval?: number | null;
            frequency?: components["schemas"]["Dispatch.Contracts.NonJobAppointment.RepeatFrequency"] | null;
            endType?: components["schemas"]["Dispatch.Contracts.NonJobAppointment.RepeatEndType"] | null;
            /** Format: date-time */
            endOn?: string | null;
            /** @example Monday, Wednesday, Friday */
            daysOfWeek?: string | null;
        };
        "Dispatch.Contracts.NonJobAppointment.DeleteNonJobAppointmentResult": {
            message: string;
            /** Format: int64 */
            id: number;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Dispatch.V2.TeamResponse": {
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
            data: components["schemas"]["Dispatch.V2.TeamResponse"][];
        };
        "Dispatch.V2.TeamResponse": {
            /**
             * Format: int64
             * @description Unique id of the team record
             */
            id: number;
            /** @description Whether the team is enabled */
            active: boolean;
            /** @description Descriptive identifier */
            name?: string | null;
            /**
             * Format: int64
             * @description Created by User ID
             */
            createdBy?: number | null;
            /**
             * Format: date-time
             * @description Created on date
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Modified on date
             */
            modifiedOn: string;
        };
        "Dispatch.V2.CreateTeamResponse": {
            /**
             * Format: int64
             * @description Unique id of the team record
             */
            id: number;
            /** @description Whether the team is enabled */
            active: boolean;
            /** @description Descriptive identifier */
            name?: string | null;
            /**
             * Format: int64
             * @description Created by User ID
             */
            createdBy?: number | null;
            /**
             * Format: date-time
             * @description Created on date
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Modified on date
             */
            modifiedOn: string;
            /** @description Whether the team was created or this is an existing record */
            created: boolean;
        };
        "Dispatch.V2.CreateTeamRequest": {
            /** @description Whether the team is enabled */
            active: boolean;
            /** @description Descriptive identifier */
            name?: string | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Dispatch.V2.TechnicianShiftResponse": {
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
            data: components["schemas"]["Dispatch.V2.TechnicianShiftResponse"][];
        };
        "Dispatch.V2.TechnicianShiftResponse": {
            /**
             * Format: int64
             * @description Unique id of the shift record
             */
            id: number;
            /** @description How the shift is displayed and contributes to availability calculations */
            shiftType: components["schemas"]["Dispatch.V2.ShiftType"];
            /** @description Descriptive identifier */
            title: string;
            /** @description Optional detailed explanation of the shift */
            note?: string | null;
            /** @description Whether the shift is enabled */
            active: boolean;
            /**
             * Format: int64
             * @description >Unique id of the technician this shift applies to
             */
            technicianId: number;
            /**
             * Format: date-time
             * @description When the shift begins
             */
            start: string;
            /**
             * Format: date-time
             * @description When the shift ends
             */
            end: string;
            /**
             * Format: int64
             * @description Timesheet code ID of shift
             */
            timesheetCodeId?: number | null;
            /**
             * Format: date-time
             * @description When the shift was created (in UTC)
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description When the shift was modified (in UTC)
             */
            modifiedOn: string;
        };
        /** @enum {string} */
        "Dispatch.V2.ShiftType": "Normal" | "OnCall" | "TimeOff";
        "Dispatch.V2.TechnicianShiftCreateResponse": {
            created: boolean;
            technicianShifts: components["schemas"]["Dispatch.V2.TechnicianShiftResponse"][];
        };
        "Dispatch.V2.CreateTechnicianShiftRequest": {
            technicianIds: number[];
            shiftType: components["schemas"]["Dispatch.V2.ShiftType"];
            title: string;
            /**
             * Format: date-time
             * @description When the shift begins
             */
            start: string;
            /**
             * Format: date-time
             * @description When the shift ends
             */
            end: string;
            /** @description Optional detailed explanation of the shift */
            note?: string | null;
            /**
             * Format: int64
             * @description Timesheet code ID of shift
             */
            timesheetCodeId?: number | null;
            /**
             * @description Repeat type of the shift (Never, Daily, Weekly)
             * @example Weekly
             */
            repeatType: components["schemas"]["Dispatch.V2.ShiftRepeatType"];
            /**
             * Format: date-time
             * @description Date to stop repeating on
             */
            repeatEndDate?: string | null;
            /** Format: int32 */
            repeatInterval?: number | null;
            /**
             * @description List of Days to repeat the shift on
             * @example Monday, Wednesday, Friday
             */
            shiftDays?: string | null;
        };
        /** @enum {string} */
        "Dispatch.V2.ShiftRepeatType": "Never" | "Daily" | "Weekly";
        "Dispatch.V2.TechnicianShiftUpdateResponse": {
            technicianShifts: components["schemas"]["Dispatch.V2.TechnicianShiftResponse"][];
        };
        "Dispatch.V2.UpdateTechnicianShiftRequest": {
            shiftType?: components["schemas"]["Dispatch.V2.ShiftType"];
            title?: string;
            /**
             * Format: date-time
             * @description When the shift begins
             */
            start?: string;
            /**
             * Format: date-time
             * @description When the shift ends
             */
            end?: string;
            /** @description Optional detailed explanation of the shift */
            note?: string;
            /**
             * Format: int64
             * @description Timesheet code ID of shift
             */
            timesheetCodeId?: number | null;
        };
        "Dispatch.Contracts.TechnicianShift.DeleteTechnicianShiftResult": {
            message: string;
            /** Format: int64 */
            id: number;
        };
        "Dispatch.Contracts.TechnicianShift.BulkDeleteTechnicianShiftResult": {
            message: string;
            deletedIds: number[];
        };
        "Dispatch.V2.BulkDeleteTechnicianShiftRequest": {
            /**
             * Format: date-time
             * @description The start date for the range deletion
             */
            start: string;
            /**
             * Format: date-time
             * @description The end date for the range deletion
             */
            end: string;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Dispatch.V2.TechnicianSkillResponse": {
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
            data: components["schemas"]["Dispatch.V2.TechnicianSkillResponse"][];
        };
        /** @description Represents a technician skill response. */
        "Dispatch.V2.TechnicianSkillResponse": {
            /** @description Unique id of the technician skill record. */
            id: string;
            /** @description Descriptive identifier. */
            name: string;
            /** @description Whether the technician skill is enabled. */
            active: boolean;
            /**
             * Format: int64
             * @description Unique id of the technician this technician skill applies to.
             */
            technicianId: number;
            /** @description Unique ids of job types this technician skill applies to. */
            jobTypeIds?: number[] | null;
            /**
             * Format: date-time
             * @description When the technician skill was created (in UTC).
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description When the technician skill was modified (in UTC).
             */
            modifiedOn: string;
        };
        /** @description Response for updating technician skills */
        "Dispatch.V2.UpdateTechnicianSkillsResponse": {
            /** @description Whether the update was successful */
            updated: boolean;
            /** @description List of all technician skills after the update */
            technicianSkills: components["schemas"]["Dispatch.V2.TechnicianSkillResponse"][];
        };
        /** @description Assigns or replaces skills on a technician */
        "Dispatch.V2.UpdateTechnicianSkillsRequest": {
            /**
             * Format: int64
             * @description Technician Id to assign Skills to
             */
            technicianId: number;
            /** @description Skills Id to associate with the Technician */
            skillIds: number[];
            /** @description Whether this replaces all existing skills or just appends the skills */
            replaceExistingSkills: boolean;
        };
        /** @description Creates a new skill and assigns it to a technician */
        "Dispatch.V2.CreateTechnicianSkillRequest": {
            /**
             * Format: int64
             * @description Technician Id to assign the newly created skill to
             */
            technicianId: number;
            /** @description Name of the skill */
            name: string;
            /** @description If the skill is active */
            active: boolean;
        };
        /** @description Result of deleting a technician skill association. */
        "Dispatch.Contracts.TechnicianSkill.DeleteTechnicianSkillResult": {
            id: string;
        };
        "Dispatch.V2.TechnicianTrackingResponse": {
            /** @description Url to allow tracking the technician's location */
            technicianTrackingUrl: string;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Dispatch.V2.ZoneResponse": {
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
            data: components["schemas"]["Dispatch.V2.ZoneResponse"][];
        };
        "Dispatch.V2.ZoneResponse": {
            /**
             * Format: int64
             * @description Unique id of the zone record
             */
            id: number;
            /** @description Whether the zone is enabled */
            active: boolean;
            /** @description Descriptive identifier */
            name?: string | null;
            /** @description A list of assigned zip codes to the zone */
            zips?: string[] | null;
            /** @description A list of assigned cities to the zone */
            cities?: string[] | null;
            /** @description A list of assigned territory numbers to the zone */
            territoryNumbers?: string[] | null;
            /** @description A list of assigned LOCN numbers to the zone */
            locnNumbers?: string[] | null;
            /**
             * Format: int64
             * @description User ID who created the zone
             */
            createdBy: number;
            /**
             * Format: date-time
             * @description Date/time (in UTC) the zone was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Date/time (in UTC) the zone was last modified
             */
            modifiedOn: string;
            /** @description Whether the service days option is enabled */
            serviceDaysEnabled: boolean;
            /** @description A list of assigned service days */
            serviceDays?: string[] | null;
            /** @description A list of assigned business units */
            businessUnits?: number[] | null;
            /** @description A list of assigned technicians */
            technicians?: number[] | null;
        };
        "Dispatch.V2.CreateOrUpdateZoneResponse": {
            /**
             * Format: int64
             * @description Unique id of the zone record
             */
            id: number;
            /** @description Whether the zone is enabled */
            active: boolean;
            /** @description Descriptive identifier */
            name: string;
            /** @description A list of assigned zip codes to the zone */
            zips: string[];
            /** @description A list of assigned cities to the zone */
            cities: string[];
            /** @description A list of assigned territory numbers to the zone */
            territoryNumbers: string[];
            /** @description A list of assigned LOCN numbers to the zone */
            locnNumbers: string[];
            /** @description Whether the service days option is enabled */
            serviceDaysEnabled: boolean;
            /** @description A list of assigned service days */
            serviceDaysIds: number[];
            /** @description A list of assigned business units */
            businessUnits: number[];
        };
        "Dispatch.V2.CreateOrUpdateZoneRequestArgs": {
            /** @description Descriptive identifier */
            name?: string | null;
            /** @description A list of assigned zip codes to the zone */
            zips?: string[] | null;
            /** @description A list of assigned cities to the zone */
            cities?: string[] | null;
            /** @description A list of assigned territory numbers to the zone */
            territoryNumbers?: string[] | null;
            /** @description A list of assigned LOCN numbers to the zone */
            locnNumbers?: string[] | null;
            /** @description Whether the service days option is enabled */
            serviceDaysEnabled?: boolean | null;
            /** @description A list of assigned service days */
            serviceDaysIds?: number[] | null;
            /** @description A list of assigned business units */
            businessUnits?: number[] | null;
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
    Gps_Create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                gps_provider: string;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example [
                 *       {
                 *         "unitId": "string",
                 *         "unitName": "string",
                 *         "eventTime": "string",
                 *         "latitude": 0,
                 *         "longitude": 0,
                 *         "speed": 0,
                 *         "street": "string",
                 *         "city": "string",
                 *         "region": "string",
                 *         "postalCode": "string",
                 *         "message": "string",
                 *         "externalId": "string",
                 *         "isNew": true,
                 *         "statusMessage": "string"
                 *       }
                 *     ]
                 */
                "application/json": components["schemas"]["Dispatch.V2.GpsPingCreateRequest"][];
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
                     * @example [
                     *       {
                     *         "externalId": "string",
                     *         "status": {},
                     *         "message": "string"
                     *       }
                     *     ]
                     */
                    "application/json": components["schemas"]["Dispatch.V2.GpsPingResponse"][];
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
    AppointmentAssignments_GetList: {
        parameters: {
            query?: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /** @description Return appointment assignments for one or more appointments */
                appointmentIds?: string;
                /** @description Return appointment assignments for a single job */
                jobId?: number;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
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
                 *     Available fields are: Id, CreatedOn, ModifiedOn.
                 */
                sort?: string;
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
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
                     *           "technicianId": 0,
                     *           "technicianName": "string",
                     *           "assignedById": 0,
                     *           "assignedOn": "string",
                     *           "status": {},
                     *           "isPaused": true,
                     *           "jobId": 0,
                     *           "appointmentId": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Dispatch.V2.AppointmentAssignmentResponse"];
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
    AppointmentAssignments_AssignTechnicians: {
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
                 *       "jobAppointmentId": 0,
                 *       "technicianIds": [
                 *         0
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Dispatch.V2.AssignTechniciansRequest"];
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
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.V2.AppointmentResponse"];
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
    AppointmentAssignments_UnassignTechnicians: {
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
                 *       "jobAppointmentId": 0,
                 *       "technicianIds": [
                 *         0
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Dispatch.V2.UnassignTechniciansRequest"];
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
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.V2.AppointmentResponse"];
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
    ArrivalWindows_GetList: {
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
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
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
                     *           "start": "string",
                     *           "duration": "string",
                     *           "businessUnitIds": [
                     *             0
                     *           ],
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Dispatch.V2.ArrivalWindowResponse"];
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
    ArrivalWindows_Create: {
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
                 *       "start": "string",
                 *       "duration": "string",
                 *       "businessUnitIds": [
                 *         0
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Dispatch.V2.CreateArrivalWindowRequest"];
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
                     *       "start": "string",
                     *       "duration": "string",
                     *       "businessUnitIds": [
                     *         0
                     *       ],
                     *       "active": true
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.V2.ArrivalWindowResponse"];
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
    ArrivalWindows_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
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
                     *       "start": "string",
                     *       "duration": "string",
                     *       "businessUnitIds": [
                     *         0
                     *       ],
                     *       "active": true
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.V2.ArrivalWindowResponse"];
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
    ArrivalWindows_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "start": "string",
                 *       "duration": "string",
                 *       "businessUnitIds": [
                 *         0
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Dispatch.V2.UpdateArrivalWindowRequest"];
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
                     *       "start": "string",
                     *       "duration": "string",
                     *       "businessUnitIds": [
                     *         0
                     *       ],
                     *       "active": true
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.V2.ArrivalWindowResponse"];
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
    ArrivalWindows_Activated: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "isActive": true
                 *     }
                 */
                "application/json": components["schemas"]["Dispatch.V2.SetArrivalWindowStatusRequest"];
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
    ArrivalWindows_GetConfiguration: {
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
                     *       "configuration": "StartTimeOfArrivalWindow"
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.V2.ArrivalWindowConfigurationResponse"];
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
    ArrivalWindows_UpdatedConfiguration: {
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
                 *       "configuration": "StartTimeOfArrivalWindow"
                 *     }
                 */
                "application/json": components["schemas"]["Dispatch.V2.UpdateArrivalWindowConfigurationRequest"];
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
                     *       "configuration": "StartTimeOfArrivalWindow"
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.V2.ArrivalWindowConfigurationResponse"];
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
    BusinessHour_GetList: {
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
            /** @description A list with the business hours */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "weekdays": [
                     *         {
                     *           "fromHour": 0,
                     *           "toHour": 0
                     *         }
                     *       ],
                     *       "saturday": [
                     *         {
                     *           "fromHour": 0,
                     *           "toHour": 0
                     *         }
                     *       ],
                     *       "sunday": [
                     *         {
                     *           "fromHour": 0,
                     *           "toHour": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.V2.BusinessHourModel"];
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
    BusinessHour_Create: {
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
                 *       "weekdays": [
                 *         {
                 *           "fromHour": 0,
                 *           "toHour": 0
                 *         }
                 *       ],
                 *       "saturday": [
                 *         {
                 *           "fromHour": 0,
                 *           "toHour": 0
                 *         }
                 *       ],
                 *       "sunday": [
                 *         {
                 *           "fromHour": 0,
                 *           "toHour": 0
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Dispatch.V2.CreateBusinessHourRequest"];
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
                     *       "weekdays": [
                     *         {
                     *           "fromHour": 0,
                     *           "toHour": 0
                     *         }
                     *       ],
                     *       "saturday": [
                     *         {
                     *           "fromHour": 0,
                     *           "toHour": 0
                     *         }
                     *       ],
                     *       "sunday": [
                     *         {
                     *           "fromHour": 0,
                     *           "toHour": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.V2.CreateBusinessHourResponse"];
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
    Capacity_GetList: {
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
                 *       "startsOnOrAfter": "string",
                 *       "endsOnOrBefore": "string",
                 *       "businessUnitIds": [
                 *         0
                 *       ],
                 *       "jobTypeId": 0,
                 *       "skillBasedAvailability": true
                 *     }
                 */
                "application/json": components["schemas"]["Dispatch.V2.CapacityRequestArgs"];
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
                     *       "timeStamp": "string",
                     *       "availabilities": [
                     *         {
                     *           "start": "string",
                     *           "end": "string",
                     *           "startUtc": "string",
                     *           "endUtc": "string",
                     *           "businessUnitIds": [
                     *             0
                     *           ],
                     *           "totalAvailability": 0,
                     *           "openAvailability": 0,
                     *           "technicians": [
                     *             {
                     *               "id": 0,
                     *               "name": "string",
                     *               "status": {},
                     *               "hasRequiredSkills": true
                     *             }
                     *           ],
                     *           "isAvailable": true,
                     *           "isExceedingIdealBookingPercentage": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.V2.CapacityResponse"];
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
    Export_AppointmentAssignments: {
        parameters: {
            query?: {
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
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
                     *           "id": 0,
                     *           "technicianId": 0,
                     *           "technicianName": "string",
                     *           "assignedById": 0,
                     *           "assignedOn": "string",
                     *           "status": {},
                     *           "isPaused": true,
                     *           "jobId": 0,
                     *           "appointmentId": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Dispatch.V2.ExportAppointmentAssignmentsResponse"];
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
    NonJobAppointments_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
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
                     *       "technicianId": 0,
                     *       "start": "string",
                     *       "name": "string",
                     *       "duration": "string",
                     *       "timesheetCodeId": 0,
                     *       "summary": "string",
                     *       "clearDispatchBoard": true,
                     *       "clearTechnicianView": true,
                     *       "removeTechnicianFromCapacityPlanning": true,
                     *       "allDay": true,
                     *       "showOnTechnicianSchedule": true,
                     *       "active": true,
                     *       "createdOn": "string",
                     *       "createdById": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.V2.GetNonJobAppointmentResponse"];
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
    NonJobAppointments_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "technicianId": 0,
                 *       "start": "string",
                 *       "duration": "string",
                 *       "name": "string",
                 *       "timesheetCodeId": 0,
                 *       "summary": "string",
                 *       "clearDispatchBoard": true,
                 *       "clearTechnicianView": true,
                 *       "showOnTechnicianSchedule": true,
                 *       "removeTechnicianFromCapacityPlanning": true,
                 *       "allDay": true,
                 *       "repeat": true,
                 *       "countOccurrences": 0,
                 *       "interval": 0,
                 *       "frequency": {},
                 *       "endType": {},
                 *       "endOn": "string",
                 *       "daysOfWeek": "Monday, Wednesday, Friday"
                 *     }
                 */
                "application/json": components["schemas"]["Dispatch.V2.NonJobAppointmentUpdateRequest"];
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
                     *       "technicianId": 0,
                     *       "start": "string",
                     *       "name": "string",
                     *       "duration": "string",
                     *       "timesheetCodeId": 0,
                     *       "summary": "string",
                     *       "clearDispatchBoard": true,
                     *       "clearTechnicianView": true,
                     *       "removeTechnicianFromCapacityPlanning": true,
                     *       "allDay": true,
                     *       "showOnTechnicianSchedule": true,
                     *       "active": true,
                     *       "createdOn": "string",
                     *       "createdById": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.V2.GetNonJobAppointmentResponse"];
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
    NonJobAppointments_Delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
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
                     *       "message": "string",
                     *       "id": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.Contracts.NonJobAppointment.DeleteNonJobAppointmentResult"];
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
    NonJobAppointments_GetList: {
        parameters: {
            query?: {
                /** @description Unique id of the technician this non-job appointment applies to */
                technicianId?: number;
                /** @description When the Start of non-job appointment should be at or after */
                startsOnOrAfter?: string;
                /** @description When the Start of non-job appointment should be at or before */
                startsOnOrBefore?: string;
                /** @description Unique Id of timesheet code must apply to */
                timesheetCodeId?: number;
                /** @description Whether the result should contains only active non-job appointments */
                activeOnly?: boolean;
                /** @description Whether the non-job appointment shows on the technicians schedule even if there is no timesheet */
                showOnTechnicianSchedule?: boolean;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
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
                 *     Available fields are: Id, CreatedOn, ModifiedOn.
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
                     *           "technicianId": 0,
                     *           "start": "string",
                     *           "name": "string",
                     *           "duration": "string",
                     *           "timesheetCodeId": 0,
                     *           "summary": "string",
                     *           "clearDispatchBoard": true,
                     *           "clearTechnicianView": true,
                     *           "removeTechnicianFromCapacityPlanning": true,
                     *           "allDay": true,
                     *           "showOnTechnicianSchedule": true,
                     *           "active": true,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "createdById": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Dispatch.V2.NonJobAppointmentResponse"];
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
    NonJobAppointments_Create: {
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
                 *       "technicianId": 0,
                 *       "start": "string",
                 *       "duration": "string",
                 *       "name": "string",
                 *       "timesheetCodeId": 0,
                 *       "summary": "string",
                 *       "clearDispatchBoard": true,
                 *       "clearTechnicianView": true,
                 *       "showOnTechnicianSchedule": true,
                 *       "removeTechnicianFromCapacityPlanning": true,
                 *       "allDay": true,
                 *       "repeat": true,
                 *       "countOccurrences": 0,
                 *       "interval": 0,
                 *       "frequency": {},
                 *       "endType": {},
                 *       "endOn": "string",
                 *       "daysOfWeek": "Monday, Wednesday, Friday"
                 *     }
                 */
                "application/json": components["schemas"]["Dispatch.V2.CreateNonJobAppointmentRequest"];
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
                     *       "technicianId": 0,
                     *       "start": "string",
                     *       "name": "string",
                     *       "duration": "string",
                     *       "timesheetCodeId": 0,
                     *       "summary": "string",
                     *       "clearDispatchBoard": true,
                     *       "clearTechnicianView": true,
                     *       "removeTechnicianFromCapacityPlanning": true,
                     *       "allDay": true,
                     *       "showOnTechnicianSchedule": true,
                     *       "active": true,
                     *       "createdOn": "string",
                     *       "createdById": 0,
                     *       "repeat": true,
                     *       "countOccurrences": 0,
                     *       "interval": 0,
                     *       "frequency": {},
                     *       "endType": {},
                     *       "endOn": "string",
                     *       "daysOfWeek": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.Contracts.NonJobAppointment.CreateNonJobAppointmentResult"];
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
    Team_GetList: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /** @description Whether to include inactive teams */
                includeInactive?: boolean;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /**
                 * @description Applies sorting by the specified field:\
                 *     "?sort=+FieldName" for ascending order,\
                 *     "?sort=-FieldName" for descending order.\
                 *     \
                 *     Available fields are: Id, CreatedOn, ModifiedOn.
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
                     *           "active": true,
                     *           "name": "string",
                     *           "createdBy": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Dispatch.V2.TeamResponse"];
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
    Team_Create: {
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
                 *       "active": true,
                 *       "name": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Dispatch.V2.CreateTeamRequest"];
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
                     *       "active": true,
                     *       "name": "string",
                     *       "createdBy": 0,
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "created": true
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.V2.CreateTeamResponse"];
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
    Team_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
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
                     *       "active": true,
                     *       "name": "string",
                     *       "createdBy": 0,
                     *       "createdOn": "string",
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.V2.TeamResponse"];
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
    Team_Delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
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
    TechnicianShifts_GetList: {
        parameters: {
            query?: {
                /** @description When the Start of shift should be at or after */
                startsOnOrAfter?: string;
                /** @description When the End of shift should be at or before */
                endsOnOrBefore?: string;
                /**
                 * @description Value to match ShiftType to\
                 *     Values: [Normal, OnCall, TimeOff]
                 */
                shiftType?: string & components["schemas"]["Dispatch.V2.ShiftType"];
                /** @description Unique Id of technician shift must apply to */
                technicianId?: number;
                /** @description Text that must appear in the Title */
                titleContains?: string;
                /** @description Text that must appear in the Note */
                noteContains?: string;
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
                 *     Available fields are: Id, CreatedOn, ModifiedOn.
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
                     *           "shiftType": {},
                     *           "title": "string",
                     *           "note": "string",
                     *           "active": true,
                     *           "technicianId": 0,
                     *           "start": "string",
                     *           "end": "string",
                     *           "timesheetCodeId": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Dispatch.V2.TechnicianShiftResponse"];
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
    TechnicianShifts_Create: {
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
                 *       "technicianIds": [
                 *         0
                 *       ],
                 *       "shiftType": "Normal",
                 *       "title": "string",
                 *       "start": "string",
                 *       "end": "string",
                 *       "note": "string",
                 *       "timesheetCodeId": 0,
                 *       "repeatType": "Weekly",
                 *       "repeatEndDate": "string",
                 *       "repeatInterval": 0,
                 *       "shiftDays": "Monday, Wednesday, Friday"
                 *     }
                 */
                "application/json": components["schemas"]["Dispatch.V2.CreateTechnicianShiftRequest"];
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
                     *       "created": true,
                     *       "technicianShifts": [
                     *         {
                     *           "id": 0,
                     *           "shiftType": {},
                     *           "title": "string",
                     *           "note": "string",
                     *           "active": true,
                     *           "technicianId": 0,
                     *           "start": "string",
                     *           "end": "string",
                     *           "timesheetCodeId": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.V2.TechnicianShiftCreateResponse"];
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
    TechnicianShifts_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
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
                     *       "shiftType": {},
                     *       "title": "string",
                     *       "note": "string",
                     *       "active": true,
                     *       "technicianId": 0,
                     *       "start": "string",
                     *       "end": "string",
                     *       "timesheetCodeId": 0,
                     *       "createdOn": "string",
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.V2.TechnicianShiftResponse"];
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
    TechnicianShifts_Delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The technician shift Id to delete */
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
                     *       "message": "string",
                     *       "id": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.Contracts.TechnicianShift.DeleteTechnicianShiftResult"];
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
    TechnicianShifts_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "shiftType": "Normal",
                 *       "title": "string",
                 *       "start": "string",
                 *       "end": "string",
                 *       "note": "string",
                 *       "timesheetCodeId": 0
                 *     }
                 */
                "application/json": components["schemas"]["Dispatch.V2.UpdateTechnicianShiftRequest"];
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
                     *       "technicianShifts": [
                     *         {
                     *           "id": 0,
                     *           "shiftType": {},
                     *           "title": "string",
                     *           "note": "string",
                     *           "active": true,
                     *           "technicianId": 0,
                     *           "start": "string",
                     *           "end": "string",
                     *           "timesheetCodeId": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.V2.TechnicianShiftUpdateResponse"];
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
    TechnicianShifts_BulkDelete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The criteria to delete */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "start": "string",
                 *       "end": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Dispatch.V2.BulkDeleteTechnicianShiftRequest"];
            };
        };
        responses: {
            /** @description A list with the deleted technician shift Ids */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "message": "string",
                     *       "deletedIds": [
                     *         0
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.Contracts.TechnicianShift.BulkDeleteTechnicianShiftResult"];
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
    TechnicianSkills_GetList: {
        parameters: {
            query?: {
                /** @description Gets or sets the unique Id of the technician the skill must apply to. */
                technicianId?: number;
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
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /**
                 * @description Gets or sets the sorting configuration.
                 *     Applies sorting by the specified field:
                 *     "?sort=+FieldName" for ascending order,
                 *     "?sort=-FieldName" for descending order.
                 *     Available fields are: Id, CreatedOn, ModifiedOn.
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
            /** @description Paginated list of technician skills */
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
                     *           "id": "string",
                     *           "name": "string",
                     *           "active": true,
                     *           "technicianId": 0,
                     *           "jobTypeIds": [
                     *             0
                     *           ],
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Dispatch.V2.TechnicianSkillResponse"];
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
    TechnicianSkills_CreateTechnicianSkill: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The request containing skill details and technician ID */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "technicianId": 0,
                 *       "name": "string",
                 *       "active": true
                 *     }
                 */
                "application/json": components["schemas"]["Dispatch.V2.CreateTechnicianSkillRequest"];
            };
        };
        responses: {
            /** @description The created technician skill */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": "string",
                     *       "name": "string",
                     *       "active": true,
                     *       "technicianId": 0,
                     *       "jobTypeIds": [
                     *         0
                     *       ],
                     *       "createdOn": "string",
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.V2.TechnicianSkillResponse"];
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
    TechnicianSkills_AssignTechnicianSkills: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The request containing technician ID and skill IDs to assign */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "technicianId": 0,
                 *       "skillIds": [
                 *         0
                 *       ],
                 *       "replaceExistingSkills": true
                 *     }
                 */
                "application/json": components["schemas"]["Dispatch.V2.UpdateTechnicianSkillsRequest"];
            };
        };
        responses: {
            /** @description Update result with all technician skills */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "updated": true,
                     *       "technicianSkills": [
                     *         {
                     *           "id": "string",
                     *           "name": "string",
                     *           "active": true,
                     *           "technicianId": 0,
                     *           "jobTypeIds": [
                     *             0
                     *           ],
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.V2.UpdateTechnicianSkillsResponse"];
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
    TechnicianSkills_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the technician skill */
                id: string;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The technician skill details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": "string",
                     *       "name": "string",
                     *       "active": true,
                     *       "technicianId": 0,
                     *       "jobTypeIds": [
                     *         0
                     *       ],
                     *       "createdOn": "string",
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.V2.TechnicianSkillResponse"];
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
    TechnicianSkills_Delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the technician skill (format: {TechnicianId}_{SkillId}) */
                id: string;
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
                     *       "id": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.Contracts.TechnicianSkill.DeleteTechnicianSkillResult"];
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
    TechnicianTracking_Get: {
        parameters: {
            query: {
                /** @description Unique Id of technician that tracking url must apply to */
                technicianId: number;
                /** @description Unique Id of appointment that tracking url must apply to */
                appointmentId: number;
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
                     *       "technicianTrackingUrl": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.V2.TechnicianTrackingResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example string */
                    "application/json": string;
                };
            };
        };
    };
    Zone_GetList: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
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
                 *     Available fields are: Id, CreatedOn, ModifiedOn.
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
                     *           "active": true,
                     *           "name": "string",
                     *           "zips": [
                     *             "string"
                     *           ],
                     *           "cities": [
                     *             "string"
                     *           ],
                     *           "territoryNumbers": [
                     *             "string"
                     *           ],
                     *           "locnNumbers": [
                     *             "string"
                     *           ],
                     *           "createdBy": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "serviceDaysEnabled": true,
                     *           "serviceDays": [
                     *             "string"
                     *           ],
                     *           "businessUnits": [
                     *             0
                     *           ],
                     *           "technicians": [
                     *             0
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Dispatch.V2.ZoneResponse"];
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
    Zone_CreateZone: {
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
                 *       "name": "string",
                 *       "zips": [
                 *         "string"
                 *       ],
                 *       "cities": [
                 *         "string"
                 *       ],
                 *       "territoryNumbers": [
                 *         "string"
                 *       ],
                 *       "locnNumbers": [
                 *         "string"
                 *       ],
                 *       "serviceDaysEnabled": true,
                 *       "serviceDaysIds": [
                 *         0
                 *       ],
                 *       "businessUnits": [
                 *         0
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Dispatch.V2.CreateOrUpdateZoneRequestArgs"];
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
                     *       "active": true,
                     *       "name": "string",
                     *       "zips": [
                     *         "string"
                     *       ],
                     *       "cities": [
                     *         "string"
                     *       ],
                     *       "territoryNumbers": [
                     *         "string"
                     *       ],
                     *       "locnNumbers": [
                     *         "string"
                     *       ],
                     *       "serviceDaysEnabled": true,
                     *       "serviceDaysIds": [
                     *         0
                     *       ],
                     *       "businessUnits": [
                     *         0
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.V2.CreateOrUpdateZoneResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example string */
                    "application/json": string;
                };
            };
        };
    };
    Zone_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
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
                     *       "active": true,
                     *       "name": "string",
                     *       "zips": [
                     *         "string"
                     *       ],
                     *       "cities": [
                     *         "string"
                     *       ],
                     *       "territoryNumbers": [
                     *         "string"
                     *       ],
                     *       "locnNumbers": [
                     *         "string"
                     *       ],
                     *       "createdBy": 0,
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "serviceDaysEnabled": true,
                     *       "serviceDays": [
                     *         "string"
                     *       ],
                     *       "businessUnits": [
                     *         0
                     *       ],
                     *       "technicians": [
                     *         0
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.V2.ZoneResponse"];
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
    Zone_DeleteZone: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                zoneId: number;
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
    Zone_UpdateZone: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                zoneId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "name": "string",
                 *       "zips": [
                 *         "string"
                 *       ],
                 *       "cities": [
                 *         "string"
                 *       ],
                 *       "territoryNumbers": [
                 *         "string"
                 *       ],
                 *       "locnNumbers": [
                 *         "string"
                 *       ],
                 *       "serviceDaysEnabled": true,
                 *       "serviceDaysIds": [
                 *         0
                 *       ],
                 *       "businessUnits": [
                 *         0
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Dispatch.V2.CreateOrUpdateZoneRequestArgs"];
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
                     *       "active": true,
                     *       "name": "string",
                     *       "zips": [
                     *         "string"
                     *       ],
                     *       "cities": [
                     *         "string"
                     *       ],
                     *       "territoryNumbers": [
                     *         "string"
                     *       ],
                     *       "locnNumbers": [
                     *         "string"
                     *       ],
                     *       "serviceDaysEnabled": true,
                     *       "serviceDaysIds": [
                     *         0
                     *       ],
                     *       "businessUnits": [
                     *         0
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Dispatch.V2.CreateOrUpdateZoneResponse"];
                };
            };
            /** @description The request cannot be processed, check validation errors or request format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /** @example string */
                    "application/json": string;
                };
            };
        };
    };
}
