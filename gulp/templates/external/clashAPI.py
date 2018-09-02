import requests
import json
import sys
import time

r = requests.get("https://api.clashroyale.com/v1/clans/%23PGVRPVG", headers={"Accept":"application/json", "authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjE1Mzk5NWFlLTVjMWMtNDZhNy1hMDU4LWRjN2E5MTJhZjliYyIsImlhdCI6MTUzNTY5MDI4Nywic3ViIjoiZGV2ZWxvcGVyLzlhNmRlNTNhLWNkYmMtZWM5Ny1iODExLTRjZjMwY2FlOWEwMCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMDQuMTk4LjE0LjUyIiwiMTM2LjYxLjEzMS45NSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.rnoYSTVEnrEu2rzdBosAV66WFyW97VKUHdX8Th_E3XFlQoswNoP4fKaJxPL_r99MNgb55GuUoZbuGgBeAFEm2w"})
clan = r.json()

r = requests.get("https://api.clashroyale.com/v1/clans/%23PGVRPVG/warlog", headers={"Accept":"application/json", "authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjE1Mzk5NWFlLTVjMWMtNDZhNy1hMDU4LWRjN2E5MTJhZjliYyIsImlhdCI6MTUzNTY5MDI4Nywic3ViIjoiZGV2ZWxvcGVyLzlhNmRlNTNhLWNkYmMtZWM5Ny1iODExLTRjZjMwY2FlOWEwMCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMDQuMTk4LjE0LjUyIiwiMTM2LjYxLjEzMS45NSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.rnoYSTVEnrEu2rzdBosAV66WFyW97VKUHdX8Th_E3XFlQoswNoP4fKaJxPL_r99MNgb55GuUoZbuGgBeAFEm2w"})
wars = r.json()

clanData = {
    "time" : int(time.time()),
    "tag" : clan["tag"],
    "name": clan["name"],
    "minTrophies": clan["requiredTrophies"],
    "minDonations": 100,
    "elderDonations": 400,
    "minWarBattles": 2,
    "elderWarBattles": 6,
    "maxMissedWarBattles": 1,
    "members": []
}

for member in clan["memberList"]:
    filteredMember = {}
    filteredMember["tag"] = member["tag"]
    filteredMember["name"] = member["name"]
    filteredMember["trophies"] = member["trophies"]
    filteredMember["rank"] = member["clanRank"]
    filteredMember["role"] = member["role"]
    filteredMember["donations"] = member["donations"]
    filteredMember["donationsReceived"] = member["donationsReceived"]
    filteredMember["cardsEarned"] = 0
    filteredMember["warBattles"] = 0
    filteredMember["missedWarBattles"] = 0
    clanData["members"].append(filteredMember)

for war in wars["items"]:
    for participant in war["participants"]:
        member = [x for x in clanData["members"] if x["tag"] == participant["tag"]]
        if member:
            member = member[0]
            member["cardsEarned"] += participant["cardsEarned"]
            if participant["battlesPlayed"] == 0:
                member["missedWarBattles"] += 1
            else:
                member["warBattles"] += participant["battlesPlayed"]

# promotion: trophies > min, donations > eldermin, missedwarbattles = 0
# demotion: minDonations, missed war battles, war battle amount

for member in clanData["members"]:
    if member["role"] == "member" and member["trophies"] >= clanData["minTrophies"] and member["donations"] >= clanData["elderDonations"] and member["missedWarBattles"] == 0 and member["warBattles"] >= clanData["elderWarBattles"]:
        member["eligibleForPromotion"] = True
    elif member["donations"] < clanData["minDonations"] or member["warBattles"] < clanData["minWarBattles"] or member["missedWarBattles"] > clanData["maxMissedWarBattles"]:
        if member["donations"] >= clanData["elderDonations"] or member["warBattles"] >= clanData["elderWarBattles"]:
            member["onProbation"] = True
        else:
            member["dangerOfDemotion"] = True
    
with open('./gulp/templates/data/_clan--' + str(clanData["time"]) + '.json', 'w') as outfile:
    json.dump(clanData, outfile, indent=4)

print('success')
sys.stdout.flush()