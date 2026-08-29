// Template Definitions
const TEMPLATES = {
  basic: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>기본 웹페이지</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 40px 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #333;
      min-height: 100vh;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .card {
      background: #ffffff;
      border-radius: 16px;
      padding: 32px;
      max-width: 500px;
      width: 100%;
      box-shadow: 0 20px 40px rgba(0,0,0,0.2);
      text-align: center;
    }
    h1 {
      margin-top: 0;
      color: #4a5568;
    }
    p {
      color: #718096;
      line-height: 1.6;
    }
    .btn-action {
      background: #667eea;
      color: white;
      border: none;
      padding: 12px 24px;
      font-size: 15px;
      font-weight: 600;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.2s, transform 0.1s;
    }
    .btn-action:hover {
      background: #5a67d8;
      transform: translateY(-2px);
    }
    .counter {
      font-size: 24px;
      font-weight: bold;
      color: #764ba2;
      margin: 16px 0;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>🚀 HTML Live Studio</h1>
    <p>실시간으로 코드를 수정하면 오른쪽 화면에 즉시 반영됩니다.</p>
    <div class="counter" id="count-display">클릭 수: 0</div>
    <button class="btn-action" id="btn-count">클릭해보세요!</button>
  </div>

  <script>
    let count = 0;
    const countDisplay = document.getElementById('count-display');
    const btnCount = document.getElementById('btn-count');

    btnCount.addEventListener('click', () => {
      count++;
      countDisplay.textContent = '클릭 수: ' + count;
      console.log('버튼 클릭됨! 현재 카운트:', count);
    });

    console.log('페이지 로드 완료 ✨');
  <\/script>
</body>
</html>`,

  card: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>글래스모피즘 카드</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #0f172a;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      overflow: hidden;
      position: relative;
    }
    .circle-1 {
      position: absolute;
      width: 320px;
      height: 320px;
      background: linear-gradient(135deg, #ec4899, #8b5cf6);
      border-radius: 50%;
      top: 15%;
      left: 20%;
      filter: blur(80px);
      opacity: 0.6;
      animation: float 8s ease-in-out infinite alternate;
    }
    .circle-2 {
      position: absolute;
      width: 350px;
      height: 350px;
      background: linear-gradient(135deg, #3b82f6, #06b6d4);
      border-radius: 50%;
      bottom: 15%;
      right: 20%;
      filter: blur(80px);
      opacity: 0.6;
      animation: float 10s ease-in-out infinite alternate-reverse;
    }
    @keyframes float {
      0% { transform: translate(0, 0); }
      100% { transform: translate(40px, -40px); }
    }
    .glass-card {
      position: relative;
      width: 380px;
      padding: 40px 32px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-radius: 24px;
      box-shadow: 0 25px 45px rgba(0, 0, 0, 0.4);
      color: #fff;
      z-index: 1;
      text-align: center;
    }
    .avatar {
      width: 84px;
      height: 84px;
      background: linear-gradient(135deg, #8b5cf6, #3b82f6);
      border-radius: 50%;
      margin: 0 auto 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 36px;
      border: 2px solid rgba(255, 255, 255, 0.4);
      box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
    }
    h2 { font-size: 22px; margin-bottom: 8px; font-weight: 600; }
    p.role { color: #94a3b8; font-size: 14px; margin-bottom: 24px; }
    .stats {
      display: flex;
      justify-content: space-around;
      padding: 16px 0;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 24px;
    }
    .stat-item h3 { font-size: 18px; color: #38bdf8; }
    .stat-item span { font-size: 12px; color: #94a3b8; }
    .btn-follow {
      width: 100%;
      padding: 14px;
      border: none;
      border-radius: 12px;
      background: linear-gradient(135deg, #8b5cf6, #ec4899);
      color: #fff;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 0 4px 15px rgba(236, 72, 153, 0.35);
    }
    .btn-follow:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(236, 72, 153, 0.5);
    }
  </style>
</head>
<body>
  <div class="circle-1"></div>
  <div class="circle-2"></div>
  <div class="glass-card">
    <div class="avatar">⚡</div>
    <h2>Glassmorphism UI</h2>
    <p class="role">프론트엔드 크리에이티브 디자인</p>
    <div class="stats">
      <div class="stat-item">
        <h3>142</h3>
        <span>Projects</span>
      </div>
      <div class="stat-item">
        <h3>99.9%</h3>
        <span>Uptime</span>
      </div>
      <div class="stat-item">
        <h3>4.9★</h3>
        <span>Rating</span>
      </div>
    </div>
    <button class="btn-follow" onclick="console.log('팔로우 클릭됨!')">팔로우 & 구독</button>
  </div>
</body>
</html>`,

  particles: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>인터랙티브 파티클</title>
  <style>
    * { margin: 0; padding: 0; overflow: hidden; }
    body { background: #0b0c10; font-family: sans-serif; }
    canvas { display: block; }
    .overlay {
      position: absolute;
      top: 20px;
      left: 20px;
      color: #66fcf1;
      font-size: 14px;
      pointer-events: none;
      background: rgba(0,0,0,0.5);
      padding: 10px 16px;
      border-radius: 8px;
      border: 1px solid #45a29e;
    }
  </style>
</head>
<body>
  <div class="overlay">✨ 마우스를 움직여 파티클과 상호작용해보세요</div>
  <canvas id="canvas"></canvas>

  <script>
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const mouse = { x: null, y: null, radius: 120 };

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    }
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
        this.color = '#66fcf1';
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 5;
          this.y -= (dy / dist) * force * 5;
        }
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 9000);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
      console.log('파티클 ' + count + '개 생성 완료');
    }

    function connect() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 100) {
            ctx.strokeStyle = 'rgba(102, 252, 241,' + (1 - dist / 100) * 0.3 + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      connect();
      requestAnimationFrame(animate);
    }

    resize();
    animate();
  <\/script>
