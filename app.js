// Flamingo Legs Racing — Sam Romick Motorcycle Racing Hub
// Comprehensive results across MYLAPS Speedhive (AFM Road Racing) and MotoTally (Off-Road / Desert / Hare Scrambles)

const ALL_RACE_RESULTS = [
  // --- OFF-ROAD, DESERT & ENDURO / HARE SCRAMBLE (MOTOTALLY & GPS TIMED) ---
  {
    id: "vcgp-2026",
    date: "Apr 2026",
    timingSource: "mototally",
    discipline: "offroad",
    series: "Virginia City Grand Prix (VCGP)",
    event: "Virginia City Grand Prix 2026",
    track: "Virginia City, NV (Historic Mining Hills)",
    trackKey: "desert",
    raceClass: "Ironman / Dual-Sport 4-Stroke",
    bike: "Suzuki DR650 / Dual-Sport",
    number: "#19",
    position: 7,
    posLabel: "Top 10 Finish",
    laps: "3 Laps (3+ Hours)",
    notes: "Grueling rocky desert single-track, technical gulches & hillclimbs through historic Nevada mining trails.",
    timingUrl: "https://www.moto-tally.com/",
    videoId: "B9gX1GhATls"
  },
  {
    id: "biltwell-100-2026",
    date: "Apr 2026",
    timingSource: "mototally",
    discipline: "offroad",
    series: "Biltwell 100 Desert Race",
    event: "Biltwell 100 '26 (Cal City)",
    track: "California City Desert OHV",
    trackKey: "desert",
    raceClass: "Modern Intermediate / Big Twin",
    bike: "Suzuki DR650 / Desert Prep",
    number: "#19",
    position: 7,
    posLabel: "7th Place",
    laps: "100 Miles",
    notes: "Deep silt beds, rocky whoops, and high-speed lakebed runs across 100 miles of Mojave desert.",
    timingUrl: "https://www.moto-tally.com/",
    videoId: "zPy-Z8b2SMM"
  },
  {
    id: "sheetiron-300-2026",
    date: "May 2026",
    timingSource: "mototally",
    discipline: "offroad",
    series: "Oakland MC Sheetiron 300",
    event: "Sheetiron 300 Hard Splits",
    track: "Mendocino National Forest / Fort Bragg",
    trackKey: "enduro",
    raceClass: "Dual Sport Hard Split Finisher",
    bike: "Suzuki DR650 Heavy Dual-Sport",
    number: "#19",
    position: 1,
    posLabel: "Clean Finish",
    laps: "300+ Miles",
    notes: "Conquered all optional A-loop hard splits, boulder gardens, and mud ascents on the heavy 650.",
    timingUrl: "https://www.moto-tally.com/",
    videoId: "EvPaMUZcnnE"
  },
  {
    id: "d36-foresthill-trail5",
    date: "Oct 2026",
    timingSource: "mototally",
    discipline: "offroad",
    series: "District 36 Cross-Country / Enduro",
    event: "Foresthill OHV Trail 5 Hard Loop",
    track: "Sugar Pine / Foresthill OHV",
    trackKey: "enduro",
    raceClass: "Open Dual Sport / Vet",
    bike: "Suzuki DR650",
    number: "#19",
    position: 4,
    posLabel: "Top 5",
    laps: "Full Loop",
    notes: "Technical roots, switchbacks, and ridge singletrack navigation at race pace.",
    timingUrl: "https://www.moto-tally.com/",
    videoId: "AybdfhtYB_o"
  },

  // --- ROAD RACING & SUPERBIKE (MYLAPS SPEEDHIVE & AFM) ---
  {
    id: "afm-2026-bw-r4-700sbk",
    date: "Aug 29–30, 2026",
    timingSource: "speedhive",
    discipline: "road",
    series: "AFM Round 4",
    event: "AFM Buttonwillow R4",
    track: "Buttonwillow Raceway (The Circuit)",
    trackKey: "buttonwillow",
    raceClass: "700 Twins Superbike Expert (700 TW SBK E)",
    bike: "Suzuki SV650",
    number: "#787",
    position: 8,
    posLabel: "P8 Expert",
    laps: "6 Laps",
    notes: "Classified Expert finish on the brand new Buttonwillow 'The Circuit' configuration battling national-level twins.",
    timingUrl: "https://speedhive.mylaps.com/",
    videoId: "B4Bh7xgIk_I"
  },
  {
    id: "afm-2026-bw-r4-f3",
    date: "Aug 30, 2026",
    timingSource: "speedhive",
    discipline: "road",
    series: "AFM Round 4",
    event: "AFM Buttonwillow R4",
    track: "Buttonwillow Raceway (The Circuit)",
    trackKey: "buttonwillow",
    raceClass: "Formula III (F3)",
    bike: "Suzuki SV650",
    number: "#787",
    position: 5,
    posLabel: "Top 5",
    laps: "6 Laps",
    notes: "Front and rear onboard telemetry battle in Formula 3 carrying huge mid-corner velocity.",
    timingUrl: "https://speedhive.mylaps.com/",
    videoId: "0SRb_x4hMrY"
  },
  {
    id: "afm-2016-thill-lw",
    date: "May 29, 2016",
    timingSource: "speedhive",
    discipline: "road",
    series: "AFM Championship",
    event: "AFM Thunderhill Classic",
    track: "Thunderhill Raceway Park",
    trackKey: "thunderhill",
    raceClass: "Lightweight Twins / SV650 Feature",
    bike: "Suzuki SV650",
    number: "#19",
    position: 1,
    posLabel: "1st Place 🏆",
    laps: "6 Laps",
    notes: "Dominant 1st place overall victory ahead of Martin Sullivan and Aaron Tulchinsky.",
    timingUrl: "https://speedhive.mylaps.com/",
    videoId: "EcwRxgxEXaI"
  },
  {
    id: "afm-2015-bw-650prod",
    date: "Oct 2015",
    timingSource: "speedhive",
    discipline: "road",
    series: "AFM Round 6",
    event: "AFM Buttonwillow Finale",
    track: "Buttonwillow Raceway Park",
    trackKey: "buttonwillow",
    raceClass: "650cc Production",
    bike: "Suzuki SV650",
    number: "#787",
    position: 1,
    posLabel: "1st Place 🏆",
    laps: "6 Laps",
    notes: "Victory in 650cc Production plus podium finish in Spears Racing 650cc Twins.",
    timingUrl: "https://speedhive.mylaps.com/",
    videoId: "EcwRxgxEXaI"
  },
  {
    id: "afm-2015-sonoma-sep",
    date: "Sep 2015",
    timingSource: "speedhive",
    discipline: "road",
    series: "AFM Championship",
    event: "AFM Sonoma Raceway",
    track: "Sonoma Raceway",
    trackKey: "sonoma",
    raceClass: "Lightweight / 650 Twins",
    bike: "Suzuki SV650",
    number: "#787",
    position: 1,
    posLabel: "1st Place 🏆",
    laps: "6 Laps",
    notes: "Back-to-back Sonoma victory ahead of Ian Smith and Jason Vestri.",
    timingUrl: "https://speedhive.mylaps.com/",
    videoId: "NXTrmSVQfj4"
  },
  {
    id: "afm-2015-sonoma-may",
    date: "May 2015",
    timingSource: "speedhive",
    discipline: "road",
    series: "AFM Round 2",
    event: "AFM Sonoma Raceway",
    track: "Sonoma Raceway",
    trackKey: "sonoma",
    raceClass: "SV650 / Lightweight Twins",
    bike: "Suzuki SV650",
    number: "#787",
    position: 1,
    posLabel: "1st Place 🏆",
    laps: "6 Laps",
    notes: "1st place overall win at Sonoma Raceway ahead of Aaron Tulchinsky & Alan Cunningham.",
    timingUrl: "https://speedhive.mylaps.com/",
    videoId: "NXTrmSVQfj4"
  },
  {
    id: "afm-2015-bw-mar",
    date: "Mar 2015",
    timingSource: "speedhive",
    discipline: "road",
    series: "AFM Season Opener",
    event: "AFM Buttonwillow Opener",
    track: "Buttonwillow Raceway Park",
    trackKey: "buttonwillow",
    raceClass: "Spears 650 Twins",
    bike: "Suzuki SV650",
    number: "#787",
    position: 3,
    posLabel: "3rd Podium 🥉",
    laps: "6 Laps",
    notes: "Podium finish behind Ralph Staropoli and Brandon Crawford.",
    timingUrl: "https://speedhive.mylaps.com/",
    videoId: "Vud_ZtwFFKk"
  },
  {
    id: "afm-2014-thill-aug",
    date: "Aug 2014",
    timingSource: "speedhive",
    discipline: "road",
    series: "AFM Round 5",
    event: "AFM Thunderhill",
    track: "Thunderhill Raceway Park",
    trackKey: "thunderhill",
    raceClass: "650cc Twins",
    bike: "Suzuki SV650",
    number: "#781",
    position: 2,
    posLabel: "2nd Podium 🥈",
    laps: "6 Laps",
    notes: "2nd place podium finish ahead of Daniela Fredrick.",
    timingUrl: "https://speedhive.mylaps.com/",
    videoId: "CuZw8ZfQ3OU"
  },
  {
    id: "afm-2014-thill-oct",
    date: "Oct 2014",
    timingSource: "speedhive",
    discipline: "road",
    series: "AFM Finale",
    event: "AFM Thunderhill Finale",
    track: "Thunderhill Raceway Park",
    trackKey: "thunderhill",
    raceClass: "Lightweight / 650 Twins",
    bike: "Suzuki SV650",
    number: "#787",
    position: 3,
    posLabel: "3rd Podium 🥉",
    laps: "6 Laps",
    notes: "Podium finish to wrap up AFM breakout season.",
    timingUrl: "https://speedhive.mylaps.com/",
    videoId: "w42FeOJihXA"
  },
  {
    id: "afm-2014-bw-nov",
    date: "Mar 2014",
    timingSource: "speedhive",
    discipline: "road",
    series: "AFM Round 1",
    event: "AFM Buttonwillow",
    track: "Buttonwillow Raceway Park",
    trackKey: "buttonwillow",
    raceClass: "Formula IV & Novice 650 Twins",
    bike: "2003 Suzuki SV650",
    number: "#787",
    position: 2,
    posLabel: "2nd Podium 🥈",
    laps: "6 Laps",
    notes: "Multiple podiums in AFM debut season battling Brandon Crawford.",
    timingUrl: "https://speedhive.mylaps.com/",
    videoId: "5bVuDWbZ_zk"
  }
];

