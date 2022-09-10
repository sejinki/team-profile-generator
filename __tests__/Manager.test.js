const Manager = require("../lib/Manager");

test("testing manager constructor", () => {
    const manager = new Manager('name', 'id', 'email', 'officeNumber');
    expect(manager.officeNumber).toBe('officeNumber')
});

test("testing manager officeNumber", () => {
    const manager = new Manager('name', 'id', 'email', 'officeNumber')
    expect(manager.getOfficeNumber()).toBe('officeNumber')
})

test("testing manger role", () => {
    const manager = new Manager('name', 'id', 'email', 'officeNumber')
    expect(manager.getRole()).toBe("Manager")
})