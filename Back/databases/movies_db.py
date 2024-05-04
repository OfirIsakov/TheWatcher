from abc import ABC, abstractmethod

from models.movie import Movie


class MoviesDB(ABC):

    @abstractmethod
    def get_movies(self) -> list[Movie]:
        raise NotImplementedError()