const VIDEOS = [
  {
    id: "B4Bh7xgIk_I",
    title: "Formula 3 Race with the AFM at Buttonwillow's The Circuit Round 4 '26",
    track: "Buttonwillow (The Circuit)",
    discipline: "Road Racing",
    date: "Sep 2026",
    thumb: "https://i.ytimg.com/vi/B4Bh7xgIk_I/hqdefault.jpg",
    desc: "Full onboard race footage from AFM Round 4 at Buttonwillow's new circuit layout in Formula 3."
  },
  {
    id: "B9gX1GhATls",
    title: "Virginia City Grand Prix Sunday Start & Desert Rock Scramble",
    track: "Virginia City, Nevada",
    discipline: "Desert / Off-Road",
    date: "Apr 2026",
    thumb: "https://i.ytimg.com/vi/B9gX1GhATls/hqdefault.jpg",
    desc: "Bar-to-bar chaos through historic Virginia City streets down into steep desert mining ravines."
  },
  {
    id: "zPy-Z8b2SMM",
    title: "Biltwell 100 '26 Desert Race Onboard & High-Speed Lakebeds",
    track: "Mojave Desert (Cal City)",
    discipline: "Desert 100-Miler",
    date: "Apr 2026",
    thumb: "https://i.ytimg.com/vi/zPy-Z8b2SMM/hqdefault.jpg",
    desc: "Full-gas throttle control across rocky whoops, silt washes, and high-speed dry lakebeds."
  },
  {
    id: "EvPaMUZcnnE",
    title: "Sheetiron 300 Hard Splits on a Suzuki DR650",
    track: "Mendocino National Forest",
    discipline: "Enduro / Trail",
    date: "May 2026",
    thumb: "https://i.ytimg.com/vi/EvPaMUZcnnE/hqdefault.jpg",
    desc: "Tackling the most punishing rock steps, ridge singletracks, and mud ascents on a heavyweight DR650."
  },
  {
    id: "0SRb_x4hMrY",
    title: "Formula 3 Rear Cam — AFM R4 '26 Buttonwillow The Circuit",
    track: "Buttonwillow (The Circuit)",
    discipline: "Road Racing",
    date: "Sep 2026",
    thumb: "https://i.ytimg.com/vi/0SRb_x4hMrY/hqdefault.jpg",
    desc: "Tail-section rear-facing perspective showing apex speeds and late-braking battles."
  },
  {
    id: "CuZw8ZfQ3OU",
    title: "SV650 Vs Big Bikes at Thunderhill West 10-Turn Clockwise",
    track: "Thunderhill West",
    discipline: "Track Battle",
    date: "Oct 2026",
    thumb: "https://i.ytimg.com/vi/CuZw8ZfQ3OU/hqdefault.jpg",
    desc: "Carrying massive corner speed on the Suzuki SV650 to reel in 600cc and 1000cc superbikes."
  },
  {
    id: "NXTrmSVQfj4",
    title: "FZ-07 Vs SV650 Battle At Sonoma Raceway",
    track: "Sonoma Raceway",
    discipline: "Road Racing",
    date: "AFM Classic",
    thumb: "https://i.ytimg.com/vi/NXTrmSVQfj4/hqdefault.jpg",
    desc: "Nose-to-tail lightweight twin warfare through Sonoma Raceway's technical elevation changes."
  },
  {
    id: "EcwRxgxEXaI",
    title: "SV650 Onboard Race Win! — Checkered Flag P1",
    track: "AFM Championship",
    discipline: "Road Racing Win",
    date: "AFM Feature",
    thumb: "https://i.ytimg.com/vi/EcwRxgxEXaI/hqdefault.jpg",
    desc: "From launch to the checkered flag: taking 1st place onboard the Suzuki SV650."
  }
];

