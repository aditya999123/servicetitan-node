// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

export interface paths {
    "/tenant/{tenant}/business-units/intacct": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieves a paginated list of Intacct business unit mappings based on the specified query parameters. */
        get: operations["IntacctBusinessUnitMappings_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/employees": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of employees */
        get: operations["Employees_GetList"];
        put?: never;
        /** Creates new employee */
        post: operations["Employees_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/employees/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a employee by ID */
        get: operations["Employees_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Updates employee */
        patch: operations["Employees_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/employees/{id}/account-actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Performs standard actions with the account */
        post: operations["Employees_AccountActions"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/employees": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for employees */
        get: operations["Export_Employees"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/technicians": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for technicians */
        get: operations["Export_Technicians"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/technicians": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of technicians */
        get: operations["Technicians_GetList"];
        put?: never;
        /** Creates new technician */
        post: operations["Technicians_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/technicians/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a technician by ID */
        get: operations["Technicians_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Updates technician */
        patch: operations["Technicians_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/technicians/{id}/account-actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Performs standard actions with the account */
        post: operations["Technicians_AccountActions"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/user-roles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of user roles */
        get: operations["UserRoles_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/business-units": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of business units */
        get: operations["BusinessUnits_GetList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/business-units/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a business unit by ID */
        get: operations["BusinessUnits_Get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update an existing BusinessUnit */
        patch: operations["BusinessUnits_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/export/business-units": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for business units */
        get: operations["Export_BusinessUnits"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/tag-types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for tag types */
        get: operations["Export_TagTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/tag-types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a list of tag types */
        get: operations["TagTypes_GetList"];
        put?: never;
        /** Creates a tag type */
        post: operations["TagTypes_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/tag-types/{id}": {
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
        /** Updates a tag type */
        patch: operations["TagTypes_Update"];
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Accounting.V2.Integrations.Intacct.IntacctBusinessUnitMappingResponse": {
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
            data: components["schemas"]["Accounting.V2.Integrations.Intacct.IntacctBusinessUnitMappingResponse"][];
        };
        "Accounting.V2.Integrations.Intacct.IntacctBusinessUnitMappingResponse": {
            /** Format: int64 */
            id: number;
            name?: string | null;
            active: boolean;
            tradeName?: string | null;
            intacctLocationName?: string | null;
            intacctLocationId?: string | null;
            intacctDepartment?: string | null;
            intacctClass?: string | null;
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
        "PaginatedResponse_Of_TenantSettings.V2.EmployeeResponse": {
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
            data: components["schemas"]["TenantSettings.V2.EmployeeResponse"][];
        };
        "TenantSettings.V2.EmployeeResponse": {
            /**
             * Format: int64
             * @description ID of the employee
             */
            id: number;
            /**
             * Format: int64
             * @description ID of the user that belongs to the employee
             */
            userId: number;
            /** @description Employee's name */
            name: string;
            /** @description Employee first name */
            firstName?: string | null;
            /** @description Employee last name */
            lastName?: string | null;
            /**
             * Format: int64
             * @description Employee manager id
             */
            managerId?: number | null;
            /**
             * @description [DEPRECATED] Please, use field RoleIds> instead.
             *     Built in user role. Built in role is a template for creating user role.
             */
            role: components["schemas"]["TenantSettings.V2.EmployeeUserRole"];
            /** @description IDs of the user roles assigned to the technician. */
            roleIds?: number[] | null;
            /**
             * Format: int64
             * @description ID of business unit employee belongs to
             */
            businessUnitId?: number | null;
            /**
             * Format: date-time
             * @description When the employee was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description When the employee was modified
             */
            modifiedOn: string;
            /**
             * Format: email
             * @description Email address of the employee
             */
            email?: string | null;
            /**
             * Format: phone
             * @description Phone number of the employee
             */
            phoneNumber?: string | null;
            /** @description Login name of the employee */
            loginName?: string | null;
            /** @description Whether the employee is active */
            active: boolean;
            /** @description Azure Active Directory User Id */
            aadUserId?: string | null;
            /** @description Account Locked Status */
            accountLocked?: boolean | null;
            /** @description Employee home address details */
            home?: components["schemas"]["TenantSettings.V2.EmployeeAddressResponse"] | null;
            /**
             * Format: int32
             * @description Agent id
             */
            agentId: number;
            /**
             * Format: date-time
             * @description Start date
             */
            startDate?: string | null;
            /**
             * Format: date-time
             * @description Termination date
             */
            terminationDate?: string | null;
            /**
             * Format: decimal
             * @description Hourly rate
             */
            hourlyRate: number;
            /**
             * Format: int64
             * @description Overtime profile id
             */
            overtimeProfileId?: number | null;
            /** @description Custom fields */
            customFields?: components["schemas"]["TenantSettings.V2.EmployeeCustomFieldResponse"][] | null;
            /** @description List of the all availible permissions for this user. */
            permissions?: components["schemas"]["TenantSettings.V2.EmployeePermissionResponse"][] | null;
        };
        /** @enum {string} */
        "TenantSettings.V2.EmployeeUserRole": "Unspecified" | "Technician" | "Dispatch" | "Accounting" | "FieldManager" | "DisplayUser" | "DisplayUserWithBillingAccess" | "SalesManager" | "CSR" | "GeneralOffice" | "TechnicianHelper" | "TechnicianMaintenance" | "TechnicianInstaller" | "Admin" | "TechnicianService" | "TechnicianSales" | "Owner" | "EmptyEmployee" | "EmptyTechnician";
        "TenantSettings.V2.EmployeeAddressResponse": {
            /** @description Street */
            street?: string | null;
            /** @description Unit */
            unit?: string | null;
            /** @description Country */
            country?: string | null;
            /** @description City */
            city?: string | null;
            /** @description State */
            state?: string | null;
            /** @description Zip */
            zip?: string | null;
        };
        "TenantSettings.V2.EmployeeCustomFieldResponse": {
            /** Format: int64 */
            typeId: number;
            name?: string | null;
            value?: string | null;
        };
        "TenantSettings.V2.EmployeePermissionResponse": {
            /** Format: int32 */
            id: number;
            value?: string | null;
        };
        /**
         * @description Represents possible HTTP query argument values, when applying filters based on active status.
         * @enum {string}
         */
        ActiveRequestArg: "True" | "Any" | "False";
        "TenantSettings.V2.EmployeeCreateResponse": {
            /**
             * Format: int64
             * @description Employee Id
             */
            id: number;
        };
        "TenantSettings.V2.EmployeeCreateRequest": {
            /** @description Employee name */
            name: string;
            /**
             * Format: phone
             * @description Mobile phone
             */
            mobilePhoneNumber?: string | null;
            /**
             * Format: phone
             * @description Office phone
             */
            phoneNumber?: string | null;
            /**
             * Format: email
             * @description Email
             */
            email: string;
            /** @description Login (Username) */
            login?: string | null;
            /**
             * Format: password
             * @description Password
             */
            password?: string | null;
            /** @description Account creation method */
            accountCreationMethod: components["schemas"]["TenantSettings.V2.AccountCreationMethod"];
            /**
             * Format: int64
             * @description Business unit Id
             */
            businessUnitId?: number | null;
            /**
             * Format: int64
             * @description User role Id
             */
            roleId: number;
            /** @description List of company positions */
            positions: components["schemas"]["TenantSettings.V2.EmployeePosition"][];
            /** @description Azure Active Directory User Id */
            aadUserId?: string | null;
            /** @description List of employee's custom fields */
            customFields?: components["schemas"]["TenantSettings.V2.EmployeeCustomFieldCreateOrUpdateRequest"][] | null;
        };
        /** @enum {string} */
        "TenantSettings.V2.AccountCreationMethod": "CreateLater" | "SendInvite" | "AssignLoginAndPassword";
        /** @enum {string} */
        "TenantSettings.V2.EmployeePosition": "CSR" | "Dispatcher" | "CsrManager" | "DispatchManager" | "InstallProductionManager" | "ServiceManager" | "SalesManager" | "MarketingManager" | "Administrator" | "PayrollManager" | "Bookkeeper" | "PurchasingManager" | "WarehouseManager" | "OfficeManager" | "GeneralManager" | "BusinessOwner" | "AnsweringService" | "InsideSales" | "GeneralOfficeNonManagement";
        "TenantSettings.V2.EmployeeCustomFieldCreateOrUpdateRequest": {
            /** Format: int64 */
            typeId: number;
            value?: string | null;
        };
        "TenantSettings.V2.EmployeeUpdateResponse": {
            /**
             * Format: int64
             * @description Employee Id
             */
            id: number;
        };
        "TenantSettings.V2.EmployeeUpdateRequest": {
            /** @description Employee name */
            name?: string;
            /**
             * Format: phone
             * @description Mobile phone
             */
            mobilePhoneNumber?: string;
            /**
             * Format: phone
             * @description Office phone
             */
            phoneNumber?: string;
            /**
             * Format: email
             * @description Email
             */
            email?: string;
            /** @description Login (Username) */
            login?: string;
            /**
             * Format: int64
             * @description Business unit Id
             */
            businessUnitId?: number | null;
            /**
             * Format: int64
             * @description User role Id
             */
            roleId?: number;
            /** @description List of company positions */
            positions?: components["schemas"]["TenantSettings.V2.EmployeePosition"][];
            /** @description Azure Active Directory User Id */
            aadUserId?: string;
            /** @description List of employee's custom fields */
            customFields?: components["schemas"]["TenantSettings.V2.EmployeeCustomFieldCreateOrUpdateRequest"][];
            /** @description Account Locked Status */
            accountLocked?: boolean;
        };
        "TenantSettings.V2.AccountActionResponse": {
            /** @description Status */
            status: components["schemas"]["TenantSettings.V2.AccountActionStatus"];
        };
        /** @enum {string} */
        "TenantSettings.V2.AccountActionStatus": "Success";
        "TenantSettings.V2.AccountActionRequest": {
            /** @description Action name */
            action: components["schemas"]["TenantSettings.V2.AccountAction"];
        };
        /** @enum {string} */
        "TenantSettings.V2.AccountAction": "Activate" | "Deactivate" | "SendInvite" | "SendPasswordResetLink";
        /** @description Represents export API response. */
        "ExportResponse_Of_TenantSettings.V2.ExportEmployeeResponse": {
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
            data: components["schemas"]["TenantSettings.V2.ExportEmployeeResponse"][];
        };
        "TenantSettings.V2.ExportEmployeeResponse": {
            /** @description Custom fields */
            customFields?: components["schemas"]["TenantSettings.V2.EmployeeCustomFieldResponse"][] | null;
            /** @description List of the all availible permissions for this user. */
            permissions?: components["schemas"]["TenantSettings.V2.EmployeePermissionResponse"][] | null;
            /**
             * Format: int64
             * @description ID of the employee
             */
            id: number;
            /**
             * Format: int64
             * @description ID of the user that belongs to the employee
             */
            userId: number;
            /** @description Employee's name */
            name: string;
            /** @description Employee first name */
            firstName?: string | null;
            /** @description Employee last name */
            lastName?: string | null;
            /**
             * Format: int64
             * @description Employee manager id
             */
            managerId?: number | null;
            /**
             * @description [DEPRECATED] Please, use field RoleIds> instead.
             *     Built in user role. Built in role is a template for creating user role.
             */
            role: components["schemas"]["TenantSettings.V2.EmployeeUserRole"];
            /** @description IDs of the user roles assigned to the technician. */
            roleIds?: number[] | null;
            /**
             * Format: int64
             * @description ID of business unit employee belongs to
             */
            businessUnitId?: number | null;
            /**
             * Format: date-time
             * @description When the employee was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description When the employee was modified
             */
            modifiedOn: string;
            /**
             * Format: email
             * @description Email address of the employee
             */
            email?: string | null;
            /**
             * Format: phone
             * @description Phone number of the employee
             */
            phoneNumber?: string | null;
            /** @description Login name of the employee */
            loginName?: string | null;
            /** @description Whether the employee is active */
            active: boolean;
            /** @description Azure Active Directory User Id */
            aadUserId?: string | null;
            /** @description Account Locked Status */
            accountLocked?: boolean | null;
            /** @description Employee home address details */
            home?: components["schemas"]["TenantSettings.V2.EmployeeAddressResponse"] | null;
            /**
             * Format: int32
             * @description Agent id
             */
            agentId: number;
            /**
             * Format: date-time
             * @description Start date
             */
            startDate?: string | null;
            /**
             * Format: date-time
             * @description Termination date
             */
            terminationDate?: string | null;
            /**
             * Format: decimal
             * @description Hourly rate
             */
            hourlyRate: number;
            /**
             * Format: int64
             * @description Overtime profile id
             */
            overtimeProfileId?: number | null;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_TenantSettings.V2.ExportTechnicianResponse": {
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
            data: components["schemas"]["TenantSettings.V2.ExportTechnicianResponse"][];
        };
        "TenantSettings.V2.ExportTechnicianResponse": {
            /**
             * Format: int64
             * @description ID of the technician
             */
            id: number;
            /**
             * Format: int64
             * @description ID of the user that belongs to the technician
             */
            userId: number;
            /** @description Technician's name */
            name: string;
            /** @description IDs of the user roles assigned to the technician. */
            roleIds?: number[] | null;
            /**
             * Format: int64
             * @description ID of business unit technician belongs to
             */
            businessUnitId?: number | null;
            /**
             * Format: int64
             * @description ID of the main technician's zone
             */
            mainZoneId?: number | null;
            /** @description IDs of all technician's zones */
            zoneIds?: number[] | null;
            /**
             * Format: date-time
             * @description When the technician was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description When the technician was modified
             */
            modifiedOn: string;
            /**
             * Format: email
             * @description Email address of the technician
             */
            email?: string | null;
            /**
             * Format: phone
             * @description Phone number of the technician
             */
            phoneNumber?: string | null;
            /** @description Login name of the technician */
            loginName?: string | null;
            /** @description Technician's home address */
            home?: components["schemas"]["TenantSettings.V2.TechnicianAddressResponse"] | null;
            /**
             * Format: decimal
             * @description Technician's daily goal
             */
            dailyGoal: number;
            /** @description Whether the technician is managed */
            isManagedTech: boolean;
            /** @description License type */
            licenseType?: components["schemas"]["TenantSettings.V2.LicenseType"] | null;
            /** @description Custom fields */
            customFields?: components["schemas"]["TenantSettings.V2.TechnicianCustomFieldResponse"][] | null;
            /** @description Whether the technician is active */
            active: boolean;
            /** @description Azure Active Directory User Id */
            aadUserId?: string | null;
            /**
             * Format: decimal
             * @description Technician's burden rate
             */
            burdenRate: number;
            /** @description Team of the technician */
            team?: string | null;
            /** @description Job Filter of the technician */
            jobFilter?: components["schemas"]["TenantSettings.V2.JobFilter"] | null;
            /** @description List of the all availible permissions for this user. */
            permissions?: components["schemas"]["TenantSettings.V2.TechnicianPermissionResponse"][] | null;
            /** @description Account Locked Status */
            accountLocked?: boolean | null;
            /**
             * Format: decimal
             * @description Technician Commision Rate
             */
            commissionRate: number;
            /**
             * Format: decimal
             * @description Technician today statistic current value
             */
            currentValue?: number | null;
            /** @description Technician First name */
            firstName?: string | null;
            /** @description Technician Last name */
            lastName?: string | null;
            /**
             * Format: decimal
             * @description Technician hourly rate
             */
            hourlyRate: number;
            /**
             * Format: int64
             * @description Technician Job id
             */
            jobId?: number | null;
            /** @description Mobile phone */
            mobilePhone?: string | null;
            /** @description OutboundCallerId */
            outboundCallerId?: string | null;
            /** @description Payroll id */
            payrollId?: string | null;
            /**
             * Format: int64
             * @description Payroll profile id
             */
            payrollProfileId?: number | null;
            /**
             * Format: int64
             * @description Id of job appointment on which the technician is currently working.
             */
            appoitmentId?: number | null;
            /**
             * Format: duration
             * @description Shift Start
             */
            shiftStart?: string | null;
            /**
             * Format: duration
             * @description Shift End
             */
            shiftEnd?: string | null;
            /**
             * Format: decimal
             * @description Sold By Rate
             */
            soldByRate: number;
            /**
             * Format: date-time
             * @description Start Date
             */
            startDate?: string | null;
            /** @description Status */
            status: components["schemas"]["TenantSettings.V2.TechnicianStatus"];
            /** @description Skills */
            skills?: components["schemas"]["TenantSettings.V2.TechnicianSkillResponse"][] | null;
            /** @description Company positions */
            positions?: components["schemas"]["TenantSettings.V2.TechnicianPosition"][] | null;
            /** @description Location: Lat, Long, Last update time */
            location?: components["schemas"]["TenantSettings.V2.TechnicianLocationResponse"] | null;
            /**
             * Format: html
             * @description Biography
             */
            bio?: string | null;
            /**
             * Format: html
             * @description Memo
             */
            memo?: string | null;
        };
        "TenantSettings.V2.TechnicianAddressResponse": {
            street?: string | null;
            unit?: string | null;
            country?: string | null;
            city?: string | null;
            state?: string | null;
            zip?: string | null;
            streetAddress?: string | null;
            /** Format: double */
            latitude?: number | null;
            /** Format: double */
            longitude?: number | null;
        };
        /** @enum {string} */
        "TenantSettings.V2.LicenseType": "NonManagedTech" | "ManagedTech" | "ManagedInstaller";
        "TenantSettings.V2.TechnicianCustomFieldResponse": {
            /** Format: int64 */
            typeId: number;
            name?: string | null;
            value?: string | null;
        };
        /** @enum {string} */
        "TenantSettings.V2.JobFilter": "AllScheduledDispatchedWorking" | "NextScheduledDispatchedWorking" | "DispatchedWorking" | "NextScheduledDispatchedWorkingToday" | "AllScheduledDispatchedWorkingToday" | "AllScheduledDispatchedWorkingFiveDays" | "NextScheduledDispatchedWorkingTodayTomorrow" | "AllScheduledDispatchedWorkingTodayTomorrow" | "Next2ScheduledDispatchedWorkingToday";
        "TenantSettings.V2.TechnicianPermissionResponse": {
            /** Format: int32 */
            id: number;
            value?: string | null;
        };
        /** @enum {string} */
        "TenantSettings.V2.TechnicianStatus": "Idle" | "Dispatched" | "Working" | "Meal";
        "TenantSettings.V2.TechnicianSkillResponse": {
            /**
             * Format: int64
             * @description SkillId
             */
            id: number;
            /** @description Skill name */
            name?: string | null;
        };
        /** @enum {string} */
        "TenantSettings.V2.TechnicianPosition": "Installer" | "Service" | "Sales" | "Maintenance" | "Helper" | "InstallProductionManager" | "ServiceManager" | "SalesManager" | "PartRunner" | "DummyTech";
        "TenantSettings.V2.TechnicianLocationResponse": {
            /**
             * Format: double
             * @description Latitude
             */
            latitude?: number | null;
            /**
             * Format: double
             * @description Longitude
             */
            longitude?: number | null;
            /**
             * Format: date-time
             * @description Timestamp when coordinates updated last time
             */
            coordinatesUpdatedOn?: string | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_TenantSettings.V2.TechnicianResponse": {
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
            data: components["schemas"]["TenantSettings.V2.TechnicianResponse"][];
        };
        "TenantSettings.V2.TechnicianResponse": {
            /**
             * Format: int64
             * @description ID of the technician
             */
            id: number;
            /**
             * Format: int64
             * @description ID of the user that belongs to the technician
             */
            userId: number;
            /** @description Technician's name */
            name: string;
            /** @description IDs of the user roles assigned to the technician. */
            roleIds?: number[] | null;
            /**
             * Format: int64
             * @description ID of business unit technician belongs to
             */
            businessUnitId?: number | null;
            /**
             * Format: int64
             * @description ID of the main technician's zone
             */
            mainZoneId?: number | null;
            /** @description IDs of all technician's zones */
            zoneIds?: number[] | null;
            /**
             * Format: date-time
             * @description When the technician was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description When the technician was modified
             */
            modifiedOn: string;
            /**
             * Format: email
             * @description Email address of the technician
             */
            email?: string | null;
            /**
             * Format: phone
             * @description Phone number of the technician
             */
            phoneNumber?: string | null;
            /** @description Login name of the technician */
            loginName?: string | null;
            /** @description Technician's home address */
            home?: components["schemas"]["TenantSettings.V2.TechnicianAddressResponse"] | null;
            /**
             * Format: decimal
             * @description Technician's daily goal
             */
            dailyGoal: number;
            /** @description Whether the technician is managed */
            isManagedTech: boolean;
            /** @description License type */
            licenseType?: components["schemas"]["TenantSettings.V2.LicenseType"] | null;
            /** @description Custom fields */
            customFields?: components["schemas"]["TenantSettings.V2.TechnicianCustomFieldResponse"][] | null;
            /** @description Whether the technician is active */
            active: boolean;
            /** @description Azure Active Directory User Id */
            aadUserId?: string | null;
            /**
             * Format: decimal
             * @description Technician's burden rate
             */
            burdenRate: number;
            /** @description Team of the technician */
            team?: string | null;
            /** @description Job Filter of the technician */
            jobFilter?: components["schemas"]["TenantSettings.V2.JobFilter"] | null;
            /** @description List of the all availible permissions for this user. */
            permissions?: components["schemas"]["TenantSettings.V2.TechnicianPermissionResponse"][] | null;
            /** @description Account Locked Status */
            accountLocked?: boolean | null;
            /**
             * Format: decimal
             * @description Technician Commision Rate
             */
            commissionRate: number;
            /**
             * Format: decimal
             * @description Technician today statistic current value
             */
            currentValue?: number | null;
            /** @description Technician First name */
            firstName?: string | null;
            /** @description Technician Last name */
            lastName?: string | null;
            /**
             * Format: decimal
             * @description Technician hourly rate
             */
            hourlyRate: number;
            /**
             * Format: int64
             * @description Technician Job id
             */
            jobId?: number | null;
            /** @description Mobile phone */
            mobilePhone?: string | null;
            /** @description OutboundCallerId */
            outboundCallerId?: string | null;
            /** @description Payroll id */
            payrollId?: string | null;
            /**
             * Format: int64
             * @description Payroll profile id
             */
            payrollProfileId?: number | null;
            /**
             * Format: int64
             * @description Id of job appointment on which the technician is currently working.
             */
            appoitmentId?: number | null;
            /**
             * Format: duration
             * @description Shift Start
             */
            shiftStart?: string | null;
            /**
             * Format: duration
             * @description Shift End
             */
            shiftEnd?: string | null;
            /**
             * Format: decimal
             * @description Sold By Rate
             */
            soldByRate: number;
            /**
             * Format: date-time
             * @description Start Date
             */
            startDate?: string | null;
            /** @description Status */
            status: components["schemas"]["TenantSettings.V2.TechnicianStatus"];
            /** @description Skills */
            skills?: components["schemas"]["TenantSettings.V2.TechnicianSkillResponse"][] | null;
            /** @description Company positions */
            positions?: components["schemas"]["TenantSettings.V2.TechnicianPosition"][] | null;
            /** @description Location: Lat, Long, Last update time */
            location?: components["schemas"]["TenantSettings.V2.TechnicianLocationResponse"] | null;
            /**
             * Format: html
             * @description Biography
             */
            bio?: string | null;
            /**
             * Format: html
             * @description Memo
             */
            memo?: string | null;
        };
        "TenantSettings.V2.TechnicianCreateResponse": {
            /**
             * Format: int64
             * @description Technician Id
             */
            id: number;
        };
        "TenantSettings.V2.TechnicianCreateRequest": {
            /** @description Technician name */
            name: string;
            /**
             * Format: phone
             * @description Technician's phone number
             */
            phoneNumber?: string | null;
            /**
             * Format: email
             * @description Email
             */
            email?: string | null;
            /** @description Login (Username) */
            login?: string | null;
            /**
             * Format: password
             * @description Password
             */
            password?: string | null;
            /** @description Account creation method */
            accountCreationMethod: components["schemas"]["TenantSettings.V2.AccountCreationMethod"];
            /**
             * Format: int64
             * @description Business unit Id
             */
            businessUnitId?: number | null;
            /**
             * Format: int64
             * @description User role Id
             */
            roleId: number;
            /** @description List of company positions */
            positions: components["schemas"]["TenantSettings.V2.TechnicianPosition"][];
            /** @description Azure Active Directory User Id */
            aadUserId?: string | null;
            /** @description License type */
            licenseType: components["schemas"]["TenantSettings.V2.LicenseType"];
            /** @description Team name */
            team?: string | null;
            /**
             * Format: decimal
             * @description Daily revenue goal
             */
            dailyGoal?: number | null;
            /**
             * Format: decimal
             * @description Burden rate (hourly)
             */
            burdenRate?: number | null;
            /**
             * Format: html
             * @description Biography
             */
            bio?: string | null;
            /**
             * Format: html
             * @description Memo
             */
            memo?: string | null;
            /** @description Upcoming appointment visibility */
            jobFilter?: components["schemas"]["TenantSettings.V2.JobFilter"] | null;
            /** @description Appointment history visibility */
            jobHistoryDateFilter?: components["schemas"]["TenantSettings.V2.JobHistoryDateFilter"] | null;
            /** @description Home address */
            home?: components["schemas"]["TenantSettings.V2.CreateOrUpdateAddressRequest"] | null;
            /** @description List of Technician's custom fields */
            customFields?: components["schemas"]["TenantSettings.V2.TechnicianCustomFieldCreateOrUpdateRequest"][] | null;
        };
        /** @enum {string} */
        "TenantSettings.V2.JobHistoryDateFilter": "AllJobs" | "LastThreeDays" | "LastSevenDays" | "LastMonth";
        "TenantSettings.V2.CreateOrUpdateAddressRequest": {
            unit?: string | null;
            street: string;
            city: string;
            state?: string | null;
            country?: string | null;
            zip?: string | null;
            /** Format: double */
            latitude?: number | null;
            /** Format: double */
            longitude?: number | null;
        };
        "TenantSettings.V2.TechnicianCustomFieldCreateOrUpdateRequest": {
            /** Format: int64 */
            typeId: number;
            value?: string | null;
        };
        "TenantSettings.V2.TechnicianUpdateResponse": {
            /**
             * Format: int64
             * @description Technician Id
             */
            id: number;
        };
        "TenantSettings.V2.TechnicianUpdateRequest": {
            /** @description Technician name */
            name?: string;
            /**
             * Format: phone
             * @description Technician's phone number
             */
            phoneNumber?: string;
            /**
             * Format: email
             * @description Email
             */
            email?: string;
            /** @description Login (Username) */
            login?: string;
            /**
             * Format: int64
             * @description Business unit Id
             */
            businessUnitId?: number | null;
            /**
             * Format: int64
             * @description User role Id
             */
            roleId?: number;
            /** @description List of company positions */
            positions?: components["schemas"]["TenantSettings.V2.TechnicianPosition"][];
            /** @description Azure Active Directory User Id */
            aadUserId?: string;
            /** @description License type */
            licenseType?: components["schemas"]["TenantSettings.V2.LicenseType"];
            /** @description Team name */
            team?: string;
            /**
             * Format: decimal
             * @description Daily revenue goal
             */
            dailyGoal?: number | null;
            /**
             * Format: decimal
             * @description Burden rate (hourly)
             */
            burdenRate?: number | null;
            /**
             * Format: html
             * @description Biography
             */
            bio?: string;
            /**
             * Format: html
             * @description Memo
             */
            memo?: string;
            /** @description Upcoming appointment visibility */
            jobFilter?: components["schemas"]["TenantSettings.V2.JobFilter"] | null;
            /** @description Appointment history visibility */
            jobHistoryDateFilter?: components["schemas"]["TenantSettings.V2.JobHistoryDateFilter"] | null;
            /** @description Home address */
            home?: components["schemas"]["TenantSettings.V2.CreateOrUpdateAddressRequest"];
            /** @description List of Technician's custom fields */
            customFields?: components["schemas"]["TenantSettings.V2.TechnicianCustomFieldCreateOrUpdateRequest"][];
            /** @description Account Locked Status */
            accountLocked?: boolean;
        };
        "TenantSettings.V2.TechnicianAccountActionRequest": {
            /** @description Action name */
            action: components["schemas"]["TenantSettings.V2.AccountAction"];
            /** @description License type to assign to a technician, it is required for AccountAction = Activate */
            licenseType?: components["schemas"]["IdentityUserManagement.TechnicianLicenseType"] | null;
            /**
             * Format: int64
             * @description (Optional) Truck Id to assign to a technician.
             */
            truckId?: number | null;
        };
        /** @enum {string} */
        "IdentityUserManagement.TechnicianLicenseType": "NonManagedTechnician" | "ManagedTechnician" | "ManagedInstaller";
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_TenantSettings.V2.UserRoleResponse": {
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
            data: components["schemas"]["TenantSettings.V2.UserRoleResponse"][];
        };
        "TenantSettings.V2.UserRoleResponse": {
            /** Format: int64 */
            id: number;
            active: boolean;
            name: string;
            /** Format: date-time */
            createdOn: string;
            employeeType: components["schemas"]["TenantSettings.V2.EmployeeType"];
        };
        /** @enum {string} */
        "TenantSettings.V2.EmployeeType": "Employee" | "Technician";
        /** @enum {string} */
        "TenantSettings.V2.RequestedEmployeeTypeArg": "None" | "Employee" | "Technician" | "All";
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_TenantSettings.V2.BusinessUnitResponse": {
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
            data: components["schemas"]["TenantSettings.V2.BusinessUnitResponse"][];
        };
        "TenantSettings.V2.BusinessUnitResponse": {
            /**
             * Format: int64
             * @description ID of the business unit
             */
            id: number;
            /** @description Whether the business unit is active */
            active: boolean;
            /** @description The internal name of the business unit */
            name: string;
            /** @description The official name which customers see for the business unit */
            officialName?: string | null;
            /**
             * Format: email
             * @description The default email address associated with the business unit
             */
            email?: string | null;
            /** @description The currency code used by the business unit (e.g., USD, CAD) */
            currency?: string | null;
            /**
             * Format: phone
             * @description The primary phone number for the business unit
             */
            phoneNumber?: string | null;
            /**
             * Format: html
             * @description The header text displayed on invoices and estimates with this business unit
             */
            invoiceHeader?: string | null;
            /**
             * Format: html
             * @description The message text displayed at the footer of all invoices and estimates with this business unit
             */
            invoiceMessage?: string | null;
            /**
             * Format: decimal
             * @description The default tax rate applied to taxable pricebook items this business unit
             */
            defaultTaxRate?: number | null;
            /**
             * Format: html
             * @description The authorization paragraph for customers to authorize work with this business unit
             */
            authorizationParagraph?: string | null;
            /**
             * Format: html
             * @description The acknowledgement paragraph for customers to sign for completed work with this business unit
             */
            acknowledgementParagraph?: string | null;
            /** @description The address information for the business unit */
            address?: components["schemas"]["TenantSettings.V2.BusinessUnitAddressResponse"] | null;
            /** @description The SKU for materials associated with this business unit */
            materialSku?: string | null;
            /** @description The QuickBooks class name for accounting integration */
            quickbooksClass?: string | null;
            /** @description The account code for the business unit tenant */
            accountCode?: string | null;
            /** @description The franchise ID for the business unit tenant */
            franchiseId?: string | null;
            /** @description The concept code for the business unit tenant */
            conceptCode?: string | null;
            /** @description The corporate contract number associated with the business unit */
            corporateContractNumber?: string | null;
            /** @description The trade associated with the business unit */
            trade?: components["schemas"]["Services.NamedModel"] | null;
            /** @description The division within the company to which the business unit belongs */
            division?: components["schemas"]["Services.NamedModel"] | null;
            /** @description List of tag type IDs associated with the business unit and automatically associated with jobs */
            tagTypeIds?: number[] | null;
            /** @description Tenant to which the business unit belongs */
            tenant?: components["schemas"]["TenantSettings.V2.BusinessUnitTenantResponse"] | null;
            /**
             * Format: date-time
             * @description When the business unit was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description When the business unit was modified
             */
            modifiedOn: string;
            /** @description Optional list of external data items attached to this business unit */
            externalData?: components["schemas"]["TenantSettings.V2.ExternalDataModel"][] | null;
            /** @description Certified Sentricon Specialist Code (CSS Code) for this business unit. */
            certifiedSentriconSpecialistCode?: string | null;
        };
        "TenantSettings.V2.BusinessUnitAddressResponse": {
            street?: string | null;
            unit?: string | null;
            city?: string | null;
            state?: string | null;
            zip?: string | null;
            country?: string | null;
            /** Format: double */
            latitude?: number | null;
            /** Format: double */
            longitude?: number | null;
            isManualCoordinates: boolean;
            isMilitary: boolean;
        };
        "Services.NamedModel": {
            /** Format: int64 */
            id: number;
            name: string;
        };
        "TenantSettings.V2.BusinessUnitTenantResponse": {
            /** Format: int64 */
            id: number;
            name: string;
            accountCode?: string | null;
            franchiseId?: string | null;
            conceptCode?: string | null;
            /** Format: date-time */
            modifiedOn: string;
        };
        "TenantSettings.V2.ExternalDataModel": {
            /** @description External data key. */
            key: string;
            /** @description External data value. */
            value: string;
        };
        /** @description Default response when creating object with a new ID, or updating object by specified ID. */
        ModificationResponse: {
            /**
             * Format: int64
             * @description The ID of created/updated object
             */
            id: number;
        };
        "TenantSettings.V2.UpdateBusinessUnitRequest": {
            /**
             * @description Optional model that contains a list of external data items
             *     that should be attached to this business unit.
             */
            externalData?: components["schemas"]["TenantSettings.V2.ExternalDataUpdateRequest"];
        };
        "TenantSettings.V2.ExternalDataUpdateRequest": {
            /**
             * @description External data patch mode.\
             *     "Replace" (default) replaces all existing keys with new values. If job A has custom data with keys X and Y and this field only contains an item
             *     with a key X, then custom data with a key Y on job A will be removed.\
             *     "Merge" will only replace key X in the example above. Keys with null value will be deleted.
             */
            patchMode?: components["schemas"]["TenantSettings.V2.ExternalDataPatchMode"] | null;
            /**
             * Format: guid
             * @description Items that are created with a specific guid, could be fetched/updated/removed
             *     only when the same application guid is provided.
             */
            applicationGuid: string;
            /** @description External data list. */
            externalData: components["schemas"]["TenantSettings.V2.ExternalDataUpdateModel"][];
        };
        /** @enum {string} */
        "TenantSettings.V2.ExternalDataPatchMode": "Replace" | "Merge";
        "TenantSettings.V2.ExternalDataUpdateModel": {
            /** @description External data key. */
            key: string;
            /** @description External data value. */
            value?: string | null;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_TenantSettings.V2.ExportBusinessUnitResponse": {
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
            data: components["schemas"]["TenantSettings.V2.ExportBusinessUnitResponse"][];
        };
        "TenantSettings.V2.ExportBusinessUnitResponse": {
            /**
             * Format: int64
             * @description ID of the business unit
             */
            id: number;
            /** @description Whether the business unit is active */
            active: boolean;
            /** @description The internal name of the business unit */
            name: string;
            /** @description The official name which customers see for the business unit */
            officialName?: string | null;
            /**
             * Format: email
             * @description The default email address associated with the business unit
             */
            email?: string | null;
            /** @description The currency code used by the business unit (e.g., USD, CAD) */
            currency?: string | null;
            /**
             * Format: phone
             * @description The primary phone number for the business unit
             */
            phoneNumber?: string | null;
            /**
             * Format: html
             * @description The header text displayed on invoices and estimates with this business unit
             */
            invoiceHeader?: string | null;
            /**
             * Format: html
             * @description The message text displayed at the footer of all invoices and estimates with this business unit
             */
            invoiceMessage?: string | null;
            /**
             * Format: decimal
             * @description The default tax rate applied to taxable pricebook items this business unit
             */
            defaultTaxRate?: number | null;
            /**
             * Format: html
             * @description The authorization paragraph for customers to authorize work with this business unit
             */
            authorizationParagraph?: string | null;
            /**
             * Format: html
             * @description The acknowledgement paragraph for customers to sign for completed work with this business unit
             */
            acknowledgementParagraph?: string | null;
            /** @description The address information for the business unit */
            address?: components["schemas"]["TenantSettings.V2.BusinessUnitAddressResponse"] | null;
            /** @description The SKU for materials associated with this business unit */
            materialSku?: string | null;
            /** @description The QuickBooks class name for accounting integration */
            quickbooksClass?: string | null;
            /** @description The account code for the business unit tenant */
            accountCode?: string | null;
            /** @description The franchise ID for the business unit tenant */
            franchiseId?: string | null;
            /** @description The concept code for the business unit tenant */
            conceptCode?: string | null;
            /** @description The corporate contract number associated with the business unit */
            corporateContractNumber?: string | null;
            /** @description The trade associated with the business unit */
            trade?: components["schemas"]["Services.NamedModel"] | null;
            /** @description The division within the company to which the business unit belongs */
            division?: components["schemas"]["Services.NamedModel"] | null;
            /** @description List of tag type IDs associated with the business unit and automatically associated with jobs */
            tagTypeIds?: number[] | null;
            /** @description Tenant to which the business unit belongs */
            tenant?: components["schemas"]["TenantSettings.V2.BusinessUnitTenantResponse"] | null;
            /**
             * Format: date-time
             * @description When the business unit was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description When the business unit was modified
             */
            modifiedOn: string;
            /** @description Optional list of external data items attached to this business unit */
            externalData?: components["schemas"]["TenantSettings.V2.ExternalDataModel"][] | null;
            /** @description Certified Sentricon Specialist Code (CSS Code) for this business unit. */
            certifiedSentriconSpecialistCode?: string | null;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_TenantSettings.V2.ExportTagTypeResponse": {
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
            data: components["schemas"]["TenantSettings.V2.ExportTagTypeResponse"][];
        };
        "TenantSettings.V2.ExportTagTypeResponse": {
            /**
             * Format: int64
             * @description ID of the tag type
             */
            id: number;
            /** @description Name of the tag type */
            name: string;
            /** @description Color hex string of the tag type */
            color: string;
            /** @description Code associated with the tag type */
            code: string;
            /** @description The TagImportance of the tag type */
            importance?: components["schemas"]["TenantSettings.V2.TagImportance"] | null;
            /** @description Indicates whether tags of this type should be considered as an opportunity */
            isConversionOpportunity: boolean;
            /** @description Gets or sets a value indicating whether tags of this type allowed to be used on timesheet activity */
            allowToUseOnTimesheetActivity: boolean;
            /** @description Gets or sets a value indicating whether tags of this type are visible on dispatch board. */
            isVisibleOnDispatchBoard: boolean;
            /** @description Whether the tag type is active */
            active: boolean;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when the tag type was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when the tag type was last modified
             */
            modifiedOn: string;
        };
        /** @enum {string} */
        "TenantSettings.V2.TagImportance": "Medium" | "High";
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_TenantSettings.V2.TagTypeResponse": {
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
            data: components["schemas"]["TenantSettings.V2.TagTypeResponse"][];
        };
        "TenantSettings.V2.TagTypeResponse": {
            /**
             * Format: int64
             * @description ID of the tag type
             */
            id: number;
            /** @description Name of the tag type */
            name: string;
            /** @description Color hex string of the tag type */
            color: string;
            /** @description Code associated with the tag type */
            code: string;
            /** @description The TagImportance of the tag type */
            importance?: components["schemas"]["TenantSettings.V2.TagImportance"] | null;
            /** @description Indicates whether tags of this type should be considered as an opportunity */
            isConversionOpportunity: boolean;
            /** @description Gets or sets a value indicating whether tags of this type allowed to be used on timesheet activity */
            allowToUseOnTimesheetActivity: boolean;
            /** @description Gets or sets a value indicating whether tags of this type are visible on dispatch board. */
            isVisibleOnDispatchBoard: boolean;
            /** @description Whether the tag type is active */
            active: boolean;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when the tag type was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description Date/time (in UTC) when the tag type was last modified
             */
            modifiedOn: string;
        };
        "TenantSettings.V2.CreateTagTypeRequest": {
            /** @description Name of the tag type */
            name: string;
            /** @description Color hex string of the tag type */
            color: string;
            /** @description Code associated with the tag type */
            code?: string | null;
            /** @description The TagImportance of the tag type */
            importance?: components["schemas"]["TenantSettings.V2.TagImportance"] | null;
            /** @description Indicates whether tags of this type should be considered as an opportunity */
            isConversionOpportunity?: boolean | null;
            /** @description Gets or sets a value indicating whether tags of this type allowed to be used on timesheet activity */
            allowToUseOnTimesheetActivity?: boolean | null;
            /** @description Gets or sets a value indicating whether tags of this type are visible on dispatch board. */
            isVisibleOnDispatchBoard?: boolean | null;
        };
        "TenantSettings.V2.UpdateTagTypeRequest": {
            /** @description Name of the tag type */
            name?: string;
            /** @description Color hex string of the tag type */
            color?: string;
            /** @description Code associated with the tag type */
            code?: string;
            /** @description The TagImportance of the tag type */
            importance?: components["schemas"]["TenantSettings.V2.TagImportance"] | null;
            /** @description Indicates whether tags of this type should be considered as an opportunity */
            isConversionOpportunity?: boolean;
            /** @description Gets or sets a value indicating whether tags of this type allowed to be used on timesheet activity */
            allowToUseOnTimesheetActivity?: boolean;
            /** @description Gets or sets a value indicating whether tags of this type are visible on dispatch board. */
            isVisibleOnDispatchBoard?: boolean;
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
    IntacctBusinessUnitMappings_Get: {
        parameters: {
            query: {
                page: number;
                pageSize: number;
                includeTotal: boolean;
                ids?: number[];
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
                     *           "tradeName": "string",
                     *           "intacctLocationName": "string",
                     *           "intacctLocationId": "string",
                     *           "intacctDepartment": "string",
                     *           "intacctClass": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Accounting.V2.Integrations.Intacct.IntacctBusinessUnitMappingResponse"];
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
    Employees_GetList: {
        parameters: {
            query?: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /** @description Perform lookup by multiple User Ids (maximum 50) */
                userIds?: string;
                /** @description Filters records by name (case-insensitive "contains" operation) */
                name?: string;
                /** @description Filters records by email (exact match). */
                email?: string;
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
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
                     *           "userId": 0,
                     *           "name": "string",
                     *           "firstName": "string",
                     *           "lastName": "string",
                     *           "managerId": 0,
                     *           "role": {},
                     *           "roleIds": [
                     *             0
                     *           ],
                     *           "businessUnitId": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "email": "string",
                     *           "phoneNumber": "string",
                     *           "loginName": "string",
                     *           "active": true,
                     *           "aadUserId": "string",
                     *           "accountLocked": true,
                     *           "home": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "country": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string"
                     *           },
                     *           "agentId": 0,
                     *           "startDate": "string",
                     *           "terminationDate": "string",
                     *           "hourlyRate": 0,
                     *           "overtimeProfileId": 0,
                     *           "customFields": [
                     *             {
                     *               "typeId": 0,
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "permissions": [
                     *             {
                     *               "id": 0,
                     *               "value": "string"
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_TenantSettings.V2.EmployeeResponse"];
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
    Employees_Create: {
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
                 *       "mobilePhoneNumber": "string",
                 *       "phoneNumber": "string",
                 *       "email": "string",
                 *       "login": "string",
                 *       "password": "string",
                 *       "accountCreationMethod": {},
                 *       "businessUnitId": 0,
                 *       "roleId": 0,
                 *       "positions": [
                 *         "CSR"
                 *       ],
                 *       "aadUserId": "string",
                 *       "customFields": [
                 *         {
                 *           "typeId": 0,
                 *           "value": "string"
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["TenantSettings.V2.EmployeeCreateRequest"];
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
                    "application/json": components["schemas"]["TenantSettings.V2.EmployeeCreateResponse"];
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
    Employees_Get: {
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
                     *       "userId": 0,
                     *       "name": "string",
                     *       "firstName": "string",
                     *       "lastName": "string",
                     *       "managerId": 0,
                     *       "role": {},
                     *       "roleIds": [
                     *         0
                     *       ],
                     *       "businessUnitId": 0,
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "email": "string",
                     *       "phoneNumber": "string",
                     *       "loginName": "string",
                     *       "active": true,
                     *       "aadUserId": "string",
                     *       "accountLocked": true,
                     *       "home": {
                     *         "street": "string",
                     *         "unit": "string",
                     *         "country": "string",
                     *         "city": "string",
                     *         "state": "string",
                     *         "zip": "string"
                     *       },
                     *       "agentId": 0,
                     *       "startDate": "string",
                     *       "terminationDate": "string",
                     *       "hourlyRate": 0,
                     *       "overtimeProfileId": 0,
                     *       "customFields": [
                     *         {
                     *           "typeId": 0,
                     *           "name": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "permissions": [
                     *         {
                     *           "id": 0,
                     *           "value": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["TenantSettings.V2.EmployeeResponse"];
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
            /** @description Employee not found */
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
    Employees_Update: {
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
                 *       "name": "string",
                 *       "mobilePhoneNumber": "string",
                 *       "phoneNumber": "string",
                 *       "email": "string",
                 *       "login": "string",
                 *       "businessUnitId": 0,
                 *       "roleId": 0,
                 *       "positions": [
                 *         "CSR"
                 *       ],
                 *       "aadUserId": "string",
                 *       "customFields": [
                 *         {
                 *           "typeId": 0,
                 *           "value": "string"
                 *         }
                 *       ],
                 *       "accountLocked": true
                 *     }
                 */
                "application/json": components["schemas"]["TenantSettings.V2.EmployeeUpdateRequest"];
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
                    "application/json": components["schemas"]["TenantSettings.V2.EmployeeUpdateResponse"];
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
    Employees_AccountActions: {
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
                 *       "action": {}
                 *     }
                 */
                "application/json": components["schemas"]["TenantSettings.V2.AccountActionRequest"];
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
                     *       "status": {}
                     *     }
                     */
                    "application/json": components["schemas"]["TenantSettings.V2.AccountActionResponse"];
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
    Export_Employees: {
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
                     *           "customFields": [
                     *             {
                     *               "typeId": 0,
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "permissions": [
                     *             {
                     *               "id": 0,
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "id": 0,
                     *           "userId": 0,
                     *           "name": "string",
                     *           "firstName": "string",
                     *           "lastName": "string",
                     *           "managerId": 0,
                     *           "role": {},
                     *           "roleIds": [
                     *             0
                     *           ],
                     *           "businessUnitId": 0,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "email": "string",
                     *           "phoneNumber": "string",
                     *           "loginName": "string",
                     *           "active": true,
                     *           "aadUserId": "string",
                     *           "accountLocked": true,
                     *           "home": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "country": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string"
                     *           },
                     *           "agentId": 0,
                     *           "startDate": "string",
                     *           "terminationDate": "string",
                     *           "hourlyRate": 0,
                     *           "overtimeProfileId": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_TenantSettings.V2.ExportEmployeeResponse"];
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
    Export_Technicians: {
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
                     *           "userId": 0,
                     *           "name": "string",
                     *           "roleIds": [
                     *             0
                     *           ],
                     *           "businessUnitId": 0,
                     *           "mainZoneId": 0,
                     *           "zoneIds": [
                     *             0
                     *           ],
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "email": "string",
                     *           "phoneNumber": "string",
                     *           "loginName": "string",
                     *           "home": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "country": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "streetAddress": "string",
                     *             "latitude": 0,
                     *             "longitude": 0
                     *           },
                     *           "dailyGoal": 0,
                     *           "isManagedTech": true,
                     *           "licenseType": {},
                     *           "customFields": [
                     *             {
                     *               "typeId": 0,
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "active": true,
                     *           "aadUserId": "string",
                     *           "burdenRate": 0,
                     *           "team": "string",
                     *           "jobFilter": {},
                     *           "permissions": [
                     *             {
                     *               "id": 0,
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "accountLocked": true,
                     *           "commissionRate": 0,
                     *           "currentValue": 0,
                     *           "firstName": "string",
                     *           "lastName": "string",
                     *           "hourlyRate": 0,
                     *           "jobId": 0,
                     *           "mobilePhone": "string",
                     *           "outboundCallerId": "string",
                     *           "payrollId": "string",
                     *           "payrollProfileId": 0,
                     *           "appoitmentId": 0,
                     *           "shiftStart": "string",
                     *           "shiftEnd": "string",
                     *           "soldByRate": 0,
                     *           "startDate": "string",
                     *           "status": {},
                     *           "skills": [
                     *             {
                     *               "id": 0,
                     *               "name": "string"
                     *             }
                     *           ],
                     *           "positions": [
                     *             "Installer"
                     *           ],
                     *           "location": {
                     *             "latitude": 0,
                     *             "longitude": 0,
                     *             "coordinatesUpdatedOn": "string"
                     *           },
                     *           "bio": "string",
                     *           "memo": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_TenantSettings.V2.ExportTechnicianResponse"];
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
    Technicians_GetList: {
        parameters: {
            query?: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /** @description Perform lookup by multiple User Ids (maximum 50) */
                userIds?: string;
                /** @description Filters records by name (case-insensitive "contains" operation) */
                name?: string;
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
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
                     *           "userId": 0,
                     *           "name": "string",
                     *           "roleIds": [
                     *             0
                     *           ],
                     *           "businessUnitId": 0,
                     *           "mainZoneId": 0,
                     *           "zoneIds": [
                     *             0
                     *           ],
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "email": "string",
                     *           "phoneNumber": "string",
                     *           "loginName": "string",
                     *           "home": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "country": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "streetAddress": "string",
                     *             "latitude": 0,
                     *             "longitude": 0
                     *           },
                     *           "dailyGoal": 0,
                     *           "isManagedTech": true,
                     *           "licenseType": {},
                     *           "customFields": [
                     *             {
                     *               "typeId": 0,
                     *               "name": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "active": true,
                     *           "aadUserId": "string",
                     *           "burdenRate": 0,
                     *           "team": "string",
                     *           "jobFilter": {},
                     *           "permissions": [
                     *             {
                     *               "id": 0,
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "accountLocked": true,
                     *           "commissionRate": 0,
                     *           "currentValue": 0,
                     *           "firstName": "string",
                     *           "lastName": "string",
                     *           "hourlyRate": 0,
                     *           "jobId": 0,
                     *           "mobilePhone": "string",
                     *           "outboundCallerId": "string",
                     *           "payrollId": "string",
                     *           "payrollProfileId": 0,
                     *           "appoitmentId": 0,
                     *           "shiftStart": "string",
                     *           "shiftEnd": "string",
                     *           "soldByRate": 0,
                     *           "startDate": "string",
                     *           "status": {},
                     *           "skills": [
                     *             {
                     *               "id": 0,
                     *               "name": "string"
                     *             }
                     *           ],
                     *           "positions": [
                     *             "Installer"
                     *           ],
                     *           "location": {
                     *             "latitude": 0,
                     *             "longitude": 0,
                     *             "coordinatesUpdatedOn": "string"
                     *           },
                     *           "bio": "string",
                     *           "memo": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_TenantSettings.V2.TechnicianResponse"];
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
    Technicians_Create: {
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
                 *       "phoneNumber": "string",
                 *       "email": "string",
                 *       "login": "string",
                 *       "password": "string",
                 *       "accountCreationMethod": {},
                 *       "businessUnitId": 0,
                 *       "roleId": 0,
                 *       "positions": [
                 *         "Installer"
                 *       ],
                 *       "aadUserId": "string",
                 *       "licenseType": {},
                 *       "team": "string",
                 *       "dailyGoal": 0,
                 *       "burdenRate": 0,
                 *       "bio": "string",
                 *       "memo": "string",
                 *       "jobFilter": {},
                 *       "jobHistoryDateFilter": {},
                 *       "home": {
                 *         "unit": "string",
                 *         "street": "string",
                 *         "city": "string",
                 *         "state": "string",
                 *         "country": "string",
                 *         "zip": "string",
                 *         "latitude": 0,
                 *         "longitude": 0
                 *       },
                 *       "customFields": [
                 *         {
                 *           "typeId": 0,
                 *           "value": "string"
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["TenantSettings.V2.TechnicianCreateRequest"];
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
                    "application/json": components["schemas"]["TenantSettings.V2.TechnicianCreateResponse"];
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
    Technicians_Get: {
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
                     *       "userId": 0,
                     *       "name": "string",
                     *       "roleIds": [
                     *         0
                     *       ],
                     *       "businessUnitId": 0,
                     *       "mainZoneId": 0,
                     *       "zoneIds": [
                     *         0
                     *       ],
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "email": "string",
                     *       "phoneNumber": "string",
                     *       "loginName": "string",
                     *       "home": {
                     *         "street": "string",
                     *         "unit": "string",
                     *         "country": "string",
                     *         "city": "string",
                     *         "state": "string",
                     *         "zip": "string",
                     *         "streetAddress": "string",
                     *         "latitude": 0,
                     *         "longitude": 0
                     *       },
                     *       "dailyGoal": 0,
                     *       "isManagedTech": true,
                     *       "licenseType": {},
                     *       "customFields": [
                     *         {
                     *           "typeId": 0,
                     *           "name": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "active": true,
                     *       "aadUserId": "string",
                     *       "burdenRate": 0,
                     *       "team": "string",
                     *       "jobFilter": {},
                     *       "permissions": [
                     *         {
                     *           "id": 0,
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "accountLocked": true,
                     *       "commissionRate": 0,
                     *       "currentValue": 0,
                     *       "firstName": "string",
                     *       "lastName": "string",
                     *       "hourlyRate": 0,
                     *       "jobId": 0,
                     *       "mobilePhone": "string",
                     *       "outboundCallerId": "string",
                     *       "payrollId": "string",
                     *       "payrollProfileId": 0,
                     *       "appoitmentId": 0,
                     *       "shiftStart": "string",
                     *       "shiftEnd": "string",
                     *       "soldByRate": 0,
                     *       "startDate": "string",
                     *       "status": {},
                     *       "skills": [
                     *         {
                     *           "id": 0,
                     *           "name": "string"
                     *         }
                     *       ],
                     *       "positions": [
                     *         "Installer"
                     *       ],
                     *       "location": {
                     *         "latitude": 0,
                     *         "longitude": 0,
                     *         "coordinatesUpdatedOn": "string"
                     *       },
                     *       "bio": "string",
                     *       "memo": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["TenantSettings.V2.TechnicianResponse"];
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
            /** @description Technician not found */
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
    Technicians_Update: {
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
                 *       "name": "string",
                 *       "phoneNumber": "string",
                 *       "email": "string",
                 *       "login": "string",
                 *       "businessUnitId": 0,
                 *       "roleId": 0,
                 *       "positions": [
                 *         "Installer"
                 *       ],
                 *       "aadUserId": "string",
                 *       "licenseType": {},
                 *       "team": "string",
                 *       "dailyGoal": 0,
                 *       "burdenRate": 0,
                 *       "bio": "string",
                 *       "memo": "string",
                 *       "jobFilter": {},
                 *       "jobHistoryDateFilter": {},
                 *       "home": {
                 *         "unit": "string",
                 *         "street": "string",
                 *         "city": "string",
                 *         "state": "string",
                 *         "country": "string",
                 *         "zip": "string",
                 *         "latitude": 0,
                 *         "longitude": 0
                 *       },
                 *       "customFields": [
                 *         {
                 *           "typeId": 0,
                 *           "value": "string"
                 *         }
                 *       ],
                 *       "accountLocked": true
                 *     }
                 */
                "application/json": components["schemas"]["TenantSettings.V2.TechnicianUpdateRequest"];
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
                    "application/json": components["schemas"]["TenantSettings.V2.TechnicianUpdateResponse"];
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
    Technicians_AccountActions: {
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
                 *       "action": {},
                 *       "licenseType": {},
                 *       "truckId": 0
                 *     }
                 */
                "application/json": components["schemas"]["TenantSettings.V2.TechnicianAccountActionRequest"];
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
                     *       "status": {}
                     *     }
                     */
                    "application/json": components["schemas"]["TenantSettings.V2.AccountActionResponse"];
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
    UserRoles_GetList: {
        parameters: {
            query?: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /** @description Filters records by name (case-insensitive "contains" operation) */
                name?: string;
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
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
                 * @description Filter roles by employee type\
                 *     Values: [None, Employee, Technician, All]
                 */
                employeeType?: string & components["schemas"]["TenantSettings.V2.RequestedEmployeeTypeArg"];
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
                     *           "createdOn": "string",
                     *           "employeeType": "Employee"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_TenantSettings.V2.UserRoleResponse"];
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
    BusinessUnits_GetList: {
        parameters: {
            query?: {
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
                /** @description Filters records by name (case-insensitive "contains" operation) */
                name?: string;
                /**
                 * @description What kind of items should be returned (only active items will be returned by default)\
                 *     Values: [True, Any, False]
                 */
                active?: string & components["schemas"]["ActiveRequestArg"];
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
                     *           "active": true,
                     *           "name": "string",
                     *           "officialName": "string",
                     *           "email": "string",
                     *           "currency": "string",
                     *           "phoneNumber": "string",
                     *           "invoiceHeader": "string",
                     *           "invoiceMessage": "string",
                     *           "defaultTaxRate": 0,
                     *           "authorizationParagraph": "string",
                     *           "acknowledgementParagraph": "string",
                     *           "address": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "country": "string",
                     *             "latitude": 0,
                     *             "longitude": 0,
                     *             "isManualCoordinates": true,
                     *             "isMilitary": true
                     *           },
                     *           "materialSku": "string",
                     *           "quickbooksClass": "string",
                     *           "accountCode": "string",
                     *           "franchiseId": "string",
                     *           "conceptCode": "string",
                     *           "corporateContractNumber": "string",
                     *           "trade": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "division": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "tagTypeIds": [
                     *             0
                     *           ],
                     *           "tenant": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "accountCode": "string",
                     *             "franchiseId": "string",
                     *             "conceptCode": "string",
                     *             "modifiedOn": "string"
                     *           },
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "externalData": [
                     *             {
                     *               "key": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "certifiedSentriconSpecialistCode": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_TenantSettings.V2.BusinessUnitResponse"];
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
    BusinessUnits_Get: {
        parameters: {
            query?: {
                externalDataApplicationGuid?: string;
            };
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
                     *       "officialName": "string",
                     *       "email": "string",
                     *       "currency": "string",
                     *       "phoneNumber": "string",
                     *       "invoiceHeader": "string",
                     *       "invoiceMessage": "string",
                     *       "defaultTaxRate": 0,
                     *       "authorizationParagraph": "string",
                     *       "acknowledgementParagraph": "string",
                     *       "address": {
                     *         "street": "string",
                     *         "unit": "string",
                     *         "city": "string",
                     *         "state": "string",
                     *         "zip": "string",
                     *         "country": "string",
                     *         "latitude": 0,
                     *         "longitude": 0,
                     *         "isManualCoordinates": true,
                     *         "isMilitary": true
                     *       },
                     *       "materialSku": "string",
                     *       "quickbooksClass": "string",
                     *       "accountCode": "string",
                     *       "franchiseId": "string",
                     *       "conceptCode": "string",
                     *       "corporateContractNumber": "string",
                     *       "trade": {
                     *         "id": 0,
                     *         "name": "string"
                     *       },
                     *       "division": {
                     *         "id": 0,
                     *         "name": "string"
                     *       },
                     *       "tagTypeIds": [
                     *         0
                     *       ],
                     *       "tenant": {
                     *         "id": 0,
                     *         "name": "string",
                     *         "accountCode": "string",
                     *         "franchiseId": "string",
                     *         "conceptCode": "string",
                     *         "modifiedOn": "string"
                     *       },
                     *       "createdOn": "string",
                     *       "modifiedOn": "string",
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "certifiedSentriconSpecialistCode": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["TenantSettings.V2.BusinessUnitResponse"];
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
            /** @description Business unit not found */
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
    BusinessUnits_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description BusinessUnit Id */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description Update BusinessUnit Request */
        requestBody?: {
            content: {
                /**
                 * @example {
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
                "application/json": components["schemas"]["TenantSettings.V2.UpdateBusinessUnitRequest"];
            };
        };
        responses: {
            /** @description Id of the updated BusinessUnit */
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
    Export_BusinessUnits: {
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
                     *           "name": "string",
                     *           "officialName": "string",
                     *           "email": "string",
                     *           "currency": "string",
                     *           "phoneNumber": "string",
                     *           "invoiceHeader": "string",
                     *           "invoiceMessage": "string",
                     *           "defaultTaxRate": 0,
                     *           "authorizationParagraph": "string",
                     *           "acknowledgementParagraph": "string",
                     *           "address": {
                     *             "street": "string",
                     *             "unit": "string",
                     *             "city": "string",
                     *             "state": "string",
                     *             "zip": "string",
                     *             "country": "string",
                     *             "latitude": 0,
                     *             "longitude": 0,
                     *             "isManualCoordinates": true,
                     *             "isMilitary": true
                     *           },
                     *           "materialSku": "string",
                     *           "quickbooksClass": "string",
                     *           "accountCode": "string",
                     *           "franchiseId": "string",
                     *           "conceptCode": "string",
                     *           "corporateContractNumber": "string",
                     *           "trade": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "division": {
                     *             "id": 0,
                     *             "name": "string"
                     *           },
                     *           "tagTypeIds": [
                     *             0
                     *           ],
                     *           "tenant": {
                     *             "id": 0,
                     *             "name": "string",
                     *             "accountCode": "string",
                     *             "franchiseId": "string",
                     *             "conceptCode": "string",
                     *             "modifiedOn": "string"
                     *           },
                     *           "createdOn": "string",
                     *           "modifiedOn": "string",
                     *           "externalData": [
                     *             {
                     *               "key": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "certifiedSentriconSpecialistCode": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_TenantSettings.V2.ExportBusinessUnitResponse"];
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
    Export_TagTypes: {
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
                     *           "color": "string",
                     *           "code": "string",
                     *           "importance": {},
                     *           "isConversionOpportunity": true,
                     *           "allowToUseOnTimesheetActivity": true,
                     *           "isVisibleOnDispatchBoard": true,
                     *           "active": true,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_TenantSettings.V2.ExportTagTypeResponse"];
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
    TagTypes_GetList: {
        parameters: {
            query?: {
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
                createdBefore?: string;
                createdOnOrAfter?: string;
                modifiedBefore?: string;
                modifiedOnOrAfter?: string;
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
                     *           "color": "string",
                     *           "code": "string",
                     *           "importance": {},
                     *           "isConversionOpportunity": true,
                     *           "allowToUseOnTimesheetActivity": true,
                     *           "isVisibleOnDispatchBoard": true,
                     *           "active": true,
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_TenantSettings.V2.TagTypeResponse"];
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
    TagTypes_Create: {
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
                 *       "color": "string",
                 *       "code": "string",
                 *       "importance": {},
                 *       "isConversionOpportunity": true,
                 *       "allowToUseOnTimesheetActivity": true,
                 *       "isVisibleOnDispatchBoard": true
                 *     }
                 */
                "application/json": components["schemas"]["TenantSettings.V2.CreateTagTypeRequest"];
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
        };
    };
    TagTypes_Update: {
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
                 *       "name": "string",
                 *       "color": "string",
                 *       "code": "string",
                 *       "importance": {},
                 *       "isConversionOpportunity": true,
                 *       "allowToUseOnTimesheetActivity": true,
                 *       "isVisibleOnDispatchBoard": true
                 *     }
                 */
                "application/json": components["schemas"]["TenantSettings.V2.UpdateTagTypeRequest"];
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
}
