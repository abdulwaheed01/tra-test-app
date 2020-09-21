import app from "./config/app";
import connect from "./connect";
import cors from 'cors';
import * as MovieController from "./controllers/movie_controller";

//options for cors midddleware
const options: cors.CorsOptions = {
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
app.use(cors(options));

//add your routes

//enable pre-flight


const PORT = 4000;
const db: string = "mongodb+srv://demo1:demo_tra@cluster0-7mvod.mongodb.net/sample_mflix?retryWrites=true&w=majority"


connect(db);


app.listen(process.env.PORT || PORT, () => {
   console.log('Express server listening on port ' + PORT);
})

app.get('/', function (req, res) {
   res.send('Hello World!');
});

app.get("/movies", MovieController.allMovies);

app.options('*', cors(options));
