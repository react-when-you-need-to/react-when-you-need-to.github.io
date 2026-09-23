# React When You Need To

Anonymous supplementary website for **React When You Need To: Event-Triggered Asynchronous Inference for VLA Policies**, an ICRA submission.

## Content authority

The supplied `React_When_You_Need_To.pdf` is the source of truth for methods, parameters, and results. The supplied `video react vla.pptx` provides the narrative sequence, timeline illustration, and the original embedded experiment clips. `1188.MP4` provides the complete supplementary film. Local robot code is not used to revise or supplement the manuscript claims.

| Slides | Website | Paper reference |
| --- | --- | --- |
| 1 | Title and anonymous submission label | Title and abstract |
| 2 | Inference-gap trade-off | Sections III–IV |
| 3 | Event estimator, scheduling, blending | Section IV, Figure 1, equations 8–9 |
| 4 | Compared methods | Section V-B |
| 5–6 | Static-obstacle clips and results | Section VI-A, Table II(a) |
| 7–8 | Dynamic-obstacle clips and results | Section VI-B.1, Table II(b) |
| 9–10 | Moving-target clips and results | Section VI-B.2, Figures 4, 6–7 |
| 11 | Overall comparison | Section VI-C, Figure 8 |
| 12 | Paper and video resources | Anonymous closing section |

The abstract omits the original sentence linking back to the project page. The overall table displays the equally weighted mean (0–100%) instead of the sum (0–300) shown in Figure 8. This transformation is explicitly labeled. Task 1 stage metrics may include manual recovery; full-task success never does. Individual clips illustrate trials and are not additional quantitative measurements.

## Files and playback

- `index.html`: all scientific text, tables, and accessible markup.
- `styles.css`: responsive editorial layout, local font fallbacks, reduced-motion support.
- `script.js`: video chapter selection, keyboard-accessible experiment tabs, method filtering, case selection, and pause of inactive videos.
- `assets/paper.pdf`: supplied anonymous manuscript; its author metadata is empty.
- `assets/supplementary.mp4`: full video, losslessly remuxed with fast-start indexing and metadata removed.
- `assets/{static,dynamic,target}-{ours,sync,rtc}.mp4`: original embedded PPT clips, losslessly remuxed. Additional selected ZIP clips use the same scene/method naming. Playback timing is preserved.
- `assets/*.jpg`: locally extracted video posters.
- `assets/method-timeline.png`: original timeline image extracted from slide 3.
- `assets/chapters.vtt`: navigation chapters, not speech captions.

All assets are local; there are no remote fonts, analytics, frameworks, or build dependencies. Videos use native controls and do not autoplay. Only the main video preloads metadata; other videos load on demand. If JavaScript is disabled, all three experiment sections remain readable.

## Preview and deployment

Serve the folder with a static server that supports HTTP byte-range requests to test video chapter seeking. A basic `python3 -m http.server` can display the page but may not support seeking. Upload `index.html`, `styles.css`, `script.js`, `.nojekyll`, and the entire `assets/` directory to the hosting root. The same relative paths work under a directory such as `/research/real_time_chunking/`; redirect the slashless URL to the trailing-slash form.

The assets total approximately 81 MiB; no individual asset is larger than 30 MiB. The PPT itself is not distributed. Author names, affiliations, emails, and identifying code links are omitted from the site. No production domain is configured here.

## Design references researched

- [GLM-V PDF-to-academic-website skill](https://github.com/zai-org/GLM-V/tree/main/skills/glmv-pdf-to-web): relevant academic-page workflow, reviewed as a reference; not installed or executed.
- [Academic project page template](https://github.com/eliahuhorwitz/Academic-project-page-template): research-page organization reference; template code not copied.
- Design implemented using the requested Frontend Design skill, with a warm neutral background, forest-green accents, serif headlines, chapter navigation, and selectable experiment panels.

## Selected video cases (22 September update)

The page begins with the title, abstract, then the unchanged full film. The experiment section offers three setting tabs, a method filter, and a selectable case list. Switching cases pauses and resets the player without autoplay. Failure labels use both explicit wording and a contrasting rust color. The reading guide emphasizes its key terms in bold italic. The headline requested as `+55%` is explicitly described as the absolute difference `95% − 40%` (55 percentage points), not a relative percentage improvement.

24 cases were selected from the 32-file supplied ZIP, reusing the nine existing media assets where applicable. The selection includes the original comparisons, a side-view grasp failure, additional method examples, and paired successful/failed moving-target trials for all four fixed gaps. Older RTC footage and some redundant demonstrations were omitted. Labels explicitly present in filenames or supplied slides are retained; otherwise clips are labeled as selected demonstrations without assigning an unverified success/failure outcome. These clips do not change the paper's aggregate results.

| Setting | Cases | Methods represented |
| --- | ---: | --- |
| Static obstacle | 6 | Ours, Synchronous, RTC, DynamicVLA, fixed gaps 5 and 25 |
| Dynamic obstacle | 5 | Ours, Synchronous, RTC, DynamicVLA, fixed gap 25 |
| Moving target | 13 | Ours, Synchronous, RTC, DynamicVLA, fixed gaps 0, 5, 25 and 45 |

The complete film SHA-256 remains `d84d921b261b479e889a28461a6d71972c514d02b35d962c1ae16444ce51248f`.
