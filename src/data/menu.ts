export interface MenuItemData {
  name: string;
  price: string;
  description?: string;
  details?: string[];
}

export interface MenuSectionData {
  id: string;
  title: string;
  subtitle?: string;
  column: 'left' | 'right';
  titleClass?: string;
  items: MenuItemData[];
}

export const menuSections: MenuSectionData[] = [
  {
    id: 'sanduches',
    title: 'Sandwiches',
    column: 'left',
    items: [
      {
        name: 'Jamón artesano',
        price: '$18.500',
        description: 'Salsa verde, queso doble crema, jamón de cerdo, rúgula, tomates horneados, parmesano.'
      },
      {
        name: 'Del huerto',
        price: '$15.500',
        description: 'Mayonesa de rostizados, queso feta, rúgula, tomates horneados, champiñones, parmesano, mix de semillas, chips de arracacha.'
      },
      {
        name: 'Pollo Green',
        price: '$16.500',
        description: 'Mayonesa de rostizados y verde, jamón de pollo, guacamole, tomate horneado, semillas de girasol, lechuga, tocineta.'
      },
      {
        name: 'Pollo Toscano',
        price: '$18.500',
        description: 'Salsa verde, Jamón de Pollo, lechuga, rúgula, champiñones, tomates horneados, parmesano, queso doble crema, tocineta, miel de uvilla.'
      },
      {
        name: 'Mexicano',
        price: '$19.000',
        description: 'Frijol refrito, pollo desmechado, pico de gallo, queso crema tajado, guacamole, sour cream, salsa brava.'
      }
    ]
  },
  {
    id: 'calientes',
    title: 'Bebidas calientes',
    column: 'left',
    items: [
      { name: 'Capuccino', price: '$6.000' },
      { name: 'Latte', price: '$5.500' },
      { name: 'Americano', price: '$5.500' },
      { name: 'Cocoa', price: '$6.000' },
      { name: 'Matcha latte', price: '$10.000' },
      { name: 'Pitaya latte', price: '$8.500' },
      { name: 'Blue latte', price: '$8.500' },
      { name: 'Infusión de frutos rojos', price: '$6.000' },
      { name: 'Infusión mariposa', price: '$6.500' }
    ]
  },
  {
    id: 'acompanamientos',
    title: 'Acompañamientos',
    column: 'left',
    items: [
      {
        name: 'Torta del día',
        price: '$8.000',
        description: 'Zanahoria, arándanos o naranja. Harina de almendra y coco, endulzada con banano y cubierta con yogurt griego.'
      },
      {
        name: 'Galletas de avena',
        price: '$4.500'
      },
      {
        name: 'Tapitas',
        price: '$10.000',
        description: 'Pan acompañado de queso feta, tomate al horno y albahaca.'
      }
    ]
  },
  {
    id: 'bowls',
    title: 'Bowls',
    subtitle: '16 oz',
    column: 'right',
    titleClass: 'category-title',
    items: [
      {
        name: 'Açaí supremo',
        price: '$18.500',
        details: [
          'Base: Açaí, banano, mora, yogurt natural, leche o bebida vegetal.',
          'Toppings: Fresa, mango, banano, chía, arándanos, coco, crema de maní, yogurt griego con matcha.'
        ]
      },
      {
        name: 'Berry Love',
        price: '$14.500',
        details: [
          'Base: Açaí, fresa, banano, yogurt natural, leche o bebida vegetal.',
          'Toppings: Kiwi, fresa, coco, semillas, crema de maní.'
        ]
      },
      {
        name: 'Tropical',
        price: '$12.000',
        details: [
          'Base: Mango, piña, banano, yogurt natural, leche o bebida vegetal.',
          'Toppings: Kiwi, mango, granola, semillas de girasol, coco.'
        ]
      },
      {
        name: 'Vital',
        price: '$12.000',
        details: [
          'Base: Mango, banano, piña, espinaca, yogurt natural, leche o bebida vegetal.',
          'Toppings: Kiwi, arándano, chía latte, coco.'
        ]
      }
    ]
  },
  {
    id: 'refrescantes',
    title: 'Batidos refrescantes',
    column: 'right',
    titleClass: 'category-title',
    items: [
      {
        name: 'Amanecer',
        price: '$9.500',
        description: 'Mango, piña, menta, semillas de chía.'
      },
      {
        name: 'Sandía salvaje',
        price: '$9.500',
        description: 'Sandía, fresa, hierbabuena, limón, kiwi.'
      },
      {
        name: 'Piña rosa',
        price: '$10.500',
        description: 'Hierbabuena, pitaya rosada, piña, limón.'
      }
    ]
  },
  {
    id: 'funcionales',
    title: 'Batidos funcionales',
    column: 'right',
    titleClass: 'category-title',
    items: [
      {
        name: 'Golden milk',
        price: '$10.500',
        description: 'Mango, banano, yogurt natural, leche, miel, chía, cúrcuma, maca.'
      },
      {
        name: 'Digest',
        price: '$10.500',
        description: 'Sábila, piña, kiwi, chía, naranja, miel.'
      },
      {
        name: 'Antioxidante',
        price: '$10.500',
        description: 'Sandía, remolacha, jengibre, mora, limón, chía.'
      },
      {
        name: 'Saciante',
        price: '$10.500',
        description: 'Arándano, fresa, banano, leche, chía, avena.'
      },
      {
        name: 'Detox',
        price: '$10.500',
        description: 'Jengibre, apio, perejil, menta fresca, manzana verde, kiwi, pepino, naranja, miel.'
      }
    ]
  },
  {
    id: 'especiales',
    title: 'Batidos especiales',
    column: 'right',
    titleClass: 'category-title',
    items: [
      {
        name: 'Pink',
        price: '$12.000',
        description: 'Fresa, banano, yogurt natural, leche, chía, avena.'
      },
      {
        name: 'Mocha energy',
        price: '$12.000',
        description: 'Banano, café frío, leche, cacao puro, crema de maní, avena.'
      },
      {
        name: 'Choco avocado',
        price: '$12.000',
        description: 'Banano, aguacate, leche, miel, cacao puro, avena.'
      },
      {
        name: 'Berries',
        price: '$13.000',
        description: 'Arándano, yogurt natural, leche, avena, semillas de calabaza.'
      },
      {
        name: 'Matcha energy',
        price: '$12.000',
        description: 'Banano, yogurt natural, leche, miel, matcha, semillas de calabaza, avena.'
      },
      {
        name: 'Matcha protein',
        price: '$16.000',
        description: 'Té matcha, scoop de proteína whey pure (30 g).'
      }
    ]
  },
  {
    id: 'frias',
    title: 'Bebidas frías',
    column: 'right',
    titleClass: 'category-title',
    items: [
      {
        name: 'Ice matcha latte',
        price: '$12.500',
        description: 'Té matcha en leche o bebida vegetal con hielo.'
      },
      {
        name: 'Ice blue latte',
        price: '$12.000',
        description: 'Té azul en leche o bebida vegetal con hielo.'
      },
      {
        name: 'Ice coffee latte',
        price: '$11.500',
        description: 'Hielos de café, en leche o bebida vegetal.'
      },
      {
        name: 'Limonada azul',
        price: '$12.500',
        description: 'Mezcla de limón y té azul.'
      },
      {
        name: 'Blue coffee',
        price: '$10.500',
        description: 'Café y té azul.'
      },
      {
        name: 'Pink coffee',
        price: '$10.500',
        description: 'Café y pitaya rosa.'
      }
    ]
  }
];

