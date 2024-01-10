describe('Payment tests to see if math is functioning properly', function () {
  it('should calculate tip percent correctly', function () {
    expect(calculateTipPercent(100, 20)).toEqual(20);
    expect(calculateTipPercent(200, 30)).toEqual(15);
  });
});
