import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Event } from "../../event/model/event.model";

interface HumanCategoryAttr {
    name: string;
    start_age: number;
    finish_age: number;
    gender_id: number;
}

@Table({ tableName: "human_category" })
export class HumanCategory extends Model<HumanCategory, HumanCategoryAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    start_age: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    finish_age: number;

    @HasMany(() => Event)
    event: Event[];

    // @Column({
    //     type: DataType.STRING,
    //     allowNull: false,
    // })
    // gender: string;
}
