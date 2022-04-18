import { Module } from "@nestjs/common";
import { BoardController } from "../controller/board.controller";
import { BoardService } from "../service/board.service";
import { DatabaseModule } from "../common/database/database.module";
import { BoardRepository } from "src/repository/board.repository";

//TODO 동적 모듈 커스터마이징 필요
@Module({
  imports: [DatabaseModule],
  controllers: [BoardController],
  providers: [BoardService, ...BoardRepository],
})
export class AppModule {}
