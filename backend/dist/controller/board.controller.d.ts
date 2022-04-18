import { PageOptionsDto } from 'src/common/pagination/page.options.dto';
import { BoardDto } from 'src/dto/board.dto';
import { BoardService } from 'src/service/board.service';
import { PageDto } from './../common/pagination/page.dto';
export declare class BoardController {
    private boardService;
    constructor(boardService: BoardService);
    getAllBoard(pageOptionsDto: PageOptionsDto): Promise<PageDto<BoardDto>>;
    postBoard(boardDto: BoardDto): Promise<BoardDto[]>;
    putBoardById(boardDto: BoardDto): Promise<BoardDto>;
    deleteBoardById(id: number): Promise<number>;
}
