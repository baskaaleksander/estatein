interface AdditionalCosts {
    type: string;
    cost: number;

}

interface RealEstateListing {
    id: number;
    title: string;
    location: string;
    description: string;
    image: string;
    images: string[];
    price: number;
    bathrooms: number;
    bedrooms: number;
    type: string;
    keyfeatures: string[];
    costs: AdditionalCosts[];
}

export const listings: RealEstateListing[] = [
    {
        id: 1,
        title: 'Modern Apartment in City Center',
        location: 'New York',
        description: 'Modern apartment in the city center with a stunning view of the city. The apartment is fully furnished and has a large living room, kitchen, 2 bedrooms, and 2 bathrooms.',
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        images: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
        price: 2000000,
        bathrooms: 2,
        bedrooms: 2,
        type: 'Apartment',
        keyfeatures: ['Fully Furnished', 'City View', 'Modern Design'],
        costs: [
            {
                type: 'Maintenance',
                cost: 500
            },
            {
                type: 'Property Tax',
                cost: 1000
            }
        ]
    },
    {
        id: 2,
        title: 'Luxury Villa with Ocean View',
        location: 'Los Angeles',
        description: 'Luxury villa with a stunning view of the ocean. The villa is fully furnished and has a large living room, kitchen, 4 bedrooms, and 4 bathrooms.',
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        images: ['assets/images/villa1.jpg', 'assets/images/villa2.jpg', 'assets/images/villa3.jpg'],
        price: 5000000,
        bathrooms: 4,
        bedrooms: 4,
        type: 'Villa',
        keyfeatures: ['Fully Furnished', 'Ocean View', 'Luxury Design'],
        costs: [
            {
                type: 'Maintenance',
                cost: 1000
            },
            {
                type: 'Property Tax',
                cost: 2000
            }
        ]
    },
    {
        id: 3,
        title: 'Cozy House in the Suburbs',
        location: 'Chicago',
        description: 'Cozy house in the suburbs with a beautiful garden. The house is fully furnished and has a large living room, kitchen, 3 bedrooms, and 2 bathrooms.',
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        images: ['assets/images/house1.jpg', 'assets/images/house2.jpg', 'assets/images/house3.jpg'],
        price: 1000000,
        bathrooms: 2,
        bedrooms: 3,
        type: 'House',
        keyfeatures: ['Fully Furnished', 'Garden', 'Cozy Design'],
        costs: [
            {
                type: 'Maintenance',
                cost: 300
            },
            {
                type: 'Property Tax',
                cost: 500
            }
        ]
    }
];