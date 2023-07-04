type QueryParamMapping = {
    true: boolean;
    false: boolean;
    null: null;
    [string: string]: any;
};

type ConvertQueryParamValue<TQueryParam extends keyof QueryParamMapping> =
    TQueryParam extends keyof QueryParamMapping
        ? QueryParamMapping[TQueryParam]
        : string;

function convertQueryParamType<TQueryParam extends keyof QueryParamMapping>(
    queryParam: string
): ConvertQueryParamValue<TQueryParam> {
    const valueMappings: QueryParamMapping = {
        true: true,
        false: false,
        null: null,
        string: queryParam,
    };

    if (queryParam in valueMappings) {
        return valueMappings[
            queryParam as TQueryParam
        ] as ConvertQueryParamValue<TQueryParam>;
    } else {
        return queryParam as ConvertQueryParamValue<TQueryParam>;
    }
}

export { convertQueryParamType };
