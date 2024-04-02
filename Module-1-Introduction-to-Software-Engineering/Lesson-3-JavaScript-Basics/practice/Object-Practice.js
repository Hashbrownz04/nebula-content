// 1. Create an object for a celebrity and save it to a variable
const sethRogen = {
    fullName: 'Seth Rogen'
}

const priorObject = sethRogen

console.log(priorObject)

// 2. Using dot-notation add 3 key-value pairs to the celebrity
sethRogen.career = ['Actor', 'Writer', 'Producer', 'Director', 'Comedian']
sethRogen.movies = ['Sausage Party', 'This is the End', 'TMNT: Mutant Mayhem', 'The Disaster Artist']
sethRogen.tvshows = 'Invincible'

// 3. Using bracket-notation add 3 key-value pairs to the celebrity
sethRogen['birthDate'] = '15-Apr-\'82'
sethRogen['birthOrigin'] = 'Vancouver, Canada'
sethRogen['nationality'] = 'Canadian'

// 4. Write a function that allows us to add or update 3 properties
function update(object, prop1, prop2, prop3, value1, value2, value3){
    object[prop1] = value1;
    object[prop2] = value2;
    object[prop3] = value3;
    return object;
}

console.log(update(sethRogen, 'fullName', 'movies', 'nationality', 'Seth Aaron Rogen', 
['Sausage Party', 'This is the End', 'TMNT: Mutant Mayhem', 'The Disaster Artist', 'SuperBad'],
['Canadian', 'American']))

// 5. Using a loop - log all the celebrities properties to the console

