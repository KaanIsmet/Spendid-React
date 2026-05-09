from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Spendid API is running"}