import { Module } from "@nestjs/common";
import { DatabaseProviders } from "./database.providers";

/**
 * @brief sequelize - mysql 연동 module 관리
 * @author Hyunji Park
 * @date 2022.04.18
 */
@Module({
  providers: [...DatabaseProviders],
  exports: [...DatabaseProviders],
})
export class DatabaseModule {}
