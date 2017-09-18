export class User {
    constructor(
        public _id = null,
        public username: string = '',
        public items = [],
        public createdAt = new Date(),
        public updatedAt = new Date(),
    ) {}
}