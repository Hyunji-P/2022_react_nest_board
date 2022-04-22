export declare class PageParamsDto {
    readonly curPage?: number;
    readonly perPage?: number;
    readonly order: string;
    get offset(): number;
}
