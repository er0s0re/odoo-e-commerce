// File: static/src/js/product_description_toggle.js (Enhanced Version)

odoo.define('proyek_ecommerce_keren.enhanced_features', function (require) {
    'use strict';

    var $ = require('jquery');
    var core = require('web.core');
    var _t = core._t;

    // Jalankan kode ini ketika seluruh dokumen HTML sudah siap (DOM ready)
    $(document).ready(function () {

        console.log("Enhanced JS AKTIF! Inisialisasi fitur login required...");

        // === FITUR TOGGLE DESCRIPTION (untuk user yang sudah login) ===
        var $toggleButton = $('.js_toggle_description');
        var $content = $('.js_description_content');

        if ($toggleButton.length > 0 && $content.length > 0) {
            console.log("Tombol dan Konten toggle ditemukan!");
            $content.hide();
            
            $toggleButton.on('click', function (e) {
                e.preventDefault();
                $content.slideToggle(300);
            });
        }

        // === FITUR PERINGATAN LOGIN UNTUK ADD TO CART ===
        
        // Cek apakah ada tombol disabled (user belum login)
        var $disabledCartButton = $('.btn.disabled').filter(':contains("Login untuk Menambah")');
        
        if ($disabledCartButton.length > 0) {
            console.log("User belum login - menambahkan event handler untuk peringatan");
            
            // Tambahkan event handler untuk klik pada tombol disabled
            $disabledCartButton.on('click', function (e) {
                e.preventDefault();
                showLoginRequiredModal();
            });
        }

        // === FUNGSI UNTUK MENAMPILKAN MODAL PERINGATAN ===
        function showLoginRequiredModal() {
            // Buat modal HTML
            var modalHTML = `
                <div class="modal fade" id="loginRequiredModal" tabindex="-1" role="dialog" aria-labelledby="loginRequiredModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header bg-warning text-white">
                                <h5 class="modal-title" id="loginRequiredModalLabel">
                                    <i class="fa fa-exclamation-triangle"></i> Login Diperlukan
                                </h5>
                                <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body text-center">
                                <i class="fa fa-lock fa-3x text-warning mb-3"></i>
                                <h6>Akses Terbatas</h6>
                                <p>Untuk menambahkan produk ke keranjang, Anda harus login terlebih dahulu.</p>
                                <p class="text-muted small">Dengan login, Anda juga bisa melihat deskripsi dan spesifikasi produk lengkap.</p>
                            </div>
                            <div class="modal-footer justify-content-center">
                                <a href="/web/login?redirect=${encodeURIComponent(window.location.pathname)}" class="btn btn-primary">
                                    <i class="fa fa-sign-in"></i> Login Sekarang
                                </a>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                    <i class="fa fa-times"></i> Batal
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Hapus modal lama jika ada
            $('#loginRequiredModal').remove();
            
            // Tambahkan modal ke body
            $('body').append(modalHTML);
            
            // Tampilkan modal
            $('#loginRequiredModal').modal('show');
            
            // Auto-remove modal setelah ditutup
            $('#loginRequiredModal').on('hidden.bs.modal', function () {
                $(this).remove();
            });
        }

        // === FITUR TAMBAHAN: PERINGATAN SAAT MENCOBA AKSES TAB DESCRIPTION ===
        
        // Jika ada alert warning untuk login (berarti user belum login)
        var $loginAlert = $('.alert.alert-warning').filter(':contains("Login Diperlukan")');
        
        if ($loginAlert.length > 0) {
            console.log("User belum login - menambahkan animasi perhatian");
            
            // Tambahkan animasi berkedip pada alert
            setInterval(function() {
                $loginAlert.fadeOut(500).fadeIn(500);
            }, 3000);
        }

        // === FITUR PERLINDUNGAN HALAMAN SHOP ===
        
        // Cek apakah kita di halaman shop dan user belum login
        if (window.location.pathname.includes('/shop') && $('.alert-warning').filter(':contains("Login Diperlukan")').length > 0) {
            console.log("User belum login di halaman shop - menambahkan proteksi");
            
            // Tambahkan overlay transparan untuk mencegah interaksi dengan produk lain
            var $productCards = $('.oe_product_cart');
            
            $productCards.each(function() {
                var $card = $(this);
                $card.css('position', 'relative');
                
                // Tambahkan overlay
                $card.append(`
                    <div class="login-required-overlay" style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(255,255,255,0.8);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 10;
                        border-radius: 8px;
                        cursor: pointer;
                    ">
                        <div class="text-center">
                            <i class="fa fa-lock fa-2x text-muted mb-2"></i>
                            <p class="text-muted small mb-0">Klik untuk Login</p>
                        </div>
                    </div>
                `);
                
                // Event handler untuk overlay
                $card.find('.login-required-overlay').on('click', function(e) {
                    e.preventDefault();
                    showLoginRequiredModal();
                });
            });
        }

        console.log("Enhanced JS selesai dimuat!");
    });
});