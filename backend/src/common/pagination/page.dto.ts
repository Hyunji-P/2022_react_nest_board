import { PageMetaDto } from './page.meta.dto';

/**
 * @brief  페이징 처리된 list 및  페이징 관련 정보를 return 하는 Output DTO
 * @author Hyunji Park
 * @date 2022.04.18
 */
export class PageDto<T> {
  readonly list: T[]; // 페이징 처리로 가져온 list

  readonly pageInfo: PageMetaDto; // 페이지 정보

  constructor(list: T[], pageInfo: PageMetaDto) {
    this.list = list;
    this.pageInfo = pageInfo;
  }
}
