'use strict';
const player = document.querySelector('#main-video');
const status = document.querySelector('#playback-status');
const chapters = [...document.querySelectorAll('.chapter')];
chapters.forEach((button) => {
  button.addEventListener('click', () => {
    const seekAndPlay = () => {
      player.currentTime = Number(button.dataset.time);
      player.play().then(() => { status.textContent = ''; }).catch(() => {
        status.textContent = 'Chapter selected. Use the video play button to start playback.';
      });
    };
    if (player.readyState >= 1) seekAndPlay();
    else {
      player.addEventListener('loadedmetadata', seekAndPlay, { once: true });
      player.load();
    }
  });
});
player.addEventListener('timeupdate', () => {
  const active = chapters.findLast((button) => Number(button.dataset.time) <= player.currentTime);
  chapters.forEach((button) => {
    if (button === active) button.setAttribute('aria-current', 'true');
    else button.removeAttribute('aria-current');
  });
});
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab, moveFocus = false) {
  tabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    const panel = document.getElementById(item.dataset.panel);
    panel.hidden = !selected;
    if (!selected) panel.querySelectorAll('video').forEach((video) => video.pause());
  });
  if (moveFocus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', (event) => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectTab(tabs[next], true); }
  });
});
selectTab(tabs[0]);
// The catalog contains only locally selected, reviewed video assets.
const demoCatalog = [
  {
    "id": "static-ours",
    "scene": "static",
    "method": "Ours",
    "outcome": "success",
    "label": "Full-task success",
    "description": "Pick, transport around the static obstacle, and place. Includes the recorded inference-gap trace.",
    "src": "assets/static-ours.mp4",
    "poster": "assets/static-ours.jpg",
    "duration": 33.33
  },
  {
    "id": "static-sync",
    "scene": "static",
    "method": "Synchronous",
    "outcome": "success",
    "label": "Full-task success",
    "description": "A successful pick-and-place trial with a stationary obstacle.",
    "src": "assets/static-sync.mp4",
    "poster": "assets/static-sync.jpg",
    "duration": 25.83
  },
  {
    "id": "static-rtc",
    "scene": "static",
    "method": "RTC",
    "outcome": "failure",
    "label": "Failed grasp",
    "description": "RTC does not establish a stable grasp in this illustrated trial.",
    "src": "assets/static-rtc.mp4",
    "poster": "assets/static-rtc.jpg",
    "duration": 30.07
  },
  {
    "id": "static-dynamicvla",
    "scene": "static",
    "method": "DynamicVLA",
    "outcome": "example",
    "label": "Grasping and transport",
    "description": "A selected DynamicVLA execution. Later stages may follow manual recovery; see the evaluation protocol below.",
    "src": "assets/static-dynamicvla.mp4",
    "poster": "assets/static-dynamicvla.jpg",
    "duration": 37.2
  },
  {
    "id": "static-gap5-grasp",
    "scene": "static",
    "method": "Fixed-gap (g = 5)",
    "outcome": "failure",
    "label": "Failed grasp",
    "description": "Side-camera view of a grasping failure with the short fixed inference gap.",
    "src": "assets/static-gap5-grasp.mp4",
    "poster": "assets/static-gap5-grasp.jpg",
    "duration": 12.0
  },
  {
    "id": "static-gap25",
    "scene": "static",
    "method": "Fixed-gap (g = 25)",
    "outcome": "example",
    "label": "Static-obstacle trial",
    "description": "Grasping, obstacle transport, and placement with a longer fixed inference gap.",
    "src": "assets/static-gap25.mp4",
    "poster": "assets/static-gap25.jpg",
    "duration": 29.6
  },
  {
    "id": "dynamic-ours",
    "scene": "dynamic",
    "method": "Ours",
    "outcome": "success",
    "label": "Obstacle avoidance",
    "description": "Repeated obstruction and avoidance, with the recorded inference-gap trace.",
    "src": "assets/dynamic-ours.mp4",
    "poster": "assets/dynamic-ours.jpg",
    "duration": 35.3
  },
  {
    "id": "dynamic-sync",
    "scene": "dynamic",
    "method": "Synchronous",
    "outcome": "failure",
    "label": "Collision",
    "description": "The robot continues its action sequence and collides with the hand in this trial.",
    "src": "assets/dynamic-sync.mp4",
    "poster": "assets/dynamic-sync.jpg",
    "duration": 17.3
  },
  {
    "id": "dynamic-rtc",
    "scene": "dynamic",
    "method": "RTC",
    "outcome": "failure",
    "label": "Failed grasp",
    "description": "A grasping failure in the illustrated RTC trial. Later stages may follow manual recovery.",
    "src": "assets/dynamic-rtc.mp4",
    "poster": "assets/dynamic-rtc.jpg",
    "duration": 46.5
  },
  {
    "id": "dynamic-dynamicvla",
    "scene": "dynamic",
    "method": "DynamicVLA",
    "outcome": "example",
    "label": "Dynamic-obstacle trial",
    "description": "A selected execution under repeated hand obstructions. Interpret stage outcomes using the protocol below.",
    "src": "assets/dynamic-dynamicvla.mp4",
    "poster": "assets/dynamic-dynamicvla.jpg",
    "duration": 63.67
  },
  {
    "id": "dynamic-gap25",
    "scene": "dynamic",
    "method": "Fixed-gap (g = 25)",
    "outcome": "example",
    "label": "Repeated obstruction",
    "description": "A long-gap execution under repeated hand obstructions.",
    "src": "assets/dynamic-gap25.mp4",
    "poster": "assets/dynamic-gap25.jpg",
    "duration": 36.43
  },
  {
    "id": "target-ours",
    "scene": "target",
    "method": "Ours",
    "outcome": "success",
    "label": "Successful placement",
    "description": "Successful placement onto the moving plate, with the recorded inference-gap trace.",
    "src": "assets/target-ours.mp4",
    "poster": "assets/target-ours.jpg",
    "duration": 9.0
  },
  {
    "id": "target-sync",
    "scene": "target",
    "method": "Synchronous",
    "outcome": "failure",
    "label": "Failed placement",
    "description": "The object is released away from the relocated target plate.",
    "src": "assets/target-sync.mp4",
    "poster": "assets/target-sync.jpg",
    "duration": 8.63
  },
  {
    "id": "target-rtc",
    "scene": "target",
    "method": "RTC",
    "outcome": "failure",
    "label": "Near success · failed placement",
    "description": "A near-successful RTC placement, counted as a failure.",
    "src": "assets/target-rtc.mp4",
    "poster": "assets/target-rtc.jpg",
    "duration": 20.5
  },
  {
    "id": "target-rtc-success",
    "scene": "target",
    "method": "RTC",
    "outcome": "success",
    "label": "Successful placement",
    "description": "A successful RTC placement from the selected demonstrations.",
    "src": "assets/target-rtc-success.mp4",
    "poster": "assets/target-rtc-success.jpg",
    "duration": 12.73
  },
  {
    "id": "target-dynamicvla",
    "scene": "target",
    "method": "DynamicVLA",
    "outcome": "example",
    "label": "Moving-target trial",
    "description": "A selected DynamicVLA execution with the target being relocated.",
    "src": "assets/target-dynamicvla.mp4",
    "poster": "assets/target-dynamicvla.jpg",
    "duration": 13.1
  },
  {
    "id": "target-gap0-success",
    "scene": "target",
    "method": "Fixed-gap (g = 0)",
    "outcome": "success",
    "label": "Successful placement",
    "description": "A successful moving-target placement with fixed inference gap g = 0.",
    "src": "assets/target-gap0-success.mp4",
    "poster": "assets/target-gap0-success.jpg",
    "duration": 11.0
  },
  {
    "id": "target-gap0-fail",
    "scene": "target",
    "method": "Fixed-gap (g = 0)",
    "outcome": "failure",
    "label": "Failed placement",
    "description": "A failed moving-target placement with fixed inference gap g = 0.",
    "src": "assets/target-gap0-fail.mp4",
    "poster": "assets/target-gap0-fail.jpg",
    "duration": 10.5
  },
  {
    "id": "target-gap5-success",
    "scene": "target",
    "method": "Fixed-gap (g = 5)",
    "outcome": "success",
    "label": "Successful placement",
    "description": "A successful moving-target placement with fixed inference gap g = 5.",
    "src": "assets/target-gap5-success.mp4",
    "poster": "assets/target-gap5-success.jpg",
    "duration": 14.27
  },
  {
    "id": "target-gap5-fail",
    "scene": "target",
    "method": "Fixed-gap (g = 5)",
    "outcome": "failure",
    "label": "Failed placement",
    "description": "A failed moving-target placement with fixed inference gap g = 5.",
    "src": "assets/target-gap5-fail.mp4",
    "poster": "assets/target-gap5-fail.jpg",
    "duration": 14.63
  },
  {
    "id": "target-gap25-success",
    "scene": "target",
    "method": "Fixed-gap (g = 25)",
    "outcome": "success",
    "label": "Successful placement",
    "description": "A successful moving-target placement with fixed inference gap g = 25.",
    "src": "assets/target-gap25-success.mp4",
    "poster": "assets/target-gap25-success.jpg",
    "duration": 9.43
  },
  {
    "id": "target-gap25-fail",
    "scene": "target",
    "method": "Fixed-gap (g = 25)",
    "outcome": "failure",
    "label": "Failed placement",
    "description": "A failed moving-target placement with fixed inference gap g = 25.",
    "src": "assets/target-gap25-fail.mp4",
    "poster": "assets/target-gap25-fail.jpg",
    "duration": 9.53
  },
  {
    "id": "target-gap45-success",
    "scene": "target",
    "method": "Fixed-gap (g = 45)",
    "outcome": "success",
    "label": "Successful placement",
    "description": "A successful moving-target placement with fixed inference gap g = 45.",
    "src": "assets/target-gap45-success.mp4",
    "poster": "assets/target-gap45-success.jpg",
    "duration": 10.83
  },
  {
    "id": "target-gap45-fail",
    "scene": "target",
    "method": "Fixed-gap (g = 45)",
    "outcome": "failure",
    "label": "Failed placement",
    "description": "A failed moving-target placement with fixed inference gap g = 45.",
    "src": "assets/target-gap45-fail.mp4",
    "poster": "assets/target-gap45-fail.jpg",
    "duration": 10.5
  }
];
document.querySelectorAll('.demo-browser').forEach((browser) => {
  const videos = demoCatalog.filter((demo) => demo.scene === browser.dataset.scene);
  const filter = browser.querySelector('.demo-method');
  const video = browser.querySelector('.demo-player');
  const cases = [...browser.querySelectorAll('.demo-case')];
  let selectedId = videos[0].id;
  function selectCase(id) {
    const demo = videos.find((entry) => entry.id === id);
    if (!demo) return;
    video.pause();
    video.poster = demo.poster;
    video.querySelector('source').src = demo.src;
    video.setAttribute('aria-label', `${demo.method}: ${demo.label}`);
    video.load();
    selectedId = id;
    browser.querySelector('.demo-method-name').textContent = demo.method;
    const outcome = browser.querySelector('.demo-outcome');
    outcome.textContent = demo.label;
    outcome.dataset.outcome = demo.outcome;
    browser.querySelector('.demo-description').textContent = demo.description;
    browser.querySelector('.demo-download').href = demo.src;
    cases.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.demo === id)));
  }
  cases.forEach((button) => button.addEventListener('click', () => selectCase(button.dataset.demo)));
  filter.addEventListener('change', () => {
    const matching = videos.filter((demo) => filter.value === 'all' || demo.method === filter.value);
    cases.forEach((button) => { button.hidden = !matching.some((demo) => demo.id === button.dataset.demo); });
    if (!matching.some((demo) => demo.id === selectedId)) selectCase(matching[0].id);
    browser.querySelector('.demo-count').textContent = `${matching.length} ${matching.length === 1 ? 'case' : 'cases'}`;
  });
});

// Native controls remain available; avoid several demos playing over one another.
document.querySelectorAll('video').forEach((video) => {
  video.addEventListener('play', () => {
    document.querySelectorAll('video').forEach((other) => { if (other !== video) other.pause(); });
  });
});
