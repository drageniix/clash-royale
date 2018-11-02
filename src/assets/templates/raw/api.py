import requests
import json
import sys
import os
from datetime import datetime

r = requests.get('https://api.clashroyale.com/v1/clans/%23PGVRPVG', headers={'Accept':'application/json', 'authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjE1Mzk5NWFlLTVjMWMtNDZhNy1hMDU4LWRjN2E5MTJhZjliYyIsImlhdCI6MTUzNTY5MDI4Nywic3ViIjoiZGV2ZWxvcGVyLzlhNmRlNTNhLWNkYmMtZWM5Ny1iODExLTRjZjMwY2FlOWEwMCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMDQuMTk4LjE0LjUyIiwiMTM2LjYxLjEzMS45NSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.rnoYSTVEnrEu2rzdBosAV66WFyW97VKUHdX8Th_E3XFlQoswNoP4fKaJxPL_r99MNgb55GuUoZbuGgBeAFEm2w'})
clan = r.json()

r = requests.get('https://api.clashroyale.com/v1/clans/%23PGVRPVG/warlog', headers={'Accept':'application/json', 'authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjE1Mzk5NWFlLTVjMWMtNDZhNy1hMDU4LWRjN2E5MTJhZjliYyIsImlhdCI6MTUzNTY5MDI4Nywic3ViIjoiZGV2ZWxvcGVyLzlhNmRlNTNhLWNkYmMtZWM5Ny1iODExLTRjZjMwY2FlOWEwMCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMDQuMTk4LjE0LjUyIiwiMTM2LjYxLjEzMS45NSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.rnoYSTVEnrEu2rzdBosAV66WFyW97VKUHdX8Th_E3XFlQoswNoP4fKaJxPL_r99MNgb55GuUoZbuGgBeAFEm2w'})
wars = r.json()

now = datetime.now()
time = now.isoformat()[:10]

administration = {
    'minTrophies': clan['requiredTrophies'],
    'minDonations': 100,
    'minDonationDay' : 3,
    'elderDonations': 400,
    'minWarBattles': 2,
    'elderWarBattles': 6,
    'maxMissedWarBattles': 1,
    'elderMissedWarBattles': 0,
}

clanData = {
    'time' : int((datetime.utcnow() - datetime(1970, 1, 1)).total_seconds()),
    'admin' : administration,
    'clan' : clan,
    'members' : clan.pop('memberList'),
    'discord' : 'https://discord.gg/XvFGctt'
}

#Compare last week's data for new members
dated_files = [(os.path.getmtime('./' + fn), os.path.basename(fn)) for fn in os.listdir('./') if fn.lower().endswith('.json') and time not in fn and not fn.lower().endswith('clan.json')]
if(len(dated_files) > 0):
    dated_files.sort()
    dated_files.reverse()

    clanData['lastWeeks'] = [{ 'url': '/' + file[1], 'display': file[1].rpartition(".")[0] } for file in dated_files]
    if (len(clanData['lastWeeks']) > 0):
        with open('.' + clanData['lastWeeks'][0]['url']) as f:
            lastWeek = json.load(f)
            for currentMember in clanData['members']:
                if not any(oldMember['tag'] == currentMember['tag'] for oldMember in lastWeek['members']):
                    currentMember['role'] = 'new'

#Custom properties for members
for member in clanData['members']:
    member['role'] = member['role'].lower()
    member['cardsEarned'] = 0
    member['warBattles'] = 0
    member['wins'] = 0
    member['losses'] = 0
    member['missedWarBattles'] = 0

#War battles participated in and missed, doesn't account for multiples
for war in wars['items']:
    for participant in war['participants']:
        member = [x for x in clanData['members'] if x['tag'] == participant['tag']]
        if len(member) == 1:
            member = member[0]
            member['cardsEarned'] += participant['cardsEarned']
            if participant['battlesPlayed'] == 0:
                member['missedWarBattles'] += 1
            else:
                member['warBattles'] += participant['battlesPlayed']
                member['wins'] += participant['wins']
                member['losses'] += participant['battlesPlayed'] - participant['wins']
    
#Promotion/Probation/Demotion Calculations
for member in clanData['members']:
    isMember = member['role'] == 'member'
    minTrophies = member['trophies'] >= administration['minTrophies']
    elderDonations = member['donations'] >= administration['elderDonations']
    elderWarBattles = member['warBattles'] >= administration['elderWarBattles']
    elderMissedWarBattles = member['missedWarBattles'] <= administration['elderMissedWarBattles']
    
    notNew = member['role'] != 'new'
    notMinDonations = (now.weekday() >= administration['minDonationDay'] and not (now.weekday() == 6 and now.hour >= 19)) and member['donations'] < administration['minDonations']
    notMinWarBattles = member['warBattles'] < administration['minWarBattles']
    exceedsMaxMissedWarBattles = member['missedWarBattles'] > administration['maxMissedWarBattles']
    
    if isMember and minTrophies and elderDonations and elderWarBattles and elderMissedWarBattles:
        member['eligibleForPromotion'] = True
    elif (notNew and (notMinDonations or notMinWarBattles)) or exceedsMaxMissedWarBattles:
        if elderDonations or elderWarBattles:
            member['onProbation'] = True
        else:
            member['dangerOfDemotion'] = True

#Save accesible data and make new backup if Sunday before reset time (12am GMT)
with open('./clan.json', 'w') as outfile:
    json.dump(clanData, outfile)

if (now.weekday() == 6 and now.hour < 19):
    url = './' + time + '.json'.format(now)
    with open(url, 'w') as outfile:
        json.dump(clanData, outfile)