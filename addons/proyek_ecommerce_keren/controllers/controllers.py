# -*- coding: utf-8 -*-
# from odoo import http


# class ProyekEcommerceKeren(http.Controller):
#     @http.route('/proyek_ecommerce_keren/proyek_ecommerce_keren', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/proyek_ecommerce_keren/proyek_ecommerce_keren/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('proyek_ecommerce_keren.listing', {
#             'root': '/proyek_ecommerce_keren/proyek_ecommerce_keren',
#             'objects': http.request.env['proyek_ecommerce_keren.proyek_ecommerce_keren'].search([]),
#         })

#     @http.route('/proyek_ecommerce_keren/proyek_ecommerce_keren/objects/<model("proyek_ecommerce_keren.proyek_ecommerce_keren"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('proyek_ecommerce_keren.object', {
#             'object': obj
#         })

