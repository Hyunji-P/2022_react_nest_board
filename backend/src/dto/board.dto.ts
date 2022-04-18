/**
 * @brief board 정보를 담고 있는 DTO
 * @author Hyunji Park
 * @date 2022.04.18
 */
export class BoardDto {
  private uuid: number; // PK
  private title: string; // 글 제목
  private content: string; // 글 내용
  private views: number; // 조회수
  private regDate: Date; // 글 등록일자
}
