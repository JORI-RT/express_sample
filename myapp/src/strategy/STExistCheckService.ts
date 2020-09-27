import { IExistCheckService } from "./IExistCheckService";

export class STExistCheckService implements IExistCheckService {
    exist(id: string) {
        return true;
    }
}