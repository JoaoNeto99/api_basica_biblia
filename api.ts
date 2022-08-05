import axios, {AxiosError} from "axios";

const BASE_URL = "https://www.abibliadigital.com.br/api"

//http://localhost:3000/books
export async function getBooks(): Promise<string> {
    try {
        const data = await axios.get(`${BASE_URL}/books`);
        return data.data
    } catch (eer: AxiosError | any) {
        console.log(eer)
        return `${eer.code} - getBooks`
    }
}

//http://localhost:3000/books/gn
export async function getBook(name: string): Promise<string> {
    try {
      //  console.log(`${BASE_URL}/books/${name}`)
        const data = await axios.get(`${BASE_URL}/books/${name}`);
        return data.data
    } catch (eer: AxiosError | any) {
        console.log(eer)
        return `${eer.code} - getBook`
    }
}

//http://localhost:3000/chapter/nvi/gn/1
export async function getChapter(version: string, abbrev: string, chapter: string): Promise<string> {
    try {
       // console.log(`${BASE_URL}/verses/${version}/${abbrev}/${chapter}`)
        const data = await axios.get(`${BASE_URL}/verses/${version}/${abbrev}/${chapter}`);
        return data.data
    } catch (eer: AxiosError | any) {
        console.log(eer)
        return `${eer.code} - getVerse`
    }
}

//http://localhost:3000/verses/nvi/gn/1/1
export async function getVerse(version: string, abbrev: string, chapter: string, verse: string): Promise<string> {
    try {
       // console.log(`${BASE_URL}/verses/${version}/${abbrev}/${chapter}/${verse}`)
        const data = await axios.get(`${BASE_URL}/verses/${version}/${abbrev}/${chapter}/${verse}`);
        return data.data
    } catch (eer: AxiosError | any) {
        console.log(eer)
        return `${eer.code} - getVerse`
    }
}
