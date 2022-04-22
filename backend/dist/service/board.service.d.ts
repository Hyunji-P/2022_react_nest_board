import { PageParamsDto } from "src/common/pagination/page.params.dto";
import { BoardDto } from "src/dto/board.dto";
import { Board } from "src/entity/board.entity";
import { PageDto } from "./../common/pagination/page.dto";
export declare class BoardService {
    private boardRepository;
    constructor(boardRepository: typeof Board);
    getAllBoard(params: PageParamsDto): Promise<PageDto<BoardDto>>;
}
