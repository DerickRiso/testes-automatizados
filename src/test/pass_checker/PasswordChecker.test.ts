import { PasswordChecker } from '../../app/pass_checker/PasswordChecker'

describe('PasswordChecker test', ()=>{
    let sut: PasswordChecker;

    beforeEach(()=>{
        sut = new PasswordChecker();
    })

    it('Password with less than 8 chars is invalid', ()=> {
        const actual = sut.checkPassword('1234567');
        expect(actual).toBe(false);
    })

    it('Password with more than 8 chars is ok', ()=> {
        const actual = sut.checkPassword('12345678A');
        expect(actual).toBe(true);
    })

    it('Password without uppercase char is invalid', ()=> {
        const actual = sut.checkPassword('1234abcd');
        expect(actual).toBe(false);
    })

    it('Password with uppercase char is valid', ()=> {
        const actual = sut.checkPassword('1234abcdE');
        expect(actual).toBe(true);
    })
})