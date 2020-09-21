"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allMovies = void 0;
var movie_1 = __importDefault(require("../models/movie"));
exports.allMovies = function (req, res) {
    var filter = {
    // "poster": { $exists: true, $ne: null },
    };
    for (var k in req.query) {
        if (k == 'year') {
            filter[k] = parseInt(req.query[k]);
        }
        else if (k == 'genres') {
            filter[k] = [req.query[k]];
        }
        else {
            filter[k] = req.query[k];
        }
    }
    var movies = movie_1.default.find(filter).limit(10).exec(function (err, movies) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(movies);
        }
    });
};
