// 環境変数を使う

import { Factory } from "./factory";

var id = "AAA";
//console.log(env.XXX) XXX = "url1,st url2,it"
const sysenv = process.env.XXX.split(' ')
sysenv.some(element => {
    var url: string = element.split(',')[0];
    var env: string = element.split(',')[1];
    console.log(url, env + "-----")
    var factory: Factory = new Factory();
    var existCheckService = factory.create(env);
    if (existCheckService.exist(id)) {
        console.log("id=" + id
            + " env=" + env
            + " url=" + url
            + " OK")
        // ここでSOPAコールすればよい
        return true;
    }
});