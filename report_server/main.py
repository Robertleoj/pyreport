from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.responses import HTMLResponse

REPORT_DIR = './reports'


class ReportReq(BaseModel):
    report_id: str

app = FastAPI()

@app.post('/run_report', response_class=HTMLResponse)
async def run_report(param: ReportReq):
    with open(f'{REPORT_DIR}/{param.report_id}.html', 'r') as f:
        return HTMLResponse(f.read())
