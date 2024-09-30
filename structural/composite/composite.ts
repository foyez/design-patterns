// Here we have different employee types
interface Employee {
  getName(): string;
  setSalary(salary: number): void;
  getSalary(): number;
  getRoles(): string[];
}

class Developer implements Employee {
  protected salary: number;
  protected name: string;
  protected roles: string[] = [];

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  getName(): string {
    return this.name;
  }

  setSalary(salary: number): void {
    this.salary = salary;
  }

  getSalary(): number {
    return this.salary;
  }

  getRoles(): string[] {
    return this.roles;
  }
}

class Designer implements Employee {
  protected salary: number;
  protected name: string;
  protected roles: string[] = [];

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  getName(): string {
    return this.name;
  }

  setSalary(salary: number): void {
    this.salary = salary;
  }

  getSalary(): number {
    return this.salary;
  }

  getRoles(): string[] {
    return this.roles;
  }
}

// Then we have an organization which consists of several different types of employees
class Organization {
  protected employees: Employee[] = [];

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  getNetSalaries(): number {
    let netSalary = 0;

    for (const employee of this.employees) {
      netSalary += employee.getSalary();
    }

    return netSalary;
  }
}

// Prepare the employees
const john = new Developer("John Doe", 12000);
const jane = new Designer("Jane Doe", 10000);

// Add them to organization
const organization = new Organization();
organization.addEmployee(john);
organization.addEmployee(jane);

console.log("Net salaries: " + organization.getNetSalaries()); // Net Salaries: 22000
