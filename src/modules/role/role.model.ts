import {
  Column,
  DataType,
  HasMany,
  IsUUID,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../user/user.model';

@Table({
  tableName: 'role',
  engine: 'INNODB',
  underscored: true,
  freezeTableName: true,
})
export class Role extends Model {
  @IsUUID(4)
  @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false})
  id: string;

  @Column({ type: DataType.STRING(30), allowNull: false })
  nameRole: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  active: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  deleted: boolean;

  @HasMany(() => User)
  users: User[];
}
