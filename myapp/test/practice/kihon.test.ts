import { Kihon, Dto } from "../../src/practice/kihon";

describe('calculationのテストを実行します！絵文字も使えるよ📚', () => {
    describe('addition method', () => {
        test('sample', () => {
            var stu = new Kihon()
            expect(stu.getName()).toBe('定数変数')
        })
        // test('anyだとどうなるか', () => {
        //     var stu = new Kihon()
        //     expect(stu.tekitou(stu)).toBe('定数変数')
        // })        
        // anonymousになる
        test('type hot to use', () => {
            const dto: Dto = {
                name: 'suzuki',
                age: 22
            }
            expect(dto.age).toBe(22)
        })
    })
})