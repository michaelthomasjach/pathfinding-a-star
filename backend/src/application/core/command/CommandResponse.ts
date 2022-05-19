import {Event} from "../event/Event";
import {Result} from "../Result";

export type CommandResponse = Result<{event?: Event; id?: string}>;
