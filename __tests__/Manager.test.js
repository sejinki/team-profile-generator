const Engineer = require("../lib/Manager");

test("testing manager officeNumber", () => {
    const manager = new Manager();
    expect(typeof manager).toBe('object')
});

test("testing manager officeNumber", () => {
    const manager = new Manager()
    expect(manager.officeNumber).toBe('12')
})

test("testing manger role", () => {
    const manager = new Manager()
    expect(manager.getRole()).toBe("role")
})