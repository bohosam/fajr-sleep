// Stars
const sc = document.getElementById('starsContainer');
for (let i = 0; i < 120; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  const sz = Math.random() * 2.5 + 0.5;
  s.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*100}%;--duration:${Math.random()*4+2}s;--delay:${Math.random()*5}s;--min-opacity:${Math.random()*0.3+0.1}`;
  sc.appendChild(s);
}

// Cities Database
const CITIES = [
  {name:'القاهرة',country:'مصر',lat:30.0444,lng:31.2357},
  {name:'الإسكندرية',country:'مصر',lat:31.2001,lng:29.9187},
  {name:'الجيزة',country:'مصر',lat:30.0131,lng:31.2089},
  {name:'الإسماعيلية',country:'مصر',lat:30.5965,lng:32.2715},
  {name:'المنصورة',country:'مصر',lat:31.0364,lng:31.3807},
  {name:'طنطا',country:'مصر',lat:30.7865,lng:31.0004},
  {name:'أسيوط',country:'مصر',lat:27.1809,lng:31.1837},
  {name:'المنيا',country:'مصر',lat:28.1099,lng:30.7503},
  {name:'سوهاج',country:'مصر',lat:26.5590,lng:31.6957},
  {name:'الأقصر',country:'مصر',lat:25.6872,lng:32.6396},
  {name:'أسوان',country:'مصر',lat:24.0889,lng:32.8998},
  {name:'بورسعيد',country:'مصر',lat:31.2565,lng:32.2842},
  {name:'السويس',country:'مصر',lat:29.9668,lng:32.5498},
  {name:'الزقازيق',country:'مصر',lat:30.5877,lng:31.5021},
  {name:'دمياط',country:'مصر',lat:31.4165,lng:31.8133},
  {name:'شرم الشيخ',country:'مصر',lat:27.9158,lng:34.3300},
  {name:'الغردقة',country:'مصر',lat:27.2574,lng:33.8129},
  {name:'طور سيناء',country:'مصر',lat:28.2436,lng:33.6122},
  {name:'الرياض',country:'السعودية',lat:24.7136,lng:46.6753},
  {name:'جدة',country:'السعودية',lat:21.4858,lng:39.1925},
  {name:'مكة المكرمة',country:'السعودية',lat:21.3891,lng:39.8579},
  {name:'المدينة المنورة',country:'السعودية',lat:24.5247,lng:39.5692},
  {name:'الدمام',country:'السعودية',lat:26.3927,lng:49.9777},
  {name:'الخبر',country:'السعودية',lat:26.2172,lng:50.1971},
  {name:'تبوك',country:'السعودية',lat:28.3998,lng:36.5700},
  {name:'أبها',country:'السعودية',lat:18.2164,lng:42.5053},
  {name:'الطائف',country:'السعودية',lat:21.2703,lng:40.4158},
  {name:'حائل',country:'السعودية',lat:27.5114,lng:41.7208},
  {name:'دبي',country:'الإمارات',lat:25.2048,lng:55.2708},
  {name:'أبوظبي',country:'الإمارات',lat:24.4539,lng:54.3773},
  {name:'الشارقة',country:'الإمارات',lat:25.3463,lng:55.4209},
  {name:'عجمان',country:'الإمارات',lat:25.4052,lng:55.5136},
  {name:'رأس الخيمة',country:'الإمارات',lat:25.7895,lng:55.9432},
  {name:'الكويت',country:'الكويت',lat:29.3759,lng:47.9774},
  {name:'الدوحة',country:'قطر',lat:25.2854,lng:51.5310},
  {name:'المنامة',country:'البحرين',lat:26.2154,lng:50.5832},
  {name:'مسقط',country:'عُمان',lat:23.5880,lng:58.3829},
  {name:'صلالة',country:'عُمان',lat:17.0151,lng:54.0924},
  {name:'عمّان',country:'الأردن',lat:31.9454,lng:35.9284},
  {name:'الزرقاء',country:'الأردن',lat:32.0728,lng:36.0879},
  {name:'بيروت',country:'لبنان',lat:33.8938,lng:35.5018},
  {name:'دمشق',country:'سوريا',lat:33.5138,lng:36.2765},
  {name:'حلب',country:'سوريا',lat:36.2021,lng:37.1343},
  {name:'بغداد',country:'العراق',lat:33.3152,lng:44.3661},
  {name:'البصرة',country:'العراق',lat:30.5085,lng:47.7835},
  {name:'الموصل',country:'العراق',lat:36.3350,lng:43.1189},
  {name:'الرباط',country:'المغرب',lat:33.9716,lng:-6.8498},
  {name:'الدار البيضاء',country:'المغرب',lat:33.5731,lng:-7.5898},
  {name:'مراكش',country:'المغرب',lat:31.6295,lng:-7.9811},
  {name:'فاس',country:'المغرب',lat:34.0181,lng:-5.0078},
  {name:'تونس',country:'تونس',lat:36.8190,lng:10.1658},
  {name:'صفاقس',country:'تونس',lat:34.7406,lng:10.7603},
  {name:'الجزائر',country:'الجزائر',lat:36.7372,lng:3.0865},
  {name:'وهران',country:'الجزائر',lat:35.6969,lng:-0.6331},
  {name:'طرابلس',country:'ليبيا',lat:32.9023,lng:13.1806},
  {name:'بنغازي',country:'ليبيا',lat:32.1154,lng:20.0695},
  {name:'الخرطوم',country:'السودان',lat:15.5007,lng:32.5599},
  {name:'صنعاء',country:'اليمن',lat:15.3694,lng:44.1910},
  {name:'عدن',country:'اليمن',lat:12.7797,lng:45.0095},
  {name:'غزة',country:'فلسطين',lat:31.5017,lng:34.4668},
  {name:'رام الله',country:'فلسطين',lat:31.9038,lng:35.2034},
  {name:'إسطنبول',country:'تركيا',lat:41.0082,lng:28.9784},
  {name:'أنقرة',country:'تركيا',lat:39.9334,lng:32.8597},
  {name:'كراتشي',country:'باكستان',lat:24.8607,lng:67.0011},
  {name:'لاهور',country:'باكستان',lat:31.5204,lng:74.3587},
  {name:'جاكرتا',country:'إندونيسيا',lat:-6.2088,lng:106.8456},
  {name:'كوالالمبور',country:'ماليزيا',lat:3.1390,lng:101.6869},
  {name:'لندن',country:'المملكة المتحدة',lat:51.5074,lng:-0.1278},
  {name:'باريس',country:'فرنسا',lat:48.8566,lng:2.3522},
  {name:'برلين',country:'ألمانيا',lat:52.5200,lng:13.4050},
  {name:'نيويورك',country:'أمريكا',lat:40.7128,lng:-74.0060},
  {name:'لوس أنجلوس',country:'أمريكا',lat:34.0522,lng:-118.2437},
  {name:'ديترويت',country:'أمريكا',lat:42.3314,lng:-83.0458},
  {name:'تورنتو',country:'كندا',lat:43.6532,lng:-79.3832},
  {name:'سيدني',country:'أستراليا',lat:-33.8688,lng:151.2093},
  {name:'ملبورن',country:'أستراليا',lat:-37.8136,lng:144.9631},
];

let countdownInterval = null;
const STORAGE_KEY = 'fajr_saved_location';

function showScreen(id) {
  ['chooseScreen','manualScreen','loadingScreen','resultsScreen','errorScreen']
    .forEach(s => document.getElementById(s).classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}
function formatTime12(h, m) {
  const ampm = h >= 12 ? 'م' : 'ص';
  return `${(h%12||12)}:${String(m).padStart(2,'0')} ${ampm}`;
}
function subtractHours(h, m, hours) {
  let t = h*60+m-hours*60;
  if (t < 0) t += 1440;
  return { h: Math.floor(t/60)%24, m: t%60 };
}
function saveLocation(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch(e){}
}
function loadSaved() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch(e){ return null; }
}
function clearSaved() {
  try { localStorage.removeItem(STORAGE_KEY); } catch(e){}
}

window.addEventListener('load', () => {
  const saved = loadSaved();
  if (saved) {
    showScreen('loadingScreen');
    fetchPrayerTimes(saved.lat, saved.lng, saved.name);
  } else {
    showScreen('chooseScreen');
  }
  renderCityList('');
});

function useGPS() {
  if (!navigator.geolocation) { showError('المتصفح مش بيدعم تحديد الموقع'); return; }
  showScreen('loadingScreen');
  navigator.geolocation.getCurrentPosition(
    async pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      let name = `${lat.toFixed(2)}, ${lng.toFixed(2)}`;
      try {
        const r = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=ar`);
        const d = await r.json();
        const a = d.address;
        name = a.city || a.town || a.village || a.county || name;
      } catch(e){}
      saveLocation({ lat, lng, name });
      fetchPrayerTimes(lat, lng, name);
    },
    err => {
      const msgs = {1:'رفضت إذن الموقع، اختر مدينتك يدوياً',2:'تعذّر تحديد الموقع',3:'انتهت المهلة'};
      showError(msgs[err.code] || 'مشكلة في تحديد الموقع');
    },
    { timeout: 10000 }
  );
}

