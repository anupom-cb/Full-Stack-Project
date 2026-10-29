(function () {
  var KEY = 'brainblitz-v1';
  var CATS = [
    { id: 'sci', name: 'Science', c: '#12B886', ic: '<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4.2"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)"/>' },
    { id: 'geo', name: 'Geography', c: '#2AA7F0', ic: '<circle cx="12" cy="12" r="9.5"/><ellipse cx="12" cy="12" rx="4" ry="9.5"/><path d="M2.5 12h19"/>' },
    { id: 'his', name: 'History', c: '#E09B00', ic: '<path d="M3 9l9-5 9 5z"/><path d="M5 20h14M6 9v8M10 9v8M14 9v8M18 9v8"/>' },
    { id: 'tec', name: 'Technology', c: '#7B5CFF', ic: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>' },
    { id: 'spo', name: 'Sports', c: '#FF5470', ic: '<circle cx="12" cy="12" r="9.5"/><path d="M12 2.5v19M2.5 12h19"/><path d="M5 5c4 3 4 11 0 14M19 5c-4 3-4 11 0 14"/>' },
    { id: 'ind', name: 'India GK', c: '#F57C2B', ic: '<path d="M5 21V3"/><path d="M5 4h13l-3 4 3 4H5"/>' }
  ];
  var RAW = {
    sci: [['What is the chemical symbol for gold?', ['Au', 'Ag', 'Gd', 'Go']], ['Which planet is known as the Red Planet?', ['Mars', 'Venus', 'Mercury', 'Jupiter']], ['Which gas do plants absorb for photosynthesis?', ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen']], ['What is the hardest natural substance?', ['Diamond', 'Quartz', 'Topaz', 'Granite']], ['How many bones are in an adult human body?', ['206', '201', '212', '300']], ['Approximately how fast does light travel?', ['300,000 km/s', '150,000 km/s', '30,000 km/s', '3,000,000 km/s']], ['Which part of the cell is called its powerhouse?', ['Mitochondria', 'Nucleus', 'Ribosome', 'Golgi apparatus']], ['At sea level, water boils at what temperature?', ['100 °C', '90 °C', '110 °C', '120 °C']]],
    geo: [['Which is the largest ocean on Earth?', ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean']], ['Which is the longest river in Africa?', ['Nile', 'Congo', 'Niger', 'Zambezi']], ['What is the capital of Australia?', ['Canberra', 'Sydney', 'Melbourne', 'Perth']], ['Mount Everest lies on the border of Nepal and which country?', ['China', 'India', 'Bhutan', 'Pakistan']], ['Which is the smallest country in the world by area?', ['Vatican City', 'Monaco', 'San Marino', 'Malta']], ['On which continent is the Sahara Desert?', ['Africa', 'Asia', 'Australia', 'South America']], ['What is the capital of Japan?', ['Tokyo', 'Kyoto', 'Osaka', 'Seoul']], ['Which imaginary line divides Earth into northern and southern hemispheres?', ['Equator', 'Prime Meridian', 'Tropic of Cancer', 'International Date Line']]],
    his: [['Who was the first President of the United States?', ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams']], ['In which year did World War II end?', ['1945', '1939', '1942', '1950']], ['Which Ancient Wonder in Egypt is still standing?', ['Great Pyramid of Giza', 'Hanging Gardens', 'Colossus of Rhodes', 'Lighthouse of Alexandria']], ['Who painted the Mona Lisa?', ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Vincent van Gogh']], ['In which year did the Berlin Wall fall?', ['1989', '1961', '1991', '1979']], ['Who was the first person to walk on the Moon?', ['Neil Armstrong', 'Buzz Aldrin', 'Yuri Gagarin', 'Michael Collins']], ['Which civilization built Machu Picchu?', ['Inca', 'Aztec', 'Maya', 'Olmec']], ['The French Revolution began in which year?', ['1789', '1776', '1804', '1815']]],
    tec: [['What does HTML stand for?', ['HyperText Markup Language', 'High Tech Modern Language', 'Hyperlink Text Mark Language', 'Home Tool Markup Language']], ['Who co-founded Microsoft with Bill Gates?', ['Paul Allen', 'Steve Jobs', 'Larry Page', 'Steve Wozniak']], ['What does CPU stand for?', ['Central Processing Unit', 'Computer Personal Unit', 'Central Program Utility', 'Core Processing Unit']], ['Which language is used to style web pages?', ['CSS', 'Python', 'SQL', 'Java']], ['How many bits are in one byte?', ['8', '4', '16', '10']], ['Which of these is a relational database?', ['PostgreSQL', 'Redis cache', 'Git', 'Docker']], ['What does AI stand for?', ['Artificial Intelligence', 'Automated Interface', 'Applied Integration', 'Advanced Input']], ['What is Git mainly used for?', ['Version control', 'Image editing', 'Video streaming', 'Network routing']]],
    spo: [['How many players does a football (soccer) team have on the field?', ['11', '9', '10', '12']], ['How often are the Summer Olympic Games held?', ['Every 4 years', 'Every 2 years', 'Every 3 years', 'Every 5 years']], ['Which sport is played at Wimbledon?', ['Tennis', 'Cricket', 'Golf', 'Badminton']], ['Which team won the 2011 Cricket World Cup?', ['India', 'Sri Lanka', 'Australia', 'Pakistan']], ['How many rings are on the Olympic flag?', ['5', '4', '6', '7']], ['Which country hosted the 2016 Summer Olympics?', ['Brazil', 'China', 'United Kingdom', 'Japan']], ['Which country won the FIFA World Cup in 2022?', ['Argentina', 'France', 'Croatia', 'Brazil']], ['What is the length of a full marathon?', ['42.195 km', '21.1 km', '50 km', '35 km']]],
    ind: [['What is the national animal of India?', ['Tiger', 'Lion', 'Elephant', 'Leopard']], ['What is the capital of India?', ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai']], ['Who wrote the Indian national anthem?', ['Rabindranath Tagore', 'Bankim Chandra Chatterjee', 'Sarojini Naidu', 'Mahatma Gandhi']], ['On which date is Independence Day celebrated in India?', ['15 August', '26 January', '2 October', '14 November']], ['In which city is the Taj Mahal?', ['Agra', 'Jaipur', 'Delhi', 'Lucknow']], ['What is the currency of India?', ['Rupee', 'Taka', 'Rupiah', 'Dinar']], ['Who was the first Prime Minister of India?', ['Jawaharlal Nehru', 'Sardar Patel', 'Lal Bahadur Shastri', 'Rajendra Prasad']], ['Which river is considered the holiest in India?', ['Ganga', 'Godavari', 'Krishna', 'Narmada']]]
  };
  var PLAYERS = ['Aarav', 'Diya', 'Kabir', 'Meera', 'Rohan', 'Ishita', 'Vihaan', 'Ananya', 'Arjun', 'Saanvi', 'Neel', 'Tara'];
  var SKILL = [96, 92, 88, 85, 82, 80, 77, 74, 70, 66, 62, 58];
  var LIMIT = 20, MAXQ = 10;
  var memStore = null;

  function seedQs() { var a = []; CATS.forEach(function (c) { RAW[c.id].forEach(function (r, i) { a.push({ id: c.id + (i + 1), cat: c.id, q: r[0], o: r[1].slice() }); }); }); return a; }
  function seedLB() { var out = []; PLAYERS.forEach(function (n, i) { CATS.forEach(function (c, j) { if ((i + j) % 5 === 0) return; var acc = Math.max(40, Math.min(100, SKILL[i] - ((i * 7 + j * 13) % 17))); var cor = Math.round(acc / 100 * 8); var sc = cor * (120 + ((i * 11 + j * 5) % 45)); out.push({ name: n, cat: c.id, score: sc, correct: cor, total: 8, acc: Math.round(cor / 8 * 100) }); }); }); return out; }
  var SEED_LB = seedLB();
  var S;
  function fresh() { return { v: 1, user: { name: '', hue: 0 }, qs: seedQs(), results: [], theme: null }; }
  function load() { try { var j = localStorage.getItem(KEY); if (j) S = JSON.parse(j); } catch (e) { } if (!S || S.v !== 1 || !S.qs) S = fresh(); }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { } }
  load();
  if (S.theme) { document.documentElement.setAttribute('data-theme', S.theme); }

  var $ = function (s) { return document.querySelector(s); };
  function esc(s) { return String(s).replace(/[&<>"']/g, function (m) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]; }); }
  function catOf(id) { return CATS.filter(function (c) { return c.id === id; })[0] || CATS[0]; }
  function icon(c, extra) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" ' + (extra || '') + '>' + c + '</svg>'; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function myName() { return (S.user.name || '').trim() || 'Guest Player'; }
  function toast(m) { var t = $('#toast'); t.innerHTML = '<div class="toast" role="status">' + esc(m) + '</div>'; setTimeout(function () { t.innerHTML = ''; }, 2200); }
  function fmtDate(ts) { return new Date(ts).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }); }
  function qCount(cat) { return S.qs.filter(function (q) { return q.cat === cat; }).length; }
  function bestOf(cat) { var b = 0; S.results.forEach(function (r) { if (r.cat === cat && r.score > b) b = r.score; }); return b; }

  var NAV = [
    { v: 'home', t: 'Play', ic: '<path d="M8 5v14l11-7z"/>' },
    { v: 'board', t: 'Leaderboard', ic: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0zM7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3"/>' },
    { v: 'manage', t: 'Questions', ic: '<circle cx="12" cy="12" r="9.5"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01"/>' },
    { v: 'profile', t: 'Profile', ic: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>' }
  ];
  var view = 'home', Q = null, timerId = null, R = null, M = { cat: 'all', q: '', edit: null }, armed = null, shownCert = null;
  function navKey() { return (view === 'quiz' || view === 'result') ? 'home' : view; }
  function drawNav() {
    var h = NAV.map(function (n) { return '<button data-act="nav" data-v="' + n.v + '"' + (navKey() === n.v ? ' aria-current="page"' : '') + '>' + icon(n.ic) + '<span>' + n.t + '</span></button>'; }).join('');
    $('#nav1').innerHTML = h; $('#nav2').innerHTML = h;
  }
  function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }
  function go(v) { stopTimer(); view = v; if (['home', 'board', 'manage', 'profile'].indexOf(v) > -1) { Q = null; try { if (location.hash !== '#' + v) history.replaceState(null, '', '#' + v); } catch (e) { } } render(); window.scrollTo(0, 0); }

  /* ---------- home ---------- */
  function board(cat) {
    var all = SEED_LB.map(function (r) { return { name: r.name, me: false, cat: r.cat, score: r.score, acc: r.acc }; }).concat(S.results.map(function (r) { return { name: myName(), me: true, cat: r.cat, score: r.score, acc: r.acc, id: r.id }; }));
    var m = {}, k;
    all.forEach(function (r) {
      if (cat !== 'all' && r.cat !== cat) return;
      k = r.me ? '__me' : r.name;
      var p = m[k] || (m[k] = { name: r.name, me: r.me, per: {}, plays: 0 });
      p.plays++;
      var cur = p.per[r.cat];
      if (!cur || r.score > cur.score) p.per[r.cat] = { score: r.score, acc: r.acc };
    });
    var rows = Object.keys(m).map(function (k) { var p = m[k], cs = Object.keys(p.per), sc = 0, ac = 0; cs.forEach(function (c) { sc += p.per[c].score; ac += p.per[c].acc; }); return { name: p.name, me: p.me, score: sc, acc: cs.length ? Math.round(ac / cs.length) : 0, plays: p.plays }; });
    rows.sort(function (a, b) { return b.score - a.score || b.acc - a.acc; });
    return rows;
  }
  function myRank() { var b = board('all'); for (var i = 0; i < b.length; i++)if (b[i].me) return i + 1; return null; }
  function vHome() {
    var pts = S.results.reduce(function (a, r) { return a + r.score; }, 0), rk = myRank();
    var cards = CATS.map(function (c) {
      var n = qCount(c.id), b = bestOf(c.id);
      return '<button class="cat" style="--c:' + c.c + '" data-act="play" data-c="' + c.id + '"' + (n ? '' : ' disabled') + '><span class="ic">' + icon(c.ic) + '</span><h3>' + c.name + '</h3><span class="meta">' + (n ? Math.min(n, MAXQ) + ' questions · ' + LIMIT + ' sec each' : 'No questions yet. Add some in Questions.') + '</span><span class="go">' + (b ? '<span class="best">Best ' + b + '</span>' : '<span></span>') + '<span class="play">Play</span></span></button>';
    }).join('');
    return '<section class="hero"><h1>Test your brain. Climb the board.</h1><p>Pick a category, beat the clock and collect points. Finish a quiz and your certificate is ready to download.</p>' +
      '<label class="nm" for="nameIn">Your name<input id="nameIn" maxlength="28" autocomplete="off" placeholder="Type your name" value="' + esc(S.user.name) + '"></label>' +
      '<div class="hstats"><div><b>' + S.results.length + '</b><span>quizzes played</span></div><div><b>' + pts + '</b><span>total points</span></div><div><b>' + (rk ? '#' + rk : '–') + '</b><span>leaderboard rank</span></div></div></section>' +
      '<h2 class="sec">Pick a category</h2><div class="cats">' + cards + '</div>' +
      '<h2 class="sec">How scoring works</h2><div class="rules"><div class="rule"><b>100</b><span>points for every correct answer</span></div><div class="rule"><b>+50</b><span>speed bonus, bigger the more time you have left</span></div><div class="rule"><b>+50</b><span>streak bonus, 10 for each correct answer in a row</span></div><div class="rule"><b>' + LIMIT + 's</b><span>per question. A timeout scores zero and breaks your streak</span></div></div>';
  }

  /* ---------- quiz ---------- */
  function startQuiz(id) {
    var pool = S.qs.filter(function (q) { return q.cat === id; });
    if (!pool.length) { toast('Add questions to this category first'); return; }
    var list = shuffle(pool).slice(0, MAXQ).map(function (q) { return { id: q.id, q: q.q, o: shuffle(q.o.map(function (t, i) { return { t: t, ok: i === 0 }; })) }; });
    Q = { cat: id, list: list, i: 0, score: 0, correct: 0, streak: 0, maxStreak: 0, log: [], locked: false, left: LIMIT, t0: 0, times: [], fb: '', sel: -1 };
    view = 'quiz'; try { history.replaceState(null, '', '#quiz'); } catch (e) { }
    render(); startTimer(); window.scrollTo(0, 0);
  }
  var CIRC = 2 * Math.PI * 28;
  function vQuiz() {
    var c = catOf(Q.cat), q = Q.list[Q.i], n = Q.list.length;
    var opts = q.o.map(function (o, i) {
      var cl = 'opt'; if (Q.locked) { cl += o.ok ? ' ok' : (i === Q.sel ? ' no' : ' dim'); }
      return '<button class="' + cl + '" data-act="ans" data-i="' + i + '"' + (Q.locked ? ' disabled' : '') + '><span class="k">' + (i + 1) + '</span><span class="t">' + esc(o.t) + '</span></button>';
    }).join('');
    return '<div class="qwrap"><div class="qhead"><span class="chip" style="--c:' + c.c + '">' + icon(c.ic) + c.name + '</span><span class="pill">Question ' + (Q.i + 1) + ' of ' + n + '</span><span class="pill" id="sc">' + Q.score + ' pts</span><span class="pill" id="stk">Streak ' + Q.streak + '</span></div>' +
      '<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="' + n + '" aria-valuenow="' + Q.i + '"><i style="width:' + (Q.i / n * 100) + '%"></i></div>' +
      '<div class="qcard"><div class="qtop"><h2 class="qtext">' + esc(q.q) + '</h2><div class="ring" id="ring"><svg viewBox="0 0 68 68"><circle class="tr" cx="34" cy="34" r="28"/><circle class="pg" id="pg" cx="34" cy="34" r="28" stroke-dasharray="' + CIRC.toFixed(1) + '" stroke-dashoffset="0"/></svg><b id="tl">' + Math.ceil(Q.left) + '</b></div></div>' +
      '<div class="opts">' + opts + '</div>' +
      '<div class="qfoot"><span class="fb ' + (Q.fbc || '') + '" id="fb" aria-live="polite">' + esc(Q.fb) + '</span>' + (Q.locked ? '<button class="btn" data-act="next">' + (Q.i === n - 1 ? 'See results' : 'Next question') + '</button>' : '<span class="keys">Press 1 to 4 to answer</span>') + '</div></div>' +
      '<div><button class="btn alt sm" data-act="quit">Quit quiz</button></div></div>';
  }
  function startTimer() {
    stopTimer(); Q.t0 = performance.now();
    timerId = setInterval(function () {
      var el = (performance.now() - Q.t0) / 1000; Q.left = Math.max(0, LIMIT - el);
      var pg = $('#pg'), tl = $('#tl'), rg = $('#ring');
      if (pg) { pg.setAttribute('stroke-dashoffset', (CIRC * (1 - Q.left / LIMIT)).toFixed(1)); }
      if (tl) tl.textContent = Math.ceil(Q.left);
      if (rg) rg.classList.toggle('low', Q.left <= 5);
      if (Q.left <= 0) answer(-1);
    }, 100);
  }
  function answer(i) {
    if (!Q || Q.locked) return;
    stopTimer(); Q.locked = true; Q.sel = i;
    var q = Q.list[Q.i], ok = i > -1 && q.o[i].ok, spent = Math.min(LIMIT, (performance.now() - Q.t0) / 1000), left = Math.max(0, LIMIT - spent), pts = 0;
    if (ok) { pts = 100 + Math.round(50 * left / LIMIT) + Math.min(50, 10 * Q.streak); Q.streak++; Q.correct++; Q.maxStreak = Math.max(Q.maxStreak, Q.streak); Q.fb = 'Correct! +' + pts + ' points'; Q.fbc = 'good'; }
    else { Q.streak = 0; Q.fb = i === -1 ? 'Time is up. No points this time.' : 'Not quite. The right answer is highlighted.'; Q.fbc = 'bad'; }
    Q.score += pts; Q.times.push(spent);
    Q.log.push({ q: q.q, pick: i > -1 ? q.o[i].t : 'No answer', right: q.o.filter(function (o) { return o.ok; })[0].t, ok: ok });
    Q.left = left; render();
    var nb = document.querySelector('[data-act="next"]'); if (nb) nb.focus();
  }
  function nextQ() {
    if (Q.i >= Q.list.length - 1) { finish(); return; }
    Q.i++; Q.locked = false; Q.fb = ''; Q.fbc = ''; Q.sel = -1; Q.left = LIMIT; render(); startTimer();
  }
  function finish() {
    stopTimer();
    var n = Q.list.length, acc = Math.round(Q.correct / n * 100), avg = Q.times.reduce(function (a, b) { return a + b; }, 0) / n;
    var d = new Date(), id = 'BB-' + d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') + '-' + Math.random().toString(36).slice(2, 7).toUpperCase();
    R = { id: id, name: myName(), cat: Q.cat, score: Q.score, correct: Q.correct, total: n, acc: acc, streak: Q.maxStreak, avg: Math.round(avg * 10) / 10, ts: Date.now(), log: Q.log };
    S.results.push({ id: R.id, cat: R.cat, score: R.score, correct: R.correct, total: R.total, acc: R.acc, streak: R.streak, avg: R.avg, ts: R.ts });
    save(); Q = null; view = 'result'; try { history.replaceState(null, '', '#result'); } catch (e) { }
    render(); window.scrollTo(0, 0);
  }

  /* ---------- certificate ---------- */
  function level(acc) {
    if (acc >= 90) return { n: 'GOLD', a: '#F5B400', b: '#FFE18A', t: 'OF ACHIEVEMENT' };
    if (acc >= 70) return { n: 'SILVER', a: '#8F9AB3', b: '#E8ECF4', t: 'OF ACHIEVEMENT' };
    if (acc >= 50) return { n: 'BRONZE', a: '#C0743A', b: '#F4C7A0', t: 'OF ACHIEVEMENT' };
    return { n: 'PLAYER', a: '#12B886', b: '#9BEBD0', t: 'OF PARTICIPATION' };
  }
  async function drawCert(r) {
    try { await Promise.all([document.fonts.load('800 80px "Bricolage Grotesque"'), document.fonts.load('italic 600 80px Fraunces'), document.fonts.load('500 30px Figtree'), document.fonts.load('700 30px Figtree')]); } catch (e) { }
    var W = 1600, H = 1130, cv = document.createElement('canvas'); cv.width = W; cv.height = H; var x = cv.getContext('2d');
    var cat = catOf(r.cat), lv = level(r.acc), INK = '#1B1740', MUTED = '#625F8A';
    x.fillStyle = '#FFFFFF'; x.fillRect(0, 0, W, H);
    x.save(); x.beginPath(); x.rect(30, 30, W - 60, H - 60); x.clip();
    function tri(a, b, c, d, e, f, col) { x.fillStyle = col; x.beginPath(); x.moveTo(a, b); x.lineTo(c, d); x.lineTo(e, f); x.closePath(); x.fill(); }
    tri(0, 0, 420, 0, 0, 420, '#5B3DF5'); tri(0, 0, 250, 0, 0, 250, '#8A6BFF');
    tri(W, 0, W - 300, 0, W, 300, cat.c);
    tri(W, H, W - 420, H, W, H - 420, '#FFC233'); tri(W, H, W - 250, H, W, H - 250, '#FFDD80');
    tri(0, H, 300, H, 0, H - 300, '#FF5470');
    x.restore();
    x.lineWidth = 10; x.strokeStyle = INK; x.strokeRect(30, 30, W - 60, H - 60);
    x.lineWidth = 3; x.strokeStyle = cat.c; x.strokeRect(60, 60, W - 120, H - 120);
    x.fillStyle = '#FFFFFF'; x.fillRect(250, 95, W - 500, H - 190);
    x.textAlign = 'center'; x.textBaseline = 'alphabetic';
    function sp(v) { try { x.letterSpacing = v; } catch (e) { } }
    sp('12px'); x.fillStyle = '#5B3DF5'; x.font = '700 30px Figtree, sans-serif'; x.fillText('BRAINBLITZ QUIZ PLATFORM', W / 2, 175);
    sp('6px'); x.fillStyle = INK; x.font = '800 150px "Bricolage Grotesque", sans-serif'; x.fillText('CERTIFICATE', W / 2, 320);
    sp('16px'); x.fillStyle = cat.c; x.font = '700 38px Figtree, sans-serif'; x.fillText(lv.t, W / 2, 385);
    sp('0px'); x.fillStyle = MUTED; x.font = '500 34px Figtree, sans-serif'; x.fillText('This certificate is proudly presented to', W / 2, 478);
    var nm = r.name, fs = 118; x.fillStyle = INK;
    do { x.font = 'italic 600 ' + fs + 'px Fraunces, Georgia, serif'; fs -= 4; } while (x.measureText(nm).width > 1000 && fs > 40);
    x.fillText(nm, W / 2, 600);
    x.fillStyle = cat.c; x.fillRect(W / 2 - 380, 632, 760, 4);
    x.fillStyle = INK; x.font = '500 36px Figtree, sans-serif';
    x.fillText('for completing the ' + cat.name + ' quiz with a score of ' + r.score + ' points', W / 2, 712);
    x.fillStyle = MUTED; x.font = '500 32px Figtree, sans-serif';
    x.fillText(r.correct + ' of ' + r.total + ' questions correct  |  ' + r.acc + '% accuracy  |  best streak ' + r.streak, W / 2, 764);
    var cx = W / 2, cy = 915, rad = 100;
    var g = x.createRadialGradient(cx - 25, cy - 30, 10, cx, cy, rad); g.addColorStop(0, lv.b); g.addColorStop(1, lv.a);
    x.beginPath(); for (var i = 0; i < 24; i++) { var ang = i / 24 * Math.PI * 2, rr = i % 2 ? rad - 10 : rad + 10; x.lineTo(cx + Math.cos(ang) * rr, cy + Math.sin(ang) * rr); } x.closePath(); x.fillStyle = g; x.fill();
    x.beginPath(); x.arc(cx, cy, rad - 24, 0, Math.PI * 2); x.lineWidth = 4; x.strokeStyle = 'rgba(27,23,64,.55)'; x.stroke();
    x.fillStyle = INK; x.font = '800 30px "Bricolage Grotesque", sans-serif'; sp('2px'); x.fillText(lv.n, cx, cy + 11); sp('0px');
    x.font = '700 22px Figtree, sans-serif'; x.fillText(r.acc + '%', cx, cy + 46);
    x.fillStyle = INK; x.fillRect(330, 1000, 300, 2); x.fillRect(W - 630, 1000, 300, 2);
    x.fillStyle = INK; x.font = '700 30px Figtree, sans-serif'; x.fillText(fmtDate(r.ts), 480, 985); x.fillText(r.id, W - 480, 985);
    x.fillStyle = MUTED; x.font = '500 24px Figtree, sans-serif'; sp('4px'); x.fillText('DATE', 480, 1040); x.fillText('CERTIFICATE ID', W - 480, 1040); sp('0px');
    return cv.toDataURL('image/png');
  }
  var certTimer = null;
  function paintCert(r, imgSel, dlSel) {
    drawCert(r).then(function (url) { var im = $(imgSel), dl = $(dlSel); if (im) im.src = url; if (dl) dl.href = url; });
  }
  function certBlock(r, prefix) {
    return '<div class="cert"><img id="' + prefix + 'Img" alt="Certificate of ' + esc(r.name) + '" width="1600" height="1130">' +
      '<div class="acts"><a class="btn sun" id="' + prefix + 'Dl" download="BrainBlitz-Certificate-' + esc(r.id) + '.png" href="#">Download certificate (PNG)</a></div>' +
      '<p class="note">If the download does not start inside this preview, press and hold the certificate (or right-click it) and choose Save image.</p></div>';
  }
  function vResult() {
    var r = R, lv = level(r.acc), c = catOf(r.cat);
    var msg = r.acc >= 90 ? 'Outstanding round!' : r.acc >= 70 ? 'Great work!' : r.acc >= 50 ? 'Nice effort!' : 'Good start. Try again to beat it.';
    var rank = myRank();
    var rev = r.log.map(function (l, i) { return '<div class="rv ' + (l.ok ? 'ok' : 'no') + '"><b>' + (i + 1) + '. ' + esc(l.q) + '</b><span class="ans"><em class="mk ' + (l.ok ? 'ok' : 'no') + '">' + (l.ok ? '✓ Correct' : '✗ Wrong') + '</em>Your answer: ' + esc(l.pick) + '</span>' + (l.ok ? '' : '<span class="ans"><em class="mk ok">Right answer</em>' + esc(l.right) + '</span>') + '</div>'; }).join('');
    return '<div class="qwrap" style="max-width:900px"><div class="rhero"><div class="medal" style="background:radial-gradient(circle at 35% 30%,' + lv.b + ',' + lv.a + ')"><div><b>' + r.acc + '%</b>' + lv.n + '</div></div><div><h1>' + msg + '</h1><p>' + esc(c.name) + ' quiz · ' + r.correct + ' of ' + r.total + ' correct</p><p style="margin-top:12px"><span class="pill" style="font-size:1.1rem">' + r.score + ' points</span> <span class="pill">Rank #' + rank + '</span></p></div></div>' +
      '<div class="tiles"><div class="tile"><b>' + r.correct + '/' + r.total + '</b><span>correct answers</span></div><div class="tile"><b>' + r.streak + '</b><span>best streak</span></div><div class="tile"><b>' + r.avg + 's</b><span>average per question</span></div><div class="tile"><b>#' + rank + '</b><span>leaderboard rank</span></div></div>' +
      '<h2 class="sec" style="margin:8px 0 0">Your certificate</h2>' +
      '<div class="nmrow cert" style="margin:0"><div class="nmrow"><label for="certName" style="font-weight:700">Name on certificate</label><input id="certName" maxlength="28" value="' + esc(r.name) + '"></div></div>' +
      certBlock(r, 'c') +
      '<div class="acts"><button class="btn" data-act="play" data-c="' + r.cat + '">Play again</button><button class="btn alt" data-act="nav" data-v="board">View leaderboard</button><button class="btn alt" data-act="nav" data-v="home">Other categories</button></div>' +
      '<h2 class="sec" style="margin:8px 0 0">Answer review</h2><p class="note">' + r.correct + ' correct and ' + (r.total - r.correct) + ' wrong. Wrong answers show the right one underneath.</p><div class="review">' + rev + '</div></div>';
  }

  /* ---------- leaderboard ---------- */
  var BC = 'all';
  function vBoard() {
    var rows = board(BC), tabs = '<button data-act="tab" data-c="all" aria-pressed="' + (BC === 'all') + '">All categories</button>' + CATS.map(function (c) { return '<button style="--c:' + c.c + '" data-act="tab" data-c="' + c.id + '" aria-pressed="' + (BC === c.id) + '">' + c.name + '</button>'; }).join('');
    function av(n, me) { return '<span class="av" style="background:' + (me ? CATS[S.user.hue % CATS.length].c : '#5B3DF5') + '">' + esc(n.charAt(0).toUpperCase()) + '</span>'; }
    var top = rows.slice(0, 3), order = [1, 0, 2], pod = order.map(function (i) { var p = top[i]; if (!p) return '<div></div>'; return '<div class="pod p' + (i + 1) + '"><div class="rk">' + ['1ST', '2ND', '3RD'][i] + '</div><div class="av" style="background:' + (p.me ? CATS[S.user.hue % CATS.length].c : '#5B3DF5') + '">' + esc(p.name.charAt(0).toUpperCase()) + '</div><b>' + esc(p.name) + (p.me ? ' (you)' : '') + '</b><div class="sc">' + p.score + '</div></div>'; }).join('');
    var body = rows.slice(0, 25).map(function (p, i) { return '<tr' + (p.me ? ' class="me"' : '') + '><td>' + (i + 1) + '</td><td><span class="who">' + av(p.name, p.me) + esc(p.name) + (p.me ? ' <span class="tag">YOU</span>' : '') + '</span></td><td class="r">' + p.score + '</td><td class="r">' + p.acc + '%</td><td class="r">' + p.plays + '</td></tr>'; }).join('');
    var mine = null; rows.forEach(function (p, i) { if (p.me) mine = i; });
    var extra = (mine !== null && mine >= 25) ? '<p class="note">You are ranked #' + (mine + 1) + ' of ' + rows.length + '.</p>' : '';
    return '<h2 style="font-size:2rem">Leaderboard</h2><p class="note" style="margin:6px 0 14px">' + (BC === 'all' ? 'Total of each player\'s best score in every category.' : 'Best score in ' + catOf(BC).name + '.') + ' Sample players are included so the board is never empty. Your own results appear next to them.</p><div class="tabs">' + tabs + '</div>' +
      (rows.length ? '<div class="podium">' + pod + '</div><div class="tblw"><table><thead><tr><th>#</th><th>Player</th><th class="r">Points</th><th class="r">Accuracy</th><th class="r">Quizzes</th></tr></thead><tbody>' + body + '</tbody></table></div>' + extra : '<div class="empty">No scores yet.</div>');
  }

  /* ---------- question management ---------- */
  function vManage() {
    var opts = '<option value="all">All categories</option>' + CATS.map(function (c) { return '<option value="' + c.id + '"' + (M.cat === c.id ? ' selected' : '') + '>' + c.name + ' (' + qCount(c.id) + ')</option>'; }).join('');
    return '<h2 style="font-size:2rem">Question bank</h2><p class="note" style="margin:6px 0 14px">Add, edit or remove questions. Changes are saved in this browser and used the next time you play.</p>' +
      '<div class="tool"><select id="mCat" aria-label="Filter by category">' + opts + '</select><input id="mSearch" type="search" placeholder="Search questions" value="' + esc(M.q) + '" aria-label="Search questions"><button class="btn" data-act="add">Add question</button></div>' +
      '<div id="mForm"></div><div id="mList"></div><div class="acts" style="margin-top:20px"><button class="btn alt sm" data-act="reset" id="resetBtn">' + (armed === 'reset' ? 'Sure? Restore defaults' : 'Restore default questions') + '</button></div>';
  }
  function drawForm() {
    var el = $('#mForm'); if (!el) return;
    if (!M.edit) { el.innerHTML = ''; return; }
    var q = M.edit === 'new' ? { cat: M.cat === 'all' ? 'sci' : M.cat, q: '', o: ['', '', '', ''], ci: 0 } : (function () { var f = S.qs.filter(function (z) { return z.id === M.edit; })[0]; return { cat: f.cat, q: f.q, o: f.o, ci: 0 }; })();
    var catOpts = CATS.map(function (c) { return '<option value="' + c.id + '"' + (q.cat === c.id ? ' selected' : '') + '>' + c.name + '</option>'; }).join('');
    var rows = [0, 1, 2, 3].map(function (i) { return '<div class="orow"><input type="radio" name="qc" id="qc' + i + '" value="' + i + '"' + (i === q.ci ? ' checked' : '') + ' aria-label="Option ' + (i + 1) + ' is correct"><input type="text" id="qo' + i + '" maxlength="80" placeholder="Option ' + (i + 1) + (i === 0 ? ' (correct by default)' : '') + '" value="' + esc(q.o[i]) + '"></div>'; }).join('');
    el.innerHTML = '<form class="form" id="qForm"><h3>' + (M.edit === 'new' ? 'New question' : 'Edit question') + '</h3><div class="field"><label for="qCat">Category</label><select id="qCat">' + catOpts + '</select></div><div class="field"><label for="qText">Question</label><textarea id="qText" maxlength="200">' + esc(q.q) + '</textarea></div><div class="field"><span>Answer options (select the correct one)</span>' + rows + '</div><p class="err" id="formErr" role="alert"></p><div class="acts"><button class="btn" type="submit">Save question</button><button class="btn alt" type="button" data-act="cancel">Cancel</button></div></form>';
    $('#qText').focus();
  }
  function drawList() {
    var el = $('#mList'); if (!el) return;
    var t = M.q.trim().toLowerCase();
    var list = S.qs.filter(function (q) { return (M.cat === 'all' || q.cat === M.cat) && (!t || q.q.toLowerCase().indexOf(t) > -1 || q.o.join(' ').toLowerCase().indexOf(t) > -1); });
    if (!list.length) { el.innerHTML = '<div class="empty">No questions match. Use "Add question" to create one.</div>'; return; }
    el.innerHTML = list.map(function (q) {
      var c = catOf(q.cat);
      return '<div class="qi"><div class="row"><div style="min-width:0;display:grid;gap:8px"><span class="chip" style="--c:' + c.c + ';justify-self:start">' + icon(c.ic) + c.name + '</span><h3>' + esc(q.q) + '</h3></div><div class="acts" style="flex:none"><button class="btn alt sm" data-act="edit" data-id="' + q.id + '">Edit</button><button class="btn ' + (armed === q.id ? 'danger' : 'alt') + ' sm" data-act="del" data-id="' + q.id + '">' + (armed === q.id ? 'Confirm delete' : 'Delete') + '</button></div></div><ul>' + q.o.map(function (o, i) { return '<li' + (i === 0 ? ' class="c"' : '') + '>' + (i === 0 ? '✓ ' : '') + esc(o) + '</li>'; }).join('') + '</ul></div>';
    }).join('');
  }
  function saveForm() {
    var text = $('#qText').value.trim(), cat = $('#qCat').value, o = [0, 1, 2, 3].map(function (i) { return $('#qo' + i).value.trim(); }), ci = 0;
    [0, 1, 2, 3].forEach(function (i) { if ($('#qc' + i).checked) ci = i; });
    var err = '';
    if (text.length < 5) err = 'Write the question first (at least 5 characters).';
    else if (o.some(function (v) { return !v; })) err = 'Fill in all four options.';
    else if (new Set(o.map(function (v) { return v.toLowerCase(); })).size < 4) err = 'Each option needs to be different.';
    if (err) { $('#formErr').textContent = err; return; }
    var ordered = [o[ci]].concat(o.filter(function (_, i) { return i !== ci; }));
    if (M.edit === 'new') { S.qs.push({ id: 'u' + Date.now().toString(36), cat: cat, q: text, o: ordered }); }
    else { S.qs.forEach(function (q) { if (q.id === M.edit) { q.cat = cat; q.q = text; q.o = ordered; } }); }
    save(); M.edit = null; toast('Question saved'); render();
  }

  /* ---------- profile ---------- */
  var BADGES = [
    ['First Steps', 'Finish your first quiz', function (s) { return s.n >= 1; }, '1'],
    ['Perfect Round', 'Score 100% in a quiz', function (s) { return s.perfect; }, '★'],
    ['On Fire', 'Get 5 correct in a row', function (s) { return s.streak >= 5; }, '5'],
    ['Explorer', 'Play 4 different categories', function (s) { return s.cats >= 4; }, '4'],
    ['Quick Draw', 'Average under 8 seconds with 60%+ accuracy', function (s) { return s.quick; }, '⚡'],
    ['Centurion', 'Collect 1,000 total points', function (s) { return s.pts >= 1000; }, 'K']
  ];
  function stats() {
    var cs = {}, pts = 0, streak = 0, perfect = false, quick = false, accSum = 0;
    S.results.forEach(function (r) { cs[r.cat] = 1; pts += r.score; streak = Math.max(streak, r.streak); accSum += r.acc; if (r.acc === 100) perfect = true; if (r.avg < 8 && r.acc >= 60) quick = true; });
    return { n: S.results.length, cats: Object.keys(cs).length, pts: pts, streak: streak, perfect: perfect, quick: quick, acc: S.results.length ? Math.round(accSum / S.results.length) : 0 };
  }
  function vProfile() {
    var st = stats(), u = S.user;
    var sw = CATS.map(function (c, i) { return '<button style="background:' + c.c + '" data-act="hue" data-h="' + i + '" aria-pressed="' + (u.hue === i) + '" aria-label="Avatar colour ' + (i + 1) + '"></button>'; }).join('');
    var bd = BADGES.map(function (b) { var on = b[2](st); return '<div class="bd' + (on ? ' on' : '') + '"><i>' + b[3] + '</i><div><b>' + b[0] + '</b><span>' + b[1] + '</span></div></div>'; }).join('');
    var bests = CATS.map(function (c) { var b = bestOf(c.id), mx = Math.max(1, Math.min(qCount(c.id), MAXQ)) * 200; return '<div class="bb"><span>' + c.name + '</span><div class="trk"><i style="width:' + Math.min(100, b / mx * 100) + '%;background:' + c.c + '"></i></div><b>' + b + '</b></div>'; }).join('');
    var hist = S.results.slice().reverse().slice(0, 12).map(function (r) { var c = catOf(r.cat); return '<div class="hi"><div class="l"><b>' + c.name + ' · ' + r.score + ' pts</b><span>' + r.correct + '/' + r.total + ' correct · ' + r.acc + '% · ' + fmtDate(r.ts) + '</span></div><button class="btn alt sm" data-act="cert" data-id="' + r.id + '">Certificate</button></div>'; }).join('');
    return '<div class="pcard"><span class="av" style="background:' + CATS[u.hue % CATS.length].c + '" id="pav">' + esc(myName().charAt(0).toUpperCase()) + '</span><div class="info"><label for="pName" class="note" style="font-weight:700">Display name</label><input id="pName" maxlength="28" placeholder="Guest Player" value="' + esc(u.name) + '"><div class="sw" role="group" aria-label="Avatar colour">' + sw + '</div></div></div>' +
      '<div class="tiles"><div class="tile"><b>' + st.n + '</b><span>quizzes played</span></div><div class="tile"><b>' + st.pts + '</b><span>total points</span></div><div class="tile"><b>' + st.acc + '%</b><span>average accuracy</span></div><div class="tile"><b>' + st.streak + '</b><span>best streak</span></div></div>' +
      '<h2 class="sec">Badges</h2><div class="badges">' + bd + '</div>' +
      '<h2 class="sec">Best score by category</h2><div class="bests">' + bests + '</div>' +
      '<h2 class="sec">Recent quizzes</h2>' + (hist ? '<div class="hist">' + hist + '</div>' : '<div class="empty">Your quiz history and certificates will show up here after your first quiz.</div>');
  }
  function openCert(id) {
    var r = S.results.filter(function (x) { return x.id === id; })[0]; if (!r) return;
    shownCert = Object.assign({}, r, { name: myName() });
    $('#modal').innerHTML = '<div class="modal" data-act="closeModal"><div role="dialog" aria-label="Certificate"><div class="acts" style="justify-content:space-between"><b style="font:800 1.2rem var(--fd)">Certificate</b><button class="btn alt sm" data-act="closeModal">Close</button></div>' + certBlock(shownCert, 'm') + '</div></div>';
    paintCert(shownCert, '#mImg', '#mDl');
  }

  /* ---------- render + events ---------- */
  function render() {
    drawNav();
    var m = $('#main');
    if (view === 'quiz' && Q) { m.innerHTML = vQuiz(); }
    else if (view === 'result' && R) { m.innerHTML = vResult(); paintCert(R, '#cImg', '#cDl'); }
    else if (view === 'board') { m.innerHTML = vBoard(); }
    else if (view === 'manage') { m.innerHTML = vManage(); drawForm(); drawList(); }
    else if (view === 'profile') { m.innerHTML = vProfile(); }
    else { view = 'home'; m.innerHTML = vHome(); }
  }
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-act]'); if (!t) return;
    if (t.classList.contains('modal') && e.target !== t) return;
    var a = t.getAttribute('data-act');
    if (a === 'nav') go(t.getAttribute('data-v'));
    else if (a === 'play') startQuiz(t.getAttribute('data-c'));
    else if (a === 'ans') answer(+t.getAttribute('data-i'));
    else if (a === 'next') nextQ();
    else if (a === 'quit') go('home');
    else if (a === 'tab') { BC = t.getAttribute('data-c'); render(); }
    else if (a === 'add') { M.edit = 'new'; drawForm(); }
    else if (a === 'edit') { M.edit = t.getAttribute('data-id'); drawForm(); window.scrollTo(0, 0); }
    else if (a === 'cancel') { M.edit = null; drawForm(); }
    else if (a === 'del') {
      var id = t.getAttribute('data-id');
      if (armed === id) { S.qs = S.qs.filter(function (q) { return q.id !== id; }); armed = null; save(); toast('Question deleted'); render(); }
      else { armed = id; drawList(); setTimeout(function () { if (armed === id) { armed = null; if (view === 'manage') drawList(); } }, 3000); }
    }
    else if (a === 'reset') {
      if (armed === 'reset') { S.qs = seedQs(); armed = null; save(); toast('Default questions restored'); render(); }
      else { armed = 'reset'; t.textContent = 'Sure? Restore defaults'; setTimeout(function () { if (armed === 'reset') { armed = null; var b = $('#resetBtn'); if (b) b.textContent = 'Restore default questions'; } }, 3000); }
    }
    else if (a === 'hue') { S.user.hue = +t.getAttribute('data-h'); save(); render(); }
    else if (a === 'cert') openCert(t.getAttribute('data-id'));
    else if (a === 'closeModal') { $('#modal').innerHTML = ''; }
    else if (a === 'theme') {
      var cur = document.documentElement.getAttribute('data-theme') || (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var nx = cur === 'dark' ? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', nx); S.theme = nx; save();
    }
  });
  document.addEventListener('input', function (e) {
    var id = e.target.id;
    if (id === 'nameIn') { S.user.name = e.target.value; save(); }
    else if (id === 'pName') { S.user.name = e.target.value; save(); var av = $('#pav'); if (av) av.textContent = myName().charAt(0).toUpperCase(); }
    else if (id === 'certName' && R) { var v = e.target.value.trim() || 'Guest Player'; R.name = v; S.user.name = e.target.value; save(); clearTimeout(certTimer); certTimer = setTimeout(function () { paintCert(R, '#cImg', '#cDl'); }, 250); }
    else if (id === 'mSearch') { M.q = e.target.value; drawList(); }
  });
  document.addEventListener('change', function (e) { if (e.target.id === 'mCat') { M.cat = e.target.value; drawList(); } });
  document.addEventListener('submit', function (e) { if (e.target.id === 'qForm') { e.preventDefault(); saveForm(); } });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && $('#modal').innerHTML) { $('#modal').innerHTML = ''; return; }
    if (view !== 'quiz' || !Q) return;
    var tag = (e.target.tagName || '').toLowerCase(); if (tag === 'input' || tag === 'textarea') return;
    if (!Q.locked && /^[1-4]$/.test(e.key)) { var i = +e.key - 1; if (Q.list[Q.i].o[i]) { answer(i); } }
    else if (Q.locked && e.key === 'Enter') { var nb = document.querySelector('[data-act="next"]'); if (nb && document.activeElement !== nb) { e.preventDefault(); nextQ(); } }
  });
  window.addEventListener('hashchange', function () { var h = location.hash.replace('#', ''); if (['home', 'board', 'manage', 'profile'].indexOf(h) > -1 && h !== view) { stopTimer(); view = h; Q = null; render(); } });
  var h0 = location.hash.replace('#', ''); if (['home', 'board', 'manage', 'profile'].indexOf(h0) > -1) view = h0;
  render();
})();
