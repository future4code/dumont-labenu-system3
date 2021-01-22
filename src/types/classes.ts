export type classes = {
    id: string,
    name: string,
    start_date: Date,
    finish_date: Date,
    module: MODULE,
    class_type: CLASS_TYPE
}


export enum MODULE {
    FIRST = "first",
    SECOND ="second",
    THIRD ="third",
    FOURTH ="fourth",
    FIFTH ="fifth",
    SIXTH ="sixth",
    SEVENTH ="seventh",
    UNDEFINED = "undefined"
}


export enum CLASS_TYPE {
    INTEGRAL="integral",
    NOCTURNAL="nocturnal"
}