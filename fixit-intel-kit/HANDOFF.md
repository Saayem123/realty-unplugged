# Handoff — set up Fixit Intel Kit in `Intelligence-MCP-replica`

This bundle contains the complete **Fixit Competitive-Intelligence Kit**, already
configured with the provided API keys. It was prepared in a session scoped to a
different repo (`realty-unplugged`), which could not push here — so it's handed off
as a bundle.

## What's inside `fixit-intel-kit/`
- `scripts/` — 5 scrapers + `lib.py`
- `templates/dashboard_template.html` — the four-box dashboard
- `examples/` — a worked Creek Bay / Emaar build
- Docs: `README.md`, `CLAUDE.md`, `METHODOLOGY.md`, `CONTEXT_Extraction_Stack.md`
- `requirements.txt`, `config.example.json`, `.env.template`, `.gitignore`
- **`.env`** — filled with your Apify, YouTube, and Serper keys (seodata PENDING — see note in file)
- **`config.json`** — currently the example (Creek Bay / Emaar); edit per client before running

> `.gitignore` keeps `.env`, `config.json`, and `out/` OUT of git — secrets are never committed.

## Steps for the new (Intelligence-MCP-replica-scoped) session
1. Upload this zip, ask the agent to unpack `fixit-intel-kit/` into the repo root.
2. Create the working branch, e.g. `git checkout -b setup/fixit-intel-kit`.
3. `pip install -r fixit-intel-kit/requirements.txt`
4. Sanity check (no network needed):
   ```bash
   cd fixit-intel-kit && python3 -m py_compile scripts/*.py
   cd scripts && python3 -c "import lib; print(lib.cfg()['client'])"
   ```
5. Commit the **source** (the `.gitignore` will exclude `.env`/`config.json`/`out/`), then push.

## Two things that still need you
- **seodata.dev**: register at https://app.seodata.dev → `POST /v1/register {"email":"mohdsaayam123@gmail.com"}`
  → enter the 6-digit code mailed to you. Add the resulting session/key per the note in `.env`.
  (It could not be done automatically: email code + the data-API network policy.)
- **Network policy**: to actually *run* the scrapers, the new environment must allow outbound HTTPS to
  `api.apify.com`, `www.googleapis.com`, `google.serper.dev`, and `app.seodata.dev`. Otherwise the kit
  is installed and configured but the live scrape will 403.

## Then run (per README / CLAUDE.md)
```
python scripts/01_youtube.py        # free
python scripts/02_press_cpc.py      # free
python scripts/03_apify.py          # ~$1  → READ out/meta_ads.json, inspect top_pages
python scripts/04_verify.py         # contamination pass
python scripts/05_build_explorer.py # → out/ex_array.js
```
Then build the dashboard following `CLAUDE.md`.
