interface RealEstateListing {
    id: string;
    title: string;
    address: string;
    city: string;
    state: string;
    price: number;
    saleType: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    image: string;
    thumbnail: string;
    favorite: boolean;
}

export const listings: RealEstateListing[] = [
    {
        id: '1',
        title: 'Luxury Villa',
        address: '1234 Main St',
        city: 'San Diego',
        state: 'CA',
        price: 1500000,
        saleType: 'For Sale',
        bedrooms: 5,
        bathrooms: 3,
        area: 3500,
        image: 'https://via.placeholder.com/350x250',
        thumbnail: 'https://via.placeholder.com/150x150',
        favorite: false
    }];