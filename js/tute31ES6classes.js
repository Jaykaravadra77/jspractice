console.log("ES6 MAKES LIFE EASY");


class emp{

    constructor(name,experience,salary){
        this.name=name;
        this.experience=experience;
        this.salary=salary;
    }
    nara(){
        return `${this.name} is the best employ in our company`;
    }

    static add(a,b){
        return a+b;
    }
}

let emp1=new emp("Karavadra Jay",2,35000);
console.log(emp1.nara());
console.log(emp.add(4,5));


class prg extends emp{

    constructor(name,experience,salary,language){
        super(name,experience,salary);
        this.language=language;
    }
    favlan(){
        if(this.language == "Javascript"){
           return ("Your senior Devloper Is Jay k");
        }
    }
}

let prg1=new prg("Karavadra Jay",2,35000,"Javascript");
console.log(prg1);

console.log(prg1.favlan());
