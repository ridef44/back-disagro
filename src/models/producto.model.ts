import { Table, Column, Model, DataType, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import Asistencia from './asistencia.model';
import SeleccionProductos from './seleccionProductos.model';

@Table({
  tableName: 'productos'
})
class Producto extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare name: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false
  })
  declare price: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
    allowNull: false
  })
  declare availability: boolean;

  @Column({
    type: DataType.ENUM('producto', 'servicio'), // Añadiendo tipo de producto
    allowNull: false
  })
  declare type: string;

  @BelongsToMany(() => Asistencia, () => SeleccionProductos)
  declare asistencias: Asistencia[];
}

export default Producto;
