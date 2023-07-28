import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
import { SeatType } from "./model/seat_type.model";
export declare class SeatTypeService {
    private seatTypeRepo;
    constructor(seatTypeRepo: typeof SeatType);
    create(createSeatTypeDto: CreateSeatTypeDto): Promise<{
        message: string;
        seat_type: SeatType;
    }>;
    findAll(): Promise<SeatType[]>;
    findOne(id: number): Promise<SeatType>;
    update(id: number, updateSeatTypeDto: UpdateSeatTypeDto): Promise<{
        message: string;
        updated: SeatType;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
