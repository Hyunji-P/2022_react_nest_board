import { Type } from "class-transformer";
import { IsInt, IsOptional, Max, Min } from "class-validator";

/**
 * @brief 페이징 처리 시 기본 default 값 지정 및 파라미터 Input 시 변경됨
 * @author Hyunji Park
 * @date 2022.04.18
 */
export class PageOptionsDto {
  @IsOptional()
  readonly order?: string = "DESC"; // 내림차순

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  readonly page?: number = 1; // 현재 페이지 번호

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  @IsOptional()
  readonly size?: number = 10; // 한 페이지에 보여줄 건수

  get offset(): number {
    return (this.page - 1) * this.size;
  }
}
