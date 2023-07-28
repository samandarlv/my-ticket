import { CreateSeatDto } from "./dto/create-seat.dto";
import { UpdateSeatDto } from "./dto/update-seat.dto";
import { Seat } from "./model/seat.model";
export declare class SeatService {
    private seatRepo;
    constructor(seatRepo: typeof Seat);
    create(createSeatDto: CreateSeatDto): Promise<{
        message: string;
        seat: Seat;
    }>;
    findAll(): Promise<Seat[]>;
    findOne(id: number): Promise<Seat>;
    update(id: number, updateSeatDto: UpdateSeatDto): Promise<{
        message: string;
        updated: Seat;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
