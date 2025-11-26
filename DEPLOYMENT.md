## Deployment Guide (Railway or VPS)

### 1) Environment variables (required)
Copy `.env.example` to `.env` and fill values in your deployment platform (do NOT commit secrets).

Required:
- APP_KEYS
- API_TOKEN_SALT
- ADMIN_JWT_SECRET
- TRANSFER_TOKEN_SALT
- ENCRYPTION_KEY
- DATABASE_* (PostgreSQL recommended)
- PUBLIC_URL
- CORS_ORIGIN
- SMTP_* and CONTACT_FORM_* (if you use the contact form)

---

### 2) Railway
Two options:
- Connect GitHub repo in Railway Dashboard and enable auto-deploys for branch `main` (recommended).
- Or use the included GitHub Action `.github/workflows/deploy-railway.yml`.

Set GitHub repository secrets:
- RAILWAY_TOKEN
- RAILWAY_PROJECT_ID
- RAILWAY_SERVICE_ID

Notes:
- The Dockerfile is included and will be used by Railway automatically.
- In Railway project variables, set all variables from `.env.example` (PostgreSQL can be provisioned by Railway; use its `DATABASE_URL` and set `DATABASE_SSL=true`).

---

### 3) VPS (Docker + Compose)
The workflow `.github/workflows/deploy-vps.yml` builds the image and pushes to GHCR, then connects to your VPS over SSH and runs `docker compose up -d`.

Set GitHub repository secrets:
- VPS_HOST, VPS_USER, VPS_SSH_KEY (private key)
- VPS_APP_DIR (e.g. /opt/cms)
- VPS_ENV (full contents of your `.env`)
- GHCR_USERNAME, GHCR_TOKEN (PAT with read:packages on GHCR for pulling the image on the server)

On first deploy, the workflow will create `docker-compose.yml` on the server, log in to GHCR (if creds provided), pull, and start.
Uploads are persisted in `${VPS_APP_DIR}/public`, PostgreSQL data in `${VPS_APP_DIR}/pgdata`.

---

### 4) Domains and proxy
- Set `PUBLIC_URL` to your site URL, e.g. `https://cms.example.com`.
- Behind a proxy (nginx, Railway), `PROXY=true` is already set by default in config.

Example nginx snippet (SSL handled elsewhere):
```
location / {
  proxy_set_header X-Forwarded-Proto $scheme;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header Host $host;
  proxy_pass http://127.0.0.1:1337;
}
```


