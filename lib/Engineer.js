class Engineer extends Employee {
    constructor(github){
        this.github = github
    }
}

getGithub(){
    return this.github
}

getRole(){
    return this.Engineer
}
};