const toUpper = require("./toUpperCase");

test("changes text to upper case", () => {
  expect(toUpper("hello there")).toBe("HELLO THERE");
  expect(toUpper("I should have BIG letters")).toBe(
    "I SHOULD HAVE BIG LETTERS"
  );
  expect(toUpper("Just a third test so we know for suuuuuuure")).toBe(
    "JUST A THIRD TEST SO WE KNOW FOR SUUUUUUURE"
  );
});
