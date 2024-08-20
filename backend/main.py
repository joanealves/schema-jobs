from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from scraper import scrape_jobs

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Permitir apenas o frontend local
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/jobs/")
def get_jobs(keyword: str = None, location: str = None):
    jobs = scrape_jobs(keyword, location)
    return jobs

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='0.0.0.0', port=8000)
