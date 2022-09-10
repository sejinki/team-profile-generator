const Intern = require("../lib/Intern");

test("testing intern objects", () => {
    const intern = new Intern('name', 'id', 'email', 'school');
    expect(intern.school).toBe('school')
});

test("testing getSchool", () => {
    const intern = new Intern('name', 'id', 'email', 'school')
    expect(intern.getSchool()).toBe("school");
})

test("testing intern role", () => {
    const intern = new Intern('name', 'id', 'email', 'school')
    expect(intern.getRole()).toBe("Intern");
})