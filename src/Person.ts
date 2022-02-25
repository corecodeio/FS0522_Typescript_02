import { PersonInfo } from './PersonInfo';
import { WorkInfo } from './WorkInfo';

export class Person {
  private workInfo: WorkInfo;
  private personInfo: PersonInfo;
  private chief: Person | undefined;

  constructor(public name: string, age: number, department: string) {
    this.workInfo = new WorkInfo(department);
    this.personInfo = new PersonInfo(age);
  }

  getDepartment(): string {
    return this.workInfo.department;
  }

  getAge(): number {
    return this.personInfo.age;
  }

  addChief(myChief: Person): void {
    this.chief = myChief;
  }
}
