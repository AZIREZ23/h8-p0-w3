
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];



function dataHandling2 (ganti){
    var ubah;
    
    ubah = ganti.splice(4, 1, "Pria" , "SMA Internasional Metro")

    return ubah
       
}

dataHandling2(input)
console.log(input);
//////////////////////////////////
var ubahBulan = input[3]
var kata = ubahBulan.split("")


switch (kata[4]){
        case '1':   { console.log('Januari'); break; }
        case '2':   { console.log('Februari'); break; }
        case '3':   { console.log('Maret'); break; }
        case '4':   { console.log('April'); break; }
        case '5':   { console.log('Mei'); break; }
        case '6':   { console.log('Juni'); break; }
        case '7':   { console.log('Juli'); break; }
        case '8':   { console.log('Agustus'); break; }
        case '9':   { console.log('September'); break; }
        case '10':   { console.log('Oktober'); break; }
        case '11':   { console.log('November'); break; }
        case '12':   { console.log('Desember'); break; }
        default :   {console.log('Salah Input')} 
}

////////////////////////////////////////////////
var kata2 = input[3].split("")

tang = kata2[0]+kata2[1]
bul = kata2[3]+kata2[4]
tah = kata2[6]+kata2[7]+kata2[8]+kata2[9]

var combi = []
tampil1 = combi.concat(tah, tang, bul)
console.log(tampil1)

////////////////////////////////////////////////


var kata5="";
tampil2 = combi.concat(tang, bul, tah)
kata5 = tampil2.join('-')
console.log(kata5)
/////////////////////////////////////////////

var kata6="";
kata6 = input[1].slice(0, 15)
console.log(kata6)



/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */