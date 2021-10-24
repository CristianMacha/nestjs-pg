import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { MedicalQuote } from '../medical-quote/medical-quote.model';
import { Specialty } from '../specialty/specialty.model';
import { TypeDocument } from '../type-document/type-document.model';

@Table({
  tableName: 'person',
  underscored: true,
  engine: 'INNODB',
  freezeTableName: true,
})
export class Person extends Model {
  @IsUUID(4)
  @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false})
  id: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  name: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  lastName: string;

  @Column(DataType.STRING(50))
  telephone: string;

  @Column(DataType.STRING(50))
  documentNumber: string;

  @Column(DataType.TEXT)
  address1: string;

  @Column(DataType.TEXT)
  address2: string;

  @Column(DataType.TEXT)
  address3: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isPatient: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  active: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  deleted: boolean;

  @HasMany(() => MedicalQuote)
  document: MedicalQuote[];

  @HasMany(() => Specialty)
  specialty: Specialty[];

  @ForeignKey(() => TypeDocument)
  @Column
  typeDocumentId: string;

  @BelongsTo(() => TypeDocument, 'type_document_id')
  typeDocument: TypeDocument;
}
