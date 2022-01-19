function pickRandom(warray){
    var randomNumber = Math.floor(Math.random() * warray.length); 
    return warray[randomNumber]; // warray = Words Array
    }
    var words = ['Mushoku Tensei', 'Kono Subarashii', 'Black Clover', 'We Never Learn', 'Go-toubun no Hanayome', 'Kaifuku Jutsushi', 'OreGairu', 'Kawaiikereba', 'Dragon Maid S', 'Tsuredere Children'];
    var random = pickRandom(words);
    console.log(random);              
