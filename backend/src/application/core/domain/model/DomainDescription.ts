import {CollaboratorDescription} from "./collaborator/CollaboratorDescription";

export class DomainDescription {
    constructor(
        readonly name: string,
        readonly description: string,
        readonly collaborators: CollaboratorDescription[],
    ) {}
}
