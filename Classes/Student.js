class Student extends Person{
    constructor(name,level){
        super(name);
        this.level=level;
    }
    greet(){
        console.log(`Hello ${this.name} from ${this.level}`);
    }
}

// export default Student;