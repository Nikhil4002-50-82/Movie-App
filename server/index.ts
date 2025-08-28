import express from "express";
import { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import axios, { AxiosResponse } from "axios";
import "dotenv/config";
import cors from "cors";

const app: Application = express();
const port: number = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const API_KEY = process.env.TNDB_API_KEY;

app.get("/fetchMovies", async (req: Request, res: Response): Promise<void> => {
  try {
    const response: AxiosResponse = await axios.get(
      `https://api.themoviedb.org/3/discover/movie`,
      {
        params: {
          include_adult: false,
          include_video: false,
          language: "en-US",
          page: 1,
          sort_by: "popularity.desc",
          api_key: API_KEY,
        },
      }
    );
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
