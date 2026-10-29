# BrainBlitz - Online Quiz & Trivia Platform

A complete quiz app that runs in the browser. No install, no server, no build step.

## Run it
Unzip, then double-click `index.html`. Any modern browser works (Chrome, Edge, Firefox, Safari).
An internet connection is only needed to load the Google Fonts; the app still works without it.

## Features
- 6 categories (Science, Geography, History, Technology, Sports, India GK), 8 starter questions each
- 20 second timer per question, instant right/wrong feedback, keyboard answers (1-4)
- Automatic scoring: 100 per correct + up to 50 speed bonus + up to 50 streak bonus
- Leaderboard (overall and per category) with a top-3 podium
- Question management: add, edit, delete, search, restore defaults
- Player profile: name, avatar colour, stats, badges, best score per category, history
- Auto-generated certificate (Gold / Silver / Bronze / Player) with a Download button (PNG)
- Light and dark theme, works on phones

## Files
- `index.html` - page structure
- `css/style.css` - all styling and theme colours
- `js/app.js` - quiz logic, scoring, leaderboard, question bank, certificate drawing

## Customise
- Change the timer or quiz length: `LIMIT` and `MAXQ` near the top of `js/app.js`
- Add a category: add an entry to `CATS` and a matching list in `RAW`
- Edit starter questions: the `RAW` object in `js/app.js`

## Data
Scores, profile and questions are stored in the browser (localStorage), so they stay on one device.
The leaderboard includes sample players so it is not empty. A shared online leaderboard would need a backend.
