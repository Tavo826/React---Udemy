export const invoice = {
    id: 'RT3080',
    name: 'Jensen Huang',
    client: {
        name: 'Nvidia Corporation',
        lastname: 'Nvidia',
        address: {
            country: 'United States',
            city: 'Santa Clara',
            street: '2788 San Tomas Expressway',
            number: 'CA 95051',
        }
    },
    company: {
        name: 'Nvidia Corporation',
        fiscalNumber: '123456789',
    },
    items: [
        {
            id: 1,
            product: 'RTX 3080',
            price: 699,
            quantity: 1
        },
        {
            id: 2,
            product: 'CPU Intel i7',
            price: 299,
            quantity: 1
        },
        {
            id: 3,
            product: 'Corsair keybord',
            price: 99.99,
            quantity: 2
        }
    ]
}