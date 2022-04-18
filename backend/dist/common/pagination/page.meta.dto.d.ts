import { PageOptionsDto } from './page.options.dto';
export declare class PageMetaDto {
    readonly page: number;
    readonly size: number;
    readonly itemCount: number;
    readonly pageCount: number;
    readonly hasPreviousPage: boolean;
    readonly hasNextPage: boolean;
    constructor(pageOptionsDto: PageOptionsDto, itemCount: number);
}
