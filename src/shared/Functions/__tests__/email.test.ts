import { validateEmail } from "../email"

describe('Email', () => {

    it('should error in invalid email', () => {

        expect(false).toEqual(validateEmail('inacio.com.co'));
        expect(false).toEqual(validateEmail('inacio@in'));
        expect(false).toEqual(validateEmail('@inacio'));
    });

    it('should error in valid email', () => {

        expect(true).toEqual(validateEmail('inacio@gmail.com'));
    });
});