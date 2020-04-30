import express from "express";
import { request } from "http";
import { Database } from '../common/MongoDB';
import { Config } from '../config';

export class RestaurantController {
    static db: Database = new Database(Config.url, "projects");

    public getRestaurant(req: express.Request, res: express.Response): void {
        console.log(req.params.id);
        res.send(req.body);
        console.log("output");

    }
    public postRestaurant(req: express.Request, res: express.Response): void {
        console.log("name");
        res.send(req.body.name);
    }

    public deleteRestaurant(req: express.Request, res: express.Response): void{
        console.log("delete event: "+ req.params.id);
    }

    public getAllRestaurants(req: express.Request, res: express.Response): void {
        console.log("getting all resetaurant")
    }

}