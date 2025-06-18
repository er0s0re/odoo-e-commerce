from odoo import models, fields, api

# Kita mau 'numpang' di model produk yang udah ada
class ProductTemplate(models.Model):
    # _name = 'proyek_ecommerce_keren.proyek_ecommerce_keren' # INI DIHAPUS
    _inherit = 'product.template' # INI KUNCINYA! Kita extend model 'product.template'

    # Definisikan field baru kita
    catatan_internal = fields.Text(string="Catatan Internal Tim")