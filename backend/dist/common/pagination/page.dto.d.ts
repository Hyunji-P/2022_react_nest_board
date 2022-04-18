import { PageMetaDto } from './page.meta.dto';
export declare class PageDto<T> {
    readonly list: T[];
    readonly pageInfo: PageMetaDto;
    constructor(list: T[], pageInfo: PageMetaDto);
}
