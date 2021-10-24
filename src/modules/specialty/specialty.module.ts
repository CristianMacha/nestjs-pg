import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Specialty } from './specialty.model';

@Module({
    imports: [
        SequelizeModule.forFeature([Specialty])
    ]
})
export class SpecialtyModule {}
