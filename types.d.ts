interface AllEvent{
    id:number;
    title: string;
    event_host: string;
    category: string;
    rating: number;
    total_spaces: number;
    available_spaces: number ;
    description: string;
    cover: string;
    summary: string;

}

interface AuthCredentails {
    fullName:string
    email: string
    username: string 
    password: string
}