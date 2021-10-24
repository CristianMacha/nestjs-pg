import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { MedicalQuote } from './medical-quote.model';

@Module({
    imports: [
        SequelizeModule.forFeature([MedicalQuote])
    ]
})
export class MedicalQuoteModule {}
