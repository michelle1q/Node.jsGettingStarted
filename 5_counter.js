let counter =0;
const IntervalId=setInterval(() => {
    console.log('Hello World');
    counter +=1;

    if(counter === 5){
        console.log('Done');
        clearInterval(IntervalId);
    }
},1000);