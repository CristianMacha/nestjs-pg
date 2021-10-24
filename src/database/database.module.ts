import { Module } from '@nestjs/common';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';

const connectionOptions: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'miodontologo',
  autoLoadModels: true,
};

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        synchronize: true, // true:dev
        ...connectionOptions,
      }),
    }),
  ],
})
export class DatabaseModule {}