</body>
</html>`,

  todo: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>반응형 Todo 앱</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: #f8fafc;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      padding: 40px 20px;
    }
    .app-card {
      background: #ffffff;
      width: 100%;
      max-width: 450px;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
      padding: 28px;
      height: fit-content;
    }
    h2 { color: #1e293b; font-size: 24px; margin-bottom: 20px; text-align: center; }
    .input-box {
      display: flex;
      gap: 8px;
      margin-bottom: 20px;
    }
    input[type="text"] {
      flex: 1;
      padding: 12px 16px;
      border: 1px solid #cbd5e1;
      border-radius: 10px;
      font-size: 14px;
      outline: none;
    }
    input[type="text"]:focus { border-color: #6366f1; }
    .btn-add {
      background: #6366f1;
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
    }
    .btn-add:hover { background: #4f46e5; }
    .todo-list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
    .todo-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      background: #f1f5f9;
      border-radius: 10px;
      transition: all 0.2s;
    }
    .todo-item.done {
      background: #e2e8f0;
      text-decoration: line-through;
      color: #94a3b8;
    }
    .todo-left { display: flex; align-items: center; gap: 10px; cursor: pointer; flex: 1; }
    .btn-del {
      background: transparent;
      border: none;
      color: #ef4444;
      cursor: pointer;
      font-weight: bold;
      padding: 4px 8px;
    }
  </style>
</head>
<body>
  <div class="app-card">
    <h2>📝 오늘의 할 일</h2>
    <div class="input-box">
      <input type="text" id="todo-input" placeholder="새로운 할 일을 입력하세요..." />
      <button class="btn-add" id="btn-add">추가</button>
    </div>
    <ul class="todo-list" id="todo-list">
      <li class="todo-item done">
        <div class="todo-left" onclick="toggleTodo(this)">
          <input type="checkbox" checked />
          <span>HTML 편집기 실행하기</span>
        </div>
        <button class="btn-del" onclick="deleteTodo(this)">✕</button>
      </li>
      <li class="todo-item">
        <div class="todo-left" onclick="toggleTodo(this)">
          <input type="checkbox" />
          <span>실시간 미리보기 테스트</span>
        </div>
        <button class="btn-del" onclick="deleteTodo(this)">✕</button>
      </li>
    </ul>
  </div>

  <script>
    const input = document.getElementById('todo-input');
    const btnAdd = document.getElementById('btn-add');
    const list = document.getElementById('todo-list');

    function addTodo() {
      const text = input.value.trim();
      if (!text) return;

      const li = document.createElement('li');
      li.className = 'todo-item';
      li.innerHTML = \`
        <div class="todo-left" onclick="toggleTodo(this)">
          <input type="checkbox" />
          <span>\${text}</span>
        </div>
        <button class="btn-del" onclick="deleteTodo(this)">✕</button>
      \`;
      list.appendChild(li);
      input.value = '';
      console.log('새로운 할 일 추가:', text);
    }

    btnAdd.addEventListener('click', addTodo);
    input.addEventListener('keypress', (e) => { if (e.key === 'Enter') addTodo(); });

    function toggleTodo(elem) {
      const parent = elem.closest('.todo-item');
      parent.classList.toggle('done');
      const cb = elem.querySelector('input[type="checkbox"]');
      cb.checked = parent.classList.contains('done');
    }

    function deleteTodo(elem) {
      const parent = elem.closest('.todo-item');
      parent.remove();
      console.log('할 일 삭제 완료');
    }
  <\/script>
</body>
</html>`,

  cube3d: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>3D 인터랙티브 큐브</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      height: 100vh;
      background: #0f172a;
      display: flex;
      justify-content: center;
      align-items: center;
      perspective: 1000px;
      overflow: hidden;
      color: #fff;
      font-family: sans-serif;
    }
    .info {
      position: absolute;
      top: 20px;
      text-align: center;
      color: #94a3b8;
    }
    .cube-container {
      width: 200px;
      height: 200px;
      position: relative;
      transform-style: preserve-3d;
      transform: rotateX(-20deg) rotateY(-30deg);
      animation: rotate 12s infinite linear;
    }
    .cube-container:hover {
      animation-play-state: paused;
    }
    .face {
      position: absolute;
      width: 200px;
      height: 200px;
      background: rgba(99, 102, 241, 0.2);
      border: 2px solid #6366f1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      font-weight: bold;
      color: #fff;
      box-shadow: 0 0 30px rgba(99, 102, 241, 0.3);
      backdrop-filter: blur(4px);
    }
    .front  { transform: translateZ(100px); background: rgba(236, 72, 153, 0.25); border-color: #ec4899; }
    .back   { transform: rotateY(180deg) translateZ(100px); background: rgba(59, 130, 246, 0.25); border-color: #3b82f6; }
    .right  { transform: rotateY(90deg) translateZ(100px); background: rgba(16, 185, 129, 0.25); border-color: #10b981; }
    .left   { transform: rotateY(-90deg) translateZ(100px); background: rgba(245, 158, 11, 0.25); border-color: #f59e0b; }
    .top    { transform: rotateX(90deg) translateZ(100px); background: rgba(168, 85, 247, 0.25); border-color: #a855f7; }
    .bottom { transform: rotateX(-90deg) translateZ(100px); background: rgba(20, 184, 166, 0.25); border-color: #14b8a6; }

    @keyframes rotate {
      from { transform: rotateX(0deg) rotateY(0deg); }
      to   { transform: rotateX(360deg) rotateY(360deg); }
    }
  </style>
</head>
<body>
  <div class="info">마우스를 올리면 회전이 멈춥니다</div>
  <div class="cube-container">
    <div class="face front">HTML5</div>
    <div class="face back">CSS3</div>
    <div class="face right">JS</div>
    <div class="face left">LIVE</div>
    <div class="face top">3D</div>
    <div class="face bottom">STUDIO</div>
  </div>
</body>
</html>`,

  blank: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>새 문서</title>
  <style>
    body {
      font-family: sans-serif;
      padding: 20px;
    }
  </style>
</head>
<body>
  <h1>새로운 HTML 프로젝트</h1>
  <p>여기에 코드를 작성하세요.</p>
</body>
</html>`
};

// Application State
const state = {
  mode: 'single', // 'single' or 'tabs'
  currentTab: 'html', // 'html', 'css', 'js'
  currentFilepath: null,
  currentFilename: '새 파일.html',
  isDirty: false,
  autoRefresh: true,
  theme: 'dark', // 'dark' or 'light'
  viewport: 'desktop', // 'desktop', 'tablet', 'mobile'
  fontSize: 14,
  editor: null, // Single optimized Monaco Editor instance
  models: {
    single: null,
    html: null,
    css: null,
    js: null
  },
  debounceTimer: null,
  consoleEntries: [],
  renderCount: 0
};

// DOM Elements
const elements = {
  btnNew: document.getElementById('btn-new'),
  btnOpen: document.getElementById('btn-open'),
  btnSave: document.getElementById('btn-save'),
  btnSaveAs: document.getElementById('btn-save-as'),
  btnRefresh: document.getElementById('btn-refresh'),
  btnTheme: document.getElementById('btn-theme'),
  btnDownload: document.getElementById('btn-download'),
  btnPopout: document.getElementById('btn-popout'),
  templateSelect: document.getElementById('template-select'),
  modeSingle: document.getElementById('mode-single'),
  modeTabs: document.getElementById('mode-tabs'),
  singleEditorHeader: document.getElementById('single-editor-header'),
  editorTabsBar: document.getElementById('editor-tabs-bar'),
  currentFilename: document.getElementById('current-filename'),
  dirtyIndicator: document.getElementById('dirty-indicator'),
  charLineCount: document.getElementById('char-line-count'),
  previewFrame: document.getElementById('preview-frame'),
  previewWrapper: document.getElementById('preview-wrapper'),
  viewportDimension: document.getElementById('viewport-dimension'),
  autoRefreshCheck: document.getElementById('auto-refresh-check'),
  splitter: document.getElementById('splitter'),
  editorPane: document.getElementById('editor-pane'),
  previewPane: document.getElementById('preview-pane'),
  statusMessage: document.getElementById('status-message'),
  statusPath: document.getElementById('status-path'),
  statusMode: document.getElementById('status-mode'),
  statusStats: document.getElementById('status-stats'),
  toast: document.getElementById('toast'),
  consolePanel: document.getElementById('console-panel'),
  consoleOutput: document.getElementById('console-output'),
  consoleCount: document.getElementById('console-count'),
  btnClearConsole: document.getElementById('btn-clear-console'),
  btnToggleConsole: document.getElementById('btn-toggle-console'),
  consoleToggleIcon: document.getElementById('console-toggle-icon'),
  btnFormat: document.getElementById('btn-format'),
  btnFormatSingle: document.getElementById('btn-format-single'),
  vpDesktop: document.getElementById('vp-desktop'),
  vpTablet: document.getElementById('vp-tablet'),
  vpMobile: document.getElementById('vp-mobile'),
  btnZoomIn: document.getElementById('btn-zoom-in'),
  btnZoomOut: document.getElementById('btn-zoom-out'),
  fontSizeLabel: document.getElementById('font-size-label'),
  dropOverlay: document.getElementById('drop-overlay'),
  workspaceContainer: document.getElementById('workspace-container')
};

// Show Toast Notification
function showToast(message, type = 'info') {
  elements.toast.textContent = message;
  elements.toast.className = 'toast show ' + type;
  setTimeout(() => {
    elements.toast.className = 'toast';
  }, 2500);
}

// Update Status Bar
function setStatus(message, isSuccess = true) {
  const icon = isSuccess ? '<i class="fa-solid fa-circle-check text-green"></i>' : '<i class="fa-solid fa-circle-exclamation text-yellow"></i>';
  elements.statusMessage.innerHTML = `${icon} ${message}`;
}

// Split HTML into HTML, CSS, JS for tabbed mode
function parseHtmlToComponents(fullHtml) {
  let css = '';
  let js = '';
  let html = fullHtml;

  // Extract <style>...</style>
  const styleMatches = html.match(/<style[^>]*>([\s\S]*?)<\/style>/gi);
  if (styleMatches) {
    css = styleMatches.map(s => s.replace(/<\/?style[^>]*>/gi, '')).join('\n\n');
    html = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  }

  // Extract <script>...</script>
  const scriptMatches = html.match(/<script[^>]*>([\s\S]*?)<\/script>/gi);
  if (scriptMatches) {
    js = scriptMatches.map(s => s.replace(/<\/?script[^>]*>/gi, '')).join('\n\n');
    html = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  }

  return { html: html.trim(), css: css.trim(), js: js.trim() };
}

// Combine HTML, CSS, JS into single HTML
function combineComponentsToHtml(html, css, js) {
  if (html.includes('</head>') && html.includes('</body>')) {
    let result = html;
    if (css) {
      result = result.replace('</head>', `  <style>\n${css}\n  </style>\n</head>`);
    }
    if (js) {
      result = result.replace('</body>', `  <script>\n${js}\n  <\/script>\n</body>`);
    }
    return result;
  } else {
    return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
${css}
  </style>
</head>
<body>
${html}

  <script>
${js}
  <\/script>
</body>
</html>`;
  }
}

// Update Statistics (Lines, Words, Chars)
function updateStats() {
  const code = getFullCode();
  const lines = code.split('\n').length;
  const chars = code.length;
  const words = code.trim() ? (code.trim().match(/\S+/g) || []).length : 0;
  elements.statusStats.textContent = `${lines} 줄, ${words} 단어, ${chars} 자`;
}

// LocalStorage Auto-save & Restore
function saveToLocalStorage() {
  try {
    const data = {
      code: getFullCode(),
      mode: state.mode,
      theme: state.theme,
      fontSize: state.fontSize,
      filename: state.currentFilename
    };
    localStorage.setItem('html_live_studio_state', JSON.stringify(data));
  } catch (e) {
    // Ignore storage quota errors
  }
}

function restoreFromLocalStorage() {
  try {
    const raw = localStorage.getItem('html_live_studio_state');
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {}
  return null;
}

// Optimized Monaco Editor Initialization (Single Instance with Model Switching)
function initMonaco() {
  if (typeof require === 'undefined') {
    setTimeout(initMonaco, 300);
    return;
  }

  require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' } });

  require(['vs/editor/editor.main'], function () {
    const saved = restoreFromLocalStorage();
    const initialCode = (saved && saved.code) ? saved.code : TEMPLATES.basic;

    if (saved && saved.fontSize) {
      state.fontSize = saved.fontSize;
      elements.fontSizeLabel.textContent = `${state.fontSize}px`;
    }
    if (saved && saved.filename) {
      state.currentFilename = saved.filename;
      elements.currentFilename.textContent = saved.filename;
    }

    const parsed = parseHtmlToComponents(initialCode);

    // Create Models for zero-overhead switching
    state.models.single = monaco.editor.createModel(initialCode, 'html');
    state.models.html = monaco.editor.createModel(parsed.html, 'html');
    state.models.css = monaco.editor.createModel(parsed.css, 'css');
    state.models.js = monaco.editor.createModel(parsed.js, 'javascript');

    // Create single Monaco Editor instance
    state.editor = monaco.editor.create(document.getElementById('monaco-container'), {
      model: state.models.single,
      theme: state.theme === 'dark' ? 'vs-dark' : 'vs',
      fontSize: state.fontSize,
      fontFamily: "'Fira Code', Consolas, 'Courier New', monospace",
      automaticLayout: true,
      minimap: { enabled: true },
      lineNumbers: 'on',
      scrollBeyondLastLine: false,
      tabSize: 2,
      wordWrap: 'on',
      cursorSmoothCaretAnimation: 'on',
      formatOnPaste: true,
      renderWhitespace: 'selection',
      smoothScrolling: true
    });

    // Content Change Listeners on all models
    Object.values(state.models).forEach(model => {
      model.onDidChangeContent(() => onCodeChange());
    });

    // Cursor position listener
    state.editor.onDidChangeCursorPosition((e) => {
      elements.charLineCount.textContent = `Ln ${e.position.lineNumber}, Col ${e.position.column}`;
    });

    // Initial Trigger Render
    triggerRender();
    updateStats();
    setStatus('최적화된 에디터 준비 완료');
  });
}

// Get Complete HTML Code
function getFullCode() {
  if (state.mode === 'single') {
    return state.models.single ? state.models.single.getValue() : '';
  } else {
    const h = state.models.html ? state.models.html.getValue() : '';
    const c = state.models.css ? state.models.css.getValue() : '';
    const j = state.models.js ? state.models.js.getValue() : '';
    return combineComponentsToHtml(h, c, j);
  }
}

// Set Code in Editor
function setFullCode(code) {
  if (state.models.single) {
    state.models.single.setValue(code);
  }
  if (state.models.html && state.models.css && state.models.js) {
    const parsed = parseHtmlToComponents(code);
    state.models.html.setValue(parsed.html);
    state.models.css.setValue(parsed.css);
    state.models.js.setValue(parsed.js);
  }
  triggerRender();
  updateStats();
  saveToLocalStorage();
}

// On Code Change Event (Adaptive Debounce)
function onCodeChange() {
  state.isDirty = true;
  elements.dirtyIndicator.style.display = 'inline';
  updateStats();
  saveToLocalStorage();

  if (state.autoRefresh) {
    if (state.debounceTimer) clearTimeout(state.debounceTimer);
    
    // 문서 크기에 따른 적응형 스마트 디바운스 (150ms ~ 350ms)
    const codeLen = getFullCode().length;
    const delay = Math.min(350, Math.max(150, Math.floor(codeLen / 500)));

    state.debounceTimer = setTimeout(triggerRender, delay);
  }
}

// Infinite Loop Protection & Console Interceptor Script
const sandboxScript = `
<script>
  (function() {
    // 1. Infinite loop guard
    var __loopStartTime = Date.now();
    var __loopCounter = 0;
    window.__checkLoop = function() {
      __loopCounter++;
      if (__loopCounter > 5000) {
        if (Date.now() - __loopStartTime > 1500) {
          window.parent.postMessage({ type: 'CONSOLE_LOG', level: 'error', message: '⚠️ 무한 루프 감지: 코드 실행이 안전하게 차단되었습니다.', time: new Date().toLocaleTimeString() }, '*');
          throw new Error('Infinite loop detected and aborted');
        }
        __loopCounter = 0;
      }
    };

    // 2. Console logs interceptor
    function serialize(data) {
      try {
        if (typeof data === 'object') return JSON.stringify(data);
        return String(data);
      } catch (e) {
        return String(data);
      }
    }
    ['log', 'warn', 'error', 'info'].forEach(function(level) {
      var orig = console[level];
      console[level] = function() {
        var args = Array.prototype.slice.call(arguments);
        var msg = args.map(serialize).join(' ');
        window.parent.postMessage({ type: 'CONSOLE_LOG', level: level, message: msg, time: new Date().toLocaleTimeString() }, '*');
        if (orig) orig.apply(console, arguments);
      };
    });
    window.onerror = function(msg, url, line, col, error) {
      window.parent.postMessage({ type: 'CONSOLE_LOG', level: 'error', message: msg + ' (줄 ' + line + ':' + col + ')', time: new Date().toLocaleTimeString() }, '*');
    };
  })();
<\/script>
`;

// Trigger Live Preview Rendering
function triggerRender() {
  state.renderCount++;
  const code = getFullCode();
  
  let injectedCode = code;
  if (injectedCode.includes('<head>')) {
    injectedCode = injectedCode.replace('<head>', '<head>' + sandboxScript);
  } else if (injectedCode.includes('<html>')) {
    injectedCode = injectedCode.replace('<html>', '<html><head>' + sandboxScript + '</head>');
  } else {
    injectedCode = sandboxScript + injectedCode;
  }

  // Smooth DOM srcdoc update without flicker
  elements.previewFrame.srcdoc = injectedCode;
  setStatus('실시간 미리보기 렌더링됨');
}

// Receive Console Logs from Preview Frame
window.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'CONSOLE_LOG') {
    addConsoleEntry(event.data.level, event.data.message, event.data.time);
  }
});

function addConsoleEntry(level, message, time) {
  const placeholder = elements.consoleOutput.querySelector('.console-placeholder');
  if (placeholder) placeholder.remove();

  const entry = document.createElement('div');
  entry.className = `console-entry ${level}`;
  entry.innerHTML = `
    <span class="console-time">[${time}]</span>
    <span class="console-text">${escapeHtml(message)}</span>
  `;
  elements.consoleOutput.appendChild(entry);
  elements.consoleOutput.scrollTop = elements.consoleOutput.scrollHeight;

  state.consoleEntries.push({ level, message, time });
  elements.consoleCount.textContent = state.consoleEntries.length;
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function clearConsole() {
  state.consoleEntries = [];
  elements.consoleCount.textContent = '0';
  elements.consoleOutput.innerHTML = '<div class="console-placeholder">출력된 콘솔 로그가 없습니다.</div>';
}

// Mode Switching: Single HTML vs Tabbed (Optimized Model Swap)
elements.modeSingle.addEventListener('click', () => {
  if (state.mode === 'single') return;
  
  const combined = getFullCode();
  state.mode = 'single';
  
  elements.modeSingle.classList.add('active');
  elements.modeTabs.classList.remove('active');
  elements.singleEditorHeader.style.display = 'flex';
  elements.editorTabsBar.style.display = 'none';

  if (state.editor && state.models.single) {
    state.models.single.setValue(combined);
    state.editor.setModel(state.models.single);
  }
  elements.statusMode.textContent = '모드: 단일 HTML';
  saveToLocalStorage();
});

elements.modeTabs.addEventListener('click', () => {
  if (state.mode === 'tabs') return;

  const singleCode = state.models.single ? state.models.single.getValue() : '';
  const parsed = parseHtmlToComponents(singleCode);

  state.mode = 'tabs';
  elements.modeTabs.classList.add('active');
  elements.modeSingle.classList.remove('active');
  elements.singleEditorHeader.style.display = 'none';
  elements.editorTabsBar.style.display = 'flex';

  if (state.models.html) state.models.html.setValue(parsed.html);
  if (state.models.css) state.models.css.setValue(parsed.css);
  if (state.models.js) state.models.js.setValue(parsed.js);

  switchTab(state.currentTab);
  elements.statusMode.textContent = '모드: 탭 분리 (HTML/CSS/JS)';
  saveToLocalStorage();
});

// Tab Switch within Tabbed Mode
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.getAttribute('data-tab');
    switchTab(tab);
  });
});

function switchTab(tab) {
  state.currentTab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-tab') === tab);
  });

  if (state.editor && state.models[tab]) {
    state.editor.setModel(state.models[tab]);
    state.editor.focus();
  }
}

// Font Zoom Controls
function adjustFontSize(delta) {
  state.fontSize = Math.max(10, Math.min(32, state.fontSize + delta));
  elements.fontSizeLabel.textContent = `${state.fontSize}px`;
  if (state.editor) {
    state.editor.updateOptions({ fontSize: state.fontSize });
  }
  saveToLocalStorage();
}

elements.btnZoomIn.addEventListener('click', () => adjustFontSize(1));
elements.btnZoomOut.addEventListener('click', () => adjustFontSize(-1));

// Viewport Presets
elements.vpDesktop.addEventListener('click', () => setViewport('desktop'));
elements.vpTablet.addEventListener('click', () => setViewport('tablet'));
elements.vpMobile.addEventListener('click', () => setViewport('mobile'));

function setViewport(vp) {
  state.viewport = vp;
  elements.vpDesktop.classList.toggle('active', vp === 'desktop');
  elements.vpTablet.classList.toggle('active', vp === 'tablet');
  elements.vpMobile.classList.toggle('active', vp === 'mobile');

  elements.previewWrapper.className = 'preview-wrapper ' + vp;
  if (vp === 'desktop') elements.viewportDimension.textContent = '100%';
  else if (vp === 'tablet') elements.viewportDimension.textContent = '768 × 1024 (Tablet)';
  else if (vp === 'mobile') elements.viewportDimension.textContent = '375 × 667 (Mobile)';
}

// Theme Switcher
elements.btnTheme.addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.body.className = `theme-${state.theme}`;
  const monacoTheme = state.theme === 'dark' ? 'vs-dark' : 'vs';
  if (window.monaco) monaco.editor.setTheme(monacoTheme);
  elements.btnTheme.innerHTML = state.theme === 'dark' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
  saveToLocalStorage();
});

// Template Selection
elements.templateSelect.addEventListener('change', (e) => {
  const selected = e.target.value;
  if (TEMPLATES[selected]) {
    setFullCode(TEMPLATES[selected]);
    showToast(`'${e.target.options[e.target.selectedIndex].text}' 템플릿 적용됨`);
  }
});

// Auto-Refresh Checkbox
elements.autoRefreshCheck.addEventListener('change', (e) => {
  state.autoRefresh = e.target.checked;
  showToast(state.autoRefresh ? '실시간 자동 갱신 활성화' : '수동 갱신 모드');
});

// Manual Refresh
elements.btnRefresh.addEventListener('click', () => {
  triggerRender();
  showToast('미리보기를 새로고침했습니다.');
});

// Format Code Action
function formatActiveEditor() {
  if (state.editor) {
    state.editor.getAction('editor.action.formatDocument').run();
    showToast('코드 자동 정렬 완료');
  }
}
elements.btnFormat.addEventListener('click', formatActiveEditor);
elements.btnFormatSingle.addEventListener('click', formatActiveEditor);

// Console Collapse/Expand
elements.btnToggleConsole.addEventListener('click', () => {
  elements.consolePanel.classList.toggle('collapsed');
  const isCollapsed = elements.consolePanel.classList.contains('collapsed');
  elements.consoleToggleIcon.className = isCollapsed ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down';
});
elements.btnClearConsole.addEventListener('click', clearConsole);

// Popout Preview in Real Browser Window
elements.btnPopout.addEventListener('click', () => {
  const code = getFullCode();
  const blob = new Blob([code], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
  setTimeout(() => URL.revokeObjectURL(url), 10000);
});

// Export/Download HTML File
elements.btnDownload.addEventListener('click', () => {
  const code = getFullCode();
  const blob = new Blob([code], { type: 'text/html;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = state.currentFilename || 'index.html';
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 5000);
  showToast('HTML 파일이 다운로드되었습니다.');
});

// Drag and Drop File Handling
window.addEventListener('dragover', (e) => {
  e.preventDefault();
  elements.dropOverlay.classList.add('active');
});

window.addEventListener('dragleave', (e) => {
  if (e.relatedTarget === null || e.clientX <= 0 || e.clientY <= 0) {
    elements.dropOverlay.classList.remove('active');
  }
});

window.addEventListener('drop', (e) => {
  e.preventDefault();
  elements.dropOverlay.classList.remove('active');

  const files = e.dataTransfer.files;
  if (files.length > 0) {
    const file = files[0];
    const reader = new FileReader();
    reader.onload = (re) => {
      setFullCode(re.target.result);
      state.currentFilename = file.name;
      state.isDirty = false;
      elements.currentFilename.textContent = file.name;
      elements.dirtyIndicator.style.display = 'none';
      elements.statusPath.textContent = file.name;
      showToast(`'${file.name}' 파일을 불러왔습니다.`);
    };
    reader.readAsText(file);
  }
});

// Python Native Backend File Operations
async function handleNewFile() {
  setFullCode(TEMPLATES.blank);
  state.currentFilepath = null;
  state.currentFilename = '새 파일.html';
  state.isDirty = false;
  elements.currentFilename.textContent = state.currentFilename;
  elements.dirtyIndicator.style.display = 'none';
  elements.statusPath.textContent = '새 파일 (저장되지 않음)';
  
  if (window.pywebview && window.pywebview.api) {
    await window.pywebview.api.reset_filepath();
  }
  showToast('새 문서를 생성했습니다.');
}

async function handleOpenFile() {
  if (window.pywebview && window.pywebview.api) {
    try {
      const res = await window.pywebview.api.open_file_dialog();
      if (res && res.success) {
        setFullCode(res.content);
        state.currentFilepath = res.filepath;
        state.currentFilename = res.filename;
        state.isDirty = false;
        elements.currentFilename.textContent = res.filename;
        elements.dirtyIndicator.style.display = 'none';
        elements.statusPath.textContent = res.filepath;
        showToast(`'${res.filename}' 파일을 열었습니다.`);
      } else if (res && res.error) {
        showToast(res.error, 'error');
      }
    } catch (e) {
      console.error('File open error:', e);
    }
  } else {
    // Fallback: Web File Input
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.html,.htm,.txt';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (re) => {
          setFullCode(re.target.result);
          state.currentFilename = file.name;
          elements.currentFilename.textContent = file.name;
          elements.dirtyIndicator.style.display = 'none';
          showToast(`'${file.name}' 파일을 열었습니다.`);
        };
        reader.readAsText(file);
      }
    };
    input.click();
  }
}

async function handleSaveFile(saveAs = false) {
  const code = getFullCode();

  if (window.pywebview && window.pywebview.api) {
    try {
      let res;
      if (saveAs || !state.currentFilepath) {
        res = await window.pywebview.api.save_file_as_dialog(code, state.currentFilename || 'index.html');
      } else {
        res = await window.pywebview.api.save_file(code, state.currentFilepath);
      }

      if (res && res.success) {
        state.currentFilepath = res.filepath;
        state.currentFilename = res.filename;
        state.isDirty = false;
        elements.currentFilename.textContent = res.filename;
        elements.dirtyIndicator.style.display = 'none';
        elements.statusPath.textContent = res.filepath;
        showToast(`'${res.filename}' 저장 완료!`);
      } else if (res && res.error) {
        showToast(res.error, 'error');
      }
    } catch (e) {
      console.error('Save file error:', e);
    }
  } else {
    // Fallback: Download
    elements.btnDownload.click();
  }
}

// Event Listeners for File Buttons
elements.btnNew.addEventListener('click', handleNewFile);
elements.btnOpen.addEventListener('click', handleOpenFile);
elements.btnSave.addEventListener('click', () => handleSaveFile(false));
elements.btnSaveAs.addEventListener('click', () => handleSaveFile(true));

// Splitter Drag Handling with RAF (60fps smooth drag)
let isDragging = false;
let rafId = null;

elements.splitter.addEventListener('mousedown', (e) => {
  isDragging = true;
  elements.splitter.classList.add('dragging');
  document.body.style.cursor = 'col-resize';
  elements.previewFrame.style.pointerEvents = 'none';
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  
  if (rafId) cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(() => {
    const containerWidth = elements.workspaceContainer.clientWidth;
    const newLeftWidth = Math.max(250, Math.min(e.clientX, containerWidth - 250));
    const percentage = (newLeftWidth / containerWidth) * 100;
    elements.editorPane.style.width = `${percentage}%`;
  });
});

window.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    elements.splitter.classList.remove('dragging');
    document.body.style.cursor = 'default';
    elements.previewFrame.style.pointerEvents = 'auto';
    if (state.editor) state.editor.layout();
  }
});

// Keyboard Shortcuts
window.addEventListener('keydown', (e) => {
  // Ctrl + S : Save
  if ((e.ctrlKey || e.metaKey) && !e.shiftKey && e.key.toLowerCase() === 's') {
    e.preventDefault();
    handleSaveFile(false);
  }
  // Ctrl + Shift + S : Save As
  else if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 's') {
    e.preventDefault();
    handleSaveFile(true);
  }
  // Ctrl + O : Open File
  else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'o') {
    e.preventDefault();
    handleOpenFile();
  }
  // Ctrl + N : New File
  else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'n') {
    e.preventDefault();
    handleNewFile();
  }
  // Ctrl + Enter : Force Refresh
  else if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    e.preventDefault();
    triggerRender();
    showToast('미리보기를 새로고침했습니다.');
  }
  // Ctrl + + / Ctrl + = : Zoom In
  else if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '=')) {
    e.preventDefault();
    adjustFontSize(1);
  }
  // Ctrl + - : Zoom Out
  else if ((e.ctrlKey || e.metaKey) && e.key === '-') {
    e.preventDefault();
    adjustFontSize(-1);
  }
});

// Boot the editor when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  initMonaco();
});
