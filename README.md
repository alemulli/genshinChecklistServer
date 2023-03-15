# genshinChecklistServer

This will be the backend to a basic checklist app that tracks when a user has completed the daily and weekly tasks in Genshin Impact.
Goals:
 - The user can log in and:
    - Choose which server they are a part of: America (NA), Europe (EU), Asia, TW/HK/MO (SAR). This will allow for the implementation of automatic daily/weekly resets on a timeout based on their server times.
    - Choose which daily/weekly tasks they want to show on their list. 
    - Settings and daily/weekly progress persist when leaving the website. 
 - The site includes the following daily tasks that the user can choose from:
    - Log into HoYoLAB for the Daily Login Reward
    - 4 Daily Commission Quests (Accept rewards from Katheryn)
    - Send Characters on Expeditions
    - Battle Pass Tasks
        - Log in
        - Complete 4 Daily Commissions (tied to Commission Quests goal above)
        - Mine 10 items
        - Use a total of 150 Original Resin
    - Serenetea Pot
        - Realm Currency
        - Trust Rank Bonus
        - Check Gardening Fields
        - Purchase furnishings
- The site includes the following weekly tasks that the user can choose from:
    - Weekly Reputation
        - Complete 3 Requests
        - Complete 3 Bounties
    - Weekly Bosses
        - Wolf of the North Challenge - Andrius
        - Confront Stormterror - Dvalin
        - Enter the Golden House - Childe
        - Beneath the Dragon-Queller - Azhdaha
        - Narukami Island: Tenshukaku - La Signora
        - End of the Oneiric Euthymia - Mikoto
        - Joururi Workshop - Shouki
    - Battle Pass Tasks
        - Use a total of 1200 Original Resin
        - Complete Ley Line deposit challenges 20 times
        - Purchase 2 items from the Teapot Traveling Salesman in another player's Serenitea Pot (Saturday/Sunday)
        - Defeat boss opponents 10 times
        - Spend a total of 500,000 Mora
        - Complete 15 Domain Challenges
        - Cook 20 dishes
        - Forge 20 items 
        - Complete 3 Requests
        - Complete 3 Bounties
        - Obtain a total of 1,000 Realm Currency
        - Create a total of 10 furnishings
        - Complete Trounce Domains or the Dominator of Wolves challenge 3 times
- Maybe - add categories for world quests that need to be completed daily for a certain number of days (Neko's quests/feeding the fox). 
- Detail the rewards obtained from each of the tasks when applicable
- Maybe - implement Event related tasks when there are events. 
 

3.15.2023 - Initiated the server. Wrote the read me and made planning goals. 
