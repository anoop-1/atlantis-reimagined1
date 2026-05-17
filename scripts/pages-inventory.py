import json
d=json.load(open(r'E:\software\Atlantis\atlantis-reimagined1\scripts\gsc-audit-2026-04.json', encoding='utf-8'))
for site in ('https://atlantisndt.com', 'https://ndt-connect.com'):
    ant = d['sites'][site]['90d']
    print(f'\n=== TOP 60 PAGES — {site} 90d ===')
    fmt = '{:<72} {:>5} {:>6} {:>6} {:>5}'
    print(fmt.format('page','clk','impr','ctr%','pos'))
    for p in sorted(ant['pages'], key=lambda x:-x['impressions'])[:60]:
        print(fmt.format(p['page'][:72], p['clicks'], p['impressions'], f"{p['ctr']*100:.1f}%", f"{p['position']:.1f}"))
