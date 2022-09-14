module.exports = {
    teamGeneratorProfile: theTeam => {
        // const generatedTeamProfiles = [];
        /*

        const generateTeamProfiles = theTeam.map(employee => {
            //Switch case here, returning the profile functions
        })
        */
        const generatedTeamPorfiles = theTeam.map(employee => {
            console.log(employee);
            switch(employee.employeeType){
                case 'manager':
                    return managerProfile(employee) 
                    // generatedTeamProfiles.push(managerProfile(employee))
                    break
                case 'engineer':
                    return engineerProfile(employee)
                    break
                case 'intern':
                    return internProfile(employee)
                    break
            }
        }).join("\n");
        return generatedTeamPorfiles;
    }
}


let managerProfile = manager => {
    let managerInfo = `<section class = "card" style="width:400px">
        <div class = "card-header" style="background: red; color: white;">
        <h2 class="card-title">${manager.managerName}</h2>
        <h3 class="card-title"><i class="fa-solid fa-user"> Manager</i></h3>
        <div class = "card-body"></div>
        <ul class = "list-group"></ul>
        <li class = "list-group-item">ID:${manager.employeeID}</li>
        <li class = "list-group-item">Email:${manager.emailAddress}</li>
        <li class = "list-group-item">Office Number:${manager.officeNumber}</li>
        </div>
        </section>`;
    // generatedTeamProfiles.push(managerInfo)
    return managerInfo
}

let engineerProfile = engineer => {
    let engineerInfo = `<section class = "card" style="width:400px">
        <div class = "card-header" style="background: red; color: white;">
        <h2 class="card-title">${engineer.engineerName}</h2>
        <h3 class="card-title"><i class="fa-solid fa-user"> Engineer</i></h3>
        <div class = "card-body"></div>
        <ul class = "list-group"></ul>
        <li class = "list-group-item">ID:${engineer.employeeID}</li>
        <li class = "list-group-item">Email:${engineer.emailAdress}</li>
        <li class = "list-group-item">Github User:${engineer.github}</li>
        </div>
        </section>`
    return engineerInfo
}

let internProfile = intern => {
    let internInfo = `<section class = "card" style="width:400px">
        <div class = "card-header" style="background: red; color: white;">
        <h2 class="card-title">${intern.internName}</h2>
        <h3 class="card-title"><i class="fa-solid fa-user"> Intern</i></h3>
        <div class = "card-body"></div>
        <ul class = "list-group"></ul>
        <li class = "list-group-item">ID:${intern.internID}</li>
        <li class = "list-group-item">Email:${intern.internEmail}</li>
        <li class = "list-group-item">School:${intern.internSchool}</li>
        </div>
        </section>`
    return internInfo
}