const data = {
    fruits: [
        {
            id: 1,
            name: 'Banana',
            price: 8,
            sale: null,
            images: [
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/chiquita-bananas.jpg?v=1565594302',
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/54d367b3-614b-4208-bfdb-b9a4e52cdeb9.jpg?v=1565594302'
            ],
            favourite: false,
            quantity: 1,
        },
        {
            id: 2,
            name: 'Avocado',
            price: 10,
            sale: 6,
            images: [
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pinkerton-avocado.jpg?v=1565594363',
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pinkerton-avocado-1.jpg?v=1565594363'
            ],
            favourite: false,
            quantity: 1,
        }
    ],
    vegetables: [
        {
            id: 3,
            name: 'Baqlajon',
            price: 12,
            sale: 10,
            images: [
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-round-black-eggplants-1.jpg?v=1565594063',
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-round-black-eggplants.jpg?v=1565594063'
            ],
            favourite: false,
            quantity: 1,
        },
        {
            id: 4,
            name: 'Redis',
            price: 12,
            sale: 10,
            images: [
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/violet-cauliflower.jpg?v=1565592922',
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/violet-cauliflower-3.jpg?v=1565592922'
            ],
            favourite: false,
        }
    ],
    milks: [
        {
            id: 5,
            name: 'Basil Pesto',
            price: 20,
            sale: null,
            images: [
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/be21e9bd-67b7-4e84-af0c-d43d4898d72a.jpg?v=1565594123',
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/2e0e87f2-4fdf-4ca7-912c-47e11eadd420.jpg?v=1565594123'
            ],
            favourite: false,
            quantity: 1,
        },
        {
            id: 6,
            name: 'London Sorbet',
            price: 28,
            sale: 24,
            images: [
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/4b91a65d-ab47-4b8a-8c87-0dacd3eb7b19.jpg?v=1565592383',
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/952c5f3d-e89a-4146-8dae-5b904af6ad49.jpg?v=1565592383'
            ],
            favourite: false,
            quantity: 1,
        }
    ],

    products: [
        {
            id: 5,
            name: 'Basil Pesto',
            price: 20,
            sale: null,
            images: [
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/be21e9bd-67b7-4e84-af0c-d43d4898d72a.jpg?v=1565594123',
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/2e0e87f2-4fdf-4ca7-912c-47e11eadd420.jpg?v=1565594123'
            ],
            favourite: false,
            quantity: 1,
        },
        {
            id: 1,
            name: 'Banana',
            price: 8,
            sale: null,
            images: [
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/chiquita-bananas.jpg?v=1565594302',
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/54d367b3-614b-4208-bfdb-b9a4e52cdeb9.jpg?v=1565594302'
            ],
            favourite: false,
            quantity: 1,
        },
        {
            id: 4,
            name: 'Redis',
            price: 12,
            sale: 10,
            images: [
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/violet-cauliflower.jpg?v=1565592922',
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/violet-cauliflower-3.jpg?v=1565592922'
            ],
            favourite: false,
            quantity: 1,
        },
        {
            id: 2,
            name: 'Avocado',
            price: 10,
            sale: 6,
            images: [
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pinkerton-avocado.jpg?v=1565594363',
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pinkerton-avocado-1.jpg?v=1565594363'
            ],
            favourite: false,
            quantity: 1,
        }
    ],

    all: [
        {
            id: 1,
            name: 'Banana',
            price: 8,
            sale: null,
            images: [
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/chiquita-bananas.jpg?v=1565594302',
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/54d367b3-614b-4208-bfdb-b9a4e52cdeb9.jpg?v=1565594302'
            ],
            favourite: false,
            quantity: 1,
        },
        {
            id: 2,
            name: 'Avocado',
            price: 10,
            sale: 6,
            images: [
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pinkerton-avocado.jpg?v=1565594363',
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pinkerton-avocado-1.jpg?v=1565594363'
            ],
            favourite: false,
            quantity: 1,
        },
        {
            id: 3,
            name: 'Baqlajon',
            price: 12,
            sale: 10,
            images: [
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-round-black-eggplants-1.jpg?v=1565594063',
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-round-black-eggplants.jpg?v=1565594063'
            ],
            favourite: false,
            quantity: 1,
        },
        {
            id: 4,
            name: 'Redis',
            price: 12,
            sale: 10,
            images: [
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/violet-cauliflower.jpg?v=1565592922',
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/violet-cauliflower-3.jpg?v=1565592922'
            ],
            favourite: false,
            quantity: 1,
        },
        {
            id: 5,
            name: 'Basil Pesto',
            price: 20,
            sale: null,
            images: [
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/be21e9bd-67b7-4e84-af0c-d43d4898d72a.jpg?v=1565594123',
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/2e0e87f2-4fdf-4ca7-912c-47e11eadd420.jpg?v=1565594123'
            ],
            favourite: false,
            quantity: 1,
        },
        {
            id: 6,
            name: 'London Sorbet',
            price: 28,
            sale: 24,
            images: [
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/4b91a65d-ab47-4b8a-8c87-0dacd3eb7b19.jpg?v=1565592383',
                'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/952c5f3d-e89a-4146-8dae-5b904af6ad49.jpg?v=1565592383'
            ],
            favourite: false,
            quantity: 1,
        }
    ]
}

export default data;