interface LocationProps {
    type: string;
    name: string;
    description: string;
    badges: string[];
}

export const locations : LocationProps[] = [
    {
        type: "International",
        name: "123 Estatein Plaza, City Center, Metropolis",
        description: "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
        badges: ["info@estatein.com", "+1 (123) 456-7890", "Metropolis"]
    },
    {
        type: "Regional",
        name: "456 Estatein Avenue, Suburbia, Metropolis",
        description: "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
        badges: ["info@restatein.com", "+1 (123) 628-7890", "Metropolis"]
    }

]