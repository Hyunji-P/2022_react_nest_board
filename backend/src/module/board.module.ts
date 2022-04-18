import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/common/database/database.module";
import { BoardController } from "src/controller/board.controller";
import { BoardRepository } from "src/repository/board.repository";
import { BoardService } from "src/service/board.service";

/**
 * @brief board module 관리
 * @author Hyunji Park
 * @date 2022.04.18
 */
@Module({
  imports: [DatabaseModule],
  controllers: [BoardController],
  providers: [BoardService, ...BoardRepository],
})
export class BoardModule {}
