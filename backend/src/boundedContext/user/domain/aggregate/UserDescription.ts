import {UserRoles} from "../../../../application/configuration/middleware/UserRoles";

export type UserDescription = {
    id: string;
    firstname: string;
    lastname: string;
    role: UserRoles
};