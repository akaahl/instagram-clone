export interface Suggestions {
    id: number;
    name: string;
    username: string;
    avatar: string;
    email: string;
    dob: Date;
    phone: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    website: string;
    company: {
        ...
    };
}

export interface StoryProps {
    img: string;
    username: string;
}