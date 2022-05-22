export class User {
    constructor(
        readonly id: string,
        readonly firstname: string,
        readonly lastname: string,
        readonly email: string,
        readonly password: string,
        readonly role: string,
    ) {}
}
