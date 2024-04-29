from databases.movies_db import MoviesDB
from movie import Movie

MOCK_DATA: list[Movie] = [Movie(
    id='1000',
    name='Example',
    ip='1.1.1.1',
    country_code='il',
    url='http://1.1.1.1/movie/Example.mkv',
    ping='6'
)]


class MockMoviesDB(MoviesDB):

    def get_movies(self) -> list[Movie]:
        return MOCK_DATA
