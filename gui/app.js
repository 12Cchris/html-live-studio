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
  mode: 'single', // 'single' | 'tabs'
  currentTab: 'html', // 'html' | 'css' | 'js'
  currentFilepath: null,
  currentFilename: '새 파일.html',
  isDirty: false,
  autoRefresh: true,
  inspectorMode: false,
  theme: 'dark', // 'dark' | 'light'
  viewport: 'desktop', // 'desktop' | 'tablet' | 'mobile'
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
  renderCount: 0,
  previewJsStartLine: 0 // tabs 모드에서 미리보기 문서 내 JS 시작 줄 (오류 줄 보정용)
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
  btnInspect: document.getElementById('btn-inspect'),
  btnUpdate: document.getElementById('btn-update'),
  updateBadge: document.getElementById('update-badge'),
  updateModal: document.getElementById('update-modal'),
  updateModalBody: document.getElementById('update-modal-body'),
  updateModalFooter: document.getElementById('update-modal-footer'),
  btnCloseUpdateModal: document.getElementById('btn-close-update-modal'),
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
let toastTimer = null;
function showToast(message, type = 'info') {
  if (toastTimer) clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.className = 'toast show ' + type;
  toastTimer = setTimeout(() => {
    elements.toast.className = 'toast';
  }, 2200);
}

// Update Status Bar
function setStatus(message, isSuccess = true) {
  const icon = isSuccess ? '<i class="fa-solid fa-circle-check text-green"></i>' : '<i class="fa-solid fa-circle-exclamation text-yellow"></i>';
  elements.statusMessage.innerHTML = `${icon} ${message}`;
}

// <script> 속성 문자열을 보고 '직접 작성한 일반 JS'인지 판별 (src 없음, type 없음/JS)
function isInlineClassicScript(attrs) {
  if (/\bsrc\s*=/i.test(attrs)) return false;
  const m = attrs.match(/\btype\s*=\s*["']?([^"'\s>]+)/i);
  const type = m ? m[1].toLowerCase() : '';
  return !type || type === 'text/javascript' || type === 'application/javascript';
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

  // Extract inline classic <script> only (외부 src / module / JSON 등은 HTML 탭에 그대로 둠)
  const jsParts = [];
  html = html.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi, (whole, attrs, body) => {
    if (!isInlineClassicScript(attrs)) return whole;
    jsParts.push(body);
    return '';
  });
  js = jsParts.join('\n\n');

  return { html: html.trim(), css: css.trim(), js: js.trim() };
}

// Combine HTML, CSS, JS into single HTML
function combineComponentsToHtml(html, css, js) {
  if (html.includes('</head>') && html.includes('</body>')) {
    let result = html;
    if (css) {
      const styleBlock = `  <style>\n${css}\n  </style>\n</head>`;
      result = result.replace('</head>', () => styleBlock);
    }
    if (js) {
      const scriptBlock = `  <script>\n${js}\n  <\/script>\n</body>`;
      result = result.replace('</body>', () => scriptBlock);
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
    // Ignore quota errors
  }
}

function restoreFromLocalStorage() {
  try {
    const raw = localStorage.getItem('html_live_studio_state');
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return null;
}

// Initialize Monaco Editor with Zero-Lag Single Instance Architecture
function initMonaco() {
  if (typeof require === 'undefined') {
    setTimeout(initMonaco, 200);
    return;
  }

  require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' } });

  require(['vs/editor/editor.main'], function () {
    const saved = restoreFromLocalStorage();
    const initialCode = (saved && saved.code) ? saved.code : TEMPLATES.basic;

    if (saved) {
      if (saved.fontSize) {
        state.fontSize = saved.fontSize;
        elements.fontSizeLabel.textContent = `${state.fontSize}px`;
      }
      if (saved.filename) {
        state.currentFilename = saved.filename;
        elements.currentFilename.textContent = saved.filename;
      }
      if (saved.theme) {
        state.theme = saved.theme;
        document.body.className = `theme-${state.theme}`;
        elements.btnTheme.innerHTML = state.theme === 'dark' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
      }
    }

    const parsed = parseHtmlToComponents(initialCode);

    // Create Models for instant zero-overhead switching
    state.models.single = monaco.editor.createModel(initialCode, 'html');
    state.models.html = monaco.editor.createModel(parsed.html, 'html');
    state.models.css = monaco.editor.createModel(parsed.css, 'css');
    state.models.js = monaco.editor.createModel(parsed.js, 'javascript');

    // Remove Loading Spinner
    const loadingEl = document.getElementById('editor-loading');
    if (loadingEl) loadingEl.remove();

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
      smoothScrolling: true,
      quickSuggestions: true,
      wordBasedSuggestions: "matchingDocuments",
      snippetSuggestions: "top"
    });

    // Monaco Shortcut Bindings (ensure Ctrl+S, Ctrl+O, Ctrl+Enter work even when editor is focused)
    state.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      handleSaveFile(false);
    });
    state.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyS, () => {
      handleSaveFile(true);
    });
    state.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyO, () => {
      handleOpenFile();
    });
    state.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyN, () => {
      handleNewFile();
    });
    state.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      triggerRender();
      showToast('미리보기를 새로고침했습니다.');
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
    setStatus('에디터 엔진 준비 완료');
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

// On Code Change Event (Adaptive Smart Debounce)
function onCodeChange() {
  state.isDirty = true;
  elements.dirtyIndicator.style.display = 'inline';
  updateStats();
  saveToLocalStorage();

  if (state.autoRefresh) {
    if (state.debounceTimer) clearTimeout(state.debounceTimer);
    
    // 문서 크기에 따른 적응형 스마트 디바운스 (120ms ~ 300ms)
    const codeLen = getFullCode().length;
    const delay = Math.min(300, Math.max(120, Math.floor(codeLen / 600)));

    state.debounceTimer = setTimeout(triggerRender, delay);
  }
}

