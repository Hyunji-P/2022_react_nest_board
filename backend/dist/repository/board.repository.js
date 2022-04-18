"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardRepository = void 0;
const board_entity_1 = require("../entity/board.entity");
const name_mapper_1 = require("./mapper/name.mapper");
exports.BoardRepository = [
    {
        provide: name_mapper_1.NameMapper.BOARD,
        useValue: board_entity_1.Board,
    },
];
//# sourceMappingURL=board.repository.js.map