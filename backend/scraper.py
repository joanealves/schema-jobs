import requests
from bs4 import BeautifulSoup
import pandas as pd

def scrape_linkedin(keyword='', location=''):
    url = f"https://www.linkedin.com/jobs/search?keywords={keyword}&location={location}"
    headers = {"User-Agent": "Mozilla/5.0"}
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, 'html.parser')

    jobs = []
    for job_card in soup.find_all('div', class_='result-card'):
        title = job_card.find('h3', class_='result-card__title').text.strip()
        company = job_card.find('h4', class_='result-card__subtitle').text.strip()
        location = job_card.find('span', class_='job-result-card__location').text.strip()
        link = job_card.find('a', class_='result-card__full-card-link')['href']

        jobs.append({
            'title': title,
            'company': company,
            'location': location,
            'link': link
        })

    return jobs

def scrape_indeed(keyword='', location=''):
    url = f"https://www.indeed.com/jobs?q={keyword}&l={location}"
    headers = {"User-Agent": "Mozilla/5.0"}
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, 'html.parser')

    jobs = []
    for job_card in soup.find_all('div', class_='jobsearch-SerpJobCard'):
        title = job_card.find('a', class_='jobtitle').text.strip()
        company = job_card.find('span', class_='company').text.strip()
        location = job_card.find('div', class_='recJobLoc')['data-rc-loc']
        link = f"https://www.indeed.com{job_card.find('a')['href']}"

        jobs.append({
            'title': title,
            'company': company,
            'location': location,
            'link': link
        })

    return jobs

def scrape_vagas_com(keyword='', location=''):
    url = f"https://www.vagas.com.br/vagas-de-{keyword}-em-{location}"
    headers = {"User-Agent": "Mozilla/5.0"}
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, 'html.parser')

    jobs = []
    for job_card in soup.find_all('li', class_='vaga'):
        title = job_card.find('a', class_='link-detalhes-vaga').text.strip()
        company = job_card.find('span', class_='emprVaga').text.strip()
        location = job_card.find('span', class_='vaga-local').text.strip()
        link = f"https://www.vagas.com.br{job_card.find('a')['href']}"

        jobs.append({
            'title': title,
            'company': company,
            'location': location,
            'link': link
        })

    return jobs

def scrape_jobs(keyword='', location=''):
    jobs = []
    jobs += scrape_linkedin(keyword, location)
    jobs += scrape_indeed(keyword, location)
    jobs += scrape_vagas_com(keyword, location)
    return jobs

if __name__ == '__main__':
    keyword = input('Enter job title or keyword: ')
    location = input('Enter location: ')
    jobs = scrape_jobs(keyword, location)

    df = pd.DataFrame(jobs)
    df.to_csv('jobs.csv', index=False)
    print(df)
