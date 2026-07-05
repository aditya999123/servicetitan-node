// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

export interface paths {
    "/tenant/{tenant}/export/jobs/splits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for job splits */
        get: operations["Export_JobSplits"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/payroll-adjustments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for payroll adjustments */
        get: operations["Export_PayrollAdjustments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/jobs/timesheets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for job timesheets */
        get: operations["Export_Timesheets"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/activity-codes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for activity codes */
        get: operations["Export_ActivityCodes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/timesheet-codes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for timesheet codes */
        get: operations["Export_TimesheetCodes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/gross-pay-items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for gross pay items */
        get: operations["Export_GrossPayItems"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/payroll-settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for payroll settings */
        get: operations["Export_PayrollSettings"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/gross-pay-items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of gross pay items */
        get: operations["GrossPayItems_GetList"];
        put?: never;
        /** Creates new gross pay item */
        post: operations["GrossPayItems_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/gross-pay-items/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update specified gross pay item */
        put: operations["GrossPayItems_Update"];
        post?: never;
        /** Delete specified gross pay item */
        delete: operations["GrossPayItems_Delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/jobs/{job}/splits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of job splits */
        get: operations["JobSplits_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/jobs/splits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of job splits by multiple jobs */
        get: operations["JobSplits_GetListByJobs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/locations/rates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of location hourly rates by multiple locations */
        get: operations["LocationLaborType_GetListByLocations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/activity-codes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of payroll activity codes */
        get: operations["ActivityCodes_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/activity-codes/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets payroll activity code specified by ID */
        get: operations["ActivityCodes_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/payroll-adjustments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of payroll adjustments */
        get: operations["PayrollAdjustments_GetList"];
        put?: never;
        /** Creates new payroll adjustment */
        post: operations["PayrollAdjustments_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/payroll-adjustments/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets payroll adjustment specified by ID */
        get: operations["PayrollAdjustments_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/payrolls": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of payrolls */
        get: operations["Payrolls_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/technicians/{technician}/payrolls": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of technician payrolls */
        get: operations["Payrolls_GetTechnicianPayrolls"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/employees/{employee}/payrolls": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of employee payrolls */
        get: operations["Payrolls_GetEmployeePayrolls"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/payroll-settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets the payroll settings list */
        get: operations["PayrollSettings_GetPayrollSettingsList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/employees/{employee}/payroll-settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets the employee payroll settings */
        get: operations["PayrollSettings_GetEmployeePayrollSettings"];
        /** Updates the employee payroll settings */
        put: operations["PayrollSettings_UpdateEmployeePayrollSettings"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/technicians/{technician}/payroll-settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets the technician payroll settings */
        get: operations["PayrollSettings_GetTechnicianPayrollSettings"];
        /** Updates the technician payroll settings */
        put: operations["PayrollSettings_UpdateTechnicianPayrollSettings"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/timesheet-codes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of timesheet codes */
        get: operations["TimesheetCodes_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/timesheet-codes/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets timesheet code specified by ID */
        get: operations["TimesheetCodes_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/jobs/{job}/timesheets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of job timesheets */
        get: operations["Timesheets_GetJobTimesheets"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/non-job-timesheets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of non job timesheets for employee */
        get: operations["Timesheets_GetNonJobTimesheets"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/jobs/timesheets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of job timesheets by multiple jobs */
        get: operations["Timesheets_GetJobTimesheetsByJobs"];
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
        /** @description Represents export API response. */
        "ExportResponse_Of_Payroll.V2.JobSplits.JobSplitExportResponse": {
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
            data: components["schemas"]["Payroll.V2.JobSplits.JobSplitExportResponse"][];
        };
        "Payroll.V2.JobSplits.JobSplitExportResponse": {
            /**
             * Format: int64
             * @description The job split ID
             */
            id: number;
            /**
             * Format: int64
             * @description Job ID
             */
            jobId: number;
            /**
             * Format: int64
             * @description Technician ID
             */
            technicianId: number;
            /**
             * Format: decimal
             * @description The split
             */
            split: number;
            /**
             * Format: date-time
             * @description The job split creation date/time (on UTC)
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Date/time (on UTC) when the job split was modified
             */
            modifiedOn: string;
            /** @description Whether job split is active */
            active: boolean;
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
        /** @description Represents export API response. */
        "ExportResponse_Of_Payroll.V2.PayrollAdjustments.PayrollAdjustmentExportResponse": {
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
            data: components["schemas"]["Payroll.V2.PayrollAdjustments.PayrollAdjustmentExportResponse"][];
        };
        "Payroll.V2.PayrollAdjustments.PayrollAdjustmentExportResponse": {
            /**
             * Format: int64
             * @description ID of the payroll adjustment
             */
            id: number;
            /** @description Employee type of the payroll adjustment */
            employeeType: components["schemas"]["Payroll.V2.EmployeeType"];
            /**
             * Format: int64
             * @description Employee ID of the payroll adjustment
             */
            employeeId: number;
            /**
             * Format: date-time
             * @description Posted date/time (UTC) of the payroll adjustment
             */
            postedOn: string;
            /**
             * Format: decimal
             * @description Amount of the payroll adjustment
             */
            amount: number;
            /** @description Memo of the payroll adjustment */
            memo?: string | null;
            /**
             * Format: int64
             * @description Activity code ID of the payroll adjustment
             */
            activityCodeId?: number | null;
            /**
             * Format: int64
             * @description ID of the payroll adjustment invoice
             */
            invoiceId?: number | null;
            /**
             * Format: decimal
             * @description Hours of the payroll adjustment
             */
            hours?: number | null;
            /**
             * Format: decimal
             * @description Rate of the payroll adjustment
             */
            rate?: number | null;
            /**
             * Format: decimal
             * @description Quantity of the payroll adjustment
             */
            quantity?: number | null;
            /** @description Type of the payroll adjustment */
            type: components["schemas"]["Payroll.V2.PayrollAdjustmentType"];
            /**
             * Format: date-time
             * @description Date/time (on UTC) when the payroll adjustment was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Date/time (on UTC) when the payroll adjustment was modified
             */
            modifiedOn: string;
            /** @description Whether payroll adjustment is active */
            active: boolean;
        };
        /** @enum {string} */
        "Payroll.V2.EmployeeType": "Technician" | "Employee";
        /** @enum {string} */
        "Payroll.V2.PayrollAdjustmentType": "Direct" | "CommissionBased" | "Labor" | "Advance" | "SoldAdvance" | "Scheduled" | "AddOn" | "MonthlyBonus" | "BonusWOT";
        /** @description Represents export API response. */
        "ExportResponse_Of_Payroll.V2.Timesheets.JobTimesheetExportResponse": {
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
            data: components["schemas"]["Payroll.V2.Timesheets.JobTimesheetExportResponse"][];
        };
        "Payroll.V2.Timesheets.JobTimesheetExportResponse": {
            /**
             * Format: int64
             * @description The timesheet ID
             */
            id: number;
            /**
             * Format: int64
             * @description The job ID
             */
            jobId: number;
            /**
             * Format: int64
             * @description The appointment ID
             */
            appointmentId: number;
            /**
             * Format: int64
             * @description The technician ID
             */
            technicianId: number;
            /**
             * Format: date-time
             * @description the dispatch date/time (in UTC)
             */
            dispatchedOn?: string | null;
            /**
             * Format: date-time
             * @description The arrive date/time (in UTC)
             */
            arrivedOn?: string | null;
            /**
             * Format: date-time
             * @description The cancel date/time (in UTC)
             */
            canceledOn?: string | null;
            /**
             * Format: date-time
             * @description The done date/time (in UTC)
             */
            doneOn?: string | null;
            /**
             * Format: date-time
             * @description The created date/time (in UTC)
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description The modified date/time (in UTC)
             */
            modifiedOn: string;
            /** @description Whether job timesheet is active */
            active: boolean;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Payroll.V2.PayrollActivityCodes.PayrollActivityCodeExportResponse": {
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
            data: components["schemas"]["Payroll.V2.PayrollActivityCodes.PayrollActivityCodeExportResponse"][];
        };
        "Payroll.V2.PayrollActivityCodes.PayrollActivityCodeExportResponse": {
            /**
             * Format: int64
             * @description ID of the payroll activity code
             */
            id: number;
            /** @description Name of the payroll activity code */
            name: string;
            /** @description Code of the payroll activity code */
            code: string;
            /** @description Earning category of the payroll activity code */
            earningCategory: components["schemas"]["Payroll.V2.PayrollEarningCategory"];
            /**
             * Format: date-time
             * @description Date/time (on UTC) when the payroll activity code was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Date/time (on UTC) when the payroll activity code was modified
             */
            modifiedOn: string;
            /** @description Indicates whether the earnings code is discretionary (excluded from regular rate of pay calculations) */
            isDiscretionary: boolean;
            /** @description Indicates whether the payroll activity code is active */
            active: boolean;
        };
        /** @enum {string} */
        "Payroll.V2.PayrollEarningCategory": "Timesheet" | "Commission" | "Reimbursement";
        /** @description Represents export API response. */
        "ExportResponse_Of_Payroll.V2.TimesheetCodes.TimesheetCodeExportResponse": {
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
            data: components["schemas"]["Payroll.V2.TimesheetCodes.TimesheetCodeExportResponse"][];
        };
        "Payroll.V2.TimesheetCodes.TimesheetCodeExportResponse": {
            /**
             * Format: int64
             * @description ID of the timesheet code
             */
            id: number;
            /** @description Code of the timesheet code */
            code: string;
            /** @description Description of the timesheet code */
            description?: string | null;
            /** @description Type of the timesheet code */
            type: components["schemas"]["Payroll.V2.TimesheetCodeType"];
            /** @description Application employee type of the timesheet code */
            applicableEmployeeType: components["schemas"]["Payroll.V2.TimesheetCodeEmployeeType"];
            /** @description Rate info of the timesheet code */
            rateInfo: components["schemas"]["Payroll.V2.TimesheetCodes.TimesheetCodeRateInfoResponse"];
            /**
             * Format: date-time
             * @description The date when the timesheet code was created (in UTC)
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description The last date when the timesheet code was modified (in UTC)
             */
            modifiedOn: string;
            /** @description Indicates whether the timesheet code is active or not */
            active: boolean;
        };
        /** @enum {string} */
        "Payroll.V2.TimesheetCodeType": "Unpaid" | "Paid" | "ClockInOut" | "PaidTimeOff";
        /** @enum {string} */
        "Payroll.V2.TimesheetCodeEmployeeType": "Technician" | "Employee" | "All";
        "Payroll.V2.TimesheetCodes.TimesheetCodeRateInfoResponse": {
            /** @description The hourly rate */
            hourlyRate: components["schemas"]["Payroll.V2.TimesheetHourlyRateType"];
            /**
             * Format: decimal
             * @description The custom hourly rate
             */
            customHourlyRate?: number | null;
            /**
             * Format: decimal
             * @description The rate multiplier
             */
            rateMultiplier: number;
        };
        /** @enum {string} */
        "Payroll.V2.TimesheetHourlyRateType": "EmployeeHourlyRate" | "CustomHourlyRate";
        /** @description Represents export API response. */
        "ExportResponse_Of_Payroll.V2.GrossPayItems.GrossPayItemExportResponse": {
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
            data: components["schemas"]["Payroll.V2.GrossPayItems.GrossPayItemExportResponse"][];
        };
        "Payroll.V2.GrossPayItems.GrossPayItemExportResponse": {
            /**
             * Format: int64
             * @description The gross pay item ID
             */
            id?: number | null;
            /**
             * Format: int64
             * @description The employee/technician ID
             */
            employeeId?: number | null;
            /** @description The employee type */
            employeeType?: components["schemas"]["Payroll.V2.EmployeeType"] | null;
            /** @description The business unit name */
            businessUnitName?: string | null;
            /**
             * Format: int64
             * @description The payroll ID
             */
            payrollId: number;
            /** @description Employee/Technician payroll ID */
            employeePayrollId?: string | null;
            /**
             * Format: date-time
             * @description The date (UTC) of the gross pay item
             */
            date: string;
            /** @description The activity */
            activity?: string | null;
            /**
             * Format: int64
             * @description The payroll activity code ID
             */
            activityCodeId?: number | null;
            /** @description The payroll activity code name */
            activityCode?: string | null;
            /**
             * Format: decimal
             * @description The amount
             */
            amount: number;
            /**
             * Format: decimal
             * @description The amount adjustment
             */
            amountAdjustment?: number | null;
            /** @description The payout business unit name */
            payoutBusinessUnitName?: string | null;
            /** @description Type of the gross pay item */
            grossPayItemType: components["schemas"]["Payroll.V2.GrossPayItemType"];
            /**
             * Format: date-time
             * @description The start time (UTC)
             */
            startedOn?: string | null;
            /**
             * Format: date-time
             * @description The end time (UTC)
             */
            endedOn?: string | null;
            /**
             * Format: decimal
             * @description The paid duration in hours
             */
            paidDurationHours?: number | null;
            /** @description Type of the paid time */
            paidTimeType?: components["schemas"]["Payroll.V2.PaidTimeType"] | null;
            /**
             * Format: int64
             * @description The source entity ID.
             *     When the GrossPayItemType is TimesheetTime, this is the Timesheet Activity ID.
             */
            sourceEntityId?: number | null;
            /**
             * Format: int64
             * @description The job ID
             */
            jobId: number;
            /** @description The job number */
            jobNumber?: string | null;
            /** @description Name of the job type */
            jobTypeName?: string | null;
            /** @description The project number */
            projectNumber?: string | null;
            /**
             * Format: int64
             * @description The project ID
             */
            projectId?: number | null;
            /**
             * Format: int64
             * @description The invoice ID
             */
            invoiceId?: number | null;
            /** @description The invoice number */
            invoiceNumber?: string | null;
            /**
             * Format: int64
             * @description The invoice item ID
             */
            invoiceItemId?: number | null;
            /**
             * Format: int64
             * @description The customer ID
             */
            customerId?: number | null;
            /** @description The customer name */
            customerName?: string | null;
            /**
             * Format: int64
             * @description The location ID
             */
            locationId?: number | null;
            /** @description The location name */
            locationName?: string | null;
            /** @description The location address */
            locationAddress?: string | null;
            /** @description The location zip */
            locationZip?: string | null;
            /** @description The zone name */
            zoneName?: string | null;
            /** @description The tax zone name */
            taxZoneName?: string | null;
            /**
             * Format: int64
             * @description ID of the labor type
             */
            laborTypeId?: number | null;
            /** @description Code of the labor type */
            laborTypeCode?: string | null;
            /**
             * Format: int64
             * @description The budget code ID
             */
            budgetCodeId?: number | null;
            /** @description Defines whether it's a prevailing wage job */
            isPrevailingWageJob?: boolean | null;
            /** @description The short message */
            memo?: string | null;
            /**
             * Format: date-time
             * @description Date/time (on UTC) when the gross pay item was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Date/time (on UTC) when the gross pay item was modified
             */
            modifiedOn: string;
            /** @description Whether gross pay item is active */
            active: boolean;
        };
        /** @enum {string} */
        "Payroll.V2.GrossPayItemType": "InvoiceRelatedBonus" | "TimesheetTime" | "CustomBonus" | "Salary" | "Reimbursement";
        /** @enum {string} */
        "Payroll.V2.PaidTimeType": "Regular" | "Overtime" | "DoubleOvertime" | "PaidTimeOff";
        /** @description Represents export API response. */
        "ExportResponse_Of_Payroll.V2.PayrollSettings.PayrollSettingsExportResponse": {
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
            data: components["schemas"]["Payroll.V2.PayrollSettings.PayrollSettingsExportResponse"][];
        };
        "Payroll.V2.PayrollSettings.PayrollSettingsExportResponse": {
            /**
             * Format: int64
             * @description The employee ID
             */
            employeeId: number;
            /** @description The type of employee */
            employeeType: components["schemas"]["Payroll.V2.EmployeeType"];
            /** @description The external payroll ID */
            externalPayrollId?: string | null;
            /**
             * Format: decimal
             * @description The hourly rate
             */
            hourlyRate: number;
            /**
             * Format: int64
             * @description The ID of the manager
             */
            managerId?: number | null;
            /**
             * Format: int64
             * @description The ID of the payroll business unit (employee only)
             */
            payrollBusinessUnitId?: number | null;
            /** @description Indicates if the employee should be included in payroll processing */
            isIncludedInPayroll: boolean;
            /**
             * Format: date-time
             * @description The hire date
             */
            hireDate?: string | null;
            /**
             * Format: date-time
             * @description The date the record was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description The date the record was last modified
             */
            modifiedOn: string;
            /** @description The active status of the record */
            active: boolean;
            /** @description Custom payroll fields and their values (technician only) */
            customFields?: components["schemas"]["Payroll.V2.PayrollSettings.PayrollCustomFieldResponse"][] | null;
        };
        "Payroll.V2.PayrollSettings.PayrollCustomFieldResponse": {
            /**
             * Format: int64
             * @description The custom field type ID (definition ID)
             */
            typeId: number;
            /** @description The custom field name (human-readable label) */
            name?: string | null;
            /** @description The custom field value */
            value?: string | null;
        };
        /** @description Default response when creating object with a new ID, or updating object by specified ID. */
        ModificationResponse: {
            /**
             * Format: int64
             * @description The ID of created/updated object
             */
            id: number;
        };
        "Payroll.V2.GrossPayItems.GrossPayItemCreateRequest": {
            /**
             * Format: int64
             * @description The payroll ID
             */
            payrollId: number;
            /**
             * Format: decimal
             * @description Amount of the gross pay item
             */
            amount: number;
            /**
             * Format: int64
             * @description The ID of the activity code
             */
            activityCodeId: number;
            /**
             * Format: date-time
             * @description Date of the gross pay item
             */
            date: string;
            /**
             * Format: int64
             * @description The invoice ID
             */
            invoiceId?: number | null;
            /**
             * Format: int64
             * @description The budget code ID
             */
            budgetCodeId?: number | null;
            /** @description The memo if gross pay item */
            memo?: string | null;
        };
        "Payroll.V2.GrossPayItems.GrossPayItemUpdateRequest": {
            /**
             * Format: int64
             * @description The payroll ID
             */
            payrollId: number;
            /**
             * Format: decimal
             * @description Amount of the gross pay item
             */
            amount: number;
            /**
             * Format: int64
             * @description The ID of the activity code
             */
            activityCodeId: number;
            /**
             * Format: date-time
             * @description Date of the gross pay item
             */
            date: string;
            /**
             * Format: int64
             * @description The invoice ID
             */
            invoiceId?: number | null;
            /**
             * Format: int64
             * @description The budget code ID
             */
            budgetCodeId?: number | null;
            /** @description The memo if gross pay item */
            memo?: string | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Payroll.V2.GrossPayItems.GrossPayItemResponse": {
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
            data: components["schemas"]["Payroll.V2.GrossPayItems.GrossPayItemResponse"][];
        };
        "Payroll.V2.GrossPayItems.GrossPayItemResponse": {
            /**
             * Format: int64
             * @description The gross pay item ID
             */
            id?: number | null;
            /**
             * Format: int64
             * @description The employee/technician ID
             */
            employeeId?: number | null;
            /** @description The employee type */
            employeeType?: components["schemas"]["Payroll.V2.EmployeeType"] | null;
            /** @description The business unit name */
            businessUnitName?: string | null;
            /**
             * Format: int64
             * @description The payroll ID
             */
            payrollId: number;
            /** @description Employee/Technician payroll ID */
            employeePayrollId?: string | null;
            /**
             * Format: date-time
             * @description The date (UTC) of the gross pay item
             */
            date: string;
            /** @description The activity */
            activity?: string | null;
            /**
             * Format: int64
             * @description The payroll activity code ID
             */
            activityCodeId?: number | null;
            /** @description The payroll activity code name */
            activityCode?: string | null;
            /**
             * Format: decimal
             * @description The amount
             */
            amount: number;
            /**
             * Format: decimal
             * @description The amount adjustment
             */
            amountAdjustment?: number | null;
            /** @description The payout business unit name */
            payoutBusinessUnitName?: string | null;
            /** @description Type of the gross pay item */
            grossPayItemType: components["schemas"]["Payroll.V2.GrossPayItemType"];
            /**
             * Format: date-time
             * @description The start time (UTC)
             */
            startedOn?: string | null;
            /**
             * Format: date-time
             * @description The end time (UTC)
             */
            endedOn?: string | null;
            /**
             * Format: decimal
             * @description The paid duration in hours
             */
            paidDurationHours?: number | null;
            /** @description Type of the paid time */
            paidTimeType?: components["schemas"]["Payroll.V2.PaidTimeType"] | null;
            /**
             * Format: int64
             * @description The source entity ID.
             *     When the GrossPayItemType is TimesheetTime, this is the Timesheet Activity ID.
             */
            sourceEntityId?: number | null;
            /**
             * Format: int64
             * @description The job ID
             */
            jobId: number;
            /** @description The job number */
            jobNumber?: string | null;
            /** @description Name of the job type */
            jobTypeName?: string | null;
            /** @description The project number */
            projectNumber?: string | null;
            /**
             * Format: int64
             * @description The project ID
             */
            projectId?: number | null;
            /**
             * Format: int64
             * @description The invoice ID
             */
            invoiceId?: number | null;
            /** @description The invoice number */
            invoiceNumber?: string | null;
            /**
             * Format: int64
             * @description The invoice item ID
             */
            invoiceItemId?: number | null;
            /**
             * Format: int64
             * @description The customer ID
             */
            customerId?: number | null;
            /** @description The customer name */
            customerName?: string | null;
            /**
             * Format: int64
             * @description The location ID
             */
            locationId?: number | null;
            /** @description The location name */
            locationName?: string | null;
            /** @description The location address */
            locationAddress?: string | null;
            /** @description The location zip */
            locationZip?: string | null;
            /** @description The zone name */
            zoneName?: string | null;
            /** @description The tax zone name */
            taxZoneName?: string | null;
            /**
             * Format: int64
             * @description ID of the labor type
             */
            laborTypeId?: number | null;
            /** @description Code of the labor type */
            laborTypeCode?: string | null;
            /**
             * Format: int64
             * @description The budget code ID
             */
            budgetCodeId?: number | null;
            /** @description Defines whether it's a prevailing wage job */
            isPrevailingWageJob?: boolean | null;
            /** @description The short message */
            memo?: string | null;
            /**
             * Format: date-time
             * @description Date/time (on UTC) when the gross pay item was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Date/time (on UTC) when the gross pay item was modified
             */
            modifiedOn: string;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Payroll.V2.JobSplits.JobSplitResponse": {
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
            data: components["schemas"]["Payroll.V2.JobSplits.JobSplitResponse"][];
        };
        "Payroll.V2.JobSplits.JobSplitResponse": {
            /**
             * Format: int64
             * @description The job split ID
             */
            id: number;
            /**
             * Format: int64
             * @description Job ID
             */
            jobId: number;
            /**
             * Format: int64
             * @description Technician ID
             */
            technicianId: number;
            /**
             * Format: decimal
             * @description The split
             */
            split: number;
            /**
             * Format: date-time
             * @description The job split creation date/time (on UTC)
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Date/time (on UTC) when the job split was modified
             */
            modifiedOn: string;
        };
        /**
         * @description Represents possible HTTP query argument values, when applying filters based on active status.
         * @enum {string}
         */
        ActiveRequestArg: "True" | "Any" | "False";
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Payroll.V2.LocationLaborTypes.LocationLaborTypeResponse": {
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
            data: components["schemas"]["Payroll.V2.LocationLaborTypes.LocationLaborTypeResponse"][];
        };
        "Payroll.V2.LocationLaborTypes.LocationLaborTypeResponse": {
            /**
             * Format: int64
             * @description Location ID
             */
            locationId: number;
            /**
             * Format: decimal
             * @description The hourly rate of the location
             */
            hourlyRate: number;
            /** @description The labor type name of the location */
            laborTypeName: string;
            /** @description The labor type code of the location */
            laborTypeCode: string;
            /**
             * Format: date-time
             * @description The location rate creation date/time (on UTC)
             */
            createdOn: string;
            /** @description Whether the location rate is active */
            active: boolean;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Payroll.V2.PayrollActivityCodes.PayrollActivityCodeResponse": {
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
            data: components["schemas"]["Payroll.V2.PayrollActivityCodes.PayrollActivityCodeResponse"][];
        };
        "Payroll.V2.PayrollActivityCodes.PayrollActivityCodeResponse": {
            /**
             * Format: int64
             * @description ID of the payroll activity code
             */
            id: number;
            /** @description Name of the payroll activity code */
            name: string;
            /** @description Code of the payroll activity code */
            code: string;
            /** @description Earning category of the payroll activity code */
            earningCategory: components["schemas"]["Payroll.V2.PayrollEarningCategory"];
            /**
             * Format: date-time
             * @description Date/time (on UTC) when the payroll activity code was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Date/time (on UTC) when the payroll activity code was modified
             */
            modifiedOn: string;
            /** @description Indicates whether the earnings code is discretionary (excluded from regular rate of pay calculations) */
            isDiscretionary: boolean;
            /** @description Indicates whether the payroll activity code is active */
            active: boolean;
        };
        "Payroll.V2.PayrollAdjustments.PayrollAdjustmentCreateRequest": {
            /** @description The employee type */
            employeeType: components["schemas"]["Payroll.V2.EmployeeType"];
            /**
             * Format: int64
             * @description ID of the employee
             */
            employeeId: number;
            /**
             * Format: date-time
             * @description The posted on date/time (in UTC)
             */
            postedOn: string;
            /**
             * Format: decimal
             * @description The payroll adjustment amount
             */
            amount?: number | null;
            /** @description Memo of the payroll adjustment */
            memo?: string | null;
            /**
             * Format: int64
             * @description ID of the payroll adjustment activity code
             */
            activityCodeId?: number | null;
            /**
             * Format: int64
             * @description ID of the payroll adjustment invoice
             */
            invoiceId?: number | null;
            /**
             * Format: decimal
             * @description Hours of the payroll adjustment
             */
            hours?: number | null;
            /**
             * Format: decimal
             * @description Rate of the payroll adjustment
             */
            rate?: number | null;
            /**
             * Format: decimal
             * @description Quantity of the payroll adjustment
             */
            quantity?: number | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Payroll.V2.PayrollAdjustments.PayrollAdjustmentResponse": {
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
            data: components["schemas"]["Payroll.V2.PayrollAdjustments.PayrollAdjustmentResponse"][];
        };
        "Payroll.V2.PayrollAdjustments.PayrollAdjustmentResponse": {
            /**
             * Format: int64
             * @description ID of the payroll adjustment
             */
            id: number;
            /** @description Employee type of the payroll adjustment */
            employeeType: components["schemas"]["Payroll.V2.EmployeeType"];
            /**
             * Format: int64
             * @description Employee ID of the payroll adjustment
             */
            employeeId: number;
            /**
             * Format: date-time
             * @description Posted date/time (UTC) of the payroll adjustment
             */
            postedOn: string;
            /**
             * Format: decimal
             * @description Amount of the payroll adjustment
             */
            amount: number;
            /** @description Memo of the payroll adjustment */
            memo?: string | null;
            /**
             * Format: int64
             * @description Activity code ID of the payroll adjustment
             */
            activityCodeId?: number | null;
            /**
             * Format: int64
             * @description ID of the payroll adjustment invoice
             */
            invoiceId?: number | null;
            /**
             * Format: decimal
             * @description Hours of the payroll adjustment
             */
            hours?: number | null;
            /**
             * Format: decimal
             * @description Rate of the payroll adjustment
             */
            rate?: number | null;
            /**
             * Format: decimal
             * @description Quantity of the payroll adjustment
             */
            quantity?: number | null;
            /** @description Type of the payroll adjustment */
            type: components["schemas"]["Payroll.V2.PayrollAdjustmentType"];
            /**
             * Format: date-time
             * @description Date/time (on UTC) when the payroll adjustment was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Date/time (on UTC) when the payroll adjustment was modified
             */
            modifiedOn: string;
            /** @description Whether payroll adjustment is active */
            active: boolean;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Payroll.V2.Payrolls.PayrollResponse": {
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
            data: components["schemas"]["Payroll.V2.Payrolls.PayrollResponse"][];
        };
        "Payroll.V2.Payrolls.PayrollResponse": {
            /**
             * Format: int64
             * @description ID of the payroll
             */
            id: number;
            /**
             * Format: date-time
             * @description Started on date (UTC) of the payroll
             */
            startedOn: string;
            /**
             * Format: date-time
             * @description Ended on date (UTC) of the payroll
             */
            endedOn: string;
            /**
             * Format: int64
             * @description Employee ID of the payroll
             */
            employeeId: number;
            /** @description Employee type of the payroll */
            employeeType: components["schemas"]["Payroll.V2.EmployeeType"];
            /** @description Status of the payroll */
            status: components["schemas"]["Payroll.V2.PayrollStatus"];
            /**
             * Format: decimal
             * @description Burden rate of employee
             */
            burdenRate?: number | null;
            /**
             * Format: date-time
             * @description Date/time (on UTC) when the payroll was approved
             */
            managerApprovedOn?: string | null;
            /**
             * Format: date-time
             * @description Date/time (on UTC) when the payroll adjustment was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Date/time (on UTC) when the payroll adjustment was modified
             */
            modifiedOn: string;
            /** @description Whether payroll adjustment is active */
            active: boolean;
        };
        /** @enum {string} */
        "Payroll.V2.PayrollStatus": "Pending" | "Expired" | "Approved" | "Paid" | "Locked";
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Payroll.V2.PayrollSettings.PayrollSettingsListResponse": {
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
            data: components["schemas"]["Payroll.V2.PayrollSettings.PayrollSettingsListResponse"][];
        };
        "Payroll.V2.PayrollSettings.PayrollSettingsListResponse": {
            /**
             * Format: int64
             * @description The employee ID
             */
            employeeId: number;
            /** @description The type of employee */
            employeeType: components["schemas"]["Payroll.V2.EmployeeType"];
            /** @description The external payroll ID */
            externalPayrollId?: string | null;
            /**
             * Format: decimal
             * @description The hourly rate
             */
            hourlyRate: number;
            /**
             * Format: int64
             * @description The ID of the manager
             */
            managerId?: number | null;
            /**
             * Format: int64
             * @description The ID of the payroll business unit (employee only)
             */
            payrollBusinessUnitId?: number | null;
            /** @description Indicates if the employee should be included in payroll processing */
            isIncludedInPayroll: boolean;
            /**
             * Format: date-time
             * @description The hire date
             */
            hireDate?: string | null;
            /**
             * Format: date-time
             * @description The date the record was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description The date the record was last modified
             */
            modifiedOn: string;
            /** @description The active status of the record */
            active: boolean;
            /** @description Custom payroll fields and their values (technician only) */
            customFields?: components["schemas"]["Payroll.V2.PayrollSettings.PayrollCustomFieldResponse"][] | null;
        };
        "Payroll.V2.PayrollSettings.PayrollSettingsResponse": {
            /**
             * Format: int64
             * @description The employee ID
             */
            employeeId: number;
            /** @description The type of employee */
            employeeType: components["schemas"]["Payroll.V2.EmployeeType"];
            /** @description The external payroll ID */
            externalPayrollId?: string | null;
            /**
             * Format: decimal
             * @description The hourly rate
             */
            hourlyRate: number;
            /**
             * Format: int64
             * @description The ID of the manager
             */
            managerId?: number | null;
            /**
             * Format: int64
             * @description The ID of the payroll business unit (employee only)
             */
            payrollBusinessUnitId?: number | null;
            /** @description Indicates if the employee should be included in payroll processing */
            isIncludedInPayroll: boolean;
            /**
             * Format: date-time
             * @description The hire date
             */
            hireDate?: string | null;
            /**
             * Format: date-time
             * @description The date the record was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description The date the record was last modified
             */
            modifiedOn: string;
            /** @description The active status of the record */
            active: boolean;
            /** @description Custom payroll fields and their values (technician only) */
            customFields?: components["schemas"]["Payroll.V2.PayrollSettings.PayrollCustomFieldResponse"][] | null;
        };
        "Payroll.V2.PayrollSettings.PayrollSettingsUpdateResponse": {
            /**
             * Format: int64
             * @description The employee ID
             */
            employeeId: number;
        };
        "Payroll.V2.PayrollSettings.PayrollSettingsUpdateRequest": {
            /** @description The external payroll ID */
            externalPayrollId?: string | null;
            /**
             * Format: decimal
             * @description The hourly rate
             */
            hourlyRate: number;
            /**
             * Format: int64
             * @description The ID of the manager
             */
            managerId?: number | null;
            /**
             * Format: int64
             * @description The ID of the payroll business unit (employee only)
             */
            payrollBusinessUnitId?: number | null;
            /**
             * Format: date-time
             * @description The hire date
             */
            hireDate?: string | null;
            /** @description Indicates if the employee should be included in payroll processing */
            isIncludedInPayroll?: boolean | null;
            /** @description Custom payroll fields to update (technician only) */
            customFields?: components["schemas"]["Payroll.V2.PayrollSettings.PayrollCustomFieldUpdateRequest"][] | null;
        };
        "Payroll.V2.PayrollSettings.PayrollCustomFieldUpdateRequest": {
            /**
             * Format: int64
             * @description The custom field type ID (definition ID)
             */
            typeId: number;
            /** @description The custom field value */
            value?: string | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Payroll.V2.TimesheetCodes.TimesheetCodeResponse": {
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
            data: components["schemas"]["Payroll.V2.TimesheetCodes.TimesheetCodeResponse"][];
        };
        "Payroll.V2.TimesheetCodes.TimesheetCodeResponse": {
            /**
             * Format: int64
             * @description ID of the timesheet code
             */
            id: number;
            /** @description Code of the timesheet code */
            code: string;
            /** @description Description of the timesheet code */
            description?: string | null;
            /** @description Type of the timesheet code */
            type: components["schemas"]["Payroll.V2.TimesheetCodeType"];
            /** @description Application employee type of the timesheet code */
            applicableEmployeeType: components["schemas"]["Payroll.V2.TimesheetCodeEmployeeType"];
            /** @description Rate info of the timesheet code */
            rateInfo: components["schemas"]["Payroll.V2.TimesheetCodes.TimesheetCodeRateInfoResponse"];
            /**
             * Format: date-time
             * @description The date when the timesheet code was created (in UTC)
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description The last date when the timesheet code was modified (in UTC)
             */
            modifiedOn: string;
            /** @description Indicates whether the timesheet code is active or not */
            active: boolean;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Payroll.V2.Timesheets.JobTimesheetResponse": {
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
            data: components["schemas"]["Payroll.V2.Timesheets.JobTimesheetResponse"][];
        };
        "Payroll.V2.Timesheets.JobTimesheetResponse": {
            /**
             * Format: int64
             * @description The timesheet ID
             */
            id: number;
            /**
             * Format: int64
             * @description The job ID
             */
            jobId: number;
            /**
             * Format: int64
             * @description The appointment ID
             */
            appointmentId: number;
            /**
             * Format: int64
             * @description The technician ID
             */
            technicianId: number;
            /**
             * Format: date-time
             * @description the dispatch date/time (in UTC)
             */
            dispatchedOn?: string | null;
            /**
             * Format: date-time
             * @description The arrive date/time (in UTC)
             */
            arrivedOn?: string | null;
            /**
             * Format: date-time
             * @description The cancel date/time (in UTC)
             */
            canceledOn?: string | null;
            /**
             * Format: date-time
             * @description The done date/time (in UTC)
             */
            doneOn?: string | null;
            /**
             * Format: date-time
             * @description The created date/time (in UTC)
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description The modified date/time (in UTC)
             */
            modifiedOn: string;
            /** @description Whether job timesheet is active */
            active: boolean;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Payroll.V2.Timesheets.NonJobTimesheetResponse": {
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
            data: components["schemas"]["Payroll.V2.Timesheets.NonJobTimesheetResponse"][];
        };
        "Payroll.V2.Timesheets.NonJobTimesheetResponse": {
            /**
             * Format: int64
             * @description The timesheet ID
             */
            id: number;
            /**
             * Format: int64
             * @description The employee/technician ID
             */
            employeeId: number;
            /** @description The type of the employee */
            employeeType: components["schemas"]["Payroll.V2.EmployeeType"];
            /**
             * Format: int64
             * @description The timesheet code ID
             */
            timesheetCodeId: number;
            /**
             * Format: date-time
             * @description The start time of the timesheet (in UTC)
             */
            startedOn: string;
            /**
             * Format: date-time
             * @description The end time of the timesheet (in UTC)
             */
            endedOn?: string | null;
            /**
             * Format: date-time
             * @description The created date/time (in UTC)
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description The modified date/time (in UTC)
             */
            modifiedOn: string;
            /** @description Indicates whether the timesheet is active or not */
            active: boolean;
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
    Export_JobSplits: {
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
                     *           "technicianId": 0,
                     *           "split": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Payroll.V2.JobSplits.JobSplitExportResponse"];
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
    Export_PayrollAdjustments: {
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
                     *           "employeeType": {},
                     *           "employeeId": 0,
                     *           "postedOn": "string",
                     *           "amount": 0,
                     *           "memo": "string",
                     *           "activityCodeId": 0,
                     *           "invoiceId": 0,
                     *           "hours": 0,
                     *           "rate": 0,
                     *           "quantity": 0,
                     *           "type": {},
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Payroll.V2.PayrollAdjustments.PayrollAdjustmentExportResponse"];
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
    Export_Timesheets: {
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
                     *           "appointmentId": 0,
                     *           "technicianId": 0,
                     *           "dispatchedOn": "string",
                     *           "arrivedOn": "string",
                     *           "canceledOn": "string",
                     *           "doneOn": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Payroll.V2.Timesheets.JobTimesheetExportResponse"];
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
    Export_ActivityCodes: {
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
                     *           "code": "string",
                     *           "earningCategory": {},
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "isDiscretionary": true,
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Payroll.V2.PayrollActivityCodes.PayrollActivityCodeExportResponse"];
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
    Export_TimesheetCodes: {
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
                     *           "description": "string",
                     *           "type": {},
                     *           "applicableEmployeeType": {},
                     *           "rateInfo": {
                     *             "hourlyRate": {},
                     *             "customHourlyRate": 0,
                     *             "rateMultiplier": 0
                     *           },
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Payroll.V2.TimesheetCodes.TimesheetCodeExportResponse"];
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
    Export_GrossPayItems: {
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
                     *           "businessUnitName": "string",
                     *           "payrollId": 0,
                     *           "employeePayrollId": "string",
                     *           "date": "string",
                     *           "activity": "string",
                     *           "activityCodeId": 0,
                     *           "activityCode": "string",
                     *           "amount": 0,
                     *           "amountAdjustment": 0,
                     *           "payoutBusinessUnitName": "string",
                     *           "grossPayItemType": {},
                     *           "startedOn": "string",
                     *           "endedOn": "string",
                     *           "paidDurationHours": 0,
                     *           "paidTimeType": {},
                     *           "sourceEntityId": 0,
                     *           "jobId": 0,
                     *           "jobNumber": "string",
                     *           "jobTypeName": "string",
                     *           "projectNumber": "string",
                     *           "projectId": 0,
                     *           "invoiceId": 0,
                     *           "invoiceNumber": "string",
                     *           "invoiceItemId": 0,
                     *           "customerId": 0,
                     *           "customerName": "string",
                     *           "locationId": 0,
                     *           "locationName": "string",
                     *           "locationAddress": "string",
                     *           "locationZip": "string",
                     *           "zoneName": "string",
                     *           "taxZoneName": "string",
                     *           "laborTypeId": 0,
                     *           "laborTypeCode": "string",
                     *           "budgetCodeId": 0,
                     *           "isPrevailingWageJob": true,
                     *           "memo": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Payroll.V2.GrossPayItems.GrossPayItemExportResponse"];
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
    Export_PayrollSettings: {
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
                     *           "employeeId": 0,
                     *           "employeeType": {},
                     *           "externalPayrollId": "string",
                     *           "hourlyRate": 0,
                     *           "managerId": 0,
                     *           "payrollBusinessUnitId": 0,
                     *           "isIncludedInPayroll": true,
                     *           "hireDate": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "active": true,
                     *           "customFields": [
                     *             {
                     *               "typeId": 0,
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Payroll.V2.PayrollSettings.PayrollSettingsExportResponse"];
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
    GrossPayItems_GetList: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /**
                 * @description The type of employee\
                 *     Values: [Technician, Employee]
                 */
                employeeType?: string & components["schemas"]["Payroll.V2.EmployeeType"];
                /** @description The Employee ID */
                employeeId?: number;
                /** @description The payroll ID */
                payrollIds?: string;
                /** @description Return items having date after certain date/time (in UTC) */
                dateOnOrAfter?: string;
                /** @description Return items having date before certain date/time (in UTC) */
                dateOnOrBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Return items modified on or before certain date/time (in UTC) */
                modifiedOnOrBefore?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
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
                     *           "employeeType": {},
                     *           "businessUnitName": "string",
                     *           "payrollId": 0,
                     *           "employeePayrollId": "string",
                     *           "date": "string",
                     *           "activity": "string",
                     *           "activityCodeId": 0,
                     *           "activityCode": "string",
                     *           "amount": 0,
                     *           "amountAdjustment": 0,
                     *           "payoutBusinessUnitName": "string",
                     *           "grossPayItemType": {},
                     *           "startedOn": "string",
                     *           "endedOn": "string",
                     *           "paidDurationHours": 0,
                     *           "paidTimeType": {},
                     *           "sourceEntityId": 0,
                     *           "jobId": 0,
                     *           "jobNumber": "string",
                     *           "jobTypeName": "string",
                     *           "projectNumber": "string",
                     *           "projectId": 0,
                     *           "invoiceId": 0,
                     *           "invoiceNumber": "string",
                     *           "invoiceItemId": 0,
                     *           "customerId": 0,
                     *           "customerName": "string",
                     *           "locationId": 0,
                     *           "locationName": "string",
                     *           "locationAddress": "string",
                     *           "locationZip": "string",
                     *           "zoneName": "string",
                     *           "taxZoneName": "string",
                     *           "laborTypeId": 0,
                     *           "laborTypeCode": "string",
                     *           "budgetCodeId": 0,
                     *           "isPrevailingWageJob": true,
                     *           "memo": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Payroll.V2.GrossPayItems.GrossPayItemResponse"];
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
    GrossPayItems_Create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The gross pay item model to create */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "payrollId": 0,
                 *       "amount": 0,
                 *       "activityCodeId": 0,
                 *       "date": "string",
                 *       "invoiceId": 0,
                 *       "budgetCodeId": 0,
                 *       "memo": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Payroll.V2.GrossPayItems.GrossPayItemCreateRequest"];
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
    GrossPayItems_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The gross pay item ID */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The gross pay item model to update */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "payrollId": 0,
                 *       "amount": 0,
                 *       "activityCodeId": 0,
                 *       "date": "string",
                 *       "invoiceId": 0,
                 *       "budgetCodeId": 0,
                 *       "memo": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Payroll.V2.GrossPayItems.GrossPayItemUpdateRequest"];
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
    GrossPayItems_Delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The gross pay item ID */
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
    JobSplits_GetList: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /** @description Returns job split created on or after a certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return job splits created before a certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Returns job split modified on or after a certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Returns job split modified before a certain date/time (in UTC) */
                modifiedBefore?: string;
                /**
                 * @description Returns job split by active status\
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
                job: number;
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
                     *           "technicianId": 0,
                     *           "split": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Payroll.V2.JobSplits.JobSplitResponse"];
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
            /** @description Unknown job ID was specified */
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
    JobSplits_GetListByJobs: {
        parameters: {
            query?: {
                jobIds?: string;
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /** @description Returns job split created on or after a certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Return job splits created before a certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Returns job split modified on or after a certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Returns job split modified before a certain date/time (in UTC) */
                modifiedBefore?: string;
                /**
                 * @description Returns job split by active status\
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
                     *           "jobId": 0,
                     *           "technicianId": 0,
                     *           "split": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Payroll.V2.JobSplits.JobSplitResponse"];
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
            /** @description Unknown job ID was specified */
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
    LocationLaborType_GetListByLocations: {
        parameters: {
            query?: {
                /** @description Returns location rates for the specified location IDs */
                locationIds?: string;
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
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
                /**
                 * @description Applies sorting by the specified field:\
                 *     "?sort=+FieldName" for ascending order,\
                 *     "?sort=-FieldName" for descending order.\
                 *     \
                 *     Available fields are: Location (sorts by locations Id), CreatedOn.
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
                     *           "locationId": 0,
                     *           "hourlyRate": 0,
                     *           "laborTypeName": "string",
                     *           "laborTypeCode": "string",
                     *           "createdOn": "string",
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Payroll.V2.LocationLaborTypes.LocationLaborTypeResponse"];
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
            /** @description Unknown location ID was specified */
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
    ActivityCodes_GetList: {
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
                     *           "name": "string",
                     *           "code": "string",
                     *           "earningCategory": {},
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "isDiscretionary": true,
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Payroll.V2.PayrollActivityCodes.PayrollActivityCodeResponse"];
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
    ActivityCodes_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the payroll activity code */
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
                     *       "code": "string",
                     *       "earningCategory": {},
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "isDiscretionary": true,
                     *       "active": true
                     *     }
                     */
                    "application/json": components["schemas"]["Payroll.V2.PayrollActivityCodes.PayrollActivityCodeResponse"];
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
            /** @description Payroll activity code was not found */
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
    PayrollAdjustments_GetList: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /** @description The comma separated list of employee IDs */
                employeeIds?: string;
                /** @description Return payroll adjustments posted on or after certain date/time (in UTC) */
                postedOnOrAfter?: string;
                /** @description Return payroll adjustments posted on or before certain date/time (in UTC) */
                postedOnOrBefore?: string;
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
                     *           "employeeType": {},
                     *           "employeeId": 0,
                     *           "postedOn": "string",
                     *           "amount": 0,
                     *           "memo": "string",
                     *           "activityCodeId": 0,
                     *           "invoiceId": 0,
                     *           "hours": 0,
                     *           "rate": 0,
                     *           "quantity": 0,
                     *           "type": {},
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Payroll.V2.PayrollAdjustments.PayrollAdjustmentResponse"];
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
    PayrollAdjustments_Create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The payroll adjustment model to create */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "employeeType": {},
                 *       "employeeId": 0,
                 *       "postedOn": "string",
                 *       "amount": 0,
                 *       "memo": "string",
                 *       "activityCodeId": 0,
                 *       "invoiceId": 0,
                 *       "hours": 0,
                 *       "rate": 0,
                 *       "quantity": 0
                 *     }
                 */
                "application/json": components["schemas"]["Payroll.V2.PayrollAdjustments.PayrollAdjustmentCreateRequest"];
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
    PayrollAdjustments_Get: {
        parameters: {
            query?: {
                /**
                 * @description The employee type\
                 *     Values: [Technician, Employee]
                 */
                employeeType?: components["schemas"]["Payroll.V2.EmployeeType"];
            };
            header?: never;
            path: {
                /** @description The ID of payroll adjustment */
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
                     *       "employeeType": {},
                     *       "employeeId": 0,
                     *       "postedOn": "string",
                     *       "amount": 0,
                     *       "memo": "string",
                     *       "activityCodeId": 0,
                     *       "invoiceId": 0,
                     *       "hours": 0,
                     *       "rate": 0,
                     *       "quantity": 0,
                     *       "type": {},
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "active": true
                     *     }
                     */
                    "application/json": components["schemas"]["Payroll.V2.PayrollAdjustments.PayrollAdjustmentResponse"];
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
            /** @description Payroll adjustment was not found */
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
    Payrolls_GetList: {
        parameters: {
            query?: {
                /**
                 * @description The type of employee\
                 *     Values: [Technician, Employee]
                 */
                employeeType?: string & components["schemas"]["Payroll.V2.EmployeeType"];
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /** @description Return items having start date after certain date/time (in UTC) */
                startedOnOrAfter?: string;
                /** @description Return items having end date before certain date/time (in UTC) */
                endedOnOrBefore?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Return items approved on or after certain date/time (in UTC) */
                approvedOnOrAfter?: string;
                /**
                 * @description Return items of the specified payroll status\
                 *     Values: [Pending, Expired, Approved, Paid, Locked]
                 */
                status?: string & components["schemas"]["Payroll.V2.PayrollStatus"];
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
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
                     *           "startedOn": "string",
                     *           "endedOn": "string",
                     *           "employeeId": 0,
                     *           "employeeType": {},
                     *           "status": {},
                     *           "burdenRate": 0,
                     *           "managerApprovedOn": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Payroll.V2.Payrolls.PayrollResponse"];
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
    Payrolls_GetTechnicianPayrolls: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /** @description Return items having start date after certain date/time (in UTC) */
                startedOnOrAfter?: string;
                /** @description Return items having end date before certain date/time (in UTC) */
                endedOnOrBefore?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Return items approved on or after certain date/time (in UTC) */
                approvedOnOrAfter?: string;
                /**
                 * @description Return items of the specified payroll status\
                 *     Values: [Pending, Expired, Approved, Paid, Locked]
                 */
                status?: string & components["schemas"]["Payroll.V2.PayrollStatus"];
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Applies sorting by specified fields */
                sort?: string;
            };
            header?: never;
            path: {
                /** @description The technician ID */
                technician: number;
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
                     *           "startedOn": "string",
                     *           "endedOn": "string",
                     *           "employeeId": 0,
                     *           "employeeType": {},
                     *           "status": {},
                     *           "burdenRate": 0,
                     *           "managerApprovedOn": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Payroll.V2.Payrolls.PayrollResponse"];
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
    Payrolls_GetEmployeePayrolls: {
        parameters: {
            query?: {
                /** @description The logical number of page to return, starting from 1 */
                page?: number;
                /** @description How many records to return (50 by default) */
                pageSize?: number;
                /** @description Whether total count should be returned */
                includeTotal?: boolean;
                /** @description Return items having start date after certain date/time (in UTC) */
                startedOnOrAfter?: string;
                /** @description Return items having end date before certain date/time (in UTC) */
                endedOnOrBefore?: string;
                /** @description Return items modified before certain date/time (in UTC) */
                modifiedBefore?: string;
                /** @description Return items modified on or after certain date/time (in UTC) */
                modifiedOnOrAfter?: string;
                /** @description Return items approved on or after certain date/time (in UTC) */
                approvedOnOrAfter?: string;
                /**
                 * @description Return items of the specified payroll status\
                 *     Values: [Pending, Expired, Approved, Paid, Locked]
                 */
                status?: string & components["schemas"]["Payroll.V2.PayrollStatus"];
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
                /** @description Return items created before certain date/time (in UTC) */
                createdBefore?: string;
                /** @description Return items created on or after certain date/time (in UTC) */
                createdOnOrAfter?: string;
                /** @description Applies sorting by specified fields */
                sort?: string;
            };
            header?: never;
            path: {
                /** @description The employee ID */
                employee: number;
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
                     *           "startedOn": "string",
                     *           "endedOn": "string",
                     *           "employeeId": 0,
                     *           "employeeType": {},
                     *           "status": {},
                     *           "burdenRate": 0,
                     *           "managerApprovedOn": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Payroll.V2.Payrolls.PayrollResponse"];
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
    PayrollSettings_GetPayrollSettingsList: {
        parameters: {
            query?: {
                /**
                 * @description The type of employee\
                 *     Values: [Technician, Employee]
                 */
                employeeType?: string & components["schemas"]["Payroll.V2.EmployeeType"];
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
                     *           "employeeId": 0,
                     *           "employeeType": {},
                     *           "externalPayrollId": "string",
                     *           "hourlyRate": 0,
                     *           "managerId": 0,
                     *           "payrollBusinessUnitId": 0,
                     *           "isIncludedInPayroll": true,
                     *           "hireDate": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "active": true,
                     *           "customFields": [
                     *             {
                     *               "typeId": 0,
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Payroll.V2.PayrollSettings.PayrollSettingsListResponse"];
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
    PayrollSettings_GetEmployeePayrollSettings: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The employee ID */
                employee: number;
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
                     *       "employeeId": 0,
                     *       "employeeType": {},
                     *       "externalPayrollId": "string",
                     *       "hourlyRate": 0,
                     *       "managerId": 0,
                     *       "payrollBusinessUnitId": 0,
                     *       "isIncludedInPayroll": true,
                     *       "hireDate": "string",
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "active": true,
                     *       "customFields": [
                     *         {
                     *           "typeId": 0,
                     *           "name": "string",
                     *           "value": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Payroll.V2.PayrollSettings.PayrollSettingsResponse"];
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
    PayrollSettings_UpdateEmployeePayrollSettings: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The employee ID */
                employee: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The request */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "externalPayrollId": "string",
                 *       "hourlyRate": 0,
                 *       "managerId": 0,
                 *       "payrollBusinessUnitId": 0,
                 *       "hireDate": "string",
                 *       "isIncludedInPayroll": true,
                 *       "customFields": [
                 *         {
                 *           "typeId": 0,
                 *           "value": "string"
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Payroll.V2.PayrollSettings.PayrollSettingsUpdateRequest"];
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
                     *       "employeeId": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Payroll.V2.PayrollSettings.PayrollSettingsUpdateResponse"];
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
    PayrollSettings_GetTechnicianPayrollSettings: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The technician ID */
                technician: number;
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
                     *       "employeeId": 0,
                     *       "employeeType": {},
                     *       "externalPayrollId": "string",
                     *       "hourlyRate": 0,
                     *       "managerId": 0,
                     *       "payrollBusinessUnitId": 0,
                     *       "isIncludedInPayroll": true,
                     *       "hireDate": "string",
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "active": true,
                     *       "customFields": [
                     *         {
                     *           "typeId": 0,
                     *           "name": "string",
                     *           "value": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Payroll.V2.PayrollSettings.PayrollSettingsResponse"];
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
    PayrollSettings_UpdateTechnicianPayrollSettings: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The technician ID */
                technician: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description The request */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "externalPayrollId": "string",
                 *       "hourlyRate": 0,
                 *       "managerId": 0,
                 *       "payrollBusinessUnitId": 0,
                 *       "hireDate": "string",
                 *       "isIncludedInPayroll": true,
                 *       "customFields": [
                 *         {
                 *           "typeId": 0,
                 *           "value": "string"
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Payroll.V2.PayrollSettings.PayrollSettingsUpdateRequest"];
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
                     *       "employeeId": 0
                     *     }
                     */
                    "application/json": components["schemas"]["Payroll.V2.PayrollSettings.PayrollSettingsUpdateResponse"];
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
    TimesheetCodes_GetList: {
        parameters: {
            query?: {
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
                     *           "description": "string",
                     *           "type": {},
                     *           "applicableEmployeeType": {},
                     *           "rateInfo": {
                     *             "hourlyRate": {},
                     *             "customHourlyRate": 0,
                     *             "rateMultiplier": 0
                     *           },
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Payroll.V2.TimesheetCodes.TimesheetCodeResponse"];
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
    TimesheetCodes_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The timesheet code ID */
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
                     *       "description": "string",
                     *       "type": {},
                     *       "applicableEmployeeType": {},
                     *       "rateInfo": {
                     *         "hourlyRate": {},
                     *         "customHourlyRate": 0,
                     *         "rateMultiplier": 0
                     *       },
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "active": true
                     *     }
                     */
                    "application/json": components["schemas"]["Payroll.V2.TimesheetCodes.TimesheetCodeResponse"];
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
            /** @description Timesheet code was not found */
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
    Timesheets_GetJobTimesheets: {
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
                /** @description The technician ID */
                technicianId?: number;
                /** @description Return items having dispatch, arrive, cancel or done dates after certain date/time (in UTC) */
                startedOn?: string;
                /** @description Return items having dispatch, arrive, cancel or done dates before certain date/time (in UTC) */
                endedOn?: string;
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
                job: number;
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
                     *           "appointmentId": 0,
                     *           "technicianId": 0,
                     *           "dispatchedOn": "string",
                     *           "arrivedOn": "string",
                     *           "canceledOn": "string",
                     *           "doneOn": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Payroll.V2.Timesheets.JobTimesheetResponse"];
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
    Timesheets_GetNonJobTimesheets: {
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
                /** @description The employee ID */
                employeeId?: number;
                /**
                 * @description The employee type\
                 *     Values: [Technician, Employee]
                 */
                employeeType?: string & components["schemas"]["Payroll.V2.EmployeeType"];
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
                     *           "employeeId": 0,
                     *           "employeeType": {},
                     *           "timesheetCodeId": 0,
                     *           "startedOn": "string",
                     *           "endedOn": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Payroll.V2.Timesheets.NonJobTimesheetResponse"];
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
    Timesheets_GetJobTimesheetsByJobs: {
        parameters: {
            query?: {
                jobIds?: string;
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
                /** @description The technician ID */
                technicianId?: number;
                /** @description Return items having dispatch, arrive, cancel or done dates after certain date/time (in UTC) */
                startedOn?: string;
                /** @description Return items having dispatch, arrive, cancel or done dates before certain date/time (in UTC) */
                endedOn?: string;
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
                     *           "appointmentId": 0,
                     *           "technicianId": 0,
                     *           "dispatchedOn": "string",
                     *           "arrivedOn": "string",
                     *           "canceledOn": "string",
                     *           "doneOn": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "active": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Payroll.V2.Timesheets.JobTimesheetResponse"];
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
