import {
  AllowNull,
  Column,
  DataType,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'image_profile',
  engine: 'INNODB',
  underscored: true,
  freezeTableName: true,
})
export class ImageProfile extends Model {
  @IsUUID(4)
  @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false})
  id: string;

  @Column({ type: DataType.TEXT })
  imageUrl: string;
}
