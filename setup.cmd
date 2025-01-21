:;#```
:;#```
:;python -m venv .venv
:;source .venv/bin/activate
:;pip install -r requirements.txt
:;echo Starting tests ...
:;pytest
:;
:;exit
@ECHO OFF
ECHO Creating virtualenv
python -m venv .venv
cmd /c .\.venv\Scripts\activate
pip install -r requirements.txt
ECHO Starting tests ...
pytest