import re
import json
import requests
from bs4 import BeautifulSoup


URL = "https://icml.cc/Conferences/2020/AcceptedPapersInitial"
CONF = "ICML"

def extract_papers():
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, "html.parser")
    papers = []
    print("Starting to crawl and extract...")
    for section in soup.findAll("div", {"class": "col-xs-9"}):
        for p in section.findAll("p")[2:]:
            title = p.findAll("b")[0].contents[0]
            authors = p.findAll("i")[0].contents[0].replace(" · ", ", ")
            authors = re.sub(r"\([^)]*\)", "", authors).replace(")", "").replace("(", "")
            authors = authors.replace(" , ", ", ")
            papers.append({"title": title, "authors": authors})
    with open("conferences/"+CONF+"/data/extracted_papers.json", "w") as f:
        json.dump(papers, f)
    print("Extracted total: {} papers for {} 2020".format(len(papers), CONF))

if __name__ == "__main__":
    extract_papers()
