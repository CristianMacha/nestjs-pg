import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Person } from './person.model';

@Module({
    imports: [
        SequelizeModule.forFeature([Person])
    ]
})
export class PersonModule {}
