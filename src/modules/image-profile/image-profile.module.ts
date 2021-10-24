import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { ImageProfile } from './image-profile.model';

@Module({
    imports: [
        SequelizeModule.forFeature([ImageProfile])
    ]
})
export class ImageProfileModule {}
