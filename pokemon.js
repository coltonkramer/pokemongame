let baseData;
let baseData2;
//const typeInfo;

function playerPokemon(){

    //access the API form online
    //assigning the api to the url variable
    const random = Math.floor(Math.random() * 897) + 1;
    const url = 'https://pokeapi.co/api/v2/pokemon/'+ random;

    //fetching url and converting it to json
    fetch(url)
        .then(response => response.json())
        .then(data => {
            baseData = { 
                name: data.name.toUpperCase(),
                number: data.id,
                image: data.sprites['front_default'],
                attack: data.stats[1].base_stat,
                type: data.types[0].type.name,
                typeUrl:data.types[0].type.url
            }
            display(baseData);

    })
};
const playerInfo = document.getElementById('pokemon-stats');
    const display = (data) => {
        const html = 
            ` 
            <h2 class="name"> NO.${data.number} ${data.name}</h2>
            <img class="image" src="${data.image}"/>
            
            <div class="info"> 
                <ul style="list-style: none;">
                <li><span>Pokemon Type:</span>  ${data.type.charAt(0).toUpperCase() + data.type.slice(1)}
                </li>
                <li><span>Pokemon Attack:</span>  ${data.attack}</li>
                </ul>
            </div>
            `;
playerInfo.innerHTML = html;          
};


//challenger data retreival and connection to html
function challenger(){

    const random2 = Math.floor(Math.random() * 897) + 1;
const url = 'https://pokeapi.co/api/v2/pokemon/'+ random2;

//fetching url and converting it to json
fetch(url)
    .then(response => response.json())
    .then(data2 => {
        baseData2 = { 
            name: data2.name.toUpperCase(),
            number: data2.id,
            image: data2.sprites['front_default'],
            attack: data2.stats[1].base_stat,
            type: data2.types[0].type.name,
            typeUrl:data2.types[0].type.url
        }

        displayTwo(baseData2);

     
    })
};
const enemyInfo = document.getElementById('pokemon-enemy');
    const displayTwo = (data2) => {
        const html = 
            ` 
            <h2 class="name"> NO.${data2.number} ${data2.name}</h2>
            <img class="image" src="${data2.image}" width="200px"/>
            
            <div class="info"> 
                <ul style="list-style: none;">
                <li><span>Pokemon Type:</span>  ${data2.type.charAt(0).toUpperCase() + data2.type.slice(1)}
                </li>
                <li><span>Pokemon Attack:</span>  ${data2.attack}</li>
                </ul>
            </div>
            `;
        enemyInfo.innerHTML = html;
 };
 playerPokemon();
 challenger();

 //checks the types and compares them to see if they do double damage
