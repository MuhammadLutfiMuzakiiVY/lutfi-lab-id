import { createContext, useContext, useState, useEffect } from 'react'

// Available languages with country flags
export const LANGUAGES = [
    { code: 'id', name: 'Indonesia', flag: '🇮🇩', native: 'Bahasa Indonesia' },
    { code: 'en', name: 'English', flag: '🇺🇸', native: 'English' },
    { code: 'zh', name: 'Chinese', flag: '🇨🇳', native: '中文' },
    { code: 'ja', name: 'Japanese', flag: '🇯🇵', native: '日本語' },
    { code: 'ko', name: 'Korean', flag: '🇰🇷', native: '한국어' },
    { code: 'ar', name: 'Arabic', flag: '🇸🇦', native: 'العربية' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳', native: 'हिन्दी' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸', native: 'Español' },
    { code: 'fr', name: 'French', flag: '🇫🇷', native: 'Français' },
    { code: 'de', name: 'German', flag: '🇩🇪', native: 'Deutsch' },
    { code: 'pt', name: 'Portuguese', flag: '🇧🇷', native: 'Português' },
    { code: 'ru', name: 'Russian', flag: '🇷🇺', native: 'Русский' },
    { code: 'it', name: 'Italian', flag: '🇮🇹', native: 'Italiano' },
    { code: 'nl', name: 'Dutch', flag: '🇳🇱', native: 'Nederlands' },
    { code: 'th', name: 'Thai', flag: '🇹🇭', native: 'ไทย' },
    { code: 'vi', name: 'Vietnamese', flag: '🇻🇳', native: 'Tiếng Việt' },
    { code: 'ms', name: 'Malay', flag: '🇲🇾', native: 'Bahasa Melayu' },
    { code: 'tr', name: 'Turkish', flag: '🇹🇷', native: 'Türkçe' },
    { code: 'pl', name: 'Polish', flag: '🇵🇱', native: 'Polski' },
    { code: 'uk', name: 'Ukrainian', flag: '🇺🇦', native: 'Українська' }
]

