import { Table, Column, Model, DataType, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import Usuario from './user.model';
import Producto from './producto.model';
import SeleccionProductos from './seleccionProductos.model';

@Table({
  tableName: 'asistencias'
})
class Asistencia extends Model {
  @ForeignKey(() => Usuario)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  declare usuarioId: number;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  declare fechaHora: Date;

  @Column({
    type: DataType.FLOAT,
    allowNull: false
  })
  declare montoFinal: number;

  @BelongsTo(() => Usuario)
  declare usuario: Usuario;


}

export default Asistencia;