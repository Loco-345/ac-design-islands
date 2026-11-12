/*
 * 五步島的所有內容都在這一個檔案。
 * 要改島名、角色、怪獸、欄位、過關條件，只改這裡，不用動 app.js。
 * 內容出自 I3840 115-1 W7 課程設計（五步流程、守門人、交接物、設計開發報告八章）。
 * 2026-11-12 改成冷氣設計主題：辦公室壁掛式冷氣、深夜加班的小安、冰藍與霧白。
 */
window.ISLE = {
  worldName: "冷氣設計群島",
  opening: "帶著你想讓冷氣變聰明的方法走過五座島，找到辦公室裡真正用它的人，也找到它該有的樣子。",
  missionTitle: "這一趟的任務：把公司的冷氣 AI 化設計出來",
  // 免費額度（2026-10-29 Kevin 帳號 AI Studio 額度頁）：3.6 Flash 每天 20 次、每分鐘 5 次，走不完一輪；
  // 3.5 Flash Lite 每天 500 次、每分鐘 15 次。額度是每個專案算，學生各用自己的金鑰
  model: "gemini-3.5-flash-lite",
  fallbackModel: "",

  // 主角的樣子：身體、帽子、背包的顏色（畫成低多邊形小人）
  players: [
    { id: "forest", name: "冷氣新秀", desc: "安全帽＋工具包", body: 0x3f7f9f, hat: "cap", hatColor: 0xf3eee2, pack: 0x7a5236, emoji: "❄️" },
    { id: "sunset", name: "節能技師", desc: "工作帽＋工具袋", body: 0x2f7a7c, hat: "dome", hatColor: 0x2b3a42, pack: 0x5d4330, emoji: "🔧" },
    { id: "deep", name: "風口觀察員", desc: "識別證＋筆記本", body: 0x3f6f9f, hat: "cap", hatColor: 0xe8eef5, emoji: "🌬️" },
    { id: "night", name: "夜班工程師", desc: "連帽外套", body: 0x4a5a8a, hat: "cone", hatColor: 0x1f2a4a, pack: 0x8a9bd6, emoji: "🌙" }
  ],

  levels: ["見習空調員", "體感提問者", "現場觀察家", "原型技師", "風向說服者", "冷氣嚮導", "冷氣設計大師"],

  islands: [
    {
      id: "ask",
      accent: "#4a9ec4",
      monsterColor: 0x8a63c9,
      keeperStyle: { body: 0xe8eef5, skirt: 0x2d3e5a, hair: "bun", hairColor: 0x2b2320, badge: 0x3f7fb8, glasses: true },
      no: 1,
      name: "去問島",
      color: "#bfe3f2",
      chapter: "一、使用者與處境",
      doing: "弄清楚辦公室裡真正用這台冷氣的人是誰、那個人在加班時遇到什麼困難。不是猜，是去問。",
      keeper: { name: "小安", title: "這台冷氣的使用者", face: "👩" },
      monster: { name: "想當然怪", face: "👻", habit: "把「我覺得」當成整間辦公室的心聲" },
      item: { icon: "📝", name: "訪談紀錄" },
      cards: [
        { id: "story", title: "一次具體的經歷" },
        { id: "workaround", title: "自己的變通辦法" },
        { id: "worry", title: "沒說出口的擔心" }
      ],
      fields: [
        { id: "assumed", label: "主管原本以為的", help: "從你身為主管在課堂上完成的那一份報告，把「我想清楚的判斷，還沒問過人」那一段複製貼過來", rows: 3 },
        { id: "story", label: "我問到的：小安那一次的經過", help: "哪一天、在哪裡、發生什麼事，越具體越好", rows: 4 },
        { id: "workaround", label: "我問到的：小安自己的變通辦法", help: "小安現在怎麼湊合著解決", rows: 3 },
        { id: "worry", label: "我問到的：小安沒說出口的擔心", help: "", rows: 3 },
        { id: "diff", label: "跟主管原本以為的不一樣的地方", help: "至少一處", rows: 3 }
      ],
      pass: [
        "寫出小安一次具體的經歷（有時間、地點或一件真的發生的事，不是「平常都會」）",
        "寫出小安自己的變通辦法",
        "至少一處明確寫出跟主管原本以為的不一樣"
      ]
    },
    {
      id: "define",
      accent: "#3f8fae",
      monsterColor: 0x9aa7b0,
      keeperStyle: { body: 0x3f6f8f, hat: "cap", hatColor: 0x1f3a4a },
      no: 2,
      name: "說清楚島",
      color: "#a8dbe8",
      chapter: "二、問題定義",
      doing: "把冷氣帶來的困難寫成一句話：誰，需要什麼，因為什麼。",
      keeper: { name: "阿追", title: "風向編輯", face: "🧐" },
      monster: { name: "模糊怪", face: "🌫️", habit: "每句話都說不清楚，風往哪裡吹也講不明白" },
      item: { icon: "🎯", name: "那一句問題" },
      fields: [
        { id: "sentence", label: "一句話：誰，需要什麼，因為什麼", help: "例如：辦公室裡常加班的人，需要＿＿，因為＿＿", rows: 3 },
        { id: "source", label: "這個「因為」來自去問島的哪一句", help: "把訪談紀錄裡那一句抄過來", rows: 2 }
      ],
      pass: [
        "有一個具體的人（不是「大家」「使用者」）",
        "有那個人需要的事（寫的是那個人需要的狀態，不是一個功能或產品）",
        "原因來自去問島問到的內容，不是主管自己想的"
      ]
    },
    {
      id: "ideate",
      accent: "#5b7fbf",
      monsterColor: 0x3f9a63,
      keeperStyle: { body: 0x6f7f8f, hat: "dome", hatColor: 0x2b3a42, pack: 0x4a5a62 },
      no: 3,
      name: "想辦法島",
      color: "#c7d8f2",
      chapter: "三、方案與取捨",
      doing: "先想很多種讓冷氣變聰明的方法，再挑一個。",
      keeper: { name: "匠叔", title: "空調技師", face: "🧔" },
      monster: { name: "單線怪", face: "🐍", habit: "眼裡只有第一個方案" },
      item: { icon: "🗺️", name: "方案草圖" },
      fields: [
        { id: "options", label: "想過的方案（至少三個，一行一個）", help: "要真的不一樣，不是同一個方案換顏色", rows: 5 },
        { id: "chosen", label: "選了哪一個、為什麼", help: "理由要對回說清楚島那一句問題", rows: 3 },
        { id: "dropped", label: "丟掉的為什麼丟", help: "", rows: 3 }
      ],
      pass: [
        "至少三個真的不一樣的方案",
        "選擇的理由對回那一句問題",
        "寫出丟掉其他方案的原因"
      ]
    },
    {
      id: "build",
      accent: "#4a8fa8",
      monsterColor: 0x3a4a5a,
      keeperStyle: { body: 0x6f7f8f, hat: "dome", hatColor: 0x2b3a42, pack: 0x4a5a62 },
      no: 4,
      name: "做出來島",
      color: "#b7dce6",
      chapter: "四、原型與 AI 的設計",
      doing: "說清楚你的冷氣原型：機身維持原本的樣子，只是裡面多了 AI。它怎麼用原本的燈號、聲音、按鍵讓人知道它在想什麼，猜錯了怎麼辦。",
      keeper: { name: "匠叔", title: "空調技師", face: "🧔" },
      monster: { name: "螢幕怪", face: "📺", habit: "以為多加一塊螢幕就是 AI" },
      item: { icon: "🧩", name: "原型" },
      fields: [
        { id: "how", label: "原型長什麼樣子", help: "這一輪不用真的做出來：說清楚冷氣原本的樣子，以及 AI 住進去之後多了什麼。想畫草圖或拍照也可以", rows: 3 },
        { id: "signal", label: "它怎麼讓人知道它在想什麼", help: "用這台冷氣原本就有的方式，例如 LED 溫度顯示、運轉燈、提示音、導風板、機身按鍵，不讓它變成不是原來的樣子", rows: 3 },
        { id: "correct", label: "使用者怎麼糾正它", help: "", rows: 2 },
        { id: "wrong", label: "它猜錯的時候怎麼辦", help: "", rows: 2 }
      ],
      pass: [
        "家電維持原本的樣子，沒有為了 AI 變成不是原來的樣子（原本沒有的螢幕不加，原本就有的面板可以用）",
        "AI 用家電原本就有的方式回應使用者",
        "寫出使用者怎麼糾正它，以及它猜錯時怎麼辦"
      ]
    },
    {
      id: "test",
      accent: "#3f7fb8",
      monsterColor: 0xd9b44a,
      keeperStyle: { body: 0x2f6f7a, hat: "cap", hatColor: 0xd9822b },
      no: 5,
      name: "給他用島",
      color: "#9cc7f0",
      chapter: "五、測試與發現",
      doing: "把冷氣原型交給小安試，不說明怎麼用，看小安卡在哪一刻。",
      keeper: { name: "阿看", title: "冷氣測試觀察員", face: "🕵️" },
      monster: { name: "說明書怪", face: "📜", habit: "小安一卡住就想塞說明書" },
      item: { icon: "🔍", name: "測試紀錄" },
      partner: { name: "小安", title: "來試你冷氣原型的人", face: "👩" },
      chatHint: "請小安做一件事，或說冷氣這時候做了什麼",
      cards: [
        { id: "first", title: "第一個動作" },
        { id: "stuck", title: "卡住的那一刻" },
        { id: "guess", title: "小安以為它在做什麼" }
      ],
      fields: [
        { id: "who", label: "你請小安做什麼", help: "一件小安平常會用這台冷氣做的事，例如加班時把辦公室調到舒服的溫度。不先說明原型怎麼用", rows: 3 },
        { id: "stuck", label: "小安卡在哪一刻", help: "那一刻冷氣做了什麼、小安做了什麼、說了什麼", rows: 3 },
        { id: "gap", label: "跟原本以為的差在哪", help: "", rows: 3 }
      ],
      pass: [
        "請小安做的是一件具體的事，而且沒有先說明原型怎麼用",
        "寫出小安卡住的那一刻",
        "寫出結果跟原本以為的落差"
      ]
    }
  ],

  center: {
    name: "回頭修改島",
    accent: "#2f6f8a",
    keeperStyle: { body: 0x4a5f6f, hat: "cone", hatColor: 0x2f6f8a },
    keeper: { name: "鐘塔", title: "調校塔的守塔人", face: "🗼" },
    doing: "五座島都過了，回來看自己寫的哪裡要改，再調校一次。",
    fields: [
      { id: "revise", label: "第六章　回頭修改：改了哪一章、為什麼", help: "", rows: 4 },
      { id: "meaning", label: "第七章　這代表什麼：這一輪代表什麼", help: "", rows: 4 }
    ]
  },

  reportTitle: "設計開發報告",
  chapter0: "〇、主管的決定"
};
