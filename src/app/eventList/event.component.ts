import { Component } from "@angular/core";
import { EventService } from "../shared/events.service"

@Component({
    selector:'event-container',
    templateUrl:"./event.component.html"
})

export class eventContainer {
    event
    constructor(private eventService: EventService){
        this.event = eventService.getEvents()
    }
}