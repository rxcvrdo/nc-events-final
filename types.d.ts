interface AllEvent{
    userId:string
    id:string;
    title: string;
    eventHost: string;
    category: string;
    rating: number;
    totalSpaces: number;
    availableSpaces: number ;
    description: string;
    coverUrl: string;
    summary: string;
    createdAt: Date | null;
    eventDateTime: Date

}

interface AuthCredentails {
    fullName:string
    email: string
    username: string 
    password: string
}

interface EventParams{
    title: string;
    eventHost: string;
    category: string;
    rating: number;
    coverUrl:string
    totalSpaces: number;
    availableSpaces: number ;
    description: string;
    eventDateTime:Date

}

interface BookEventParams {
    eventId:string 
    userId: string
}