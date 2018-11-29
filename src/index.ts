class App {

    public async run(p: IParameters): Promise<string> {
        try {
            return JSON.stringify(p);
        } catch (e) {
            return e.stack ? `${e}\r\n${e.stack}` : e.toString();
        }
    }

}

const app = new App();

export interface IParameters {
    path: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    body: { [key: string]: any };
    query: { [key: string]: string};
}

export interface IResult {
    success: boolean;
    content: string;
}

export default function(cb, p: IParameters): void {
    app.run(p).then((s) => {
        cb(null, s);
    }).catch((e) => {
        cb(e);
    });
}