const PHOTOS = [
  // Instagram & Off-road / Trail captures
  {
    id: "photo-ig-1",
    title: "Virginia City Grand Prix Desert Singletrack Attack",
    caption: "Winding down the historic mining mountain trails of Virginia City, NV during the VCGP.",
    src: "https://i.ytimg.com/vi/B9gX1GhATls/hqdefault.jpg",
    category: "offroad",
    source: "Instagram @flamingolegs",
    igHandle: "@flamingolegs",
    shareUrl: "https://www.instagram.com/flamingolegs"
  },
  {
    id: "photo-ig-2",
    title: "Biltwell 100 Mojave Desert Sand Wash",
    caption: "Pinned through the sand washes and whoops of California City in the Biltwell 100-mile race.",
    src: "https://i.ytimg.com/vi/zPy-Z8b2SMM/hqdefault.jpg",
    category: "offroad",
    source: "Instagram @flamingolegs",
    igHandle: "@flamingolegs",
    shareUrl: "https://www.instagram.com/flamingolegs"
  },
  {
    id: "photo-ig-3",
    title: "Sheetiron 300 Redwoods & Ridge Climb",
    caption: "Mendocino forest hard splits on the Suzuki DR650 — pure Northern California enduro terrain.",
    src: "https://i.ytimg.com/vi/EvPaMUZcnnE/hqdefault.jpg",
    category: "offroad",
    source: "Instagram @flamingolegs",
    igHandle: "@flamingolegs",
    shareUrl: "https://www.instagram.com/flamingolegs"
  },
  {
    id: "photo-ig-4",
    title: "Carnegie SVRA Steep Hillclimb Descent",
    caption: "Testing balance, braking, and line choice on the steep hill climbs of Carnegie SVRA.",
    src: "https://i.ytimg.com/vi/gXb7R78VG_Q/hqdefault.jpg",
    category: "offroad",
    source: "Instagram @flamingolegs",
    igHandle: "@flamingolegs",
    shareUrl: "https://www.instagram.com/flamingolegs"
  },
  {
    id: "photo-ig-5",
    title: "Foresthill OHV Trail 5 Singletrack Flow",
    caption: "High Sierra singletrack cross-training between asphalt AFM race weekends.",
    src: "https://i.ytimg.com/vi/AybdfhtYB_o/hqdefault.jpg",
    category: "offroad",
    source: "Instagram @flamingolegs",
    igHandle: "@flamingolegs",
    shareUrl: "https://www.instagram.com/flamingolegs"
  },
  {
    id: "photo-ig-6",
    title: "Biltwell 100 Silty Hill Battle",
    caption: "Traffic in the deep silt ruts during Lap 2 at the Biltwell 100 desert race.",
    src: "https://i.ytimg.com/vi/gc8mog53HzE/hqdefault.jpg",
    category: "offroad",
    source: "Instagram @flamingolegs",
    igHandle: "@flamingolegs",
    shareUrl: "https://www.instagram.com/flamingolegs"
  },

  // Road Racing Captures
  {
    id: "photo-rr-1",
    title: "Buttonwillow 'The Circuit' Curbing Attack (AFM R4)",
    caption: "Max lean angle over the apex curbing during AFM Round 4 Formula 3.",
    src: "https://i.ytimg.com/vi/B4Bh7xgIk_I/hqdefault.jpg",
    category: "road",
    source: "Flamingo Legs Racing",
    igHandle: "@flamingolegs",
    shareUrl: "https://www.youtube.com/watch?v=B4Bh7xgIk_I"
  },
  {
    id: "photo-rr-2",
    title: "Sonoma Raceway 700 Twins Lead Pack",
    caption: "Charging into Sonoma's technical uphill esses battling front-running twins.",
    src: "https://i.ytimg.com/vi/NXTrmSVQfj4/hqdefault.jpg",
    category: "road",
    source: "Flamingo Legs Racing",
    igHandle: "@flamingolegs",
    shareUrl: "https://www.youtube.com/watch?v=NXTrmSVQfj4"
  },
  {
    id: "photo-rr-3",
    title: "AFM 700 Production Multi-Angle Battle",
    caption: "Bar-to-bar lightweight racing with zero margin for error.",
    src: "https://i.ytimg.com/vi/Vud_ZtwFFKk/hqdefault.jpg",
    category: "road",
    source: "Flamingo Legs Racing",
    igHandle: "@flamingolegs",
    shareUrl: "https://www.youtube.com/watch?v=Vud_ZtwFFKk"
  },
  {
    id: "photo-rr-4",
    title: "P1 Checkered Flag Finish",
    caption: "Tucked behind the windscreen taking an AFM 1st place feature win.",
    src: "https://i.ytimg.com/vi/EcwRxgxEXaI/hqdefault.jpg",
    category: "road",
    source: "Flamingo Legs Racing",
    igHandle: "@flamingolegs",
    shareUrl: "https://www.youtube.com/watch?v=EcwRxgxEXaI"
  },
  {
    id: "photo-rr-5",
    title: "Thunderhill West 10-Turn Big Bike Hunt",
    caption: "Carrying corner momentum to reel in literbikes on Thunderhill West.",
    src: "https://i.ytimg.com/vi/CuZw8ZfQ3OU/hqdefault.jpg",
    category: "road",
    source: "Flamingo Legs Racing",
    igHandle: "@flamingolegs",
    shareUrl: "https://www.youtube.com/watch?v=CuZw8ZfQ3OU"
  },
  {
    id: "photo-rr-6",
    title: "Tail-Cam Telemetry Perspective",
    caption: "Buttonwillow rear cam looking back across the pack.",
    src: "https://i.ytimg.com/vi/0SRb_x4hMrY/hqdefault.jpg",
    category: "road",
    source: "Flamingo Legs Racing",
    igHandle: "@flamingolegs",
    shareUrl: "https://www.youtube.com/watch?v=0SRb_x4hMrY"
  }
];

