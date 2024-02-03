export interface Player {
    id: number;
    firstname: string;
    lastname: string;
    position: "prop" | "hooker" | "lock" | "flanker" | "no 8" | "scrum half" | "fly half" | "center" | "wing" | "fullback";
    img: string;
}