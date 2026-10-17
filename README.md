# 広島ロードサービス株式会社 HP（制作サンプル）— 正本フォルダ

最終更新：**2026-10-18**　社名確定＝広島ロードサービス株式会社（2026-10-09）
🔴 **期限＝2026年10月末**　📒 **変更の全履歴＝`00_制作記録_2026-10-02から10-18.md`（まずこれを読む）**
公開URL：**https://vigo4274g.github.io/minato-road-service-sample/**

---

## 何がどこにあるか

| 場所 | 中身 | 用途 |
|---|---|---|
| `index.html` ほか4本 | **本体5ページ**（index / road-service / company / recruit / contact） | ここを直す |
| `assets/css/common.css` | 全ページ共通（ヘッダー・フッター・SNSバナー・緊急帯・見出し・ボタン・表・フォーム） | オカモト実測値 |
| `assets/css/road.css` | ロードサービス本文だけ（`.rs` スコープ） | HOSHITAKA実測値 |
| `assets/js/main.js` | ハンバーガー・ページトップ・フォーム | |
| `assets/img/` | 写真36点＋地図SVG。出典＝`_出典.md`。**圧縮前の原本＝`_v1_不採用/img_orig_20261012/`** | 本番は客の写真に差し替え |
| `00_制作記録_2026-10-02から10-18.md` | **今の構成・変更の全履歴・技術メモ・残タスク** | ここから読む |
| `00_申し送り_いただきたい情報.md` | **客に聞く項目**・写真サイズ一覧・法律面のメモ | 次の打ち合わせで使う |
| `_build/*.py` | 5ページを生成するテンプレート | 共通パーツを直すときはここ |
| `_gh/` | GitHubリポジトリのクローン（**公開はここから**） | 更新→push で反映 |
| `_publish/` | Netlify用に作った配布フォルダ | Netlify復活時に使う |
| `_deploy/*.zip` | クライアント配布用zip | |
| `_v1_不採用/` | 最初に自分の設計で作った版（源斗さん判断で不採用） | 参照のみ |

## 更新のしかた

🔴 **本体HTMLを直接いじらない。`_build/*.py` を直して再生成する**（HTMLは生成物）

```bash
cd "/Users/apple/Documents/AIファイル/VIGO_レッカーHP"
# 1. _build/parts.py（共通）または _build/p_*.py（各ページ）を直す
python3 _build/p_index.py && python3 _build/p_road.py && python3 _build/p_rest.py && python3 _build/p_rest2.py
# 2. 公開に反映（GitHub Pagesは30〜90秒かかる）
cp index.html road-service.html company.html recruit.html contact.html _gh/
cp -R assets _gh/ && rm -f _gh/assets/img/_出典.md
cd _gh && git add -A && git commit -m "..." && git push
```

## 注意（本番前に必ず）

1. **写真に実在する他社の社名・ロゴ・電話番号が写っている** → 客の実写真に全部差し替え
   🔴 **メインビジュアルの写真は源斗さんからの支給。出所（AI生成か転載か）が未確認**
2. 電話番号は `082-000-0000` / `082-000-0001`（存在しない番号）。ヘッダーは0001の1本だけ。0000はまだ会社概要・お問い合わせ・フッターの5か所に残っている
3. 全ページ `noindex` ＋ `robots.txt` → 本番公開時に外す
4. 料金・実績・募集要項はすべてサンプル。**募集要項は求人票と食い違うと問題になる**
5. Netlifyはアカウントが「Restricted Team」で429。解除しないと使えない

## 参考URL（クライアント指定）

- https://www.okamoto-wrecker.com → 全ページのヘッダー/フッター/見出し/ボタンの型
- https://www.hiroshimashaken.com/hoshitaka-road-service/ → `road-service.html` の本文
