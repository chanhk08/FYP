/**
 * TeachKit prototype
 * Hierarchy: Course → Section → Sessions (one list, all View)
 * Chat: type anything → scripted replies
 */

const SCREENS = [
  "role-pick",
  "navigator",
  "create-course",
  "create-section",
  "create-session",
  "home",
  "teacher-prep",
  "student-join",
  "student-preclass-entry",
  "student-preclass",
  "teacher-insight",
  "record-detail",
  "student-lobby",
  "student-poll",
  "student-qa",
  "student-canvas",
  "student-wordcloud",
  "student-quiz",
  "student-auto-wait",
  "student-group-manual",
  "student-chat",
  "teacher-live",
  "teacher-scan",
];

const COURSES = {
  ee3001: {
    code: "EE3001",
    title: "Feedback Control",
    sections: {
      L01: {
        label: "L01",
        time: "14:30",
        totalStudents: 42,
        description: "Mon · FJ304",
        meta: "Mon 14:30 · FJ304 · 42 students",
        currentWeek: 4,
        weeks: [
          { week: 1, topic: "Intro & system models", when: "Mon 1 Sep · 14:30–16:20", status: "done" },
          { week: 2, topic: "Transfer functions", when: "Mon 8 Sep · 14:30–16:20", status: "done" },
          { week: 3, topic: "Stability basics", when: "Mon 15 Sep · 14:30–16:20", status: "done" },
          { week: 4, topic: "Gain, overshoot & oscillation", when: "Mon 22 Sep · 14:30–16:20", status: "today" },
          { week: 5, topic: "PID design sketch", when: "Mon 29 Sep · 14:30–16:20", status: "soon" },
        ],
        records: [
          {
            week: 4,
            title: "Week 4 · Gain, overshoot & oscillation",
            date: "22 Sep 2026",
            pre: "68% completed thinking Q",
            poll: "In progress",
            groups: "10 groups · live",
            notes: "Session in progress — gain vs oscillation still the main split.",
            insight: {
              q: "Why might high proportional gain cause oscillation?",
              pill: "68% · n=42",
              main: "62% — fast response over-corrects and rings",
              miss: ["Higher gain always more accurate", "Oscillation only from sensor noise"],
              dis: "Lower gain vs add derivative action",
              fuzzy: "Stability margin vs “looked fine in a short demo”",
            },
          },
          {
            week: 3,
            title: "Week 3 · Stability basics",
            date: "15 Sep 2026",
            pre: "74% completed thinking Q",
            poll: "91% responded",
            groups: "10 groups · 2 amber · 1 red",
            notes: "L01 still fuzzy on damping.",
            insight: {
              q: "What does ‘stable’ mean for a closed-loop step response?",
              pill: "74% · n=40",
              main: "Settles without growing oscillations",
              miss: ["Stable = never overshoots"],
              dis: "Whether small ringing is OK",
              fuzzy: "Margin vs absolute stability",
            },
          },
          {
            week: 2,
            title: "Week 2 · Transfer functions",
            date: "8 Sep 2026",
            pre: "81% completed",
            poll: "88% responded",
            groups: "10 groups · 1 amber",
            notes: "Pole-zero algebra slips.",
            insight: {
              q: "What does a RHP pole imply?",
              pill: "81% · n=39",
              main: "Unstable / growing response",
              miss: ["Always means faster"],
              dis: "How to spot from a sketch",
              fuzzy: "Zero vs pole",
            },
          },
        ],
      },
      L02: {
        label: "L02",
        time: "09:30",
        totalStudents: 38,
        description: "Tue · FJ304",
        meta: "Tue 09:30 · FJ304 · 38 students",
        currentWeek: 4,
        weeks: [
          { week: 1, topic: "Intro & system models", when: "Tue 2 Sep · 09:30–11:20", status: "done" },
          { week: 2, topic: "Transfer functions", when: "Tue 9 Sep · 09:30–11:20", status: "done" },
          { week: 3, topic: "Stability basics", when: "Tue 16 Sep · 09:30–11:20", status: "done" },
          { week: 4, topic: "Gain, overshoot & oscillation", when: "Tue 23 Sep · 09:30–11:20", status: "today" },
          { week: 5, topic: "PID design sketch", when: "Tue 30 Sep · 09:30–11:20", status: "soon" },
        ],
        records: [
          {
            week: 4,
            title: "Week 4 · Gain, overshoot & oscillation",
            date: "23 Sep 2026",
            pre: "61% completed thinking Q",
            poll: "In progress",
            groups: "9 groups · live",
            notes: "L02 session in progress.",
            insight: {
              q: "Why might high proportional gain cause oscillation?",
              pill: "61% · n=36",
              main: "Over-correction / ringing",
              miss: ["Higher gain always better"],
              dis: "Gain vs derivative",
              fuzzy: "Margins in a short demo",
            },
          },
          {
            week: 3,
            title: "Week 3 · Stability basics",
            date: "16 Sep 2026",
            pre: "70% completed thinking Q",
            poll: "86% responded",
            groups: "9 groups · 1 red",
            notes: "L02 slower on pre-class completion.",
            insight: {
              q: "What does ‘stable’ mean for a closed-loop step response?",
              pill: "70% · n=35",
              main: "Does not diverge",
              miss: ["Stable = fast only"],
              dis: "Ringing acceptable?",
              fuzzy: "Margins",
            },
          },
        ],
      },
    },
  },
  ee2004: {
    code: "EE2004",
    title: "Circuit Fundamentals",
    sections: {
      L01: {
        label: "L01",
        time: "09:30",
        totalStudents: 68,
        description: "Wed · TU201",
        meta: "Wed 09:30 · TU201 · 68 students",
        currentWeek: 3,
        weeks: [
          { week: 1, topic: "KCL / KVL", when: "Wed 3 Sep · 09:30–11:20", status: "done" },
          { week: 2, topic: "Nodal analysis", when: "Wed 10 Sep · 09:30–11:20", status: "done" },
          { week: 3, topic: "Thevenin / Norton", when: "Wed 17 Sep · 09:30–11:20", status: "today" },
          { week: 4, topic: "RC transients", when: "Wed 24 Sep · 09:30–11:20", status: "soon" },
        ],
        records: [
          {
            week: 2,
            title: "Week 2 · Nodal analysis",
            date: "10 Sep 2026",
            pre: "70% completed",
            poll: "85% responded",
            groups: "14 groups · 3 amber",
            notes: "Sign errors on current sources.",
            insight: {
              q: "When do you write a supernode equation?",
              pill: "70% · n=61",
              main: "Voltage source between two non-reference nodes",
              miss: ["Always for every voltage source"],
              dis: "Reference node choice",
              fuzzy: "Dependent sources",
            },
          },
        ],
      },
    },
  },
  eng1003: {
    code: "ENG1003",
    title: "Freshman Seminar",
    sections: {
      S01: {
        label: "S01",
        time: "11:00",
        totalStudents: 120,
        description: "Fri · Online",
        meta: "Fri 11:00 · Online · 120 students",
        currentWeek: 2,
        weeks: [
          { week: 1, topic: "Team roles", when: "Fri 5 Sep · 11:00–12:50", status: "done" },
          { week: 2, topic: "Project briefing", when: "Fri 12 Sep · 11:00–12:50", status: "today" },
          { week: 3, topic: "Pitch rehearsal", when: "Fri 19 Sep · 11:00–12:50", status: "soon" },
        ],
        records: [
          {
            week: 1,
            title: "Week 1 · Team roles",
            date: "5 Sep 2026",
            pre: "90% completed",
            poll: "96% responded",
            groups: "24 groups",
            notes: "Keep groups of 5.",
            insight: {
              q: "Which team role is hardest for you?",
              pill: "90% · n=108",
              main: "Facilitator / timekeeper",
              miss: [],
              dis: "Leader vs coordinator",
              fuzzy: "How roles rotate",
            },
          },
        ],
      },
    },
  },
};

const SCRIPT = {
  preclass: {
    open: [
      {
        role: "bot",
        who: "AI tutor (mock)",
        text: "Skim slides 4–6. In your own words — why might high proportional gain cause oscillation? (Type anything.)",
      },
    ],
    replies: [
      {
        role: "bot",
        who: "AI tutor (mock)",
        text: "Got it — whatever you wrote counts as an attempt. Follow-up: how does that link to overshoot / over-correcting?",
      },
      {
        role: "bot",
        who: "AI tutor (mock)",
        text: "Keep: you engaged the trade-off. Improve: name the error→large control signal idea. Next: send any text as your final stance.",
      },
      {
        role: "bot",
        who: "AI tutor (mock)",
        text: "Final stance captured (anonymous). It will feed the class insight card.",
      },
    ],
  },
  group: {
    open: [
      {
        role: "bot",
        who: "AI facilitator (mock)",
        text: "Teacher topic: gain–oscillation trade-off. Use slides 4–6. Aim for one shared sentence. (Type anything to continue the demo.)",
      },
      { role: "peer", who: "Alex", text: "I think high gain reacts too hard to error." },
      { role: "peer", who: "Sam", text: "Like oversteering a car — see slide 5." },
    ],
    replies: [
      { role: "peer", who: "Jamie", text: "btw who’s free for dinner after lecture lol" },
      {
        role: "bot",
        who: "AI facilitator (mock)",
        text: "[Pull back] Dinner later 🙂 Back to the teacher topic: why can high Kp cause oscillation? One shared sentence.",
      },
      {
        role: "bot",
        who: "AI facilitator (mock)",
        text: "[Respond] Nice — you’re linking large control action → overshoot. Can the group name the flip-sign step from slide 6?",
      },
      {
        role: "bot",
        who: "AI facilitator (mock)",
        text: "[Waiting] When the teacher ends discussion, I’ll post a summary for this room. Keep refining your sentence.",
      },
    ],
  },
};

const GROUP_SUMMARIES = [
  { id: "G1", text: "High Kp over-corrects error and can ring if damping is weak." },
  { id: "G2", text: "Fast response vs stability — oscillation from repeated overshoot." },
  { id: "G3", text: "(Quiet group) Partial: gain amplifies error; unsure about ringing." },
  { id: "G4", text: "Had off-topic stretch; after nudge: oversteer analogy for overshoot." },
  { id: "G5", text: "Error → large u → past setpoint → opposite error → oscillate." },
  { id: "G6", text: "Shared sentence: high proportional gain can oscillate because strong corrections overshoot and then reverse." },
];

const PRECLASS_QUESTIONS = [
  {
    id: "q1",
    label: "Q1",
    slides: "Slides 4–6",
    prompt: "Why might high proportional gain cause oscillation?",
    open: "Look at the slides on the left (or above on phone). In your own words — why might high proportional gain cause oscillation?",
    replies: [
      "Got it. Follow-up: how does that link to overshoot / over-correcting?",
      "Keep the trade-off idea. Next: send any text as your final stance for Q1.",
      "Q1 final stance saved. Switch to Q2 when ready (or stay here).",
    ],
    deck: [
      {
        page: 4,
        title: "Proportional gain Kp",
        body: "Control u = Kp · e\nLarger Kp → stronger reaction to error\nUseful for faster response — but not free.",
        footer: "EE3001 · Week 4",
      },
      {
        page: 5,
        title: "Overshoot & ringing",
        body: "Too aggressive a correction can pass the setpoint,\nthen reverse, then pass again → ringing.\nThink: oversteering a car on a winding road.",
        footer: "EE3001 · Week 4",
      },
      {
        page: 6,
        title: "Why high Kp can oscillate",
        body: "1. Error appears → large control signal\n2. Plant overshoots the target\n3. Error flips sign → large opposite signal\n→ sustained oscillation if damping is weak",
        footer: "EE3001 · Week 4",
      },
    ],
  },
  {
    id: "q2",
    label: "Q2",
    slides: "Slides 7–8",
    prompt: "Give one real-world example where overshoot is costly.",
    open: "From the slides here: give one real-world example where overshoot is costly.",
    replies: [
      "Nice direction. What makes the overshoot costly in that example?",
      "Send any text as your final stance for Q2.",
      "Q2 saved. You can revisit Q1 anytime, or continue to class.",
    ],
    deck: [
      {
        page: 7,
        title: "Overshoot in the real world",
        body: "Overshoot = going past the desired value\nbefore settling.\nSometimes harmless — sometimes expensive or unsafe.",
        footer: "EE3001 · Week 4",
      },
      {
        page: 8,
        title: "Where overshoot hurts",
        body: "• Elevator cabin past floor level\n• Robot arm past a fragile part\n• Drug infusion past safe dose band\nPick one domain and explain the cost.",
        footer: "EE3001 · Week 4",
      },
    ],
  },
];

let preclassQIndex = 0;
let preclassTurns = {};
let slideIndex = 0;
let groupSlideIndex = 0;
const turns = { group: 0 };

/** In-class group discussion: same linked slides as the live prompt */
const GROUP_DISCUSSION = {
  slides: "Slides 4–6",
  deck: [
    {
      page: 4,
      title: "Proportional gain Kp",
      body: "Control u = Kp · e\nLarger Kp → stronger reaction to error\nUseful for faster response — but not free.",
      footer: "EE3001 · Week 4 · Group discussion",
    },
    {
      page: 5,
      title: "Overshoot & ringing",
      body: "Too aggressive a correction can pass the setpoint,\nthen reverse, then pass again → ringing.\nThink: oversteering a car on a winding road.",
      footer: "EE3001 · Week 4 · Group discussion",
    },
    {
      page: 6,
      title: "Why high Kp can oscillate",
      body: "1. Error appears → large control signal\n2. Plant overshoots the target\n3. Error flips sign → large opposite signal\n→ sustained oscillation if damping is weak",
      footer: "EE3001 · Week 4 · Group discussion",
    },
  ],
};

function renderSlideStage(deck, index, ids) {
  const stage = document.getElementById(ids.stage);
  const label = document.getElementById(ids.page);
  const prev = document.getElementById(ids.prev);
  const next = document.getElementById(ids.next);
  if (!stage || !deck?.length) return 0;

  const i = Math.max(0, Math.min(index, deck.length - 1));
  const s = deck[i];
  const firstPage = deck[0].page;
  const lastPage = deck[deck.length - 1].page;

  stage.innerHTML = `
    <article class="slide-card">
      <p class="slide-kicker">Slide ${s.page}</p>
      <h2>${escapeHtml(s.title)}</h2>
      <pre class="slide-body">${escapeHtml(s.body)}</pre>
      <footer>${escapeHtml(s.footer)}</footer>
    </article>`;

  if (label) label.textContent = `${s.page} · ${firstPage}–${lastPage}`;
  if (prev) prev.disabled = i <= 0;
  if (next) next.disabled = i >= deck.length - 1;
  return i;
}

const PRE_SLIDE_IDS = {
  stage: "slide-stage",
  page: "slide-page-label",
  prev: "slide-prev",
  next: "slide-next",
};
const GROUP_SLIDE_IDS = {
  stage: "group-slide-stage",
  page: "group-slide-page-label",
  prev: "group-slide-prev",
  next: "group-slide-next",
};

