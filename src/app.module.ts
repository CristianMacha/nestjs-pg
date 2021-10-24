import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DatabaseModule } from './database/database.module';
import { AddressModule } from './modules/address/address.module';
import { DocumentModule } from './modules/document/document.module';
import { ImageProfileModule } from './modules/image-profile/image-profile.module';
import { MedicalQuoteModule } from './modules/medical-quote/medical-quote.module';
import { PersonModule } from './modules/person/person.module';
import { RoleModule } from './modules/role/role.module';
import { SpecialtyModule } from './modules/specialty/specialty.module';
import { TypeDocumentModule } from './modules/type-document/type-document.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    DatabaseModule,
    AddressModule,
    DocumentModule,
    ImageProfileModule,
    MedicalQuoteModule,
    PersonModule,
    RoleModule,
    SpecialtyModule,
    TypeDocumentModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
