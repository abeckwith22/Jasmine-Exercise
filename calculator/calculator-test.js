describe("Calculates monthly payments correctly", function () {
  it("should handle zero in equation", function () {
    const object = { amount: 10000, years: 10, rate: 0 };
    expect(calculateMonthlyPayment(object)).toBe('83.33');
  });
  it("should calculate the monthly rate correctly", function () {
    yearlyRate = 0.5;
    expect(monthlyRate(yearlyRate)).toEqual("0.04167");
  });
});

it("should return a result with 2 decimal places", function () {
    const object = { amount: 10000, years: 10, rate: 5 };
    expect(calculateMonthlyPayment(object)).toBe("106.07");
});
