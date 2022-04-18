"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const board_entity_1 = require("../../entity/board.entity");
exports.DatabaseProviders = [
    {
        provide: "SEQUELIZE",
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
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
            sequelize.addModels([board_entity_1.Board]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.providers.js.map