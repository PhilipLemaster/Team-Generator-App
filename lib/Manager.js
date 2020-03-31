const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
    }

    getRole() {
        return 'Manager'
      }
}