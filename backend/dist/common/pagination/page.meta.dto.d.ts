import { PageParamsDto } from "./page.params.dto";
export declare class PageMetaDto {
    readonly curPage: number;
    readonly perPage: number;
    readonly range: number;
    readonly listCnt: number;
    readonly allRangeCnt: number;
    readonly startPage: number;
    readonly endPage: number;
    readonly hasPreviousPage: boolean;
    readonly hasNextPage: boolean;
    constructor(pageParamsDto: PageParamsDto, listCnt: number);
}
