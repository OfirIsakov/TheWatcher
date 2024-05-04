from databases.movies_db import MoviesDB
from movie import Movie

MOCK_DATA: list[Movie] = [Movie(
    id='1',
    name='Example',
    ip='1.1.1.1',
    country_code='il',
    url='http://1.1.1.1/movie/Example.mkv',
    ping='6'
),
    Movie(
        id='2',
        name='Example2',
        ip='2.2.2.2',
        country_code='in',
        url='http://2.2.2.2/movie/Example2.mkv',
        ping='66'
    ),
    Movie(
        id='3',
        name='Example3',
        ip='3.3.3.3',
        country_code='co',
        url='http://3.3.3.3/movie/Example3.mkv',
        ping='666'
    ),
    Movie(
        id='4',
        name='Example4',
        ip='4.4.4.4/',
        country_code='hu',
        url='http://4.4.4.4/movie/Example4.mkv',
        ping='6666'
    )
]


class MockMoviesDB(MoviesDB):

    def get_movies(self) -> list[Movie]:
        return MOCK_DATA