// Infinite Loop Protection Injector (인라인 <script> 내부에만 적용)
const LOOP_GUARD_CALL = ' window.__checkLoop && window.__checkLoop();';
const LOOP_HEAD_RE = /(\b(?:for|while)\s*\((?:[^()]|\([^()]*\))*\)\s*\{)/g;
const DO_HEAD_RE = /(\bdo\s*\{)/g;

function injectLoopGuards(code) {
  return code.replace(/(<script\b)([^>]*)>([\s\S]*?)(<\/script>)/gi, (whole, open, attrs, body, close) => {
    if (!isInlineClassicScript(attrs)) return whole;
    const guarded = body
      .replace(LOOP_HEAD_RE, (m) => m + LOOP_GUARD_CALL)
      .replace(DO_HEAD_RE, (m) => m + LOOP_GUARD_CALL);
    return open + attrs + '>' + guarded + close;
  });
}

// Annotate HTML tags with line numbers for Live Preview <-> Code synchronization
function annotateHtmlWithLineNumbers(html) {
  if (!html) return '';
  let inScript = false;
  let inStyle = false;
  let inComment = false;
  let lineNum = 1;
  let result = '';
  let i = 0;
  const len = html.length;

  while (i < len) {
    if (html[i] === '\n') {
      lineNum++;
      result += html[i];
      i++;
      continue;
    }

    if (!inScript && !inStyle && !inComment && html.startsWith('<!--', i)) {
      inComment = true;
      result += '<!--';
      i += 4;
      continue;
    }
    if (inComment) {
      if (html.startsWith('-->', i)) {
        inComment = false;
        result += '-->';
        i += 3;
        continue;
      }
      result += html[i];
      i++;
      continue;
    }

    if (!inStyle && !inScript && !inComment && html.slice(i, i + 7).toLowerCase() === '<script') {
      const tagEnd = html.indexOf('>', i);
      if (tagEnd !== -1) {
        const scriptOpening = html.slice(i, tagEnd + 1);
        result += scriptOpening;
        lineNum += (scriptOpening.match(/\n/g) || []).length;
        i = tagEnd + 1;
        inScript = true;
        continue;
      }
    }
    if (inScript) {
      if (html.slice(i, i + 9).toLowerCase() === '</script>') {
        inScript = false;
        result += '</script>';
        i += 9;
        continue;
      }
      result += html[i];
      i++;
      continue;
    }

    if (!inScript && !inStyle && !inComment && html.slice(i, i + 6).toLowerCase() === '<style') {
      const tagEnd = html.indexOf('>', i);
      if (tagEnd !== -1) {
        const styleOpening = html.slice(i, tagEnd + 1);
        result += styleOpening;
        lineNum += (styleOpening.match(/\n/g) || []).length;
        i = tagEnd + 1;
        inStyle = true;
        continue;
      }
    }
    if (inStyle) {
      if (html.slice(i, i + 8).toLowerCase() === '</style>') {
        inStyle = false;
        result += '</style>';
        i += 8;
        continue;
      }
      result += html[i];
      i++;
      continue;
    }

    if (html[i] === '<' && html[i + 1] !== '/' && html[i + 1] !== '!' && html[i + 1] !== '?') {
      const match = html.slice(i).match(/^<([a-zA-Z][a-zA-Z0-9\-]*)([\s\/>])/);
      if (match) {
        const tagName = match[1].toLowerCase();
        const skippedTags = ['html', 'head', 'meta', 'link', 'title', 'base'];
        if (!skippedTags.includes(tagName)) {
          const delimiter = match[2];
          result += `<${match[1]} data-loc-line="${lineNum}"${(delimiter === '>' || delimiter === '/') ? ' ' + delimiter : delimiter}`;
          i += match[0].length;
          // 태그 이름 바로 뒤가 줄바꿈이면 이 문자를 여기서 소비했으므로 줄 번호를 직접 올려준다
          if (delimiter === '\n') lineNum++;
          continue;
        }
      }
    }

    result += html[i];
    i++;
  }
  return result;
}

// Sandbox Header: Loop Guard, Console Interceptor & Drag/Inspect to Code
const sandboxScript = `
<style>
  .__hl-inspector-box {
    position: fixed;
    pointer-events: none;
    z-index: 2147483647;
    border: 2px solid #6366f1;
    background: rgba(99, 102, 241, 0.14);
    border-radius: 4px;
    box-sizing: border-box;
    display: none;
    transition: all 0.05s ease;
  }
  .__hl-inspector-tag {
    position: absolute;
    bottom: calc(100% + 5px);
    left: 0;
    background: #6366f1;
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 11px;
    font-weight: 600;
    padding: 3px 8px;
    border-radius: 4px;
    white-space: nowrap;
    box-shadow: 0 2px 8px rgba(0,0,0,0.35);
    pointer-events: none;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .__hl-inspector-tag.flip-down {
    bottom: auto;
    top: calc(100% + 5px);
  }
</style>
<script>
  (function() {
    // 1. Infinite loop guard
    // 이벤트/타이머/스크립트 실행 한 덩어리(마이크로태스크 전까지)의 연속 실행 시간을 잰다.
    // (예전에는 페이지 로드 시점부터 누적 반복 수를 세서, 애니메이션이 1~2초 뒤 오탐으로 멈췄음)
    var __loopStartTime = 0;
    var __loopCounter = 0;
    var __loopArmed = false;
    window.__checkLoop = function() {
      if (!__loopArmed) {
        __loopArmed = true;
        __loopStartTime = Date.now();
        __loopCounter = 0;
        Promise.resolve().then(function() { __loopArmed = false; });
        return;
      }
      __loopCounter++;
      if (__loopCounter % 1000 === 0 && Date.now() - __loopStartTime > 2000) {
        __loopArmed = false;
        window.parent.postMessage({ type: 'CONSOLE_LOG', level: 'error', message: '⚠️ 무한 루프 감지: 코드 실행이 안전하게 차단되었습니다.', time: new Date().toLocaleTimeString() }, '*');
        throw new Error('Infinite loop detected and aborted');
      }
    };

    // 2. Console logs interceptor
    function serialize(data) {
      try {
        if (data instanceof Error) return (data.name || 'Error') + ': ' + data.message;
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
      // 줄 번호는 미리보기 문서 기준이라 부모(에디터)에서 실제 코드 줄로 보정해서 표시
      window.parent.postMessage({ type: 'CONSOLE_LOG', level: 'error', message: String(msg), errorLine: line || 0, errorCol: col || 0, time: new Date().toLocaleTimeString() }, '*');
    };
    window.addEventListener('unhandledrejection', function(ev) {
      window.parent.postMessage({ type: 'CONSOLE_LOG', level: 'error', message: '처리되지 않은 Promise 거부: ' + serialize(ev.reason), time: new Date().toLocaleTimeString() }, '*');
    });

    // 3. Live Preview Drag & Inspect to Code
    var overlay = null;
    var tagBadge = null;
    var isMouseDown = false;
    var startX = 0;
    var startY = 0;
    var startTarget = null;
    var isDraggingEl = false;
    var inspectorMode = false;
    var hideTimer = null;

    function createOverlay() {
      if (overlay) return;
      overlay = document.createElement('div');
      overlay.className = '__hl-inspector-box';
      tagBadge = document.createElement('div');
      tagBadge.className = '__hl-inspector-tag';
      overlay.appendChild(tagBadge);
      var container = document.body || document.documentElement;
      if (container) container.appendChild(overlay);
    }

    // 요소가 자기 자신의 data-loc-line 을 가지면 exact, 조상에서 찾으면 exact=false (JS로 만든 요소 등)
    function getElementLocation(el) {
      if (!el || !el.getAttribute) return { line: null, exact: false, tag: '' };
      var own = el.getAttribute('data-loc-line');
      if (own) return { line: parseInt(own, 10), exact: true, tag: el.tagName.toLowerCase() };
      if (el.closest) {
        var closest = el.closest('[data-loc-line]');
        if (closest) return { line: parseInt(closest.getAttribute('data-loc-line'), 10), exact: false, tag: closest.tagName.toLowerCase() };
      }
      return { line: null, exact: false, tag: '' };
    }

    function getElementLocationLine(el) {
      if (!el || el === document.body || el === document.documentElement) return null;
      return getElementLocation(el).line;
    }

    // 드래그로 텍스트를 선택했을 때, 마우스를 놓은 위치가 아니라 '선택이 시작된 요소'를 기준으로 삼는다
    function getSelectionStartElement() {
      try {
        var sel = window.getSelection ? window.getSelection() : null;
        if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return null;
        var node = sel.getRangeAt(0).startContainer;
        if (node && node.nodeType === 3) node = node.parentElement;
        return (node && node.nodeType === 1) ? node : null;
      } catch (e) {
        return null;
      }
    }

    function resolveTarget(fallbackTarget, selectedText) {
      if (selectedText) {
        var selEl = getSelectionStartElement();
        if (selEl) return selEl;
      }
      return fallbackTarget;
    }

    function updateOverlay(el, statusText) {
      if (!el || el === document.body || el === document.documentElement) {
        if (overlay) overlay.style.display = 'none';
        return;
      }
      createOverlay();
      var rect = el.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) return;

      overlay.style.display = 'block';
      overlay.style.top = rect.top + 'px';
      overlay.style.left = rect.left + 'px';
      overlay.style.width = rect.width + 'px';
      overlay.style.height = rect.height + 'px';

      var tagName = el.tagName ? el.tagName.toLowerCase() : 'element';
      var idStr = el.id ? ('#' + el.id) : '';
      var classStr = (typeof el.className === 'string' && el.className) ? ('.' + el.className.trim().split(/\\s+/)[0]) : '';
      var line = getElementLocationLine(el);
      var lineStr = line ? (' [Ln ' + line + ']') : '';

      tagBadge.textContent = '<' + tagName + idStr + classStr + '>' + lineStr + (statusText ? ' ' + statusText : '');

      if (rect.top < 32) {
        tagBadge.classList.add('flip-down');
      } else {
        tagBadge.classList.remove('flip-down');
      }
    }

    function hideOverlay(delay) {
      if (hideTimer) clearTimeout(hideTimer);
      if (delay) {
        hideTimer = setTimeout(function() {
          if (overlay) overlay.style.display = 'none';
        }, delay);
      } else {
        if (overlay) overlay.style.display = 'none';
      }
    }

    function sendCodeLocateRequest(target, selectedText) {
      var isRoot = !target || target === document.documentElement;
      var loc = isRoot ? { line: null, exact: false, tag: '' } : getElementLocation(target);
      // <html>/<body> 자체를 눌렀는데 소스 줄 정보가 없으면, 엉뚱한 본문 텍스트로 검색하지 않도록 비워서 보낸다
      var blank = isRoot || (target === document.body && !loc.line);
      var tagName = (!blank && target.tagName) ? target.tagName.toLowerCase() : '';
      var id = blank ? '' : (target.id || '');
      var className = (!blank && typeof target.className === 'string') ? target.className : '';
      var innerText = (!blank && target.innerText) ? target.innerText.slice(0, 100) : '';

      window.parent.postMessage({
        type: 'LOCATE_CODE_FROM_PREVIEW',
        line: loc.line,
        exact: loc.exact,
        locTag: loc.tag,
        text: selectedText || '',
        tagName: tagName,
        id: id,
        className: className,
        innerText: innerText
      }, '*');
    }

    window.addEventListener('mousedown', function(e) {
      if (e.button !== 0) return;
      isMouseDown = true;
      isDraggingEl = false;
      startX = e.clientX;
      startY = e.clientY;
      startTarget = e.target;
    }, true);

    window.addEventListener('mousemove', function(e) {
      if (isMouseDown) {
        var dist = Math.hypot(e.clientX - startX, e.clientY - startY);
        if (dist > 3) {
          isDraggingEl = true;
          var currentEl = document.elementFromPoint(e.clientX, e.clientY) || startTarget;
          updateOverlay(currentEl, '🎯 드래그 탐색 중...');
        }
      } else if (inspectorMode) {
        var target = document.elementFromPoint(e.clientX, e.clientY);
        updateOverlay(target, '클릭 시 코드 이동');
      }
    }, true);

    window.addEventListener('mouseup', function(e) {
      if (!isMouseDown) return;
      isMouseDown = false;

      var sel = window.getSelection ? window.getSelection() : null;
      var selectedText = sel ? sel.toString().trim() : '';
      var finalTarget = isDraggingEl ? (document.elementFromPoint(e.clientX, e.clientY) || startTarget) : startTarget;
      finalTarget = resolveTarget(finalTarget, selectedText);

      if (isDraggingEl || selectedText.length > 0 || inspectorMode || e.altKey) {
        updateOverlay(finalTarget, '✓ 코드 찾는 중...');
        sendCodeLocateRequest(finalTarget, selectedText);
        hideOverlay(500);

        if (inspectorMode && e.target && e.target.tagName === 'A') {
          e.preventDefault();
        }
      } else {
        hideOverlay(0);
      }
      isDraggingEl = false;
    }, true);

    window.addEventListener('dragend', function(e) {
      if (startTarget) {
        var sel = window.getSelection ? window.getSelection() : null;
        var selectedText = sel ? sel.toString().trim() : '';
        sendCodeLocateRequest(resolveTarget(startTarget, selectedText), selectedText);
        hideOverlay(300);
      }
      isMouseDown = false;
      isDraggingEl = false;
    });

    window.addEventListener('message', function(ev) {
      if (ev.data && ev.data.type === 'SET_INSPECTOR_MODE') {
        inspectorMode = !!ev.data.enabled;
        document.body.style.cursor = inspectorMode ? 'crosshair' : 'default';
        if (!inspectorMode) hideOverlay(0);
      } else if (ev.data && ev.data.type === 'PARENT_MOUSE_UP') {
        if (isMouseDown && (isDraggingEl || (window.getSelection && window.getSelection().toString().trim()))) {
          var sel = window.getSelection ? window.getSelection() : null;
          var selectedText = sel ? sel.toString().trim() : '';
          sendCodeLocateRequest(resolveTarget(startTarget, selectedText), selectedText);
          hideOverlay(350);
        } else {
          hideOverlay(0);
        }
        isMouseDown = false;
        isDraggingEl = false;
      }
    });
  })();
<\/script>
`;

// 샌드박스가 문서 앞에 끼어들며 밀어내는 줄 수 (오류 줄 번호 보정용)
const SANDBOX_LINE_COUNT = (sandboxScript.match(/\n/g) || []).length;

// <head ...> 뒤(없으면 <html ...> 뒤, 그것도 없으면 DOCTYPE 뒤)에 샌드박스를 끼워 넣는다.
// - <head lang="ko"> 처럼 속성이 붙은 태그도 처리
// - DOCTYPE 앞에 내용을 넣어 미리보기가 쿼크 모드로 바뀌는 문제 방지
// - 함수 치환자를 써서 샌드박스 안의 '$' 문자가 치환 패턴으로 해석되지 않게 함
function injectSandbox(code) {
  const headRe = /<head(\s[^>]*)?>/i;
  if (headRe.test(code)) return code.replace(headRe, (m) => m + sandboxScript);
  const htmlRe = /<html(\s[^>]*)?>/i;
  if (htmlRe.test(code)) return code.replace(htmlRe, (m) => m + '<head>' + sandboxScript + '</head>');
  const doctype = code.match(/^\s*<!doctype[^>]*>/i);
  if (doctype) return doctype[0] + sandboxScript + code.slice(doctype[0].length);
  return sandboxScript + code;
}

// Trigger Live Preview Rendering with Scroll Preservation
function triggerRender() {
  state.renderCount++;
  
  let rawCode;
  if (state.mode === 'tabs') {
    const h = state.models.html ? state.models.html.getValue() : '';
    const c = state.models.css ? state.models.css.getValue() : '';
    const j = state.models.js ? state.models.js.getValue() : '';
    const annotatedH = annotateHtmlWithLineNumbers(h);
    rawCode = combineComponentsToHtml(annotatedH, c, j);
    // JS 탭 코드가 합쳐진 문서에서 몇 번째 줄부터 시작하는지 (오류 줄 번호 보정용)
    const jsIdx = j ? rawCode.lastIndexOf(j) : -1;
    state.previewJsStartLine = jsIdx >= 0 ? rawCode.slice(0, jsIdx).split('\n').length : 0;
  } else {
    state.previewJsStartLine = 0;
    const singleCode = state.models.single ? state.models.single.getValue() : '';
    rawCode = annotateHtmlWithLineNumbers(singleCode);
  }
  
  // Apply Loop Guards to scripts
  const codeWithGuards = injectLoopGuards(rawCode);

  const injectedCode = injectSandbox(codeWithGuards);

  // Preserve previous scroll position
  let scrollX = 0;
  let scrollY = 0;
  try {
    if (elements.previewFrame.contentWindow) {
      scrollX = elements.previewFrame.contentWindow.scrollX || 0;
      scrollY = elements.previewFrame.contentWindow.scrollY || 0;
    }
  } catch (e) {}

  // Update srcdoc
  elements.previewFrame.srcdoc = injectedCode;

  // Restore scroll after load and sync inspector mode
  elements.previewFrame.onload = function() {
    try {
      if (elements.previewFrame.contentWindow) {
        if (scrollX > 0 || scrollY > 0) {
          elements.previewFrame.contentWindow.scrollTo(scrollX, scrollY);
        }
        if (state.inspectorMode) {
          elements.previewFrame.contentWindow.postMessage({
            type: 'SET_INSPECTOR_MODE',
            enabled: true
          }, '*');
        }
      }
    } catch (e) {}
  };

  setStatus('미리보기 실시간 동기화됨');
}

// Monaco Code Finder Highlight State
let activeEditorDecorations = [];
let decorationTimeout = null;

function highlightCodeInEditor(line, startCol, endCol) {
  if (!state.editor) return;
  if (decorationTimeout) clearTimeout(decorationTimeout);

  const range = new monaco.Range(line, startCol, line, endCol);
  const lineRange = new monaco.Range(line, 1, line, 1);

  activeEditorDecorations = state.editor.deltaDecorations(activeEditorDecorations, [
    {
      range: lineRange,
      options: {
        isWholeLine: true,
        className: 'monaco-pulse-line'
      }
    },
    {
      range: range,
      options: {
        isWholeLine: false,
        className: 'monaco-pulse-target'
      }
    }
  ]);

  decorationTimeout = setTimeout(() => {
    if (state.editor) {
      activeEditorDecorations = state.editor.deltaDecorations(activeEditorDecorations, []);
    }
  }, 1800);
}

// ------------------------------------------------------------------
// 프리뷰 요소 → 에디터 코드 위치 찾기
// ------------------------------------------------------------------

// <style>/<script> 블록과 HTML 주석의 범위 (요소 검색에서 제외할 영역)
function getNonMarkupRanges(text) {
  const ranges = [];
  const re = /<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>|<!--[\s\S]*?-->/gi;
  let m;
  while ((m = re.exec(text)) !== null) {
    ranges.push([m.index, m.index + m[0].length]);
  }
  return ranges;
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 순수 함수: 소스 텍스트와 프리뷰가 보낸 요소 정보로 코드 위치를 계산한다.
// 반환: { line, startCol, endCol, stale? } | { failed: 'stale' } | null
function locateInSource(text, req) {
  const ranges = getNonMarkupRanges(text);
  const inSkipped = (off) => ranges.some((r) => off >= r[0] && off < r[1]);

  const lineStarts = [0];
  for (let i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) === 10) lineStarts.push(i + 1);
  }
  const totalLines = lineStarts.length;
  const lineOf = (off) => {
    let lo = 0;
    let hi = totalLines - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (lineStarts[mid] <= off) lo = mid; else hi = mid - 1;
    }
    return lo + 1;
  };
  const toResult = (startOff, endOff, extra) => {
    const ln = lineOf(startOff);
    let lineEnd = ln < totalLines ? lineStarts[ln] - 1 : text.length;
    if (lineEnd > 0 && text.charCodeAt(lineEnd - 1) === 13) lineEnd--;
    const startCol = startOff - lineStarts[ln - 1] + 1;
    const endCol = Math.max(startCol + 1, Math.min(endOff, lineEnd) - lineStarts[ln - 1] + 1);
    return Object.assign({ line: ln, startCol, endCol }, extra || {});
  };

  const tag = (req.tagName || '').toLowerCase();
  const locTag = (req.locTag || '').toLowerCase();
  const hint = (req.line && req.line >= 1) ? req.line : null;

  // 여는 태그 후보 수집 (from~to 범위, 마크업 영역만)
  const collectTags = (name, from, to) => {
    const re = new RegExp('<' + (name ? escapeRegExp(name) : '[a-zA-Z][\\w:-]*') + '(?=[\\s/>])', 'gi');
    re.lastIndex = from;
    const out = [];
    let m;
    while ((m = re.exec(text)) !== null && m.index < to) {
      if (inSkipped(m.index)) continue;
      const close = text.indexOf('>', m.index);
      out.push({
        index: m.index,
        len: m[0].length,
        head: text.slice(m.index, close === -1 ? m.index + 300 : close + 1)
      });
    }
    return out;
  };

  const attrValue = (head, name) => {
    const m = head.match(new RegExp('(?<![\\w-])' + name + '\\s*=\\s*(?:"([^"]*)"|\'([^\']*)\')', 'i'));
    return m ? (m[1] !== undefined ? m[1] : m[2]) : null;
  };

  // id 가 같으면 크게, class 토큰이 겹치면 조금씩 가산
  const score = (cand) => {
    let s = 0;
    if (req.id && attrValue(cand.head, 'id') === req.id) s += 1000;
    if (req.className) {
      const have = (attrValue(cand.head, 'class') || '').trim().split(/\s+/);
      req.className.trim().split(/\s+/).forEach((w) => {
        if (w && have.includes(w)) s += 10;
      });
    }
    return s;
  };

  // 1) 선택한 텍스트 — 마크업 영역 안에서만 검색, 줄 힌트가 있으면 가장 가까운 것
  if (req.text) {
    let best = null;
    let from = 0;
    for (;;) {
      const idx = text.indexOf(req.text, from);
      if (idx === -1) break;
      if (!inSkipped(idx)) {
        const dist = hint ? Math.abs(lineOf(idx) - hint) : 0;
        if (!best || dist < best.dist) best = { idx, dist };
        if (!hint) break;
      }
      from = idx + 1;
    }
    if (best) return toResult(best.idx, best.idx + req.text.length);
  }

  // 2) data-loc-line 으로 찾은 줄 — 그 줄에 실제로 해당 태그가 있는지 확인
  let stale = false;
  if (hint) {
    const name = locTag || tag;
    if (hint <= totalLines) {
      const lineStart = lineStarts[hint - 1];
      const lineEnd = hint < totalLines ? lineStarts[hint] : text.length + 1;
      const onLine = collectTags(name, lineStart, lineEnd);
      if (onLine.length) {
        let pick = onLine[0];
        for (const c of onLine) {
          if (score(c) > score(pick)) pick = c;
        }
        return toResult(pick.index, pick.index + pick.len);
      }
    }
    // 줄에 그 태그가 없다 = 코드를 고친 뒤 미리보기가 아직 갱신되지 않은 상태
    stale = true;
  }

  // 3) id / class 로 여는 태그 검색 (줄 정보가 없거나 어긋났을 때)
  //    조상에게서 줄을 물려받은 요소(JS로 만든 요소)는 같은 class 의 다른 정적 요소로 잘못 가지 않도록 제외
  if ((req.id || req.className) && !(hint && req.exact === false)) {
    let best = null;
    for (const c of collectTags(tag, 0, text.length)) {
      const sc = score(c);
      if (sc <= 0) continue;
      const dist = hint ? Math.abs(lineOf(c.index) - hint) : 0;
      if (!best || sc > best.sc || (sc === best.sc && dist < best.dist)) best = { c, sc, dist };
    }
    if (best) return toResult(best.c.index, best.c.index + best.c.len, { stale });
  }

  // 줄 정보는 있었는데 대응되는 코드를 못 찾았다면, 엉뚱한 곳으로 보내지 않고 알려준다
  if (stale) return { failed: 'stale' };

  // 4) 마지막 수단: 요소 안 글자 일부
  const firstLine = (req.innerText || '').split('\n').map((t) => t.trim()).find((t) => t.length > 0) || '';
  const snippet = firstLine.slice(0, 30);
  if (snippet.length >= 3) {
    let from = 0;
    for (;;) {
      const idx = text.indexOf(snippet, from);
      if (idx === -1) break;
      if (!inSkipped(idx)) return toResult(idx, idx + snippet.length);
      from = idx + 1;
    }
  }
  return null;
}