const DEFAULT_SOCIAL_POSTS = [
  {
    id: "post-ig-1",
    platform: "instagram",
    date: "Recent Race Drop",
    title: "Instagram @flamingolegs — Desert & Track Weekend Highlights",
    text: "From rock crawls and 100-mile desert endurance to knee-down pavement racing at Sonoma & Buttonwillow. Follow @flamingolegs on Instagram for behind-the-scenes garage builds and race day reels!",
    url: "https://www.instagram.com/flamingolegs"
  },
  {
    id: "post-1",
    platform: "youtube",
    date: "Sep 2026",
    title: "AFM Round 4 '26 Buttonwillow 'The Circuit' — 700 Twins SBK & F3",
    text: "Front & rear onboard race video from Buttonwillow's new configuration. Watch the twin battles and share with your riding crew!",
    url: "https://www.youtube.com/watch?v=B4Bh7xgIk_I"
  },
  {
    id: "post-2",
    platform: "facebook",
    date: "Off-Road Drop",
    title: "Flamingo Legs Racing — Virginia City Grand Prix & Biltwell 100 Gallery",
    text: "Off-road race photos and dual sport reels are live! Huge shoutout to everyone supporting our racing program across dirt and asphalt.",
    url: "https://www.facebook.com/search/top/?q=Flamingo%20Legs%20Racing"
  }
];

