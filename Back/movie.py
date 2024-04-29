from pydantic import BaseModel


class Movie(BaseModel):
    id: str
    name: str
    ip: str
    country_code: str
    url: str
    ping: str
