import { calculateComplexity, toUpperCaseWithCb } from '../../app/doubles/otherUtils';

describe('OtherUtils test', ()=>{
    describe.only('tracking callbacks', ()=>{
        let cbArgs = [];
        let timesCalled = 0;
        
        function callBackMock(arg: string) {
            cbArgs.push(arg);
            timesCalled++;
        }

        afterEach(()=>{
            // Limpando variáveis para garantir independencia dos testes
            timesCalled = 0;
            cbArgs = [];
        })

        it('To uppercase with callback for invalid argument - track calls', ()=>{
            const actual = toUpperCaseWithCb('', callBackMock);
            expect(actual).toBeUndefined();
            expect(cbArgs).toContain('Invalid argument!');
            expect(timesCalled).toBe(1);
        })

        it('To uppercase with callback for invalid argument', ()=>{
            // Fake - fornece uma função callback falsa
            const actual = toUpperCaseWithCb('', ()=>{})
            expect(actual).toBeUndefined();
        })

        it('To uppercase with callback for valid argument', ()=>{
            // Fake - fornece uma função callback falsa
            const actual = toUpperCaseWithCb('abc', ()=>{})
            expect(actual).toBe('ABC');
        })

    })

    

    it('calculates complexity', ()=>{
        // Stub - Fornece um objeto incompleto
        const someInfo = {
            length: 5,
            extraInfo: {
                field1: 'Some info',
                field2: 'Some another info'
            }
        }

        const actual = calculateComplexity(someInfo as any);
        expect(actual).toBe(10);
    })
})