import {Event} from "../Event";
import {EventBus} from "../EventBus";
import {EventHandler} from "../EventHandler";
import {Logger, LoggerStdout} from "../../Logger";
import {Timer} from "../../Timer";

export class LogEventBusMiddleware implements EventBus {
    constructor(private delegateEventBus: EventBus, private logger: LoggerStdout, private timer: Timer) {}

    subscribe(type: string, handler: EventHandler<any>): void {
        this.delegateEventBus.subscribe(type, handler);
    }

    dispatch(event: Event): void {
        this.logger.log({...event, meta: {date: new Date(this.timer.now())}});
        this.delegateEventBus.dispatch(event);
    }
}
