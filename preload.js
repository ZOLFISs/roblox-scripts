<!doctype html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>OMEGA Script Studio</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="app-shell">
  <aside class="rail">
    <div class="brand-mark">Ω</div>
    <button class="rail-btn active" title="Редактор">⌘</button>
    <button class="rail-btn" id="hubNav" title="Библиотека">▤</button>
    <div class="rail-spacer"></div>
    <button class="rail-btn" id="docsBtn" title="Документация">?</button>
  </aside>
  <aside class="sidebar">
    <div class="side-head"><div><div class="eyebrow">WORKSPACE</div><h2>Мои проекты</h2></div><button class="icon-btn" id="newTab" title="Новая вкладка">＋</button></div>
    <div class="project-pill"><span class="live-dot"></span><span>Untitled project</span><span class="pill-tag">LUAU</span></div>
    <div class="side-label">ФАЙЛЫ</div>
    <button class="file-row selected" id="currentFile"><span class="file-icon">λ</span><span id="fileName">main.luau</span><span class="file-state">●</span></button>
    <div class="side-label library-label">БЫСТРЫЙ СТАРТ</div>
    <button class="snippet" data-snippet="hello"><span class="snippet-icon purple">λ</span><span><b>Hello World</b><small>Базовый скрипт</small></span></button>
    <button class="snippet" data-snippet="part"><span class="snippet-icon blue">◇</span><span><b>Создать Part</b><small>Roblox Studio</small></span></button>
    <button class="snippet" data-snippet="player"><span class="snippet-icon orange">◎</span><span><b>Событие игрока</b><small>Server Script</small></span></button>
    <div class="sidebar-bottom"><div class="avatar">Ω</div><div><b>OMEGA Studio</b><small>Local workspace</small></div><span class="status-dot"></span></div>
  </aside>
  <main class="main">
    <header class="topbar">
      <div class="breadcrumbs"><span>Workspace</span><span class="slash">/</span><b id="crumbName">main.luau</b><span class="unsaved" id="unsaved">●</span></div>
      <div class="top-actions"><span class="safe-label"><span class="shield">✓</span> Studio workflow</span><button class="btn ghost" id="openBtn">Открыть</button><button class="btn ghost" id="saveBtn">Сохранить</button><button class="btn primary" id="exportBtn"><span>⇩</span> Экспорт .luau</button></div>
    </header>
    <div class="tabbar" id="tabbar"><button class="tab active"><span class="tab-lambda">λ</span> main.luau <span class="tab-close">×</span></button><button class="add-tab" id="tabPlus">＋</button></div>
    <section class="editor-layout">
      <div class="editor-panel">
        <div class="editor-toolbar"><div class="toolbar-left"><span class="tiny-dot"></span><span>LUau</span><span class="divider"></span><span id="lineCount">12 lines</span></div><div class="toolbar-right"><span class="keyhint">UTF-8</span><span class="keyhint">Spaces: 4</span><button class="icon-btn small" id="wrapBtn" title="Перенос строк">↪</button></div></div>
        <div class="code-area">
          <div class="line-numbers" id="lineNumbers">1</div>
          <textarea id="code" spellcheck="false" autocapitalize="off" autocomplete="off" aria-label="Редактор Luau" wrap="off">-- OMEGA Script Studio
-- Создавай скрипты и тестируй их в Roblox Studio.
-- Этот редактор не внедряет код в публичные игры.

local Players = game:GetService("Players")

local function greetPlayer(player)
    print("Welcome, " .. player.Name .. "!")
end

Players.PlayerAdded:Connect(greetPlayer)</textarea>
          <pre class="highlight" id="highlight" aria-hidden="true"></pre>
        </div>
        <footer class="editor-status"><div><span class="status-check">✓</span> Ready <span class="status-sep">|</span> Luau</div><div><span id="cursorPos">Ln 1, Col 1</span><span class="status-sep">|</span><span id="charCount">0 chars</span></div></footer>
      </div>
      <aside class="right-panel">
        <div class="panel-head"><div><div class="eyebrow">ASSISTANT</div><h3>Script Copilot</h3></div><span class="ai-orb">✦</span></div>
        <div class="assistant-body">
          <div class="assistant-welcome"><div class="welcome-icon">✦</div><h3>Что создадим?</h3><p>Опиши задачу — получи заготовку или отправь запрос в ChatGPT, чтобы доработать код.</p></div>
          <div class="prompt-chips"><button data-prompt="Объясни этот скрипт простыми словами">Объяснить код</button><button data-prompt="Найди возможные ошибки в этом Luau-коде и предложи исправления">Найти ошибки</button><button data-prompt="Добавь комментарии и улучши читаемость кода">Улучшить код</button></div>
          <label class="field-label" for="request">ОПИСАНИЕ ЗАДАЧИ</label>
          <textarea id="request" class="request-box" placeholder="Например: создай GUI с кнопкой открытия двери в моей игре..."></textarea>
          <button class="btn primary wide" id="copyPrompt">Скопировать запрос для ChatGPT <span>↗</span></button>
          <p class="micro-note">Запрос и код копируются в буфер обмена. Генерация ИИ не встроена и не требует API-ключа.</p>
        </div>
        <div class="panel-footer"><span class="green-pulse"></span> Локальный проект <span class="footer-spacer"></span><span>v1.0.0</span></div>
      </aside>
    </section>
    <section class="bottom-panel">
      <div class="bottom-head"><div class="bottom-tabs"><button class="bottom-tab active" data-bottom="output">OUTPUT</button><button class="bottom-tab" data-bottom="guide">QUICK GUIDE</button></div><button class="icon-btn small" id="clearOutput">⌫</button></div>
      <div class="output-content" id="outputContent"><div class="output-line"><span class="output-time">21:00:00</span><span class="output-green">●</span><span>OMEGA Script Studio запущен.</span></div><div class="output-line"><span class="output-time">21:00:00</span><span class="output-purple">✦</span><span>Редактируй файл, затем экспортируй его в Roblox Studio.</span></div></div>
    </section>
  </main>
</div>
<div class="toast" id="toast"></div>
<script src="renderer.js"></script>
</body></html>