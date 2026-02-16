import generatePassword from "./password-generator";

describe("generatePassword", () => {
	test("creates a password with 6 characters by default", () => {
		const result: string = generatePassword();
		expect(result.length).toBe(6);
	});

	test("password is a string", () => {
		const password = generatePassword();
		expect(typeof password).toBe("string");
	});

	test("throws an error if length is greater that 20", () => {
		expect(() => {
			generatePassword(21);
		}).toThrow();
	});

});
