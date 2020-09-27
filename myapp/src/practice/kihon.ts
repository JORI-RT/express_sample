export class Kihon {
    name: string;
    getName() {
        const name = '定数'
        let age = '変数'
        return name + age
    }
    tekitou(opts: any) {
        // any型なので型チェックしない
        opts.gerogero()
    }
}
export type Dto = {
    name: string;
    age: number
}