function bindPreclassMulti() {
  const log = document.getElementById("log-pre");
  const form = document.querySelector("form[data-script=preclass]");
  const pills = document.getElementById("preq-pills");
  if (!log || !form || !pills) return;

  function showQuestion(i) {
    preclassQIndex = i;
    slideIndex = 0;
    if (preclassTurns[i] == null) preclassTurns[i] = 0;
    const q = PRECLASS_QUESTIONS[i];
    document.getElementById("preq-slides").textContent = q.slides;
    document.getElementById("preq-prompt").textContent = q.prompt;
    pills.querySelectorAll(".q-pill").forEach((p) => {
      p.classList.toggle("on", Number(p.dataset.q) === i);
    });
    slideIndex = renderSlideStage(q.deck, slideIndex, PRE_SLIDE_IDS);
    log.innerHTML = "";
    bubble(log, { role: "bot", who: "AI tutor (mock)", text: q.open });
  }

  pills.querySelectorAll(".q-pill").forEach((p) => {
    p.addEventListener("click", () => showQuestion(Number(p.dataset.q)));
  });

  document.getElementById("slide-prev")?.addEventListener("click", () => {
    slideIndex = renderSlideStage(
      PRECLASS_QUESTIONS[preclassQIndex].deck,
      slideIndex - 1,
      PRE_SLIDE_IDS
    );
  });
  document.getElementById("slide-next")?.addEventListener("click", () => {
    slideIndex = renderSlideStage(
      PRECLASS_QUESTIONS[preclassQIndex].deck,
      slideIndex + 1,
      PRE_SLIDE_IDS
    );
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.msg;
    const typed = input.value.trim() || "(empty — still continues)";
    input.value = "";
    bubble(log, { role: "user", who: "You", text: typed });
    const q = PRECLASS_QUESTIONS[preclassQIndex];
    const t = preclassTurns[preclassQIndex] || 0;
    const reply = q.replies[Math.min(t, q.replies.length - 1)];
    preclassTurns[preclassQIndex] = t + 1;
    window.setTimeout(() => {
      bubble(log, { role: "bot", who: "AI tutor (mock)", text: reply });
    }, 400);
  });

  showQuestion(0);
}

function bindGroupSlides() {
  const label = document.getElementById("group-slides-label");
  if (label) label.textContent = `Discussion ${GROUP_DISCUSSION.slides}`;
  groupSlideIndex = renderSlideStage(GROUP_DISCUSSION.deck, 0, GROUP_SLIDE_IDS);
  document.getElementById("group-slide-prev")?.addEventListener("click", () => {
    groupSlideIndex = renderSlideStage(
      GROUP_DISCUSSION.deck,
      groupSlideIndex - 1,
      GROUP_SLIDE_IDS
    );
  });
  document.getElementById("group-slide-next")?.addEventListener("click", () => {
    groupSlideIndex = renderSlideStage(
      GROUP_DISCUSSION.deck,
      groupSlideIndex + 1,
      GROUP_SLIDE_IDS
    );
  });
}
const root = document.getElementById("root");
const chip = document.getElementById("context-chip");

let state = {
  courseId: "ee3001",
  sectionId: "L01",
  viewingRecordWeek: null,
  student: null,
  groupJoinHow: "code",
  summarizeAll: false,
  prepLink: null,
  activities: {
    saved: false,
    items: [
      {
        id: "a1",
        type: "discussion",
        topic: "Gain–oscillation trade-off",
        question: "Why might high proportional gain cause oscillation?",
        slides: "4–6",
        ai: "",
      },
      {
        id: "a2",
        type: "discussion",
        topic: "Overshoot in practice",
        question: "Give one real-world example where overshoot is costly.",
        slides: "7–8",
        ai: "",
      },
      {
        id: "a3",
        type: "poll",
        question: "Which trade-off worries you most for high gain?",
        options: ["Oscillation / ringing", "Overshoot", "Sensor noise"],
        slides: "4–6",
      },
    ],
    activeId: null,
  },
  groupsStarted: false,
  pollStarted: false,
  pollVote: null,
  qaStarted: false,
  canvasStarted: false,
  wordcloudStarted: false,
  quizStarted: false,
  qaPosts: [],
  canvasNotes: [],
  wordcloudWords: [],
  quizAnswer: null,
  broadcasts: [],
  _livePickKey: null,
  _activityModalType: "discussion",
  aiBotLog: [],
  _aiBotFile: null,
  _aiCheckOpen: false,
};

function course() {
  return COURSES[state.courseId];
}

function section() {
  const c = course();
  if (!c.sections[state.sectionId]) {
    state.sectionId = Object.keys(c.sections)[0];
  }
  return c.sections[state.sectionId];
}

function sectionMetaLine(sec) {
  if (!sec) return "";
  if (sec.time || sec.totalStudents != null || sec.description) {
    const bits = [];
    if (sec.time) bits.push(sec.time);
    if (sec.totalStudents != null && sec.totalStudents !== "") {
      bits.push(`${sec.totalStudents} students`);
    }
    if (sec.description) bits.push(sec.description);
    return bits.join(" · ") || sec.meta || "";
  }
  return sec.meta || "";
}

function sectionTimeValue(sec) {
  if (sec?.time) return sec.time;
  const m = String(sec?.meta || "").match(/\b(\d{1,2}):(\d{2})\b/);
  if (!m) return "14:30";
  return `${m[1].padStart(2, "0")}:${m[2]}`;
}

function formatSessionWhen(dateStr, timeStr) {
  const d = new Date(`${dateStr}T12:00:00`);
  if (Number.isNaN(d.getTime())) return `${dateStr} · ${timeStr}`;
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]} · ${timeStr}`;
}

function contextText() {
  const c = course();
  const s = section();
  return `${c.code} ${s.label} · Week ${s.currentWeek}`;
}

function studentContextText(kind) {
  const c = course();
  const s = section();
  if (kind === "preclass") return `Pre-class · ${c.code}`;
  return `In class · ${c.code} ${s.label} · CTRL-4F`;
}

function updateChip(name = location.hash.replace("#", "") || "role-pick") {
  // Context chip removed from topbar (cluttered next to Teacher/Student nav)
  if (!chip) return;
  chip.hidden = true;
  chip.classList.add("is-hidden");
  void name;
}

const TEACHER_SCREENS = new Set([
  "navigator",
  "create-course",
  "create-section",
  "create-session",
  "home",
  "teacher-prep",
  "teacher-live",
  "teacher-scan",
  "teacher-insight",
  "record-detail",
]);

const STUDENT_CHAT_SCREENS = new Set([
  "student-join",
  "student-lobby",
  "student-poll",
  "student-qa",
  "student-canvas",
  "student-wordcloud",
  "student-quiz",
  "student-auto-wait",
  "student-group-manual",
  "student-chat",
]);

const STUDENT_PRECLASS_SCREENS = new Set([
  "student-preclass-entry",
  "student-preclass",
]);

const STUDENT_SCREENS = new Set([
  ...STUDENT_CHAT_SCREENS,
  ...STUDENT_PRECLASS_SCREENS,
]);

function shellFor(name) {
  if (TEACHER_SCREENS.has(name)) return "teacher";
  if (STUDENT_SCREENS.has(name)) return "student";
  return "gate";
}

function syncShell(name) {
  const shell = shellFor(name);
  document.body.dataset.shell = shell;

  const brand = document.getElementById("brand");
  const brandTitle = document.getElementById("brand-title");
  const brandSub = document.getElementById("brand-sub");
  const rolePill = document.getElementById("shell-role-pill");
  const nav = document.getElementById("top-nav");
  const exitFab = document.getElementById("btn-exit-shell");

  brand?.removeAttribute("data-go");

  if (shell === "gate") {
    brand?.setAttribute("data-go", "role-pick");
    if (brandTitle) brandTitle.textContent = "TeachKit";
    if (brandSub) brandSub.textContent = "Choose an interface";
    if (rolePill) {
      rolePill.hidden = true;
      rolePill.textContent = "";
    }
    nav.innerHTML = "";
    exitFab?.classList.add("is-hidden");
    syncAiCheckDock(name);
    syncMobileFab(name);
    return;
  }

  if (shell === "teacher") {
    brand?.setAttribute("data-go", "navigator");
    if (brandTitle) brandTitle.textContent = "TeachKit";
    if (brandSub) brandSub.textContent = "Teacher";
    if (rolePill) {
      rolePill.hidden = false;
      rolePill.textContent = "Teacher";
    }
  } else {
    brand?.setAttribute("data-go", "student-join");
    if (brandTitle) brandTitle.textContent = "TeachKit";
    if (brandSub) brandSub.textContent = "Student";
    if (rolePill) {
      rolePill.hidden = false;
      rolePill.textContent = "Student";
    }
  }

  // Top-right IA after role pick — labels are not controls
    nav.innerHTML = `
    <div class="nav-cluster" data-side="teacher">
      <span class="nav-group">Teacher</span>
      <div class="nav-tabs" role="group" aria-label="Teacher">
        <button type="button" data-go="navigator">Workspace</button>
        <button type="button" data-go="teacher-live">Live</button>
      </div>
    </div>
    <div class="nav-cluster" data-side="student">
      <span class="nav-group">Student</span>
      <div class="nav-tabs" role="group" aria-label="Student">
        <button type="button" data-go="student-preclass-entry">Pre-class</button>
        <button type="button" data-go="student-join">In-class</button>
      </div>
    </div>`;

  let active = "navigator";
  if (name === "teacher-live" || name === "teacher-scan") active = "teacher-live";
  else if (STUDENT_PRECLASS_SCREENS.has(name)) active = "student-preclass-entry";
  else if (STUDENT_CHAT_SCREENS.has(name)) active = "student-join";
  else if (TEACHER_SCREENS.has(name)) active = "navigator";

  nav.querySelectorAll("[data-go]").forEach((btn) => {
    btn.classList.toggle("on", btn.getAttribute("data-go") === active);
  });
  nav.querySelector('[data-side="teacher"]')?.classList.toggle(
    "active-side",
    TEACHER_SCREENS.has(name)
  );
  nav.querySelector('[data-side="student"]')?.classList.toggle(
    "active-side",
    STUDENT_SCREENS.has(name)
  );

  exitFab?.classList.toggle(
    "is-hidden",
    document.body.classList.contains("mobile-ui")
  );
  syncAiCheckDock(name);
  syncMobileFab(name);
}

function syncAiCheckDock(name) {
  const dock = document.getElementById("ai-check-dock");
  if (!dock) return;
  const show = TEACHER_SCREENS.has(name);
  dock.classList.toggle("is-hidden", !show);
  dock.hidden = !show;
  document.body.classList.toggle("ai-dock-on", show);
  if (!show) setAiCheckOpen(false);
}

function setAiCheckOpen(open) {
  const panel = document.getElementById("ai-check-bot");
  const toggle = document.getElementById("btn-ai-check-toggle");
  if (panel) {
    panel.classList.toggle("is-hidden", !open);
    panel.hidden = !open;
  }
  toggle?.setAttribute("aria-expanded", open ? "true" : "false");
  state._aiCheckOpen = open;
  if (open) renderAiCheckLog();
}

function syncMobileFab(name) {
  const fab = document.getElementById("btn-mobile-toggle");
  if (!fab) return;
  const show = STUDENT_SCREENS.has(name);
  fab.classList.toggle("is-hidden", !show);
  if (!show && document.body.classList.contains("mobile-ui")) {
    setMobileUi(false);
  } else {
    updateMobileFabLabel();
  }
}

function updateMobileFabLabel() {
  const fab = document.getElementById("btn-mobile-toggle");
  if (!fab) return;
  const on = document.body.classList.contains("mobile-ui");
  fab.textContent = on ? "Desktop view" : "Phone view";
  fab.setAttribute("aria-pressed", on ? "true" : "false");
  fab.classList.toggle("on", on);
  // Phone chrome already tight — don't stack a second bottom control
  document.getElementById("btn-exit-shell")?.classList.toggle(
    "is-hidden",
    on || document.body.dataset.shell === "gate"
  );
}

function setMobileUi(on) {
  document.body.classList.toggle("mobile-ui", on);
  updateMobileFabLabel();
}

function bindMobileToggle() {
  document.getElementById("btn-mobile-toggle")?.addEventListener("click", () => {
    setMobileUi(!document.body.classList.contains("mobile-ui"));
  });
}

function go(name) {
  if (!SCREENS.includes(name)) name = "role-pick";
  const tpl = document.getElementById(`tpl-${name}`);
  root.innerHTML = "";
  root.appendChild(tpl.content.cloneNode(true));
  location.hash = name;
  updateChip(name);
  syncShell(name);
  bindScreen(name);
}

function bubble(log, { role, who, text }) {
  const el = document.createElement("div");
  const kind =
    role === "user"
      ? "user"
      : role === "peer"
        ? "peer"
        : role === "teacher"
          ? "teacher"
          : "bot";
  el.className = `bubble ${kind}`;
  const avatar =
    kind === "bot"
      ? `<span class="bubble-avatar ai" aria-hidden="true"></span>`
      : kind === "peer"
        ? `<span class="bubble-avatar peer" aria-hidden="true"></span>`
        : kind === "teacher"
          ? `<span class="bubble-avatar teacher" aria-hidden="true"></span>`
          : "";
  el.innerHTML = `${avatar}<div class="bubble-body"><span class="who">${escapeHtml(who)}</span>${escapeHtml(text)}</div>`;
  log.appendChild(el);
  log.scrollTop = log.scrollHeight;
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function bindScriptedChat(form, logId, key) {
  const log = document.getElementById(logId);
  const conf = key === "group" ? buildGroupScript() : SCRIPT[key];
  if (!log || !form || !conf) return;
  turns[key] = 0;
  log.innerHTML = "";
  conf.open.forEach((m) => bubble(log, m));
  if (key === "group" && state.broadcasts?.length) {
    state.broadcasts.forEach((text) => {
      bubble(log, {
        role: "teacher",
        who: "Teacher · all rooms",
        text,
      });
    });
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.msg;
    const typed = input.value.trim() || "(empty — still continues)";
    input.value = "";
    bubble(log, { role: "user", who: "You", text: typed });
    const i = Math.min(turns[key], conf.replies.length - 1);
    turns[key] += 1;
    window.setTimeout(() => bubble(log, conf.replies[i]), 400);
  });
}

function renderBroadcastLog() {
  const log = document.getElementById("broadcast-log");
  if (!log) return;
  const items = state.broadcasts || [];
  if (!items.length) {
    log.hidden = true;
    log.innerHTML = "";
    return;
  }
  log.hidden = false;
  log.innerHTML = items
    .map(
      (text, i) =>
        `<div class="broadcast-item"><strong>Sent to all rooms · #${i + 1}</strong>${escapeHtml(text)}</div>`
    )
    .join("");
}

function broadcastToAllRooms(text) {
  const msg = String(text || "").trim();
  if (!msg || !state.groupsStarted) return false;
  if (!state.broadcasts) state.broadcasts = [];
  state.broadcasts.push(msg);

  const groupLog = document.getElementById("log-group");
  if (groupLog) {
    bubble(groupLog, {
      role: "teacher",
      who: "Teacher · all rooms",
      text: msg,
    });
    window.setTimeout(() => {
      bubble(groupLog, {
        role: "bot",
        who: "AI facilitator (mock)",
        text: `[Ack] Teacher broadcast received — I’ll nudge the group toward: ${msg}`,
      });
    }, 450);
  }

  renderBroadcastLog();
  const status = document.getElementById("broadcast-status");
  if (status) {
    status.hidden = false;
    window.setTimeout(() => {
      status.hidden = true;
    }, 1600);
  }
  return true;
}

