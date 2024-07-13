import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import Asistencia from './asistencia.model';

@Table({
  tableName: 'usuarios'
})
class Usuario extends Model {
  @Column({
    type: DataType.STRING(100),
    allowNull: false
  })
  declare nombre: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false
  })
  declare apellidos: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true
  })
  declare correo: string;

  @HasMany(() => Asistencia)
  declare asistencias: Asistencia[];
}

export default Usuario;
