import express, {Response, Request} from "express";
import {parse, stringify, toJSON, fromJSON} from 'flatted';

import {getBook, getBooks, getChapter, getVerse} from "./api";

const app = express();

app.get('/', (request: Request, response:Response) => {
    response.json({hello:"Hello World"});
})

app.get('/books', async (request: Request, response:Response) => {
       const data: string = await getBooks();
        response.json(data);
})

app.get('/books/:abbr', async (request: Request, response:Response) => {
    const {abbr} = request.params
    const data: string = await getBook(abbr);
    response.json(data);

})

app.get('/chapter/:version/:abbrev/:chapter', async (request: Request, response:Response) => {
    const {version, abbrev, chapter} = request.params;
    const data: string = await getChapter(version, abbrev, chapter);
    response.json(data);
})

app.get('/verses/:version/:abbrev/:chapter/:verse', async (request: Request, response:Response) => {
    const {version, abbrev, chapter, verse} = request.params;
    const data: string = await getVerse(version, abbrev, chapter, verse);
    response.json(data);
})

app.listen(3000, () => {
    console.log("Vem quente que eu estou fervendo 🔥")
})

