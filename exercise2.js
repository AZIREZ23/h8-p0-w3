// Directions

// Buatlah sebuah fungsi dengan nama balikString. Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.

        //input "hello world!"
        //output
        // =======>>>>> "!dlrow olleh"

function balikString(balik){
    
    
        var susun = "";

    for (i= balik.length -1; i >= 0; i--){
    
        susun += balik[i]
}
   return susun
}

console.log(balikString("hello world!"))