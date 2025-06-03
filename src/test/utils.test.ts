import { getStringInfo, StringUtils, toUpperCase } from "../app/utils";

describe('Utils test', ()=> {

    describe('StringUtils tests', ()=>{

        let sut: StringUtils;
        beforeEach(()=>{
            sut = new StringUtils();
        })

        it('deve retornar o uppercase válido', ()=>{
            const sut = new StringUtils();

            const actual = sut.toUpperCase('abc');
            
            expect(actual).toBe('ABC');
        })
    });

    it('Deve retornar uppercase de uma string', ()=> {
        // arrange
        const sut = toUpperCase;
        const expected = 'ABC';

        // act
        const actual = toUpperCase('abc');

        // assert
        expect(actual).toBe(expected);
    })

    // Teste com um array de objetos passado como parâmetro
    describe('ToUpperCase examples', ()=> {
        it.each([
            {input:'abc', expected:'ABC'},
            {input:'My-String', expected:'MY-STRING'},
            {input: 'def', expected:'DEF'}
        ])('$input toUpperCase deve ser $expected', ({input, expected})=>{
            const actual = toUpperCase(input);
            expect(actual).toBe(expected);
        });
    });

    // Testes organizados
    describe('getStringInfo para o arg My-String precisa', () => {
        test('Retorna o tamanho', () => {
            const actual = getStringInfo('My-String');
            expect(actual.characters).toHaveLength(9);
        });
        test('Retorna o lowercase', () => {
            const actual = getStringInfo('My-String');
            expect(actual.lowercase).toBe('my-string'); 
        });
        test('Contém M', () => {
            const actual = getStringInfo('My-String');
            expect(actual.characters).toContain<string>('M');
        });
        test('Informações extras', () => {
            const actual = getStringInfo('My-String');
            expect(actual.extraInfo).toEqual({});
        })
        
    })
})