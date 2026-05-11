/**
 * BID BIDDERS — Google Apps Script Web App
 * Принимает POST-запросы с лидами и записывает в Google Sheets
 *
 * КАК ЗАДЕПЛОИТЬ:
 * 1. Открой таблицу: https://docs.google.com/spreadsheets/d/1f8DBxfJkGulr8hksPckxwE6aPtZijJXyTGeTbGLJF5c
 * 2. Расширения → Apps Script
 * 3. Вставь весь этот код, замени старый
 * 4. Нажми "Развернуть" → "Новое развертывание"
 *    - Тип: Веб-приложение
 *    - Выполнять от имени: Я (твой аккаунт)
 *    - Доступ: Все (анонимные)
 * 5. Скопируй URL Web App → вставь в VITE_SHEETS_WEBHOOK_URL в .env
 * 6. При первом запуске нажми "Разрешить доступ"
 *
 * ТАКЖЕ: запусти вручную функцию setupSheet() один раз для создания заголовков и валидации
 */

const SHEET_NAME = 'Leady';

// ─── Колонки таблицы ────────────────────────────────────────────────────────
const HEADERS = [
  'Nr',
  'Data',
  'Godzina',
  'Źródło',        // B2C / B2B / Dobieramy auto
  'Imię',
  'Telefon',
  'Email',
  'Nadwozie',
  'Rocznik (zakres)',
  'Budżet ($)',
  'Marka',
  'Model',
  'Napęd',
  'Paliwo',
  'Skrzynia',
  'Kolor',
  'Uszkodzenia',
  'Kierownica',
  'Firma',         // tylko B2B
  'Format B2B',    // tylko B2B
  'Komentarz',
  'Status leada',
  'Status menedżera',
  'Notatki menedżera',
];

// ─── Statusy (dropdowny) ────────────────────────────────────────────────────
const LEAD_STATUSES = [
  '🔥 Gorący',
  '🌡️ Ciepły',
  '🧊 Zimny',
  '💤 Brak kontaktu',
  '✅ Klient',
  '❌ Odrzucony',
];

const MANAGER_STATUSES = [
  '📥 Nowy',
  '📞 Próba kontaktu',
  '💬 W kontakcie',
  '📧 Czeka na ofertę',
  '📤 Oferta wysłana',
  '🤝 Negocjacje',
  '🎉 Sprzedano',
  '😞 Rezygnacja',
];

// ─── Настройка таблицы (запустить один раз вручную) ─────────────────────────
function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  // Создаём лист если нет
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  // Заголовки
  const headerRow = sheet.getRange(1, 1, 1, HEADERS.length);
  headerRow.setValues([HEADERS]);

  // Стиль заголовков
  headerRow.setBackground('#1e3a5f');
  headerRow.setFontColor('#ffffff');
  headerRow.setFontWeight('bold');
  headerRow.setFontSize(11);
  headerRow.setWrap(true);
  headerRow.setVerticalAlignment('middle');
  sheet.setFrozenRows(1);

  // Ширина колонок
  const colWidths = [40, 90, 70, 100, 110, 130, 180, 100, 110, 110, 90, 90, 80, 80, 80, 80, 100, 100, 130, 130, 200, 130, 160, 220];
  colWidths.forEach((w, i) => sheet.setColumnWidth(i + 1, w));

  // Dropdown: Status leada (колонка V = 22)
  const leadStatusCol = sheet.getRange(2, 22, 1000, 1);
  const leadValidation = SpreadsheetApp.newDataValidation()
    .requireValueInList(LEAD_STATUSES, true)
    .setAllowInvalid(false)
    .build();
  leadStatusCol.setDataValidation(leadValidation);

  // Dropdown: Status menedżera (колонка W = 23)
  const managerStatusCol = sheet.getRange(2, 23, 1000, 1);
  const managerValidation = SpreadsheetApp.newDataValidation()
    .requireValueInList(MANAGER_STATUSES, true)
    .setAllowInvalid(false)
    .build();
  managerStatusCol.setDataValidation(managerValidation);

  // Условное форматирование — цвет строки по статусу лида
  const dataRange = sheet.getRange(2, 1, 1000, HEADERS.length);

  const rules = [];

  // 🔥 Горячий — светло-красный
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied('=$V2="🔥 Gorący"')
    .setBackground('#fde8e8')
    .setRanges([dataRange])
    .build());

  // 🌡️ Тёплый — светло-жёлтый
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied('=$V2="🌡️ Ciepły"')
    .setBackground('#fff9db')
    .setRanges([dataRange])
    .build());

  // 🧊 Холодный — светло-синий
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied('=$V2="🧊 Zimny"')
    .setBackground('#e8f0fe')
    .setRanges([dataRange])
    .build());

  // ✅ Клиент — светло-зелёный
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied('=$V2="✅ Klient"')
    .setBackground('#d9f2e4')
    .setRanges([dataRange])
    .build());

  // ❌ Отклонён — серый
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied('=$V2="❌ Odrzucony"')
    .setBackground('#f1f3f4')
    .setFontColor('#999999')
    .setRanges([dataRange])
    .build());

  // 🎉 Продано — жёлто-зелёный (менеджер)
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied('=$W2="🎉 Sprzedano"')
    .setBackground('#b7f7c8')
    .setRanges([dataRange])
    .build());

  sheet.setConditionalFormatRules(rules);

  // Числовой формат для колонки Nr
  sheet.getRange(2, 1, 1000, 1).setNumberFormat('0');

  // Защита заголовков (только просмотр)
  const headerProtection = headerRow.protect();
  headerProtection.setDescription('Заголовки — не редактировать');
  headerProtection.setWarningOnly(true);

  SpreadsheetApp.getUi().alert('✅ Таблица настроена! Заголовки, дропдауны и форматирование готовы.');
}

