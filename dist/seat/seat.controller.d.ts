import { SeatService } from "./seat.service";
import { CreateSeatDto } from "./dto/create-seat.dto";
import { UpdateSeatDto } from "./dto/update-seat.dto";
export declare class SeatController {
    private readonly seatService;
    constructor(seatService: SeatService);
    create(createSeatDto: CreateSeatDto): Promise<{
        message: string;
        seat: import("./model/seat.model").Seat;
    }>;
    findAll(): Promise<import("./model/seat.model").Seat[]>;
    findOne(id: string): Promise<import("./model/seat.model").Seat>;
    update(id: string, updateSeatDto: UpdateSeatDto): Promise<{
        message: string;
        updated: import("./model/seat.model").Seat;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