// Translations
const translations = {
    id: {
        // Dashboard
        dashboard: 'Dashboard',
        overview: 'Ikhtisar',
        taskManager: 'Manajer Tugas',
        pomodoro: 'Pomodoro',
        analytics: 'Analitik',
        activityLogs: 'Log Aktivitas',
        weather: 'Cuaca',
        miniTools: 'Mini Tools',
        linkManager: 'Manajer Link',
        archive: 'Arsip',
        chessGame: 'Permainan Catur',
        ticTacToe: 'Tic-Tac-Toe',
        memoryGame: 'Permainan Memori',
        snakeGame: 'Permainan Ular',
        hackerTerminal: 'Terminal Hacker',
        supportCenter: 'Pusat Bantuan',
        settings: 'Pengaturan',
        userManagement: 'Manajemen Pengguna',

        // Page Descriptions
        overviewDesc: 'Selamat datang di Dashboard Anda',
        taskManagerDesc: 'Kelola tugas dan proyek Anda',
        pomodoroDesc: 'Teknik fokus produktivitas 25/5 menit',
        analyticsDesc: 'Lihat statistik produktivitas dan performa Anda',
        activityLogsDesc: 'Riwayat aktivitas dan log sistem',
        weatherDesc: 'Cuaca real-time untuk kota Anda',
        miniToolsDesc: 'Berbagai alat mini yang berguna',
        linkManagerDesc: 'Kelola tautan dan bookmark Anda',
        archiveDesc: 'Arsip dan penyimpanan dokumen',
        chessGameDesc: 'Main catur melawan AI yang cerdas!',
        ticTacToeDesc: 'Game klasik X dan O - Main sendiri atau lawan AI!',
        memoryGameDesc: 'Cocokkan kartu dengan tema Cybersecurity & Hacking Tools!',
        snakeGameDesc: 'Game klasik - Makan makanan dan jangan tabrak diri sendiri!',
        hackerTerminalDesc: 'Simulasi terminal hacking - Free-Hack, Puzzle & Typing Challenge!',
        supportCenterDesc: 'Bantuan dan dukungan teknis',
        settingsDesc: 'Kelola semua preferensi dan konfigurasi akun Anda',
        userManagementDesc: 'Kelola semua pengguna platform',

        // Common
        welcome: 'Selamat Datang',
        logout: 'Keluar',
        search: 'Cari...',
        searchPlaceholder: 'Cari user, pengaturan, atau fitur...',
        save: 'Simpan',
        cancel: 'Batal',
        delete: 'Hapus',
        edit: 'Ubah',
        add: 'Tambah',
        create: 'Buat',
        close: 'Tutup',
        loading: 'Memuat...',
        online: 'Online',
        offline: 'Offline',

        // Time
        today: 'Hari ini',
        yesterday: 'Kemarin',
        tomorrow: 'Besok',

        // Stats
        activeProjects: 'Proyek Aktif',
        security: 'Keamanan',
        efficiency: 'Efisiensi',
        uptime: 'Waktu Aktif',

        // To-Do & Events
        todoToday: 'To-Do Hari Ini',
        remaining: 'tersisa',
        addNewTask: 'Tambah tugas baru...',
        eventSchedule: 'Jadwal Event',
        event: 'event',
        focusSummary: 'Ringkasan Fokus',
        nextEvent: 'EVENT BERIKUTNYA',
        meeting: 'Meeting',
        days: 'Hari',
        hours: 'Jam',
        minutes: 'Menit',
        seconds: 'Detik',

        // Settings
        language: 'Bahasa',
        theme: 'Tema',
        notifications: 'Notifikasi',
        account: 'Akun',

        // Games
        play: 'Main',
        pause: 'Jeda',
        restart: 'Mulai Ulang',
        score: 'Skor',
        highScore: 'Skor Tertinggi',

        // Pomodoro
        focus: 'Fokus',
        shortBreak: 'Istirahat Pendek',
        longBreak: 'Istirahat Panjang',
        sessions: 'Sesi',

        // Weather
        temperature: 'Suhu',
        humidity: 'Kelembaban',
        wind: 'Angin',
        forecast: 'Prakiraan'
    },
    en: {
        dashboard: 'Dashboard',
        overview: 'Overview',
        taskManager: 'Task Manager',
        pomodoro: 'Pomodoro',
        analytics: 'Analytics',
        activityLogs: 'Activity Logs',
        weather: 'Weather',
        miniTools: 'Mini Tools',
        linkManager: 'Link Manager',
        archive: 'Archive',
        chessGame: 'Chess Game',
        ticTacToe: 'Tic-Tac-Toe',
        memoryGame: 'Memory Game',
        snakeGame: 'Snake Game',
        hackerTerminal: 'Hacker Terminal',
        supportCenter: 'Support Center',
        settings: 'Settings',
        userManagement: 'User Management',

        // Page Descriptions
        overviewDesc: 'Welcome to your Dashboard',
        taskManagerDesc: 'Manage your tasks and projects',
        pomodoroDesc: 'Productivity focus technique 25/5 minutes',
        analyticsDesc: 'View your productivity statistics and performance',
        activityLogsDesc: 'Activity history and system logs',
        weatherDesc: 'Real-time weather for your city',
        miniToolsDesc: 'Various useful mini tools',
        linkManagerDesc: 'Manage your links and bookmarks',
        archiveDesc: 'Archive and document storage',
        chessGameDesc: 'Play chess against a smart AI!',
        ticTacToeDesc: 'Classic X and O game - Play solo or against AI!',
        memoryGameDesc: 'Match cards with Cybersecurity & Hacking Tools theme!',
        snakeGameDesc: 'Classic game - Eat food and don\'t hit yourself!',
        hackerTerminalDesc: 'Hacking terminal simulation - Free-Hack, Puzzle & Typing Challenge!',
        supportCenterDesc: 'Help and technical support',
        settingsDesc: 'Manage all your preferences and account settings',
        userManagementDesc: 'Manage all platform users',

        welcome: 'Welcome',
        logout: 'Logout',
        search: 'Search...',
        searchPlaceholder: 'Search users, settings, or features...',
        save: 'Save',
        cancel: 'Cancel',
        delete: 'Delete',
        edit: 'Edit',
        add: 'Add',
        create: 'Create',
        close: 'Close',
        loading: 'Loading...',
        online: 'Online',
        offline: 'Offline',

        today: 'Today',
        yesterday: 'Yesterday',
        tomorrow: 'Tomorrow',

        activeProjects: 'Active Projects',
        security: 'Security',
        efficiency: 'Efficiency',
        uptime: 'Uptime',

        // To-Do & Events
        todoToday: 'To-Do Today',
        remaining: 'remaining',
        addNewTask: 'Add new task...',
        eventSchedule: 'Event Schedule',
        event: 'event',
        focusSummary: 'Focus Summary',
        nextEvent: 'NEXT EVENT',
        meeting: 'Meeting',
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',

        language: 'Language',
        theme: 'Theme',
        notifications: 'Notifications',
        account: 'Account',

        play: 'Play',
        pause: 'Pause',
        restart: 'Restart',
        score: 'Score',
        highScore: 'High Score',

        focus: 'Focus',
        shortBreak: 'Short Break',
        longBreak: 'Long Break',
        sessions: 'Sessions',

        temperature: 'Temperature',
        humidity: 'Humidity',
        wind: 'Wind',
        forecast: 'Forecast'
    },
    zh: {
        dashboard: '仪表板',
        overview: '概览',
        taskManager: '任务管理',
        pomodoro: '番茄钟',
        analytics: '分析',
        activityLogs: '活动日志',
        weather: '天气',
        miniTools: '迷你工具',
        linkManager: '链接管理',
        archive: '档案',
        chessGame: '国际象棋',
        ticTacToe: '井字棋',
        memoryGame: '记忆游戏',
        snakeGame: '贪吃蛇',
        hackerTerminal: '黑客终端',
        supportCenter: '支持中心',
        settings: '设置',
        userManagement: '用户管理',

        welcome: '欢迎',
        logout: '登出',
        search: '搜索...',
        save: '保存',
        cancel: '取消',
        delete: '删除',
        edit: '编辑',
        add: '添加',
        create: '创建',
        close: '关闭',
        loading: '加载中...',

        today: '今天',
        yesterday: '昨天',
        tomorrow: '明天',

        activeProjects: '活跃项目',
        security: '安全',
        efficiency: '效率',
        uptime: '运行时间',

        language: '语言',
        theme: '主题',
        notifications: '通知',
        account: '账户',

        play: '播放',
        pause: '暂停',
        restart: '重新开始',
        score: '分数',
        highScore: '最高分',

        focus: '专注',
        shortBreak: '短休息',
        longBreak: '长休息',
        sessions: '会话',

        temperature: '温度',
        humidity: '湿度',
        wind: '风',
        forecast: '预报'
    },
    ja: {
        dashboard: 'ダッシュボード',
        overview: '概要',
        taskManager: 'タスク管理',
        pomodoro: 'ポモドーロ',
        analytics: '分析',
        activityLogs: 'アクティビティログ',
        weather: '天気',
        miniTools: 'ミニツール',
        linkManager: 'リンク管理',
        archive: 'アーカイブ',
        chessGame: 'チェス',
        ticTacToe: '三目並べ',
        memoryGame: '神経衰弱',
        snakeGame: 'スネークゲーム',
        hackerTerminal: 'ハッカーターミナル',
        supportCenter: 'サポートセンター',
        settings: '設定',
        userManagement: 'ユーザー管理',

        welcome: 'ようこそ',
        logout: 'ログアウト',
        search: '検索...',
        save: '保存',
        cancel: 'キャンセル',
        delete: '削除',
        edit: '編集',
        add: '追加',
        create: '作成',
        close: '閉じる',
        loading: '読み込み中...',

        today: '今日',
        yesterday: '昨日',
        tomorrow: '明日',

        activeProjects: 'アクティブプロジェクト',
        security: 'セキュリティ',
        efficiency: '効率',
        uptime: '稼働時間',

        language: '言語',
        theme: 'テーマ',
        notifications: '通知',
        account: 'アカウント',

        play: '再生',
        pause: '一時停止',
        restart: 'リスタート',
        score: 'スコア',
        highScore: 'ハイスコア',

        focus: '集中',
        shortBreak: '小休憩',
        longBreak: '長休憩',
        sessions: 'セッション',

        temperature: '気温',
        humidity: '湿度',
        wind: '風',
        forecast: '予報'
    },
    ko: {
        dashboard: '대시보드',
        overview: '개요',
        taskManager: '작업 관리',
        pomodoro: '포모도로',
        analytics: '분석',
        activityLogs: '활동 로그',
        weather: '날씨',
        miniTools: '미니 도구',
        linkManager: '링크 관리',
        archive: '보관함',
        chessGame: '체스',
        ticTacToe: '틱택토',
        memoryGame: '메모리 게임',
        snakeGame: '스네이크 게임',
        hackerTerminal: '해커 터미널',
        supportCenter: '지원 센터',
        settings: '설정',
        userManagement: '사용자 관리',

        welcome: '환영합니다',
        logout: '로그아웃',
        search: '검색...',
        save: '저장',
        cancel: '취소',
        delete: '삭제',
        edit: '편집',
        add: '추가',
        create: '생성',
        close: '닫기',
        loading: '로딩 중...',

        today: '오늘',
        yesterday: '어제',
        tomorrow: '내일',

        activeProjects: '활성 프로젝트',
        security: '보안',
        efficiency: '효율',
        uptime: '가동 시간',

        language: '언어',
        theme: '테마',
        notifications: '알림',
        account: '계정',

        play: '재생',
        pause: '일시정지',
        restart: '다시 시작',
        score: '점수',
        highScore: '최고 점수',

        focus: '집중',
        shortBreak: '짧은 휴식',
        longBreak: '긴 휴식',
        sessions: '세션',

        temperature: '온도',
        humidity: '습도',
        wind: '바람',
        forecast: '예보'
    },
    ar: {
        dashboard: 'لوحة التحكم',
        overview: 'نظرة عامة',
        taskManager: 'إدارة المهام',
        pomodoro: 'بومودورو',
        analytics: 'التحليلات',
        activityLogs: 'سجل النشاط',
        weather: 'الطقس',
        miniTools: 'أدوات صغيرة',
        linkManager: 'إدارة الروابط',
        archive: 'الأرشيف',
        chessGame: 'الشطرنج',
        ticTacToe: 'إكس أو',
        memoryGame: 'لعبة الذاكرة',
        snakeGame: 'لعبة الثعبان',
        hackerTerminal: 'طرفية القراصنة',
        supportCenter: 'مركز الدعم',
        settings: 'الإعدادات',
        userManagement: 'إدارة المستخدمين',

        welcome: 'مرحباً',
        logout: 'تسجيل الخروج',
        search: 'بحث...',
        save: 'حفظ',
        cancel: 'إلغاء',
        delete: 'حذف',
        edit: 'تعديل',
        add: 'إضافة',
        create: 'إنشاء',
        close: 'إغلاق',
        loading: 'جار التحميل...',

        today: 'اليوم',
        yesterday: 'أمس',
        tomorrow: 'غداً',

        activeProjects: 'المشاريع النشطة',
        security: 'الأمان',
        efficiency: 'الكفاءة',
        uptime: 'وقت التشغيل',

        language: 'اللغة',
        theme: 'السمة',
        notifications: 'الإشعارات',
        account: 'الحساب',

        play: 'تشغيل',
        pause: 'إيقاف مؤقت',
        restart: 'إعادة البدء',
        score: 'النتيجة',
        highScore: 'أعلى نتيجة',

        focus: 'تركيز',
        shortBreak: 'استراحة قصيرة',
        longBreak: 'استراحة طويلة',
        sessions: 'الجلسات',

        temperature: 'درجة الحرارة',
        humidity: 'الرطوبة',
        wind: 'الرياح',
        forecast: 'التوقعات'
    },
    es: {
        dashboard: 'Tablero',
        overview: 'Resumen',
        taskManager: 'Gestor de Tareas',
        pomodoro: 'Pomodoro',
        analytics: 'Analíticas',
        activityLogs: 'Registro de Actividad',
        weather: 'Clima',
        miniTools: 'Mini Herramientas',
        linkManager: 'Gestor de Enlaces',
        archive: 'Archivo',
        chessGame: 'Ajedrez',
        ticTacToe: 'Tres en Raya',
        memoryGame: 'Juego de Memoria',
        snakeGame: 'Serpiente',
        hackerTerminal: 'Terminal Hacker',
        supportCenter: 'Centro de Soporte',
        settings: 'Configuración',
        userManagement: 'Gestión de Usuarios',

        welcome: 'Bienvenido',
        logout: 'Cerrar Sesión',
        search: 'Buscar...',
        save: 'Guardar',
        cancel: 'Cancelar',
        delete: 'Eliminar',
        edit: 'Editar',
        add: 'Añadir',
        create: 'Crear',
        close: 'Cerrar',
        loading: 'Cargando...',

        today: 'Hoy',
        yesterday: 'Ayer',
        tomorrow: 'Mañana',

        activeProjects: 'Proyectos Activos',
        security: 'Seguridad',
        efficiency: 'Eficiencia',
        uptime: 'Tiempo Activo',

        language: 'Idioma',
        theme: 'Tema',
        notifications: 'Notificaciones',
        account: 'Cuenta',

        play: 'Jugar',
        pause: 'Pausar',
        restart: 'Reiniciar',
        score: 'Puntuación',
        highScore: 'Puntuación Máxima',

        focus: 'Enfoque',
        shortBreak: 'Descanso Corto',
        longBreak: 'Descanso Largo',
        sessions: 'Sesiones',

        temperature: 'Temperatura',
        humidity: 'Humedad',
        wind: 'Viento',
        forecast: 'Pronóstico'
    },
    fr: {
        dashboard: 'Tableau de bord',
        overview: 'Aperçu',
        taskManager: 'Gestionnaire de Tâches',
        pomodoro: 'Pomodoro',
        analytics: 'Analytiques',
        activityLogs: 'Journal d\'activité',
        weather: 'Météo',
        miniTools: 'Mini Outils',
        linkManager: 'Gestionnaire de Liens',
        archive: 'Archives',
        chessGame: 'Échecs',
        ticTacToe: 'Morpion',
        memoryGame: 'Jeu de Mémoire',
        snakeGame: 'Serpent',
        hackerTerminal: 'Terminal Hacker',
        supportCenter: 'Centre d\'aide',
        settings: 'Paramètres',
        userManagement: 'Gestion des Utilisateurs',

        welcome: 'Bienvenue',
        logout: 'Déconnexion',
        search: 'Rechercher...',
        save: 'Enregistrer',
        cancel: 'Annuler',
        delete: 'Supprimer',
        edit: 'Modifier',
        add: 'Ajouter',
        create: 'Créer',
        close: 'Fermer',
        loading: 'Chargement...',

        today: 'Aujourd\'hui',
        yesterday: 'Hier',
        tomorrow: 'Demain',

        activeProjects: 'Projets Actifs',
        security: 'Sécurité',
        efficiency: 'Efficacité',
        uptime: 'Temps de fonctionnement',

        language: 'Langue',
        theme: 'Thème',
        notifications: 'Notifications',
        account: 'Compte',

        play: 'Jouer',
        pause: 'Pause',
        restart: 'Redémarrer',
        score: 'Score',
        highScore: 'Meilleur Score',

        focus: 'Concentration',
        shortBreak: 'Pause Courte',
        longBreak: 'Pause Longue',
        sessions: 'Sessions',

        temperature: 'Température',
        humidity: 'Humidité',
        wind: 'Vent',
        forecast: 'Prévisions'
    },
    de: {
        dashboard: 'Dashboard',
        overview: 'Übersicht',
        taskManager: 'Aufgabenverwaltung',
        pomodoro: 'Pomodoro',
        analytics: 'Analysen',
        activityLogs: 'Aktivitätsprotokoll',
        weather: 'Wetter',
        miniTools: 'Mini-Tools',
        linkManager: 'Link-Verwaltung',
        archive: 'Archiv',
        chessGame: 'Schach',
        ticTacToe: 'Tic-Tac-Toe',
        memoryGame: 'Memory-Spiel',
        snakeGame: 'Snake',
        hackerTerminal: 'Hacker-Terminal',
        supportCenter: 'Support-Center',
        settings: 'Einstellungen',
        userManagement: 'Benutzerverwaltung',

        welcome: 'Willkommen',
        logout: 'Abmelden',
        search: 'Suchen...',
        save: 'Speichern',
        cancel: 'Abbrechen',
        delete: 'Löschen',
        edit: 'Bearbeiten',
        add: 'Hinzufügen',
        create: 'Erstellen',
        close: 'Schließen',
        loading: 'Lädt...',

        today: 'Heute',
        yesterday: 'Gestern',
        tomorrow: 'Morgen',

        activeProjects: 'Aktive Projekte',
        security: 'Sicherheit',
        efficiency: 'Effizienz',
        uptime: 'Betriebszeit',

        language: 'Sprache',
        theme: 'Thema',
        notifications: 'Benachrichtigungen',
        account: 'Konto',

        play: 'Spielen',
        pause: 'Pause',
        restart: 'Neustart',
        score: 'Punktzahl',
        highScore: 'Höchstpunktzahl',

        focus: 'Fokus',
        shortBreak: 'Kurze Pause',
        longBreak: 'Lange Pause',
        sessions: 'Sitzungen',

        temperature: 'Temperatur',
        humidity: 'Luftfeuchtigkeit',
        wind: 'Wind',
        forecast: 'Vorhersage'
    },
    pt: {
        dashboard: 'Painel',
        overview: 'Visão Geral',
        taskManager: 'Gerenciador de Tarefas',
        pomodoro: 'Pomodoro',
        analytics: 'Análises',
        activityLogs: 'Registro de Atividades',
        weather: 'Clima',
        miniTools: 'Mini Ferramentas',
        linkManager: 'Gerenciador de Links',
        archive: 'Arquivo',
        chessGame: 'Xadrez',
        ticTacToe: 'Jogo da Velha',
        memoryGame: 'Jogo da Memória',
        snakeGame: 'Cobrinha',
        hackerTerminal: 'Terminal Hacker',
        supportCenter: 'Central de Suporte',
        settings: 'Configurações',
        userManagement: 'Gerenciamento de Usuários',

        welcome: 'Bem-vindo',
        logout: 'Sair',
        search: 'Pesquisar...',
        save: 'Salvar',
        cancel: 'Cancelar',
        delete: 'Excluir',
        edit: 'Editar',
        add: 'Adicionar',
        create: 'Criar',
        close: 'Fechar',
        loading: 'Carregando...',

        today: 'Hoje',
        yesterday: 'Ontem',
        tomorrow: 'Amanhã',

        activeProjects: 'Projetos Ativos',
        security: 'Segurança',
        efficiency: 'Eficiência',
        uptime: 'Tempo de Atividade',

        language: 'Idioma',
        theme: 'Tema',
        notifications: 'Notificações',
        account: 'Conta',

        play: 'Jogar',
        pause: 'Pausar',
        restart: 'Reiniciar',
        score: 'Pontuação',
        highScore: 'Maior Pontuação',

        focus: 'Foco',
        shortBreak: 'Pausa Curta',
        longBreak: 'Pausa Longa',
        sessions: 'Sessões',

        temperature: 'Temperatura',
        humidity: 'Umidade',
        wind: 'Vento',
        forecast: 'Previsão'
    },
    ru: {
        dashboard: 'Панель',
        overview: 'Обзор',
        taskManager: 'Менеджер Задач',
        pomodoro: 'Помодоро',
        analytics: 'Аналитика',
        activityLogs: 'Журнал Активности',
        weather: 'Погода',
        miniTools: 'Мини Инструменты',
        linkManager: 'Менеджер Ссылок',
        archive: 'Архив',
        chessGame: 'Шахматы',
        ticTacToe: 'Крестики-нолики',
        memoryGame: 'Игра на Память',
        snakeGame: 'Змейка',
        hackerTerminal: 'Хакерский Терминал',
        supportCenter: 'Центр Поддержки',
        settings: 'Настройки',
        userManagement: 'Управление Пользователями',

        welcome: 'Добро пожаловать',
        logout: 'Выход',
        search: 'Поиск...',
        save: 'Сохранить',
        cancel: 'Отмена',
        delete: 'Удалить',
        edit: 'Редактировать',
        add: 'Добавить',
        create: 'Создать',
        close: 'Закрыть',
        loading: 'Загрузка...',

        today: 'Сегодня',
        yesterday: 'Вчера',
        tomorrow: 'Завтра',

        activeProjects: 'Активные Проекты',
        security: 'Безопасность',
        efficiency: 'Эффективность',
        uptime: 'Время Работы',

        language: 'Язык',
        theme: 'Тема',
        notifications: 'Уведомления',
        account: 'Аккаунт',

        play: 'Играть',
        pause: 'Пауза',
        restart: 'Перезапуск',
        score: 'Счёт',
        highScore: 'Рекорд',

        focus: 'Фокус',
        shortBreak: 'Короткий Перерыв',
        longBreak: 'Длинный Перерыв',
        sessions: 'Сессии',

        temperature: 'Температура',
        humidity: 'Влажность',
        wind: 'Ветер',
        forecast: 'Прогноз'
    }
}

// Add fallback for missing languages (use English)
LANGUAGES.forEach(lang => {
    if (!translations[lang.code]) {
        translations[lang.code] = translations.en
    }
})

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('lutfi-lab-language') || 'id'
    })

    useEffect(() => {
        localStorage.setItem('lutfi-lab-language', language)
        // Update HTML lang attribute
        document.documentElement.lang = language
        // Update text direction for RTL languages
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    }, [language])

    const t = (key) => {
        return translations[language]?.[key] || translations.en[key] || key
    }

    const currentLanguage = LANGUAGES.find(l => l.code === language) || LANGUAGES[0]

    return (
        <LanguageContext.Provider value={{
            language,
            setLanguage,
            t,
            currentLanguage,
            languages: LANGUAGES
        }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}

export default LanguageContext
