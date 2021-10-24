import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Document } from './document.model';

@Module({
    imports: [
        SequelizeModule.forFeature([Document])
    ]
})
export class DocumentModule {}