function battle(baseData,baseData2){

    switch(baseData.type){
        case 'fairy':
            if( baseData2.type === 'fight' || baseData2.type === 'dragon' ||baseData2.type === 'dark'){

                baseData.attack *= 2;  
                compare(baseData,baseData2);
            }
            else if(baseData2.type === 'posion' || baseData2.type === 'steel' ){
                baseData2.attack *= 2;
                compare(baseData,baseData2);
            }
            else{
                compare(baseData,baseData2);
            }
            break;
        case 'steel': 
            if (baseData2.type === 'ice' ||baseData2.type === 'rock' ||baseData2.type === 'fairy'){
                baseData.attack *= 2;  
                compare(baseData,baseData2);
            }
            else if(baseData2.type === 'fire' || baseData2.type === 'fight' || baseData2.type === 'ground'){
                baseData2.attack *= 2;
                compare(baseData,baseData2);
            }
            else{
                compare(baseData,baseData2);
            }
            break;
        case 'dark': 
            if (baseData2.type === 'fight' ||baseData2.type === 'dragon'){
                baseData.attack *= 2;  
                compare(baseData,baseData2);
            }
            else if (baseData2.type === 'fight' || baseData2.type === 'bug' || baseData2.type === 'fairy'){
                baseData2.attack *= 2
                compare(baseData,baseData2);
            }
            else{
                compare(baseData,baseData2);
            }
            break;
        case 'dragon': // dragon and ghost are strong against themselves so I removed redundancies to keep it simpler
            if (baseData2 === 'ice' || baseData2 === 'fairy'){
                baseData2.attack *= 2
                compare(baseData,baseData2);
            }
            else{
                compare(baseData,baseData2);
            }
        case 'ghost': 
            if (baseData2.type === 'psychic'){
                baseData.attack *= 2;  
                compare(baseData,baseData2);
            }
            else if (baseData2.type === 'dark'){
                baseData2.attack *= 2
                compare(baseData,baseData2);
            }
            else{
                compare(baseData,baseData2);
            }
            break;
        case 'rock': 
            if (baseData2.type === 'fire' ||baseData2.type === 'ice' ||baseData2.type === 'flying' ||baseData2.type === 'bug'){
                baseData.attack *= 2;  
                compare(baseData,baseData2);
            }
            else if (baseData2.type === 'water' ||baseData2.type === 'grass' ||baseData2.type === 'fight' ||baseData2.type === 'ground' ||baseData2.type === 'steel'){
                baseData2.attack *= 2
                compare(baseData,baseData2)
            }
            else{
                compare(baseData,baseData2);
            }
            break;
        case 'bug': 
            if (baseData2.type === 'grass' ||baseData2.type === 'psychic' ||baseData2.type === 'dark'){
                baseData.attack *= 2;  
                compare(baseData,baseData2);
            }
            else if(baseData2.type === 'fire' ||baseData2.type === 'flying' ||baseData2.type === 'rock'){
                baseData2.attack *= 2;
                compare(baseData,baseData2);
            }
            else{
                compare(baseData,baseData2);
            }
            break;
        case 'psychic':
            if (baseData2.type === 'fight' ||baseData2.type === 'poison'){
                baseData.attack *= 2;  
                compare(baseData,baseData2);
            }
            else if(baseData2.type === 'bug' || baseData2.type === 'ghost' || baseData2.type === 'dark'){
                baseData2.attack *= 2;
                compare(baseData,baseData2)
            }
            else{
                compare(baseData,baseData2);
            }
            break;
        case 'flying':
            if (baseData2.type === 'grass' ||baseData2.type === 'fight' ||baseData2.type === 'bug'){
                baseData.attack *= 2;  
                compare(baseData,baseData2);
            }
            else if (baseData2.type === 'electric' || baseData2.type === 'ice' || baseData2.type === 'rock'){
                baseData2.attack *= 2;
                compare(baseData,baseData2);
            }
            else{
                compare(baseData,baseData2);
            }
            break;
        case 'ground':
            if (baseData2.type === 'fire' ||baseData2.type === 'electric' ||baseData2.type === 'poison' ||baseData2.type === 'rock' ||baseData2.type === 'steel' ){
                baseData.attack *= 2;  
                compare(baseData,baseData2);
            }
            else if(baseData2.type === 'water' || baseData2.type === 'grass' || baseData2.type === 'ice'){
                baseData2.attack *= 2;
                compare(baseData,baseData2);
            }
            else{
                compare(baseData,baseData2);
            }
            break;
        case 'poison':
            if (baseData2.type === 'grass' ||baseData2.type === 'fairy'){
                baseData.attack *= 2;  
                compare(baseData,baseData2);
            }
            else if(baseData2.type === 'ground' || baseData2.type === 'psychic'){
                baseData2.attack *= 2;
                compare(baseData,baseData2);
            }
            else{
                compare(baseData,baseData2);
            }
            break;
        case 'fight':
            if (baseData2.type === 'normal' ||baseData2.type === 'ice' ||baseData2.type === 'rock' ||baseData2.type === 'dark' ||baseData2.type === 'steel'){
                baseData.attack *= 2;  
                compare(baseData,baseData2);
            }
            else if(baseData2.type === 'flying' || baseData2.type === 'psychic' || baseData2.type === 'fairy'){
                baseData2.attack *= 2;
                compare(baseData,baseData2);
            }
            else{
                compare(baseData,baseData2);
            }
            break;
        case 'ice':
            if (baseData2.type === 'grass' ||baseData2.type === 'ground' ||baseData2.type === 'flying' ||baseData2.type === 'rock'){
                baseData.attack *= 2;  
                compare(baseData,baseData2);
            }
            else if(baseData2.type === 'fire' || baseData2.type === 'fight' || baseData2.type === 'rock' || baseData.type === 'steel'){
                baseData2.attack *= 2;
                compare(baseData,baseData2);
            }
            else{
                compare(baseData,baseData2);
            }
            break;
        case 'grass':
            if (baseData2.type === 'water' ||baseData2.type === 'ground' ||baseData2.type === 'rock'){
                baseData.attack *= 2;  
                compare(baseData,baseData2);
            }
            else if(baseData2.type === 'fire' || baseData2.type === 'ice' || baseData2.type === 'poison' || baseData2.type === 'flying' || baseData2.type === 'bug'){
                baseData2.attack *= 2;
                compare(baseData,baseData2);
            }
            else{
                compare(baseData,baseData2);
            }
            break;
        case 'electric':
            if (baseData2.type === 'water' ||baseData2.type === 'flying'){
                baseData.attack *= 2;  
                compare(baseData,baseData2);
            }
            else if(baseData2.type === 'ground'){
                baseData2.attack *= 2;
                compare(baseData,baseData2);
            }
            else{
                compare(baseData,baseData2);
            }
            break;
        case 'water':
            if (baseData2.type === 'fire' ||baseData2.type === 'ground' ||baseData2.type === 'rock'){
                baseData.attack *= 2;  
                compare(baseData,baseData2);
            }
            else if(baseData2.type === 'electric' || baseData2.type === 'grass'){
                baseData2.attack *= 2;
                compare(baseData,baseData2);
            }
            else{
                compare(baseData,baseData2);
            }
            break;
        case 'fire':
            if (baseData2.type === 'grass' ||baseData2.type === 'ice' ||baseData2.type === 'bug' ||baseData2.type === 'steel'){
                baseData.attack *= 2;  
                compare(baseData,baseData2);
            }
            else if(baseData2.type === 'water' || baseData2.type === 'ground' || baseData2.type === 'rock'){
                baseData2.attack *= 2;
                compare(baseData,baseData2);
            }
            else{
                compare(baseData,baseData2);
            }
            break;
        case 'normal':
            if (baseData2.type === 'fighting'){
                baseData2.attack *= 2;  
                compare(baseData,baseData2);
            }
            else{
                compare(baseData,baseData2);
            }
            break;

            
        }
          
               
};

//compares the attack numbers greater attack is the winner
function compare(baseData,baseData2){
    if(baseData.attack >= baseData2.attack){
        youWin(baseData);
    }
    else{
        youLose(baseData);
    }
}


//
function youWin(baseData){
    window.alert(baseData.name + ' won! YEAHH!')
    challenger();

}

function youLose(baseData){
    window.alert(baseData.name + ' fainted')
    playerPokemon();
    challenger();
}




