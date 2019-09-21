export class Book {
    public id: number;
    public category: string;
    public issueDate: Date;
    public title: string;
    public authorId: number;

    constructor(id: number, category: string, issueDate: Date, title: string, authorId: number) {
        this.id = id;
        this.category = category;
        this.issueDate = issueDate;
        this.title = title;
        this.authorId = authorId;
    }
}