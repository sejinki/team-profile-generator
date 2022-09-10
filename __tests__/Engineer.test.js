const Engineer = require("../lib/Engineer");

test("testing engineer objects", () => {
    const engineer = new Engineer('name', 'id', 'johndoe@email.com', 'github');
    expect(engineer.github).toBe('github');
    
});

test("testing engineer github", () => {
    const engineer = new Engineer('name', 'id', 'johndoe@email.com', 'github');
    expect(engineer.getGithub()).toBe('github');
})

test("testing engineer role", () => {
    const engineer = new Engineer('name', 'id', 'johndoe@email.com', 'github')
    expect(engineer.getRole()).toBe("Engineer", )
})