function postGroupSummaryIfNeeded() {
  const log = document.getElementById("log-group");
  const banner = document.getElementById("group-summary-banner");
  if (!log || !state.summarizeAll) return;
  banner?.classList.remove("is-hidden");
  if (log.querySelector("[data-summary]")) return;
  const g6 = GROUP_SUMMARIES.find((g) => g.id === "G6");
  window.setTimeout(() => {
    bubble(log, {
      role: "bot",
      who: "AI facilitator (mock)",
      text: `[Teacher summary] ${g6?.text || "Discussion wrapped."}`,
    });
    const last = log.lastElementChild;
    if (last) last.dataset.summary = "1";
    if (banner) banner.textContent = "Summary posted for this room.";
  }, 600);
}

function renderAllSummaries() {
  const panel = document.getElementById("all-summaries");
  const grid = document.getElementById("summary-grid");
  const status = document.getElementById("summarize-status");
  if (!panel || !grid) return;
  panel.classList.remove("is-hidden");
  panel.hidden = false;
  if (status) status.hidden = false;
  grid.innerHTML = GROUP_SUMMARIES.map(
    (g) =>
      `<article class="summary-card"><strong>${g.id}</strong><p>${escapeHtml(g.text)}</p></article>`
  ).join("");
}

function defaultActivities() {
  return [
    {
      id: "a1",
      type: "discussion",
      topic: "Gain–oscillation trade-off",
      question: "Why might high proportional gain cause oscillation?",
      slides: "4–6",
      ai: "",
    },
    {
      id: "a2",
      type: "discussion",
      topic: "Overshoot in practice",
      question: "Give one real-world example where overshoot is costly.",
      slides: "7–8",
      ai: "",
    },
    {
      id: "a3",
      type: "poll",
      question: "Which trade-off worries you most for high gain?",
      options: ["Oscillation / ringing", "Overshoot", "Sensor noise"],
      slides: "4–6",
    },
  ];
}

/** Extensible catalog for prep / Live “add activity” pickers */
const ACTIVITY_TYPE_CATALOG = [
  {
    id: "discussion",
    label: "Discussion",
    hint: "Group chat with AI facilitator",
    prefix: "D",
    keyPrefix: "disc",
    blank: () => ({
      type: "discussion",
      topic: "",
      question: "",
      slides: "",
      ai: "",
    }),
  },
  {
    id: "poll",
    label: "Poll",
    hint: "Class-wide vote · live results",
    prefix: "P",
    keyPrefix: "poll",
    blank: () => ({
      type: "poll",
      question: "",
      options: ["Option A", "Option B"],
      slides: "",
    }),
  },
  {
    id: "qa",
    label: "Q&A",
    hint: "Anonymous board · upvote · moderate",
    prefix: "QA",
    keyPrefix: "qa",
    blank: () => ({
      type: "qa",
      prompt: "",
      anonymous: true,
      slides: "",
    }),
  },
  {
    id: "canvas",
    label: "Brainstorm canvas",
    hint: "Sticky notes · shared wall",
    prefix: "C",
    keyPrefix: "canvas",
    blank: () => ({
      type: "canvas",
      prompt: "",
      slides: "",
    }),
  },
  {
    id: "wordcloud",
    label: "Word cloud",
    hint: "One-word / short phrase · live cloud",
    prefix: "W",
    keyPrefix: "wordcloud",
    blank: () => ({
      type: "wordcloud",
      prompt: "",
      slides: "",
    }),
  },
  {
    id: "quiz",
    label: "Timed quiz",
    hint: "MCQ with countdown · points-ready",
    prefix: "QZ",
    keyPrefix: "quiz",
    blank: () => ({
      type: "quiz",
      question: "",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correct: 0,
      seconds: 30,
      slides: "",
    }),
  },
];

const CLASS_LIVE_KINDS = ["discussion", "poll", "qa", "canvas", "wordcloud", "quiz"];

function activityTypeById(id) {
  return ACTIVITY_TYPE_CATALOG.find((t) => t.id === id) || ACTIVITY_TYPE_CATALOG[0];
}

function ensureActivities() {
  if (!state.activities?.items?.length) {
    state.activities = {
      saved: Boolean(state.activities?.saved),
      items: defaultActivities(),
      activeId: state.activities?.activeId || null,
    };
  }
  return state.activities;
}

function activityList() {
  return ensureActivities().items;
}

function discussionList() {
  return activityList().filter((a) => a.type === "discussion");
}

function pollList() {
  return activityList().filter((a) => a.type === "poll");
}

function activitiesOfType(type) {
  return activityList().filter((a) => a.type === type);
}

function activityDetail(item) {
  if (!item) return "";
  return item.question || item.prompt || item.topic || "";
}

function activityPickList() {
  const counters = Object.fromEntries(ACTIVITY_TYPE_CATALOG.map((t) => [t.id, 0]));
  return activityList().map((item) => {
    const def = activityTypeById(item.type);
    counters[def.id] = (counters[def.id] || 0) + 1;
    const n = counters[def.id];
    return {
      key: `${def.keyPrefix}:${item.id}`,
      kind: def.id,
      id: item.id,
      label: `${def.prefix}${n} · ${def.label}`,
      detail: activityDetail(item),
    };
  });
}

function parseLivePickKey(key) {
  const raw = key || state._livePickKey || "";
  const [kindRaw, id] = raw.split(":");
  const kind =
    kindRaw === "disc" || kindRaw === "discussion"
      ? "discussion"
      : ACTIVITY_TYPE_CATALOG.some((t) => t.id === kindRaw || t.keyPrefix === kindRaw)
        ? ACTIVITY_TYPE_CATALOG.find((t) => t.id === kindRaw || t.keyPrefix === kindRaw).id
        : null;
  if (kind && id) return { kind, id };
  const first = activityPickList()[0];
  return first
    ? { kind: first.kind, id: first.id }
    : { kind: "discussion", id: "a1" };
}

function clearLiveOpenFlags() {
  state.groupsStarted = false;
  state.pollStarted = false;
  state.qaStarted = false;
  state.canvasStarted = false;
  state.wordcloudStarted = false;
  state.quizStarted = false;
}

function openLiveKind(kind) {
  clearLiveOpenFlags();
  if (kind === "discussion") state.groupsStarted = true;
  else if (kind === "poll") state.pollStarted = true;
  else if (kind === "qa") state.qaStarted = true;
  else if (kind === "canvas") state.canvasStarted = true;
  else if (kind === "wordcloud") state.wordcloudStarted = true;
  else if (kind === "quiz") state.quizStarted = true;
}

function liveOpenKind() {
  if (state.groupsStarted) return "discussion";
  if (state.pollStarted) return "poll";
  if (state.qaStarted) return "qa";
  if (state.canvasStarted) return "canvas";
  if (state.wordcloudStarted) return "wordcloud";
  if (state.quizStarted) return "quiz";
  return null;
}

function discussionOrDefault() {
  const items = discussionList();
  const pick = parseLivePickKey();
  const active =
    (pick.kind === "discussion" && items.find((d) => d.id === pick.id)) ||
    items.find((d) => d.id === state.activities?.activeId) ||
    items[0];
  return {
    saved: Boolean(state.activities?.saved),
    topic: active?.topic || "",
    question: active?.question || "",
    slides: active?.slides || "",
    goal: active?.ai || "",
    id: active?.id || "a1",
  };
}

function pollOrDefault() {
  const items = pollList();
  const pick = parseLivePickKey();
  const active =
    (pick.kind === "poll" && items.find((p) => p.id === pick.id)) ||
    items.find((p) => p.id === state.activities?.activeId) ||
    items[0];
  return {
    saved: Boolean(state.activities?.saved),
    question: active?.question || "",
    options: active?.options?.length ? active.options : ["A", "B", "C"],
    slides: active?.slides || "",
    id: active?.id || "a3",
  };
}

function qaOrDefault() {
  const items = activitiesOfType("qa");
  const pick = parseLivePickKey();
  const active =
    (pick.kind === "qa" && items.find((x) => x.id === pick.id)) ||
    items.find((x) => x.id === state.activities?.activeId) ||
    items[0];
  return {
    id: active?.id || "qa1",
    prompt: active?.prompt || "Ask anything about today’s topic",
    anonymous: active?.anonymous !== false,
    slides: active?.slides || "",
  };
}

function canvasOrDefault() {
  const items = activitiesOfType("canvas");
  const pick = parseLivePickKey();
  const active =
    (pick.kind === "canvas" && items.find((x) => x.id === pick.id)) ||
    items.find((x) => x.id === state.activities?.activeId) ||
    items[0];
  return {
    id: active?.id || "c1",
    prompt: active?.prompt || "Add one idea on a sticky note",
    slides: active?.slides || "",
  };
}

function wordcloudOrDefault() {
  const items = activitiesOfType("wordcloud");
  const pick = parseLivePickKey();
  const active =
    (pick.kind === "wordcloud" && items.find((x) => x.id === pick.id)) ||
    items.find((x) => x.id === state.activities?.activeId) ||
    items[0];
  return {
    id: active?.id || "w1",
    prompt: active?.prompt || "One word that captures the idea",
    slides: active?.slides || "",
  };
}

function quizOrDefault() {
  const items = activitiesOfType("quiz");
  const pick = parseLivePickKey();
  const active =
    (pick.kind === "quiz" && items.find((x) => x.id === pick.id)) ||
    items.find((x) => x.id === state.activities?.activeId) ||
    items[0];
  return {
    id: active?.id || "qz1",
    question: active?.question || "Quiz question",
    options: active?.options?.length ? active.options : ["A", "B", "C", "D"],
    correct: Number.isFinite(active?.correct) ? active.correct : 0,
    seconds: active?.seconds || 30,
    slides: active?.slides || "",
  };
}

function mockPollPercents(n) {
  const base = [42, 31, 18, 9, 6];
  const vals = base.slice(0, n);
  while (vals.length < n) vals.push(Math.max(4, 12 - vals.length));
  const sum = vals.reduce((a, b) => a + b, 0);
  return vals.map((v) => Math.round((v / sum) * 100));
}

function mockQaSeed() {
  return [
    { id: "q1", text: "Does higher gain always mean faster settling?", votes: 12, mine: false },
    { id: "q2", text: "How is ringing different from overshoot?", votes: 8, mine: false },
    { id: "q3", text: "Can we see a demo of derivative action?", votes: 5, mine: false },
  ];
}

function mockCanvasSeed() {
  return [
    { id: "n1", text: "Lower Kp a bit", who: "Alex", color: 0 },
    { id: "n2", text: "Add damping / Kd", who: "Sam", color: 1 },
    { id: "n3", text: "Check sensor noise first", who: "Jamie", color: 2 },
  ];
}

function mockWordcloudSeed() {
  return [
    { word: "overshoot", n: 14 },
    { word: "ringing", n: 11 },
    { word: "noise", n: 9 },
    { word: "damping", n: 7 },
    { word: "stability", n: 6 },
    { word: "margin", n: 4 },
    { word: "latency", n: 3 },
  ];
}

function buildGroupScript() {
  const d = discussionOrDefault();
  const slideBit = d.slides ? ` Use slides ${d.slides}.` : "";
  const instrBit = d.goal ? ` Teacher note to AI: ${d.goal}.` : "";
  return {
    open: [
      {
        role: "bot",
        who: "AI facilitator (mock)",
        text: `Teacher question: ${d.question}.${slideBit}${instrBit} (Type anything to continue the demo.)`,
      },
      { role: "peer", who: "Alex", text: "Let’s start from the slides / the question." },
      { role: "peer", who: "Sam", text: "I have a rough take — anyone else?" },
    ],
    replies: [
      { role: "peer", who: "Jamie", text: "btw who’s free for dinner after lecture lol" },
      {
        role: "bot",
        who: "AI facilitator (mock)",
        text: `[Pull back] Dinner later 🙂 Back to the teacher question: ${d.question}`,
      },
      {
        role: "bot",
        who: "AI facilitator (mock)",
        text: d.goal
          ? `[Respond] Noted. Also following teacher instructions: ${d.goal}`
          : `[Respond] Good direction. Can the group sharpen the answer to: ${d.question}?`,
      },
      {
        role: "bot",
        who: "AI facilitator (mock)",
        text: "[Waiting] When the teacher ends discussion, I’ll post a summary for this room.",
      },
    ],
  };
}

function setActivityModalOpen(open) {
  const modal = document.getElementById("activity-modal");
  if (!modal) return;
  modal.classList.toggle("is-hidden", !open);
  modal.hidden = !open;
}

function syncActivityModalType(type) {
  const def = activityTypeById(type);
  state._activityModalType = def.id;
  document.querySelectorAll("[data-activity-type]").forEach((btn) => {
    btn.classList.toggle("on", btn.getAttribute("data-activity-type") === def.id);
  });
  document.querySelectorAll("[data-modal-fields]").forEach((el) => {
    const show = el.getAttribute("data-modal-fields") === def.id;
    el.classList.toggle("is-hidden", !show);
    el.hidden = !show;
  });
}

function renderLivePhase() {
  const idle = document.getElementById("live-idle");
  const after = document.getElementById("live-after-groups");
  const pollRun = document.getElementById("live-poll-running");
  const qaRun = document.getElementById("live-qa-running");
  const canvasRun = document.getElementById("live-canvas-running");
  const wordRun = document.getElementById("live-wordcloud-running");
  const quizRun = document.getElementById("live-quiz-running");
  const health = document.getElementById("live-health");
  const healthHint = document.getElementById("health-locked-hint");
  const prepHint = document.getElementById("live-prep-hint");
  const pick = document.getElementById("live-activity-pick");

  const openKind = liveOpenKind();
  const discOn = openKind === "discussion";
  const pollOn = openKind === "poll";
  const busy = Boolean(openKind);
  const done = state.summarizeAll;
  const d = discussionOrDefault();
  const activities = activityPickList();

  if (idle) {
    idle.classList.toggle("is-hidden", busy);
    idle.hidden = busy;
  }
  if (after) {
    after.classList.toggle("is-hidden", !discOn);
    after.hidden = !discOn;
  }
  if (pollRun) {
    pollRun.classList.toggle("is-hidden", !pollOn);
    pollRun.hidden = !pollOn;
  }
  if (qaRun) {
    const on = openKind === "qa";
    qaRun.classList.toggle("is-hidden", !on);
    qaRun.hidden = !on;
    if (on) renderLiveQaBoard();
  }
  if (canvasRun) {
    const on = openKind === "canvas";
    canvasRun.classList.toggle("is-hidden", !on);
    canvasRun.hidden = !on;
    if (on) renderLiveCanvasBoard();
  }
  if (wordRun) {
    const on = openKind === "wordcloud";
    wordRun.classList.toggle("is-hidden", !on);
    wordRun.hidden = !on;
    if (on) renderLiveWordcloud();
  }
  if (quizRun) {
    const on = openKind === "quiz";
    quizRun.classList.toggle("is-hidden", !on);
    quizRun.hidden = !on;
    if (on) renderLiveQuizResults();
  }
  if (health) {
    health.classList.toggle("is-hidden", !discOn);
    health.hidden = !discOn;
  }
  if (healthHint) {
    healthHint.hidden = discOn;
    if (!discOn) {
      const labels = {
        poll: "投票進行中——組討論 health 暫停。",
        qa: "Q&A 進行中——組討論 health 暫停。",
        canvas: "Canvas 進行中——組討論 health 暫停。",
        wordcloud: "Word cloud 進行中——組討論 health 暫停。",
        quiz: "Quiz 進行中——組討論 health 暫停。",
      };
      healthHint.textContent = labels[openKind] || "開始 Discussion 之後先會有組狀態。";
    }
  }
  if (prepHint) {
    prepHint.hidden = Boolean(state.activities?.saved);
  }

  if (pick && !busy) {
    const selected =
      state._livePickKey ||
      activities[0]?.key ||
      "disc:d1";
    state._livePickKey = selected;
    pick.innerHTML = activities
      .map((item) => {
        const on = item.key === selected ? " on" : "";
        const kindLabel = activityTypeById(item.kind).label;
        return `<button type="button" class="disc-pick${on}" data-pick-key="${escapeHtml(item.key)}">
          <span class="act-kind">${escapeHtml(kindLabel)}</span>
          <strong>${escapeHtml(item.label)}</strong>
          <span>${escapeHtml(item.detail)}</span>
        </button>`;
      })
      .join("");
    pick.querySelectorAll("[data-pick-key]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state._livePickKey = btn.getAttribute("data-pick-key");
        renderLivePhase();
      });
    });
  }

  const topicRun = document.getElementById("live-topic-running");
  const qRun = document.getElementById("live-question-running");
  const aiRun = document.getElementById("live-ai-running");
  if (topicRun) topicRun.textContent = d.topic || "Discussion";
  if (qRun) qRun.textContent = d.question;
  if (aiRun) {
    aiRun.textContent = d.goal ? `AI instructions: ${d.goal}` : "";
    aiRun.hidden = !d.goal;
  }

  if (pollOn) renderLivePollResults();
  if (done) renderAllSummaries();
}

