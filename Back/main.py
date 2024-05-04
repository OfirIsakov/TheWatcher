import time

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from uvicorn import run as uvicorn_run

from databases.mock_movies_db import MockMoviesDB

app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MOVIES_DB = MockMoviesDB()


@app.get("/movies")
async def root():
    # API thinks and returns
    time.sleep(0.4)
    return MOVIES_DB.get_movies()


if __name__ == "__main__":
    uvicorn_run(app="main:app",
                port=5000,
                reload=True,
                log_level="info")
