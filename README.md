# Ilkka Kosunen — architecture portfolio

Static Astro 5 + Tailwind CSS 4 portfolio with three reference blueprints and a locally bundled Mermaid viewer. No application backend, analytics, remote fonts or runtime CDN imports.

## First run

Use Node.js 22 and npm.

```sh
npm install
npm run dev
npm run verify
```

Commit the generated `package-lock.json` before relying on reproducible CI. This scaffold does not include a fabricated lockfile. CI temporarily falls back to `npm install` until you commit one. Dependency ranges are not a substitute for a reviewed lockfile. The repository has not been executed or browser-tested by its generator.

## Editing

- `src/data/profile.json`: homepage text, availability, contact, optional legal details and optional CV path.
- `src/data/blueprints.ts`: three illustrative Mermaid diagrams and their descriptions.
- `src/pages/index.astro`: page composition and Tailwind markup.
- `src/components/MermaidBlueprint.astro`: zoom, fit, mouse pan, keyboard navigation and fullscreen.
- `src/styles/global.css`: design defaults.

The initial copy deliberately does not assert a completed Cadentia departure, exact employment dates, tax registration, guaranteed AI correctness, procurement exemptions or existing broker partnerships. Verify your legal identity, registration status, IP permissions and credentials before adding those claims. No business ID has been inferred from public name matches. No license grant for your code or content is assumed.

To enable the CV link, add your actual PDF under `public/docs/` and set `cvPath` to its root-relative path. There is no fake PDF placeholder. To publish legal details, enter your confirmed `businessName` and `businessId` in the profile.

## CI

Pull requests and main pushes run Astro checks, Node tests and the static build, then save the `dist` artifact. PRs never receive deployment credentials. Configure a GitHub ruleset requiring the `verify` job before merging. Repository settings are not provisioned by these files.

The tests cover required profile fields and configured CV existence. They do not validate Mermaid rendering or all links. Before launch, test all three diagrams in a browser, keyboard controls, narrow screens, fullscreen, contact links and CV downloads. Add Playwright browser tests as the site grows. Pin GitHub Actions to reviewed commit SHAs for stronger supply-chain control.

## Cloudflare Pages deployment

Create a Cloudflare Pages Direct Upload project with production branch `main`. Set GitHub repository variable `CF_PAGES_PROJECT` to its actual name. Create a GitHub environment named `production`, optionally requiring approval, and configure its secrets:

- `CLOUDFLARE_API_TOKEN`: least-privilege token with Pages edit access for the intended account.
- `CLOUDFLARE_ACCOUNT_ID`: target account ID.

Run **Site CI and manual deployment** from the Actions tab on `main`. The workflow verifies the site and uploads that same build artifact. Deployments are deliberately manual until domain, identity and content are reviewed. For automatic deployment after successful main CI, change the deploy job condition to also allow `github.event_name == 'push'`; keep the main-branch restriction. Do not also enable a competing Git-integrated production deploy.

Add the actual custom domain in Cloudflare after deployment. Domain ownership, DNS, credentials and production protections require separate setup. No domain is assumed to be owned and no live deployment is claimed by this scaffold. Use Cloudflare deployment history for rollback and retain the corresponding Git commit.

## Routine updates

```sh
git switch -c content/update-availability
# Edit profile or diagrams
npm run verify
git add src/data/
git commit -m "content: update availability"
git push -u origin content/update-availability
```

Review the PR, merge after checks pass, then run the manual deployment workflow. Never commit confidential client information, credentials or unapproved former-employer artifacts; a private repository alone would not make rendered content safe to publish.
