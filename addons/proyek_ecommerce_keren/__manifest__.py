# -*- coding: utf-8 -*-
{
    'name': "proyek_ecommerce_keren",

    'summary': "Modul ini berisi kustomisasi untuk proyek e-commerce simpel.",

    'description': """
        Modul untuk belajar kustomisasi Odoo E-commerce.
    """,

    'author': "Eros Alfedo Hermanto",
    'website': "https://er0s0re.github.io/Portofolio1/",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base','website_sale'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'views/product_views.xml',
        'views/templates.xml'
    ],

    'assets': {
        'web.assets_frontend': [
            'proyek_ecommerce_keren/static/src/css/style.css',
        ]
    },
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
}

