import { useState, useEffect, useMemo } from 'react';

// --- Icons (Inline SVG Components) ---
// Vite環境ではlucide-reactをnpm installしてimportすることもできますが、
// 安定動作のためにインラインSVGを使用しています。
const IconBase = ({ children, className = "" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        viewBox="0 0 24 24"
        fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className={className}
    >
        {children}
    </svg>
);

const Search = (props) => <IconBase {...props}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></IconBase>;
const Disc = (props) => <IconBase {...props}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /></IconBase>;
const Film = (props) => <IconBase {...props}><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="7" x2="7" y1="3" y2="21" /><line x1="17" x2="17" y1="3" y2="21" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="7" y1="7" y2="7" /><line x1="3" x2="7" y1="17" y2="17" /><line x1="17" x2="21" y1="17" y2="17" /><line x1="17" x2="21" y1="7" y2="7" /></IconBase>;
const Library = (props) => <IconBase {...props}><path d="m16 6 4 14" /><path d="M12 6v14" /><path d="M8 8v12" /><path d="M4 4v16" /></IconBase>;
const Loader2 = (props) => <IconBase {...props}><path d="M21 12a9 9 0 1 1-6.219-8.56" /></IconBase>;
const X = (props) => <IconBase {...props}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></IconBase>;
const Settings = (props) => <IconBase {...props}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></IconBase>;
const RefreshCw = (props) => <IconBase {...props}><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></IconBase>;
const FileSpreadsheet = (props) => <IconBase {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M8 13h2" /><path d="M8 17h2" /><path d="M14 13h2" /><path d="M14 17h2" /></IconBase>;
const Key = (props) => <IconBase {...props}><circle cx="7.5" cy="15.5" r="5.5" /><path d="m21 2-9.6 9.6" /><path d="m15.5 7.5 3 3L22 7l-3-3" /></IconBase>;
const ImageDown = (props) => <IconBase {...props}><path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" /><path d="m14 19.5 3-3 3 3" /><path d="M17 22v-5.5" /><circle cx="9" cy="9" r="2" /></IconBase>;
const List = (props) => <IconBase {...props}><line x1="8" x2="21" y1="6" y2="6" /><line x1="8" x2="21" y1="12" y2="12" /><line x1="8" x2="21" y1="18" y2="18" /><line x1="3" x2="3.01" y1="6" y2="6" /><line x1="3" x2="3.01" y1="12" y2="12" /><line x1="3" x2="3.01" y1="18" y2="18" /></IconBase>;
const LayoutGrid = (props) => <IconBase {...props}><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></IconBase>;
const Filter = (props) => <IconBase {...props}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></IconBase>;
const Trash2 = (props) => <IconBase {...props}><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></IconBase>;
const Plus = (props) => <IconBase {...props}><path d="M5 12h14" /><path d="M12 5v14" /></IconBase>;


// デフォルトのCSV読み込み先
const DEFAULT_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1Oss-Q_33fVz6dYpX8J6JlNIM9l2JCiUIEaHOoEY2AQ-YjhyJR61VNd-Gp9Fu3LVOjotOcAFfLd8b/pub?output=csv";

// 初期データ（サンプル）
const INITIAL_DATA = [
    {
        uid: "init-001",
        id: "D-001",
        title: "Inception",
        titleJp: "インセプション",
        year: "2010",
        poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
        genre: "Sci-Fi",
        note: "初回限定版",
        source: "sample"
    }
];

// CSVパース（引用符対応）
const parseCSV = (text) => {
    const rows = [];
    let currentRow = [];
    let currentCell = '';
    let insideQuotes = false;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const nextChar = text[i + 1];

        if (char === '"') {
            if (insideQuotes && nextChar === '"') {
                currentCell += '"';
                i++;
            } else {
                insideQuotes = !insideQuotes;
            }
        } else if (char === ',' && !insideQuotes) {
            currentRow.push(currentCell.trim());
            currentCell = '';
        } else if ((char === '\r' || char === '\n') && !insideQuotes) {
            if (char === '\r' && nextChar === '\n') i++;
            if (currentCell || currentRow.length > 0) {
                currentRow.push(currentCell.trim());
                rows.push(currentRow);
            }
            currentRow = [];
            currentCell = '';
        } else {
            currentCell += char;
        }
    }
    if (currentCell || currentRow.length > 0) {
        currentRow.push(currentCell.trim());
        rows.push(currentRow);
    }
    return rows;
};

const App = () => {
    // Main Data
    const [collection, setCollection] = useState(INITIAL_DATA);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("All");

    // UI States
    // Default to 'list' view as requested
    const [viewMode, setViewMode] = useState('list');
    const [settingsModalOpen, setSettingsModalOpen] = useState(false);

    // Settings / API Keys
    const [tmdbApiKey, setTmdbApiKey] = useState(import.meta.env.VITE_TMDB_API_KEY || "");
    const [csvUrl, setCsvUrl] = useState(DEFAULT_CSV_URL);

    // Status
    const [isLoadingCsv, setIsLoadingCsv] = useState(false);
    const [statusMsg, setStatusMsg] = useState("");
    const [syncProgress, setSyncProgress] = useState(0); // 0-100 for batch sync

    // 初期化: LocalStorage読み込み
    useEffect(() => {
        const savedCsvUrl = localStorage.getItem("movie_manager_csv_url");
        const savedTmdbKey = localStorage.getItem("movie_manager_tmdb_key");

        // 環境変数がある場合、かつLocalStorageに保存されていない場合は環境変数を使用
        // LocalStorageに保存されている場合はそちら（ユーザー設定）を優先する
        if (savedTmdbKey) {
            setTmdbApiKey(savedTmdbKey);
        } else if (import.meta.env.VITE_TMDB_API_KEY) {
            setTmdbApiKey(import.meta.env.VITE_TMDB_API_KEY);
        }

        if (savedCsvUrl) {
            setCsvUrl(savedCsvUrl);
            loadCsvData(savedCsvUrl);
        } else {
            loadCsvData(DEFAULT_CSV_URL);
        }
    }, []);

    // 設定保存
    const saveSettings = () => {
        localStorage.setItem("movie_manager_tmdb_key", tmdbApiKey);
        if (csvUrl) {
            localStorage.setItem("movie_manager_csv_url", csvUrl);
            loadCsvData(csvUrl);
        } else {
            setSettingsModalOpen(false);
        }
    };

    // ジャンル一覧の動的生成
    const genres = useMemo(() => {
        const genreSet = new Set(collection.map(m => m.genre).filter(g => g && g.trim() !== ""));
        return ["All", ...Array.from(genreSet).sort()];
    }, [collection]);

    // フィルタリングロジック（ジャンル対応）
    const filteredCollection = useMemo(() => {
        let filtered = collection;

        // Genre Filter
        if (selectedGenre !== "All") {
            filtered = filtered.filter(movie => movie.genre === selectedGenre);
        }

        // Search Query
        if (searchQuery) {
            const lowerQuery = searchQuery.toLowerCase().replace(/\s+/g, '');
            filtered = filtered.filter(movie => {
                const targetText = `${movie.title}${movie.titleJp || ''}${movie.year}${movie.genre}${movie.note || ''}${movie.id}`.toLowerCase().replace(/\s+/g, '');
                return targetText.includes(lowerQuery);
            });
        }
        return filtered;
    }, [collection, searchQuery, selectedGenre]);

    // CSV読み込み
    const loadCsvData = async (url) => {
        if (!url) return;
        setIsLoadingCsv(true);
        setStatusMsg("CSV読み込み中...");

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("CSV取得失敗");
            const text = await response.text();
            const rows = parseCSV(text);

            if (rows.length < 2) throw new Error("データなし");

            // ヘッダー解析 (小文字化して比較)
            const header = rows[0].map(h => h.toLowerCase().trim());

            // 列マッピング (指定された列名を優先検索)
            const getIdx = (keywords) => header.findIndex(h => keywords.some(k => h === k || h.includes(k)));

            const idIdx = getIdx(['disk_id', 'id', 'no']);
            const titleIdx = getIdx(['title', 'タイトル']);
            const yearIdx = getIdx(['year', '年', '公開年']);
            const genreIdx = getIdx(['genre', 'ジャンル']);
            const noteIdx = getIdx(['note', '備考', 'メモ']);
            const posterIdx = getIdx(['poster', 'image', '画像']);

            const newCollection = rows.slice(1).map((row, index) => {
                if (!row[titleIdx] && titleIdx !== -1) return null;

                const id = (idIdx !== -1 && row[idIdx]) ? row[idIdx] : `csv-${index}`;
                const uniqueId = `row-${index}`;

                return {
                    uid: uniqueId,
                    id: id,
                    title: titleIdx !== -1 ? row[titleIdx] : (row[0] || "No Title"),
                    titleJp: "",
                    year: yearIdx !== -1 ? row[yearIdx] : "",
                    genre: genreIdx !== -1 ? row[genreIdx] : "",
                    note: noteIdx !== -1 ? row[noteIdx] : "",
                    poster: (posterIdx !== -1 && row[posterIdx]) ? row[posterIdx] : "",
                    source: 'csv'
                };
            }).filter(Boolean);

            setCollection(newCollection);
            setStatusMsg(`CSV完了: ${newCollection.length}件`);
            setTimeout(() => setStatusMsg(""), 3000);
            setSettingsModalOpen(false);

        } catch (err) {
            console.error(err);
            setStatusMsg(`エラー: ${err.message}`);
        } finally {
            setIsLoadingCsv(false);
        }
    };

    // TMDb / iTunes API Search Logic
    const searchApi = async (query, year = null) => {
        if (tmdbApiKey) {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${tmdbApiKey}&query=${encodeURIComponent(query)}&language=ja-JP${year ? `&primary_release_year=${year}` : ''}`;
            const res = await fetch(url);
            const data = await res.json();
            return data.results || [];
        } else {
            const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=movie&entity=movie&country=JP&limit=5`;
            const res = await fetch(url);
            const data = await res.json();
            return data.results || [];
        }
    };

    const syncMetadata = async () => {
        if (syncProgress > 0) return;
        if (!window.confirm(`リスト内の${collection.length}件について、画像を再取得しますか？\n(TMDb APIキー: ${tmdbApiKey ? "設定済" : "未設定 - iTunes使用"})`)) return;

        let processed = 0;
        setSyncProgress(0.1);

        const newCollection = [...collection];

        for (let i = 0; i < newCollection.length; i++) {
            const item = newCollection[i];
            if (!item.poster || item.poster === "") {
                try {
                    const results = await searchApi(item.title, item.year);
                    if (results && results.length > 0) {
                        const best = results[0];
                        const updatedItem = { ...item }; // Shallow copy
                        if (tmdbApiKey) {
                            updatedItem.poster = best.poster_path ? `https://image.tmdb.org/t/p/w500${best.poster_path}` : "";
                            updatedItem.titleJp = best.title;
                            if (!updatedItem.year) updatedItem.year = best.release_date ? best.release_date.split('-')[0] : "";
                            if (!updatedItem.genre) updatedItem.genre = "TMDb Match";
                        } else {
                            updatedItem.poster = best.artworkUrl100.replace('100x100', '600x600');
                            updatedItem.titleJp = best.trackName;
                        }
                        newCollection[i] = updatedItem;
                    }
                } catch (e) {
                    console.error("Fetch failed for", item.title);
                }
                await new Promise(r => setTimeout(r, tmdbApiKey ? 250 : 500));
            }
            processed++;
            setSyncProgress(Math.round((processed / newCollection.length) * 100));
            setCollection([...newCollection]);
        }

        setSyncProgress(0);
        setStatusMsg("画像同期が完了しました");
        setTimeout(() => setStatusMsg(""), 3000);
    };

    return (
        <div className="min-h-screen pb-20 bg-slate-900 text-slate-100 font-sans">
            {/* Header */}
            <header className="sticky top-0 z-20 glass-panel border-b border-white/10 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-indigo-600 p-2 rounded-lg shadow-lg shadow-indigo-500/20">
                                <Disc className="text-white w-6 h-6" />
                            </div>
                            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-200 to-white bg-clip-text text-transparent">
                                Disc Manager
                            </h1>
                        </div>
                        {/* Mobile Settings Button */}
                        <button onClick={() => setSettingsModalOpen(true)} className="sm:hidden p-2 text-slate-400">
                            <Settings className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Search & Filter Section */}
                    <div className="relative flex-1 w-full max-w-2xl flex flex-col sm:flex-row gap-2">
                        {/* Genre Select */}
                        <div className="relative min-w-[140px]">
                            <select
                                value={selectedGenre}
                                onChange={(e) => setSelectedGenre(e.target.value)}
                                className="w-full appearance-none bg-slate-800/50 border border-slate-700 rounded-full py-2 pl-4 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white cursor-pointer hover:bg-slate-800 transition-colors"
                            >
                                <option value="All">すべてのジャンル</option>
                                {genres.filter(g => g !== "All").map(g => (
                                    <option key={g} value={g}>{g}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                                <Filter className="w-3 h-3 fill-current" />
                            </div>
                        </div>

                        {/* Search Input */}
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="ID, タイトル, 年, 備考..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-slate-500 transition-all"
                            />
                        </div>

                        {/* View Toggle */}
                        <div className="flex bg-slate-800 rounded-full p-1 border border-slate-700 items-center shrink-0 w-fit self-end sm:self-auto">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-full transition-all ${viewMode === 'grid' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                                title="グリッド表示"
                            >
                                <LayoutGrid className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-full transition-all ${viewMode === 'list' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                                title="リスト表示"
                            >
                                <List className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* PC Settings Button (No Add Button) */}
                    <div className="hidden sm:flex items-center gap-2">
                        <button
                            onClick={() => setSettingsModalOpen(true)}
                            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-all"
                            title="設定・CSV・API"
                        >
                            <Settings className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Progress Bar */}
                {syncProgress > 0 && (
                    <div className="h-1 w-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-green-500 transition-all duration-300" style={{ width: `${syncProgress}%` }} />
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-8">

                <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
                    <div className="flex items-center gap-4">
                        <h2 className="text-lg font-semibold text-slate-300 flex items-center gap-2">
                            <Library className="w-5 h-5" />
                            ライブラリ
                            <span className="bg-slate-800 text-slate-400 text-xs px-2 py-1 rounded-full">
                                {filteredCollection.length}
                            </span>
                        </h2>
                        {/* Image Sync Button (Visible if items exist) */}
                        {collection.length > 0 && (
                            <button
                                onClick={syncMetadata}
                                disabled={syncProgress > 0}
                                className="text-xs flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-indigo-400 px-3 py-1.5 rounded border border-slate-700 transition-colors"
                                title="タイトルと年を元にポスター画像を自動検索します"
                            >
                                {syncProgress > 0 ? <Loader2 className="w-3 h-3 animate-spin" /> : <ImageDown className="w-3 h-3" />}
                                {syncProgress > 0 ? `${syncProgress}%` : "画像を取得"}
                            </button>
                        )}
                    </div>

                    {statusMsg && (
                        <div className={`text-xs px-3 py-1 rounded animate-fade-in ${statusMsg.includes('エラー') ? 'bg-red-900/50 text-red-200' : 'bg-green-900/50 text-green-200'}`}>
                            {statusMsg}
                        </div>
                    )}
                </div>

                {filteredCollection.length === 0 ? (
                    <div className="text-center py-20 text-slate-500">
                        <Film className="w-16 h-16 mx-auto mb-4 opacity-20" />
                        <p>コレクションが空です。</p>
                        <button onClick={() => setSettingsModalOpen(true)} className="text-indigo-400 hover:underline mt-2 text-sm">
                            CSV設定を開く
                        </button>
                    </div>
                ) : (
                    <>
                        {viewMode === 'grid' ? (
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 animate-fade-in">
                                {filteredCollection.map((movie) => (
                                    <div key={movie.uid} className="group relative bg-slate-800 rounded-lg overflow-hidden shadow-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1">

                                        {/* Badges */}
                                        <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
                                            {movie.id && !movie.id.startsWith('add-') && !movie.id.startsWith('csv-') && (
                                                <span className="bg-black/60 backdrop-blur text-[10px] font-mono font-bold px-1.5 py-0.5 rounded text-slate-300 border border-white/10">
                                                    {movie.id}
                                                </span>
                                            )}
                                        </div>

                                        <div className="aspect-[2/3] overflow-hidden bg-slate-900 relative">
                                            {movie.poster ? (
                                                <img
                                                    src={movie.poster}
                                                    alt={movie.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 poster-glow"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.nextSibling.style.display = 'flex'; // Show placeholder
                                                    }}
                                                />
                                            ) : null}

                                            {/* Placeholder if no image */}
                                            <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 text-slate-600 p-2 text-center" style={{ display: movie.poster ? 'none' : 'flex' }}>
                                                <Film className="w-8 h-8 mb-2 opacity-50" />
                                                <span className="text-xs line-clamp-2">{movie.title}</span>
                                            </div>

                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>

                                        <div className="p-3">
                                            <h3 className="font-bold text-sm leading-tight text-white mb-1 line-clamp-1" title={movie.titleJp || movie.title}>
                                                {movie.titleJp || movie.title}
                                            </h3>
                                            <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
                                                <span>{movie.year}</span>
                                                <span className="truncate max-w-[60%] text-right">{movie.genre}</span>
                                            </div>
                                            {movie.note && (
                                                <div className="text-[10px] text-indigo-300 bg-indigo-900/20 px-1.5 py-0.5 rounded truncate border border-indigo-500/20">
                                                    {movie.note}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="w-full overflow-hidden rounded-lg border border-slate-700/50 shadow-xl bg-slate-800/20 animate-fade-in">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm text-slate-400">
                                        <thead className="bg-slate-800 text-slate-200 uppercase font-bold text-xs border-b border-slate-700">
                                            <tr>
                                                <th className="px-4 py-3 w-16 text-center">画像</th>
                                                <th className="px-4 py-3 min-w-[80px]">ID</th>
                                                <th className="px-4 py-3 min-w-[200px]">タイトル</th>
                                                <th className="px-4 py-3 text-center">年</th>
                                                <th className="px-4 py-3 hidden sm:table-cell">ジャンル</th>
                                                <th className="px-4 py-3 hidden md:table-cell">備考</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-700/50 bg-slate-900/50">
                                            {filteredCollection.map((movie) => (
                                                <tr key={movie.uid} className="hover:bg-slate-800/50 transition-colors group">
                                                    <td className="px-4 py-2 text-center">
                                                        <div className="w-10 h-14 bg-slate-800 rounded overflow-hidden relative border border-slate-700 mx-auto">
                                                            {movie.poster ? (
                                                                <img src={movie.poster} alt="" className="w-full h-full object-cover" onError={(e) => e.target.style.display = 'none'} />
                                                            ) : (
                                                                <div className="w-full h-full flex items-center justify-center"><Film className="w-4 h-4 text-slate-600" /></div>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-2 font-mono text-xs text-indigo-400 whitespace-nowrap">
                                                        {movie.id && !movie.id.startsWith('add-') && !movie.id.startsWith('csv-') ? movie.id : '-'}
                                                    </td>
                                                    <td className="px-4 py-2">
                                                        <div className="font-bold text-slate-200 text-sm">{movie.titleJp || movie.title}</div>
                                                        {movie.titleJp && movie.title !== movie.titleJp && (
                                                            <div className="text-xs text-slate-500 line-clamp-1">{movie.title}</div>
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-2 text-center whitespace-nowrap">{movie.year}</td>
                                                    <td className="px-4 py-2 hidden sm:table-cell whitespace-nowrap">{movie.genre}</td>
                                                    <td className="px-4 py-2 hidden md:table-cell text-xs">{movie.note}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </main>

            {/* Settings Modal */}
            {settingsModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSettingsModalOpen(false)}></div>
                    <div className="relative bg-slate-900 w-full max-w-lg rounded-xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] overflow-y-auto">
                        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900 sticky top-0">
                            <h3 className="text-lg font-bold flex items-center gap-2">
                                <Settings className="w-5 h-5 text-indigo-500" />
                                設定
                            </h3>
                            <button onClick={() => setSettingsModalOpen(false)}><X className="w-5 h-5 text-slate-400" /></button>
                        </div>
                        <div className="p-6 space-y-6">

                            {/* CSV Section */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-slate-200 font-semibold border-b border-slate-800 pb-2">
                                    <FileSpreadsheet className="w-4 h-4 text-green-500" />
                                    Google Sheets (CSV)
                                </div>
                                <p className="text-xs text-slate-400">
                                    「ファイル &gt; 共有 &gt; ウェブに公開 &gt; CSV」のURLを入力。
                                </p>
                                <input
                                    type="text"
                                    value={csvUrl}
                                    onChange={(e) => setCsvUrl(e.target.value)}
                                    placeholder="https://docs.google.com/.../pub?output=csv"
                                    className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-sm text-white focus:border-green-500 focus:outline-none"
                                />
                                <div className="bg-slate-800/50 p-3 rounded border border-slate-700 text-xs text-slate-400 font-mono">
                                    disk_id, title, year, genre, note
                                </div>
                            </div>

                            {/* TMDb Section */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-slate-200 font-semibold border-b border-slate-800 pb-2">
                                    <Key className="w-4 h-4 text-yellow-500" />
                                    TMDb API Key
                                </div>
                                <p className="text-xs text-slate-400">
                                    The Movie DatabaseのAPIキー（v3 auth）を入力すると、画像取得の精度が向上します。
                                    <br />未入力の場合はiTunes API（予備）が使用されます。
                                </p>
                                <input
                                    type="password"
                                    value={tmdbApiKey}
                                    onChange={(e) => setTmdbApiKey(e.target.value)}
                                    placeholder="Example: a1b2c3d4e5..."
                                    className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-sm text-white focus:border-yellow-500 focus:outline-none tracking-widest"
                                />
                            </div>

                            <button
                                onClick={saveSettings}
                                disabled={isLoadingCsv}
                                className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white py-3 rounded font-bold text-sm flex items-center justify-center gap-2 transition-colors mt-4"
                            >
                                {isLoadingCsv ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
                                設定を保存して読み込む
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;