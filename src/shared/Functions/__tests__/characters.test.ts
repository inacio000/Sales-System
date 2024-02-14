import { removeSpecialCharacters } from "../characters";

describe('Characters', () => {
    it('should remove special characters', () => {
        const specialCharacters = 'sh43535d!dssds?34556bhs.-sd343s,cs,';

        expect('4353534556343').toEqual(removeSpecialCharacters(specialCharacters));
    })
})