function showManualSearch() {
  showScreen('manualScreen');
  renderCityList('');
  setTimeout(() => document.getElementById('citySearch').focus(), 150);
}

function renderCityList(query) {
  const list = document.getElementById('cityList');
  const q = query.trim();
  const filtered = q
    ? CITIES.filter(c => c.name.includes(q) || c.country.includes(q))
    : CITIES.slice(0, 25);
  if (!filtered.length) {
    list.innerHTML = `<p class="text-white/30 text-sm text-center py-4">لا توجد نتائج</p>`;
    return;
  }
  list.innerHTML = filtered.map(c =>
    `<div class="city-item" onclick="selectCity(${c.lat},${c.lng},'${c.name}')">
      <span class="text-lg">🏙️</span>
      <div><p class="text-white text-sm font-semibold">${c.name}</p><p class="text-white/40 text-xs">${c.country}</p></div>
    </div>`
  ).join('');
}

function filterCities(val) { renderCityList(val); }

function selectCity(lat, lng, name) {
  saveLocation({ lat, lng, name });
  showScreen('loadingScreen');
  fetchPrayerTimes(lat, lng, name);
}

async function fetchPrayerTimes(lat, lng, cityName) {
  try {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2,'0');
    const mm = String(today.getMonth()+1).padStart(2,'0');
    const yyyy = today.getFullYear();
    const res = await fetch(`https://api.aladhan.com/v1/timings/${dd}-${mm}-${yyyy}?latitude=${lat}&longitude=${lng}&method=5`);
    if (!res.ok) throw new Error('API');
    const data = await res.json();
    const [fH, fM] = data.data.timings.Fajr.split(':').map(Number);
    const days = ['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];
    displayResults(fH, fM, cityName, days[today.getDay()]);
  } catch(e) {
    showError('تعذّر جلب وقت الصلاة، تحقق من الإنترنت');
  }
}

