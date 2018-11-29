export interface IParameters {
    path: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    body: {
        [key: string]: any;
    };
    query: {
        [key: string]: string;
    };
}
export interface IResult {
    success: boolean;
    content: string;
}
export default function (p: IParameters): Promise<IResult>;
