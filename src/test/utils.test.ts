import { getStringInfo, toUpperCase } from "../app/utils";

describe('Utils test', ()=> {
    it('Deve retornar uppercase de uma string', ()=> {
        // arrange
        const sut = toUpperCase;
        const expected = 'ABC';

        // act
        const actual = toUpperCase('abc');

        // assert
        expect(actual).toBe(expected);
    })

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