import { insertMaskInPhone, validatePhone } from "../phoneMask";

const phone = '1173564763';
const phoneWithMask = '(11) 7356-4763';
const cellPhone = '11973564763';
const cellPhoneWithMask = '(11) 97356-4763';

describe('phone', () => {

    it('should insert mask in cellphone', () => {
        expect(cellPhoneWithMask).toEqual(insertMaskInPhone(cellPhone));
    })

    it('should insert mask in phone', () => {
        expect(phoneWithMask).toEqual(insertMaskInPhone(phone));
    })

    it('should return success valid phone', () => {
        expect(true).toEqual(validatePhone(phone));
        expect(true).toEqual(validatePhone(phoneWithMask));
    })

    it('should return success valid cellphone', () => {
        expect(true).toEqual(validatePhone(cellPhone));
        expect(true).toEqual(validatePhone(cellPhoneWithMask));
    })
})