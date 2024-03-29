import { Column, DataType, Model, Table } from "sequelize-typescript"

@Table({
    tableName: "mm_user_group_table"
})
export default class MMUserGroup extends Model {

    @Column({
        defaultValue: DataType.UUIDV4,
        type: DataType.UUID,
        primaryKey: true,
    })
    public id!: string;

    @Column
    userId!: string

    @Column
    groupId!: string

    /**
     * false - read-only
     * true - read-write
     */
    @Column
    role!: boolean
}