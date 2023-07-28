import { SeatTypeService } from "./seat_type.service";
import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
export declare class SeatTypeController {
    private readonly seatTypeService;
    constructor(seatTypeService: SeatTypeService);
    create(createSeatTypeDto: CreateSeatTypeDto): Promise<{
        message: string;
        seat_type: import("./model/seat_type.model").SeatType;
    }>;
    findAll(): Promise<import("./model/seat_type.model").SeatType[]>;
    findOne(id: string): Promise<import("./model/seat_type.model").SeatType>;
    update(id: string, updateSeatTypeDto: UpdateSeatTypeDto): Promise<{
        message: string;
        updated: import("./model/seat_type.model").SeatType;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
