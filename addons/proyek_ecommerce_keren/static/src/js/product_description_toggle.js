// File: static/src/js/product_description_toggle.js (Versi Guerilla)

odoo.define('proyek_ecommerce_keren.guerilla_toggle', function (require) {
    'use strict';

    // Kita hanya butuh jQuery, yang sudah pasti ada.
    var $ = require('jquery');

    // Jalankan kode ini ketika seluruh dokumen HTML sudah siap (DOM ready)
    $(document).ready(function () {

        console.log("GUERILLA JS AKTIF! Mencari tombol dan konten...");

        // Cari elemen-elemen kita di seluruh halaman
        var $toggleButton = $('.js_toggle_description');
        var $content = $('.js_description_content');

        // Cek apakah elemennya benar-benar ada di halaman ini
        if ($toggleButton.length > 0 && $content.length > 0) {

            console.log("Tombol dan Konten DITEMUKAN! Menyembunyikan konten...");

            // Sembunyikan kontennya dulu secara default
            $content.hide();

            // Pasang 'event listener' langsung di tombolnya
            $toggleButton.on('click', function (e) {
                // Mencegah link pindah halaman
                e.preventDefault();

                console.log("Tombol di-klik! Menjalankan slideToggle.");

                // Jalankan animasi toggle
                $content.slideToggle(300);
            });

        } else {
            console.log("Tombol atau Konten tidak ditemukan di halaman ini.");
        }
    });
});