function showToast(msg) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}

// Universal Social Share Handler
function shareContent({ title, text, url, platform }) {
  const shareUrl = url || window.location.href;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(`${title} — ${text || "Sam Romick • Flamingo Legs Racing"}`);

  if (platform === "facebook") {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`, "_blank", "width=640,height=480");
    showToast("Opened Facebook Share dialog!");
  } else if (platform === "twitter") {
    window.open(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`, "_blank", "width=640,height=480");
    showToast("Opened X / Twitter Share dialog!");
  } else if (platform === "instagram") {
    window.open("https://www.instagram.com/flamingolegs", "_blank");
    showToast("Opening Instagram @flamingolegs!");
  } else {
    navigator.clipboard.writeText(`${title}\n${shareUrl}`).then(() => {
      showToast("Link copied to clipboard! Ready to share on Instagram, Facebook or YouTube.");
    });
  }
}

// Unified Results Section (MYLAPS Speedhive + MotoTally)
function initResultsSection() {
  const tbody = document.getElementById("results-tbody");
  if (!tbody) return;

  let currentFilter = "all";
  let searchQuery = "";

  function renderRows() {
    const filtered = ALL_RACE_RESULTS.filter(r => {
      const matchesFilter =
        currentFilter === "all" ||
        (currentFilter === "wins" && r.position === 1) ||
        (currentFilter === "podium" && r.position <= 3) ||
        (currentFilter === "speedhive" && r.timingSource === "speedhive") ||
        (currentFilter === "mototally" && r.timingSource === "mototally") ||
        (currentFilter === "road" && r.discipline === "road") ||
        (currentFilter === "offroad" && r.discipline === "offroad");

      const matchesSearch =
        !searchQuery ||
        r.track.toLowerCase().includes(searchQuery) ||
        r.raceClass.toLowerCase().includes(searchQuery) ||
        r.series.toLowerCase().includes(searchQuery) ||
        r.notes.toLowerCase().includes(searchQuery) ||
        r.number.toLowerCase().includes(searchQuery) ||
        r.date.toLowerCase().includes(searchQuery);

      return matchesFilter && matchesSearch;
    });

    tbody.innerHTML = filtered
      .map(r => {
        const badgeClass =
          r.position === 1 ? "pos-1" : r.position === 2 ? "pos-2" : r.position === 3 ? "pos-3" : "pos-top";
        const timingBadge =
          r.timingSource === "mototally"
            ? `<span class="timing-pill mototally">MotoTally Scored</span>`
            : `<span class="timing-pill speedhive">Speedhive Transponder</span>`;
        const videoUrl = `https://www.youtube.com/watch?v=${r.videoId}`;

        return `
          <tr>
            <td>
              <span class="pos-badge ${badgeClass}">${r.posLabel}</span>
              <div style="margin-top:0.35rem;">${timingBadge}</div>
            </td>
            <td>
              <strong>${r.date}</strong>
              <div class="track-tag">${r.series}</div>
            </td>
            <td>
              <strong>${r.track}</strong>
              <div class="track-tag">${r.discipline === "offroad" ? "🌲 Dirt / Desert / Enduro" : "🏁 Asphalt Road Course"}</div>
            </td>
            <td>
              <strong>${r.raceClass}</strong>
              <div class="track-tag">${r.bike} <span class="number-plate" style="font-size:0.7rem;padding:0.02rem 0.35rem;">${r.number}</span></div>
            </td>
            <td>${r.notes}</td>
            <td>
              <div class="share-toolbar">
                <a href="${videoUrl}" target="_blank" rel="noopener" class="share-chip yt" title="Watch Race Footage">▶ Footage</a>
                <button class="share-chip fb" onclick="shareContent({title: 'Sam Romick (${r.number}) — ${r.posLabel} at ${r.track}', text: '${r.series} / ${r.raceClass}: ${r.notes}', url: '${videoUrl}', platform: 'facebook'})">FB Share</button>
                <button class="share-chip" onclick="shareContent({title: 'Sam Romick (${r.number}) — ${r.posLabel} at ${r.track}', text: '${r.notes}', url: '${videoUrl}', platform: 'copy'})">Copy</button>
              </div>
            </td>
          </tr>
        `;
      })
      .join("");
  }

  document.querySelectorAll("[data-result-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-result-filter]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-result-filter");
      renderRows();
    });
  });

  const searchEl = document.getElementById("results-search");
  if (searchEl) {
    searchEl.addEventListener("input", e => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderRows();
    });
  }

  const exportBtn = document.getElementById("export-csv-btn");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      const headers = ["Date", "Discipline", "TimingSystem", "Series", "Track", "Class", "Bike", "RiderNumber", "Position", "Notes"];
      const csvRows = [
        headers.join(","),
        ...ALL_RACE_RESULTS.map(r =>
          [r.date, r.discipline, r.timingSource, `"${r.series}"`, `"${r.track}"`, `"${r.raceClass}"`, `"${r.bike}"`, r.number, `"${r.posLabel}"`, `"${r.notes}"`].join(",")
        )
      ];
      const blob = new Blob([csvRows.join("\n")], { type: "text/csv;charset=utf-8;" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "sam-romick-all-motorcycle-racing-results.csv";
      a.click();
      showToast("Downloaded all Sam Romick MotoTally & Speedhive results CSV!");
    });
  }

  renderRows();
}

