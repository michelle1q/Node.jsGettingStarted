const {PI ,E,SQRT2} =Math;

const circle={
    label:'circleX',
    radius:2
};

const circleArea=({radius},{precision=2}) =>
   (PI * radius *radius).toFixed(precision);

console.log(circleArea(circle));

console.log(circleArea(circle),{precision=2});

const [first,...restOf]=[10,20,30];

console.log(first);

console.log(restOf);

const data={
    temp1:'001',
    temp2:'002',
    firstName:'John',
    lastName:'Doe'
};

const {temp1,temp2,...person}=data;

const newArray=[...restOf];

const newObejct={
    ...person
};