// Locate and Highlight Code in Monaco from Live Preview Drag / Click
function handleLocateCodeFromPreview(data) {
  const { text, tagName } = data;
  if (!state.editor) return;

  // Determine target tab and model
  const targetTab = 'html';
  const targetModel = state.mode === 'tabs' ? state.models.html : state.models.single;
  if (!targetModel) return;

  const found = locateInSource(targetModel.getValue(), data);

  if (found && found.failed === 'stale') {
    showToast('코드가 수정되어 미리보기와 위치가 어긋났습니다. Ctrl+Enter로 새로고침 후 다시 시도하세요.', 'warning');
    return;
  }
  if (!found) {
    showToast('해당 요소의 코드를 에디터에서 찾을 수 없습니다.', 'warning');
    return;
  }

  const targetLine = found.line;
  const targetColStart = found.startCol;
  const targetColEnd = found.endCol;

  // Switch tab if needed
  if (state.mode === 'tabs' && state.currentTab !== targetTab) {
    switchTab(targetTab);
  }

  const scrollType = (window.monaco && monaco.editor && monaco.editor.ScrollType) ? monaco.editor.ScrollType.Smooth : undefined;
  state.editor.revealLineInCenter(targetLine, scrollType);
  state.editor.setSelection(new monaco.Range(targetLine, targetColStart, targetLine, targetColEnd));
  state.editor.focus();

  highlightCodeInEditor(targetLine, targetColStart, targetColEnd);

  const tagLabel = tagName ? `<${tagName}>` : '요소';
  const label = text ? `"${text.length > 20 ? text.slice(0, 20) + '...' : text}"` : tagLabel;
  setStatus(`🎯 코드 탐색: ${label} (줄 ${targetLine})`);
  showToast(`🎯 코드 발견: ${label} (줄 ${targetLine})`, 'info');
}

