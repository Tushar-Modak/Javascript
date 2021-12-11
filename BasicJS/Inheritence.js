class Information {
  constructor(name,address,dob,salary) {
    this.name = name;
    this.address = address;
    this.dob = dob;
    this.salary = salary;
  }
  getEmployee()
  {
    console.log('The employee name is ${name}');
  }
}

const info=new Information("Abir","Dhaka","01-12-1994",1000);
info.getEmployee();
console.log(info);
console.log(info.name);
