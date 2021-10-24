import {
  Column,
  DataType,
  HasMany,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Person } from '../person/person.model';

@Table({
  tableName: 'type_document',
  underscored: true,
  engine: 'INNODB',
  freezeTableName: true,
})
export class TypeDocument extends Model {
  @IsUUID(4)
  @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false})
  id: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  name: string;

  @HasMany(() => Person)
  persons: Person[];
}