// 미리보기 문서의 오류 줄을 에디터의 실제 줄 번호로 바꿔 문자열로 반환
function describeErrorLocation(line, col) {
  const docLine = line - SANDBOX_LINE_COUNT; // 샌드박스가 밀어낸 줄 수 제거
  const colStr = col ? ':' + col : '';
  if (state.mode === 'tabs') {
    const jsLines = state.models.js ? state.models.js.getLineCount() : 0;
    const rel = docLine - state.previewJsStartLine + 1;
    if (state.previewJsStartLine > 0 && rel >= 1 && rel <= jsLines) {
      return `(JS 탭 ${rel}줄${colStr})`;
    }
    return docLine >= 1 ? `(미리보기 문서 ${docLine}줄${colStr})` : '';
  }
  return docLine >= 1 ? `(줄 ${docLine}${colStr})` : '';
}

// Receive Messages from Preview Frame
window.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'CONSOLE_LOG') {
    let message = event.data.message;
    if (event.data.errorLine) {
      message += ' ' + describeErrorLocation(event.data.errorLine, event.data.errorCol);
    }
    addConsoleEntry(event.data.level, message, event.data.time);
  } else if (event.data && event.data.type === 'LOCATE_CODE_FROM_PREVIEW') {
    handleLocateCodeFromPreview(event.data);
  }
});

