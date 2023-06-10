const express = require("express");
const PostModel = require("../models/PostModel");
const postRouter = express.Router();

postRouter.post("/maketrip", async (req, res) => {
    const payload = req.body;
    try {
        const trip = new PostModel(payload);
        await trip.save();
        res.json("New Trip Posted");
    } catch (error) {
        res.json("something went wrong while posting trip " + error);
    }
});

postRouter.get("/gettrip", async (req, res) => {
    try {
        const trips = await PostModel.find();
        res.json(trips);
    } catch (error) {
        res.json("something went wrong while getting trips " + error);
    }
});

postRouter.get("/gettrip/:destination", async (req, res) => {
    const destination = req.params.destination;
    try {
        const trips = await PostModel.find({ destination });
        res.json(trips);
    } catch (error) {
        res.json(`something went wrong while filtering trips by ${destination} ` + error);
    }
});

postRouter.get("/gettrip/:destination", async (req, res) => {
    const destination = req.params.destination;
    try {
        const trips = await PostModel.find({ destination });
        res.json(trips);
    } catch (error) {
        res.json("something went wrong while getting trips " + error);
    }
});

postRouter.get("/gettrip/sort/:value", async (req, res) => {
    const value = req.params.value;
    try {
        const trips = await PostModel.find({}).sort({ budget_per_person: value });
        res.json(trips);
    } catch (error) {
        res.json("something went wrong while sorting trips " + error);
    }
});

postRouter.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await PostModel.findByIdAndDelete({ _id: id });
        res.json("Trip deleted successfully");
    } catch (error) {
        res.json("something went wrong while deleting trip " + error);

    }
});





module.exports = postRouter;