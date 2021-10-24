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
import { Role } from '../role/role.model';

@Table({
  tableName: 'user',
  underscored: true,
  engine: 'INNODB',
  freezeTableName: true,
})
export class User extends Model {
  @IsUUID(4)
  @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false})
  id: string;

  @Column({ type: DataType.STRING(60), unique: true, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING(60), allowNull: false })
  password: string;

  @Column({ type: DataType.DATE, allowNull: true })
  lastPasswordGen: Date;

  @Column({ type: DataType.DATE, allowNull: true })
  lastLogin: Date;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  active: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  deleted: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  isVerified: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isAuthApi: boolean;

  @ForeignKey(() => Role)
  @Column
  roleId: string;

  @BelongsTo(() => Role, 'role_id')
  role: Role;
}
