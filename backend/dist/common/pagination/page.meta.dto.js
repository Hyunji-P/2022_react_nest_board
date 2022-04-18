"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageMetaDto = void 0;
class PageMetaDto {
    constructor(pageOptionsDto, itemCount) {
        this.page = pageOptionsDto.page;
        this.size = pageOptionsDto.size;
        this.itemCount = itemCount;
        this.pageCount = Math.ceil(this.itemCount / this.size);
        this.hasPreviousPage = this.page > 1;
        this.hasNextPage = this.page < this.pageCount;
    }
}
exports.PageMetaDto = PageMetaDto;
//# sourceMappingURL=page.meta.dto.js.map