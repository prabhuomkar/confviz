import json
import requests
from bs4 import BeautifulSoup


URL = "http://cvpr2020.thecvf.com/program/main-conference"

def extract_papers():
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, 'html.parser')
    papers = []
    print('Starting to crawl and extract...')
    for table in soup.findAll("table", {"class": "table"}):
        for row in table.tbody.findAll('tr')[1:]:
            title = row.findAll('td')[3].contents[0]
            authors = row.findAll('td')[4].contents[0]
            papers.append({'title': title, 'authors': authors})
    with open('conferences/CVPR/data/extracted_papers.json', 'w') as f:
        json.dump(papers, f)
    print('Extracted total: {} papers for CVPR 2020'.format(len(papers)))

if __name__ == "__main__":
    extract_papers()