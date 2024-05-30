## Tools Version
- Cypress : v13.9.0
- node.js : v20.12.0
- Cucumber : v1.10.0
- Chrome : 125.0.6422.112

## Cara mengubah username dan password
1. Buka file dengan nama "favorite-indonesia.cy.js" dan "favorite-inggris.cy.js"
2. Cari dengan keyword And("Sign in with valid account") yang berada di paling atas
3. Ganti username and password pada cy.login() yang nantinya bisa digunakan untuk semua scenario


## HAL YANG HARUS DIPERHATIKAN!!!
- Lebih mudah jika melakukan running secara berurut yaitu dimulai dulu dari file "favorite-indonesia.feature" dengan memastikan terlebih dahulu default bahasa Inggris sehingga bisa diubah ke Indonesia kemudian jalankan "favorite-inggris.feature"
- Scenario untuk memastikan bahwa default language dalam bahasa inggris ini penting untuk diperhatikan sehingga scenario ini berada di paling awal, jika status Failed maka harus melakukan stop terlebih dahulu kemudian running menggunakan tags pada cmd/terminal npx cypress run -e TAGS='@change-to-english-language' untuk mengubah bahasa menjadi Inggris sehingga scenario lainnya bisa berjalan 
- Dalam menjalankan scenario dengan default language English maka bisa dijalankan dengan npx cypress run -e TAGS='@regression-testing-english' pada terminal/cmd untuk hanya menjalankan scenario dengan default language English atau bisa langsung running pada file "favorite-inggris.feature" tapi pastikan terlebih dahulu bahasa sudah berubah menjadi bahasa Inggris atau sudah menjalankan file "favorite-indonesia.feature" atau juga dengan running dengan tags npx cypress run -e TAGS='@change-to-english-language' untuk langsung mengubah bahasa
- Pada pengujian ini dibuat dengan 2 file untuk bahasa yang berbeda karena beberapa elemen tidak bisa ter-detect sehingga penguji menggunakan syntax cy.contains() yang didalamnya akan diisi value sesuai bahasa yang diubah seperti cy.contains('Daftar Tontonan') dalam bahasa Indonesia dan cy.contains('Watchlist') dalam bahasa Inggris maka perlu dipastikan bahasa sudah sesuai 

## Scenario yang Dijalankan
### Kriteria Wajib
- Change the language to Indonesian language (PASS)
- Mark a movie as favorite with logging in first - POSITIVE CASE (PASS)
- Mark a movie as favorite without login - NEGATIVE CASE (PASS)
- Add more than 1 favorite movie (PASS)
- Mark a TV show as favorite with logging in first - POSITIVE CASE (PASS)
- Mark a TV show as favorite without login - NEGATIVE CASE (PASS)
- Add more than 1 favorite TV show (PASS)
- Sorting in ascending order (PASS)
- Sorting in descending order (PASS)
- Export CSV list of favorite movies (PASS)
- Change the language to English language (PASS)
### Optional Task
- Make sure default language in English (PASS)
- Remove a TV show from favorite TV shows list (FAILED)
- Remove a movie from favorite movies list (FAILED)
- Ordering favorite movies list based on 'Tanggal Rilis' (PASS)
- Ordering favorite movies list based on 'Popularitas' (PASS)
- Ordering favorite movies list based on 'Ditambahkan' (PASS)

## Point yang dijalankan
### Kriteria Wajib
1. Sebagai gambaran beberapa fungsionalitas yang wajib dilakukan pengujian otomatis dari fitur tsb berdasarkan kesepakatan bersama
2. Tuliskan skenario pengujian tersebut dalam format Gherkin.
3. Buat pengujian otomatis menggunakan Cypress dari case di atas / case yang ada di nomor satu. 
4. Validasi setiap step dan hasil dari pengujian yang Anda buat. 
5. Username dan password dari TMDb (configuration / environment), jangan di hardcode menggunakan username dan password Anda
6. Menggunakan Git dan Github dengan rapi, detail dan jelas
7. Membuat dokumentasi project dalam bentuk markdown (.md) file
### Optional Task
1. Lebih baik jika codeline yang Anda buat pada test kali ini clean dan mudah dibaca
2. Bahasa yang Anda gunakan dalam pembuatan Test Case prefer  menggunakan bahasa English (US) atau English (UK)
3. Membuat pengujian dengan case lain yang berhubungan dengan fitur di atas, berdasarkan explorasi anda sendiri yang menurut anda belum tercover di kriteria wajib
4. Memberikan saran / feedback ke tim UI / UX maupun developer dari hasil dan fungsionalitas fitur saat ini yg menurut anda ada kurang.
6. Dokumentasi atau catatan lain yg ingin anda highlight ke reviewer sebagai pertimbangan untuk penilaian

## Validasi hasil pengujain
1. Pada scenario yang memastikan default language dalam bahasa Inggris, saya melakukan validasi dengan memastikan bahwa welcome sign pada homepage sudah dalam bahasa Inggris
2. Pada scenario untuk mengubah bahasa, saya melakukan validasi dengan memastikan ucapan pembuka pada homepage TMDB terdapat kalimat "Selamat datang" untuk bahasa Indonesia atau "Welcome" untuk bahasa Inggris
3. Pada scenario "Mark a movie/tv show as favorite", saya melakukan validasi dengan memastikan bahwa judul yang sudah dilakukan mark ada pada list favorite
4. Pada scenario "Add more than 1 favorite movie/tv show", saya melakukan validasi dengan memastikan judul yang sudah dilakukan mark ada pada list favorite dan jumlah movie/tv show pada list lebih dari 1
5. Pada scenario "Remove a TV show/movie from favorite", saya melakukan validasi dengan memastikan bahwa judul yang dihapus sudah tidak ada lagi di list favorite
6. Pada scenario "Sorting ascending/descending", saya melakukan validasi dengan memastikan bahwa ketika sudah melakukan sorting, attribute data-order sudah berbentuk asc/desc sesuai sorting yang dilakukan
7. Pada scenario "Export CSV list", saya melakukan validasi dengan memastikan bahwa ketika sudah melakukan ekspor akan muncul pop-up message yang mengatakan bahwa ekspor berhasil dilakukan
8. Pada scenario "Filtering", saya melakukan validasi dengan memastikan bahwa filter sudah sesuai dengan memastikan bahwa pada url terdapat parameter 'sort_by=' yang sesuai dengan filter yang dipilih

## Saran mengenai fungsionalitas
1. Scenario remove favorite berstatus Failed karena ketika melakukan klik pada remove tidak terjadi action apapun sehingga fungsionalitas dasar dari button tersebut tidak berjalan
2. Beberapa element dibuat tidak visible sehingga element susah ditemukan sehingga hal ini akan menyulitkan dalam melakukan automation testing sehingga beberapa element seharusnya dibuat agar bisa mudah terdetect oleh tim FE
3. Beberapa deskripsi pada film dalam bahasa Indonesia masih belum ada padahal dalam bahasa Inggris sudah ada, seharusnya jika mengubah bahasa deskripsi yang sudah ada di bahasa sebelumnya bisa langsung otomatis berubah

## Video report
1. File favorite-english.feature : https://drive.google.com/file/d/1fkHp5gJXrOESCKso42mxYwkozeTdUiIp/view?usp=sharing
1. File favorite-indonesia.feature : https://drive.google.com/file/d/1u8rLtcjgVXQygrGiTV5vk7KeqaR6cVh7/view?usp=sharing