function renderLivePollResults() {
  const p = pollOrDefault();
  const qEl = document.getElementById("live-poll-question");
  const meta = document.getElementById("live-poll-meta");
  const box = document.getElementById("live-poll-results");
  if (qEl) qEl.textContent = p.question;
  if (meta) {
    meta.textContent = p.slides
      ? `Linked slides ${p.slides} · live responses (mock)`
      : "Live responses (mock)";
  }
  if (!box) return;
  const pcts = mockPollPercents(p.options.length);
  box.innerHTML = p.options
    .map(
      (opt, i) => `<div class="poll-bar">
        <div class="poll-bar-top"><strong>${escapeHtml(opt)}</strong><span>${pcts[i]}%</span></div>
        <div class="poll-bar-track"><div class="poll-bar-fill" style="width:${pcts[i]}%"></div></div>
      </div>`
    )
    .join("");
}

function renderLiveQaBoard() {
  const q = qaOrDefault();
  const promptEl = document.getElementById("live-qa-prompt");
  const meta = document.getElementById("live-qa-meta");
  const list = document.getElementById("live-qa-list");
  if (promptEl) promptEl.textContent = q.prompt;
  if (meta) {
    meta.textContent = [
      q.anonymous ? "Anonymous" : "Named",
      q.slides ? `slides ${q.slides}` : null,
      `${(state.qaPosts || []).length} questions`,
    ]
      .filter(Boolean)
      .join(" · ");
  }
  if (!list) return;
  const posts = [...(state.qaPosts || [])].sort((a, b) => b.votes - a.votes);
  list.innerHTML = posts.length
    ? posts
        .map(
          (p) => `<div class="qa-card">
            <p>${escapeHtml(p.text)}</p>
            <div class="qa-meta"><span>▲ ${p.votes}</span>${p.mine ? "<em>yours</em>" : ""}</div>
          </div>`
        )
        .join("")
    : `<p class="muted">等學生提問…</p>`;
}

function renderLiveCanvasBoard() {
  const c = canvasOrDefault();
  const promptEl = document.getElementById("live-canvas-prompt");
  const wall = document.getElementById("live-canvas-wall");
  if (promptEl) promptEl.textContent = c.prompt;
  if (!wall) return;
  const notes = state.canvasNotes || [];
  wall.innerHTML = notes
    .map(
      (n) => `<div class="sticky c${n.color % 4}">
        <p>${escapeHtml(n.text)}</p>
        <span>${escapeHtml(n.who || "anon")}</span>
      </div>`
    )
    .join("");
}

function renderLiveWordcloud() {
  const w = wordcloudOrDefault();
  const promptEl = document.getElementById("live-wordcloud-prompt");
  const cloud = document.getElementById("live-wordcloud-cloud");
  if (promptEl) promptEl.textContent = w.prompt;
  if (!cloud) return;
  const words = state.wordcloudWords?.length ? state.wordcloudWords : mockWordcloudSeed();
  const max = Math.max(...words.map((x) => x.n), 1);
  cloud.innerHTML = words
    .map((x) => {
      const size = 0.85 + (x.n / max) * 1.4;
      return `<span class="wc-word" style="font-size:${size.toFixed(2)}rem">${escapeHtml(x.word)}</span>`;
    })
    .join("");
}

function renderLiveQuizResults() {
  const q = quizOrDefault();
  const qEl = document.getElementById("live-quiz-question");
  const meta = document.getElementById("live-quiz-meta");
  const box = document.getElementById("live-quiz-results");
  if (qEl) qEl.textContent = q.question;
  if (meta) {
    meta.textContent = `${q.seconds}s timer · ${q.options.length} options${
      q.slides ? ` · slides ${q.slides}` : ""
    }`;
  }
  if (!box) return;
  const pcts = mockPollPercents(q.options.length);
  box.innerHTML = q.options
    .map((opt, i) => {
      const correct = i === q.correct ? " correct" : "";
      return `<div class="poll-bar${correct}">
        <div class="poll-bar-top"><strong>${escapeHtml(opt)}</strong><span>${pcts[i]}%</span></div>
        <div class="poll-bar-track"><div class="poll-bar-fill" style="width:${pcts[i]}%"></div></div>
      </div>`;
    })
    .join("");
}

function renderLobbyPhase() {
  const waiting = document.getElementById("lobby-waiting");
  const pollPanel = document.getElementById("lobby-poll");
  const qaPanel = document.getElementById("lobby-qa");
  const canvasPanel = document.getElementById("lobby-canvas");
  const wordPanel = document.getElementById("lobby-wordcloud");
  const quizPanel = document.getElementById("lobby-quiz");
  const ready = document.getElementById("lobby-ready");
  const openKind = liveOpenKind();
  const discOn = openKind === "discussion";

  const panels = [
    [pollPanel, "poll"],
    [qaPanel, "qa"],
    [canvasPanel, "canvas"],
    [wordPanel, "wordcloud"],
    [quizPanel, "quiz"],
  ];

  if (waiting) {
    const showWait = !openKind;
    waiting.classList.toggle("is-hidden", !showWait);
    waiting.hidden = !showWait;
  }

  panels.forEach(([el, kind]) => {
    if (!el) return;
    const show = openKind === kind;
    el.classList.toggle("is-hidden", !show);
    el.hidden = !show;
  });

  if (openKind === "poll") {
    const p = pollOrDefault();
    const q = document.getElementById("lobby-poll-question");
    if (q) q.textContent = p.question || "Class poll";
  }
  if (openKind === "qa") {
    const q = qaOrDefault();
    const el = document.getElementById("lobby-qa-prompt");
    if (el) el.textContent = q.prompt;
  }
  if (openKind === "canvas") {
    const c = canvasOrDefault();
    const el = document.getElementById("lobby-canvas-prompt");
    if (el) el.textContent = c.prompt;
  }
  if (openKind === "wordcloud") {
    const w = wordcloudOrDefault();
    const el = document.getElementById("lobby-wordcloud-prompt");
    if (el) el.textContent = w.prompt;
  }
  if (openKind === "quiz") {
    const q = quizOrDefault();
    const el = document.getElementById("lobby-quiz-question");
    if (el) el.textContent = q.question;
  }

  if (ready) {
    ready.classList.toggle("is-hidden", !discOn);
    ready.hidden = !discOn;
  }
}

function bindStudentPoll() {
  const p = pollOrDefault();
  const qEl = document.getElementById("student-poll-question");
  const meta = document.getElementById("student-poll-meta");
  const optsBox = document.getElementById("student-poll-options");
  const submit = document.getElementById("btn-student-poll-submit");
  const votePanel = document.getElementById("student-poll-vote-panel");
  const donePanel = document.getElementById("student-poll-done-panel");
  const closedPanel = document.getElementById("student-poll-closed");
  const choiceEl = document.getElementById("student-poll-choice");
  const resultsEl = document.getElementById("student-poll-results");
  const hint = document.getElementById("student-poll-hint");

  if (!state.pollStarted) {
    votePanel?.classList.add("is-hidden");
    if (votePanel) votePanel.hidden = true;
    donePanel?.classList.add("is-hidden");
    if (donePanel) donePanel.hidden = true;
    if (closedPanel) {
      closedPanel.classList.remove("is-hidden");
      closedPanel.hidden = false;
    }
    return;
  }

  if (closedPanel) {
    closedPanel.classList.add("is-hidden");
    closedPanel.hidden = true;
  }

  if (qEl) qEl.textContent = p.question;
  if (meta) {
    meta.textContent = p.slides
      ? `Linked slides ${p.slides}`
      : "Pick one option";
  }

  const already = state.pollVote?.pollId === p.id ? state.pollVote.option : null;
  let selected = already;

  function showDone() {
    if (votePanel) {
      votePanel.classList.add("is-hidden");
      votePanel.hidden = true;
    }
    if (donePanel) {
      donePanel.classList.remove("is-hidden");
      donePanel.hidden = false;
    }
    if (choiceEl) choiceEl.textContent = state.pollVote?.option || selected || "—";
    if (resultsEl) {
      const pcts = mockPollPercents(p.options.length);
      resultsEl.innerHTML = p.options
        .map((opt, i) => {
          const mine = opt === (state.pollVote?.option || selected) ? " mine" : "";
          return `<div class="poll-bar${mine}">
            <div class="poll-bar-top"><strong>${escapeHtml(opt)}</strong><span>${pcts[i]}%</span></div>
            <div class="poll-bar-track"><div class="poll-bar-fill" style="width:${pcts[i]}%"></div></div>
          </div>`;
        })
        .join("");
    }
  }

  if (already) {
    showDone();
    return;
  }

  if (votePanel) {
    votePanel.classList.remove("is-hidden");
    votePanel.hidden = false;
  }
  if (donePanel) {
    donePanel.classList.add("is-hidden");
    donePanel.hidden = true;
  }

  if (optsBox) {
    optsBox.innerHTML = p.options
      .map(
        (opt, i) =>
          `<button type="button" class="student-poll-option" data-opt="${i}" role="listitem">
            <span class="opt-letter">${String.fromCharCode(65 + i)}</span>
            <span class="opt-text">${escapeHtml(opt)}</span>
          </button>`
      )
      .join("");
    optsBox.querySelectorAll("[data-opt]").forEach((btn) => {
      btn.addEventListener("click", () => {
        optsBox.querySelectorAll(".student-poll-option").forEach((b) => b.classList.remove("on"));
        btn.classList.add("on");
        selected = p.options[Number(btn.getAttribute("data-opt"))];
        if (submit) submit.disabled = !selected;
        if (hint) hint.textContent = `已揀：${selected}`;
      });
    });
  }

  if (submit) {
    submit.disabled = true;
    submit.onclick = () => {
      if (!selected) return;
      state.pollVote = { pollId: p.id, option: selected };
      showDone();
    };
  }
}

function bindStudentQa() {
  const q = qaOrDefault();
  const promptEl = document.getElementById("student-qa-prompt");
  const list = document.getElementById("student-qa-list");
  const form = document.getElementById("form-student-qa");
  const closed = document.getElementById("student-qa-closed");
  const openPanel = document.getElementById("student-qa-open");
  const anonHint = document.getElementById("student-qa-anon");

  if (!state.qaStarted) {
    openPanel?.classList.add("is-hidden");
    if (openPanel) openPanel.hidden = true;
    if (closed) {
      closed.classList.remove("is-hidden");
      closed.hidden = false;
    }
    return;
  }
  if (closed) {
    closed.classList.add("is-hidden");
    closed.hidden = true;
  }
  if (openPanel) {
    openPanel.classList.remove("is-hidden");
    openPanel.hidden = false;
  }
  if (promptEl) promptEl.textContent = q.prompt;
  if (anonHint) {
    anonHint.textContent = q.anonymous
      ? "Posts are anonymous to the class (prototype)."
      : "Your display name may show with the question.";
  }
  if (!state.qaPosts?.length) state.qaPosts = mockQaSeed();

  function paint() {
    if (!list) return;
    const posts = [...state.qaPosts].sort((a, b) => b.votes - a.votes);
    list.innerHTML = posts
      .map(
        (p) => `<div class="qa-card${p.mine ? " mine" : ""}">
          <p>${escapeHtml(p.text)}</p>
          <div class="qa-meta">
            <button type="button" class="btn small" data-upvote="${escapeHtml(p.id)}">▲ ${p.votes}</button>
            ${p.mine ? "<em>yours</em>" : ""}
          </div>
        </div>`
      )
      .join("");
    list.querySelectorAll("[data-upvote]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-upvote");
        const post = state.qaPosts.find((x) => x.id === id);
        if (!post || post._upvoted) return;
        post.votes += 1;
        post._upvoted = true;
        paint();
      });
    });
  }
  paint();

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector('[name="q"]');
    const text = String(input?.value || "").trim();
    if (!text) return;
    state.qaPosts.unshift({
      id: `q${Date.now().toString(36)}`,
      text,
      votes: 1,
      mine: true,
      _upvoted: true,
    });
    if (input) input.value = "";
    paint();
  });
}

function bindStudentCanvas() {
  const c = canvasOrDefault();
  const promptEl = document.getElementById("student-canvas-prompt");
  const wall = document.getElementById("student-canvas-wall");
  const form = document.getElementById("form-student-canvas");
  const closed = document.getElementById("student-canvas-closed");
  const openPanel = document.getElementById("student-canvas-open");

  if (!state.canvasStarted) {
    openPanel?.classList.add("is-hidden");
    if (openPanel) openPanel.hidden = true;
    if (closed) {
      closed.classList.remove("is-hidden");
      closed.hidden = false;
    }
    return;
  }
  if (closed) {
    closed.classList.add("is-hidden");
    closed.hidden = true;
  }
  if (openPanel) {
    openPanel.classList.remove("is-hidden");
    openPanel.hidden = false;
  }
  if (promptEl) promptEl.textContent = c.prompt;
  if (!state.canvasNotes?.length) state.canvasNotes = mockCanvasSeed();

  function paint() {
    if (!wall) return;
    wall.innerHTML = state.canvasNotes
      .map(
        (n) => `<div class="sticky c${n.color % 4}${n.mine ? " mine" : ""}">
          <p>${escapeHtml(n.text)}</p>
          <span>${escapeHtml(n.who || "anon")}</span>
        </div>`
      )
      .join("");
  }
  paint();

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector('[name="note"]');
    const text = String(input?.value || "").trim();
    if (!text) return;
    state.canvasNotes.unshift({
      id: `n${Date.now().toString(36)}`,
      text,
      who: "You",
      color: state.canvasNotes.length % 4,
      mine: true,
    });
    if (input) input.value = "";
    paint();
  });
}

