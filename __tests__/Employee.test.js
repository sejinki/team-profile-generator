const Employee = require("../lib/Employee");

test("testing employee objects", () => {
    const employee = new Employee();
    expect(typeof employee).toBe('object')
});

test("testing employee object with name", () => {
    const employee = new Employee('sejin');
    expect(employee.name).toBe('sejin')
})

test("testing employee object with id", () => {
    const employee = new Employee ('sejin', '123');
    expect(employee.id).toBe('123');
})

test("testing employee object with email", () => {
    const employee = new Employee ('sejin', '123', 'this@email.com');
    expect(employee.email).toBe('this@email.com');
})

test("testing employee getName", () => {
    const employee = new Employee("sejin");
    expect(employee.getName()).toBe('sejin');
})

test("testing employee getId", () => {
    const employee = new Employee ('sejin', '123');
    expect(employee.getId()).toBe('123')
})

test("testing employee getEmail", () => {
    const employee = new Employee('sejin', '123', 'this@email.com');
    expect(employee.getEmail()).toBe('this@email.com');
})