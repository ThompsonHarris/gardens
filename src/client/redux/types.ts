export interface Garden {
    id: number;
    name: string;
    description: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    memberlimit: number;
    members: Member[]
}

export interface Member {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
}