function displayResults(fH, fM, city, dayName) {
  document.getElementById('fajrTime').textContent = formatTime12(fH, fM);
  document.getElementById('fajrDay').textContent = dayName;
  document.getElementById('savedLocationLabel').textContent = `محافظة: ${city}`;
  const s7 = subtractHours(fH,fM,7), s8 = subtractHours(fH,fM,8), s9 = subtractHours(fH,fM,9);
  document.getElementById('sleep7').textContent = formatTime12(s7.h,s7.m);
  document.getElementById('sleep8').textContent = formatTime12(s8.h,s8.m);
  document.getElementById('sleep9').textContent = formatTime12(s9.h,s9.m);
  showScreen('resultsScreen');
  startCountdown(fH, fM);
}

function startCountdown(fH, fM) {
  if (countdownInterval) clearInterval(countdownInterval);
  function update() {
    const now = new Date();
    let fajr = new Date(); fajr.setHours(fH,fM,0,0);
    if (now >= fajr) fajr.setDate(fajr.getDate()+1);
    const diff = fajr - now;
    const h = Math.floor(diff/3600000), m = Math.floor((diff%3600000)/60000), s = Math.floor((diff%60000)/1000);
    document.getElementById('countdown').textContent =
      `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }
  update(); countdownInterval = setInterval(update, 1000);
}

function changeLocation() {
  clearSaved();
  if (countdownInterval) clearInterval(countdownInterval);
  document.getElementById('citySearch').value = '';
  showScreen('chooseScreen');
}
function backToChoose() { showScreen('chooseScreen'); }
function showError(msg) {
  document.getElementById('errorMsg').textContent = msg + ' 😕';
  showScreen('errorScreen');
}