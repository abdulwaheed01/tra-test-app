"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./config/app"));
var connect_1 = __importDefault(require("./connect"));
var cors_1 = __importDefault(require("cors"));
var MovieController = __importStar(require("./controllers/movie_controller"));
//options for cors midddleware
var options = {
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
    ],
    credentials: false,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: '*',
    preflightContinue: false,
};
//use cors middleware
app_1.default.use(cors_1.default(options));
//add your routes
//enable pre-flight
var PORT = 4000;
var db = "mongodb+srv://demo1:demo_tra@cluster0-7mvod.mongodb.net/sample_mflix?retryWrites=true&w=majority";
connect_1.default(db);
app_1.default.listen(PORT, function () {
    console.log('Express server listening on port ' + PORT);
});
app_1.default.get('/', function (req, res) {
    res.send('Hello World!');
});
app_1.default.get("/movies", MovieController.allMovies);
app_1.default.options('*', cors_1.default(options));
