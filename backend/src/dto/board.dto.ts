/**
 * @brief board 정보를 담고 있는 DTO
 * @author Hyunji Park
 * @date 2022.04.18
 */
export class BoardDto {
  public uuid: number; // PK
  public title: string; // 글 제목
  public content: string; // 글 내용
  public views: number; // 조회수
  public regDate: Date; // 글 등록일자
}
