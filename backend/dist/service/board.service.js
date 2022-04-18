"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const page_meta_dto_1 = require("../common/pagination/page.meta.dto");
const board_dto_1 = require("../dto/board.dto");
const name_mapper_1 = require("../repository/mapper/name.mapper");
const page_dto_1 = require("./../common/pagination/page.dto");
let BoardService = class BoardService {
    constructor(boardRepository) {
        this.boardRepository = boardRepository;
    }
    async getAllBoard(pageOptionsDto) {
        const boardEntityList = this.boardRepository.findAll({
            raw: true,
            offset: pageOptionsDto.offset,
            limit: pageOptionsDto.size,
            order: [['uuid', pageOptionsDto.order]],
        });
        const boardList = [];
        (await boardEntityList).forEach((i) => {
            boardList.push((0, class_transformer_1.plainToClass)(board_dto_1.BoardDto, i));
        });
        const itemCount = (await this.boardRepository.findAll()).length;
        const pageInfo = new page_meta_dto_1.PageMetaDto(pageOptionsDto, itemCount);
        return new page_dto_1.PageDto(boardList, pageInfo);
    }
};
BoardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(name_mapper_1.NameMapper.BOARD)),
    __metadata("design:paramtypes", [Object])
], BoardService);
exports.BoardService = BoardService;
//# sourceMappingURL=board.service.js.map