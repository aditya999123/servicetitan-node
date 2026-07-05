// AUTO-GENERATED — do not edit by hand. Run `npm run generate` to regenerate.

export interface paths {
    "/tenant/{tenant}/clientspecificpricing": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["ClientSpecificPricing_GetAllRateSheets"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/clientspecificpricing/{rateSheetId}": {
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
        patch: operations["ClientSpecificPricing_UpdateRateSheet"];
        trace?: never;
    };
    "/tenant/{tenant}/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** GET the categories in your pricebook */
        get: operations["Categories_GetList"];
        put?: never;
        /** Post to add a new category to your pricebook */
        post: operations["Categories_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/categories/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets category details */
        get: operations["Categories_Get"];
        put?: never;
        post?: never;
        /** Deletes an existing category from your pricebook */
        delete: operations["Categories_Delete"];
        options?: never;
        head?: never;
        /** Edits an existing category in your pricebook */
        patch: operations["Categories_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/discounts-and-fees": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get data on all of the discounts or fees in the pricebook. Supports optional search filtering. */
        get: operations["DiscountAndFees_GetList"];
        put?: never;
        /** Post to add a new discount or fee to your pricebook */
        post: operations["DiscountAndFees_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/discounts-and-fees/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get details of a discount or fee in the pricebook. */
        get: operations["DiscountAndFees_Get"];
        put?: never;
        post?: never;
        /** Deletes a discount or fee from your pricebook */
        delete: operations["DiscountAndFees_Delete"];
        options?: never;
        head?: never;
        /** Edit an existing item in your pricebook */
        patch: operations["DiscountAndFees_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/equipment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get data on all the equipment in the pricebook. Supports optional search filtering. */
        get: operations["Equipment_GetList"];
        put?: never;
        /** Post to add new equipment to your pricebook */
        post: operations["Equipment_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/equipment/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get details of equipment in the pricebook. */
        get: operations["Equipment_Get"];
        put?: never;
        post?: never;
        /** Deletes equipment from your pricebook */
        delete: operations["Equipment_Delete"];
        options?: never;
        head?: never;
        /** Edit an existing item in your pricebook */
        patch: operations["Equipment_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/export/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for categories */
        get: operations["Export_Categories"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/equipment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for equipment */
        get: operations["Export_Equipment"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/services": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for services */
        get: operations["Export_Services"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/export/materials": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Provides export feed for materials */
        get: operations["Export_Materials"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/images": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Downloads a specified pricebook image. */
        get: operations["Images_Get"];
        put?: never;
        /**
         * Uploads a specified image to temporary storage.
         *     To associate the image with a pricebook item, send a separate request to update that item.
         */
        post: operations["Images_Post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/materials": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get details on materials in the pricebook. Supports optional search filtering. */
        get: operations["Materials_GetList"];
        put?: never;
        /** Add a new Materials to your pricebook */
        post: operations["Materials_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/materials/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get details on a material in the pricebook. */
        get: operations["Materials_Get"];
        put?: never;
        post?: never;
        /** Deletes a material from your pricebook */
        delete: operations["Materials_Delete"];
        options?: never;
        head?: never;
        /** Edit an existing item in your pricebook */
        patch: operations["Materials_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/materials/costtypes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get details on materials in the pricebook. */
        get: operations["Materials_GetCostTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/materialsmarkup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get materials markup collection */
        get: operations["MaterialsMarkup_GetList"];
        put?: never;
        /** Create materials markup item */
        post: operations["MaterialsMarkup_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/materialsmarkup/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get materials markup item */
        get: operations["MaterialsMarkup_Get"];
        /** Update materials markup item */
        put: operations["MaterialsMarkup_Update"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/pricebook": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["PricebookBulk_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["PricebookBulk_Update"];
        trace?: never;
    };
    "/tenant/{tenant}/services": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get data on all of the services in the pricebook. Supports optional search filtering. */
        get: operations["Services_GetList"];
        put?: never;
        /** Post to add a new service to your pricebook */
        post: operations["Services_Create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/{tenant}/services/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get details a service in the pricebook. */
        get: operations["Services_Get"];
        put?: never;
        post?: never;
        /** Deletes a service from your pricebook */
        delete: operations["Services_Delete"];
        options?: never;
        head?: never;
        /** Edit an existing item in your pricebook */
        patch: operations["Services_Update"];
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Estimates.V2.ClientSpecificPricingResponse": {
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
            data: components["schemas"]["Estimates.V2.ClientSpecificPricingResponse"][];
        };
        "Estimates.V2.ClientSpecificPricingResponse": {
            /** Format: int64 */
            id: number;
            exceptions: components["schemas"]["Estimates.V2.ClientSpecificPricingExceptionResponse"][];
        };
        "Estimates.V2.ClientSpecificPricingExceptionResponse": {
            /** Format: int64 */
            skuId: number;
            skuType: components["schemas"]["Pricebook.Types.SkuType"];
            /** Format: decimal */
            value: number;
            valueType: components["schemas"]["Pricing.RateSheets.Services.MarkupType"];
        };
        /**
         * @description The type of ISku entity
         * @enum {string}
         */
        "Pricebook.Types.SkuType": "Service" | "Material" | "Equipment" | "PriceModifier";
        /**
         * @description Equipment and Material markup type for rateSheets
         * @enum {string}
         */
        "Pricing.RateSheets.Services.MarkupType": "Percent" | "Dollar" | "Multiplier" | "FlatPrice" | "DiscountPercent";
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
        "Estimates.V2.UpdateClientSpecificPricingResponse": {
            exceptions: components["schemas"]["Estimates.V2.UpdateClientSpecificPricingExceptionResponse"][];
        };
        "Estimates.V2.UpdateClientSpecificPricingExceptionResponse": {
            /** Format: int64 */
            skuId: number;
            /** Format: decimal */
            value: number;
            valueType: components["schemas"]["Pricing.RateSheets.Services.MarkupType"];
        };
        "Estimates.V2.UpdateClientSpecificPricingRequest": {
            exceptions?: components["schemas"]["Estimates.V2.ClientSpecificPricingExceptionRequest"][] | null;
        };
        "Estimates.V2.ClientSpecificPricingExceptionRequest": {
            /** Format: int64 */
            skuId: number;
            /** Format: decimal */
            value: number;
            valueType: components["schemas"]["Pricing.RateSheets.Services.MarkupType"];
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Pricebook.V2.CategoryResponse": {
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
            data: components["schemas"]["Pricebook.V2.CategoryResponse"][];
        };
        "Pricebook.V2.CategoryResponse": {
            /**
             * Format: int64
             * @description The id for the category
             */
            id: number;
            /** @description The name of the category */
            name: string;
            /** @description Active shows if this category is currently active */
            active: boolean;
            /** @description A description that described the category */
            description?: string | null;
            /** @description The image to display as the category */
            image?: string | null;
            /**
             * Format: int64
             * @description The id of the category that is the parent of this item
             */
            parentId?: number | null;
            /**
             * Format: int32
             * @description The position location of this item
             */
            position: number;
            /** @description The category type. This field can be Service or Material. */
            categoryType: components["schemas"]["Pricebook.V2.CategoryType"];
            /** @description The array of the subcategories */
            subcategories?: components["schemas"]["Pricebook.V2.CategoryResponse"][] | null;
            /** @description The business units that are associated with this category */
            businessUnitIds?: number[] | null;
            /** @description The images that will be used for the SKUs under this category */
            skuImages?: string[] | null;
            /** @description The videos that will be used for the videos under this category */
            skuVideos?: string[] | null;
            /** @description The source of the category if it was imported from a catalog */
            source?: string | null;
            /** @description External id is the id of the original source of the item when it comes from a catalog */
            externalId?: string | null;
            /** @description If a category is available in mobile or not */
            hideInMobile: boolean;
            /**
             * Format: date-time
             * @description The date and time when the category was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description The date and time when the category was last modified
             */
            modifiedOn: string;
        };
        /** @enum {string} */
        "Pricebook.V2.CategoryType": "Services" | "Materials";
        "Pricebook.V2.CategoryCreateRequest": {
            /** @description The name of the category */
            name: string;
            /** @description Active shows if this category is currently active */
            active?: boolean | null;
            /** @description A description that described the category */
            description?: string | null;
            /**
             * Format: int64
             * @description The id of the category that is the parent of this item
             */
            parentId?: number | null;
            /**
             * Format: int32
             * @description The position location of this item
             */
            position?: number | null;
            /** @description The image to display as the category */
            image?: string | null;
            /** @description The category type. This field can be Service or Material. */
            categoryType: components["schemas"]["Pricebook.V2.CategoryType"];
            /** @description The business units that are associated with this category */
            businessUnitIds?: number[] | null;
            /** @description The images that will be used for the SKUs under this category */
            skuImages?: string[] | null;
            /** @description The videos that will be used for the videos under this category */
            skuVideos?: string[] | null;
        };
        "Pricebook.V2.CategoryUpdateRequest": {
            /** @description The name of the category */
            name?: string;
            /** @description Active shows if this category is currently active */
            active?: boolean;
            /** @description A description that described the category */
            description?: string;
            /**
             * Format: int64
             * @description The id of the category that is the parent of this item
             */
            parentId?: number | null;
            /**
             * Format: int32
             * @description The position location of this item
             */
            position?: number;
            /** @description The image to display as the category */
            image?: string;
            /** @description The category type. This field can be Service or Material. */
            categoryType?: components["schemas"]["Pricebook.V2.CategoryType"];
            /** @description The business units that are associated with this category */
            businessUnitIds?: number[];
            /** @description The images that will be used for the SKUs under this category */
            skuImages?: (string | null)[];
            /** @description The videos that will be used for the videos under this category */
            skuVideos?: (string | null)[];
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Pricebook.V2.DiscountAndFeesResponse": {
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
            data: components["schemas"]["Pricebook.V2.DiscountAndFeesResponse"][];
        };
        "Pricebook.V2.DiscountAndFeesResponse": {
            /**
             * Format: int64
             * @description Unique id for the discount or fee
             */
            id: number;
            /** @description Type should be entered as Discount or Fee to show the type */
            type: components["schemas"]["Pricebook.V2.PriceModifierType"];
            /** @description Code used for the discount or fee */
            code: string;
            /** @description Name for the discount of fee */
            displayName?: string | null;
            /**
             * Format: html
             * @description Description for the item
             */
            description: string;
            /** @description The amount type takes either "percentage" or "flat " and apply the "amount" field accordingly */
            amountType: components["schemas"]["Pricebook.V2.PriceModifierAmountType"];
            /**
             * Format: decimal
             * @description Amount is either the flat amount or percentage you want discounted/added
             */
            amount: number;
            /**
             * Format: decimal
             * @description The maximum amount that can be applied for this item
             */
            limit: number;
            /** @description Should tax be applied when the item is added on an estimate or invoice */
            taxable: boolean;
            /** @description The category technicians will use to find the item */
            categories?: number[] | null;
            /**
             * Format: decimal
             * @description The number of hours associated with the SKU
             */
            hours: number;
            /** @description Images, videos or PDFs attached to SKU */
            assets?: components["schemas"]["Pricebook.V2.SkuAssetResponse"][] | null;
            /** @description The accounting account assigned to the SKU */
            account?: string | null;
            /** @description A grouping of similar items that you'll then be able to track as a separate columns on the Technical Performance Board. */
            crossSaleGroup?: string | null;
            /** @description Active shows if this item is currently active */
            active: boolean;
            /**
             * Format: decimal
             * @description Flat rate bonus paid for this item
             */
            bonus: number;
            /**
             * Format: decimal
             * @description Percentage rate bonus paid for this item
             */
            commissionBonus: number;
            /** @description PaysCommissions shows if this task pays commission */
            paysCommission: boolean;
            /** @description Exclude from payroll */
            excludeFromPayroll: boolean;
            /**
             * @description List of external data attached to this job,
             *     that corresponds to the application guid provided in the request.
             */
            externalData?: components["schemas"]["Pricebook.V2.ExternalDataModel"][] | null;
            /** @description The Budget CostCode segment for this entity. (Note: BudgetCostType should also be provided) */
            budgetCostCode?: string | null;
            /** @description The Budget CostType segment for this entity (Note: BudgetCostCode should also be provided) */
            budgetCostType?: string | null;
            /**
             * Format: date-time
             * @description The date and time when the discount or fee was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description The date and time when the discount or fee was last modified
             */
            modifiedOn: string;
        };
        /** @enum {string} */
        "Pricebook.V2.PriceModifierType": "Discount" | "Fee";
        /** @enum {string} */
        "Pricebook.V2.PriceModifierAmountType": "Percentage" | "Fixed";
        "Pricebook.V2.SkuAssetResponse": {
            /** @description Asset alias */
            alias?: string | null;
            /** @description Asset file name when downloaded */
            fileName?: string | null;
            /** @description It is the default asset */
            isDefault: boolean;
            /** @description Asset type - image, video or PDF */
            type: components["schemas"]["Pricebook.V2.SkuAssetType"];
            /** @description Asset URL */
            url: string;
        };
        /** @enum {string} */
        "Pricebook.V2.SkuAssetType": "Other" | "Image" | "Video" | "Attachment" | "VideoFile";
        "Pricebook.V2.ExternalDataModel": {
            /** @description External data key. */
            key: string;
            /** @description External data value. */
            value: string;
        };
        "Pricebook.V2.DiscountAndFeesCreateRequest": {
            /** @description Type should be entered as Discount or Fee to show the type */
            type: components["schemas"]["Pricebook.V2.PriceModifierType"];
            /** @description Code used for the discount or fee */
            code: string;
            /** @description Name for the discount of fee */
            displayName?: string | null;
            /**
             * Format: html
             * @description Description for the item
             */
            description: string;
            /** @description The amount type takes either "percentage" or "flat " and apply the "amount" field accordingly */
            amountType: components["schemas"]["Pricebook.V2.PriceModifierAmountType"];
            /**
             * Format: decimal
             * @description Amount is either the flat amount or percentage you want discounted/added
             */
            amount: number;
            /**
             * Format: decimal
             * @description The maximum amount that can be applied for this item
             */
            limit?: number | null;
            /** @description Should tax be applied when the item is added on an estimate or invoice */
            taxable?: boolean | null;
            /** @description The category technicians will use to find the item */
            categories?: number[] | null;
            /**
             * Format: decimal
             * @description The number of hours associated with the SKU
             */
            hours?: number | null;
            /** @description Images, videos or PDFs attached to SKU */
            assets?: components["schemas"]["Pricebook.V2.SkuAssetRequest"][] | null;
            /** @description The accounting account assigned to the SKU */
            account?: string | null;
            /** @description Intacct GL Group Name */
            intacctGlGroupAccount?: string | null;
            /** @description A grouping of similar items that you'll then be able to track as a separate columns on the Technical Performance Board. */
            crossSaleGroup?: string | null;
            /** @description Active shows if this item is currently active */
            active?: boolean | null;
            /**
             * Format: decimal
             * @description Flat rate bonus paid for this item
             */
            bonus?: number | null;
            /**
             * Format: decimal
             * @description Percentage rate bonus paid for this item
             */
            commissionBonus?: number | null;
            /** @description PaysCommissions shows if for this item commission payed */
            paysCommission?: boolean | null;
            /** @description Exclude from payroll */
            excludeFromPayroll?: boolean | null;
            /**
             * @description Optional model that contains a list of external data items
             *     that should be attached to this entity.
             */
            externalData?: components["schemas"]["Pricebook.V2.ExternalDataCreateRequest"] | null;
            /** @description The Budget CostCode segment for this entity. (Note: BudgetCostType should also be provided) */
            budgetCostCode?: string | null;
            /** @description The Budget CostType segment for this entity (Note: BudgetCostCode should also be provided) */
            budgetCostType?: string | null;
        };
        "Pricebook.V2.SkuAssetRequest": {
            /** @description Attached asset type - Image, Video, PDF */
            type: components["schemas"]["Pricebook.V2.SkuAssetType"];
            /** @description Asset file name. Useful when downloading PDFs */
            alias?: string | null;
            /** @description Asset URL to download from */
            url: string;
            /** @description Main asset of the owner */
            isDefault?: boolean | null;
        };
        "Pricebook.V2.ExternalDataCreateRequest": {
            /**
             * Format: guid
             * @description Items that are created with a specific guid, could be fetched/updated/removed
             *     only when the same application guid is provided.
             */
            applicationGuid: string;
            /** @description External data list. */
            externalData: components["schemas"]["Pricebook.V2.ExternalDataModel"][];
        };
        "Pricebook.V2.DiscountAndFeesUpdateRequest": {
            /** @description Type should be entered as Discount or Fee to show the type */
            type?: components["schemas"]["Pricebook.V2.PriceModifierType"];
            /** @description Code used for the discount or fee */
            code?: string;
            /** @description Name for the discount of fee */
            displayName?: string;
            /**
             * Format: html
             * @description Description for the item
             */
            description?: string;
            /** @description The amount type takes either "percentage" or "flat " and apply the "amount" field accordingly */
            amountType?: components["schemas"]["Pricebook.V2.PriceModifierAmountType"];
            /**
             * Format: decimal
             * @description Amount is either the flat amount or percentage you want discounted/added
             */
            amount?: number;
            /** @description Intacct GL Group Name */
            intacctGlGroupAccount?: string;
            /**
             * Format: decimal
             * @description The maximum amount that can be applied for this item
             */
            limit?: number;
            /** @description Should tax be applied when the item is added on an estimate or invoice */
            taxable?: boolean;
            /** @description The category technicians will use to find the item */
            categories?: number[];
            /**
             * Format: decimal
             * @description The number of hours associated with the SKU
             */
            hours?: number;
            /** @description Images, videos or PDFs attached to SKU */
            assets?: components["schemas"]["Pricebook.V2.SkuAssetRequest"][];
            /** @description The accounting account assigned to the SKU */
            account?: string;
            /** @description A grouping of similar items that you'll then be able to track as a separate columns on the Technical Performance Board. */
            crossSaleGroup?: string;
            /** @description Active shows if this item is currently active */
            active?: boolean;
            /**
             * Format: decimal
             * @description Flat rate bonus paid for this item
             */
            bonus?: number;
            /**
             * Format: decimal
             * @description Percentage rate bonus paid for this item
             */
            commissionBonus?: number;
            /** @description PaysCommissions shows if for this item commission payed */
            paysCommission?: boolean;
            /** @description Exclude from payroll */
            excludeFromPayroll?: boolean;
            /** @description External data update model. */
            externalData?: components["schemas"]["Pricebook.V2.ExternalDataUpdateRequest"] | null;
            /** @description The Budget CostCode segment for this entity. (Note: BudgetCostType should also be provided) */
            budgetCostCode?: string;
            /** @description The Budget CostType segment for this entity (Note: BudgetCostCode should also be provided) */
            budgetCostType?: string;
        };
        "Pricebook.V2.ExternalDataUpdateRequest": {
            /**
             * @description External data patch mode.\
             *     "Replace" (default) replaces all existing keys with new values. If job A has custom data with keys X and Y and this field only contains an item
             *     with a key X, then custom data with a key Y on job A will be removed.\
             *     "Merge" will only replace key X in the example above. Keys with null value will be deleted.
             */
            patchMode?: components["schemas"]["Pricebook.V2.ExternalDataPatchMode"] | null;
            /**
             * Format: guid
             * @description Items that are created with a specific guid, could be fetched/updated/removed
             *     only when the same application guid is provided.
             */
            applicationGuid: string;
            /** @description External data list. */
            externalData: components["schemas"]["Pricebook.V2.ExternalDataUpdateModel"][];
        };
        /** @enum {string} */
        "Pricebook.V2.ExternalDataPatchMode": "Replace" | "Merge";
        "Pricebook.V2.ExternalDataUpdateModel": {
            /** @description External data key. */
            key: string;
            /** @description External data value. */
            value?: string | null;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Pricebook.V2.EquipmentResponse": {
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
            data: components["schemas"]["Pricebook.V2.EquipmentResponse"][];
        };
        "Pricebook.V2.EquipmentResponse": {
            /**
             * Format: int64
             * @description Unique id for the SKU
             */
            id: number;
            /** @description Code for the SKU */
            code: string;
            /** @description Name that displays with the SKU */
            displayName?: string | null;
            /**
             * Format: html
             * @description Description on the SKU that is displayed with the item
             */
            description: string;
            /** @description Active shows if the SKU is active or inactive */
            active: boolean;
            /**
             * Format: decimal
             * @description Price of this SKU sold
             */
            price: number;
            /**
             * Format: decimal
             * @description The price if the item is sold to a member
             */
            memberPrice: number;
            /**
             * Format: decimal
             * @description The price of the SKU is sold as an add-on item
             */
            addOnPrice: number;
            /**
             * Format: decimal
             * @description The price if the SKU is sold to a member as an add-on item
             */
            addOnMemberPrice: number;
            /** @description Name of the manufactures */
            manufacturer?: string | null;
            /** @description The model of the equipment */
            model?: string | null;
            /** @description Description of the manufacturer warranty included in this SKU */
            manufacturerWarranty: components["schemas"]["Pricebook.V2.SkuWarrantyResponse"];
            /** @description Description of the manufacturer warranty included in this SKU */
            serviceProviderWarranty: components["schemas"]["Pricebook.V2.SkuWarrantyResponse"];
            /** @description Categories that this SKU belongs to */
            categories: number[];
            /** @description Images, videos or PDFs attached to SKU */
            assets: components["schemas"]["Pricebook.V2.SkuAssetResponse"][];
            /** @description Recommended services and materials to include with this SKU */
            recommendations: components["schemas"]["Pricebook.V2.EquipmentRecommendationResponse"][];
            /** @description Upgrades that can be sold for this SKU */
            upgrades: number[];
            /** @description Array of materials used with this equipment */
            equipmentMaterials: components["schemas"]["Pricebook.V2.SkuLinkResponse"][];
            /** @description The primary vendor you use to acquire this SKU */
            primaryVendor?: components["schemas"]["Pricebook.V2.SkuVendorResponse"] | null;
            /** @description Other vendors that you might go to acquire this SKU */
            otherVendors?: components["schemas"]["Pricebook.V2.SkuVendorResponse"][] | null;
            /** @description The accounting account assigned to the SKU */
            account?: string | null;
            costOfSaleAccount?: string | null;
            assetAccount?: string | null;
            /** @description A grouping of similar items that you'll then be able to track as a separate columns on the Technical Performance Board. */
            crossSaleGroup?: string | null;
            /** @description PaysCommissions shows if this task pays commission */
            paysCommission: boolean;
            /**
             * Format: decimal
             * @description Flat rate bonus paid for this task
             */
            bonus: number;
            /**
             * Format: decimal
             * @description Percentage rate bonus paid for this task
             */
            commissionBonus: number;
            /**
             * Format: decimal
             * @description The number of hours associated with the installing the equipment
             */
            hours: number;
            /** @description Is this SKU taxable */
            taxable: boolean;
            /**
             * Format: decimal
             * @description The cost paid to acquire the material
             */
            cost: number;
            /** @description The unit of measure used for this SKU */
            unitOfMeasure?: string | null;
            /** @description Is this equipment a part of your inventory */
            isInventory: boolean;
            /**
             * Format: date-time
             * @description Timestamp where the item was last modified
             */
            modifiedOn: string;
            /** @description The source catalog for this SKU. */
            source?: string | null;
            /** @description External id is the id of the original source of the item when it comes from a catalog */
            externalId?: string | null;
            /**
             * @description List of external data attached to this job,
             *     that corresponds to the application guid provided in the request.
             */
            externalData?: components["schemas"]["Pricebook.V2.ExternalDataModel"][] | null;
            /** @description Shows if is a Configurable Equipment */
            isConfigurableEquipment: boolean;
            /** @description List of added Variations if is a Configurable Equipment, or else the List of Configurable Equipment assigned to */
            variationsOrConfigurableEquipment?: number[] | null;
            /**
             * Format: int64
             * @description Shows Equipment's Type Id
             */
            typeId?: number | null;
            /** @description Shows if it should be displayed in the amount */
            displayInAmount: boolean;
            /**
             * Format: int64
             * @description The General Ledger Account assigned to the SKU
             */
            generalLedgerAccountId?: number | null;
            /**
             * Format: date-time
             * @description Shows Equipment's Created On Date
             */
            createdOn: string;
            /** @description Default Asset Url */
            defaultAssetUrl?: string | null;
            /** @description The equipment dimensions */
            dimensions?: components["schemas"]["Pricebook.V2.DimensionsResponse"] | null;
            /** @description The Budget CostCode segment for this entity. (Note: BudgetCostType should also be provided) */
            budgetCostCode?: string | null;
            /** @description The Budget CostType segment for this entity (Note: BudgetCostCode should also be provided) */
            budgetCostType?: string | null;
            /** @description Whether the cost is locked from editing */
            isCostLocked?: boolean | null;
            /** @description Whether the price is locked from editing */
            isPriceLocked?: boolean | null;
        };
        "Pricebook.V2.SkuWarrantyResponse": {
            /**
             * Format: int32
             * @description Warranty duration
             */
            duration: number;
            /** @description Description of the warranty included in this SKU */
            description?: string | null;
        };
        "Pricebook.V2.EquipmentRecommendationResponse": {
            /**
             * Format: int64
             * @description SKU unique identifier
             */
            skuId: number;
            /** @description Recommended SKU type (Service or Material) */
            type: components["schemas"]["Pricebook.V2.EquipmentRecommendationType"];
        };
        /** @enum {string} */
        "Pricebook.V2.EquipmentRecommendationType": "Service" | "Material";
        "Pricebook.V2.SkuLinkResponse": {
            /**
             * Format: int64
             * @description Linked SKU unique id
             */
            skuId: number;
            /**
             * Format: decimal
             * @description Quantity of linked SKUs
             */
            quantity: number;
        };
        "Pricebook.V2.SkuVendorResponse": {
            /** Format: int64 */
            id: number;
            vendorName: string;
            /** Format: int64 */
            vendorId: number;
            memo?: string | null;
            vendorPart?: string | null;
            /** Format: decimal */
            cost: number;
            active: boolean;
            primarySubAccount?: components["schemas"]["Pricebook.V2.SkuVendorSubAccountResponse"] | null;
            otherSubAccounts?: components["schemas"]["Pricebook.V2.SkuVendorSubAccountResponse"][] | null;
        };
        "Pricebook.V2.SkuVendorSubAccountResponse": {
            /** Format: int64 */
            id: number;
            /** Format: decimal */
            cost: number;
            accountName: string;
        };
        "Pricebook.V2.DimensionsResponse": {
            /**
             * Format: decimal
             * @description Height
             */
            height?: number | null;
            /**
             * Format: decimal
             * @description Width
             */
            width?: number | null;
            /**
             * Format: decimal
             * @description Depth
             */
            depth?: number | null;
        };
        "Pricebook.V2.EquipmentCreateRequest": {
            /** @description Array of materials used with this equipment */
            equipmentMaterials?: components["schemas"]["Pricebook.V2.SkuLinkRequest"][] | null;
            /** @description Recommended services and materials to include with this SKU */
            recommendations?: components["schemas"]["Pricebook.V2.EquipmentRecommendationRequest"][] | null;
            /** @description Upgrades that can be sold for this SKU */
            upgrades?: number[] | null;
            /** @description Code for the SKU */
            code: string;
            /** @description Name that displays with the SKU */
            displayName?: string | null;
            /**
             * Format: html
             * @description Description on the SKU that is displayed with the item
             */
            description: string;
            /**
             * Format: decimal
             * @description Price of this SKU sold
             */
            price?: number | null;
            /**
             * Format: decimal
             * @description The price if the item is sold to a member
             */
            memberPrice?: number | null;
            /**
             * Format: decimal
             * @description The price of the SKU is sold as an add-on item
             */
            addOnPrice?: number | null;
            /**
             * Format: decimal
             * @description The price if the SKU is sold to a member as an add-on item
             */
            addOnMemberPrice?: number | null;
            /** @description Active shows if the SKU is active or inactive */
            active?: boolean | null;
            /** @description Name of the manufactures */
            manufacturer?: string | null;
            /** @description The model of the equipment */
            model?: string | null;
            /** @description Description of the manufacturer warranty included in this SKU */
            manufacturerWarranty?: components["schemas"]["Pricebook.V2.SkuWarrantyRequest"] | null;
            /** @description Description of the manufacturer warranty included in this SKU */
            serviceProviderWarranty?: components["schemas"]["Pricebook.V2.SkuWarrantyRequest"] | null;
            /** @description Images, videos or PDFs attached to SKU */
            assets?: components["schemas"]["Pricebook.V2.SkuAssetRequest"][] | null;
            /** @description Categories that this SKU belongs to */
            categories?: number[] | null;
            /** @description The primary vendor you use to acquire this SKU */
            primaryVendor?: components["schemas"]["Pricebook.V2.SkuVendorRequest"] | null;
            /** @description Other vendors that you might go to acquire this SKU */
            otherVendors?: components["schemas"]["Pricebook.V2.SkuVendorRequest"][] | null;
            /** @description The accounting account assigned to this SKU */
            account?: string | null;
            costOfSaleAccount?: string | null;
            assetAccount?: string | null;
            /** @description Intacct GL Group Name */
            intacctGlGroupAccount?: string | null;
            /** @description A grouping of similar items that you'll then be able to track as a separate columns on the Technical Performance Board. */
            crossSaleGroup?: string | null;
            /** @description PaysCommissions shows if this task pays commission */
            paysCommission?: boolean | null;
            /**
             * Format: decimal
             * @description Flat rate bonus paid for this task
             */
            bonus?: number | null;
            /**
             * Format: decimal
             * @description Percentage rate bonus paid for this task
             */
            commissionBonus?: number | null;
            /**
             * Format: decimal
             * @description The number of hours associated with the installing the equipment
             */
            hours?: number | null;
            /** @description Is this SKU taxable */
            taxable?: boolean | null;
            /**
             * Format: decimal
             * @description The cost paid to acquire the material
             */
            cost?: number | null;
            /** @description The unit of measure used for this SKU */
            unitOfMeasure?: string | null;
            /** @description Is this equipment a part of your inventory */
            isInventory?: boolean | null;
            /**
             * @description Optional model that contains a list of external data items
             *     that should be attached to this entity.
             */
            externalData?: components["schemas"]["Pricebook.V2.ExternalDataCreateRequest"] | null;
            /** @description Is this a Configurable Equipment */
            isConfigurableEquipment?: boolean | null;
            /** @description Variations to add */
            variationEquipment?: number[] | null;
            /** @description The Budget CostCode segment for this entity. (Note: BudgetCostType should also be provided) */
            budgetCostCode?: string | null;
            /** @description The Budget CostType segment for this entity (Note: BudgetCostCode should also be provided) */
            budgetCostType?: string | null;
            /** @description The equipment dimensions */
            dimensions?: components["schemas"]["Pricebook.V2.DimensionsRequest"] | null;
            /** @description Whether the cost is locked from editing */
            isCostLocked?: boolean | null;
            /** @description Whether the price is locked from editing */
            isPriceLocked?: boolean | null;
        };
        "Pricebook.V2.SkuLinkRequest": {
            /**
             * Format: int64
             * @description Linked SKU unique Id
             */
            skuId: number;
            /**
             * Format: decimal
             * @description Linked SKUs quantity
             */
            quantity: number;
        };
        "Pricebook.V2.EquipmentRecommendationRequest": {
            /** Format: int64 */
            skuId: number;
            type: components["schemas"]["Pricebook.V2.EquipmentRecommendationType"];
        };
        "Pricebook.V2.SkuWarrantyRequest": {
            /**
             * Format: int32
             * @description Warranty duration
             */
            duration: number;
            /** @description Description of the warranty included in this SKU */
            description?: string | null;
        };
        "Pricebook.V2.SkuVendorRequest": {
            /** Format: int64 */
            vendorId: number;
            memo?: string | null;
            vendorPart?: string | null;
            /** Format: decimal */
            cost: number;
            active: boolean;
            primarySubAccount?: components["schemas"]["Pricebook.V2.SkuVendorSubAccountRequest"] | null;
            otherSubAccounts?: components["schemas"]["Pricebook.V2.SkuVendorSubAccountRequest"][] | null;
        };
        "Pricebook.V2.SkuVendorSubAccountRequest": {
            /** Format: decimal */
            cost: number;
            accountName: string;
        };
        "Pricebook.V2.DimensionsRequest": {
            /**
             * Format: decimal
             * @description Height
             */
            height?: number | null;
            /**
             * Format: decimal
             * @description Width
             */
            width?: number | null;
            /**
             * Format: decimal
             * @description Depth
             */
            depth?: number | null;
        };
        "Pricebook.V2.EquipmentUpdateRequest": {
            /** @description Code for the SKU */
            code?: string;
            /** @description Name that displays with the SKU */
            displayName?: string;
            /**
             * Format: html
             * @description Description on the SKU that is displayed with the item
             */
            description?: string;
            /**
             * Format: decimal
             * @description Price of this SKU sold
             */
            price?: number;
            /**
             * Format: decimal
             * @description The price if the item is sold to a member
             */
            memberPrice?: number;
            /**
             * Format: decimal
             * @description The price of the SKU is sold as an add-on item
             */
            addOnPrice?: number;
            /**
             * Format: decimal
             * @description The price if the SKU is sold to a member as an add-on item
             */
            addOnMemberPrice?: number;
            /** @description Active shows if the SKU is active or inactive */
            active?: boolean;
            /** @description Name of the manufactures */
            manufacturer?: string;
            /** @description The model of the equipment */
            model?: string;
            /** @description Description of the manufacturer warranty included in this SKU */
            manufacturerWarranty?: components["schemas"]["Pricebook.V2.SkuWarrantyRequest"];
            /** @description Description of the manufacturer warranty included in this SKU */
            serviceProviderWarranty?: components["schemas"]["Pricebook.V2.SkuWarrantyRequest"];
            /** @description Images, videos or PDFs attached to SKU */
            assets?: components["schemas"]["Pricebook.V2.SkuAssetRequest"][];
            /** @description Recommended services and materials to include with this SKU */
            recommendations?: components["schemas"]["Pricebook.V2.EquipmentRecommendationRequest"][];
            /** @description Upgrades that can be sold for this SKU */
            upgrades?: number[];
            /** @description Array of materials used with this equipment */
            equipmentMaterials?: components["schemas"]["Pricebook.V2.SkuLinkRequest"][];
            /** @description Categories that this SKU belongs to */
            categories?: number[];
            /** @description The primary vendor you use to acquire this SKU */
            primaryVendor?: components["schemas"]["Pricebook.V2.SkuVendorRequest"];
            /** @description Other vendors that you might go to acquire this SKU */
            otherVendors?: components["schemas"]["Pricebook.V2.SkuVendorRequest"][];
            /** @description The accounting account assigned to this SKU */
            account?: string;
            costOfSaleAccount?: string;
            assetAccount?: string;
            /** @description Intacct GL Group Name */
            intacctGlGroupAccount?: string;
            /** @description A grouping of similar items that you'll then be able to track as a separate columns on the Technical Performance Board. */
            crossSaleGroup?: string;
            /** @description PaysCommissions shows if this task pays commission */
            paysCommission?: boolean;
            /**
             * Format: decimal
             * @description Flat rate bonus paid for this task
             */
            bonus?: number;
            /**
             * Format: decimal
             * @description Percentage rate bonus paid for this task
             */
            commissionBonus?: number;
            /**
             * Format: decimal
             * @description The number of hours associated with the installing the equipment
             */
            hours?: number;
            /** @description Is this SKU taxable */
            taxable?: boolean;
            /**
             * Format: decimal
             * @description The cost paid to acquire the material
             */
            cost?: number;
            /** @description The unit of measure used for this SKU */
            unitOfMeasure?: string;
            /** @description Is this equipment a part of your inventory */
            isInventory?: boolean;
            /** @description External data update model. */
            externalData?: components["schemas"]["Pricebook.V2.ExternalDataUpdateRequest"] | null;
            /** @description Is this a Configurable Equipment */
            isConfigurableEquipment?: boolean;
            /** @description Added Variations */
            variationEquipment?: number[];
            /** @description The equipement dimensions */
            dimensions?: components["schemas"]["Pricebook.V2.DimensionsRequest"];
            /** @description The Budget CostCode segment for this entity. (Note: BudgetCostType should also be provided) */
            budgetCostCode?: string;
            /** @description The Budget CostType segment for this entity (Note: BudgetCostCode should also be provided) */
            budgetCostType?: string;
            /** @description Whether the cost is locked from editing */
            isCostLocked?: boolean;
            /** @description Whether the price is locked from editing */
            isPriceLocked?: boolean;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Pricebook.V2.ExportCategoryResponse": {
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
            data: components["schemas"]["Pricebook.V2.ExportCategoryResponse"][];
        };
        "Pricebook.V2.ExportCategoryResponse": {
            /**
             * Format: int64
             * @description The id for the category
             */
            id: number;
            /** @description The name of the category */
            name: string;
            /** @description Active shows if this category is currently active */
            active: boolean;
            /** @description A description that described the category */
            description?: string | null;
            /** @description The image to display as the category */
            image?: string | null;
            /**
             * Format: int64
             * @description The id of the category that is the parent of this item
             */
            parentId?: number | null;
            /**
             * Format: int32
             * @description The position location of this item
             */
            position: number;
            /** @description The category type. This field can be Service or Material. */
            categoryType: components["schemas"]["Pricebook.V2.CategoryType"];
            /** @description The array of the subcategories */
            subcategories?: components["schemas"]["Pricebook.V2.CategoryResponse"][] | null;
            /** @description The business units that are associated with this category */
            businessUnitIds?: number[] | null;
            /** @description The images that will be used for the SKUs under this category */
            skuImages?: string[] | null;
            /** @description The videos that will be used for the videos under this category */
            skuVideos?: string[] | null;
            /** @description The source of the category if it was imported from a catalog */
            source?: string | null;
            /** @description External id is the id of the original source of the item when it comes from a catalog */
            externalId?: string | null;
            /** @description If a category is available in mobile or not */
            hideInMobile: boolean;
            /**
             * Format: date-time
             * @description The date and time when the category was created
             */
            createdOn: string;
            /**
             * Format: date-time
             * @description The date and time when the category was last modified
             */
            modifiedOn: string;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Pricebook.V2.ExportEquipmentResponse": {
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
            data: components["schemas"]["Pricebook.V2.ExportEquipmentResponse"][];
        };
        "Pricebook.V2.ExportEquipmentResponse": {
            /**
             * Format: int64
             * @description Unique id for the SKU
             */
            id: number;
            /** @description Code for the SKU */
            code: string;
            /** @description Name that displays with the SKU */
            displayName?: string | null;
            /**
             * Format: html
             * @description Description on the SKU that is displayed with the item
             */
            description: string;
            /** @description Active shows if the SKU is active or inactive */
            active: boolean;
            /**
             * Format: decimal
             * @description Price of this SKU sold
             */
            price: number;
            /**
             * Format: decimal
             * @description The price if the item is sold to a member
             */
            memberPrice: number;
            /**
             * Format: decimal
             * @description The price of the SKU is sold as an add-on item
             */
            addOnPrice: number;
            /**
             * Format: decimal
             * @description The price if the SKU is sold to a member as an add-on item
             */
            addOnMemberPrice: number;
            /** @description Name of the manufactures */
            manufacturer?: string | null;
            /** @description The model of the equipment */
            model?: string | null;
            /** @description Description of the manufacturer warranty included in this SKU */
            manufacturerWarranty: components["schemas"]["Pricebook.V2.SkuWarrantyResponse"];
            /** @description Description of the manufacturer warranty included in this SKU */
            serviceProviderWarranty: components["schemas"]["Pricebook.V2.SkuWarrantyResponse"];
            /** @description Categories that this SKU belongs to */
            categories: number[];
            /** @description Images, videos or PDFs attached to SKU */
            assets: components["schemas"]["Pricebook.V2.SkuAssetResponse"][];
            /** @description Recommended services and materials to include with this SKU */
            recommendations: components["schemas"]["Pricebook.V2.EquipmentRecommendationResponse"][];
            /** @description Upgrades that can be sold for this SKU */
            upgrades: number[];
            /** @description Array of materials used with this equipment */
            equipmentMaterials: components["schemas"]["Pricebook.V2.SkuLinkResponse"][];
            /** @description The primary vendor you use to acquire this SKU */
            primaryVendor?: components["schemas"]["Pricebook.V2.SkuVendorResponse"] | null;
            /** @description Other vendors that you might go to acquire this SKU */
            otherVendors?: components["schemas"]["Pricebook.V2.SkuVendorResponse"][] | null;
            /** @description The accounting account assigned to the SKU */
            account?: string | null;
            costOfSaleAccount?: string | null;
            assetAccount?: string | null;
            /** @description A grouping of similar items that you'll then be able to track as a separate columns on the Technical Performance Board. */
            crossSaleGroup?: string | null;
            /** @description PaysCommissions shows if this task pays commission */
            paysCommission: boolean;
            /**
             * Format: decimal
             * @description Flat rate bonus paid for this task
             */
            bonus: number;
            /**
             * Format: decimal
             * @description Percentage rate bonus paid for this task
             */
            commissionBonus: number;
            /**
             * Format: decimal
             * @description The number of hours associated with the installing the equipment
             */
            hours: number;
            /** @description Is this SKU taxable */
            taxable: boolean;
            /**
             * Format: decimal
             * @description The cost paid to acquire the material
             */
            cost: number;
            /** @description The unit of measure used for this SKU */
            unitOfMeasure?: string | null;
            /** @description Is this equipment a part of your inventory */
            isInventory: boolean;
            /**
             * Format: date-time
             * @description Timestamp where the item was last modified
             */
            modifiedOn: string;
            /** @description The source catalog for this SKU. */
            source?: string | null;
            /** @description External id is the id of the original source of the item when it comes from a catalog */
            externalId?: string | null;
            /**
             * @description List of external data attached to this job,
             *     that corresponds to the application guid provided in the request.
             */
            externalData?: components["schemas"]["Pricebook.V2.ExternalDataModel"][] | null;
            /** @description Shows if is a Configurable Equipment */
            isConfigurableEquipment: boolean;
            /** @description List of added Variations if is a Configurable Equipment, or else the List of Configurable Equipment assigned to */
            variationsOrConfigurableEquipment?: number[] | null;
            /**
             * Format: int64
             * @description Shows Equipment's Type Id
             */
            typeId?: number | null;
            /** @description Shows if it should be displayed in the amount */
            displayInAmount: boolean;
            /**
             * Format: int64
             * @description The General Ledger Account assigned to the SKU
             */
            generalLedgerAccountId?: number | null;
            /**
             * Format: date-time
             * @description Shows Equipment's Created On Date
             */
            createdOn: string;
            /** @description Default Asset Url */
            defaultAssetUrl?: string | null;
            /** @description The equipment dimensions */
            dimensions?: components["schemas"]["Pricebook.V2.DimensionsResponse"] | null;
            /** @description The Budget CostCode segment for this entity. (Note: BudgetCostType should also be provided) */
            budgetCostCode?: string | null;
            /** @description The Budget CostType segment for this entity (Note: BudgetCostCode should also be provided) */
            budgetCostType?: string | null;
            /** @description Whether the cost is locked from editing */
            isCostLocked?: boolean | null;
            /** @description Whether the price is locked from editing */
            isPriceLocked?: boolean | null;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Pricebook.V2.ExportServiceResponse": {
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
            data: components["schemas"]["Pricebook.V2.ExportServiceResponse"][];
        };
        "Pricebook.V2.ExportServiceResponse": {
            /**
             * Format: int64
             * @description Unique id for the SKU
             */
            id: number;
            /** @description Code for the SKU */
            code: string;
            /** @description Name that displays with the SKU */
            displayName?: string | null;
            /**
             * Format: html
             * @description Description on the SKU that is displayed with the item
             */
            description: string;
            /** @description Description of the warranty included in this SKU */
            warranty?: components["schemas"]["Pricebook.V2.SkuWarrantyResponse"] | null;
            /** @description Categories that this SKU belongs to */
            categories: components["schemas"]["Pricebook.V2.SkuCategoryResponse"][];
            /**
             * Format: decimal
             * @description Price of this SKU sold
             */
            price: number;
            /**
             * Format: decimal
             * @description The price if the item is sold to a member
             */
            memberPrice: number;
            /**
             * Format: decimal
             * @description The price of the SKU is sold as an add-on item
             */
            addOnPrice: number;
            /**
             * Format: decimal
             * @description The price if the SKU is sold to a member as an add-on item
             */
            addOnMemberPrice: number;
            /** @description Is this SKU taxable */
            taxable: boolean;
            /** @description The accounting account assigned to this SKU */
            account?: string | null;
            /**
             * Format: decimal
             * @description Hours needed to complete this service
             */
            hours: number;
            /** @description Is a labor service */
            isLabor?: boolean | null;
            /** @description Recommended other service or materials to include with this SKU */
            recommendations: number[];
            /** @description Upgrades that can be sold for this SKU */
            upgrades: number[];
            /** @description Images, videos or PDFs attached to SKU */
            assets: components["schemas"]["Pricebook.V2.SkuAssetResponse"][];
            /** @description Array of materials that is used with this service */
            serviceMaterials: components["schemas"]["Pricebook.V2.SkuLinkResponse"][];
            /** @description Array of equipment used with this service */
            serviceEquipment: components["schemas"]["Pricebook.V2.SkuLinkResponse"][];
            /** @description Active shows if the SKU is active or inactive */
            active: boolean;
            /** @description A grouping of similar items that you'll then be able to track as a separate columns on the Technical Performance Board. */
            crossSaleGroup?: string | null;
            /** @description PaysCommissions shows if this task pays commission */
            paysCommission: boolean;
            /**
             * Format: decimal
             * @description Flat rate bonus paid for this task
             */
            bonus: number;
            /**
             * Format: decimal
             * @description Percentage rate bonus paid for this task
             */
            commissionBonus: number;
            /**
             * Format: date-time
             * @description Timestamp when the item was last modified
             */
            modifiedOn: string;
            /** @description The source catalog for this SKU. */
            source?: string | null;
            /** @description External id is the id of the original source of the item when it comes from a catalog */
            externalId?: string | null;
            /**
             * @description List of external data attached to this job,
             *     that corresponds to the application guid provided in the request.
             */
            externalData?: components["schemas"]["Pricebook.V2.ExternalDataModel"][] | null;
            /**
             * Format: int64
             * @description Service's Bussiness Unit Id
             */
            businessUnitId?: number | null;
            /**
             * Format: decimal
             * @description Service Cost
             */
            cost: number;
            /**
             * Format: date-time
             * @description Timestamp when the item was created
             */
            createdOn: string;
            /**
             * Format: decimal
             * @description Sold by commission
             */
            soldByCommission: number;
            /** @description Default Asset Url */
            defaultAssetUrl?: string | null;
            /** @description The Budget CostCode segment for this entity. (Note: BudgetCostType should also be provided) */
            budgetCostCode?: string | null;
            /** @description The Budget CostType segment for this entity (Note: BudgetCostCode should also be provided) */
            budgetCostType?: string | null;
            /** @description Whether the price is locked from editing */
            isPriceLocked?: boolean | null;
        };
        "Pricebook.V2.SkuCategoryResponse": {
            /**
             * Format: int64
             * @description Unique Category Id
             */
            id: number;
            /** @description Category name */
            name: string;
            /** @description Active shows if the Category is active or inactive */
            active: boolean;
        };
        /** @description Represents export API response. */
        "ExportResponse_Of_Pricebook.V2.ExportMaterialResponse": {
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
            data: components["schemas"]["Pricebook.V2.ExportMaterialResponse"][];
        };
        "Pricebook.V2.ExportMaterialResponse": {
            /**
             * Format: int64
             * @description Unique id for the SKU
             */
            id: number;
            /** @description Code for the SKU */
            code: string;
            /** @description Name that displays with the SKU */
            displayName?: string | null;
            /**
             * Format: html
             * @description Description on the SKU that is displayed with the item
             */
            description: string;
            /**
             * Format: decimal
             * @description The cost paid to acquire the material
             */
            cost: number;
            /** @description Active shows if the SKU is active or inactive */
            active: boolean;
            /**
             * Format: decimal
             * @description Price of this SKU sold
             */
            price: number;
            /**
             * Format: decimal
             * @description The price if the item is sold to a member
             */
            memberPrice: number;
            /**
             * Format: decimal
             * @description The price of the SKU is sold as an add-on item
             */
            addOnPrice: number;
            /**
             * Format: decimal
             * @description The price if the SKU is sold to a member as an add-on item
             */
            addOnMemberPrice: number;
            /**
             * Format: decimal
             * @description The number of hours associated with the installing the material
             */
            hours: number;
            /**
             * Format: decimal
             * @description Flat rate bonus paid for this task
             */
            bonus: number;
            /**
             * Format: decimal
             * @description Percentage rate bonus paid for this task
             */
            commissionBonus: number;
            /** @description PaysCommissions shows if this task pays commission */
            paysCommission: boolean;
            /** @description Is this deducted as job cost */
            deductAsJobCost: boolean;
            /** @description The unit of measure used for this SKU */
            unitOfMeasure?: string | null;
            /** @description Is this material a part of your inventory */
            isInventory: boolean;
            /** @description The accounting account assigned to the SKU */
            account?: string | null;
            costOfSaleAccount?: string | null;
            assetAccount?: string | null;
            /** @description Is this SKU taxable */
            taxable?: boolean | null;
            /** @description The primary vendor you use to acquire this SKU */
            primaryVendor?: components["schemas"]["Pricebook.V2.SkuVendorResponse"] | null;
            /** @description Other vendors that you might go to acquire this SKU */
            otherVendors?: components["schemas"]["Pricebook.V2.SkuVendorResponse"][] | null;
            /** @description Categories that this SKU belongs to */
            categories: number[];
            /** @description Images, videos or PDFs attached to SKU */
            assets: components["schemas"]["Pricebook.V2.SkuAssetResponse"][];
            /**
             * Format: date-time
             * @description Timestamp where the item was last modified
             */
            modifiedOn: string;
            /** @description The source catalog for this SKU. */
            source?: string | null;
            /** @description External id is the id of the original source of the item when it comes from a catalog */
            externalId?: string | null;
            /**
             * @description List of external data attached to this job,
             *     that corresponds to the application guid provided in the request.
             */
            externalData?: components["schemas"]["Pricebook.V2.ExternalDataModel"][] | null;
            /** @description Shows if is a Configurable Material */
            isConfigurableMaterial: boolean;
            /** @description Shows if material is going to be chargeable by default on Estimate or Invoice */
            chargeableByDefault: boolean;
            /** @description List of added Variations if is a Configurable Material, or else the List of Configurable Materials assigned to */
            variationsOrConfigurableMaterials?: number[] | null;
            /**
             * Format: int64
             * @description Material's business unit id
             */
            businessUnitId?: number | null;
            /**
             * Format: int64
             * @description Material's created by user id
             */
            createdById: number;
            /**
             * Format: date-time
             * @description Date Material was created
             */
            createdOn: string;
            /** @description Shows if material is going to be displayed in amount */
            displayInAmount: boolean;
            /**
             * Format: int64
             * @description Material's General Ledger Account Id
             */
            generalLedgerAccountId?: number | null;
            /** @description Shows if is Other Direct Cost */
            isOtherDirectCost: boolean;
            /**
             * Format: int64
             * @description The Cost Type of this Other Direct Cost
             */
            costTypeId?: number | null;
            /** @description Default Asset Url */
            defaultAssetUrl?: string | null;
            /** @description The Budget CostCode segment for this entity. (Note: BudgetCostType should also be provided) */
            budgetCostCode?: string | null;
            /** @description The Budget CostType segment for this entity (Note: BudgetCostCode should also be provided) */
            budgetCostType?: string | null;
            /** @description Whether the cost is locked from editing */
            isCostLocked?: boolean | null;
            /** @description Whether the price is locked from editing */
            isPriceLocked?: boolean | null;
            /** @description When true, EPA number and active ingredients may be recorded for this chemical material. */
            isChemical?: boolean | null;
            /** @description Optional EPA registration number when IsChemical is true. */
            epaNumber?: string | null;
            /** @description Optional active ingredients text when IsChemical is true. */
            activeIngredients?: string | null;
        };
        "Pricebook.V2.ImageUploadResponse": {
            /** @description The storage path where the image was uploaded */
            path: string;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Pricebook.V2.MaterialResponse": {
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
            data: components["schemas"]["Pricebook.V2.MaterialResponse"][];
        };
        "Pricebook.V2.MaterialResponse": {
            /**
             * Format: int64
             * @description Unique id for the SKU
             */
            id: number;
            /** @description Code for the SKU */
            code: string;
            /** @description Name that displays with the SKU */
            displayName?: string | null;
            /**
             * Format: html
             * @description Description on the SKU that is displayed with the item
             */
            description: string;
            /**
             * Format: decimal
             * @description The cost paid to acquire the material
             */
            cost: number;
            /** @description Active shows if the SKU is active or inactive */
            active: boolean;
            /**
             * Format: decimal
             * @description Price of this SKU sold
             */
            price: number;
            /**
             * Format: decimal
             * @description The price if the item is sold to a member
             */
            memberPrice: number;
            /**
             * Format: decimal
             * @description The price of the SKU is sold as an add-on item
             */
            addOnPrice: number;
            /**
             * Format: decimal
             * @description The price if the SKU is sold to a member as an add-on item
             */
            addOnMemberPrice: number;
            /**
             * Format: decimal
             * @description The number of hours associated with the installing the material
             */
            hours: number;
            /**
             * Format: decimal
             * @description Flat rate bonus paid for this task
             */
            bonus: number;
            /**
             * Format: decimal
             * @description Percentage rate bonus paid for this task
             */
            commissionBonus: number;
            /** @description PaysCommissions shows if this task pays commission */
            paysCommission: boolean;
            /** @description Is this deducted as job cost */
            deductAsJobCost: boolean;
            /** @description The unit of measure used for this SKU */
            unitOfMeasure?: string | null;
            /** @description Is this material a part of your inventory */
            isInventory: boolean;
            /** @description The accounting account assigned to the SKU */
            account?: string | null;
            costOfSaleAccount?: string | null;
            assetAccount?: string | null;
            /** @description Is this SKU taxable */
            taxable?: boolean | null;
            /** @description The primary vendor you use to acquire this SKU */
            primaryVendor?: components["schemas"]["Pricebook.V2.SkuVendorResponse"] | null;
            /** @description Other vendors that you might go to acquire this SKU */
            otherVendors?: components["schemas"]["Pricebook.V2.SkuVendorResponse"][] | null;
            /** @description Categories that this SKU belongs to */
            categories: number[];
            /** @description Images, videos or PDFs attached to SKU */
            assets: components["schemas"]["Pricebook.V2.SkuAssetResponse"][];
            /**
             * Format: date-time
             * @description Timestamp where the item was last modified
             */
            modifiedOn: string;
            /** @description The source catalog for this SKU. */
            source?: string | null;
            /** @description External id is the id of the original source of the item when it comes from a catalog */
            externalId?: string | null;
            /**
             * @description List of external data attached to this job,
             *     that corresponds to the application guid provided in the request.
             */
            externalData?: components["schemas"]["Pricebook.V2.ExternalDataModel"][] | null;
            /** @description Shows if is a Configurable Material */
            isConfigurableMaterial: boolean;
            /** @description Shows if material is going to be chargeable by default on Estimate or Invoice */
            chargeableByDefault: boolean;
            /** @description List of added Variations if is a Configurable Material, or else the List of Configurable Materials assigned to */
            variationsOrConfigurableMaterials?: number[] | null;
            /**
             * Format: int64
             * @description Material's business unit id
             */
            businessUnitId?: number | null;
            /**
             * Format: int64
             * @description Material's created by user id
             */
            createdById: number;
            /**
             * Format: date-time
             * @description Date Material was created
             */
            createdOn: string;
            /** @description Shows if material is going to be displayed in amount */
            displayInAmount: boolean;
            /**
             * Format: int64
             * @description Material's General Ledger Account Id
             */
            generalLedgerAccountId?: number | null;
            /** @description Shows if is Other Direct Cost */
            isOtherDirectCost: boolean;
            /**
             * Format: int64
             * @description The Cost Type of this Other Direct Cost
             */
            costTypeId?: number | null;
            /** @description Default Asset Url */
            defaultAssetUrl?: string | null;
            /** @description The Budget CostCode segment for this entity. (Note: BudgetCostType should also be provided) */
            budgetCostCode?: string | null;
            /** @description The Budget CostType segment for this entity (Note: BudgetCostCode should also be provided) */
            budgetCostType?: string | null;
            /** @description Whether the cost is locked from editing */
            isCostLocked?: boolean | null;
            /** @description Whether the price is locked from editing */
            isPriceLocked?: boolean | null;
            /** @description When true, EPA number and active ingredients may be recorded for this chemical material. */
            isChemical?: boolean | null;
            /** @description Optional EPA registration number when IsChemical is true. */
            epaNumber?: string | null;
            /** @description Optional active ingredients text when IsChemical is true. */
            activeIngredients?: string | null;
        };
        "Pricebook.V2.MaterialCreateRequest": {
            /** @description Code for the SKU */
            code: string;
            /** @description Name that displays with the SKU */
            displayName?: string | null;
            /**
             * Format: html
             * @description Description on the SKU that is displayed with the item
             */
            description: string;
            /**
             * Format: decimal
             * @description The cost paid to acquire the material
             */
            cost?: number | null;
            /** @description Active shows if the SKU is active or inactive */
            active?: boolean | null;
            /**
             * Format: decimal
             * @description Price of this SKU sold
             */
            price?: number | null;
            /**
             * Format: decimal
             * @description The price if the item is sold to a member
             */
            memberPrice?: number | null;
            /**
             * Format: decimal
             * @description The price of the SKU is sold as an add-on item
             */
            addOnPrice?: number | null;
            /**
             * Format: decimal
             * @description The price if the SKU is sold to a member as an add-on item
             */
            addOnMemberPrice?: number | null;
            /**
             * Format: decimal
             * @description The number of hours associated with the installing the material
             */
            hours?: number | null;
            /**
             * Format: decimal
             * @description Flat rate bonus paid for this task
             */
            bonus?: number | null;
            /**
             * Format: decimal
             * @description Percentage rate bonus paid for this task
             */
            commissionBonus?: number | null;
            /** @description PaysCommissions shows if this task pays commission */
            paysCommission?: boolean | null;
            /** @description Is this deducted as job cost */
            deductAsJobCost?: boolean | null;
            /** @description The unit of measure used for this SKU */
            unitOfMeasure?: string | null;
            /** @description Is this equipment a part of your inventory */
            isInventory?: boolean | null;
            /** @description The accounting account assigned to this SKU */
            account?: string | null;
            costOfSaleAccount?: string | null;
            assetAccount?: string | null;
            /** @description Intacct GL Group Name */
            intacctGlGroupAccount?: string | null;
            /** @description Is this SKU taxable */
            taxable?: boolean | null;
            /** @description The primary vendor you use to acquire this SKU */
            primaryVendor?: components["schemas"]["Pricebook.V2.SkuVendorRequest"] | null;
            /** @description Other vendors that you might go to acquire this SKU */
            otherVendors?: components["schemas"]["Pricebook.V2.SkuVendorRequest"][] | null;
            /** @description Images, videos or PDFs attached to SKU */
            assets?: components["schemas"]["Pricebook.V2.SkuAssetRequest"][] | null;
            /** @description Categories that this SKU belongs to */
            categories?: number[] | null;
            /**
             * @description Optional model that contains a list of external data items
             *     that should be attached to this entity.
             */
            externalData?: components["schemas"]["Pricebook.V2.ExternalDataCreateRequest"] | null;
            /** @description Is this a Configurable Material */
            isConfigurableMaterial?: boolean | null;
            /** @description Is this Chargeable by default */
            chargeableByDefault?: boolean | null;
            /** @description Variations to add */
            variationMaterials?: number[] | null;
            /** @description Is Other Direct Cost (false by default) */
            isOtherDirectCost?: boolean | null;
            /**
             * Format: int64
             * @description The Cost Type of the Other Direct Cost
             */
            costTypeId?: number | null;
            /** @description The Budget CostCode segment for this entity. (Note: BudgetCostType should also be provided) */
            budgetCostCode?: string | null;
            /** @description The Budget CostType segment for this entity (Note: BudgetCostCode should also be provided) */
            budgetCostType?: string | null;
            /** @description Whether the cost is locked from editing */
            isCostLocked?: boolean | null;
            /** @description Whether the price is locked from editing */
            isPriceLocked?: boolean | null;
            /** @description When true, EPA number and active ingredients may be recorded for this chemical material. */
            isChemical?: boolean | null;
            /** @description Optional EPA registration number (up to 500 characters) when IsChemical is true. */
            epaNumber?: string | null;
            /** @description Optional active ingredients (up to 500 characters) when IsChemical is true. */
            activeIngredients?: string | null;
        };
        "Pricebook.V2.MaterialUpdateRequest": {
            /** @description Code for the SKU */
            code?: string;
            /** @description Name that displays with the SKU */
            displayName?: string;
            /**
             * Format: html
             * @description Description on the SKU that is displayed with the item
             */
            description?: string;
            /**
             * Format: decimal
             * @description The cost paid to acquire the material
             */
            cost?: number;
            /** @description Active shows if the SKU is active or inactive */
            active?: boolean;
            /**
             * Format: decimal
             * @description Price of this SKU sold
             */
            price?: number;
            /**
             * Format: decimal
             * @description The price if the item is sold to a member
             */
            memberPrice?: number;
            /**
             * Format: decimal
             * @description The price of the SKU is sold as an add-on item
             */
            addOnPrice?: number;
            /**
             * Format: decimal
             * @description The price if the SKU is sold to a member as an add-on item
             */
            addOnMemberPrice?: number;
            /**
             * Format: decimal
             * @description The number of hours associated with the installing the material
             */
            hours?: number;
            /**
             * Format: decimal
             * @description Flat rate bonus paid for this task
             */
            bonus?: number;
            /**
             * Format: decimal
             * @description Percentage rate bonus paid for this task
             */
            commissionBonus?: number;
            /** @description PaysCommissions shows if this task pays commission */
            paysCommission?: boolean;
            /** @description Is this deducted as job cost */
            deductAsJobCost?: boolean;
            /** @description The unit of measure used for this SKU */
            unitOfMeasure?: string;
            /** @description Is this material a part of your inventory */
            isInventory?: boolean;
            /** @description The accounting account assigned to this SKU */
            account?: string;
            costOfSaleAccount?: string;
            assetAccount?: string;
            /** @description Intacct GL Group Name */
            intacctGlGroupAccount?: string;
            /** @description Is this SKU taxable */
            taxable?: boolean;
            /** @description The primary vendor you use to acquire this SKU */
            primaryVendor?: components["schemas"]["Pricebook.V2.SkuVendorRequest"];
            /** @description Other vendors that you might go to acquire this SKU */
            otherVendors?: components["schemas"]["Pricebook.V2.SkuVendorRequest"][];
            /** @description Images, videos or PDFs attached to SKU */
            assets?: components["schemas"]["Pricebook.V2.SkuAssetRequest"][];
            /** @description Categories that this SKU belongs to */
            categories?: number[];
            /** @description External data update model. */
            externalData?: components["schemas"]["Pricebook.V2.ExternalDataUpdateRequest"] | null;
            /** @description Is this a Configurable Material */
            isConfigurableMaterial?: boolean;
            /** @description Is this Chargeable by default */
            chargeableByDefault?: boolean;
            /** @description Added Variations */
            variationMaterials?: number[];
            /**
             * Format: int64
             * @description The Cost Type of the Other Direct Cost
             */
            costTypeId?: number | null;
            /** @description The Budget CostCode segment for this entity. (Note: BudgetCostType should also be provided) */
            budgetCostCode?: string;
            /** @description The Budget CostType segment for this entity (Note: BudgetCostCode should also be provided) */
            budgetCostType?: string;
            /** @description Whether the cost is locked from editing */
            isCostLocked?: boolean;
            /** @description Whether the price is locked from editing */
            isPriceLocked?: boolean;
            /** @description When true, EPA number and active ingredients may be recorded for this chemical material. */
            isChemical?: boolean;
            /** @description Optional EPA registration number (up to 500 characters) when chemical tracking applies. */
            epaNumber?: string;
            /** @description Optional active ingredients (up to 500 characters) when chemical tracking applies. */
            activeIngredients?: string;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Pricebook.V2.CostTypeResponse": {
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
            data: components["schemas"]["Pricebook.V2.CostTypeResponse"][];
        };
        "Pricebook.V2.CostTypeResponse": {
            /**
             * Format: int64
             * @description Unique id for the Cost Type
             */
            id: number;
            /** @description Cost Type Name */
            name?: string | null;
        };
        "CollectionResult_Of_Pricebook.V2.MaterialsMarkupResponse": {
            data: components["schemas"]["Pricebook.V2.MaterialsMarkupResponse"][];
            /** Format: int32 */
            page: number;
            /** Format: int32 */
            pageSize: number;
            /** Format: int32 */
            totalCount: number;
            hasMore: boolean;
        };
        "Pricebook.V2.MaterialsMarkupResponse": {
            /** Format: int64 */
            id: number;
            /** Format: decimal */
            from: number;
            /** Format: decimal */
            to: number;
            /** Format: decimal */
            percent: number;
        };
        "Result_Of_Pricebook.V2.MaterialsMarkupResponse": {
            data: components["schemas"]["Pricebook.V2.MaterialsMarkupResponse"];
        };
        "Pricebook.V2.MaterialsMarkupRequest": {
            /** Format: int64 */
            id: number;
            /** Format: decimal */
            from: number;
            /** Format: decimal */
            to: number;
            /** Format: decimal */
            percent: number;
        };
        "Pricebook.V2.PricebookBulkCreateResponse": {
            services?: components["schemas"]["Pricebook.V2.CustomIdMappingModel"][] | null;
            equipment?: components["schemas"]["Pricebook.V2.CustomIdMappingModel"][] | null;
            materials?: components["schemas"]["Pricebook.V2.CustomIdMappingModel"][] | null;
            discountAndFees?: components["schemas"]["Pricebook.V2.CustomIdMappingModel"][] | null;
        };
        "Pricebook.V2.CustomIdMappingModel": {
            customId: string;
            /** Format: int64 */
            id: number;
        };
        "Pricebook.V2.PricebookBulkCreateRequest": {
            services?: components["schemas"]["Pricebook.V2.ServiceBulkCreateRequest"][] | null;
            equipment?: components["schemas"]["Pricebook.V2.EquipmentBulkCreateRequest"][] | null;
            materials?: components["schemas"]["Pricebook.V2.MaterialBulkCreateRequest"][] | null;
            discountAndFees?: components["schemas"]["Pricebook.V2.DiscountAndFeesBulkCreateRequest"][] | null;
        };
        "Pricebook.V2.ServiceBulkCreateRequest": {
            /** @description Array of materials linked to the service */
            serviceMaterials?: components["schemas"]["Pricebook.V2.SkuLinkBulkCreateRequest"][] | null;
            /** @description Array of equipment linked to the service */
            serviceEquipment?: components["schemas"]["Pricebook.V2.SkuLinkBulkCreateRequest"][] | null;
            /** @description Recommended services and materials to include with this SKU */
            recommendations?: components["schemas"]["Pricebook.V2.ServiceRecommendationBulkCreateRequest"][] | null;
            /** @description Upgrades that can be sold for this SKU */
            upgrades?: components["schemas"]["Pricebook.V2.SkuUpgradeBulkCreateRequest"][] | null;
            /** @description Code for the SKU */
            code: string;
            /** @description Name that displays with the SKU */
            displayName?: string | null;
            /**
             * Format: html
             * @description Description on the SKU that is displayed with the item
             */
            description: string;
            /** @description Description of the warranty included in this SKU */
            warranty?: components["schemas"]["Pricebook.V2.SkuWarrantyRequest"] | null;
            /** @description Categories that this SKU belongs to */
            categories?: number[] | null;
            /**
             * Format: decimal
             * @description Price of this SKU sold
             */
            price?: number | null;
            /**
             * Format: decimal
             * @description The price if the item is sold to a member
             */
            memberPrice?: number | null;
            /**
             * Format: decimal
             * @description The price of the SKU is sold as an add-on item
             */
            addOnPrice?: number | null;
            /**
             * Format: decimal
             * @description The price if the SKU is sold to a member as an add-on item
             */
            addOnMemberPrice?: number | null;
            /** @description Is this SKU taxable */
            taxable?: boolean | null;
            /** @description The accounting account assigned to this SKU */
            account?: string | null;
            /** @description Intacct GL Group Name */
            intacctGlGroupAccount?: string | null;
            /**
             * Format: decimal
             * @description Hours needed to complete this service
             */
            hours?: number | null;
            /** @description Is a labor service */
            isLabor?: boolean | null;
            /** @description Images, videos or PDFs attached to SKU */
            assets?: components["schemas"]["Pricebook.V2.SkuAssetRequest"][] | null;
            /** @description Active shows if the SKU is active or inactive */
            active?: boolean | null;
            /** @description A grouping of similar items that you'll then be able to track as a separate columns on the Technical Performance Board. */
            crossSaleGroup?: string | null;
            /** @description True if this task pays commission */
            paysCommission?: boolean | null;
            /**
             * Format: decimal
             * @description Flat rate bonus paid for this task
             */
            bonus?: number | null;
            /**
             * Format: decimal
             * @description Percentage rate bonus paid for this task
             */
            commissionBonus?: number | null;
            /**
             * @description Optional model that contains a list of external data items
             *     that should be attached to this entity.
             */
            externalData?: components["schemas"]["Pricebook.V2.ExternalDataCreateRequest"] | null;
            /** @description The Budget CostCode segment for this entity. (Note: BudgetCostType should also be provided) */
            budgetCostCode?: string | null;
            /** @description The Budget CostType segment for this entity (Note: BudgetCostCode should also be provided) */
            budgetCostType?: string | null;
            /** @description Whether the price is locked from editing */
            isPriceLocked?: boolean | null;
            customId?: string | null;
        };
        "Pricebook.V2.SkuLinkBulkCreateRequest": {
            /**
             * Format: int64
             * @description Linked SKU unique Id
             */
            skuId?: number | null;
            /** @description Linked SKU custom Id */
            customId?: string | null;
            /**
             * Format: decimal
             * @description Linked SKUs quantity
             */
            quantity: number;
        };
        "Pricebook.V2.ServiceRecommendationBulkCreateRequest": {
            /**
             * Format: int64
             * @description Linked SKU unique Id
             */
            skuId?: number | null;
            /** @description Linked SKU custom Id */
            customId?: string | null;
        };
        "Pricebook.V2.SkuUpgradeBulkCreateRequest": {
            /**
             * Format: int64
             * @description Linked SKU unique Id
             */
            skuId?: number | null;
            /** @description Linked SKU custom Id */
            customId?: string | null;
        };
        "Pricebook.V2.EquipmentBulkCreateRequest": {
            /** @description Array of materials used with this equipment */
            equipmentMaterials?: components["schemas"]["Pricebook.V2.SkuLinkBulkCreateRequest"][] | null;
            /** @description Recommended services and materials to include with this SKU */
            recommendations?: components["schemas"]["Pricebook.V2.EquipmentRecommendationBulkCreateRequest"][] | null;
            /** @description Upgrades that can be sold for this SKU */
            upgrades?: components["schemas"]["Pricebook.V2.SkuUpgradeBulkCreateRequest"][] | null;
            /** @description Code for the SKU */
            code: string;
            /** @description Name that displays with the SKU */
            displayName?: string | null;
            /**
             * Format: html
             * @description Description on the SKU that is displayed with the item
             */
            description: string;
            /**
             * Format: decimal
             * @description Price of this SKU sold
             */
            price?: number | null;
            /**
             * Format: decimal
             * @description The price if the item is sold to a member
             */
            memberPrice?: number | null;
            /**
             * Format: decimal
             * @description The price of the SKU is sold as an add-on item
             */
            addOnPrice?: number | null;
            /**
             * Format: decimal
             * @description The price if the SKU is sold to a member as an add-on item
             */
            addOnMemberPrice?: number | null;
            /** @description Active shows if the SKU is active or inactive */
            active?: boolean | null;
            /** @description Name of the manufactures */
            manufacturer?: string | null;
            /** @description The model of the equipment */
            model?: string | null;
            /** @description Description of the manufacturer warranty included in this SKU */
            manufacturerWarranty?: components["schemas"]["Pricebook.V2.SkuWarrantyRequest"] | null;
            /** @description Description of the manufacturer warranty included in this SKU */
            serviceProviderWarranty?: components["schemas"]["Pricebook.V2.SkuWarrantyRequest"] | null;
            /** @description Images, videos or PDFs attached to SKU */
            assets?: components["schemas"]["Pricebook.V2.SkuAssetRequest"][] | null;
            /** @description Categories that this SKU belongs to */
            categories?: number[] | null;
            /** @description The primary vendor you use to acquire this SKU */
            primaryVendor?: components["schemas"]["Pricebook.V2.SkuVendorRequest"] | null;
            /** @description Other vendors that you might go to acquire this SKU */
            otherVendors?: components["schemas"]["Pricebook.V2.SkuVendorRequest"][] | null;
            /** @description The accounting account assigned to this SKU */
            account?: string | null;
            costOfSaleAccount?: string | null;
            assetAccount?: string | null;
            /** @description Intacct GL Group Name */
            intacctGlGroupAccount?: string | null;
            /** @description A grouping of similar items that you'll then be able to track as a separate columns on the Technical Performance Board. */
            crossSaleGroup?: string | null;
            /** @description PaysCommissions shows if this task pays commission */
            paysCommission?: boolean | null;
            /**
             * Format: decimal
             * @description Flat rate bonus paid for this task
             */
            bonus?: number | null;
            /**
             * Format: decimal
             * @description Percentage rate bonus paid for this task
             */
            commissionBonus?: number | null;
            /**
             * Format: decimal
             * @description The number of hours associated with the installing the equipment
             */
            hours?: number | null;
            /** @description Is this SKU taxable */
            taxable?: boolean | null;
            /**
             * Format: decimal
             * @description The cost paid to acquire the material
             */
            cost?: number | null;
            /** @description The unit of measure used for this SKU */
            unitOfMeasure?: string | null;
            /** @description Is this equipment a part of your inventory */
            isInventory?: boolean | null;
            /**
             * @description Optional model that contains a list of external data items
             *     that should be attached to this entity.
             */
            externalData?: components["schemas"]["Pricebook.V2.ExternalDataCreateRequest"] | null;
            /** @description Is this a Configurable Equipment */
            isConfigurableEquipment?: boolean | null;
            /** @description Variations to add */
            variationEquipment?: number[] | null;
            /** @description The Budget CostCode segment for this entity. (Note: BudgetCostType should also be provided) */
            budgetCostCode?: string | null;
            /** @description The Budget CostType segment for this entity (Note: BudgetCostCode should also be provided) */
            budgetCostType?: string | null;
            /** @description The equipment dimensions */
            dimensions?: components["schemas"]["Pricebook.V2.DimensionsRequest"] | null;
            /** @description Whether the cost is locked from editing */
            isCostLocked?: boolean | null;
            /** @description Whether the price is locked from editing */
            isPriceLocked?: boolean | null;
            customId?: string | null;
        };
        "Pricebook.V2.EquipmentRecommendationBulkCreateRequest": {
            /**
             * Format: int64
             * @description Linked SKU unique Id
             */
            skuId?: number | null;
            /** @description Linked SKU custom Id */
            customId?: string | null;
            type: components["schemas"]["Pricebook.V2.EquipmentRecommendationType"];
        };
        "Pricebook.V2.MaterialBulkCreateRequest": {
            /** @description Code for the SKU */
            code: string;
            /** @description Name that displays with the SKU */
            displayName?: string | null;
            /**
             * Format: html
             * @description Description on the SKU that is displayed with the item
             */
            description: string;
            /**
             * Format: decimal
             * @description The cost paid to acquire the material
             */
            cost?: number | null;
            /** @description Active shows if the SKU is active or inactive */
            active?: boolean | null;
            /**
             * Format: decimal
             * @description Price of this SKU sold
             */
            price?: number | null;
            /**
             * Format: decimal
             * @description The price if the item is sold to a member
             */
            memberPrice?: number | null;
            /**
             * Format: decimal
             * @description The price of the SKU is sold as an add-on item
             */
            addOnPrice?: number | null;
            /**
             * Format: decimal
             * @description The price if the SKU is sold to a member as an add-on item
             */
            addOnMemberPrice?: number | null;
            /**
             * Format: decimal
             * @description The number of hours associated with the installing the material
             */
            hours?: number | null;
            /**
             * Format: decimal
             * @description Flat rate bonus paid for this task
             */
            bonus?: number | null;
            /**
             * Format: decimal
             * @description Percentage rate bonus paid for this task
             */
            commissionBonus?: number | null;
            /** @description PaysCommissions shows if this task pays commission */
            paysCommission?: boolean | null;
            /** @description Is this deducted as job cost */
            deductAsJobCost?: boolean | null;
            /** @description The unit of measure used for this SKU */
            unitOfMeasure?: string | null;
            /** @description Is this equipment a part of your inventory */
            isInventory?: boolean | null;
            /** @description The accounting account assigned to this SKU */
            account?: string | null;
            costOfSaleAccount?: string | null;
            assetAccount?: string | null;
            /** @description Intacct GL Group Name */
            intacctGlGroupAccount?: string | null;
            /** @description Is this SKU taxable */
            taxable?: boolean | null;
            /** @description The primary vendor you use to acquire this SKU */
            primaryVendor?: components["schemas"]["Pricebook.V2.SkuVendorRequest"] | null;
            /** @description Other vendors that you might go to acquire this SKU */
            otherVendors?: components["schemas"]["Pricebook.V2.SkuVendorRequest"][] | null;
            /** @description Images, videos or PDFs attached to SKU */
            assets?: components["schemas"]["Pricebook.V2.SkuAssetRequest"][] | null;
            /** @description Categories that this SKU belongs to */
            categories?: number[] | null;
            /**
             * @description Optional model that contains a list of external data items
             *     that should be attached to this entity.
             */
            externalData?: components["schemas"]["Pricebook.V2.ExternalDataCreateRequest"] | null;
            /** @description Is this a Configurable Material */
            isConfigurableMaterial?: boolean | null;
            /** @description Is this Chargeable by default */
            chargeableByDefault?: boolean | null;
            /** @description Variations to add */
            variationMaterials?: number[] | null;
            /** @description Is Other Direct Cost (false by default) */
            isOtherDirectCost?: boolean | null;
            /**
             * Format: int64
             * @description The Cost Type of the Other Direct Cost
             */
            costTypeId?: number | null;
            /** @description The Budget CostCode segment for this entity. (Note: BudgetCostType should also be provided) */
            budgetCostCode?: string | null;
            /** @description The Budget CostType segment for this entity (Note: BudgetCostCode should also be provided) */
            budgetCostType?: string | null;
            /** @description Whether the cost is locked from editing */
            isCostLocked?: boolean | null;
            /** @description Whether the price is locked from editing */
            isPriceLocked?: boolean | null;
            /** @description When true, EPA number and active ingredients may be recorded for this chemical material. */
            isChemical?: boolean | null;
            /** @description Optional EPA registration number (up to 500 characters) when IsChemical is true. */
            epaNumber?: string | null;
            /** @description Optional active ingredients (up to 500 characters) when IsChemical is true. */
            activeIngredients?: string | null;
            customId?: string | null;
        };
        "Pricebook.V2.DiscountAndFeesBulkCreateRequest": {
            /** @description Type should be entered as Discount or Fee to show the type */
            type: components["schemas"]["Pricebook.V2.PriceModifierType"];
            /** @description Code used for the discount or fee */
            code: string;
            /** @description Name for the discount of fee */
            displayName?: string | null;
            /**
             * Format: html
             * @description Description for the item
             */
            description: string;
            /** @description The amount type takes either "percentage" or "flat " and apply the "amount" field accordingly */
            amountType: components["schemas"]["Pricebook.V2.PriceModifierAmountType"];
            /**
             * Format: decimal
             * @description Amount is either the flat amount or percentage you want discounted/added
             */
            amount: number;
            /**
             * Format: decimal
             * @description The maximum amount that can be applied for this item
             */
            limit?: number | null;
            /** @description Should tax be applied when the item is added on an estimate or invoice */
            taxable?: boolean | null;
            /** @description The category technicians will use to find the item */
            categories?: number[] | null;
            /**
             * Format: decimal
             * @description The number of hours associated with the SKU
             */
            hours?: number | null;
            /** @description Images, videos or PDFs attached to SKU */
            assets?: components["schemas"]["Pricebook.V2.SkuAssetRequest"][] | null;
            /** @description The accounting account assigned to the SKU */
            account?: string | null;
            /** @description Intacct GL Group Name */
            intacctGlGroupAccount?: string | null;
            /** @description A grouping of similar items that you'll then be able to track as a separate columns on the Technical Performance Board. */
            crossSaleGroup?: string | null;
            /** @description Active shows if this item is currently active */
            active?: boolean | null;
            /**
             * Format: decimal
             * @description Flat rate bonus paid for this item
             */
            bonus?: number | null;
            /**
             * Format: decimal
             * @description Percentage rate bonus paid for this item
             */
            commissionBonus?: number | null;
            /** @description PaysCommissions shows if for this item commission payed */
            paysCommission?: boolean | null;
            /** @description Exclude from payroll */
            excludeFromPayroll?: boolean | null;
            /**
             * @description Optional model that contains a list of external data items
             *     that should be attached to this entity.
             */
            externalData?: components["schemas"]["Pricebook.V2.ExternalDataCreateRequest"] | null;
            /** @description The Budget CostCode segment for this entity. (Note: BudgetCostType should also be provided) */
            budgetCostCode?: string | null;
            /** @description The Budget CostType segment for this entity (Note: BudgetCostCode should also be provided) */
            budgetCostType?: string | null;
            customId?: string | null;
        };
        "Pricebook.V2.PricebookBulkUpdateRequest": {
            services?: components["schemas"]["Pricebook.V2.ServiceBulkUpdateRequest"][] | null;
            equipment?: components["schemas"]["Pricebook.V2.EquipmentBulkUpdateRequest"][] | null;
            materials?: components["schemas"]["Pricebook.V2.MaterialBulkUpdateRequest"][] | null;
            discountAndFees?: components["schemas"]["Pricebook.V2.DiscountAndFeesBulkUpdateRequest"][] | null;
        };
        "Pricebook.V2.ServiceBulkUpdateRequest": {
            /** @description Code for the SKU */
            code: string;
            /** @description Name that displays with the SKU */
            displayName: string;
            /**
             * Format: html
             * @description Description on the SKU that is displayed with the item
             */
            description: string;
            /** @description Description of the warranty included in this SKU */
            warranty: components["schemas"]["Pricebook.V2.SkuWarrantyRequest"];
            /** @description Categories that this SKU belongs to */
            categories: number[];
            /**
             * Format: decimal
             * @description Price of this SKU sold
             */
            price: number;
            /**
             * Format: decimal
             * @description The price if the item is sold to a member
             */
            memberPrice: number;
            /**
             * Format: decimal
             * @description The price of the SKU is sold as an add-on item
             */
            addOnPrice: number;
            /**
             * Format: decimal
             * @description The price if the SKU is sold to a member as an add-on item
             */
            addOnMemberPrice: number;
            /** @description Is this SKU taxable */
            taxable: boolean;
            /** @description The accounting account assigned to this SKU */
            account: string;
            /** @description Intacct GL Group Name */
            intacctGlGroupAccount: string;
            /**
             * Format: decimal
             * @description Hours needed to complete this service
             */
            hours: number;
            /** @description Is a labor service */
            isLabor: boolean;
            /** @description Recommended other services to include with this SKU */
            recommendations: number[];
            /** @description Upgrades that can be sold for this SKU */
            upgrades: number[];
            /** @description Images, videos or PDFs attached to SKU */
            assets: components["schemas"]["Pricebook.V2.SkuAssetRequest"][];
            /** @description Array of materials linked to the service */
            serviceMaterials: components["schemas"]["Pricebook.V2.SkuLinkRequest"][];
            /** @description Array of equipment linked to the service */
            serviceEquipment: components["schemas"]["Pricebook.V2.SkuLinkRequest"][];
            /** @description Active shows if the SKU is active or inactive */
            active: boolean;
            /** @description A grouping of similar items that you'll then be able to track as a separate columns on the Technical Performance Board. */
            crossSaleGroup: string;
            /** @description PaysCommissions shows if this task pays commission */
            paysCommission: boolean;
            /**
             * Format: decimal
             * @description Flat rate bonus paid for this task
             */
            bonus: number;
            /**
             * Format: decimal
             * @description Percentage rate bonus paid for this task
             */
            commissionBonus: number;
            /** @description External data update model. */
            externalData?: components["schemas"]["Pricebook.V2.ExternalDataUpdateRequest"] | null;
            /** @description The Budget CostCode segment for this entity. (Note: BudgetCostType should also be provided) */
            budgetCostCode: string;
            /** @description The Budget CostType segment for this entity (Note: BudgetCostCode should also be provided) */
            budgetCostType: string;
            /** @description Whether the price is locked from editing */
            isPriceLocked: boolean;
            /** Format: int64 */
            id: number;
        };
        "Pricebook.V2.EquipmentBulkUpdateRequest": {
            /** @description Code for the SKU */
            code: string;
            /** @description Name that displays with the SKU */
            displayName: string;
            /**
             * Format: html
             * @description Description on the SKU that is displayed with the item
             */
            description: string;
            /**
             * Format: decimal
             * @description Price of this SKU sold
             */
            price: number;
            /**
             * Format: decimal
             * @description The price if the item is sold to a member
             */
            memberPrice: number;
            /**
             * Format: decimal
             * @description The price of the SKU is sold as an add-on item
             */
            addOnPrice: number;
            /**
             * Format: decimal
             * @description The price if the SKU is sold to a member as an add-on item
             */
            addOnMemberPrice: number;
            /** @description Active shows if the SKU is active or inactive */
            active: boolean;
            /** @description Name of the manufactures */
            manufacturer: string;
            /** @description The model of the equipment */
            model: string;
            /** @description Description of the manufacturer warranty included in this SKU */
            manufacturerWarranty: components["schemas"]["Pricebook.V2.SkuWarrantyRequest"];
            /** @description Description of the manufacturer warranty included in this SKU */
            serviceProviderWarranty: components["schemas"]["Pricebook.V2.SkuWarrantyRequest"];
            /** @description Images, videos or PDFs attached to SKU */
            assets: components["schemas"]["Pricebook.V2.SkuAssetRequest"][];
            /** @description Recommended services and materials to include with this SKU */
            recommendations: components["schemas"]["Pricebook.V2.EquipmentRecommendationRequest"][];
            /** @description Upgrades that can be sold for this SKU */
            upgrades: number[];
            /** @description Array of materials used with this equipment */
            equipmentMaterials: components["schemas"]["Pricebook.V2.SkuLinkRequest"][];
            /** @description Categories that this SKU belongs to */
            categories: number[];
            /** @description The primary vendor you use to acquire this SKU */
            primaryVendor: components["schemas"]["Pricebook.V2.SkuVendorRequest"];
            /** @description Other vendors that you might go to acquire this SKU */
            otherVendors: components["schemas"]["Pricebook.V2.SkuVendorRequest"][];
            /** @description The accounting account assigned to this SKU */
            account: string;
            costOfSaleAccount: string;
            assetAccount: string;
            /** @description Intacct GL Group Name */
            intacctGlGroupAccount: string;
            /** @description A grouping of similar items that you'll then be able to track as a separate columns on the Technical Performance Board. */
            crossSaleGroup: string;
            /** @description PaysCommissions shows if this task pays commission */
            paysCommission: boolean;
            /**
             * Format: decimal
             * @description Flat rate bonus paid for this task
             */
            bonus: number;
            /**
             * Format: decimal
             * @description Percentage rate bonus paid for this task
             */
            commissionBonus: number;
            /**
             * Format: decimal
             * @description The number of hours associated with the installing the equipment
             */
            hours: number;
            /** @description Is this SKU taxable */
            taxable: boolean;
            /**
             * Format: decimal
             * @description The cost paid to acquire the material
             */
            cost: number;
            /** @description The unit of measure used for this SKU */
            unitOfMeasure: string;
            /** @description Is this equipment a part of your inventory */
            isInventory: boolean;
            /** @description External data update model. */
            externalData?: components["schemas"]["Pricebook.V2.ExternalDataUpdateRequest"] | null;
            /** @description Is this a Configurable Equipment */
            isConfigurableEquipment: boolean;
            /** @description Added Variations */
            variationEquipment: number[];
            /** @description The equipement dimensions */
            dimensions: components["schemas"]["Pricebook.V2.DimensionsRequest"];
            /** @description The Budget CostCode segment for this entity. (Note: BudgetCostType should also be provided) */
            budgetCostCode: string;
            /** @description The Budget CostType segment for this entity (Note: BudgetCostCode should also be provided) */
            budgetCostType: string;
            /** @description Whether the cost is locked from editing */
            isCostLocked: boolean;
            /** @description Whether the price is locked from editing */
            isPriceLocked: boolean;
            /** Format: int64 */
            id: number;
        };
        "Pricebook.V2.MaterialBulkUpdateRequest": {
            /** @description Code for the SKU */
            code: string;
            /** @description Name that displays with the SKU */
            displayName: string;
            /**
             * Format: html
             * @description Description on the SKU that is displayed with the item
             */
            description: string;
            /**
             * Format: decimal
             * @description The cost paid to acquire the material
             */
            cost: number;
            /** @description Active shows if the SKU is active or inactive */
            active: boolean;
            /**
             * Format: decimal
             * @description Price of this SKU sold
             */
            price: number;
            /**
             * Format: decimal
             * @description The price if the item is sold to a member
             */
            memberPrice: number;
            /**
             * Format: decimal
             * @description The price of the SKU is sold as an add-on item
             */
            addOnPrice: number;
            /**
             * Format: decimal
             * @description The price if the SKU is sold to a member as an add-on item
             */
            addOnMemberPrice: number;
            /**
             * Format: decimal
             * @description The number of hours associated with the installing the material
             */
            hours: number;
            /**
             * Format: decimal
             * @description Flat rate bonus paid for this task
             */
            bonus: number;
            /**
             * Format: decimal
             * @description Percentage rate bonus paid for this task
             */
            commissionBonus: number;
            /** @description PaysCommissions shows if this task pays commission */
            paysCommission: boolean;
            /** @description Is this deducted as job cost */
            deductAsJobCost: boolean;
            /** @description The unit of measure used for this SKU */
            unitOfMeasure: string;
            /** @description Is this material a part of your inventory */
            isInventory: boolean;
            /** @description The accounting account assigned to this SKU */
            account: string;
            costOfSaleAccount: string;
            assetAccount: string;
            /** @description Intacct GL Group Name */
            intacctGlGroupAccount: string;
            /** @description Is this SKU taxable */
            taxable: boolean;
            /** @description The primary vendor you use to acquire this SKU */
            primaryVendor: components["schemas"]["Pricebook.V2.SkuVendorRequest"];
            /** @description Other vendors that you might go to acquire this SKU */
            otherVendors: components["schemas"]["Pricebook.V2.SkuVendorRequest"][];
            /** @description Images, videos or PDFs attached to SKU */
            assets: components["schemas"]["Pricebook.V2.SkuAssetRequest"][];
            /** @description Categories that this SKU belongs to */
            categories: number[];
            /** @description External data update model. */
            externalData?: components["schemas"]["Pricebook.V2.ExternalDataUpdateRequest"] | null;
            /** @description Is this a Configurable Material */
            isConfigurableMaterial: boolean;
            /** @description Is this Chargeable by default */
            chargeableByDefault: boolean;
            /** @description Added Variations */
            variationMaterials: number[];
            /**
             * Format: int64
             * @description The Cost Type of the Other Direct Cost
             */
            costTypeId?: number | null;
            /** @description The Budget CostCode segment for this entity. (Note: BudgetCostType should also be provided) */
            budgetCostCode: string;
            /** @description The Budget CostType segment for this entity (Note: BudgetCostCode should also be provided) */
            budgetCostType: string;
            /** @description Whether the cost is locked from editing */
            isCostLocked: boolean;
            /** @description Whether the price is locked from editing */
            isPriceLocked: boolean;
            /** @description When true, EPA number and active ingredients may be recorded for this chemical material. */
            isChemical: boolean;
            /** @description Optional EPA registration number (up to 500 characters) when chemical tracking applies. */
            epaNumber: string;
            /** @description Optional active ingredients (up to 500 characters) when chemical tracking applies. */
            activeIngredients: string;
            /** Format: int64 */
            id: number;
        };
        "Pricebook.V2.DiscountAndFeesBulkUpdateRequest": {
            /** @description Type should be entered as Discount or Fee to show the type */
            type: components["schemas"]["Pricebook.V2.PriceModifierType"];
            /** @description Code used for the discount or fee */
            code: string;
            /** @description Name for the discount of fee */
            displayName: string;
            /**
             * Format: html
             * @description Description for the item
             */
            description: string;
            /** @description The amount type takes either "percentage" or "flat " and apply the "amount" field accordingly */
            amountType: components["schemas"]["Pricebook.V2.PriceModifierAmountType"];
            /**
             * Format: decimal
             * @description Amount is either the flat amount or percentage you want discounted/added
             */
            amount: number;
            /** @description Intacct GL Group Name */
            intacctGlGroupAccount: string;
            /**
             * Format: decimal
             * @description The maximum amount that can be applied for this item
             */
            limit: number;
            /** @description Should tax be applied when the item is added on an estimate or invoice */
            taxable: boolean;
            /** @description The category technicians will use to find the item */
            categories: number[];
            /**
             * Format: decimal
             * @description The number of hours associated with the SKU
             */
            hours: number;
            /** @description Images, videos or PDFs attached to SKU */
            assets: components["schemas"]["Pricebook.V2.SkuAssetRequest"][];
            /** @description The accounting account assigned to the SKU */
            account: string;
            /** @description A grouping of similar items that you'll then be able to track as a separate columns on the Technical Performance Board. */
            crossSaleGroup: string;
            /** @description Active shows if this item is currently active */
            active: boolean;
            /**
             * Format: decimal
             * @description Flat rate bonus paid for this item
             */
            bonus: number;
            /**
             * Format: decimal
             * @description Percentage rate bonus paid for this item
             */
            commissionBonus: number;
            /** @description PaysCommissions shows if for this item commission payed */
            paysCommission: boolean;
            /** @description Exclude from payroll */
            excludeFromPayroll: boolean;
            /** @description External data update model. */
            externalData?: components["schemas"]["Pricebook.V2.ExternalDataUpdateRequest"] | null;
            /** @description The Budget CostCode segment for this entity. (Note: BudgetCostType should also be provided) */
            budgetCostCode: string;
            /** @description The Budget CostType segment for this entity (Note: BudgetCostCode should also be provided) */
            budgetCostType: string;
            /** Format: int64 */
            id: number;
        };
        /** @description Represents paginated API response. */
        "PaginatedResponse_Of_Pricebook.V2.ServiceGetResponse": {
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
            data: components["schemas"]["Pricebook.V2.ServiceGetResponse"][];
        };
        "Pricebook.V2.ServiceGetResponse": {
            /**
             * Format: int64
             * @description Unique id for the SKU
             */
            id: number;
            /** @description Code for the SKU */
            code: string;
            /** @description Name that displays with the SKU */
            displayName?: string | null;
            /**
             * Format: html
             * @description Description on the SKU that is displayed with the item
             */
            description: string;
            /** @description Description of the warranty included in this SKU */
            warranty?: components["schemas"]["Pricebook.V2.SkuWarrantyResponse"] | null;
            /** @description Categories that this SKU belongs to */
            categories: components["schemas"]["Pricebook.V2.SkuCategoryResponse"][];
            /**
             * Format: decimal
             * @description Price of this SKU sold
             */
            price: number;
            /**
             * Format: decimal
             * @description The price if the item is sold to a member
             */
            memberPrice: number;
            /**
             * Format: decimal
             * @description The price of the SKU is sold as an add-on item
             */
            addOnPrice: number;
            /**
             * Format: decimal
             * @description The price if the SKU is sold to a member as an add-on item
             */
            addOnMemberPrice: number;
            /** @description Is this SKU taxable */
            taxable: boolean;
            /** @description The accounting account assigned to this SKU */
            account?: string | null;
            /**
             * Format: decimal
             * @description Hours needed to complete this service
             */
            hours: number;
            /** @description Is a labor service */
            isLabor?: boolean | null;
            /** @description Recommended other service or materials to include with this SKU */
            recommendations: number[];
            /** @description Upgrades that can be sold for this SKU */
            upgrades: number[];
            /** @description Images, videos or PDFs attached to SKU */
            assets: components["schemas"]["Pricebook.V2.SkuAssetResponse"][];
            /** @description Array of materials that is used with this service */
            serviceMaterials: components["schemas"]["Pricebook.V2.SkuLinkResponse"][];
            /** @description Array of equipment used with this service */
            serviceEquipment: components["schemas"]["Pricebook.V2.SkuLinkResponse"][];
            /** @description Active shows if the SKU is active or inactive */
            active: boolean;
            /** @description A grouping of similar items that you'll then be able to track as a separate columns on the Technical Performance Board. */
            crossSaleGroup?: string | null;
            /** @description PaysCommissions shows if this task pays commission */
            paysCommission: boolean;
            /**
             * Format: decimal
             * @description Flat rate bonus paid for this task
             */
            bonus: number;
            /**
             * Format: decimal
             * @description Percentage rate bonus paid for this task
             */
            commissionBonus: number;
            /**
             * Format: date-time
             * @description Timestamp when the item was last modified
             */
            modifiedOn: string;
            /** @description The source catalog for this SKU. */
            source?: string | null;
            /** @description External id is the id of the original source of the item when it comes from a catalog */
            externalId?: string | null;
            /**
             * @description List of external data attached to this job,
             *     that corresponds to the application guid provided in the request.
             */
            externalData?: components["schemas"]["Pricebook.V2.ExternalDataModel"][] | null;
            /**
             * Format: int64
             * @description Service's Bussiness Unit Id
             */
            businessUnitId?: number | null;
            /**
             * Format: decimal
             * @description Service Cost
             */
            cost: number;
            /**
             * Format: date-time
             * @description Timestamp when the item was created
             */
            createdOn: string;
            /**
             * Format: decimal
             * @description Sold by commission
             */
            soldByCommission: number;
            /** @description Default Asset Url */
            defaultAssetUrl?: string | null;
            /** @description The Budget CostCode segment for this entity. (Note: BudgetCostType should also be provided) */
            budgetCostCode?: string | null;
            /** @description The Budget CostType segment for this entity (Note: BudgetCostCode should also be provided) */
            budgetCostType?: string | null;
            /** @description Whether the price is locked from editing */
            isPriceLocked?: boolean | null;
            /**
             * Format: decimal
             * @description If a service has Dynamic Pricing rule and query parameter CalculatePrices is true, this field will contain the calculated price based on the rule.
             */
            calculatedPrice?: number | null;
            /** @description If a service has Dynamic Pricing rule and query parameter CalculatePrices is true, this field will contain the value. */
            useStaticPrices?: boolean | null;
        };
        "Pricebook.V2.ServiceResponse": {
            /**
             * Format: int64
             * @description Unique id for the SKU
             */
            id: number;
            /** @description Code for the SKU */
            code: string;
            /** @description Name that displays with the SKU */
            displayName?: string | null;
            /**
             * Format: html
             * @description Description on the SKU that is displayed with the item
             */
            description: string;
            /** @description Description of the warranty included in this SKU */
            warranty?: components["schemas"]["Pricebook.V2.SkuWarrantyResponse"] | null;
            /** @description Categories that this SKU belongs to */
            categories: components["schemas"]["Pricebook.V2.SkuCategoryResponse"][];
            /**
             * Format: decimal
             * @description Price of this SKU sold
             */
            price: number;
            /**
             * Format: decimal
             * @description The price if the item is sold to a member
             */
            memberPrice: number;
            /**
             * Format: decimal
             * @description The price of the SKU is sold as an add-on item
             */
            addOnPrice: number;
            /**
             * Format: decimal
             * @description The price if the SKU is sold to a member as an add-on item
             */
            addOnMemberPrice: number;
            /** @description Is this SKU taxable */
            taxable: boolean;
            /** @description The accounting account assigned to this SKU */
            account?: string | null;
            /**
             * Format: decimal
             * @description Hours needed to complete this service
             */
            hours: number;
            /** @description Is a labor service */
            isLabor?: boolean | null;
            /** @description Recommended other service or materials to include with this SKU */
            recommendations: number[];
            /** @description Upgrades that can be sold for this SKU */
            upgrades: number[];
            /** @description Images, videos or PDFs attached to SKU */
            assets: components["schemas"]["Pricebook.V2.SkuAssetResponse"][];
            /** @description Array of materials that is used with this service */
            serviceMaterials: components["schemas"]["Pricebook.V2.SkuLinkResponse"][];
            /** @description Array of equipment used with this service */
            serviceEquipment: components["schemas"]["Pricebook.V2.SkuLinkResponse"][];
            /** @description Active shows if the SKU is active or inactive */
            active: boolean;
            /** @description A grouping of similar items that you'll then be able to track as a separate columns on the Technical Performance Board. */
            crossSaleGroup?: string | null;
            /** @description PaysCommissions shows if this task pays commission */
            paysCommission: boolean;
            /**
             * Format: decimal
             * @description Flat rate bonus paid for this task
             */
            bonus: number;
            /**
             * Format: decimal
             * @description Percentage rate bonus paid for this task
             */
            commissionBonus: number;
            /**
             * Format: date-time
             * @description Timestamp when the item was last modified
             */
            modifiedOn: string;
            /** @description The source catalog for this SKU. */
            source?: string | null;
            /** @description External id is the id of the original source of the item when it comes from a catalog */
            externalId?: string | null;
            /**
             * @description List of external data attached to this job,
             *     that corresponds to the application guid provided in the request.
             */
            externalData?: components["schemas"]["Pricebook.V2.ExternalDataModel"][] | null;
            /**
             * Format: int64
             * @description Service's Bussiness Unit Id
             */
            businessUnitId?: number | null;
            /**
             * Format: decimal
             * @description Service Cost
             */
            cost: number;
            /**
             * Format: date-time
             * @description Timestamp when the item was created
             */
            createdOn: string;
            /**
             * Format: decimal
             * @description Sold by commission
             */
            soldByCommission: number;
            /** @description Default Asset Url */
            defaultAssetUrl?: string | null;
            /** @description The Budget CostCode segment for this entity. (Note: BudgetCostType should also be provided) */
            budgetCostCode?: string | null;
            /** @description The Budget CostType segment for this entity (Note: BudgetCostCode should also be provided) */
            budgetCostType?: string | null;
            /** @description Whether the price is locked from editing */
            isPriceLocked?: boolean | null;
        };
        "Pricebook.V2.ServiceCreateRequest": {
            /** @description Array of materials linked to the service */
            serviceMaterials?: components["schemas"]["Pricebook.V2.SkuLinkRequest"][] | null;
            /** @description Array of equipment linked to the service */
            serviceEquipment?: components["schemas"]["Pricebook.V2.SkuLinkRequest"][] | null;
            /** @description Recommended services and materials to include with this SKU */
            recommendations?: number[] | null;
            /** @description Upgrades that can be sold for this SKU */
            upgrades?: number[] | null;
            /** @description Code for the SKU */
            code: string;
            /** @description Name that displays with the SKU */
            displayName?: string | null;
            /**
             * Format: html
             * @description Description on the SKU that is displayed with the item
             */
            description: string;
            /** @description Description of the warranty included in this SKU */
            warranty?: components["schemas"]["Pricebook.V2.SkuWarrantyRequest"] | null;
            /** @description Categories that this SKU belongs to */
            categories?: number[] | null;
            /**
             * Format: decimal
             * @description Price of this SKU sold
             */
            price?: number | null;
            /**
             * Format: decimal
             * @description The price if the item is sold to a member
             */
            memberPrice?: number | null;
            /**
             * Format: decimal
             * @description The price of the SKU is sold as an add-on item
             */
            addOnPrice?: number | null;
            /**
             * Format: decimal
             * @description The price if the SKU is sold to a member as an add-on item
             */
            addOnMemberPrice?: number | null;
            /** @description Is this SKU taxable */
            taxable?: boolean | null;
            /** @description The accounting account assigned to this SKU */
            account?: string | null;
            /** @description Intacct GL Group Name */
            intacctGlGroupAccount?: string | null;
            /**
             * Format: decimal
             * @description Hours needed to complete this service
             */
            hours?: number | null;
            /** @description Is a labor service */
            isLabor?: boolean | null;
            /** @description Images, videos or PDFs attached to SKU */
            assets?: components["schemas"]["Pricebook.V2.SkuAssetRequest"][] | null;
            /** @description Active shows if the SKU is active or inactive */
            active?: boolean | null;
            /** @description A grouping of similar items that you'll then be able to track as a separate columns on the Technical Performance Board. */
            crossSaleGroup?: string | null;
            /** @description True if this task pays commission */
            paysCommission?: boolean | null;
            /**
             * Format: decimal
             * @description Flat rate bonus paid for this task
             */
            bonus?: number | null;
            /**
             * Format: decimal
             * @description Percentage rate bonus paid for this task
             */
            commissionBonus?: number | null;
            /**
             * @description Optional model that contains a list of external data items
             *     that should be attached to this entity.
             */
            externalData?: components["schemas"]["Pricebook.V2.ExternalDataCreateRequest"] | null;
            /** @description The Budget CostCode segment for this entity. (Note: BudgetCostType should also be provided) */
            budgetCostCode?: string | null;
            /** @description The Budget CostType segment for this entity (Note: BudgetCostCode should also be provided) */
            budgetCostType?: string | null;
            /** @description Whether the price is locked from editing */
            isPriceLocked?: boolean | null;
        };
        "Pricebook.V2.ServiceUpdateRequest": {
            /** @description Code for the SKU */
            code?: string;
            /** @description Name that displays with the SKU */
            displayName?: string;
            /**
             * Format: html
             * @description Description on the SKU that is displayed with the item
             */
            description?: string;
            /** @description Description of the warranty included in this SKU */
            warranty?: components["schemas"]["Pricebook.V2.SkuWarrantyRequest"];
            /** @description Categories that this SKU belongs to */
            categories?: number[];
            /**
             * Format: decimal
             * @description Price of this SKU sold
             */
            price?: number;
            /**
             * Format: decimal
             * @description The price if the item is sold to a member
             */
            memberPrice?: number;
            /**
             * Format: decimal
             * @description The price of the SKU is sold as an add-on item
             */
            addOnPrice?: number;
            /**
             * Format: decimal
             * @description The price if the SKU is sold to a member as an add-on item
             */
            addOnMemberPrice?: number;
            /** @description Is this SKU taxable */
            taxable?: boolean;
            /** @description The accounting account assigned to this SKU */
            account?: string;
            /** @description Intacct GL Group Name */
            intacctGlGroupAccount?: string;
            /**
             * Format: decimal
             * @description Hours needed to complete this service
             */
            hours?: number;
            /** @description Is a labor service */
            isLabor?: boolean;
            /** @description Recommended other services to include with this SKU */
            recommendations?: number[];
            /** @description Upgrades that can be sold for this SKU */
            upgrades?: number[];
            /** @description Images, videos or PDFs attached to SKU */
            assets?: components["schemas"]["Pricebook.V2.SkuAssetRequest"][];
            /** @description Array of materials linked to the service */
            serviceMaterials?: components["schemas"]["Pricebook.V2.SkuLinkRequest"][];
            /** @description Array of equipment linked to the service */
            serviceEquipment?: components["schemas"]["Pricebook.V2.SkuLinkRequest"][];
            /** @description Active shows if the SKU is active or inactive */
            active?: boolean;
            /** @description A grouping of similar items that you'll then be able to track as a separate columns on the Technical Performance Board. */
            crossSaleGroup?: string;
            /** @description PaysCommissions shows if this task pays commission */
            paysCommission?: boolean;
            /**
             * Format: decimal
             * @description Flat rate bonus paid for this task
             */
            bonus?: number;
            /**
             * Format: decimal
             * @description Percentage rate bonus paid for this task
             */
            commissionBonus?: number;
            /** @description External data update model. */
            externalData?: components["schemas"]["Pricebook.V2.ExternalDataUpdateRequest"] | null;
            /** @description The Budget CostCode segment for this entity. (Note: BudgetCostType should also be provided) */
            budgetCostCode?: string;
            /** @description The Budget CostType segment for this entity (Note: BudgetCostCode should also be provided) */
            budgetCostType?: string;
            /** @description Whether the price is locked from editing */
            isPriceLocked?: boolean;
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
    ClientSpecificPricing_GetAllRateSheets: {
        parameters: {
            query?: {
                ids?: string;
                searchTerm?: string;
                /** @description Values: [True, Any, False] */
                active?: string & components["schemas"]["ActiveRequestArg"];
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
                     *           "exceptions": [
                     *             {
                     *               "skuId": 0,
                     *               "skuType": "Service",
                     *               "value": 0,
                     *               "valueType": "Percent"
                     *             }
                     *           ]
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Estimates.V2.ClientSpecificPricingResponse"];
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
    ClientSpecificPricing_UpdateRateSheet: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                rateSheetId: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "exceptions": [
                 *         {
                 *           "skuId": 0,
                 *           "value": 0,
                 *           "valueType": "Percent"
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Estimates.V2.UpdateClientSpecificPricingRequest"];
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
                     *       "exceptions": [
                     *         {
                     *           "skuId": 0,
                     *           "value": 0,
                     *           "valueType": "Percent"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Estimates.V2.UpdateClientSpecificPricingResponse"];
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
    Categories_GetList: {
        parameters: {
            query?: {
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
                 *     Available fields are: Id, Name.
                 */
                sort?: string;
                /**
                 * @description Category type\
                 *     Values: [Services, Materials]
                 */
                categoryType?: string & components["schemas"]["Pricebook.V2.CategoryType"];
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
                    "application/json": components["schemas"]["PaginatedResponse_Of_Pricebook.V2.CategoryResponse"];
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
    Categories_Create: {
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
                 *       "active": true,
                 *       "description": "string",
                 *       "parentId": 0,
                 *       "position": 0,
                 *       "image": "string",
                 *       "categoryType": {},
                 *       "businessUnitIds": [
                 *         0
                 *       ],
                 *       "skuImages": [
                 *         "string"
                 *       ],
                 *       "skuVideos": [
                 *         "string"
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Pricebook.V2.CategoryCreateRequest"];
            };
        };
        responses: {
            /** @description The entity has been created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Pricebook.V2.CategoryResponse"];
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
    Categories_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The id of the service you are requesting */
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
                    "application/json": components["schemas"]["Pricebook.V2.CategoryResponse"];
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
    Categories_Delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of the SKU you are deleting */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
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
    Categories_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Unique id for the SKU is modified */
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
                 *       "active": true,
                 *       "description": "string",
                 *       "parentId": 0,
                 *       "position": 0,
                 *       "image": "string",
                 *       "categoryType": {},
                 *       "businessUnitIds": [
                 *         0
                 *       ],
                 *       "skuImages": [
                 *         "string"
                 *       ],
                 *       "skuVideos": [
                 *         "string"
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Pricebook.V2.CategoryUpdateRequest"];
            };
        };
        responses: {
            /** @description The request has succeeded */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Pricebook.V2.CategoryResponse"];
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
    DiscountAndFees_GetList: {
        parameters: {
            query?: {
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
                 *     Available fields are: Id, Code, DisplayName, CreatedOn, ModifiedOn, Price, MemberPrice, AddOnPrice, AddOnMemberPrice, MaterialsCost, PrimaryVendor, Cost, Manufacturer, Priority.
                 */
                sort?: string;
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
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
                 * @description Items that are created with a specific guid, could be fetched/updated/removed
                 *     only when the same application guid is provided
                 */
                externalDataApplicationGuid?: string;
                /** @description Allows filtering by external data key */
                externalDataKey?: string;
                /** @description Allows filtering by external data values */
                externalDataValues?: string;
                /**
                 * @description Optional search text to filter by. Performs case-insensitive partial match on
                 *     Display Name, Code, and Description fields.
                 */
                searchText?: string;
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
                     *           "type": {},
                     *           "code": "string",
                     *           "displayName": "string",
                     *           "description": "string",
                     *           "amountType": {},
                     *           "amount": 0,
                     *           "limit": 0,
                     *           "taxable": true,
                     *           "categories": [
                     *             0
                     *           ],
                     *           "hours": 0,
                     *           "assets": [
                     *             {
                     *               "alias": "string",
                     *               "fileName": "string",
                     *               "isDefault": true,
                     *               "type": {},
                     *               "url": "string"
                     *             }
                     *           ],
                     *           "account": "string",
                     *           "crossSaleGroup": "string",
                     *           "active": true,
                     *           "bonus": 0,
                     *           "commissionBonus": 0,
                     *           "paysCommission": true,
                     *           "excludeFromPayroll": true,
                     *           "externalData": [
                     *             {
                     *               "key": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "budgetCostCode": "string",
                     *           "budgetCostType": "string",
                     *           "createdOn": "string",
                     *           "modifiedOn": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Pricebook.V2.DiscountAndFeesResponse"];
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
    DiscountAndFees_Create: {
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
                 *       "type": {},
                 *       "code": "string",
                 *       "displayName": "string",
                 *       "description": "string",
                 *       "amountType": {},
                 *       "amount": 0,
                 *       "limit": 0,
                 *       "taxable": true,
                 *       "categories": [
                 *         0
                 *       ],
                 *       "hours": 0,
                 *       "assets": [
                 *         {
                 *           "type": {},
                 *           "alias": "string",
                 *           "url": "string",
                 *           "isDefault": true
                 *         }
                 *       ],
                 *       "account": "string",
                 *       "intacctGlGroupAccount": "string",
                 *       "crossSaleGroup": "string",
                 *       "active": true,
                 *       "bonus": 0,
                 *       "commissionBonus": 0,
                 *       "paysCommission": true,
                 *       "excludeFromPayroll": true,
                 *       "externalData": {
                 *         "applicationGuid": "string",
                 *         "externalData": [
                 *           {
                 *             "key": "string",
                 *             "value": "string"
                 *           }
                 *         ]
                 *       },
                 *       "budgetCostCode": "string",
                 *       "budgetCostType": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Pricebook.V2.DiscountAndFeesCreateRequest"];
            };
        };
        responses: {
            /** @description The entity has been created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "type": {},
                     *       "code": "string",
                     *       "displayName": "string",
                     *       "description": "string",
                     *       "amountType": {},
                     *       "amount": 0,
                     *       "limit": 0,
                     *       "taxable": true,
                     *       "categories": [
                     *         0
                     *       ],
                     *       "hours": 0,
                     *       "assets": [
                     *         {
                     *           "alias": "string",
                     *           "fileName": "string",
                     *           "isDefault": true,
                     *           "type": {},
                     *           "url": "string"
                     *         }
                     *       ],
                     *       "account": "string",
                     *       "crossSaleGroup": "string",
                     *       "active": true,
                     *       "bonus": 0,
                     *       "commissionBonus": 0,
                     *       "paysCommission": true,
                     *       "excludeFromPayroll": true,
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "budgetCostCode": "string",
                     *       "budgetCostType": "string",
                     *       "createdOn": "string",
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Pricebook.V2.DiscountAndFeesResponse"];
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
    DiscountAndFees_Get: {
        parameters: {
            query?: {
                /**
                 * @description Items that are created with a specific guid, could be fetched/updated/removed
                 *     only when the same application guid is provided.
                 */
                externalDataApplicationGuid?: string;
            };
            header?: never;
            path: {
                /** @description The id of the discount and fee you are requesting */
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
                     *       "type": {},
                     *       "code": "string",
                     *       "displayName": "string",
                     *       "description": "string",
                     *       "amountType": {},
                     *       "amount": 0,
                     *       "limit": 0,
                     *       "taxable": true,
                     *       "categories": [
                     *         0
                     *       ],
                     *       "hours": 0,
                     *       "assets": [
                     *         {
                     *           "alias": "string",
                     *           "fileName": "string",
                     *           "isDefault": true,
                     *           "type": {},
                     *           "url": "string"
                     *         }
                     *       ],
                     *       "account": "string",
                     *       "crossSaleGroup": "string",
                     *       "active": true,
                     *       "bonus": 0,
                     *       "commissionBonus": 0,
                     *       "paysCommission": true,
                     *       "excludeFromPayroll": true,
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "budgetCostCode": "string",
                     *       "budgetCostType": "string",
                     *       "createdOn": "string",
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Pricebook.V2.DiscountAndFeesResponse"];
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
    DiscountAndFees_Delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of the SKU you are deleting */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
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
    DiscountAndFees_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Unique id for the SKU is modified */
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
                 *       "type": {},
                 *       "code": "string",
                 *       "displayName": "string",
                 *       "description": "string",
                 *       "amountType": {},
                 *       "amount": 0,
                 *       "intacctGlGroupAccount": "string",
                 *       "limit": 0,
                 *       "taxable": true,
                 *       "categories": [
                 *         0
                 *       ],
                 *       "hours": 0,
                 *       "assets": [
                 *         {
                 *           "type": {},
                 *           "alias": "string",
                 *           "url": "string",
                 *           "isDefault": true
                 *         }
                 *       ],
                 *       "account": "string",
                 *       "crossSaleGroup": "string",
                 *       "active": true,
                 *       "bonus": 0,
                 *       "commissionBonus": 0,
                 *       "paysCommission": true,
                 *       "excludeFromPayroll": true,
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
                 *       "budgetCostCode": "string",
                 *       "budgetCostType": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Pricebook.V2.DiscountAndFeesUpdateRequest"];
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
                     *       "type": {},
                     *       "code": "string",
                     *       "displayName": "string",
                     *       "description": "string",
                     *       "amountType": {},
                     *       "amount": 0,
                     *       "limit": 0,
                     *       "taxable": true,
                     *       "categories": [
                     *         0
                     *       ],
                     *       "hours": 0,
                     *       "assets": [
                     *         {
                     *           "alias": "string",
                     *           "fileName": "string",
                     *           "isDefault": true,
                     *           "type": {},
                     *           "url": "string"
                     *         }
                     *       ],
                     *       "account": "string",
                     *       "crossSaleGroup": "string",
                     *       "active": true,
                     *       "bonus": 0,
                     *       "commissionBonus": 0,
                     *       "paysCommission": true,
                     *       "excludeFromPayroll": true,
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "budgetCostCode": "string",
                     *       "budgetCostType": "string",
                     *       "createdOn": "string",
                     *       "modifiedOn": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Pricebook.V2.DiscountAndFeesResponse"];
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
    Equipment_GetList: {
        parameters: {
            query?: {
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
                 *     Available fields are: Id, Code, DisplayName, CreatedOn, ModifiedOn, Price, MemberPrice, AddOnPrice, AddOnMemberPrice, MaterialsCost, PrimaryVendor, Cost, Manufacturer, Priority.
                 */
                sort?: string;
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
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
                 * @description Items that are created with a specific guid, could be fetched/updated/removed
                 *     only when the same application guid is provided
                 */
                externalDataApplicationGuid?: string;
                /** @description Allows filtering by external data key */
                externalDataKey?: string;
                /** @description Allows filtering by external data values */
                externalDataValues?: string;
                /**
                 * @description Optional search text to filter by. Performs case-insensitive partial match on
                 *     Display Name, Code, and Description fields.
                 */
                searchText?: string;
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
                     *           "displayName": "string",
                     *           "description": "string",
                     *           "active": true,
                     *           "price": 0,
                     *           "memberPrice": 0,
                     *           "addOnPrice": 0,
                     *           "addOnMemberPrice": 0,
                     *           "manufacturer": "string",
                     *           "model": "string",
                     *           "manufacturerWarranty": {
                     *             "duration": 0,
                     *             "description": "string"
                     *           },
                     *           "serviceProviderWarranty": {
                     *             "duration": 0,
                     *             "description": "string"
                     *           },
                     *           "categories": [
                     *             0
                     *           ],
                     *           "assets": [
                     *             {
                     *               "alias": "string",
                     *               "fileName": "string",
                     *               "isDefault": true,
                     *               "type": {},
                     *               "url": "string"
                     *             }
                     *           ],
                     *           "recommendations": [
                     *             {
                     *               "skuId": 0,
                     *               "type": {}
                     *             }
                     *           ],
                     *           "upgrades": [
                     *             0
                     *           ],
                     *           "equipmentMaterials": [
                     *             {
                     *               "skuId": 0,
                     *               "quantity": 0
                     *             }
                     *           ],
                     *           "primaryVendor": {
                     *             "id": 0,
                     *             "vendorName": "string",
                     *             "vendorId": 0,
                     *             "memo": "string",
                     *             "vendorPart": "string",
                     *             "cost": 0,
                     *             "active": true,
                     *             "primarySubAccount": {
                     *               "id": 0,
                     *               "cost": 0,
                     *               "accountName": "string"
                     *             },
                     *             "otherSubAccounts": [
                     *               {
                     *                 "id": 0,
                     *                 "cost": 0,
                     *                 "accountName": "string"
                     *               }
                     *             ]
                     *           },
                     *           "otherVendors": [
                     *             {
                     *               "id": 0,
                     *               "vendorName": "string",
                     *               "vendorId": 0,
                     *               "memo": "string",
                     *               "vendorPart": "string",
                     *               "cost": 0,
                     *               "active": true,
                     *               "primarySubAccount": {
                     *                 "id": 0,
                     *                 "cost": 0,
                     *                 "accountName": "string"
                     *               },
                     *               "otherSubAccounts": [
                     *                 {
                     *                   "id": 0,
                     *                   "cost": 0,
                     *                   "accountName": "string"
                     *                 }
                     *               ]
                     *             }
                     *           ],
                     *           "account": "string",
                     *           "costOfSaleAccount": "string",
                     *           "assetAccount": "string",
                     *           "crossSaleGroup": "string",
                     *           "paysCommission": true,
                     *           "bonus": 0,
                     *           "commissionBonus": 0,
                     *           "hours": 0,
                     *           "taxable": true,
                     *           "cost": 0,
                     *           "unitOfMeasure": "string",
                     *           "isInventory": true,
                     *           "modifiedOn": "string",
                     *           "source": "string",
                     *           "externalId": "string",
                     *           "externalData": [
                     *             {
                     *               "key": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "isConfigurableEquipment": true,
                     *           "variationsOrConfigurableEquipment": [
                     *             0
                     *           ],
                     *           "typeId": 0,
                     *           "displayInAmount": true,
                     *           "generalLedgerAccountId": 0,
                     *           "createdOn": "string",
                     *           "defaultAssetUrl": "string",
                     *           "dimensions": {
                     *             "height": 0,
                     *             "width": 0,
                     *             "depth": 0
                     *           },
                     *           "budgetCostCode": "string",
                     *           "budgetCostType": "string",
                     *           "isCostLocked": true,
                     *           "isPriceLocked": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Pricebook.V2.EquipmentResponse"];
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
    Equipment_Create: {
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
                 *       "equipmentMaterials": [
                 *         {
                 *           "skuId": 0,
                 *           "quantity": 0
                 *         }
                 *       ],
                 *       "recommendations": [
                 *         {
                 *           "skuId": 0,
                 *           "type": "Service"
                 *         }
                 *       ],
                 *       "upgrades": [
                 *         0
                 *       ],
                 *       "code": "string",
                 *       "displayName": "string",
                 *       "description": "string",
                 *       "price": 0,
                 *       "memberPrice": 0,
                 *       "addOnPrice": 0,
                 *       "addOnMemberPrice": 0,
                 *       "active": true,
                 *       "manufacturer": "string",
                 *       "model": "string",
                 *       "manufacturerWarranty": {
                 *         "duration": 0,
                 *         "description": "string"
                 *       },
                 *       "serviceProviderWarranty": {
                 *         "duration": 0,
                 *         "description": "string"
                 *       },
                 *       "assets": [
                 *         {
                 *           "type": {},
                 *           "alias": "string",
                 *           "url": "string",
                 *           "isDefault": true
                 *         }
                 *       ],
                 *       "categories": [
                 *         0
                 *       ],
                 *       "primaryVendor": {
                 *         "vendorId": 0,
                 *         "memo": "string",
                 *         "vendorPart": "string",
                 *         "cost": 0,
                 *         "active": true,
                 *         "primarySubAccount": {
                 *           "cost": 0,
                 *           "accountName": "string"
                 *         },
                 *         "otherSubAccounts": [
                 *           {
                 *             "cost": 0,
                 *             "accountName": "string"
                 *           }
                 *         ]
                 *       },
                 *       "otherVendors": [
                 *         {
                 *           "vendorId": 0,
                 *           "memo": "string",
                 *           "vendorPart": "string",
                 *           "cost": 0,
                 *           "active": true,
                 *           "primarySubAccount": {
                 *             "cost": 0,
                 *             "accountName": "string"
                 *           },
                 *           "otherSubAccounts": [
                 *             {
                 *               "cost": 0,
                 *               "accountName": "string"
                 *             }
                 *           ]
                 *         }
                 *       ],
                 *       "account": "string",
                 *       "costOfSaleAccount": "string",
                 *       "assetAccount": "string",
                 *       "intacctGlGroupAccount": "string",
                 *       "crossSaleGroup": "string",
                 *       "paysCommission": true,
                 *       "bonus": 0,
                 *       "commissionBonus": 0,
                 *       "hours": 0,
                 *       "taxable": true,
                 *       "cost": 0,
                 *       "unitOfMeasure": "string",
                 *       "isInventory": true,
                 *       "externalData": {
                 *         "applicationGuid": "string",
                 *         "externalData": [
                 *           {
                 *             "key": "string",
                 *             "value": "string"
                 *           }
                 *         ]
                 *       },
                 *       "isConfigurableEquipment": true,
                 *       "variationEquipment": [
                 *         0
                 *       ],
                 *       "budgetCostCode": "string",
                 *       "budgetCostType": "string",
                 *       "dimensions": {
                 *         "height": 0,
                 *         "width": 0,
                 *         "depth": 0
                 *       },
                 *       "isCostLocked": true,
                 *       "isPriceLocked": true
                 *     }
                 */
                "application/json": components["schemas"]["Pricebook.V2.EquipmentCreateRequest"];
            };
        };
        responses: {
            /** @description The entity has been created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "code": "string",
                     *       "displayName": "string",
                     *       "description": "string",
                     *       "active": true,
                     *       "price": 0,
                     *       "memberPrice": 0,
                     *       "addOnPrice": 0,
                     *       "addOnMemberPrice": 0,
                     *       "manufacturer": "string",
                     *       "model": "string",
                     *       "manufacturerWarranty": {
                     *         "duration": 0,
                     *         "description": "string"
                     *       },
                     *       "serviceProviderWarranty": {
                     *         "duration": 0,
                     *         "description": "string"
                     *       },
                     *       "categories": [
                     *         0
                     *       ],
                     *       "assets": [
                     *         {
                     *           "alias": "string",
                     *           "fileName": "string",
                     *           "isDefault": true,
                     *           "type": {},
                     *           "url": "string"
                     *         }
                     *       ],
                     *       "recommendations": [
                     *         {
                     *           "skuId": 0,
                     *           "type": {}
                     *         }
                     *       ],
                     *       "upgrades": [
                     *         0
                     *       ],
                     *       "equipmentMaterials": [
                     *         {
                     *           "skuId": 0,
                     *           "quantity": 0
                     *         }
                     *       ],
                     *       "primaryVendor": {
                     *         "id": 0,
                     *         "vendorName": "string",
                     *         "vendorId": 0,
                     *         "memo": "string",
                     *         "vendorPart": "string",
                     *         "cost": 0,
                     *         "active": true,
                     *         "primarySubAccount": {
                     *           "id": 0,
                     *           "cost": 0,
                     *           "accountName": "string"
                     *         },
                     *         "otherSubAccounts": [
                     *           {
                     *             "id": 0,
                     *             "cost": 0,
                     *             "accountName": "string"
                     *           }
                     *         ]
                     *       },
                     *       "otherVendors": [
                     *         {
                     *           "id": 0,
                     *           "vendorName": "string",
                     *           "vendorId": 0,
                     *           "memo": "string",
                     *           "vendorPart": "string",
                     *           "cost": 0,
                     *           "active": true,
                     *           "primarySubAccount": {
                     *             "id": 0,
                     *             "cost": 0,
                     *             "accountName": "string"
                     *           },
                     *           "otherSubAccounts": [
                     *             {
                     *               "id": 0,
                     *               "cost": 0,
                     *               "accountName": "string"
                     *             }
                     *           ]
                     *         }
                     *       ],
                     *       "account": "string",
                     *       "costOfSaleAccount": "string",
                     *       "assetAccount": "string",
                     *       "crossSaleGroup": "string",
                     *       "paysCommission": true,
                     *       "bonus": 0,
                     *       "commissionBonus": 0,
                     *       "hours": 0,
                     *       "taxable": true,
                     *       "cost": 0,
                     *       "unitOfMeasure": "string",
                     *       "isInventory": true,
                     *       "modifiedOn": "string",
                     *       "source": "string",
                     *       "externalId": "string",
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "isConfigurableEquipment": true,
                     *       "variationsOrConfigurableEquipment": [
                     *         0
                     *       ],
                     *       "typeId": 0,
                     *       "displayInAmount": true,
                     *       "generalLedgerAccountId": 0,
                     *       "createdOn": "string",
                     *       "defaultAssetUrl": "string",
                     *       "dimensions": {
                     *         "height": 0,
                     *         "width": 0,
                     *         "depth": 0
                     *       },
                     *       "budgetCostCode": "string",
                     *       "budgetCostType": "string",
                     *       "isCostLocked": true,
                     *       "isPriceLocked": true
                     *     }
                     */
                    "application/json": components["schemas"]["Pricebook.V2.EquipmentResponse"];
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
    Equipment_Get: {
        parameters: {
            query?: {
                /**
                 * @description Items that are created with a specific guid, could be fetched/updated/removed
                 *     only when the same application guid is provided.
                 */
                externalDataApplicationGuid?: string;
            };
            header?: never;
            path: {
                /** @description The id of the equipment you are requesting */
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
                     *       "displayName": "string",
                     *       "description": "string",
                     *       "active": true,
                     *       "price": 0,
                     *       "memberPrice": 0,
                     *       "addOnPrice": 0,
                     *       "addOnMemberPrice": 0,
                     *       "manufacturer": "string",
                     *       "model": "string",
                     *       "manufacturerWarranty": {
                     *         "duration": 0,
                     *         "description": "string"
                     *       },
                     *       "serviceProviderWarranty": {
                     *         "duration": 0,
                     *         "description": "string"
                     *       },
                     *       "categories": [
                     *         0
                     *       ],
                     *       "assets": [
                     *         {
                     *           "alias": "string",
                     *           "fileName": "string",
                     *           "isDefault": true,
                     *           "type": {},
                     *           "url": "string"
                     *         }
                     *       ],
                     *       "recommendations": [
                     *         {
                     *           "skuId": 0,
                     *           "type": {}
                     *         }
                     *       ],
                     *       "upgrades": [
                     *         0
                     *       ],
                     *       "equipmentMaterials": [
                     *         {
                     *           "skuId": 0,
                     *           "quantity": 0
                     *         }
                     *       ],
                     *       "primaryVendor": {
                     *         "id": 0,
                     *         "vendorName": "string",
                     *         "vendorId": 0,
                     *         "memo": "string",
                     *         "vendorPart": "string",
                     *         "cost": 0,
                     *         "active": true,
                     *         "primarySubAccount": {
                     *           "id": 0,
                     *           "cost": 0,
                     *           "accountName": "string"
                     *         },
                     *         "otherSubAccounts": [
                     *           {
                     *             "id": 0,
                     *             "cost": 0,
                     *             "accountName": "string"
                     *           }
                     *         ]
                     *       },
                     *       "otherVendors": [
                     *         {
                     *           "id": 0,
                     *           "vendorName": "string",
                     *           "vendorId": 0,
                     *           "memo": "string",
                     *           "vendorPart": "string",
                     *           "cost": 0,
                     *           "active": true,
                     *           "primarySubAccount": {
                     *             "id": 0,
                     *             "cost": 0,
                     *             "accountName": "string"
                     *           },
                     *           "otherSubAccounts": [
                     *             {
                     *               "id": 0,
                     *               "cost": 0,
                     *               "accountName": "string"
                     *             }
                     *           ]
                     *         }
                     *       ],
                     *       "account": "string",
                     *       "costOfSaleAccount": "string",
                     *       "assetAccount": "string",
                     *       "crossSaleGroup": "string",
                     *       "paysCommission": true,
                     *       "bonus": 0,
                     *       "commissionBonus": 0,
                     *       "hours": 0,
                     *       "taxable": true,
                     *       "cost": 0,
                     *       "unitOfMeasure": "string",
                     *       "isInventory": true,
                     *       "modifiedOn": "string",
                     *       "source": "string",
                     *       "externalId": "string",
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "isConfigurableEquipment": true,
                     *       "variationsOrConfigurableEquipment": [
                     *         0
                     *       ],
                     *       "typeId": 0,
                     *       "displayInAmount": true,
                     *       "generalLedgerAccountId": 0,
                     *       "createdOn": "string",
                     *       "defaultAssetUrl": "string",
                     *       "dimensions": {
                     *         "height": 0,
                     *         "width": 0,
                     *         "depth": 0
                     *       },
                     *       "budgetCostCode": "string",
                     *       "budgetCostType": "string",
                     *       "isCostLocked": true,
                     *       "isPriceLocked": true
                     *     }
                     */
                    "application/json": components["schemas"]["Pricebook.V2.EquipmentResponse"];
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
    Equipment_Delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of the SKU you are deleting */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
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
    Equipment_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Unique id for the SKU is modified */
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
                 *       "code": "string",
                 *       "displayName": "string",
                 *       "description": "string",
                 *       "price": 0,
                 *       "memberPrice": 0,
                 *       "addOnPrice": 0,
                 *       "addOnMemberPrice": 0,
                 *       "active": true,
                 *       "manufacturer": "string",
                 *       "model": "string",
                 *       "manufacturerWarranty": {
                 *         "duration": 0,
                 *         "description": "string"
                 *       },
                 *       "serviceProviderWarranty": {
                 *         "duration": 0,
                 *         "description": "string"
                 *       },
                 *       "assets": [
                 *         {
                 *           "type": {},
                 *           "alias": "string",
                 *           "url": "string",
                 *           "isDefault": true
                 *         }
                 *       ],
                 *       "recommendations": [
                 *         {
                 *           "skuId": 0,
                 *           "type": "Service"
                 *         }
                 *       ],
                 *       "upgrades": [
                 *         0
                 *       ],
                 *       "equipmentMaterials": [
                 *         {
                 *           "skuId": 0,
                 *           "quantity": 0
                 *         }
                 *       ],
                 *       "categories": [
                 *         0
                 *       ],
                 *       "primaryVendor": {
                 *         "vendorId": 0,
                 *         "memo": "string",
                 *         "vendorPart": "string",
                 *         "cost": 0,
                 *         "active": true,
                 *         "primarySubAccount": {
                 *           "cost": 0,
                 *           "accountName": "string"
                 *         },
                 *         "otherSubAccounts": [
                 *           {
                 *             "cost": 0,
                 *             "accountName": "string"
                 *           }
                 *         ]
                 *       },
                 *       "otherVendors": [
                 *         {
                 *           "vendorId": 0,
                 *           "memo": "string",
                 *           "vendorPart": "string",
                 *           "cost": 0,
                 *           "active": true,
                 *           "primarySubAccount": {
                 *             "cost": 0,
                 *             "accountName": "string"
                 *           },
                 *           "otherSubAccounts": [
                 *             {
                 *               "cost": 0,
                 *               "accountName": "string"
                 *             }
                 *           ]
                 *         }
                 *       ],
                 *       "account": "string",
                 *       "costOfSaleAccount": "string",
                 *       "assetAccount": "string",
                 *       "intacctGlGroupAccount": "string",
                 *       "crossSaleGroup": "string",
                 *       "paysCommission": true,
                 *       "bonus": 0,
                 *       "commissionBonus": 0,
                 *       "hours": 0,
                 *       "taxable": true,
                 *       "cost": 0,
                 *       "unitOfMeasure": "string",
                 *       "isInventory": true,
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
                 *       "isConfigurableEquipment": true,
                 *       "variationEquipment": [
                 *         0
                 *       ],
                 *       "dimensions": {
                 *         "height": 0,
                 *         "width": 0,
                 *         "depth": 0
                 *       },
                 *       "budgetCostCode": "string",
                 *       "budgetCostType": "string",
                 *       "isCostLocked": true,
                 *       "isPriceLocked": true
                 *     }
                 */
                "application/json": components["schemas"]["Pricebook.V2.EquipmentUpdateRequest"];
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
                     *       "code": "string",
                     *       "displayName": "string",
                     *       "description": "string",
                     *       "active": true,
                     *       "price": 0,
                     *       "memberPrice": 0,
                     *       "addOnPrice": 0,
                     *       "addOnMemberPrice": 0,
                     *       "manufacturer": "string",
                     *       "model": "string",
                     *       "manufacturerWarranty": {
                     *         "duration": 0,
                     *         "description": "string"
                     *       },
                     *       "serviceProviderWarranty": {
                     *         "duration": 0,
                     *         "description": "string"
                     *       },
                     *       "categories": [
                     *         0
                     *       ],
                     *       "assets": [
                     *         {
                     *           "alias": "string",
                     *           "fileName": "string",
                     *           "isDefault": true,
                     *           "type": {},
                     *           "url": "string"
                     *         }
                     *       ],
                     *       "recommendations": [
                     *         {
                     *           "skuId": 0,
                     *           "type": {}
                     *         }
                     *       ],
                     *       "upgrades": [
                     *         0
                     *       ],
                     *       "equipmentMaterials": [
                     *         {
                     *           "skuId": 0,
                     *           "quantity": 0
                     *         }
                     *       ],
                     *       "primaryVendor": {
                     *         "id": 0,
                     *         "vendorName": "string",
                     *         "vendorId": 0,
                     *         "memo": "string",
                     *         "vendorPart": "string",
                     *         "cost": 0,
                     *         "active": true,
                     *         "primarySubAccount": {
                     *           "id": 0,
                     *           "cost": 0,
                     *           "accountName": "string"
                     *         },
                     *         "otherSubAccounts": [
                     *           {
                     *             "id": 0,
                     *             "cost": 0,
                     *             "accountName": "string"
                     *           }
                     *         ]
                     *       },
                     *       "otherVendors": [
                     *         {
                     *           "id": 0,
                     *           "vendorName": "string",
                     *           "vendorId": 0,
                     *           "memo": "string",
                     *           "vendorPart": "string",
                     *           "cost": 0,
                     *           "active": true,
                     *           "primarySubAccount": {
                     *             "id": 0,
                     *             "cost": 0,
                     *             "accountName": "string"
                     *           },
                     *           "otherSubAccounts": [
                     *             {
                     *               "id": 0,
                     *               "cost": 0,
                     *               "accountName": "string"
                     *             }
                     *           ]
                     *         }
                     *       ],
                     *       "account": "string",
                     *       "costOfSaleAccount": "string",
                     *       "assetAccount": "string",
                     *       "crossSaleGroup": "string",
                     *       "paysCommission": true,
                     *       "bonus": 0,
                     *       "commissionBonus": 0,
                     *       "hours": 0,
                     *       "taxable": true,
                     *       "cost": 0,
                     *       "unitOfMeasure": "string",
                     *       "isInventory": true,
                     *       "modifiedOn": "string",
                     *       "source": "string",
                     *       "externalId": "string",
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "isConfigurableEquipment": true,
                     *       "variationsOrConfigurableEquipment": [
                     *         0
                     *       ],
                     *       "typeId": 0,
                     *       "displayInAmount": true,
                     *       "generalLedgerAccountId": 0,
                     *       "createdOn": "string",
                     *       "defaultAssetUrl": "string",
                     *       "dimensions": {
                     *         "height": 0,
                     *         "width": 0,
                     *         "depth": 0
                     *       },
                     *       "budgetCostCode": "string",
                     *       "budgetCostType": "string",
                     *       "isCostLocked": true,
                     *       "isPriceLocked": true
                     *     }
                     */
                    "application/json": components["schemas"]["Pricebook.V2.EquipmentResponse"];
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
    Export_Categories: {
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
                    "application/json": components["schemas"]["ExportResponse_Of_Pricebook.V2.ExportCategoryResponse"];
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
    Export_Equipment: {
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
                     *           "displayName": "string",
                     *           "description": "string",
                     *           "active": true,
                     *           "price": 0,
                     *           "memberPrice": 0,
                     *           "addOnPrice": 0,
                     *           "addOnMemberPrice": 0,
                     *           "manufacturer": "string",
                     *           "model": "string",
                     *           "manufacturerWarranty": {
                     *             "duration": 0,
                     *             "description": "string"
                     *           },
                     *           "serviceProviderWarranty": {
                     *             "duration": 0,
                     *             "description": "string"
                     *           },
                     *           "categories": [
                     *             0
                     *           ],
                     *           "assets": [
                     *             {
                     *               "alias": "string",
                     *               "fileName": "string",
                     *               "isDefault": true,
                     *               "type": {},
                     *               "url": "string"
                     *             }
                     *           ],
                     *           "recommendations": [
                     *             {
                     *               "skuId": 0,
                     *               "type": {}
                     *             }
                     *           ],
                     *           "upgrades": [
                     *             0
                     *           ],
                     *           "equipmentMaterials": [
                     *             {
                     *               "skuId": 0,
                     *               "quantity": 0
                     *             }
                     *           ],
                     *           "primaryVendor": {
                     *             "id": 0,
                     *             "vendorName": "string",
                     *             "vendorId": 0,
                     *             "memo": "string",
                     *             "vendorPart": "string",
                     *             "cost": 0,
                     *             "active": true,
                     *             "primarySubAccount": {
                     *               "id": 0,
                     *               "cost": 0,
                     *               "accountName": "string"
                     *             },
                     *             "otherSubAccounts": [
                     *               {
                     *                 "id": 0,
                     *                 "cost": 0,
                     *                 "accountName": "string"
                     *               }
                     *             ]
                     *           },
                     *           "otherVendors": [
                     *             {
                     *               "id": 0,
                     *               "vendorName": "string",
                     *               "vendorId": 0,
                     *               "memo": "string",
                     *               "vendorPart": "string",
                     *               "cost": 0,
                     *               "active": true,
                     *               "primarySubAccount": {
                     *                 "id": 0,
                     *                 "cost": 0,
                     *                 "accountName": "string"
                     *               },
                     *               "otherSubAccounts": [
                     *                 {
                     *                   "id": 0,
                     *                   "cost": 0,
                     *                   "accountName": "string"
                     *                 }
                     *               ]
                     *             }
                     *           ],
                     *           "account": "string",
                     *           "costOfSaleAccount": "string",
                     *           "assetAccount": "string",
                     *           "crossSaleGroup": "string",
                     *           "paysCommission": true,
                     *           "bonus": 0,
                     *           "commissionBonus": 0,
                     *           "hours": 0,
                     *           "taxable": true,
                     *           "cost": 0,
                     *           "unitOfMeasure": "string",
                     *           "isInventory": true,
                     *           "modifiedOn": "string",
                     *           "source": "string",
                     *           "externalId": "string",
                     *           "externalData": [
                     *             {
                     *               "key": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "isConfigurableEquipment": true,
                     *           "variationsOrConfigurableEquipment": [
                     *             0
                     *           ],
                     *           "typeId": 0,
                     *           "displayInAmount": true,
                     *           "generalLedgerAccountId": 0,
                     *           "createdOn": "string",
                     *           "defaultAssetUrl": "string",
                     *           "dimensions": {
                     *             "height": 0,
                     *             "width": 0,
                     *             "depth": 0
                     *           },
                     *           "budgetCostCode": "string",
                     *           "budgetCostType": "string",
                     *           "isCostLocked": true,
                     *           "isPriceLocked": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Pricebook.V2.ExportEquipmentResponse"];
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
    Export_Services: {
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
                     *           "displayName": "string",
                     *           "description": "string",
                     *           "warranty": {
                     *             "duration": 0,
                     *             "description": "string"
                     *           },
                     *           "categories": [
                     *             {
                     *               "id": 0,
                     *               "name": "string",
                     *               "active": true
                     *             }
                     *           ],
                     *           "price": 0,
                     *           "memberPrice": 0,
                     *           "addOnPrice": 0,
                     *           "addOnMemberPrice": 0,
                     *           "taxable": true,
                     *           "account": "string",
                     *           "hours": 0,
                     *           "isLabor": true,
                     *           "recommendations": [
                     *             0
                     *           ],
                     *           "upgrades": [
                     *             0
                     *           ],
                     *           "assets": [
                     *             {
                     *               "alias": "string",
                     *               "fileName": "string",
                     *               "isDefault": true,
                     *               "type": {},
                     *               "url": "string"
                     *             }
                     *           ],
                     *           "serviceMaterials": [
                     *             {
                     *               "skuId": 0,
                     *               "quantity": 0
                     *             }
                     *           ],
                     *           "serviceEquipment": [
                     *             {
                     *               "skuId": 0,
                     *               "quantity": 0
                     *             }
                     *           ],
                     *           "active": true,
                     *           "crossSaleGroup": "string",
                     *           "paysCommission": true,
                     *           "bonus": 0,
                     *           "commissionBonus": 0,
                     *           "modifiedOn": "string",
                     *           "source": "string",
                     *           "externalId": "string",
                     *           "externalData": [
                     *             {
                     *               "key": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "businessUnitId": 0,
                     *           "cost": 0,
                     *           "createdOn": "string",
                     *           "soldByCommission": 0,
                     *           "defaultAssetUrl": "string",
                     *           "budgetCostCode": "string",
                     *           "budgetCostType": "string",
                     *           "isPriceLocked": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Pricebook.V2.ExportServiceResponse"];
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
    Export_Materials: {
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
                     *           "displayName": "string",
                     *           "description": "string",
                     *           "cost": 0,
                     *           "active": true,
                     *           "price": 0,
                     *           "memberPrice": 0,
                     *           "addOnPrice": 0,
                     *           "addOnMemberPrice": 0,
                     *           "hours": 0,
                     *           "bonus": 0,
                     *           "commissionBonus": 0,
                     *           "paysCommission": true,
                     *           "deductAsJobCost": true,
                     *           "unitOfMeasure": "string",
                     *           "isInventory": true,
                     *           "account": "string",
                     *           "costOfSaleAccount": "string",
                     *           "assetAccount": "string",
                     *           "taxable": true,
                     *           "primaryVendor": {
                     *             "id": 0,
                     *             "vendorName": "string",
                     *             "vendorId": 0,
                     *             "memo": "string",
                     *             "vendorPart": "string",
                     *             "cost": 0,
                     *             "active": true,
                     *             "primarySubAccount": {
                     *               "id": 0,
                     *               "cost": 0,
                     *               "accountName": "string"
                     *             },
                     *             "otherSubAccounts": [
                     *               {
                     *                 "id": 0,
                     *                 "cost": 0,
                     *                 "accountName": "string"
                     *               }
                     *             ]
                     *           },
                     *           "otherVendors": [
                     *             {
                     *               "id": 0,
                     *               "vendorName": "string",
                     *               "vendorId": 0,
                     *               "memo": "string",
                     *               "vendorPart": "string",
                     *               "cost": 0,
                     *               "active": true,
                     *               "primarySubAccount": {
                     *                 "id": 0,
                     *                 "cost": 0,
                     *                 "accountName": "string"
                     *               },
                     *               "otherSubAccounts": [
                     *                 {
                     *                   "id": 0,
                     *                   "cost": 0,
                     *                   "accountName": "string"
                     *                 }
                     *               ]
                     *             }
                     *           ],
                     *           "categories": [
                     *             0
                     *           ],
                     *           "assets": [
                     *             {
                     *               "alias": "string",
                     *               "fileName": "string",
                     *               "isDefault": true,
                     *               "type": {},
                     *               "url": "string"
                     *             }
                     *           ],
                     *           "modifiedOn": "string",
                     *           "source": "string",
                     *           "externalId": "string",
                     *           "externalData": [
                     *             {
                     *               "key": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "isConfigurableMaterial": true,
                     *           "chargeableByDefault": true,
                     *           "variationsOrConfigurableMaterials": [
                     *             0
                     *           ],
                     *           "businessUnitId": 0,
                     *           "createdById": 0,
                     *           "createdOn": "string",
                     *           "displayInAmount": true,
                     *           "generalLedgerAccountId": 0,
                     *           "isOtherDirectCost": true,
                     *           "costTypeId": 0,
                     *           "defaultAssetUrl": "string",
                     *           "budgetCostCode": "string",
                     *           "budgetCostType": "string",
                     *           "isCostLocked": true,
                     *           "isPriceLocked": true,
                     *           "isChemical": true,
                     *           "epaNumber": "string",
                     *           "activeIngredients": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["ExportResponse_Of_Pricebook.V2.ExportMaterialResponse"];
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
    Images_Get: {
        parameters: {
            query?: {
                /**
                 * @description The storage path of the pricebook image to retrieve, as returned by other pricebook API endpoints.
                 *     The path is case sensitive and must begin with "Images/".
                 */
                path?: string;
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
            302: {
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
    Images_Post: {
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
                 *       "file": "string"
                 *     }
                 */
                "application/json": {
                    /** Format: binary */
                    file?: string;
                };
            };
        };
        responses: {
            /** @description The entity has been created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "path": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Pricebook.V2.ImageUploadResponse"];
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
    Materials_GetList: {
        parameters: {
            query?: {
                /** @description Allows filtering by Is Other Direct Cost */
                isOtherDirectCost?: boolean;
                /** @description Allows filtering by Cost Type Ids */
                costTypeIds?: string;
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
                 *     Available fields are: Id, Code, DisplayName, CreatedOn, ModifiedOn, Price, MemberPrice, AddOnPrice, AddOnMemberPrice, MaterialsCost, PrimaryVendor, Cost, Manufacturer, Priority.
                 */
                sort?: string;
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
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
                 * @description Items that are created with a specific guid, could be fetched/updated/removed
                 *     only when the same application guid is provided
                 */
                externalDataApplicationGuid?: string;
                /** @description Allows filtering by external data key */
                externalDataKey?: string;
                /** @description Allows filtering by external data values */
                externalDataValues?: string;
                /**
                 * @description Optional search text to filter by. Performs case-insensitive partial match on
                 *     Display Name, Code, and Description fields.
                 */
                searchText?: string;
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
                     *           "displayName": "string",
                     *           "description": "string",
                     *           "cost": 0,
                     *           "active": true,
                     *           "price": 0,
                     *           "memberPrice": 0,
                     *           "addOnPrice": 0,
                     *           "addOnMemberPrice": 0,
                     *           "hours": 0,
                     *           "bonus": 0,
                     *           "commissionBonus": 0,
                     *           "paysCommission": true,
                     *           "deductAsJobCost": true,
                     *           "unitOfMeasure": "string",
                     *           "isInventory": true,
                     *           "account": "string",
                     *           "costOfSaleAccount": "string",
                     *           "assetAccount": "string",
                     *           "taxable": true,
                     *           "primaryVendor": {
                     *             "id": 0,
                     *             "vendorName": "string",
                     *             "vendorId": 0,
                     *             "memo": "string",
                     *             "vendorPart": "string",
                     *             "cost": 0,
                     *             "active": true,
                     *             "primarySubAccount": {
                     *               "id": 0,
                     *               "cost": 0,
                     *               "accountName": "string"
                     *             },
                     *             "otherSubAccounts": [
                     *               {
                     *                 "id": 0,
                     *                 "cost": 0,
                     *                 "accountName": "string"
                     *               }
                     *             ]
                     *           },
                     *           "otherVendors": [
                     *             {
                     *               "id": 0,
                     *               "vendorName": "string",
                     *               "vendorId": 0,
                     *               "memo": "string",
                     *               "vendorPart": "string",
                     *               "cost": 0,
                     *               "active": true,
                     *               "primarySubAccount": {
                     *                 "id": 0,
                     *                 "cost": 0,
                     *                 "accountName": "string"
                     *               },
                     *               "otherSubAccounts": [
                     *                 {
                     *                   "id": 0,
                     *                   "cost": 0,
                     *                   "accountName": "string"
                     *                 }
                     *               ]
                     *             }
                     *           ],
                     *           "categories": [
                     *             0
                     *           ],
                     *           "assets": [
                     *             {
                     *               "alias": "string",
                     *               "fileName": "string",
                     *               "isDefault": true,
                     *               "type": {},
                     *               "url": "string"
                     *             }
                     *           ],
                     *           "modifiedOn": "string",
                     *           "source": "string",
                     *           "externalId": "string",
                     *           "externalData": [
                     *             {
                     *               "key": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "isConfigurableMaterial": true,
                     *           "chargeableByDefault": true,
                     *           "variationsOrConfigurableMaterials": [
                     *             0
                     *           ],
                     *           "businessUnitId": 0,
                     *           "createdById": 0,
                     *           "createdOn": "string",
                     *           "displayInAmount": true,
                     *           "generalLedgerAccountId": 0,
                     *           "isOtherDirectCost": true,
                     *           "costTypeId": 0,
                     *           "defaultAssetUrl": "string",
                     *           "budgetCostCode": "string",
                     *           "budgetCostType": "string",
                     *           "isCostLocked": true,
                     *           "isPriceLocked": true,
                     *           "isChemical": true,
                     *           "epaNumber": "string",
                     *           "activeIngredients": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Pricebook.V2.MaterialResponse"];
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
    Materials_Create: {
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
                 *       "code": "string",
                 *       "displayName": "string",
                 *       "description": "string",
                 *       "cost": 0,
                 *       "active": true,
                 *       "price": 0,
                 *       "memberPrice": 0,
                 *       "addOnPrice": 0,
                 *       "addOnMemberPrice": 0,
                 *       "hours": 0,
                 *       "bonus": 0,
                 *       "commissionBonus": 0,
                 *       "paysCommission": true,
                 *       "deductAsJobCost": true,
                 *       "unitOfMeasure": "string",
                 *       "isInventory": true,
                 *       "account": "string",
                 *       "costOfSaleAccount": "string",
                 *       "assetAccount": "string",
                 *       "intacctGlGroupAccount": "string",
                 *       "taxable": true,
                 *       "primaryVendor": {
                 *         "vendorId": 0,
                 *         "memo": "string",
                 *         "vendorPart": "string",
                 *         "cost": 0,
                 *         "active": true,
                 *         "primarySubAccount": {
                 *           "cost": 0,
                 *           "accountName": "string"
                 *         },
                 *         "otherSubAccounts": [
                 *           {
                 *             "cost": 0,
                 *             "accountName": "string"
                 *           }
                 *         ]
                 *       },
                 *       "otherVendors": [
                 *         {
                 *           "vendorId": 0,
                 *           "memo": "string",
                 *           "vendorPart": "string",
                 *           "cost": 0,
                 *           "active": true,
                 *           "primarySubAccount": {
                 *             "cost": 0,
                 *             "accountName": "string"
                 *           },
                 *           "otherSubAccounts": [
                 *             {
                 *               "cost": 0,
                 *               "accountName": "string"
                 *             }
                 *           ]
                 *         }
                 *       ],
                 *       "assets": [
                 *         {
                 *           "type": {},
                 *           "alias": "string",
                 *           "url": "string",
                 *           "isDefault": true
                 *         }
                 *       ],
                 *       "categories": [
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
                 *       "isConfigurableMaterial": true,
                 *       "chargeableByDefault": true,
                 *       "variationMaterials": [
                 *         0
                 *       ],
                 *       "isOtherDirectCost": true,
                 *       "costTypeId": 0,
                 *       "budgetCostCode": "string",
                 *       "budgetCostType": "string",
                 *       "isCostLocked": true,
                 *       "isPriceLocked": true,
                 *       "isChemical": true,
                 *       "epaNumber": "string",
                 *       "activeIngredients": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Pricebook.V2.MaterialCreateRequest"];
            };
        };
        responses: {
            /** @description The entity has been created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "code": "string",
                     *       "displayName": "string",
                     *       "description": "string",
                     *       "cost": 0,
                     *       "active": true,
                     *       "price": 0,
                     *       "memberPrice": 0,
                     *       "addOnPrice": 0,
                     *       "addOnMemberPrice": 0,
                     *       "hours": 0,
                     *       "bonus": 0,
                     *       "commissionBonus": 0,
                     *       "paysCommission": true,
                     *       "deductAsJobCost": true,
                     *       "unitOfMeasure": "string",
                     *       "isInventory": true,
                     *       "account": "string",
                     *       "costOfSaleAccount": "string",
                     *       "assetAccount": "string",
                     *       "taxable": true,
                     *       "primaryVendor": {
                     *         "id": 0,
                     *         "vendorName": "string",
                     *         "vendorId": 0,
                     *         "memo": "string",
                     *         "vendorPart": "string",
                     *         "cost": 0,
                     *         "active": true,
                     *         "primarySubAccount": {
                     *           "id": 0,
                     *           "cost": 0,
                     *           "accountName": "string"
                     *         },
                     *         "otherSubAccounts": [
                     *           {
                     *             "id": 0,
                     *             "cost": 0,
                     *             "accountName": "string"
                     *           }
                     *         ]
                     *       },
                     *       "otherVendors": [
                     *         {
                     *           "id": 0,
                     *           "vendorName": "string",
                     *           "vendorId": 0,
                     *           "memo": "string",
                     *           "vendorPart": "string",
                     *           "cost": 0,
                     *           "active": true,
                     *           "primarySubAccount": {
                     *             "id": 0,
                     *             "cost": 0,
                     *             "accountName": "string"
                     *           },
                     *           "otherSubAccounts": [
                     *             {
                     *               "id": 0,
                     *               "cost": 0,
                     *               "accountName": "string"
                     *             }
                     *           ]
                     *         }
                     *       ],
                     *       "categories": [
                     *         0
                     *       ],
                     *       "assets": [
                     *         {
                     *           "alias": "string",
                     *           "fileName": "string",
                     *           "isDefault": true,
                     *           "type": {},
                     *           "url": "string"
                     *         }
                     *       ],
                     *       "modifiedOn": "string",
                     *       "source": "string",
                     *       "externalId": "string",
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "isConfigurableMaterial": true,
                     *       "chargeableByDefault": true,
                     *       "variationsOrConfigurableMaterials": [
                     *         0
                     *       ],
                     *       "businessUnitId": 0,
                     *       "createdById": 0,
                     *       "createdOn": "string",
                     *       "displayInAmount": true,
                     *       "generalLedgerAccountId": 0,
                     *       "isOtherDirectCost": true,
                     *       "costTypeId": 0,
                     *       "defaultAssetUrl": "string",
                     *       "budgetCostCode": "string",
                     *       "budgetCostType": "string",
                     *       "isCostLocked": true,
                     *       "isPriceLocked": true,
                     *       "isChemical": true,
                     *       "epaNumber": "string",
                     *       "activeIngredients": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Pricebook.V2.MaterialResponse"];
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
    Materials_Get: {
        parameters: {
            query?: {
                /**
                 * @description Items that are created with a specific guid, could be fetched/updated/removed
                 *     only when the same application guid is provided.
                 */
                externalDataApplicationGuid?: string;
            };
            header?: never;
            path: {
                /** @description The id of the material you are requesting */
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
                     *       "displayName": "string",
                     *       "description": "string",
                     *       "cost": 0,
                     *       "active": true,
                     *       "price": 0,
                     *       "memberPrice": 0,
                     *       "addOnPrice": 0,
                     *       "addOnMemberPrice": 0,
                     *       "hours": 0,
                     *       "bonus": 0,
                     *       "commissionBonus": 0,
                     *       "paysCommission": true,
                     *       "deductAsJobCost": true,
                     *       "unitOfMeasure": "string",
                     *       "isInventory": true,
                     *       "account": "string",
                     *       "costOfSaleAccount": "string",
                     *       "assetAccount": "string",
                     *       "taxable": true,
                     *       "primaryVendor": {
                     *         "id": 0,
                     *         "vendorName": "string",
                     *         "vendorId": 0,
                     *         "memo": "string",
                     *         "vendorPart": "string",
                     *         "cost": 0,
                     *         "active": true,
                     *         "primarySubAccount": {
                     *           "id": 0,
                     *           "cost": 0,
                     *           "accountName": "string"
                     *         },
                     *         "otherSubAccounts": [
                     *           {
                     *             "id": 0,
                     *             "cost": 0,
                     *             "accountName": "string"
                     *           }
                     *         ]
                     *       },
                     *       "otherVendors": [
                     *         {
                     *           "id": 0,
                     *           "vendorName": "string",
                     *           "vendorId": 0,
                     *           "memo": "string",
                     *           "vendorPart": "string",
                     *           "cost": 0,
                     *           "active": true,
                     *           "primarySubAccount": {
                     *             "id": 0,
                     *             "cost": 0,
                     *             "accountName": "string"
                     *           },
                     *           "otherSubAccounts": [
                     *             {
                     *               "id": 0,
                     *               "cost": 0,
                     *               "accountName": "string"
                     *             }
                     *           ]
                     *         }
                     *       ],
                     *       "categories": [
                     *         0
                     *       ],
                     *       "assets": [
                     *         {
                     *           "alias": "string",
                     *           "fileName": "string",
                     *           "isDefault": true,
                     *           "type": {},
                     *           "url": "string"
                     *         }
                     *       ],
                     *       "modifiedOn": "string",
                     *       "source": "string",
                     *       "externalId": "string",
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "isConfigurableMaterial": true,
                     *       "chargeableByDefault": true,
                     *       "variationsOrConfigurableMaterials": [
                     *         0
                     *       ],
                     *       "businessUnitId": 0,
                     *       "createdById": 0,
                     *       "createdOn": "string",
                     *       "displayInAmount": true,
                     *       "generalLedgerAccountId": 0,
                     *       "isOtherDirectCost": true,
                     *       "costTypeId": 0,
                     *       "defaultAssetUrl": "string",
                     *       "budgetCostCode": "string",
                     *       "budgetCostType": "string",
                     *       "isCostLocked": true,
                     *       "isPriceLocked": true,
                     *       "isChemical": true,
                     *       "epaNumber": "string",
                     *       "activeIngredients": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Pricebook.V2.MaterialResponse"];
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
    Materials_Delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of the SKU you are deleting */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
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
    Materials_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Unique id for the SKU is modified */
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
                 *       "code": "string",
                 *       "displayName": "string",
                 *       "description": "string",
                 *       "cost": 0,
                 *       "active": true,
                 *       "price": 0,
                 *       "memberPrice": 0,
                 *       "addOnPrice": 0,
                 *       "addOnMemberPrice": 0,
                 *       "hours": 0,
                 *       "bonus": 0,
                 *       "commissionBonus": 0,
                 *       "paysCommission": true,
                 *       "deductAsJobCost": true,
                 *       "unitOfMeasure": "string",
                 *       "isInventory": true,
                 *       "account": "string",
                 *       "costOfSaleAccount": "string",
                 *       "assetAccount": "string",
                 *       "intacctGlGroupAccount": "string",
                 *       "taxable": true,
                 *       "primaryVendor": {
                 *         "vendorId": 0,
                 *         "memo": "string",
                 *         "vendorPart": "string",
                 *         "cost": 0,
                 *         "active": true,
                 *         "primarySubAccount": {
                 *           "cost": 0,
                 *           "accountName": "string"
                 *         },
                 *         "otherSubAccounts": [
                 *           {
                 *             "cost": 0,
                 *             "accountName": "string"
                 *           }
                 *         ]
                 *       },
                 *       "otherVendors": [
                 *         {
                 *           "vendorId": 0,
                 *           "memo": "string",
                 *           "vendorPart": "string",
                 *           "cost": 0,
                 *           "active": true,
                 *           "primarySubAccount": {
                 *             "cost": 0,
                 *             "accountName": "string"
                 *           },
                 *           "otherSubAccounts": [
                 *             {
                 *               "cost": 0,
                 *               "accountName": "string"
                 *             }
                 *           ]
                 *         }
                 *       ],
                 *       "assets": [
                 *         {
                 *           "type": {},
                 *           "alias": "string",
                 *           "url": "string",
                 *           "isDefault": true
                 *         }
                 *       ],
                 *       "categories": [
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
                 *       "isConfigurableMaterial": true,
                 *       "chargeableByDefault": true,
                 *       "variationMaterials": [
                 *         0
                 *       ],
                 *       "costTypeId": 0,
                 *       "budgetCostCode": "string",
                 *       "budgetCostType": "string",
                 *       "isCostLocked": true,
                 *       "isPriceLocked": true,
                 *       "isChemical": true,
                 *       "epaNumber": "string",
                 *       "activeIngredients": "string"
                 *     }
                 */
                "application/json": components["schemas"]["Pricebook.V2.MaterialUpdateRequest"];
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
                     *       "code": "string",
                     *       "displayName": "string",
                     *       "description": "string",
                     *       "cost": 0,
                     *       "active": true,
                     *       "price": 0,
                     *       "memberPrice": 0,
                     *       "addOnPrice": 0,
                     *       "addOnMemberPrice": 0,
                     *       "hours": 0,
                     *       "bonus": 0,
                     *       "commissionBonus": 0,
                     *       "paysCommission": true,
                     *       "deductAsJobCost": true,
                     *       "unitOfMeasure": "string",
                     *       "isInventory": true,
                     *       "account": "string",
                     *       "costOfSaleAccount": "string",
                     *       "assetAccount": "string",
                     *       "taxable": true,
                     *       "primaryVendor": {
                     *         "id": 0,
                     *         "vendorName": "string",
                     *         "vendorId": 0,
                     *         "memo": "string",
                     *         "vendorPart": "string",
                     *         "cost": 0,
                     *         "active": true,
                     *         "primarySubAccount": {
                     *           "id": 0,
                     *           "cost": 0,
                     *           "accountName": "string"
                     *         },
                     *         "otherSubAccounts": [
                     *           {
                     *             "id": 0,
                     *             "cost": 0,
                     *             "accountName": "string"
                     *           }
                     *         ]
                     *       },
                     *       "otherVendors": [
                     *         {
                     *           "id": 0,
                     *           "vendorName": "string",
                     *           "vendorId": 0,
                     *           "memo": "string",
                     *           "vendorPart": "string",
                     *           "cost": 0,
                     *           "active": true,
                     *           "primarySubAccount": {
                     *             "id": 0,
                     *             "cost": 0,
                     *             "accountName": "string"
                     *           },
                     *           "otherSubAccounts": [
                     *             {
                     *               "id": 0,
                     *               "cost": 0,
                     *               "accountName": "string"
                     *             }
                     *           ]
                     *         }
                     *       ],
                     *       "categories": [
                     *         0
                     *       ],
                     *       "assets": [
                     *         {
                     *           "alias": "string",
                     *           "fileName": "string",
                     *           "isDefault": true,
                     *           "type": {},
                     *           "url": "string"
                     *         }
                     *       ],
                     *       "modifiedOn": "string",
                     *       "source": "string",
                     *       "externalId": "string",
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "isConfigurableMaterial": true,
                     *       "chargeableByDefault": true,
                     *       "variationsOrConfigurableMaterials": [
                     *         0
                     *       ],
                     *       "businessUnitId": 0,
                     *       "createdById": 0,
                     *       "createdOn": "string",
                     *       "displayInAmount": true,
                     *       "generalLedgerAccountId": 0,
                     *       "isOtherDirectCost": true,
                     *       "costTypeId": 0,
                     *       "defaultAssetUrl": "string",
                     *       "budgetCostCode": "string",
                     *       "budgetCostType": "string",
                     *       "isCostLocked": true,
                     *       "isPriceLocked": true,
                     *       "isChemical": true,
                     *       "epaNumber": "string",
                     *       "activeIngredients": "string"
                     *     }
                     */
                    "application/json": components["schemas"]["Pricebook.V2.MaterialResponse"];
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
    Materials_GetCostTypes: {
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
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "hasMore": true,
                     *       "totalCount": 0,
                     *       "data": [
                     *         {
                     *           "id": 0,
                     *           "name": "string"
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Pricebook.V2.CostTypeResponse"];
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
    MaterialsMarkup_GetList: {
        parameters: {
            query?: {
                page?: number;
                pageSize?: number;
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
            /** @description Materials Markup collection */
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
                     *           "from": 0,
                     *           "to": 0,
                     *           "percent": 0
                     *         }
                     *       ],
                     *       "page": 0,
                     *       "pageSize": 0,
                     *       "totalCount": 0,
                     *       "hasMore": true
                     *     }
                     */
                    "application/json": components["schemas"]["CollectionResult_Of_Pricebook.V2.MaterialsMarkupResponse"];
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
    MaterialsMarkup_Create: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description Materials markup data */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "id": 0,
                 *       "from": 0,
                 *       "to": 0,
                 *       "percent": 0
                 *     }
                 */
                "application/json": components["schemas"]["Pricebook.V2.MaterialsMarkupRequest"];
            };
        };
        responses: {
            /** @description Created materials markup item */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "data": {
                     *         "id": 0,
                     *         "from": 0,
                     *         "to": 0,
                     *         "percent": 0
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["Result_Of_Pricebook.V2.MaterialsMarkupResponse"];
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
    MaterialsMarkup_Get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Materials markup id */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Materials markup item */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "data": {
                     *         "id": 0,
                     *         "from": 0,
                     *         "to": 0,
                     *         "percent": 0
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["Result_Of_Pricebook.V2.MaterialsMarkupResponse"];
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
    MaterialsMarkup_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Materials markup id */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        /** @description Materials markup data */
        requestBody?: {
            content: {
                /**
                 * @example {
                 *       "id": 0,
                 *       "from": 0,
                 *       "to": 0,
                 *       "percent": 0
                 *     }
                 */
                "application/json": components["schemas"]["Pricebook.V2.MaterialsMarkupRequest"];
            };
        };
        responses: {
            /** @description Updated materials markup item */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "data": {
                     *         "id": 0,
                     *         "from": 0,
                     *         "to": 0,
                     *         "percent": 0
                     *       }
                     *     }
                     */
                    "application/json": components["schemas"]["Result_Of_Pricebook.V2.MaterialsMarkupResponse"];
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
    PricebookBulk_Create: {
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
                 *       "services": [
                 *         {
                 *           "serviceMaterials": [
                 *             {
                 *               "skuId": 0,
                 *               "customId": "string",
                 *               "quantity": 0
                 *             }
                 *           ],
                 *           "serviceEquipment": [
                 *             {
                 *               "skuId": 0,
                 *               "customId": "string",
                 *               "quantity": 0
                 *             }
                 *           ],
                 *           "recommendations": [
                 *             {
                 *               "skuId": 0,
                 *               "customId": "string"
                 *             }
                 *           ],
                 *           "upgrades": [
                 *             {
                 *               "skuId": 0,
                 *               "customId": "string"
                 *             }
                 *           ],
                 *           "code": "string",
                 *           "displayName": "string",
                 *           "description": "string",
                 *           "warranty": {
                 *             "duration": 0,
                 *             "description": "string"
                 *           },
                 *           "categories": [
                 *             0
                 *           ],
                 *           "price": 0,
                 *           "memberPrice": 0,
                 *           "addOnPrice": 0,
                 *           "addOnMemberPrice": 0,
                 *           "taxable": true,
                 *           "account": "string",
                 *           "intacctGlGroupAccount": "string",
                 *           "hours": 0,
                 *           "isLabor": true,
                 *           "assets": [
                 *             {
                 *               "type": {},
                 *               "alias": "string",
                 *               "url": "string",
                 *               "isDefault": true
                 *             }
                 *           ],
                 *           "active": true,
                 *           "crossSaleGroup": "string",
                 *           "paysCommission": true,
                 *           "bonus": 0,
                 *           "commissionBonus": 0,
                 *           "externalData": {
                 *             "applicationGuid": "string",
                 *             "externalData": [
                 *               {
                 *                 "key": "string",
                 *                 "value": "string"
                 *               }
                 *             ]
                 *           },
                 *           "budgetCostCode": "string",
                 *           "budgetCostType": "string",
                 *           "isPriceLocked": true,
                 *           "customId": "string"
                 *         }
                 *       ],
                 *       "equipment": [
                 *         {
                 *           "equipmentMaterials": [
                 *             {
                 *               "skuId": 0,
                 *               "customId": "string",
                 *               "quantity": 0
                 *             }
                 *           ],
                 *           "recommendations": [
                 *             {
                 *               "skuId": 0,
                 *               "customId": "string",
                 *               "type": "Service"
                 *             }
                 *           ],
                 *           "upgrades": [
                 *             {
                 *               "skuId": 0,
                 *               "customId": "string"
                 *             }
                 *           ],
                 *           "code": "string",
                 *           "displayName": "string",
                 *           "description": "string",
                 *           "price": 0,
                 *           "memberPrice": 0,
                 *           "addOnPrice": 0,
                 *           "addOnMemberPrice": 0,
                 *           "active": true,
                 *           "manufacturer": "string",
                 *           "model": "string",
                 *           "manufacturerWarranty": {
                 *             "duration": 0,
                 *             "description": "string"
                 *           },
                 *           "serviceProviderWarranty": {
                 *             "duration": 0,
                 *             "description": "string"
                 *           },
                 *           "assets": [
                 *             {
                 *               "type": {},
                 *               "alias": "string",
                 *               "url": "string",
                 *               "isDefault": true
                 *             }
                 *           ],
                 *           "categories": [
                 *             0
                 *           ],
                 *           "primaryVendor": {
                 *             "vendorId": 0,
                 *             "memo": "string",
                 *             "vendorPart": "string",
                 *             "cost": 0,
                 *             "active": true,
                 *             "primarySubAccount": {
                 *               "cost": 0,
                 *               "accountName": "string"
                 *             },
                 *             "otherSubAccounts": [
                 *               {
                 *                 "cost": 0,
                 *                 "accountName": "string"
                 *               }
                 *             ]
                 *           },
                 *           "otherVendors": [
                 *             {
                 *               "vendorId": 0,
                 *               "memo": "string",
                 *               "vendorPart": "string",
                 *               "cost": 0,
                 *               "active": true,
                 *               "primarySubAccount": {
                 *                 "cost": 0,
                 *                 "accountName": "string"
                 *               },
                 *               "otherSubAccounts": [
                 *                 {
                 *                   "cost": 0,
                 *                   "accountName": "string"
                 *                 }
                 *               ]
                 *             }
                 *           ],
                 *           "account": "string",
                 *           "costOfSaleAccount": "string",
                 *           "assetAccount": "string",
                 *           "intacctGlGroupAccount": "string",
                 *           "crossSaleGroup": "string",
                 *           "paysCommission": true,
                 *           "bonus": 0,
                 *           "commissionBonus": 0,
                 *           "hours": 0,
                 *           "taxable": true,
                 *           "cost": 0,
                 *           "unitOfMeasure": "string",
                 *           "isInventory": true,
                 *           "externalData": {
                 *             "applicationGuid": "string",
                 *             "externalData": [
                 *               {
                 *                 "key": "string",
                 *                 "value": "string"
                 *               }
                 *             ]
                 *           },
                 *           "isConfigurableEquipment": true,
                 *           "variationEquipment": [
                 *             0
                 *           ],
                 *           "budgetCostCode": "string",
                 *           "budgetCostType": "string",
                 *           "dimensions": {
                 *             "height": 0,
                 *             "width": 0,
                 *             "depth": 0
                 *           },
                 *           "isCostLocked": true,
                 *           "isPriceLocked": true,
                 *           "customId": "string"
                 *         }
                 *       ],
                 *       "materials": [
                 *         {
                 *           "code": "string",
                 *           "displayName": "string",
                 *           "description": "string",
                 *           "cost": 0,
                 *           "active": true,
                 *           "price": 0,
                 *           "memberPrice": 0,
                 *           "addOnPrice": 0,
                 *           "addOnMemberPrice": 0,
                 *           "hours": 0,
                 *           "bonus": 0,
                 *           "commissionBonus": 0,
                 *           "paysCommission": true,
                 *           "deductAsJobCost": true,
                 *           "unitOfMeasure": "string",
                 *           "isInventory": true,
                 *           "account": "string",
                 *           "costOfSaleAccount": "string",
                 *           "assetAccount": "string",
                 *           "intacctGlGroupAccount": "string",
                 *           "taxable": true,
                 *           "primaryVendor": {
                 *             "vendorId": 0,
                 *             "memo": "string",
                 *             "vendorPart": "string",
                 *             "cost": 0,
                 *             "active": true,
                 *             "primarySubAccount": {
                 *               "cost": 0,
                 *               "accountName": "string"
                 *             },
                 *             "otherSubAccounts": [
                 *               {
                 *                 "cost": 0,
                 *                 "accountName": "string"
                 *               }
                 *             ]
                 *           },
                 *           "otherVendors": [
                 *             {
                 *               "vendorId": 0,
                 *               "memo": "string",
                 *               "vendorPart": "string",
                 *               "cost": 0,
                 *               "active": true,
                 *               "primarySubAccount": {
                 *                 "cost": 0,
                 *                 "accountName": "string"
                 *               },
                 *               "otherSubAccounts": [
                 *                 {
                 *                   "cost": 0,
                 *                   "accountName": "string"
                 *                 }
                 *               ]
                 *             }
                 *           ],
                 *           "assets": [
                 *             {
                 *               "type": {},
                 *               "alias": "string",
                 *               "url": "string",
                 *               "isDefault": true
                 *             }
                 *           ],
                 *           "categories": [
                 *             0
                 *           ],
                 *           "externalData": {
                 *             "applicationGuid": "string",
                 *             "externalData": [
                 *               {
                 *                 "key": "string",
                 *                 "value": "string"
                 *               }
                 *             ]
                 *           },
                 *           "isConfigurableMaterial": true,
                 *           "chargeableByDefault": true,
                 *           "variationMaterials": [
                 *             0
                 *           ],
                 *           "isOtherDirectCost": true,
                 *           "costTypeId": 0,
                 *           "budgetCostCode": "string",
                 *           "budgetCostType": "string",
                 *           "isCostLocked": true,
                 *           "isPriceLocked": true,
                 *           "isChemical": true,
                 *           "epaNumber": "string",
                 *           "activeIngredients": "string",
                 *           "customId": "string"
                 *         }
                 *       ],
                 *       "discountAndFees": [
                 *         {
                 *           "type": {},
                 *           "code": "string",
                 *           "displayName": "string",
                 *           "description": "string",
                 *           "amountType": {},
                 *           "amount": 0,
                 *           "limit": 0,
                 *           "taxable": true,
                 *           "categories": [
                 *             0
                 *           ],
                 *           "hours": 0,
                 *           "assets": [
                 *             {
                 *               "type": {},
                 *               "alias": "string",
                 *               "url": "string",
                 *               "isDefault": true
                 *             }
                 *           ],
                 *           "account": "string",
                 *           "intacctGlGroupAccount": "string",
                 *           "crossSaleGroup": "string",
                 *           "active": true,
                 *           "bonus": 0,
                 *           "commissionBonus": 0,
                 *           "paysCommission": true,
                 *           "excludeFromPayroll": true,
                 *           "externalData": {
                 *             "applicationGuid": "string",
                 *             "externalData": [
                 *               {
                 *                 "key": "string",
                 *                 "value": "string"
                 *               }
                 *             ]
                 *           },
                 *           "budgetCostCode": "string",
                 *           "budgetCostType": "string",
                 *           "customId": "string"
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Pricebook.V2.PricebookBulkCreateRequest"];
            };
        };
        responses: {
            /** @description The entity has been created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "services": [
                     *         {
                     *           "customId": "string",
                     *           "id": 0
                     *         }
                     *       ],
                     *       "equipment": [
                     *         {
                     *           "customId": "string",
                     *           "id": 0
                     *         }
                     *       ],
                     *       "materials": [
                     *         {
                     *           "customId": "string",
                     *           "id": 0
                     *         }
                     *       ],
                     *       "discountAndFees": [
                     *         {
                     *           "customId": "string",
                     *           "id": 0
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["Pricebook.V2.PricebookBulkCreateResponse"];
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
    PricebookBulk_Update: {
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
                 *       "services": [
                 *         {
                 *           "code": "string",
                 *           "displayName": "string",
                 *           "description": "string",
                 *           "warranty": {
                 *             "duration": 0,
                 *             "description": "string"
                 *           },
                 *           "categories": [
                 *             0
                 *           ],
                 *           "price": 0,
                 *           "memberPrice": 0,
                 *           "addOnPrice": 0,
                 *           "addOnMemberPrice": 0,
                 *           "taxable": true,
                 *           "account": "string",
                 *           "intacctGlGroupAccount": "string",
                 *           "hours": 0,
                 *           "isLabor": true,
                 *           "recommendations": [
                 *             0
                 *           ],
                 *           "upgrades": [
                 *             0
                 *           ],
                 *           "assets": [
                 *             {
                 *               "type": {},
                 *               "alias": "string",
                 *               "url": "string",
                 *               "isDefault": true
                 *             }
                 *           ],
                 *           "serviceMaterials": [
                 *             {
                 *               "skuId": 0,
                 *               "quantity": 0
                 *             }
                 *           ],
                 *           "serviceEquipment": [
                 *             {
                 *               "skuId": 0,
                 *               "quantity": 0
                 *             }
                 *           ],
                 *           "active": true,
                 *           "crossSaleGroup": "string",
                 *           "paysCommission": true,
                 *           "bonus": 0,
                 *           "commissionBonus": 0,
                 *           "externalData": {
                 *             "patchMode": {},
                 *             "applicationGuid": "string",
                 *             "externalData": [
                 *               {
                 *                 "key": "string",
                 *                 "value": "string"
                 *               }
                 *             ]
                 *           },
                 *           "budgetCostCode": "string",
                 *           "budgetCostType": "string",
                 *           "isPriceLocked": true,
                 *           "id": 0
                 *         }
                 *       ],
                 *       "equipment": [
                 *         {
                 *           "code": "string",
                 *           "displayName": "string",
                 *           "description": "string",
                 *           "price": 0,
                 *           "memberPrice": 0,
                 *           "addOnPrice": 0,
                 *           "addOnMemberPrice": 0,
                 *           "active": true,
                 *           "manufacturer": "string",
                 *           "model": "string",
                 *           "manufacturerWarranty": {
                 *             "duration": 0,
                 *             "description": "string"
                 *           },
                 *           "serviceProviderWarranty": {
                 *             "duration": 0,
                 *             "description": "string"
                 *           },
                 *           "assets": [
                 *             {
                 *               "type": {},
                 *               "alias": "string",
                 *               "url": "string",
                 *               "isDefault": true
                 *             }
                 *           ],
                 *           "recommendations": [
                 *             {
                 *               "skuId": 0,
                 *               "type": "Service"
                 *             }
                 *           ],
                 *           "upgrades": [
                 *             0
                 *           ],
                 *           "equipmentMaterials": [
                 *             {
                 *               "skuId": 0,
                 *               "quantity": 0
                 *             }
                 *           ],
                 *           "categories": [
                 *             0
                 *           ],
                 *           "primaryVendor": {
                 *             "vendorId": 0,
                 *             "memo": "string",
                 *             "vendorPart": "string",
                 *             "cost": 0,
                 *             "active": true,
                 *             "primarySubAccount": {
                 *               "cost": 0,
                 *               "accountName": "string"
                 *             },
                 *             "otherSubAccounts": [
                 *               {
                 *                 "cost": 0,
                 *                 "accountName": "string"
                 *               }
                 *             ]
                 *           },
                 *           "otherVendors": [
                 *             {
                 *               "vendorId": 0,
                 *               "memo": "string",
                 *               "vendorPart": "string",
                 *               "cost": 0,
                 *               "active": true,
                 *               "primarySubAccount": {
                 *                 "cost": 0,
                 *                 "accountName": "string"
                 *               },
                 *               "otherSubAccounts": [
                 *                 {
                 *                   "cost": 0,
                 *                   "accountName": "string"
                 *                 }
                 *               ]
                 *             }
                 *           ],
                 *           "account": "string",
                 *           "costOfSaleAccount": "string",
                 *           "assetAccount": "string",
                 *           "intacctGlGroupAccount": "string",
                 *           "crossSaleGroup": "string",
                 *           "paysCommission": true,
                 *           "bonus": 0,
                 *           "commissionBonus": 0,
                 *           "hours": 0,
                 *           "taxable": true,
                 *           "cost": 0,
                 *           "unitOfMeasure": "string",
                 *           "isInventory": true,
                 *           "externalData": {
                 *             "patchMode": {},
                 *             "applicationGuid": "string",
                 *             "externalData": [
                 *               {
                 *                 "key": "string",
                 *                 "value": "string"
                 *               }
                 *             ]
                 *           },
                 *           "isConfigurableEquipment": true,
                 *           "variationEquipment": [
                 *             0
                 *           ],
                 *           "dimensions": {
                 *             "height": 0,
                 *             "width": 0,
                 *             "depth": 0
                 *           },
                 *           "budgetCostCode": "string",
                 *           "budgetCostType": "string",
                 *           "isCostLocked": true,
                 *           "isPriceLocked": true,
                 *           "id": 0
                 *         }
                 *       ],
                 *       "materials": [
                 *         {
                 *           "code": "string",
                 *           "displayName": "string",
                 *           "description": "string",
                 *           "cost": 0,
                 *           "active": true,
                 *           "price": 0,
                 *           "memberPrice": 0,
                 *           "addOnPrice": 0,
                 *           "addOnMemberPrice": 0,
                 *           "hours": 0,
                 *           "bonus": 0,
                 *           "commissionBonus": 0,
                 *           "paysCommission": true,
                 *           "deductAsJobCost": true,
                 *           "unitOfMeasure": "string",
                 *           "isInventory": true,
                 *           "account": "string",
                 *           "costOfSaleAccount": "string",
                 *           "assetAccount": "string",
                 *           "intacctGlGroupAccount": "string",
                 *           "taxable": true,
                 *           "primaryVendor": {
                 *             "vendorId": 0,
                 *             "memo": "string",
                 *             "vendorPart": "string",
                 *             "cost": 0,
                 *             "active": true,
                 *             "primarySubAccount": {
                 *               "cost": 0,
                 *               "accountName": "string"
                 *             },
                 *             "otherSubAccounts": [
                 *               {
                 *                 "cost": 0,
                 *                 "accountName": "string"
                 *               }
                 *             ]
                 *           },
                 *           "otherVendors": [
                 *             {
                 *               "vendorId": 0,
                 *               "memo": "string",
                 *               "vendorPart": "string",
                 *               "cost": 0,
                 *               "active": true,
                 *               "primarySubAccount": {
                 *                 "cost": 0,
                 *                 "accountName": "string"
                 *               },
                 *               "otherSubAccounts": [
                 *                 {
                 *                   "cost": 0,
                 *                   "accountName": "string"
                 *                 }
                 *               ]
                 *             }
                 *           ],
                 *           "assets": [
                 *             {
                 *               "type": {},
                 *               "alias": "string",
                 *               "url": "string",
                 *               "isDefault": true
                 *             }
                 *           ],
                 *           "categories": [
                 *             0
                 *           ],
                 *           "externalData": {
                 *             "patchMode": {},
                 *             "applicationGuid": "string",
                 *             "externalData": [
                 *               {
                 *                 "key": "string",
                 *                 "value": "string"
                 *               }
                 *             ]
                 *           },
                 *           "isConfigurableMaterial": true,
                 *           "chargeableByDefault": true,
                 *           "variationMaterials": [
                 *             0
                 *           ],
                 *           "costTypeId": 0,
                 *           "budgetCostCode": "string",
                 *           "budgetCostType": "string",
                 *           "isCostLocked": true,
                 *           "isPriceLocked": true,
                 *           "isChemical": true,
                 *           "epaNumber": "string",
                 *           "activeIngredients": "string",
                 *           "id": 0
                 *         }
                 *       ],
                 *       "discountAndFees": [
                 *         {
                 *           "type": {},
                 *           "code": "string",
                 *           "displayName": "string",
                 *           "description": "string",
                 *           "amountType": {},
                 *           "amount": 0,
                 *           "intacctGlGroupAccount": "string",
                 *           "limit": 0,
                 *           "taxable": true,
                 *           "categories": [
                 *             0
                 *           ],
                 *           "hours": 0,
                 *           "assets": [
                 *             {
                 *               "type": {},
                 *               "alias": "string",
                 *               "url": "string",
                 *               "isDefault": true
                 *             }
                 *           ],
                 *           "account": "string",
                 *           "crossSaleGroup": "string",
                 *           "active": true,
                 *           "bonus": 0,
                 *           "commissionBonus": 0,
                 *           "paysCommission": true,
                 *           "excludeFromPayroll": true,
                 *           "externalData": {
                 *             "patchMode": {},
                 *             "applicationGuid": "string",
                 *             "externalData": [
                 *               {
                 *                 "key": "string",
                 *                 "value": "string"
                 *               }
                 *             ]
                 *           },
                 *           "budgetCostCode": "string",
                 *           "budgetCostType": "string",
                 *           "id": 0
                 *         }
                 *       ]
                 *     }
                 */
                "application/json": components["schemas"]["Pricebook.V2.PricebookBulkUpdateRequest"];
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
        };
    };
    Services_GetList: {
        parameters: {
            query?: {
                /** @description If true, the prices will be calculated based on the current dynamic pricing rules. */
                calculatePrices?: boolean;
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
                 *     Available fields are: Id, Code, DisplayName, CreatedOn, ModifiedOn, Price, MemberPrice, AddOnPrice, AddOnMemberPrice, MaterialsCost, PrimaryVendor, Cost, Manufacturer, Priority.
                 */
                sort?: string;
                /** @description Perform lookup by multiple IDs (maximum 50) */
                ids?: string;
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
                 * @description Items that are created with a specific guid, could be fetched/updated/removed
                 *     only when the same application guid is provided
                 */
                externalDataApplicationGuid?: string;
                /** @description Allows filtering by external data key */
                externalDataKey?: string;
                /** @description Allows filtering by external data values */
                externalDataValues?: string;
                /**
                 * @description Optional search text to filter by. Performs case-insensitive partial match on
                 *     Display Name, Code, and Description fields.
                 */
                searchText?: string;
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
                     *           "displayName": "string",
                     *           "description": "string",
                     *           "warranty": {
                     *             "duration": 0,
                     *             "description": "string"
                     *           },
                     *           "categories": [
                     *             {
                     *               "id": 0,
                     *               "name": "string",
                     *               "active": true
                     *             }
                     *           ],
                     *           "price": 0,
                     *           "memberPrice": 0,
                     *           "addOnPrice": 0,
                     *           "addOnMemberPrice": 0,
                     *           "taxable": true,
                     *           "account": "string",
                     *           "hours": 0,
                     *           "isLabor": true,
                     *           "recommendations": [
                     *             0
                     *           ],
                     *           "upgrades": [
                     *             0
                     *           ],
                     *           "assets": [
                     *             {
                     *               "alias": "string",
                     *               "fileName": "string",
                     *               "isDefault": true,
                     *               "type": {},
                     *               "url": "string"
                     *             }
                     *           ],
                     *           "serviceMaterials": [
                     *             {
                     *               "skuId": 0,
                     *               "quantity": 0
                     *             }
                     *           ],
                     *           "serviceEquipment": [
                     *             {
                     *               "skuId": 0,
                     *               "quantity": 0
                     *             }
                     *           ],
                     *           "active": true,
                     *           "crossSaleGroup": "string",
                     *           "paysCommission": true,
                     *           "bonus": 0,
                     *           "commissionBonus": 0,
                     *           "modifiedOn": "string",
                     *           "source": "string",
                     *           "externalId": "string",
                     *           "externalData": [
                     *             {
                     *               "key": "string",
                     *               "value": "string"
                     *             }
                     *           ],
                     *           "businessUnitId": 0,
                     *           "cost": 0,
                     *           "createdOn": "string",
                     *           "soldByCommission": 0,
                     *           "defaultAssetUrl": "string",
                     *           "budgetCostCode": "string",
                     *           "budgetCostType": "string",
                     *           "isPriceLocked": true,
                     *           "calculatedPrice": 0,
                     *           "useStaticPrices": true
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["PaginatedResponse_Of_Pricebook.V2.ServiceGetResponse"];
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
    Services_Create: {
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
                 *       "serviceMaterials": [
                 *         {
                 *           "skuId": 0,
                 *           "quantity": 0
                 *         }
                 *       ],
                 *       "serviceEquipment": [
                 *         {
                 *           "skuId": 0,
                 *           "quantity": 0
                 *         }
                 *       ],
                 *       "recommendations": [
                 *         0
                 *       ],
                 *       "upgrades": [
                 *         0
                 *       ],
                 *       "code": "string",
                 *       "displayName": "string",
                 *       "description": "string",
                 *       "warranty": {
                 *         "duration": 0,
                 *         "description": "string"
                 *       },
                 *       "categories": [
                 *         0
                 *       ],
                 *       "price": 0,
                 *       "memberPrice": 0,
                 *       "addOnPrice": 0,
                 *       "addOnMemberPrice": 0,
                 *       "taxable": true,
                 *       "account": "string",
                 *       "intacctGlGroupAccount": "string",
                 *       "hours": 0,
                 *       "isLabor": true,
                 *       "assets": [
                 *         {
                 *           "type": {},
                 *           "alias": "string",
                 *           "url": "string",
                 *           "isDefault": true
                 *         }
                 *       ],
                 *       "active": true,
                 *       "crossSaleGroup": "string",
                 *       "paysCommission": true,
                 *       "bonus": 0,
                 *       "commissionBonus": 0,
                 *       "externalData": {
                 *         "applicationGuid": "string",
                 *         "externalData": [
                 *           {
                 *             "key": "string",
                 *             "value": "string"
                 *           }
                 *         ]
                 *       },
                 *       "budgetCostCode": "string",
                 *       "budgetCostType": "string",
                 *       "isPriceLocked": true
                 *     }
                 */
                "application/json": components["schemas"]["Pricebook.V2.ServiceCreateRequest"];
            };
        };
        responses: {
            /** @description The entity has been created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "id": 0,
                     *       "code": "string",
                     *       "displayName": "string",
                     *       "description": "string",
                     *       "warranty": {
                     *         "duration": 0,
                     *         "description": "string"
                     *       },
                     *       "categories": [
                     *         {
                     *           "id": 0,
                     *           "name": "string",
                     *           "active": true
                     *         }
                     *       ],
                     *       "price": 0,
                     *       "memberPrice": 0,
                     *       "addOnPrice": 0,
                     *       "addOnMemberPrice": 0,
                     *       "taxable": true,
                     *       "account": "string",
                     *       "hours": 0,
                     *       "isLabor": true,
                     *       "recommendations": [
                     *         0
                     *       ],
                     *       "upgrades": [
                     *         0
                     *       ],
                     *       "assets": [
                     *         {
                     *           "alias": "string",
                     *           "fileName": "string",
                     *           "isDefault": true,
                     *           "type": {},
                     *           "url": "string"
                     *         }
                     *       ],
                     *       "serviceMaterials": [
                     *         {
                     *           "skuId": 0,
                     *           "quantity": 0
                     *         }
                     *       ],
                     *       "serviceEquipment": [
                     *         {
                     *           "skuId": 0,
                     *           "quantity": 0
                     *         }
                     *       ],
                     *       "active": true,
                     *       "crossSaleGroup": "string",
                     *       "paysCommission": true,
                     *       "bonus": 0,
                     *       "commissionBonus": 0,
                     *       "modifiedOn": "string",
                     *       "source": "string",
                     *       "externalId": "string",
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "businessUnitId": 0,
                     *       "cost": 0,
                     *       "createdOn": "string",
                     *       "soldByCommission": 0,
                     *       "defaultAssetUrl": "string",
                     *       "budgetCostCode": "string",
                     *       "budgetCostType": "string",
                     *       "isPriceLocked": true
                     *     }
                     */
                    "application/json": components["schemas"]["Pricebook.V2.ServiceResponse"];
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
    Services_Get: {
        parameters: {
            query?: {
                /** @description If true, the prices will be calculated based on the current dynamic pricing rules. */
                calculatePrices?: boolean;
                /**
                 * @description Items that are created with a specific guid, could be fetched/updated/removed
                 *     only when the same application guid is provided.
                 */
                externalDataApplicationGuid?: string;
            };
            header?: never;
            path: {
                /** @description The id of the service you are requesting */
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
                     *       "displayName": "string",
                     *       "description": "string",
                     *       "warranty": {
                     *         "duration": 0,
                     *         "description": "string"
                     *       },
                     *       "categories": [
                     *         {
                     *           "id": 0,
                     *           "name": "string",
                     *           "active": true
                     *         }
                     *       ],
                     *       "price": 0,
                     *       "memberPrice": 0,
                     *       "addOnPrice": 0,
                     *       "addOnMemberPrice": 0,
                     *       "taxable": true,
                     *       "account": "string",
                     *       "hours": 0,
                     *       "isLabor": true,
                     *       "recommendations": [
                     *         0
                     *       ],
                     *       "upgrades": [
                     *         0
                     *       ],
                     *       "assets": [
                     *         {
                     *           "alias": "string",
                     *           "fileName": "string",
                     *           "isDefault": true,
                     *           "type": {},
                     *           "url": "string"
                     *         }
                     *       ],
                     *       "serviceMaterials": [
                     *         {
                     *           "skuId": 0,
                     *           "quantity": 0
                     *         }
                     *       ],
                     *       "serviceEquipment": [
                     *         {
                     *           "skuId": 0,
                     *           "quantity": 0
                     *         }
                     *       ],
                     *       "active": true,
                     *       "crossSaleGroup": "string",
                     *       "paysCommission": true,
                     *       "bonus": 0,
                     *       "commissionBonus": 0,
                     *       "modifiedOn": "string",
                     *       "source": "string",
                     *       "externalId": "string",
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "businessUnitId": 0,
                     *       "cost": 0,
                     *       "createdOn": "string",
                     *       "soldByCommission": 0,
                     *       "defaultAssetUrl": "string",
                     *       "budgetCostCode": "string",
                     *       "budgetCostType": "string",
                     *       "isPriceLocked": true,
                     *       "calculatedPrice": 0,
                     *       "useStaticPrices": true
                     *     }
                     */
                    "application/json": components["schemas"]["Pricebook.V2.ServiceGetResponse"];
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
    Services_Delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Id of the SKU you are deleting */
                id: number;
                /** @description Tenant ID */
                tenant: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
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
    Services_Update: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Unique id for the SKU is modified */
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
                 *       "code": "string",
                 *       "displayName": "string",
                 *       "description": "string",
                 *       "warranty": {
                 *         "duration": 0,
                 *         "description": "string"
                 *       },
                 *       "categories": [
                 *         0
                 *       ],
                 *       "price": 0,
                 *       "memberPrice": 0,
                 *       "addOnPrice": 0,
                 *       "addOnMemberPrice": 0,
                 *       "taxable": true,
                 *       "account": "string",
                 *       "intacctGlGroupAccount": "string",
                 *       "hours": 0,
                 *       "isLabor": true,
                 *       "recommendations": [
                 *         0
                 *       ],
                 *       "upgrades": [
                 *         0
                 *       ],
                 *       "assets": [
                 *         {
                 *           "type": {},
                 *           "alias": "string",
                 *           "url": "string",
                 *           "isDefault": true
                 *         }
                 *       ],
                 *       "serviceMaterials": [
                 *         {
                 *           "skuId": 0,
                 *           "quantity": 0
                 *         }
                 *       ],
                 *       "serviceEquipment": [
                 *         {
                 *           "skuId": 0,
                 *           "quantity": 0
                 *         }
                 *       ],
                 *       "active": true,
                 *       "crossSaleGroup": "string",
                 *       "paysCommission": true,
                 *       "bonus": 0,
                 *       "commissionBonus": 0,
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
                 *       "budgetCostCode": "string",
                 *       "budgetCostType": "string",
                 *       "isPriceLocked": true
                 *     }
                 */
                "application/json": components["schemas"]["Pricebook.V2.ServiceUpdateRequest"];
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
                     *       "code": "string",
                     *       "displayName": "string",
                     *       "description": "string",
                     *       "warranty": {
                     *         "duration": 0,
                     *         "description": "string"
                     *       },
                     *       "categories": [
                     *         {
                     *           "id": 0,
                     *           "name": "string",
                     *           "active": true
                     *         }
                     *       ],
                     *       "price": 0,
                     *       "memberPrice": 0,
                     *       "addOnPrice": 0,
                     *       "addOnMemberPrice": 0,
                     *       "taxable": true,
                     *       "account": "string",
                     *       "hours": 0,
                     *       "isLabor": true,
                     *       "recommendations": [
                     *         0
                     *       ],
                     *       "upgrades": [
                     *         0
                     *       ],
                     *       "assets": [
                     *         {
                     *           "alias": "string",
                     *           "fileName": "string",
                     *           "isDefault": true,
                     *           "type": {},
                     *           "url": "string"
                     *         }
                     *       ],
                     *       "serviceMaterials": [
                     *         {
                     *           "skuId": 0,
                     *           "quantity": 0
                     *         }
                     *       ],
                     *       "serviceEquipment": [
                     *         {
                     *           "skuId": 0,
                     *           "quantity": 0
                     *         }
                     *       ],
                     *       "active": true,
                     *       "crossSaleGroup": "string",
                     *       "paysCommission": true,
                     *       "bonus": 0,
                     *       "commissionBonus": 0,
                     *       "modifiedOn": "string",
                     *       "source": "string",
                     *       "externalId": "string",
                     *       "externalData": [
                     *         {
                     *           "key": "string",
                     *           "value": "string"
                     *         }
                     *       ],
                     *       "businessUnitId": 0,
                     *       "cost": 0,
                     *       "createdOn": "string",
                     *       "soldByCommission": 0,
                     *       "defaultAssetUrl": "string",
                     *       "budgetCostCode": "string",
                     *       "budgetCostType": "string",
                     *       "isPriceLocked": true
                     *     }
                     */
                    "application/json": components["schemas"]["Pricebook.V2.ServiceResponse"];
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
