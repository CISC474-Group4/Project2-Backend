import express from "express";
import {EventsController} from "./EventsController";

export class EventsRouter {

    private router: express.Router = express.Router();
    private eventscontroller: EventsController = new EventsController();

    // Creates the routes for this router and returns a populated router object
    public getRouter(): express.Router {
        this.router.get("/events/:id", this.eventscontroller.getEvents); //Get Events by ID
        this.router.post("/events", this.eventscontroller.postEvents); // create new events
        this.router.delete("/events/:id", this.eventscontroller.deleteEvent);//Deletes event with matching ID
        this.router.get("/events", this.eventscontroller.getAllEvents);// GETS a list of Events
        
        return this.router;
    }
}
