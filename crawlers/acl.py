import json
import requests
from bs4 import BeautifulSoup


URL = "https://acl2020.org/program/accepted/"
CONF = "ACL"

def extract_papers():
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, "html.parser")
    papers = []
    print("Starting to crawl and extract...")
    for section in soup.findAll("section", {"class": "page__content"}):
        for p in section.findAll("p")[2:]:
            title = p.findAll("b")[0].contents[0]
            authors = str(p.contents[2]).strip().replace(" and", ",")
            papers.append({"title": title, "authors": authors})
    with open("conferences/"+CONF+"/data/extracted_papers.json", "w") as f:
        json.dump(papers, f)
    print("Extracted total: {} papers for {} 2020".format(len(papers), CONF))

if __name__ == "__main__":
    extract_papers()