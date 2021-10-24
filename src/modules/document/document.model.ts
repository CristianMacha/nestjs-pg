import {
  Column,
  DataType,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'document',
  engine: 'INNODB',
  underscored: true,
  freezeTableName: true,
})
export class Document extends Model {
  @IsUUID(4)
  @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false})
  id: string;

  @Column({ type: DataType.STRING(40), allowNull: true })
  nameUniversity: string;

  @Column(DataType.TEXT)
  documentUrl: string;
}
