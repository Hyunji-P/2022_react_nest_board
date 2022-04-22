import { PageParamsDto } from "./page.params.dto";

/**
 * @brief 페이징 정보를 return 하는 Output DTO
 * @author Hyunji Park
 * @date 2022.04.18
 */
export class PageMetaDto {
  // 파라미터
  readonly curPage: number; // 현재 페이지 번호
  readonly perPage: number; // 한 페이지에 보여줄 목록 갯수

  // default
  readonly range: number; // 하단부에 해당하는 범위(1~10, 11~20)
  readonly listCnt: number; // 전체 게시물 건수

  // 파라미터에 따라 변동되는 데이터
  readonly allRangeCnt: number; // 총 페이지 범위의 개수
  readonly startPage: number; // 첫 페이지 번호
  readonly endPage: number; // 끝 페이지 번호

  readonly hasPreviousPage: boolean; // 이전 페이지 존재 여부
  readonly hasNextPage: boolean; // 다음 페이지 존재 여부

  constructor(pageParamsDto: PageParamsDto, listCnt: number) {
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
