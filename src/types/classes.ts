export type classes = {
    id: string,
    name: string,
    start_date: Date,
    finish_date: Date,
    module: module,
    class_type: class_type
}


export enum module {
    FIRST ="1",
    SECOND ="2",
    THIRD ="3",
    BEDROOM ="4",
    FIFTH ="5",
    SIXTH ="6",
    SEVENTH ="7",
    UNDEFINED = "undefined"
}


export enum class_type {
    INTEGRAL="integral",
    NOCTURNAL="nocturnal"
}