// Video Cinema & Playlist
function initVideoCinema() {
  const iframe = document.getElementById("cinema-iframe");
  const titleEl = document.getElementById("cinema-title");
  const descEl = document.getElementById("cinema-desc");
  const listEl = document.getElementById("cinema-playlist");
  const shareBar = document.getElementById("cinema-share-bar");
  if (!iframe || !listEl) return;

  let activeVideo = VIDEOS[0];

  function selectVideo(v, autoplay = false) {
    activeVideo = v;
    const ytUrl = `https://www.youtube.com/watch?v=${v.id}`;
    iframe.src = `https://www.youtube.com/embed/${v.id}?rel=0${autoplay ? "&autoplay=1" : ""}`;
    titleEl.textContent = v.title;
    descEl.textContent = `${v.track} • ${v.discipline} • ${v.date} — ${v.desc}`;

    shareBar.innerHTML = `
      <button class="share-chip fb" onclick="shareContent({title: '${v.title.replace(/'/g, "\\'")}', text: 'Watch Sam Romick race footage with Flamingo Legs!', url: '${ytUrl}', platform: 'facebook'})">Share to Facebook</button>
      <button class="share-chip ig" onclick="shareContent({title: '${v.title.replace(/'/g, "\\'")}', text: 'Follow @flamingolegs on Instagram', url: '${ytUrl}', platform: 'instagram'})">Instagram @flamingolegs</button>
      <button class="share-chip" onclick="shareContent({title: '${v.title.replace(/'/g, "\\'")}', text: '${v.desc.replace(/'/g, "\\'")}', url: '${ytUrl}', platform: 'copy'})">Copy Video Link</button>
      <a href="${ytUrl}" target="_blank" rel="noopener" class="share-chip yt">Open YouTube ↗</a>
    `;

    document.querySelectorAll(".playlist-item").forEach(item => {
      item.classList.toggle("active", item.dataset.vid === v.id);
    });
  }

  listEl.innerHTML = VIDEOS.map(
    v => `
      <button class="playlist-item" data-vid="${v.id}">
        <div class="playlist-thumb">
          <img src="${v.thumb}" alt="${v.title}" loading="lazy" />
        </div>
        <div class="playlist-info">
          <h4>${v.title}</h4>
          <span>${v.discipline} • ${v.track}</span>
        </div>
      </button>
    `
  ).join("");

  listEl.querySelectorAll(".playlist-item").forEach(btn => {
    btn.addEventListener("click", () => {
      const found = VIDEOS.find(x => x.id === btn.dataset.vid);
      if (found) selectVideo(found, true);
    });
  });

  selectVideo(VIDEOS[0], false);
}

