import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { PageOptionsDto } from "src/common/pagination/page.options.dto";
import { BoardDto } from "src/dto/board.dto";
import { BoardService } from "src/service/board.service";
import { PageDto } from "./../common/pagination/page.dto";

/**
 * @brief 게시판 담당 컨트롤러
 * @author Hyunji Park
 * @date 2022.04.15
 */
@Controller("/api/board")
export class BoardController {
  constructor(private boardService: BoardService) {}

  /**
   * @brief 게시글 목록 조회
   * @param pageOptionsDto 페이징 관련 파라미터(limit, offset...)
   * @returns 게시글 목록
   */
  @Get()
  async getAllBoard(
    @Query() pageOptionsDto: PageOptionsDto
  ): Promise<PageDto<BoardDto>> {
    return this.boardService.getAllBoard(pageOptionsDto);
  }

  @Post()
  async postBoard(@Body() boardDto: BoardDto): Promise<BoardDto[]> {
    return;
  }

  @Put()
  async putBoardById(@Body() boardDto: BoardDto): Promise<BoardDto> {
    return;
  }

  @Delete(":id")
  async deleteBoardById(@Param("id") id: number): Promise<number> {
    return;
  }
}
