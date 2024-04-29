from fastapi import FastAPI
from starlette.responses import JSONResponse
from uvicorn import run as uvicorn_run

from databases.mock_movies_db import MockMoviesDB
from movie import Movie

app = FastAPI()


MOVIES_DB = MockMoviesDB()


@app.get("/movies")
async def root():
    return MOVIES_DB.get_movies()


if __name__ == "__main__":
    uvicorn_run(app="main:app",
                port=5000,
                reload=True,
                log_level="info")
