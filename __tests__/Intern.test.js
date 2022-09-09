const Intern = require("../lib/Intern");

test("testing intern objects", () => {
    const Intern = new Intern();
    expect(typeof Intern).toBe('object')
});

test("testing intern school", () => {
    const intern = new Intern()
    expect(intern.school).toBe('school name');
})

test("testing manger role", () => {
    const intern = new Intern()
    expect(intern.getRole()).toBe("role");
})