// Photo Gallery with Instagram @flamingolegs integration
function initPhotoGallery() {
  const grid = document.getElementById("photo-grid");
  if (!grid) return;

  let activeCategory = "all";

  function renderPhotos() {
    const list = PHOTOS.filter(p => activeCategory === "all" || p.category === activeCategory);
    grid.innerHTML = list
      .map(
        p => `
        <article class="photo-card">
          <div class="photo-img-wrap" onclick="openLightbox('${p.id}')">
            <img src="${p.src}" alt="${p.title}" loading="lazy" />
            <span class="photo-source-pill ${p.source.includes('Instagram') ? 'ig-pill' : ''}">
              ${p.source}
            </span>
          </div>
          <div class="photo-body">
            <div>
              <h3 class="photo-title">${p.title}</h3>
              <p class="photo-caption">${p.caption}</p>
            </div>
            <div class="photo-footer">
              <div class="share-toolbar">
                <a href="${p.shareUrl}" target="_blank" rel="noopener" class="share-chip ${p.source.includes('Instagram') ? 'ig' : 'fb'}">
                  ${p.source.includes('Instagram') ? 'Instagram ↗' : 'Facebook ↗'}
                </a>
                <button class="share-chip" onclick="shareContent({title: '${p.title.replace(/'/g, "\\'")}', text: '${p.caption.replace(/'/g, "\\'")}', url: '${p.shareUrl}', platform: 'copy'})">Copy</button>
              </div>
              <button class="share-chip" onclick="openLightbox('${p.id}')">Zoom ⤢</button>
            </div>
          </div>
        </article>
      `
      )
      .join("");
  }

  document.querySelectorAll("[data-photo-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-photo-filter]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-photo-filter");
      renderPhotos();
    });
  });

  renderPhotos();
}

window.openLightbox = function (photoId) {
  const p = PHOTOS.find(x => x.id === photoId);
  const lb = document.getElementById("lightbox");
  if (!p || !lb) return;

  document.getElementById("lb-img").src = p.src;
  document.getElementById("lb-title").textContent = p.title;
  document.getElementById("lb-caption").textContent = `${p.caption} (${p.source})`;
  document.getElementById("lb-fb-share").onclick = () =>
    shareContent({ title: p.title, text: p.caption, url: p.shareUrl, platform: "facebook" });
  document.getElementById("lb-copy-share").onclick = () =>
    shareContent({ title: p.title, text: p.caption, url: p.shareUrl, platform: "copy" });
  lb.classList.add("open");
};

window.closeLightbox = function () {
  const lb = document.getElementById("lightbox");
  if (lb) lb.classList.remove("open");
};

// Social Share Feed & Custom Post Creator
function initSocialFeed() {
  const feedEl = document.getElementById("social-feed-grid");
  const form = document.getElementById("post-creator-form");
  if (!feedEl) return;

  const saved = JSON.parse(localStorage.getItem("flr_custom_posts_v2") || "[]");
  let posts = [...saved, ...DEFAULT_SOCIAL_POSTS];

  function renderFeed() {
    feedEl.innerHTML = posts
      .map(
        post => `
        <article class="social-post-card">
          <div>
            <div class="post-header">
              <div class="post-author">
                <div class="author-avatar">FLR</div>
                <div>
                  <strong style="font-size:0.92rem;display:block;">Flamingo Legs Racing</strong>
                  <span style="font-size:0.75rem;color:var(--text-muted);">${post.date}</span>
                </div>
              </div>
              <span class="platform-tag ${post.platform}">${post.platform}</span>
            </div>
            <h4 style="font-family:var(--font-display);font-size:1.05rem;margin:0.85rem 0 0.4rem;">${post.title}</h4>
            <p style="font-size:0.88rem;color:var(--text-muted);">${post.text}</p>
          </div>
          <div class="share-toolbar" style="padding-top:0.75rem;border-top:1px solid var(--border-subtle);">
            <button class="share-chip fb" onclick="shareContent({title: '${post.title.replace(/'/g, "\\'")}', text: '${post.text.replace(/'/g, "\\'")}', url: '${post.url}', platform: 'facebook'})">Share FB</button>
            <a href="https://www.instagram.com/flamingolegs" target="_blank" rel="noopener" class="share-chip ig">Instagram @flamingolegs</a>
            <button class="share-chip" onclick="shareContent({title: '${post.title.replace(/'/g, "\\'")}', text: '${post.text.replace(/'/g, "\\'")}', url: '${post.url}', platform: 'copy'})">Copy</button>
            <a href="${post.url}" target="_blank" rel="noopener" class="share-chip">View Source ↗</a>
          </div>
        </article>
      `
      )
      .join("");
  }

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const platform = document.getElementById("creator-platform").value;
      const title = document.getElementById("creator-title").value.trim();
      const url = document.getElementById("creator-url").value.trim();
      if (!title || !url) return;

      const newPost = {
        id: "post-" + Date.now(),
        platform,
        date: "Just Added",
        title,
        text: "Shared to the Flamingo Legs Racing multi-discipline hub — click below to view, repost, or follow!",
        url
      };
      saved.unshift(newPost);
      localStorage.setItem("flr_custom_posts_v2", JSON.stringify(saved));
      posts = [...saved, ...DEFAULT_SOCIAL_POSTS];
      renderFeed();
      form.reset();
      showToast("Added your post to the Flamingo Legs Racing board!");
    });
  }

  renderFeed();
}

