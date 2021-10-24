import {
  Column,
  DataType,
  IsUUID,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({
  engine: 'INNODB',
  underscored: true,
  tableName: 'address',
  freezeTableName: true,
})
export class Address extends Model {
  @IsUUID(4)
  @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false})
  id: string;

  @Column(DataType.TEXT)
  address: string;

  @Column({type: DataType.BOOLEAN, defaultValue: true})
  active: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false})
  deleted: boolean;
}