function addConsoleEntry(level, message, time) {
  const placeholder = elements.consoleOutput.querySelector('.console-placeholder');
  if (placeholder) placeholder.remove();

  // Cap console entries to 250 to prevent memory bloating
  if (state.consoleEntries.length >= 250) {
    state.consoleEntries.shift();
    if (elements.consoleOutput.firstElementChild) {
      elements.consoleOutput.firstElementChild.remove();
    }
  }

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

// Element Inspector Toggle (Click/Drag to Code)
if (elements.btnInspect) {
  elements.btnInspect.addEventListener('click', () => {
    state.inspectorMode = !state.inspectorMode;
    elements.btnInspect.classList.toggle('active', state.inspectorMode);
    try {
      if (elements.previewFrame && elements.previewFrame.contentWindow) {
        elements.previewFrame.contentWindow.postMessage({
          type: 'SET_INSPECTOR_MODE',
          enabled: state.inspectorMode
        }, '*');
      }
    } catch (e) {}
    showToast(state.inspectorMode ? '요소 코드 탐색기 활성화 (요소를 클릭/드래그하여 코드를 찾으세요)' : '요소 코드 탐색기 비활성화 (마우스 드래그 자동 탐색 유지)', 'info');
  });
}

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

// 드롭한 파일 읽기: UTF-8 우선, 아니면 EUC-KR(CP949)로 해석 (한글 깨짐 방지)
async function readDroppedFileAsText(file) {
  const buf = await file.arrayBuffer();
  try {
    return new TextDecoder('utf-8', { fatal: true }).decode(buf);
  } catch (e) {
    return new TextDecoder('euc-kr').decode(buf);
  }
}

window.addEventListener('drop', async (e) => {
  e.preventDefault();
  elements.dropOverlay.classList.remove('active');

  const files = e.dataTransfer.files;
  if (files.length > 0) {
    const file = files[0];
    try {
      const content = await readDroppedFileAsText(file);
      setFullCode(content);
      state.currentFilename = file.name;
      // 드롭한 파일의 실제 경로는 알 수 없다. 이전에 열었던 파일 경로가 남아 있으면
      // Ctrl+S 가 엉뚱한 파일을 덮어쓰므로 경로를 비워 '다른 이름으로 저장'으로 유도한다.
      state.currentFilepath = null;
      if (window.pywebview && window.pywebview.api && window.pywebview.api.reset_filepath) {
        try { await window.pywebview.api.reset_filepath(); } catch (err) {}
      }
      state.isDirty = false;
      elements.currentFilename.textContent = file.name;
      elements.dirtyIndicator.style.display = 'none';
      elements.statusPath.textContent = file.name + ' (저장 시 위치 선택)';
      showToast(`'${file.name}' 파일을 불러왔습니다.`);
    } catch (err) {
      showToast('파일을 읽지 못했습니다: ' + (err.message || err), 'error');
    }
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
    try {
      await window.pywebview.api.reset_filepath();
    } catch (e) {}
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

elements.splitter.addEventListener('mousedown', () => {
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
  try {
    if (elements.previewFrame && elements.previewFrame.contentWindow) {
      elements.previewFrame.contentWindow.postMessage({ type: 'PARENT_MOUSE_UP' }, '*');
    }
  } catch (e) {}
});

// Global Keyboard Shortcuts
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

// ==========================================
// Software Auto-Update System
// ==========================================
let latestUpdateInfo = null;

function openUpdateModal() {
  if (!elements.updateModal) return;
  elements.updateModal.style.display = 'flex';
  requestAnimationFrame(() => elements.updateModal.classList.add('active'));
}

function closeUpdateModal() {
  if (!elements.updateModal) return;
  elements.updateModal.classList.remove('active');
  setTimeout(() => {
    elements.updateModal.style.display = 'none';
  }, 200);
}

async function checkSoftwareUpdates(isUserInitiated = false) {
  if (!window.pywebview || !window.pywebview.api || !window.pywebview.api.check_for_updates) {
    if (isUserInitiated) {
      openUpdateModal();
      renderUpdateStatus({
        success: true,
        has_update: false,
        current_version: '1.1.1',
        message: '웹 브라우저 모드입니다. GitHub에서 최신 버전을 확인할 수 있습니다.'
      });
    }
    return;
  }

  if (isUserInitiated) {
    openUpdateModal();
    elements.updateModalBody.innerHTML = `
      <div class="update-checking-state">
        <i class="fa-solid fa-circle-notch fa-spin" style="font-size: 30px; margin-bottom: 14px; color: #6366f1;"></i>
        <p style="font-weight: 600; font-size: 14px; color: var(--text-primary); margin-bottom: 4px;">최신 버전 정보를 확인하는 중...</p>
        <span style="font-size: 12px; color: var(--text-muted);">GitHub Releases 서버와 통신 중입니다</span>
      </div>
    `;
    elements.updateModalFooter.innerHTML = `
      <button id="btn-modal-close-checking" class="btn btn-secondary">닫기</button>
    `;
    document.getElementById('btn-modal-close-checking')?.addEventListener('click', closeUpdateModal);
  }

  try {
    const res = await window.pywebview.api.check_for_updates();
    latestUpdateInfo = res;

    if (res && res.has_update) {
      if (elements.updateBadge) elements.updateBadge.style.display = 'block';
      if (!isUserInitiated) {
        // 자동 확인 시에도 모달을 열어 업데이트를 바로 적용할 수 있도록 안내
        openUpdateModal();
        renderUpdateStatus(res);
      } else {
        renderUpdateStatus(res);
      }
    } else {
      if (elements.updateBadge) elements.updateBadge.style.display = 'none';
      if (isUserInitiated) {
        renderUpdateStatus(res);
      }
    }
  } catch (err) {
    if (isUserInitiated) {
      renderUpdateStatus({
        success: false,
        error: '업데이트 서버에 연결할 수 없습니다: ' + (err.message || err)
      });
    }
  }
}

function renderUpdateStatus(info) {
  if (!elements.updateModalBody || !elements.updateModalFooter) return;

  if (info && info.has_update) {
    elements.updateModalBody.innerHTML = `
      <div class="version-comparison">
        <div class="version-box">
          <span class="version-label">현재 버전</span>
          <span class="version-value">v${escapeHtml(info.current_version || '1.1.1')}</span>
        </div>
        <i class="fa-solid fa-arrow-right-long version-arrow"></i>
        <div class="version-box">
          <span class="version-label">새로운 최신 버전</span>
          <span class="version-value accent">v${escapeHtml(info.latest_version)}</span>
        </div>
      </div>
      <h4 style="margin: 0 0 6px 0; font-size: 13px; color: var(--text-primary); font-weight: 600;">
        ${escapeHtml(info.release_title || '새 버전 안내')}
      </h4>
      <div class="update-release-notes">${escapeHtml(info.release_notes || '새로운 기능과 안정성 개선이 포함되어 있습니다.')}</div>
      <div id="update-download-progress-container" style="display:none; margin-top: 14px;">
        <div style="display:flex; justify-content:space-between; font-size: 12px; margin-bottom: 6px;">
          <span id="update-progress-status" style="color: #38bdf8; font-weight: 500;">다운로드 및 패치 준비 중...</span>
        </div>
        <div class="update-progress-bar">
          <div class="update-progress-fill" id="update-progress-fill"></div>
        </div>
      </div>
    `;

    elements.updateModalFooter.innerHTML = `
      <button id="btn-modal-open-browser" class="btn btn-secondary" title="브라우저에서 릴리즈 페이지 열기">
        <i class="fa-solid fa-arrow-up-right-from-square"></i> 웹에서 보기
      </button>
      <button id="btn-modal-do-update" class="btn btn-primary">
        <i class="fa-solid fa-download"></i> 지금 자동 업데이트
      </button>
    `;

    document.getElementById('btn-modal-open-browser')?.addEventListener('click', () => {
      if (window.pywebview && window.pywebview.api && window.pywebview.api.open_external_url) {
        window.pywebview.api.open_external_url(info.release_url || 'https://github.com/12Cchris/html-live-studio/releases');
      } else {
        window.open(info.release_url || 'https://github.com/12Cchris/html-live-studio/releases', '_blank');
      }
    });

    document.getElementById('btn-modal-do-update')?.addEventListener('click', async () => {
      const btnDoUpdate = document.getElementById('btn-modal-do-update');
      const progressContainer = document.getElementById('update-download-progress-container');
      const progressStatus = document.getElementById('update-progress-status');

      if (btnDoUpdate) {
        btnDoUpdate.disabled = true;
        btnDoUpdate.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> 업데이트 다운로드 중...';
      }
      if (progressContainer) progressContainer.style.display = 'block';
      if (progressStatus) progressStatus.textContent = '최신 실행 파일 다운로드 중... 잠시만 기다려주세요.';

      if (window.pywebview && window.pywebview.api && window.pywebview.api.download_and_install_update) {
        try {
          const res = await window.pywebview.api.download_and_install_update(info.download_url);
          if (res && res.success) {
            if (progressStatus) progressStatus.textContent = res.message || '업데이트 적용 완료! 프로그램을 재시작합니다...';
            showToast(res.message || '업데이트 적용 완료! 재시작 중...', 'info');
          } else if (res && res.error) {
            alert('업데이트 실패: ' + res.error);
            if (btnDoUpdate) {
              btnDoUpdate.disabled = false;
              btnDoUpdate.innerHTML = '<i class="fa-solid fa-download"></i> 재시도';
            }
          }
        } catch (e) {
          alert('업데이트 오류: ' + (e.message || e));
          if (btnDoUpdate) {
            btnDoUpdate.disabled = false;
            btnDoUpdate.innerHTML = '<i class="fa-solid fa-download"></i> 재시도';
          }
        }
      } else {
        window.open(info.download_url || info.release_url, '_blank');
      }
    });
  } else {
    // Up to date
    elements.updateModalBody.innerHTML = `
      <div style="text-align: center; padding: 20px 10px;">
        <i class="fa-solid fa-circle-check text-green" style="font-size: 42px; color: #10b981; margin-bottom: 14px;"></i>
        <h3 style="margin: 0 0 8px 0; font-size: 16px; color: var(--text-primary);">최신 버전을 사용 중입니다</h3>
        <p style="margin: 0 0 14px 0; font-size: 13px; color: var(--text-secondary);">
          현재 설치 버전: <strong style="color: #38bdf8; font-family: var(--font-mono);">v${escapeHtml(info.current_version || '1.1.1')}</strong>
        </p>
        <p style="margin: 0; font-size: 11px; color: var(--text-muted); line-height: 1.5;">
          ${escapeHtml(info.message || '현재 버전이 가장 최신입니다.')}<br>
          새로운 버전이 출시되면 실행 시 자동으로 안내해 드립니다.
        </p>
      </div>
    `;

    elements.updateModalFooter.innerHTML = `
      <button id="btn-modal-open-repo" class="btn btn-secondary" title="GitHub 저장소 바로가기">
        <i class="fa-brands fa-github"></i> GitHub 저장소
      </button>
      <button id="btn-modal-close-done" class="btn btn-primary">확인</button>
    `;

    document.getElementById('btn-modal-open-repo')?.addEventListener('click', () => {
      const repoUrl = 'https://github.com/12Cchris/html-live-studio';
      if (window.pywebview && window.pywebview.api && window.pywebview.api.open_external_url) {
        window.pywebview.api.open_external_url(repoUrl);
      } else {
        window.open(repoUrl, '_blank');
      }
    });

    document.getElementById('btn-modal-close-done')?.addEventListener('click', closeUpdateModal);
  }
}

// Wire up Update Modal Event Listeners
if (elements.btnUpdate) {
  elements.btnUpdate.addEventListener('click', () => checkSoftwareUpdates(true));
}
if (elements.btnCloseUpdateModal) {
  elements.btnCloseUpdateModal.addEventListener('click', closeUpdateModal);
}
if (elements.updateModal) {
  elements.updateModal.addEventListener('click', (e) => {
    if (e.target === elements.updateModal) closeUpdateModal();
  });
}

// Boot the editor when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  initMonaco();
  // 3초 후 백그라운드 자동 업데이트 확인
  setTimeout(() => {
    checkSoftwareUpdates(false);
  }, 3000);
});
