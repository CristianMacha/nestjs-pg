import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { TypeDocument } from './type-document.model';

@Module({
    imports: [
        SequelizeModule.forFeature([TypeDocument])
    ]
})
export class TypeDocumentModule {}
