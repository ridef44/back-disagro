import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import Asistencia from './asistencia.model';
import Producto from './producto.model';

@Table({
  tableName: 'seleccionProductos'
})
class SeleccionProductos extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ForeignKey(() => Asistencia)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  declare asistenciaId: number;

  @ForeignKey(() => Producto)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  declare productoId: number;
}

export default SeleccionProductos;
