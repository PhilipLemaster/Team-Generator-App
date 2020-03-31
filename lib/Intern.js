const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super();
        this.school = school;
    }

    getRole() {
        return 'Engineer'
      }

    getSchool() {
       return this.school
    }
}

module.exports = Intern;
