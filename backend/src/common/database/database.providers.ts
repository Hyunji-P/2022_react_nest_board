import { Sequelize } from "sequelize-typescript";
import { Board } from "src/entity/board.entity";

/**
 * @brief sequelize - mysql 연동 관련 DB 설정
 * @author Hyunji Park
 * @date 2022.04.18
 */
//TODO DB 정보 외부 설정 필요
export const DatabaseProviders = [
  {
    provide: "SEQUELIZE",
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "1234",
        database: "mysql_local",
        define: {
          freezeTableName: true,
          timestamps: false,
        },
      });
      sequelize.addModels([Board]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
