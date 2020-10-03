import { STExistCheckService } from './STExistCheckService';
import { NullExistCheckService } from './NullExistCheckService';

// 環境名とDBのURLからサービスを作成
export class Factory {
  create(env: string) {
    if (env == 'st') {
      return new STExistCheckService();
    } else {
      return new NullExistCheckService();
    }
  }
}
