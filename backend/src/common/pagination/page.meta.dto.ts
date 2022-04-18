import { PageOptionsDto } from './page.options.dto';

/**
 * @brief 페이징 정보를 return 하는 Output DTO
 * @author Hyunji Park
 * @date 2022.04.18
 */
export class PageMetaDto {
  readonly page: number; // 현재 페이지 번호
  readonly size: number; // 한 페이지에 보여줄 건수
  readonly itemCount: number; // 전체 게시물 건수
  readonly pageCount: number; // 전체 페이지 건수
  readonly hasPreviousPage: boolean; // 이전 페이지 존재 여부
  readonly hasNextPage: boolean; // 다음 페이지 존재 여부

  constructor(pageOptionsDto: PageOptionsDto, itemCount: number) {
    this.page = pageOptionsDto.page;
    this.size = pageOptionsDto.size;
    this.itemCount = itemCount;
    this.pageCount = Math.ceil(this.itemCount / this.size);
    this.hasPreviousPage = this.page > 1;
    this.hasNextPage = this.page < this.pageCount;
  }
}
