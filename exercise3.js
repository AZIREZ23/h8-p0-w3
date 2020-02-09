// Directions

// Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n. Contoh input dapat dilihat dibawah:
//contoh input

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]


function dataHandling(proces){

    for (var i =0; i < proces.length; i++){

   
        console.log("Nomor Id: "+ proces[i][0] + '\n' +"Nama Lengkap: " + proces[i][1] + '\n'+ "TTL: "+ proces[i][2]+" "+proces[i][3] +'\n'+ "Hobi: " + proces[i][4] +'\n'
         )
    }

}

dataHandling(input)
