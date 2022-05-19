import {CollaboratorDescription} from "./model/collaborator/CollaboratorDescription";
import {DomainDescription} from "./model/DomainDescription";

export class DomainDescriptionBuilder {
    private name!: string;
    private description!: string;
    private collaborators: CollaboratorDescription[] = [];

    withName(name: string): DomainDescriptionBuilder {
        this.name = name;
        return this;
    }

    withDescription(description: string): DomainDescriptionBuilder {
        this.description = description;
        return this;
    }

    addCollaborator(collaborator: CollaboratorDescription): DomainDescriptionBuilder {
        this.collaborators.push(collaborator);
        return this;
    }

    withCollaborators(collaborators: CollaboratorDescription[]): DomainDescriptionBuilder {
        this.collaborators = this.collaborators.concat(collaborators);
        return this;
    }

    build(): DomainDescription {
        return new DomainDescription(
            this.name,
            this.description,
            this.collaborators,
        );
    }
}
