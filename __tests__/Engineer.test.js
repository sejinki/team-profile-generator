const Engineer = require("../lib/Engineer");

test("testing engineer objects", () => {
    const Engineer = new Engineer();
    expect(typeof engineer).toBe('object')
});

test("testing engineer github", () => {
    const engineer = new Engineer()
    expect(engineer.github).toBe('github')
})

test("testing engineer role", () => {
    const engineer = new Engineer()
    expect(engineer.getSchool()).toBe("school")
})

test("testing engineer role", () => {
    const engineer = new Engineer()
    expect(engineer.getRole()).toBe("role")
})