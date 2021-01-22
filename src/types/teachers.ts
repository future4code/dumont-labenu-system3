export type teacher = {
    id: string,
    name: string,
    email: string,
    birthday_date: Date,
    specialties: specialties
}


export enum specialties {
    REACT = "react",
    REDUX = "redux",
    CSS = "css",
    TESTES = "testes",
    TYPESCRIPT = "typescript",
    POO = "poo",
    BACKEND = "backend"
}