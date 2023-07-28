import { Model } from "sequelize-typescript";
import { Event } from "../../event/model/event.model";
interface HumanCategoryAttr {
    name: string;
    start_age: number;
    finish_age: number;
    gender_id: number;
}
export declare class HumanCategory extends Model<HumanCategory, HumanCategoryAttr> {
    id: number;
    name: string;
    start_age: number;
    finish_age: number;
    event: Event[];
}
export {};
