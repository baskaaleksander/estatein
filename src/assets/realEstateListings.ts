interface RealEstateListing {
    title: string;
    description: string;
    image: string;
    price: number;
    bathrooms: number;
    bedrooms: number;
    type: string;
    link: string;
}

export const listings: RealEstateListing[] = [
    {
        title: 'Przykładowa nieruchomość 1',
        description: 'Opis przykładowej nieruchomości 1',
        image: 'url_do_obrazka1.jpg',
        price: 500000,
        bathrooms: 2,
        bedrooms: 3,
        type: 'dom',
        link: 'www.przykladowy_link1.com'
    },
    {
        title: 'Przykładowa nieruchomość 2',
        description: 'Opis przykładowej nieruchomości 2',
        image: 'url_do_obrazka2.jpg',
        price: 750000,
        bathrooms: 3,
        bedrooms: 4,
        type: 'mieszkanie',
        link: 'www.przykladowy_link2.com'
    },
    {
        title: 'Przykładowa nieruchomość 3',
        description: 'Opis przykładowej nieruchomości 3',
        image: 'url_do_obrazka3.jpg',
        price: 1000000,
        bathrooms: 4,
        bedrooms: 5,
        type: 'willa',
        link: 'www.przykladowy_link3.com'
    }
];