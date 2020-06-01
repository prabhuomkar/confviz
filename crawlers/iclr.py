import json
import requests


URL = "https://iclr.cc/virtual_2020/papers.json"

def extract_papers():
    print('Starting to crawl and extract...')
    page = requests.get(URL)
    res = page.json()
    papers = []
    for paper in res:
        title = paper['content']['title']
        authors = ", ".join(paper['content']['authors'])
        papers.append({'title': title, 'authors': authors})
    with open('conferences/ICLR/data/extracted_papers.json', 'w') as f:
        json.dump(papers, f)
    print('Extracted total: {} papers for ICLR 2020'.format(len(papers)))

if __name__ == "__main__":
    extract_papers()