function bindStudentWordcloud() {
  const w = wordcloudOrDefault();
  const promptEl = document.getElementById("student-wordcloud-prompt");
  const cloud = document.getElementById("student-wordcloud-cloud");
  const form = document.getElementById("form-student-wordcloud");
  const closed = document.getElementById("student-wordcloud-closed");
  const openPanel = document.getElementById("student-wordcloud-open");
  const doneHint = document.getElementById("student-wordcloud-done");

  if (!state.wordcloudStarted) {
    openPanel?.classList.add("is-hidden");
    if (openPanel) openPanel.hidden = true;
    if (closed) {
      closed.classList.remove("is-hidden");
      closed.hidden = false;
    }
    return;
  }
  if (closed) {
    closed.classList.add("is-hidden");
    closed.hidden = true;
  }
  if (openPanel) {
    openPanel.classList.remove("is-hidden");
    openPanel.hidden = false;
  }
  if (promptEl) promptEl.textContent = w.prompt;
  if (!state.wordcloudWords?.length) state.wordcloudWords = mockWordcloudSeed();

  function paint() {
    if (!cloud) return;
    const max = Math.max(...state.wordcloudWords.map((x) => x.n), 1);
    cloud.innerHTML = state.wordcloudWords
      .map((x) => {
        const size = 0.85 + (x.n / max) * 1.55;
        const mine = x._mine ? " mine" : "";
        return `<span class="wc-word${mine}" style="font-size:${size.toFixed(2)}rem">${escapeHtml(x.word)}</span>`;
      })
      .join("");
  }
  paint();

  const already = state.wordcloudWords.some((x) => x._mine);
  if (already && doneHint) {
    doneHint.hidden = false;
    form?.classList.add("is-hidden");
    if (form) form.hidden = true;
  }

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (state.wordcloudWords.some((x) => x._mine)) return;
    const input = form.querySelector('[name="word"]');
    const word = String(input?.value || "")
      .trim()
      .toLowerCase()
      .slice(0, 24);
    if (!word) return;
    const existing = state.wordcloudWords.find((x) => x.word === word);
    if (existing) {
      existing.n += 1;
      existing._mine = true;
    } else {
      state.wordcloudWords.push({ word, n: 1, _mine: true });
    }
    if (input) input.value = "";
    form.classList.add("is-hidden");
    form.hidden = true;
    if (doneHint) doneHint.hidden = false;
    paint();
  });
}

function bindStudentQuiz() {
  const q = quizOrDefault();
  const qEl = document.getElementById("student-quiz-question");
  const meta = document.getElementById("student-quiz-meta");
  const optsBox = document.getElementById("student-quiz-options");
  const submit = document.getElementById("btn-student-quiz-submit");
  const timerEl = document.getElementById("student-quiz-timer");
  const votePanel = document.getElementById("student-quiz-vote-panel");
  const donePanel = document.getElementById("student-quiz-done-panel");
  const closedPanel = document.getElementById("student-quiz-closed");
  const choiceEl = document.getElementById("student-quiz-choice");
  const resultEl = document.getElementById("student-quiz-result");

  if (!state.quizStarted) {
    votePanel?.classList.add("is-hidden");
    if (votePanel) votePanel.hidden = true;
    donePanel?.classList.add("is-hidden");
    if (donePanel) donePanel.hidden = true;
    if (closedPanel) {
      closedPanel.classList.remove("is-hidden");
      closedPanel.hidden = false;
    }
    return;
  }
  if (closedPanel) {
    closedPanel.classList.add("is-hidden");
    closedPanel.hidden = true;
  }

  if (qEl) qEl.textContent = q.question;
  if (meta) {
    meta.textContent = q.slides
      ? `Linked slides ${q.slides} · ${q.seconds}s`
      : `${q.seconds}s timed quiz`;
  }

  const already = state.quizAnswer?.quizId === q.id ? state.quizAnswer : null;
  let selected = already?.optionIndex ?? null;
  let left = already ? 0 : q.seconds;
  const tickId = (state._quizTickId = (state._quizTickId || 0) + 1);

  function showDone() {
    if (votePanel) {
      votePanel.classList.add("is-hidden");
      votePanel.hidden = true;
    }
    if (donePanel) {
      donePanel.classList.remove("is-hidden");
      donePanel.hidden = false;
    }
    const ans = state.quizAnswer;
    const opt = q.options[ans?.optionIndex] || "—";
    if (choiceEl) choiceEl.textContent = opt;
    const ok = ans?.optionIndex === q.correct;
    if (resultEl) {
      resultEl.textContent = ok
        ? "Correct · +points (mock)"
        : `Submitted · correct was: ${q.options[q.correct]}`;
      resultEl.className = ok ? "readonly-value ok-text" : "readonly-value";
    }
  }

  if (already) {
    showDone();
    return;
  }

  if (votePanel) {
    votePanel.classList.remove("is-hidden");
    votePanel.hidden = false;
  }
  if (donePanel) {
    donePanel.classList.add("is-hidden");
    donePanel.hidden = true;
  }

  function tick() {
    if (state._quizTickId !== tickId || state.quizAnswer?.quizId === q.id) return;
    if (timerEl) timerEl.textContent = `${left}s`;
    if (left <= 0) {
      if (selected == null) selected = 0;
      state.quizAnswer = { quizId: q.id, optionIndex: selected };
      showDone();
      return;
    }
    left -= 1;
    window.setTimeout(tick, 1000);
  }
  tick();

  if (optsBox) {
    optsBox.innerHTML = q.options
      .map(
        (opt, i) =>
          `<button type="button" class="student-poll-option" data-opt="${i}" role="listitem">
            <span class="opt-letter">${String.fromCharCode(65 + i)}</span>
            <span class="opt-text">${escapeHtml(opt)}</span>
          </button>`
      )
      .join("");
    optsBox.querySelectorAll("[data-opt]").forEach((btn) => {
      btn.addEventListener("click", () => {
        optsBox.querySelectorAll(".student-poll-option").forEach((b) => b.classList.remove("on"));
        btn.classList.add("on");
        selected = Number(btn.getAttribute("data-opt"));
        if (submit) submit.disabled = selected == null;
      });
    });
  }
  if (submit) {
    submit.disabled = true;
    submit.onclick = () => {
      if (selected == null) return;
      state.quizAnswer = { quizId: q.id, optionIndex: selected };
      showDone();
    };
  }
}

function fillContextLines() {
  document.querySelectorAll("[data-context]").forEach((el) => {
    el.textContent = contextText();
  });
}

function renderNavigator() {
  const c = course();
  const s = section();
  document.getElementById("nav-course-code").textContent = c.code;
  document.getElementById("nav-course-title").textContent = c.title;

  const itemsBox = document.getElementById("course-items");
  const side = document.querySelector(".course-list");
  if (itemsBox) {
    itemsBox.innerHTML = "";
    Object.entries(COURSES).forEach(([id, courseData]) => {
      const n = Object.keys(courseData.sections).length;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `course-item${id === state.courseId ? " on" : ""}`;
      btn.innerHTML = `<strong>${escapeHtml(courseData.code)} ${escapeHtml(courseData.title)}</strong><span>${n} section${n > 1 ? "s" : ""}</span>`;
      btn.addEventListener("click", () => {
        state.courseId = id;
        state.sectionId = Object.keys(COURSES[id].sections)[0];
        state.viewingRecordWeek = null;
        updateChip();
        renderNavigator();
      });
      itemsBox.appendChild(btn);
    });
  } else if (side) {
    // fallback for older markup
    const head = side.querySelector(".list-head");
    side.innerHTML = "";
    if (head) side.appendChild(head);
    Object.entries(COURSES).forEach(([id, courseData]) => {
      const n = Object.keys(courseData.sections).length;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `course-item${id === state.courseId ? " on" : ""}`;
      btn.innerHTML = `<strong>${escapeHtml(courseData.code)} ${escapeHtml(courseData.title)}</strong><span>${n} section${n > 1 ? "s" : ""}</span>`;
      btn.addEventListener("click", () => {
        state.courseId = id;
        state.sectionId = Object.keys(COURSES[id].sections)[0];
        state.viewingRecordWeek = null;
        updateChip();
        renderNavigator();
      });
      side.appendChild(btn);
    });
  }

  bindAiCheckBot();

  const tabs = document.getElementById("section-tabs");
  tabs.innerHTML = Object.entries(c.sections)
    .map(
      ([id, sec]) =>
        `<button type="button" class="sec-tab${id === state.sectionId ? " on" : ""}" data-section="${id}">
          <strong>${escapeHtml(sec.label)}</strong>
          <span>${escapeHtml(sectionMetaLine(sec))}</span>
        </button>`
    )
    .join("");
  tabs.querySelectorAll("[data-section]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.sectionId = btn.getAttribute("data-section");
      state.viewingRecordWeek = null;
      updateChip();
      renderNavigator();
    });
  });

  const list = document.getElementById("session-list");
  const weeks = [...s.weeks].sort((a, b) => a.week - b.week);
  list.innerHTML = weeks
    .map((w) => {
      const rec = s.records.find((r) => r.week === w.week);
      const isCurrent = w.week === s.currentWeek;
      const isPast = w.status === "done" || Boolean(rec);
      const cls = isCurrent ? "current" : isPast ? "past" : "future";
      return `<button type="button" class="session-row ${cls}" data-session-week="${w.week}">
        <div class="session-main">
          <div class="session-top">
            <strong>Week ${w.week}</strong>
            ${isCurrent ? `<span class="badge">Now</span>` : ""}
          </div>
          <p>${escapeHtml(w.topic)}</p>
          <small>${escapeHtml(w.when)}</small>
        </div>
        <span class="session-go">View</span>
      </button>`;
    })
    .join("");

  list.querySelectorAll("[data-session-week]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const week = Number(btn.getAttribute("data-session-week"));
      const rec = s.records.find((r) => r.week === week);
      if (week === s.currentWeek) {
        state.viewingRecordWeek = null;
        go("teacher-prep");
      } else if (rec) {
        state.viewingRecordWeek = week;
        go("record-detail");
      } else {
        state.viewingRecordWeek = null;
        go("teacher-prep");
      }
    });
  });
}

function mockSyllabusDraft(fileName) {
  const base = String(fileName || "syllabus")
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .trim();
  const codeMatch = base.match(/\b([A-Z]{2,4}\s?\d{3,4}[A-Z]?)\b/i);
  const code = (codeMatch?.[1] || "EE4101").replace(/\s+/g, "").toUpperCase();
  const title =
    base
      .replace(codeMatch?.[0] || "", "")
      .replace(/syllabus/i, "")
      .trim() || "Signals & Systems";
  return {
    code,
    title: title.replace(/\b\w/g, (c) => c.toUpperCase()).slice(0, 48),
    section: "L01",
    time: "10:30",
    totalStudents: 45,
    description: "From syllabus (AI draft)",
    weeks: [
      { week: 1, topic: "Course intro & learning outcomes", when: "Week 1 · 10:30" },
      { week: 2, topic: "Core concepts from syllabus unit 1", when: "Week 2 · 10:30" },
      { week: 3, topic: "Core concepts from syllabus unit 2", when: "Week 3 · 10:30" },
      { week: 4, topic: "Assessment checkpoint", when: "Week 4 · 10:30" },
    ],
  };
}

function pushAiBot(role, text) {
  if (!state.aiBotLog) state.aiBotLog = [];
  state.aiBotLog.push({ role, text });
  if (state.aiBotLog.length > 40) state.aiBotLog = state.aiBotLog.slice(-40);
  renderAiCheckLog();
}

function renderAiCheckLog() {
  const log = document.getElementById("ai-check-log");
  if (!log) return;
  const msgs = state.aiBotLog?.length
    ? state.aiBotLog
    : [
        {
          role: "bot",
          text: "你好——可以問「呢星期有咩堂」、叫我加／改 session，或者 ＋ 附上 syllabus 叫我建科。",
        },
      ];
  log.innerHTML = msgs
    .map((m) => {
      const who = m.role === "user" ? "You" : "AI assistant";
      const body = escapeHtml(m.text).replaceAll("\n", "<br>");
      return `<div class="ai-check-msg ${m.role}"><span class="who">${who}</span>${body}</div>`;
    })
    .join("");
  log.scrollTop = log.scrollHeight;
}

function listWorkspaceScheduleSummary() {
  const lines = [];
  Object.values(COURSES).forEach((c) => {
    Object.values(c.sections).forEach((sec) => {
      const today = sec.weeks.find((w) => w.week === sec.currentWeek) || sec.weeks[0];
      lines.push(
        `${c.code} ${sec.label} · Week ${today?.week ?? "?"} · ${today?.topic || "—"} · ${today?.when || sectionTimeValue(sec)}`
      );
    });
  });
  return lines;
}

