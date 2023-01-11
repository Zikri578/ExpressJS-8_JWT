# ExpressJS-8_JWT

JSON Web Token (JWT) adalah standar open source (RFC 7519) yang digunakan untuk menyampaikan afirmasi secara aman menggunakan compact, self-contained mechanism. JWT digunakan untuk menyampaikan informasi autentikasi dan pengenal (seperti nama pengguna dan hak akses) antara aplikasi dan server. JWT dapat diterjemahkan ke dalam banyak bahasa, termasuk JavaScript. Dalam JavaScript, JWT biasanya digunakan untuk otentikasi pada aplikasi web dan RESTful API.

JWT terdiri dari tiga bagian: header, payload, dan signature. Header menentukan algoritma yang digunakan untuk menandatangani token, sedangkan payload menyimpan informasi yang akan diteruskan. Signature adalah hasil dari proses enkripsi yang menjamin bahwa token tidak telah diubah selama transmisi.

Pada JavaScript, JWT biasanya digunakan sebagai mekanisme otentikasi pada aplikasi web dan API. Aplikasi web atau API dapat memverifikasi token yang diterima dari client untuk memastikan bahwa informasi yang diterima dari client valid dan dikeluarkan oleh server yang dikenal.

Untuk menggunakan JWT pada JavaScript, Anda dapat menggunakan library seperti jsonwebtoken. Library ini menyediakan fungsi untuk men-generate dan memverifikasi token JWT. Anda juga dapat menggunakan library ini untuk menambahkan dan mengelola informasi pada payload dari token.

Secara umum, proses otentikasi dengan menggunakan JWT di JavaScript dapat dilakukan dengan beberapa langkah sebagai berikut:
- Client mengirimkan permintaan login ke server dengan menyertakan informasi autentikasi seperti nama pengguna dan kata sandi.
- Jika autentikasi berhasil, server akan mengeluarkan JWT yang berisi informasi pengenal dan hak akses. Token ini dapat berisi informasi seperti ID pengguna, nama pengguna, dan hak akses.
- Setelah mendapatkan token, client dapat menyimpan token dan menggunakannya dalam permintaan selanjutnya ke server.
- Dalam setiap permintaan ke server, client harus menyertakan token JWT dalam header.
- Server akan memverifikasi token JWT yang diterima dari client untuk memastikan bahwa token valid dan dikeluarkan oleh server yang dikenal.
- Jika token valid, server akan memproses permintaan dari client dan mengembalikan respons yang sesuai. Jika token tidak valid, server akan mengembalikan respons yang menandakan bahwa permintaan ditolak.

Di samping itu, JWT juga bisa digunakan dalam konteks penyimpanan state pada aplikasi single page. Pada aplikasi single page, setelah user berhasil login maka JWT dapat digunakan sebagai mekanisme untuk menyimpan state pada client sehingga user tidak perlu login terus menerus dan data yang diperlukan bisa diambil dari JWT itu sendiri.

Beberapa hal yang perlu diingat ketika menggunakan JWT pada JavaScript adalah:
* JWT harus disimpan dengan aman di client, karena token yang tidak aman dapat digunakan oleh pihak yang tidak berwenang untuk mengakses informasi yang diteruskan.
* Jangan menyimpan informasi sensitif dalam payload JWT, seperti kata sandi atau informasi pribadi.
* Pastikan untuk mengaktifkan algoritma enkripsi yang kuat saat menandatangani JWT, seperti HMACSHA256 atau RSA.
* Jangan lupa untuk melakukan pemeriksaan waktu kedaluwarsa (expiration time) pada JWT, sehingga token hanya valid untuk jangka waktu tertentu.
* Jangan percaya pada informasi yang diteruskan dalam JWT tanpa memverifikasinya terlebih dahulu di server.
