import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

/**
 * @brief board 정보를 담고 있는 Entity
 * @author Hyunji Park
 * @date 2022.04.18
 */
@Table({ tableName: 'board' })
export class Board extends Model {
  @PrimaryKey
  @Column({ autoIncrement: true })
  private uuid: bigint; // PK, 시스템 자동 설정

  @Column
  private title: string; // 글 제목

  @Column
  private content: string; // 글 내용

  @Column
  private views: number; // 조회수

  @Column
  private regDate: Date; // 글 등록일자
}