function applyAiCheckCommand(raw) {
  const text = String(raw || "").trim();
  const lower = text.toLowerCase();
  const file = state._aiBotFile;

  // Syllabus attach → build course
  if (
    file &&
    (/syllabus|建科|開科|建立.*(科|course)|from syllabus|用.*syllabus|讀.*syllabus/i.test(text) ||
      /build|create course|generate/i.test(text))
  ) {
    const draft = mockSyllabusDraft(file.name);
    const id = `c_${draft.code.toLowerCase()}_${Date.now().toString(36)}`;
    const sec = {
      label: draft.section,
      time: draft.time,
      totalStudents: draft.totalStudents,
      description: draft.description,
      meta: "",
      currentWeek: 1,
      weeks: draft.weeks.map((w, i) => ({
        ...w,
        date: "",
        time: draft.time,
        status: i === 0 ? "today" : "soon",
      })),
      records: [],
    };
    sec.meta = sectionMetaLine(sec);
    COURSES[id] = {
      code: draft.code,
      title: draft.title,
      sections: { [draft.section]: sec },
    };
    state.courseId = id;
    state.sectionId = draft.section;
    state.viewingRecordWeek = null;
    state._aiBotFile = null;
    const hint = document.getElementById("ai-check-attach-hint");
    const attach = document.querySelector(".ai-attach");
    if (hint) {
      hint.hidden = true;
      hint.textContent = "";
    }
    attach?.classList.remove("has-file");
    const fileInput = document.getElementById("ai-check-file");
    if (fileInput) fileInput.value = "";
    updateChip();
    return {
      reply: `已用「${file.name}」建好 ${draft.code} · ${draft.title}（${draft.weeks.length} sessions）。已切換到呢科。`,
      refresh: true,
    };
  }

  if (file && /^(建|開|做|幫我)/.test(text) && text.length < 12) {
    return applyAiCheckCommand(`用 syllabus 建科`);
  }

  // Schedule / when questions
  if (
    /有咩堂|邊科|時間表|schedule|幾時|咩時候|今日|呢星期|this week|when|what class/i.test(
      text
    )
  ) {
    const lines = listWorkspaceScheduleSummary();
    const focus = course();
    const sec = section();
    const cur = sec.weeks.find((w) => w.week === sec.currentWeek);
    return {
      reply: `而家 Workspace 概覽：\n${lines.map((l) => `· ${l}`).join("\n")}\n\n你而家睇緊：${focus.code} ${sec.label} · Week ${sec.currentWeek}「${cur?.topic || "—"}」（${cur?.when || sectionTimeValue(sec)}）。`,
      refresh: false,
    };
  }

  // Rename / change today's topic
  const topicChange = text.match(
    /(?:topic\s*(?:改|改做|改成|改為|=)|改(?:做|成|為)?(?:今日|而家)?(?:堂)?(?:嘅)?(?:topic)?\s*)(.+)$/i
  );
  const topicAlt = text.match(/把?(?:今日|而家)?(?:堂)?topic\s*(?:改做|改成|改為)\s*(.+)$/i);
  const newTopic = (topicChange?.[1] || topicAlt?.[1] || "").trim().replace(/^「|」$/g, "");
  if (newTopic && (/topic|改/i.test(text) || topicAlt)) {
    const sec = section();
    const cur = sec.weeks.find((w) => w.week === sec.currentWeek) || sec.weeks[0];
    if (cur) {
      const old = cur.topic;
      cur.topic = newTopic;
      return {
        reply: `已將 ${course().code} ${sec.label} Week ${cur.week} topic：「${old}」→「${newTopic}」。`,
        refresh: true,
      };
    }
  }

  // Add week session: "加 Week 6 …" / "add week 6 · topic"
  const addWeek = text.match(
    /(?:加|新增|開|add)\s*(?:一堂\s*)?(?:week|w)?\s*(\d{1,2})\s*(?:session)?\s*[·\-—:]?\s*(.+)?$/i
  );
  if (addWeek) {
    const week = Number(addWeek[1]);
    let topic = String(addWeek[2] || "").trim();
    topic = topic
      .replace(/^session\s*/i, "")
      .replace(/^[·\-—:\s]+/, "")
      .trim();
    if (!topic) topic = `Week ${week} topic`;
    const sec = section();
    const time = sectionTimeValue(sec);
    const when = `Week ${week} · ${time}`;
    const existing = sec.weeks.find((w) => w.week === week);
    if (existing) {
      existing.topic = topic;
      existing.time = time;
      existing.when = when;
      return {
        reply: `Week ${week} 已存在——已更新 topic 做「${topic}」（${course().code} ${sec.label}）。`,
        refresh: true,
      };
    }
    sec.weeks.push({
      week,
      topic,
      date: "",
      time,
      when,
      status: week < sec.currentWeek ? "done" : week === sec.currentWeek ? "today" : "soon",
    });
    return {
      reply: `已加 Week ${week}「${topic}」入 ${course().code} ${sec.label}（時間跟 section：${time}）。`,
      refresh: true,
    };
  }

  // Create section via chat
  const addSec = text.match(
    /(?:加|新增|開)\s*(?:section|班)?\s*(L\d{2}|S\d{2})\b/i
  );
  if (addSec) {
    const label = addSec[1].toUpperCase();
    const c = course();
    if (c.sections[label]) {
      state.sectionId = label;
      return { reply: `${label} 已存在——已幫你切過去。`, refresh: true };
    }
    const time = sectionTimeValue(section()) || "14:30";
    const sec = {
      label,
      time,
      totalStudents: 40,
      description: "Created by AI assistant",
      meta: "",
      currentWeek: 1,
      weeks: [
        {
          week: 1,
          topic: "Session 1",
          date: "",
          time,
          when: time,
          status: "today",
        },
      ],
      records: [],
    };
    sec.meta = sectionMetaLine(sec);
    c.sections[label] = sec;
    state.sectionId = label;
    return {
      reply: `已喺 ${c.code} 開咗 section ${label}（${time} · 40 students）。`,
      refresh: true,
    };
  }

  if (/help|可以做咩|點用|功能/i.test(text)) {
    return {
      reply: "可以試：\n· 問「呢星期有咩堂？」\n· 「加 Week 6 · PID tuning」\n· 「今日 topic 改做 Mid-term review」\n· 「加 section L03」\n· ＋ 附 syllabus 再講「用 syllabus 建科」",
      refresh: false,
    };
  }

  if (file) {
    return {
      reply: `已收到檔案「${file.name}」。講「用 syllabus 建科」我就會幫你建；或者直接問時間表／改堂。`,
      refresh: false,
    };
  }

  return {
    reply: "收到。你可以問時間表、叫我加／改 session，或 ＋ 附 syllabus 建科。打「功能」睇例子。",
    refresh: false,
  };
}

function bindAiCheckBot() {
  const dock = document.getElementById("ai-check-dock");
  const panel = document.getElementById("ai-check-bot");
  const form = document.getElementById("form-ai-check");
  const fileInput = document.getElementById("ai-check-file");
  const attach = panel?.querySelector(".ai-attach");
  const hint = document.getElementById("ai-check-attach-hint");
  const toggle = document.getElementById("btn-ai-check-toggle");
  const minimize = document.getElementById("btn-ai-check-minimize");
  if (!dock || !form) return;

  renderAiCheckLog();
  if (state._aiCheckOpen) setAiCheckOpen(true);

  if (dock.dataset.bound === "1") {
    if (state._aiBotFile) {
      attach?.classList.add("has-file");
      if (hint) {
        hint.hidden = false;
        hint.textContent = `已附：${state._aiBotFile.name}`;
      }
    }
    return;
  }
  dock.dataset.bound = "1";

  toggle?.addEventListener("click", () => {
    setAiCheckOpen(!state._aiCheckOpen);
  });
  minimize?.addEventListener("click", () => setAiCheckOpen(false));

  function send(text) {
    const msg = String(text || "").trim();
    if (!msg && !state._aiBotFile) return;
    setAiCheckOpen(true);
    const shown = msg || `（附上 ${state._aiBotFile?.name || "file"}）`;
    if (!state.aiBotLog?.length) {
      state.aiBotLog = [
        {
          role: "bot",
          text: "你好——可以問「呢星期有咩堂」、叫我加／改 session，或者 ＋ 附上 syllabus 叫我建科。",
        },
      ];
    }
    pushAiBot("user", shown);
    window.setTimeout(() => {
      const result = applyAiCheckCommand(msg || "用 syllabus 建科");
      pushAiBot("bot", result.reply);
      if (result.refresh) {
        updateChip();
        const hash = location.hash.replace(/^#/, "");
        if (hash === "navigator") renderNavigator();
      }
    }, 350);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("ai-check-input");
    const val = input?.value || "";
    if (input) input.value = "";
    send(val);
  });

  document.getElementById("ai-check-chips")?.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-ai-prompt]");
    if (!chip) return;
    send(chip.getAttribute("data-ai-prompt"));
  });

  fileInput?.addEventListener("change", () => {
    const f = fileInput.files?.[0];
    state._aiBotFile = f || null;
    if (f) {
      attach?.classList.add("has-file");
      if (hint) {
        hint.hidden = false;
        hint.textContent = `已附：${f.name}（可打「用 syllabus 建科」）`;
      }
      setAiCheckOpen(true);
      pushAiBot("bot", `已附上「${f.name}」。想建科就講「用 syllabus 建科」；亦可以繼續問時間表或改堂。`);
    } else {
      attach?.classList.remove("has-file");
      if (hint) {
        hint.hidden = true;
        hint.textContent = "";
      }
    }
  });
}

function bindCreateForms() {
  const courseForm = document.getElementById("form-create-course");
  if (courseForm) {
    courseForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(courseForm);
      const code = String(fd.get("code") || "").trim().toUpperCase();
      const title = String(fd.get("title") || "").trim();
      const sectionLabel = String(fd.get("section") || "L01").trim() || "L01";
      const meta = String(fd.get("meta") || "").trim() || "Schedule TBD";
      if (!code || !title) return;
      const id = `c_${code.toLowerCase().replace(/[^a-z0-9]+/g, "")}_${Date.now().toString(36)}`;
      COURSES[id] = {
        code,
        title,
        sections: {
          [sectionLabel]: {
            label: sectionLabel,
            meta,
            currentWeek: 1,
            weeks: [{ week: 1, topic: "Session 1", when: meta, status: "today" }],
            records: [],
          },
        },
      };
      state.courseId = id;
      state.sectionId = sectionLabel;
      state.viewingRecordWeek = null;
      updateChip();
      go("navigator");
    });
  }

  const sectionForm = document.getElementById("form-create-section");
  if (sectionForm) {
    sectionForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(sectionForm);
      const label = String(fd.get("label") || "").trim().toUpperCase();
      const time = String(fd.get("time") || "").trim() || "14:30";
      const totalStudents = Number(fd.get("students"));
      const description = String(fd.get("description") || "").trim();
      if (!label || !Number.isFinite(totalStudents) || totalStudents < 1) return;
      const c = course();
      if (c.sections[label]) {
        state.sectionId = label;
        go("navigator");
        return;
      }
      const sec = {
        label,
        time,
        totalStudents,
        description,
        meta: "",
        currentWeek: 1,
        weeks: [
          {
            week: 1,
            topic: "Session 1",
            date: "",
            time,
            when: time,
            status: "today",
          },
        ],
        records: [],
      };
      sec.meta = sectionMetaLine(sec);
      c.sections[label] = sec;
      state.sectionId = label;
      state.viewingRecordWeek = null;
      updateChip();
      go("navigator");
    });
  }

  const sessionForm = document.getElementById("form-create-session");
  if (sessionForm) {
    sessionForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(sessionForm);
      const week = Number(fd.get("week"));
      const topic = String(fd.get("topic") || "").trim();
      const date = String(fd.get("date") || "").trim();
      const time = String(fd.get("time") || "").trim() || sectionTimeValue(section());
      if (!week || !topic || !date || !time) return;
      const when = formatSessionWhen(date, time);
      const s = section();
      const existing = s.weeks.find((w) => w.week === week);
      if (existing) {
        existing.topic = topic;
        existing.date = date;
        existing.time = time;
        existing.when = when;
        existing.status = "today";
      } else {
        s.weeks.push({ week, topic, date, time, when, status: "today" });
      }
      s.currentWeek = week;
      s.weeks.forEach((w) => {
        if (w.week === week) w.status = "today";
        else if (w.week < week) w.status = "done";
      });
      state.viewingRecordWeek = null;
      updateChip();
      go("navigator");
    });
  }
}

function fillRecordViews() {
  const s = section();
  const week = state.viewingRecordWeek;
  const rec =
    s.records.find((r) => r.week === week) ||
    s.records.find((r) => r.week === s.currentWeek) ||
    [...s.records].sort((a, b) => b.week - a.week)[0];
  if (!rec) return;
  state.viewingRecordWeek = rec.week;

  if (document.getElementById("record-title")) {
    document.getElementById("record-title").textContent = `${rec.title} · ${section().label}`;
    document.getElementById("rec-pre").textContent = rec.pre;
    document.getElementById("rec-poll").textContent = rec.poll;
    document.getElementById("rec-groups").textContent = rec.groups;
    document.getElementById("rec-notes").textContent = rec.notes;
  }

  if (document.getElementById("insight-heading") && state.viewingRecordWeek) {
    const ins = rec.insight;
    document.getElementById("insight-heading").textContent = `Insight · ${section().label} · Week ${rec.week}`;
    document.getElementById("insight-q").textContent = ins.q;
    document.getElementById("insight-pill").textContent = ins.pill;
    document.getElementById("insight-main").textContent = ins.main;
    document.getElementById("insight-dis").textContent = ins.dis;
    document.getElementById("insight-fuzzy").textContent = ins.fuzzy;
    document.getElementById("insight-miss").innerHTML = (ins.miss || [])
      .map((m) => `<li>${escapeHtml(m)}</li>`)
      .join("") || "<li>None flagged</li>";
  }
}