// ─── Web App: обработка GET (проверка живости) ───────────────────────────────
function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ ok: true, service: 'BID BIDDERS Leads', version: '1.0' })
  ).setMimeType(ContentService.MimeType.JSON);
}

// ─── Web App: обработка POST (запись лида) ───────────────────────────────────
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    appendLead(data);
    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// ─── Запись лида в таблицу ───────────────────────────────────────────────────
function appendLead(d) {
  const ss = SpreadsheetApp.openById('1f8DBxfJkGulr8hksPckxwE6aPtZijJXyTGeTbGLJF5c');
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  const now = new Date();
  const dateStr = Utilities.formatDate(now, 'Europe/Warsaw', 'dd.MM.yyyy');
  const timeStr = Utilities.formatDate(now, 'Europe/Warsaw', 'HH:mm');

  // Порядковый номер
  const lastRow = sheet.getLastRow();
  const nr = lastRow < 1 ? 1 : lastRow; // строка 1 — заголовки

  const row = [
    nr,                                          // Nr
    dateStr,                                     // Data
    timeStr,                                     // Godzina
    d.source || '—',                             // Źródło
    d.name || '—',                               // Imię
    d.phone || '—',                              // Telefon
    d.email || '—',                              // Email
    d.bodyType || '—',                           // Nadwozie
    d.yearRange || '—',                          // Rocznik (zakres)
    d.budgetRange || '—',                        // Budżet ($)
    d.make || '—',                               // Marka
    d.model || '—',                              // Model
    d.drive || '—',                              // Napęd
    d.fuel || '—',                               // Paliwo
    d.gearbox || '—',                            // Skrzynia
    d.color || '—',                              // Kolor
    d.damageType || '—',                         // Uszkodzenia
    d.steering || '—',                           // Kierownica
    d.company || '—',                            // Firma
    d.format || '—',                             // Format B2B
    d.comment || '—',                            // Komentarz
    '📥 Nowy',                                   // Status leada → domyślnie brak
    '📥 Nowy',                                   // Status menedżera → Nowy
    '',                                          // Notatki menedżera
  ];

  sheet.appendRow(row);

  // Стиль новой строки
  const newRow = sheet.getLastRow();
  const rowRange = sheet.getRange(newRow, 1, 1, HEADERS.length);
  rowRange.setVerticalAlignment('middle');
  rowRange.setFontSize(10);

  // Чередование цветов строк (до установки статуса)
  if (newRow % 2 === 0) {
    rowRange.setBackground('#f8f9fa');
  }

  // Перенос текста для колонок с комментарием и заметками
  sheet.getRange(newRow, 21, 1, 1).setWrap(true); // Komentarz
  sheet.getRange(newRow, 24, 1, 1).setWrap(true); // Notatki

  // Жирный шрифт для ключевых колонок
  sheet.getRange(newRow, 5, 1, 3).setFontWeight('bold'); // Imię, Telefon, Email
}
