class App {

    public async run(p: IParameters): Promise<IResult> {
        try {
            return {
                success: true,
                content: JSON.stringify(p)
            };
        } catch (e) {
            return {
                success: false,
                content: e.stack ? `${e}\r\n${e.stack}` : e.toString()
            };
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
        cb(s.content);
    }).catch((e) => {
        cb(null, e.content);
    });
}
