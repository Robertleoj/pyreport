from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder

REPORT_DIR = './reports'

class ReportReq(BaseModel):
    report_id: str

app = FastAPI()

class ReportResponse(BaseModel):
    html: str

@app.post('/run_report', response_class=JSONResponse)
async def run_report(param: ReportReq):
    with open(f'{REPORT_DIR}/{param.report_id}.html', 'r') as f:
        html = f.read()
    res = ReportResponse(html=html)
    return JSONResponse(content=jsonable_encoder(res))
