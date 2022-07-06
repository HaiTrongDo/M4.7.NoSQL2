import {Schema, model} from "mongoose";

interface IBook {
    title: string;
    description: string;
    author: string;
    keywords: object[];
}


interface IAuthor {
    name: string
}


const keywordsSchema = new Schema({
    keyword: String
})

const authorSchema = new Schema<IAuthor>({
    name: String
})


const bookSchema = new Schema<IBook>({
    title: String,
    description: String,
    author: { type:Schema.Types.ObjectId, ref: "Author" },
    keywords: [keywordsSchema],
})

const Author = model<IAuthor>('Author', authorSchema);
const Book = model<IBook>('NewBook', bookSchema);
export { Book , Author};