console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'),3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`)); 
    const getCandy = new Promise((resolve, reject) => resolve(`candy`)); 
    const getColdDrink = new Promise((resolve, reject) => resolve(`ColdDrink`)); 

    // const addButter = new Promise((resolve, reject) => resolve(`butter`)); 
    // const addColdDrink = new Promise((resolve, reject) => resolve(`ColdDrink`)); 

    let ticket = await promiseWifeBringingTicks;
    let [popcorn, candy, colddrink] = await Promise.all([getPopcorn,getCandy,getColdDrink])
    console.log(`${popcorn}, ${candy},${colddrink}`);
    //     // console.log('wife: I have the ${tickets}');
    //     // console.log('husband: we should go in');
    //     // console.log('wife: no i am hungry');
        // return new Promise((resolve, reject) => resolve(`${t} popcorn`));
   
    //    let popcorn = await getPopcorn;

    // console.log('husband: I got some ${popcorn}');
    // console.log('husband: we should go in');
    // console.log('wife: I need butter on my popcorn');
     
    // let butter = await addButter;

//     console.log(`husband: I got some ${butter} on popcorn`);
//     console.log(`husband: we should go in`);
//     console.log(`wife: I need ColdDrink`);
//     // console.log(`husband: thank you for the reminder *grins*`);

//     let coldDrink = await addColdDrink;
//     console.log(`husband: I got some ${coldDrink} on popcorn`);
//     console.log(`husband: anything else darling?`);
//     console.log(`wife: lets got we are getting late`);
//     console.log(`husband: thank you for the reminder *grins*`);
    return ticket;
}


preMovie().then((msg) => console.log(`person3: shows ${msg}`));
console.log('person4: shows ticket');
console.log('person5: shows ticket');