// Support & Donations Page Logic
function initSupportPage() {
  const customInput = document.getElementById("custom-donation-amount");
  const impactText = document.getElementById("donation-impact-text");
  const donateBtnText = document.getElementById("donate-btn-amount");
  if (!customInput || !impactText) return;

  let selectedAmount = 100;
  let frequency = "one-time";

  const IMPACT_MAP = {
    25: "Covers 5 gallons of VP racing fuel or desert transport fuel (~18 race laps).",
    50: "Covers synthetic Ester engine oil + high-temp brake fluid or fresh air filters for desert silt.",
    100: "Covers an AFM race entry fee or MotoTally transponder entry for off-road events.",
    230: "Covers a fresh rear race slick or set of knobbies for maximum traction.",
    460: "Covers a complete tire set (asphalt slicks or desert mousses) for an entire race weekend!",
    1000: "Title Paddock Partner across both asphalt AFM rounds and off-road desert rallies."
  };

  function updateCalculator(amt) {
    selectedAmount = Number(amt) || 25;
    customInput.value = selectedAmount;
    if (donateBtnText) {
      donateBtnText.textContent = `$${selectedAmount}${frequency === "monthly" ? "/mo" : ""}`;
    }
    const presetDesc =
      IMPACT_MAP[selectedAmount] ||
      `Directly funds racing tires, MotoTally/AFM entry fees, and bike preparation across all racing disciplines!`;
    impactText.innerHTML = `<strong>Track &amp; Trail Impact ($${selectedAmount} ${frequency === "monthly" ? "Monthly" : "One-Time"}):</strong> ${presetDesc}`;
  }

  document.querySelectorAll("[data-tier-amount]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-tier-amount]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      updateCalculator(btn.getAttribute("data-tier-amount"));
    });
  });

  customInput.addEventListener("input", e => {
    document.querySelectorAll("[data-tier-amount]").forEach(b => b.classList.remove("active"));
    updateCalculator(e.target.value);
  });

  document.querySelectorAll("[data-freq]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-freq]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      frequency = btn.getAttribute("data-freq");
      updateCalculator(selectedAmount);
    });
  });

  // Payment triggers
  document.querySelectorAll("[data-pay-method]").forEach(btn => {
    btn.addEventListener("click", () => {
      const method = btn.getAttribute("data-pay-method");
      const supporterName = (document.getElementById("supporter-name")?.value || "Moto Supporter").trim();
      const note = `Flamingo Legs Racing Support ($${selectedAmount} ${frequency}) from ${supporterName}`;

      if (method === "paypal") {
        window.open(`https://www.paypal.com/paypalme/FlamingoLegsRacing/${selectedAmount}`, "_blank");
        showToast(`Opened PayPal for $${selectedAmount} contribution!`);
      } else if (method === "venmo") {
        window.open(`https://venmo.com/?txn=pay&amount=${selectedAmount}&note=${encodeURIComponent(note)}`, "_blank");
        showToast(`Opened Venmo with $${selectedAmount} racing support note!`);
      } else {
        const currentRaisedEl = document.getElementById("fund-raised-val");
        const barEl = document.getElementById("fund-progress-fill");
        if (currentRaisedEl && barEl) {
          const cur = Number(currentRaisedEl.dataset.val || 2450) + selectedAmount;
          currentRaisedEl.dataset.val = cur;
          currentRaisedEl.textContent = `$${cur.toLocaleString()}`;
          const pct = Math.min(100, Math.round((cur / 4000) * 100));
          barEl.style.width = `${pct}%`;
        }
        showToast(`Thank you, ${supporterName}! $${selectedAmount} pledge recorded!`);
      }
    });
  });

  // Sponsor Inquiry Form
  const sponsorForm = document.getElementById("sponsor-inquiry-form");
  if (sponsorForm) {
    sponsorForm.addEventListener("submit", e => {
      e.preventDefault();
      const company = document.getElementById("sp-company").value;
      const tier = document.getElementById("sp-tier").value;
      const msg = document.getElementById("sp-message").value;
      const subject = encodeURIComponent(`Flamingo Legs Racing Sponsorship Inquiry — ${company} (${tier})`);
      const body = encodeURIComponent(`Hi Sam,\n\nWe are interested in supporting Flamingo Legs Racing at the ${tier} level.\n\nDetails:\n${msg}\n`);
      window.location.href = `mailto:flamingolegsracing@gmail.com?subject=${subject}&body=${body}`;
      showToast("Prepared sponsorship email inquiry for Sam Romick!");
    });
  }

  updateCalculator(100);
}

document.addEventListener("DOMContentLoaded", () => {
  initResultsSection();
  initVideoCinema();
  initPhotoGallery();
  initSocialFeed();
  initSupportPage();
});
