import { Inject, Injectable } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { PageMetaDto } from "src/common/pagination/page.meta.dto";
import { PageParamsDto } from "src/common/pagination/page.params.dto";
import { BoardDto } from "src/dto/board.dto";
import { Board } from "src/entity/board.entity";
import { NameMapper } from "src/repository/mapper/name.mapper";
import { PageDto } from "./../common/pagination/page.dto";

/**
 * @brief 게시판 담당 서비스
 * @author Hyunji Park
 * @date 2022.04.15
 */
@Injectable()
export class BoardService {
  constructor(
    @Inject(NameMapper.BOARD)
    private boardRepository: typeof Board
  ) {}

  //TODO exception 처리
  public async getAllBoard(params: PageParamsDto): Promise<PageDto<BoardDto>> {
    // 1. 페이징 처리된 list 정보 get
    const boardEntityList = this.boardRepository.findAll({
      raw: true,
      offset: params.offset,
      limit: params.perPage,
      order: [["uuid", params.order]],
    });

    // 2. entity list to dto list 변환
    const boardList: Array<BoardDto> = [];
    (await boardEntityList).forEach((i) => {
      boardList.push(plainToClass(BoardDto, i));
    });

    // 3. 페이징 관련 정보 setting
    const listCnt = (await this.boardRepository.findAll()).length; // TODO 공통화 필요
    const pageInfo: PageMetaDto = new PageMetaDto(params, listCnt);

    return new PageDto(boardList, pageInfo);
  }
}
