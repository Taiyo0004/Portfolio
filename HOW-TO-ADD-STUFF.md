# How to add stuff

## Add a project (projects.html)
1. Copy the block between "PROJECT CARD TEMPLATE" comments.
2. Paste it inside `.project-grid`, change the text, tags and links.
3. Put the screenshot in `assets/projects/` and update `src` + `alt`.
4. Set `data-category` to `data`, `vision` or `games` (space-separated for more than one).

## Add a new project category
1. Add an `<input class="filter-input" type="radio" name="filter" id="f-NAME">` next to the others.
2. Add `<label class="dymo" for="f-NAME">name</label>` inside `.filter`.
3. In `css/components.css`, add one line to each of the three filter rule groups.

## Add art (art.html)
Copy one `<figure class="art-tile">`, put the image in `assets/art/`.
Add `class="is-pixel"` on the img for sharp pixel art.

## Add a tech sticker (index.html)
`<li class="sticker" style="--bg:#hex; --tilt:-3deg">Name</li>`
Optional: `--fg` for text colour, `--r` for corner radius (`50%` = round).

## Add a link (links.html)
Copy an `<li>` in `.link-board` and change the href, colour and text.

## Add a new page
Copy any page, keep the nav, change `aria-current="page"` to the new link,
and add the new link to the nav on every page.

## Change the look
All colours and fonts are variables at the top of `css/base.css`.
