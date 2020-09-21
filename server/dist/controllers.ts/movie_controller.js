"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allMovies = void 0;
var movie_1 = __importDefault(require("../models/movie"));
exports.allMovies = function (req, res) {
    var mvoies = movie_1.default.find(function (err, movies) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(movies);
        }
    });
};
