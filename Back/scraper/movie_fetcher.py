from pathlib import Path

from pydantic import BaseModel
from scrapy import Request, Spider
from scrapy.crawler import CrawlerProcess


class Url(BaseModel):
    url: str

# class MovieFetcher(Spider):
#     name = 'movie_fetcher'
#     start_urls = ['https://www.zyte.com/blog/']
#
#     def parse(self, response):
#         for title in response.css('.oxy-post-title'):
#             yield {'title': title.css('::text').get()}
#
#         for next_page in response.css('a.next'):
#             yield response.follow(next_page, self.parse)
#

class QuotesSpider(Spider):
    name = "quotes"

    def start_requests(self):
        urls = [
            "http://92.247.236.71:9800/Movies%203D/Maya.the.Bee.Movie/"
        ]
        for url in urls:
            yield Request(url=url, callback=self.parse)

    def parse(self, response, **kwargs):
        page = response.url

        for quote in response.css("div.quote"):
            yield {
                "text": quote.css("span.text::text").get(),
                "author": quote.css("small.author::text").get(),
                "tags": quote.css("div.tags a.tag::text").getall(),
            }

        print(page)
        print(response.body)


if __name__ == "__main__":
    process = CrawlerProcess()

    process.crawl(QuotesSpider)
    process.start()
