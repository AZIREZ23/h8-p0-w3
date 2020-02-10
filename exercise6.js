// Problem

// Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

function angkaPalindrome(num) {
    // you can only write your code here!
        var numStr = String(num)

        if (numStr.length == 1){
            return num + 1
        }else{
            while (num) {
            var setting ="";
            var angka = num + 1
            var angkaString = String(angka)
            for (var i = angkaString.length -1; i >= 0; i--){
                setting += angkaString[i]
            }
            if (setting == angka) {
                    return angka            
            }
                 num ++          
        }        
    }              
}

  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001