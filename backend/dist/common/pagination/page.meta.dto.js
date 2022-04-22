"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageMetaDto = void 0;
class PageMetaDto {
    constructor(pageParamsDto, listCnt) {
        this.curPage = pageParamsDto.curPage;
        this.perPage = pageParamsDto.perPage;
        this.range = 5;
        this.listCnt = listCnt;
        this.allRangeCnt = Math.ceil(this.listCnt / this.perPage);
        this.endPage = Math.ceil(this.curPage / this.range) * this.range;
        this.startPage = this.endPage - this.range + 1;
        this.hasPreviousPage = this.curPage > 1;
        this.hasNextPage = this.curPage < this.allRangeCnt;
    }
}
exports.PageMetaDto = PageMetaDto;
//# sourceMappingURL=page.meta.dto.js.map