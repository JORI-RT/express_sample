import { IExistCheckService } from './IExistCheckService';

export class NullExistCheckService implements IExistCheckService {
  exist(id: string) {
    console.log('NULL OBJECT');
    // throw new Error("NULL Object")
    return true;
  }
}
