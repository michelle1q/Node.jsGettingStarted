const x=function(){
   //"this" here is the caller of x
};

const y= () => {
  //"this" here is NOT the caller of y

  //It's the same "this" found in y's scope
};

const sqaure = (a) => {
    return a*a;
};

const square = (a) => a*a; //more concise

const square = a => a*a; //more concise
