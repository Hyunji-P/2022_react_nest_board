import { PageOptionsDto } from 'src/common/pagination/page.options.dto';
import { BoardDto } from 'src/dto/board.dto';
import { Board } from 'src/entity/board.entity';
import { PageDto } from './../common/pagination/page.dto';
export declare class BoardService {
    private boardRepository;
    constructor(boardRepository: typeof Board);
    getAllBoard(pageOptionsDto: PageOptionsDto): Promise<PageDto<BoardDto>>;
}
