import { Request, Response } from "express";
import Movie from "../models/movie";

export const allMovies = (req: Request, res: Response) => {


  var filter =  {
    // "poster": { $exists: true, $ne: null },
  };

  for ( let k in req.query ) {
        if( k == 'year'){
          filter[k] = parseInt(req.query[k] as string)
        }
        else if(k == 'genres')
        {
          filter[k] = [req.query[k]]
        }
        else
        {
          filter[k] = req.query[k]
        }
  }

  const movies = Movie.find(filter).limit(10).exec((err: any, movies: any) => {
    if (err) {
      res.send(err);
    } else {
      res.json(movies);
    }
  });
};