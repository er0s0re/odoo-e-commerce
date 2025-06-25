from odoo import models, fields, api

class ProductTemplate(models.Model):
    _inherit = 'product.template'

    catatan_internal = fields.Text(
        string="Catatan Internal Tim (untuk Tab Deskripsi)",
        help="Catatan internal yang akan ditampilkan di tab deskripsi produk"
    )

    spesifikasi_produk = fields.Html(
        string="Spesifikasi Produk",
        help="Spesifikasi detail produk dalam format HTML"
    )

    negara_pembuat = fields.Selection([
        ('id', 'Indonesia'),
        ('cn', 'China'),
        ('us', 'Amerika Serikat'),
        ('jp', 'Jepang'),
        ('vn', 'Vietnam'),
    ], string="Negara Pembuat", default='id')

    tanggal_rilis = fields.Date(string="Tanggal Rilis")

    is_edisi_kolektor = fields.Boolean(string="Edisi Kolektor")