describe('(Helpers test.js) Checks if helpers are working and calculates sum and tip percent accurately', () => {
    it('should calculate tip percent',function(){
        expect(calculateTipPercent(100, 20)).toBe(20);
        expect(calculateTipPercent(10, 2)).toBe(20);
    });
    it('should calculate a payments total sum',function(){
        expect(sumPaymentTotal('tipAmt')).toBe(0);
    });
});