module.exports = {
    teamGeneratorProfile: theTeam => {
        // const generatedTeamProfiles = [];
        theTeam.forEach(employee => {
            console.log(employee)
            switch(employee.employeeType){
                case 'manager':
                    managerProfile(employee)
                    // generatedTeamProfiles.push(managerProfile(employee))
                    break
                case 'engineer':
                    engineerProfile(employee)
                    break
                case 'intern':
                    internProfile(employee)
                    break
            }
        })
    }
}


let managerProfile = manager => {
    let managerInfo = `<section class = "card" style="width:400px">
        <div class = "card-header" style="background: red; color: white;">
        <h2 class="card-title">${manager.name}</h2>
        <h3 class="card-title"><i class="fa-solid fa-user"> Manager</i></h3>
        <div class = "card-body"></div>
        <ul class = "list-group"></ul>
        <li class = "list-group-item">ID:${manager.id}</li>
        <li class = "list-group-item">Email:${manager.email}</li>
        <li class = "list-group-item">Office Number:${manager.officeNumber}</li>
        </div>
        </section>`;
    // generatedTeamProfiles.push(managerInfo)
    return managerInfo
}

let engineerProfile = engineer => {
    let engineerInfo = `<section class = "card" style="width:400px">
        <div class = "card-header" style="background: red; color: white;">
        <h2 class="card-title">${engineer.name}</h2>
        <h3 class="card-title"><i class="fa-solid fa-user"> Engineer</i></h3>
        <div class = "card-body"></div>
        <ul class = "list-group"></ul>
        <li class = "list-group-item">ID:${engineer.id}</li>
        <li class = "list-group-item">Email:${engineer.email}</li>
        <li class = "list-group-item">Github User:${engineer.github}</li>
        </div>
        </section>`
    generatedTeamProfiles.push(engineerInfo)
}

let internProfile = intern => {
    let internInfo = `<section class = "card" style="width:400px">
        <div class = "card-header" style="background: red; color: white;">
        <h2 class="card-title">${intern.name}</h2>
        <h3 class="card-title"><i class="fa-solid fa-user"> Intern</i></h3>
        <div class = "card-body"></div>
        <ul class = "list-group"></ul>
        <li class = "list-group-item">ID:${intern.id}</li>
        <li class = "list-group-item">Email:${intern.email}</li>
        <li class = "list-group-item">School:${intern.school}</li>
        </div>
        </section>`
    generatedTeamProfiles.push(internInfo)
}