interface iContent{
    subtitle:string;
    description:Array<string>;
}
export interface IServices {
    id:number;
    title:string;
    image?:Array<string>;
    icon?:string;
    description?:string;
    content?:iContent[];
}
