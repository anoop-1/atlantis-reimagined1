from pathlib import Path
from urllib.request import Request,urlopen
from urllib.error import HTTPError
from concurrent.futures import ThreadPoolExecutor
import json,re,time
root=Path(__file__).resolve().parents[2]
audit=json.loads((root/'backlink-sites/validation-results/growth-html-audit.json').read_text())
def check(path):
    try:
        with urlopen(Request('https://atlantisndt.com'+path,headers={'User-Agent':'AtlantisSatelliteLinkReview/1.0'}),timeout=18) as r:
            text=r.read(180000).decode('utf-8','replace'); title=re.search(r'<title[^>]*>(.*?)</title>',text,re.S)
            return dict(path=path,status=r.status,finalUrl=r.url,title=title.group(1) if title else '',soft404=bool(re.search(r'<(?:title|h1)[^>]*>[^<]*(?:not found|404)',text,re.I)))
    except HTTPError as e:return dict(path=path,status=e.code,error=str(e))
    except Exception as e:return dict(path=path,status=None,error=str(e))
dest=root/'backlink-sites/validation-results/primary-links.json'
import sys
retry='--retry-unavailable' in sys.argv
prior=json.loads(dest.read_text())['results'] if retry and dest.exists() else []
by_path={x['path']:x for x in prior}
targets=[x['path'] for x in prior if x['status'] in [None,429]] if retry else audit['primaryPaths']
for path in targets:
    result=check(path);by_path[path]=result
    dest.write_text(json.dumps(dict(checkedAt=time.strftime('%Y-%m-%d'),results=list(by_path.values())),indent=2)+'\n')
    if result['status']==429:
        print('Server rate limit encountered; stopping the audit without treating remaining URLs as broken.');break
    time.sleep(2)
results=list(by_path.values());problems=[x for x in results if x['status']!=200 or x.get('soft404')]
print(json.dumps(dict(checked=len(results),remainingProblems=problems),indent=2))
