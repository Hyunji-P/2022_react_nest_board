import { Type } from "class-transformer";
import { IsInt, IsOptional, Max, Min } from "class-validator";

/**
 * @brief 페이징 처리 시 Input 파라미터
 * @author Hyunji Park
 * @date 2022.04.18
 */
export class PageParamsDto {
  // 파라미터
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  readonly curPage?: number = 1; // 현재 페이지 번호

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  @IsOptional()
  readonly perPage?: number = 10; // 한 페이지에 보여줄 건수

  // default
  readonly order: string = "DESC"; // 정렬 순서

  get offset(): number {
    return (this.curPage - 1) * this.perPage;
  }
}
