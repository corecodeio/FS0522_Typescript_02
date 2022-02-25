"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const PersonInfo_1 = require("./PersonInfo");
const WorkInfo_1 = require("./WorkInfo");
class Person {
    constructor(name, age, department) {
        this.name = name;
        this.workInfo = new WorkInfo_1.WorkInfo(department);
        this.personInfo = new PersonInfo_1.PersonInfo(age);
    }
    getDepartment() {
        return this.workInfo.department;
    }
    getAge() {
        return this.personInfo.age;
    }
    addChief(myChief) {
        this.chief = myChief;
    }
}
exports.Person = Person;
