const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
        super();
        this.office = office;
    }

    getRole() {
        return 'Manager'
      }

    getOffice() {
       return this.office
    }
}

module.exports = Manager;