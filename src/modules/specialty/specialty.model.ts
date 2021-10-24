import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Person } from '../person/person.model';

@Table({
  tableName: 'specialty',
  engine: 'INNODB',
  underscored: true,
  freezeTableName: true,
})
export class Specialty extends Model {
  @IsUUID(4)
  @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false})
  id: string;

  @Column({type: DataType.STRING(50), allowNull: true})
  nameSpecialty: string;

  @ForeignKey(() => Person)
  @Column
  personId: string;

  @BelongsTo(() => Person, 'person_id')
  person: Person;
}
