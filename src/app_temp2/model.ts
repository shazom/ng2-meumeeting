export interface Worker {
    name: string;
    id: number;
    address: Address,
    team: string
    creditCard?: number
}

export interface Address {
    city: string,
    street?: string
}