function bindScreen(name) {
  fillContextLines();

  if (name === "navigator") renderNavigator();
  if (name === "create-section") {
    const el = document.getElementById("create-section-course");
    if (el) el.textContent = `${course().code} · ${course().title}`;
  }
  if (name === "create-session") {
    const timeInput = document.getElementById("create-session-time");
    if (timeInput) timeInput.value = sectionTimeValue(section());
    const dateInput = document.querySelector('#form-create-session input[name="date"]');
    if (dateInput && !dateInput.value) {
      const t = new Date();
      dateInput.value = t.toISOString().slice(0, 10);
    }
  }
  if (name === "create-course" || name === "create-section" || name === "create-session") bindCreateForms();
  if (name === "record-detail") fillRecordViews();
  if (name === "teacher-insight" && state.viewingRecordWeek) fillRecordViews();
  if (name === "teacher-insight" && !state.viewingRecordWeek) {
    document.getElementById("insight-heading").textContent =
      `Class insight card · ${section().label} · Week ${section().currentWeek}`;
  }

  if (name === "teacher-prep") {
    const form = document.getElementById("form-session-prep");
    const fileInput = document.getElementById("prep-pptx");
    const fileName = document.getElementById("prep-file-name");
    const box = document.getElementById("prep-questions");
    const addBtn = document.getElementById("btn-add-preq");
    const linkBox = document.getElementById("prep-link-box");
    const linkInput = document.getElementById("prep-share-link");
    const copyBtn = document.getElementById("btn-copy-prep-link");
    const copyMsg = document.getElementById("prep-copy-msg");

    function showPrepLink(url) {
      state.prepLink = url;
      if (linkInput) linkInput.value = url;
      linkBox?.classList.remove("is-hidden");
      if (linkBox) linkBox.hidden = false;
    }

    if (state.prepLink) showPrepLink(state.prepLink);

    const actBox = document.getElementById("prep-activities");
    const addActBtn = document.getElementById("btn-add-activity-prep");
    const actTypeModal = document.getElementById("prep-activity-type-modal");
    const actTypeList = document.getElementById("prep-act-type-list");

    function syncPrepRemoveButtons(container, sel = ".q-editor, .act-editor") {
      const editors = [...(container?.querySelectorAll(sel) || [])];
      editors.forEach((ed) => {
        const btn = ed.querySelector(".q-editor-remove");
        if (btn) btn.disabled = editors.length <= 1;
      });
    }

    function syncQSummary(ed) {
      const summary = ed.querySelector(".q-summary");
      if (!summary) return;
      const text = ed.querySelector('textarea[name$="_text"]')?.value?.trim();
      summary.textContent = text || "Untitled question";
    }

    function setItemCollapsed(ed, collapsed) {
      ed.classList.toggle("is-collapsed", collapsed);
      const fold = ed.querySelector(".item-fold");
      if (fold) {
        fold.textContent = "−";
        fold.setAttribute("aria-expanded", collapsed ? "false" : "true");
        fold.title = collapsed ? "Expand" : "Collapse";
      }
      if (ed.classList.contains("act-editor")) syncActSummary(ed);
      if (ed.classList.contains("q-editor")) syncQSummary(ed);
      ed.querySelectorAll(".act-body input, .act-body textarea, .q-body input, .q-body textarea").forEach((el) => {
        if (collapsed) {
          el.dataset.wasRequired = el.required ? "1" : "0";
          el.required = false;
        } else if (el.dataset.wasRequired === "1") {
          el.required = true;
        }
      });
    }

    function renumberPrepQuestions() {
      if (!box) return;
      [...box.querySelectorAll(".q-editor")].forEach((ed, i) => {
        const n = i + 1;
        ed.dataset.q = String(n);
        const title = ed.querySelector(".q-editor-head strong");
        if (title) title.textContent = `Q${n}`;
        const text = ed.querySelector('textarea[name$="_text"]');
        const slides = ed.querySelector('input[name$="_slides"]');
        if (text) text.name = `q${n}_text`;
        if (slides) slides.name = `q${n}_slides`;
        syncQSummary(ed);
      });
      syncPrepRemoveButtons(box, ".q-editor");
    }

    function syncActSummary(ed) {
      const summary = ed.querySelector(".act-summary");
      if (!summary) return;
      const type = ed.dataset.type || "discussion";
      if (type === "poll" || type === "quiz") {
        const q = ed.querySelector('textarea[name$="_question"]')?.value?.trim();
        summary.textContent = q || `Untitled ${type}`;
      } else if (type === "discussion") {
        const topic = ed.querySelector('input[name$="_topic"]')?.value?.trim();
        const q = ed.querySelector('textarea[name$="_question"]')?.value?.trim();
        summary.textContent = topic || q || "Untitled discussion";
      } else {
        const prompt = ed.querySelector('textarea[name$="_prompt"], input[name$="_prompt"]')?.value?.trim();
        summary.textContent = prompt || `Untitled ${activityTypeById(type).label}`;
      }
    }

    function renumberPrepActivities() {
      if (!actBox) return;
      const counters = Object.fromEntries(ACTIVITY_TYPE_CATALOG.map((t) => [t.id, 0]));
      [...actBox.querySelectorAll(".act-editor")].forEach((ed, i) => {
        const n = i + 1;
        ed.dataset.n = String(n);
        const type = ed.dataset.type || "discussion";
        const def = activityTypeById(type);
        counters[def.id] = (counters[def.id] || 0) + 1;
        const title = ed.querySelector(".act-title");
        if (title) {
          title.innerHTML = `<span class="act-type">${escapeHtml(def.label)}</span>${def.prefix}${counters[def.id]}`;
        }
        ed.querySelectorAll("[name]").forEach((field) => {
          const name = field.getAttribute("name") || "";
          const suffix = name.replace(/^a\d+_/, "");
          if (suffix) field.name = `a${n}_${suffix}`;
        });
        syncActSummary(ed);
      });
      syncPrepRemoveButtons(actBox, ".act-editor");
    }

    function actEditorHtml(item, index, opts = {}) {
      const n = index + 1;
      const id = item.id || `a${n}`;
      const type = item.type || "discussion";
      const def = activityTypeById(type);
      const collapsedClass = opts.collapsed ? " is-collapsed" : "";
      const foldExpanded = opts.collapsed ? "false" : "true";
      const head = (preview) => `<div class="act-editor-head">
            <span class="act-drag" draggable="true" title="Drag to reorder" aria-label="Drag to reorder">☰</span>
            <span class="act-title"><span class="act-type">${escapeHtml(def.label)}</span>${def.prefix}</span>
            <span class="act-summary">${escapeHtml(preview)}</span>
            <button type="button" class="item-fold" aria-expanded="${foldExpanded}" title="${opts.collapsed ? "Expand" : "Collapse"}">−</button>
            <button type="button" class="q-editor-remove" aria-label="Remove activity" title="Remove">×</button>
          </div>`;

      if (type === "poll") {
        const optsText = (item.options || []).join("\n");
        const preview = item.question || "Untitled poll";
        return `<div class="act-editor${collapsedClass}" draggable="false" data-type="poll" data-id="${escapeHtml(id)}" data-n="${n}">
          ${head(preview)}
          <div class="act-body">
            <label class="field tight">
              <span>Poll question</span>
              <textarea name="a${n}_question" rows="2" required>${escapeHtml(item.question || "")}</textarea>
            </label>
            <label class="field tight">
              <span>Options（每行一個）</span>
              <textarea name="a${n}_options" rows="3" required>${escapeHtml(optsText)}</textarea>
            </label>
            <label class="field tight">
              <span>Linked slides（optional）</span>
              <input name="a${n}_slides" type="text" value="${escapeHtml(item.slides || "")}" />
            </label>
          </div>
        </div>`;
      }
      if (type === "qa") {
        const preview = item.prompt || "Untitled Q&A";
        return `<div class="act-editor${collapsedClass}" draggable="false" data-type="qa" data-id="${escapeHtml(id)}" data-n="${n}">
          ${head(preview)}
          <div class="act-body">
            <label class="field tight">
              <span>Board prompt</span>
              <textarea name="a${n}_prompt" rows="2" required>${escapeHtml(item.prompt || "")}</textarea>
            </label>
            <label class="field tight check-row">
              <input name="a${n}_anonymous" type="checkbox" ${item.anonymous !== false ? "checked" : ""} />
              <span>Anonymous questions</span>
            </label>
            <label class="field tight">
              <span>Linked slides（optional）</span>
              <input name="a${n}_slides" type="text" value="${escapeHtml(item.slides || "")}" />
            </label>
          </div>
        </div>`;
      }
      if (type === "canvas") {
        const preview = item.prompt || "Untitled canvas";
        return `<div class="act-editor${collapsedClass}" draggable="false" data-type="canvas" data-id="${escapeHtml(id)}" data-n="${n}">
          ${head(preview)}
          <div class="act-body">
            <label class="field tight">
              <span>Brainstorm prompt</span>
              <textarea name="a${n}_prompt" rows="2" required>${escapeHtml(item.prompt || "")}</textarea>
            </label>
            <label class="field tight">
              <span>Linked slides（optional）</span>
              <input name="a${n}_slides" type="text" value="${escapeHtml(item.slides || "")}" />
            </label>
          </div>
        </div>`;
      }
      if (type === "wordcloud") {
        const preview = item.prompt || "Untitled word cloud";
        return `<div class="act-editor${collapsedClass}" draggable="false" data-type="wordcloud" data-id="${escapeHtml(id)}" data-n="${n}">
          ${head(preview)}
          <div class="act-body">
            <label class="field tight">
              <span>Prompt</span>
              <textarea name="a${n}_prompt" rows="2" required>${escapeHtml(item.prompt || "")}</textarea>
            </label>
            <label class="field tight">
              <span>Linked slides（optional）</span>
              <input name="a${n}_slides" type="text" value="${escapeHtml(item.slides || "")}" />
            </label>
          </div>
        </div>`;
      }
      if (type === "quiz") {
        const optsText = (item.options || []).join("\n");
        const preview = item.question || "Untitled quiz";
        const correct = Number.isFinite(item.correct) ? item.correct : 0;
        return `<div class="act-editor${collapsedClass}" draggable="false" data-type="quiz" data-id="${escapeHtml(id)}" data-n="${n}">
          ${head(preview)}
          <div class="act-body">
            <label class="field tight">
              <span>Quiz question</span>
              <textarea name="a${n}_question" rows="2" required>${escapeHtml(item.question || "")}</textarea>
            </label>
            <label class="field tight">
              <span>Options（每行一個）</span>
              <textarea name="a${n}_options" rows="4" required>${escapeHtml(optsText)}</textarea>
            </label>
            <label class="field tight">
              <span>Correct option index（0 = A）</span>
              <input name="a${n}_correct" type="number" min="0" value="${correct}" required />
            </label>
            <label class="field tight">
              <span>Timer（seconds）</span>
              <input name="a${n}_seconds" type="number" min="5" value="${item.seconds || 30}" required />
            </label>
            <label class="field tight">
              <span>Linked slides（optional）</span>
              <input name="a${n}_slides" type="text" value="${escapeHtml(item.slides || "")}" />
            </label>
          </div>
        </div>`;
      }
      const preview = item.topic || item.question || "Untitled discussion";
      return `<div class="act-editor${collapsedClass}" draggable="false" data-type="discussion" data-id="${escapeHtml(id)}" data-n="${n}">
        ${head(preview)}
        <div class="act-body">
          <label class="field tight">
            <span>Topic label</span>
            <input name="a${n}_topic" type="text" value="${escapeHtml(item.topic || "")}" required />
          </label>
          <label class="field tight">
            <span>Discussion question</span>
            <textarea name="a${n}_question" rows="2" required>${escapeHtml(item.question || "")}</textarea>
          </label>
          <label class="field tight">
            <span>Linked slides（optional）</span>
            <input name="a${n}_slides" type="text" value="${escapeHtml(item.slides || "")}" />
          </label>
          <label class="field tight">
            <span>Extra AI instructions（可選）</span>
            <input name="a${n}_ai" type="text" value="${escapeHtml(item.ai || "")}" placeholder="Optional teacher note to the AI" />
          </label>
        </div>
      </div>`;
    }

    function renderPrepActivities(items) {
      if (!actBox) return;
      actBox.innerHTML = items.map((item, i) => actEditorHtml(item, i)).join("");
      renumberPrepActivities();
    }

    renderPrepActivities(activityList());
    renumberPrepQuestions();
    syncPrepRemoveButtons(box, ".q-editor");

    box?.addEventListener("click", (e) => {
      const fold = e.target.closest(".item-fold");
      if (fold) {
        const ed = fold.closest(".q-editor");
        if (!ed) return;
        setItemCollapsed(ed, !ed.classList.contains("is-collapsed"));
        return;
      }
      const btn = e.target.closest(".q-editor-remove");
      if (!btn || btn.disabled) return;
      const ed = btn.closest(".q-editor");
      if (!ed || box.querySelectorAll(".q-editor").length <= 1) return;
      ed.remove();
      renumberPrepQuestions();
    });

    box?.addEventListener("input", (e) => {
      const ed = e.target.closest(".q-editor");
      if (ed) syncQSummary(ed);
    });

    actBox?.addEventListener("click", (e) => {
      const fold = e.target.closest(".item-fold");
      if (fold) {
        const ed = fold.closest(".act-editor");
        if (!ed) return;
        setItemCollapsed(ed, !ed.classList.contains("is-collapsed"));
        return;
      }
      const btn = e.target.closest(".q-editor-remove");
      if (!btn || btn.disabled) return;
      const ed = btn.closest(".act-editor");
      if (!ed || actBox.querySelectorAll(".act-editor").length <= 1) return;
      ed.remove();
      renumberPrepActivities();
    });

    actBox?.addEventListener("input", (e) => {
      const ed = e.target.closest(".act-editor");
      if (ed) syncActSummary(ed);
    });

    let dragAct = null;
    actBox?.addEventListener("dragstart", (e) => {
      const handle = e.target.closest(".act-drag");
      const ed = e.target.closest(".act-editor");
      if (!handle || !ed || !actBox.contains(ed)) return;
      dragAct = ed;
      ed.classList.add("dragging");
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", ed.dataset.id || "");
    });
    actBox?.addEventListener("dragend", () => {
      dragAct?.classList.remove("dragging");
      actBox.querySelectorAll(".drag-over").forEach((el) => el.classList.remove("drag-over"));
      dragAct = null;
      renumberPrepActivities();
    });
    actBox?.addEventListener("dragover", (e) => {
      e.preventDefault();
      const over = e.target.closest(".act-editor");
      if (!dragAct || !over || over === dragAct) return;
      actBox.querySelectorAll(".drag-over").forEach((el) => el.classList.remove("drag-over"));
      over.classList.add("drag-over");
      const rect = over.getBoundingClientRect();
      const before = e.clientY < rect.top + rect.height / 2;
      if (before) actBox.insertBefore(dragAct, over);
      else actBox.insertBefore(dragAct, over.nextSibling);
    });
    actBox?.addEventListener("drop", (e) => {
      e.preventDefault();
      actBox.querySelectorAll(".drag-over").forEach((el) => el.classList.remove("drag-over"));
      renumberPrepActivities();
    });

    function appendActivity(type) {
      const count = actBox.querySelectorAll(".act-editor").length;
      if (count >= 8) return;
      const def = activityTypeById(type);
      const id = `a${Date.now().toString(36)}`;
      const item = { id, ...def.blank() };
      actBox.querySelectorAll(".act-editor:not(.is-collapsed)").forEach((ed) => {
        setItemCollapsed(ed, true);
      });
      actBox.insertAdjacentHTML("beforeend", actEditorHtml(item, count, { collapsed: false }));
      renumberPrepActivities();
      const last = actBox.querySelector(".act-editor:last-child");
      const focusSel =
        item.type === "discussion"
          ? 'input[name$="_topic"]'
          : item.type === "poll" || item.type === "quiz"
            ? 'textarea[name$="_question"]'
            : 'textarea[name$="_prompt"]';
      last?.querySelector(focusSel)?.focus();
    }

    function setPrepActTypeModalOpen(open) {
      if (!actTypeModal) return;
      actTypeModal.classList.toggle("is-hidden", !open);
      actTypeModal.hidden = !open;
    }

    function renderPrepActTypeList() {
      if (!actTypeList) return;
      actTypeList.innerHTML = ACTIVITY_TYPE_CATALOG.map(
        (t) => `<button type="button" class="act-type-option" data-act-type="${escapeHtml(t.id)}" role="listitem">
          <strong>${escapeHtml(t.label)}</strong>
          <span>${escapeHtml(t.hint)}</span>
        </button>`
      ).join("");
    }

    renderPrepActTypeList();

    addActBtn?.addEventListener("click", () => setPrepActTypeModalOpen(true));
    document.getElementById("btn-close-prep-act-type")?.addEventListener("click", () => {
      setPrepActTypeModalOpen(false);
    });
    document.getElementById("btn-cancel-prep-act-type")?.addEventListener("click", () => {
      setPrepActTypeModalOpen(false);
    });
    actTypeModal?.addEventListener("click", (e) => {
      if (e.target.id === "prep-activity-type-modal") setPrepActTypeModalOpen(false);
    });
    actTypeList?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-act-type]");
      if (!btn) return;
      e.preventDefault();
      appendActivity(btn.getAttribute("data-act-type"));
      setPrepActTypeModalOpen(false);
    });

    fileInput?.addEventListener("change", () => {
      const f = fileInput.files?.[0];
      if (!f) {
        fileName.textContent = "未選擇檔案";
        return;
      }
      const ok = /\.pptx?$/i.test(f.name);
      fileName.textContent = ok ? f.name : `${f.name}（請改選 .ppt / .pptx）`;
    });

    addBtn?.addEventListener("click", () => {
      const n = box.querySelectorAll(".q-editor").length + 1;
      if (n > 5) return;
      box.querySelectorAll(".q-editor:not(.is-collapsed)").forEach((ed) => {
        setItemCollapsed(ed, true);
      });
      const editor = document.createElement("div");
      editor.className = "q-editor";
      editor.dataset.q = String(n);
      editor.innerHTML = `
        <div class="q-editor-head">
          <strong>Q${n}</strong>
          <span class="q-summary"></span>
          <button type="button" class="item-fold" aria-expanded="true" title="Collapse">−</button>
          <button type="button" class="q-editor-remove" aria-label="Remove question" title="Remove">×</button>
        </div>
        <div class="q-body">
          <label class="field tight">
            <span>Question text</span>
            <textarea name="q${n}_text" rows="2" placeholder="Write the question students should think about" required></textarea>
          </label>
          <label class="field tight">
            <span>Linked slides</span>
            <input name="q${n}_slides" type="text" placeholder="e.g. 9–11" required />
          </label>
        </div>`;
      box.appendChild(editor);
      renumberPrepQuestions();
      editor.querySelector('textarea[name$="_text"]')?.focus();
    });

    copyBtn?.addEventListener("click", async () => {
      const url = linkInput?.value || state.prepLink || "";
      if (!url) return;
      try {
        await navigator.clipboard.writeText(url);
      } catch {
        linkInput?.select();
        document.execCommand("copy");
      }
      if (copyMsg) {
        copyMsg.hidden = false;
        window.setTimeout(() => {
          copyMsg.hidden = true;
        }, 1500);
      }
    });

    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const f = fileInput?.files?.[0];
      if (f && !/\.pptx?$/i.test(f.name)) {
        fileName.textContent = `${f.name}（請改選 .ppt / .pptx，或唔選檔）`;
        fileName.style.color = "#b33a3a";
        return;
      }
      fileName.style.color = "";
      if (!f && fileName) fileName.textContent = "未選擇（可跳過）· 已用示範投影片";

      const fd = new FormData(form);
      const editors = [...(actBox?.querySelectorAll(".act-editor") || [])];
      const items = editors
        .map((ed, i) => {
          const n = ed.dataset.n || String(i + 1);
          const id = ed.dataset.id || `a${n}`;
          const type = ed.dataset.type || "discussion";
          if (type === "poll") {
            const question = String(fd.get(`a${n}_question`) || "").trim();
            const options = String(fd.get(`a${n}_options`) || "")
              .split("\n")
              .map((line) => line.trim())
              .filter(Boolean);
            if (!question || options.length < 2) return null;
            return {
              id,
              type: "poll",
              question,
              options,
              slides: String(fd.get(`a${n}_slides`) || "").trim(),
            };
          }
          if (type === "qa") {
            const prompt = String(fd.get(`a${n}_prompt`) || "").trim();
            if (!prompt) return null;
            return {
              id,
              type: "qa",
              prompt,
              anonymous: fd.get(`a${n}_anonymous`) === "on",
              slides: String(fd.get(`a${n}_slides`) || "").trim(),
            };
          }
          if (type === "canvas") {
            const prompt = String(fd.get(`a${n}_prompt`) || "").trim();
            if (!prompt) return null;
            return {
              id,
              type: "canvas",
              prompt,
              slides: String(fd.get(`a${n}_slides`) || "").trim(),
            };
          }
          if (type === "wordcloud") {
            const prompt = String(fd.get(`a${n}_prompt`) || "").trim();
            if (!prompt) return null;
            return {
              id,
              type: "wordcloud",
              prompt,
              slides: String(fd.get(`a${n}_slides`) || "").trim(),
            };
          }
          if (type === "quiz") {
            const question = String(fd.get(`a${n}_question`) || "").trim();
            const options = String(fd.get(`a${n}_options`) || "")
              .split("\n")
              .map((line) => line.trim())
              .filter(Boolean);
            if (!question || options.length < 2) return null;
            return {
              id,
              type: "quiz",
              question,
              options,
              correct: Math.max(0, Number(fd.get(`a${n}_correct`)) || 0),
              seconds: Math.max(5, Number(fd.get(`a${n}_seconds`)) || 30),
              slides: String(fd.get(`a${n}_slides`) || "").trim(),
            };
          }
          const topic = String(fd.get(`a${n}_topic`) || "").trim();
          const question = String(fd.get(`a${n}_question`) || "").trim();
          if (!topic || !question) return null;
          return {
            id,
            type: "discussion",
            topic,
            question,
            slides: String(fd.get(`a${n}_slides`) || "").trim(),
            ai: String(fd.get(`a${n}_ai`) || "").trim(),
          };
        })
        .filter(Boolean);
      if (!items.length) return;
      state.activities = {
        saved: true,
        items,
        activeId: null,
      };

      const c = course();
      const s = section();
      const token = `${c.code}-${s.label}-w${s.currentWeek}`.replace(/\s+/g, "");
      const url = `${location.origin}${location.pathname}?prep=${encodeURIComponent(token)}#student-preclass-entry`;
      showPrepLink(url);
    });
  }

  if (name === "student-preclass-entry") {
    const form = document.getElementById("form-preclass-entry");
    if (form && state.student) {
      form.name.value = state.student.name || "";
      form.sid.value = state.student.sid || "";
      form.place.value = state.student.place || "commute";
    }
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      state.student = {
        name: String(fd.get("name") || "").trim(),
        sid: String(fd.get("sid") || "").trim(),
        place: String(fd.get("place") || "commute"),
      };
      if (!state.student.name || !state.student.sid) return;
      go("student-preclass");
    });
  }

  if (name === "student-preclass") {
    if (!state.student) {
      go("student-preclass-entry");
      return;
    }
    const who = document.getElementById("preclass-who");
    if (who) {
      const placeLabel = {
        commute: "on the way to campus",
        home: "at home / dorm",
        campus: "on campus",
      }[state.student.place] || state.student.place;
      who.textContent = `${state.student.name} · ${state.student.sid} · ${placeLabel}`;
    }
    bindPreclassMulti();
  }
  if (name === "student-lobby") {
    renderLobbyPhase();
    ["btn-lobby-refresh", "btn-lobby-refresh-poll", "btn-lobby-refresh-qa", "btn-lobby-refresh-canvas", "btn-lobby-refresh-wordcloud", "btn-lobby-refresh-quiz"].forEach((id) => {
      document.getElementById(id)?.addEventListener("click", () => renderLobbyPhase());
    });
  }

  if (name === "student-poll") {
    bindStudentPoll();
  }
  if (name === "student-qa") {
    bindStudentQa();
  }
  if (name === "student-canvas") {
    bindStudentCanvas();
  }
  if (name === "student-wordcloud") {
    bindStudentWordcloud();
  }
  if (name === "student-quiz") {
    bindStudentQuiz();
  }

  if (name === "student-auto-wait" || name === "student-group-manual") {
    if (!state.groupsStarted) {
      go("student-lobby");
      return;
    }
  }

  if (name === "student-auto-wait") {
    state.groupJoinHow = "auto";
    const status = document.getElementById("auto-status");
    const result = document.getElementById("auto-result");
    const members = document.getElementById("auto-members");
    const enter = document.getElementById("auto-enter");
    window.setTimeout(() => {
      if (status) status.textContent = "Match found.";
      result?.removeAttribute("hidden");
      members?.removeAttribute("hidden");
      enter?.removeAttribute("hidden");
    }, 900);
  }

  if (name === "student-group-manual") {
    const tabs = document.getElementById("group-mode-tabs");
    const createPanel = document.getElementById("panel-create-room");
    const joinPanel = document.getElementById("panel-join-room");
    const list = document.getElementById("host-members");

    function showMode(mode) {
      tabs?.querySelectorAll(".mode-tab").forEach((t) => {
        t.classList.toggle("on", t.getAttribute("data-mode") === mode);
      });
      createPanel?.classList.toggle("is-hidden", mode !== "create");
      joinPanel?.classList.toggle("is-hidden", mode !== "join");
    }

    tabs?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-mode]");
      if (!btn || !tabs.contains(btn)) return;
      e.preventDefault();
      showMode(btn.getAttribute("data-mode"));
    });

    document.getElementById("sim-friend-join")?.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      if (list?.querySelector("[data-f]")) return;
      const li = document.createElement("li");
      li.dataset.f = "1";
      li.textContent = "Friend (joined with G-7K2)";
      list.appendChild(li);
      btn.textContent = "Friend joined";
      btn.disabled = true;
    });

    createPanel?.querySelector("[data-go='student-chat']")?.addEventListener(
      "click",
      () => {
        state.groupJoinHow = "host";
        state.groupCode = "G-7K2";
      },
      { once: true }
    );

    joinPanel?.addEventListener("submit", (e) => {
      e.preventDefault();
      const code = String(new FormData(joinPanel).get("code") || "").trim().toUpperCase() || "G-7K2";
      state.groupJoinHow = "join";
      state.groupCode = code;
      go("student-chat");
    });

    showMode("create");
  }

  if (name === "student-chat") {
    if (!state.groupsStarted) {
      go("student-lobby");
      return;
    }
    const d = discussionOrDefault();
    const how = document.getElementById("chat-join-how");
    const codeEl = document.getElementById("chat-group-code");
    const topicEl = document.getElementById("chat-disc-topic");
    const qEl = document.getElementById("chat-disc-question");
    const goalEl = document.getElementById("chat-disc-goal");
    if (codeEl) codeEl.textContent = state.groupCode || "G-7K2";
    if (topicEl) topicEl.textContent = d.topic || "Discussion";
    if (qEl) qEl.textContent = d.question;
    if (goalEl) goalEl.textContent = d.goal ? `AI instructions: ${d.goal}` : "";
    if (goalEl) goalEl.hidden = !d.goal;
    if (how) {
      how.textContent =
        state.groupJoinHow === "auto"
          ? "Joined by auto-assign"
          : state.groupJoinHow === "host"
            ? "You started this room"
            : "Joined with invite code";
    }
    const slideLabel = document.getElementById("group-slides-label");
    if (slideLabel) {
      slideLabel.textContent = d.slides
        ? `Discussion slides ${d.slides}`
        : "Discussion slides";
    }
    bindGroupSlides();
    bindScriptedChat(document.querySelector("form[data-script=group]"), "log-group", "group");
    postGroupSummaryIfNeeded();
  }

  if (name === "teacher-live" || name === "teacher-scan") {
    state.viewingRecordWeek = null;
    if (name === "teacher-live") {
      renderLivePhase();
      syncActivityModalType(state._activityModalType || "discussion");

      document.getElementById("btn-add-activity")?.addEventListener("click", () => {
        syncActivityModalType(state._activityModalType || "discussion");
        setActivityModalOpen(true);
      });
      document.getElementById("btn-close-activity-modal")?.addEventListener("click", () => {
        setActivityModalOpen(false);
      });
      document.getElementById("btn-cancel-activity-modal")?.addEventListener("click", () => {
        setActivityModalOpen(false);
      });
      document.getElementById("activity-modal")?.addEventListener("click", (e) => {
        if (e.target.id === "activity-modal") setActivityModalOpen(false);
      });
      document.querySelectorAll("[data-activity-type]").forEach((btn) => {
        btn.addEventListener("click", () => {
          syncActivityModalType(btn.getAttribute("data-activity-type"));
        });
      });

      document.getElementById("form-add-activity")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const fd = new FormData(form);
        ensureActivities();
        const type = state._activityModalType || "discussion";
        const id = `a${Date.now().toString(36)}`;
        let item = null;
        if (type === "poll") {
          const question = String(fd.get("poll_question") || "").trim();
          const options = String(fd.get("poll_options") || "")
            .split("\n")
            .map((line) => line.trim())
            .filter(Boolean);
          if (!question || options.length < 2) return;
          item = { id, type: "poll", question, options, slides: String(fd.get("poll_slides") || "").trim() };
        } else if (type === "qa") {
          const prompt = String(fd.get("qa_prompt") || "").trim();
          if (!prompt) return;
          item = {
            id,
            type: "qa",
            prompt,
            anonymous: fd.get("qa_anonymous") === "on",
            slides: String(fd.get("qa_slides") || "").trim(),
          };
        } else if (type === "canvas") {
          const prompt = String(fd.get("canvas_prompt") || "").trim();
          if (!prompt) return;
          item = { id, type: "canvas", prompt, slides: String(fd.get("canvas_slides") || "").trim() };
        } else if (type === "wordcloud") {
          const prompt = String(fd.get("wordcloud_prompt") || "").trim();
          if (!prompt) return;
          item = { id, type: "wordcloud", prompt, slides: String(fd.get("wordcloud_slides") || "").trim() };
        } else if (type === "quiz") {
          const question = String(fd.get("quiz_question") || "").trim();
          const options = String(fd.get("quiz_options") || "")
            .split("\n")
            .map((line) => line.trim())
            .filter(Boolean);
          if (!question || options.length < 2) return;
          item = {
            id,
            type: "quiz",
            question,
            options,
            correct: Math.max(0, Number(fd.get("quiz_correct")) || 0),
            seconds: Math.max(5, Number(fd.get("quiz_seconds")) || 30),
            slides: String(fd.get("quiz_slides") || "").trim(),
          };
        } else {
          const topic = String(fd.get("topic") || "").trim();
          const question = String(fd.get("question") || "").trim();
          if (!topic || !question) return;
          item = {
            id,
            type: "discussion",
            topic,
            question,
            slides: String(fd.get("slides") || "").trim(),
            ai: String(fd.get("ai") || "").trim(),
          };
        }
        state.activities.items.push(item);
        state.activities.saved = true;
        state._livePickKey = `${activityTypeById(item.type).keyPrefix}:${id}`;
        form.reset();
        setActivityModalOpen(false);
        renderLivePhase();
      });

      document.getElementById("btn-start-activity")?.addEventListener("click", () => {
        ensureActivities();
        state.activities.saved = true;
        const pick = parseLivePickKey(state._livePickKey);
        state.summarizeAll = false;
        state.broadcasts = [];
        const panel = document.getElementById("all-summaries");
        if (panel) {
          panel.classList.add("is-hidden");
          panel.hidden = true;
        }
        ["poll-status", "qa-status", "canvas-status", "wordcloud-status", "quiz-status"].forEach((id) => {
          const el = document.getElementById(id);
          if (el) el.hidden = true;
        });

        state.activities.activeId = pick.id;
        openLiveKind(pick.kind);
        if (pick.kind === "poll") state.pollVote = null;
        if (pick.kind === "qa") state.qaPosts = mockQaSeed();
        if (pick.kind === "canvas") state.canvasNotes = mockCanvasSeed();
        if (pick.kind === "wordcloud") state.wordcloudWords = mockWordcloudSeed();
        if (pick.kind === "quiz") state.quizAnswer = null;
        renderLivePhase();
        renderBroadcastLog();
      });

      document.getElementById("form-broadcast")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const input = form.msg;
        const ok = broadcastToAllRooms(input?.value);
        if (ok && input) input.value = "";
      });

      document.getElementById("btn-ai-summarize-all")?.addEventListener("click", () => {
        if (!state.groupsStarted) return;
        state.summarizeAll = true;
        renderAllSummaries();
        clearLiveOpenFlags();
        if (state.activities) state.activities.activeId = null;
        renderLivePhase();
        const panel = document.getElementById("all-summaries");
        if (panel) {
          panel.classList.remove("is-hidden");
          panel.hidden = false;
        }
      });

      function endClassActivity(kind, statusId, beforeClose) {
        if (liveOpenKind() !== kind) return;
        const status = document.getElementById(statusId);
        if (status) status.hidden = false;
        beforeClose?.();
        window.setTimeout(() => {
          clearLiveOpenFlags();
          if (state.activities) state.activities.activeId = null;
          renderLivePhase();
        }, 700);
      }

      document.getElementById("btn-end-poll")?.addEventListener("click", () => {
        endClassActivity("poll", "poll-status", renderLivePollResults);
      });
      document.getElementById("btn-end-qa")?.addEventListener("click", () => {
        endClassActivity("qa", "qa-status", renderLiveQaBoard);
      });
      document.getElementById("btn-end-canvas")?.addEventListener("click", () => {
        endClassActivity("canvas", "canvas-status", renderLiveCanvasBoard);
      });
      document.getElementById("btn-end-wordcloud")?.addEventListener("click", () => {
        endClassActivity("wordcloud", "wordcloud-status", renderLiveWordcloud);
      });
      document.getElementById("btn-end-quiz")?.addEventListener("click", () => {
        endClassActivity("quiz", "quiz-status", renderLiveQuizResults);
      });

      renderBroadcastLog();
    }
  }

  if (name === "teacher-prep") {
    state.viewingRecordWeek = null;
  }
}

document.body.addEventListener("click", (e) => {
  const t = e.target.closest("[data-go]");
  if (!t) return;
  const dest = t.getAttribute("data-go");
  if (dest === "record-detail" && state.viewingRecordWeek == null) {
    const s = section();
    const currentRec = s.records.find((r) => r.week === s.currentWeek);
    state.viewingRecordWeek =
      currentRec?.week ??
      [...s.records].sort((a, b) => b.week - a.week)[0]?.week ??
      null;
  }
  go(dest);
});

const initial = location.hash.replace(/^#/, "").split("?")[0];
bindMobileToggle();
bindAiCheckBot();
go(SCREENS.includes(initial) ? initial : "role-pick");
