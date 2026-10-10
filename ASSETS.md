# Asset provenance

- `public/images/technician.webp`: original illustrative technician imagery generated with the built-in imagegen tool on 10 October 2026, then resized and compressed for web delivery. Illustrative, not actual business staff. Referenced through Next.js Image with meaningful alt text.
- `public/fonts/dm-sans-{400,500,600,700}.ttf`: DM Sans served by Google Fonts, self-hosted with the SIL Open Font License at `public/fonts/OFL.txt`. Source: https://github.com/google/fonts/tree/main/ofl/dmsans.
- `public/favicon.svg`: original vector television mark created for this project.
- Service screens and city silhouettes: original CSS visuals. City illustrations are decorative and do not establish actual neighbourhood coverage.
- Icons: Lucide React. No third-party manufacturer logo files or reference-site images were used.

## Final generation brief

Use case: photorealistic-natural. Asset type: premium TV repair website hero photograph. A professional electronics technician in a clean navy polo, no logo, diagnosing a large modern television on a workbench in an elegant bright neutral workshop. Technician on right side of frame in three-quarter profile, focused on rear TV electronics with a digital multimeter, unplugged television, natural realistic hands and equipment, daylight, off-white walls, calm sophisticated palette with muted teal details. Editorial commercial photography, highly realistic, no text, no watermark, landscape 3:2 composition. This is illustrative stock-style imagery, not a portrait of a real business employee.

## Optional real-business replacements

1. Licensed technician/workshop photography.
2. A business-owned vector logo, if an established logo is available.
3. Genuine customer review text with permission and source information.
4. Confirmed district coverage and verified contact details.

## Service photography — built-in imagegen

All four are original AI-generated illustrative photographs, not actual staff or manufacturer endorsements. Optimised WebP outputs are consumed by Next.js Image on service cards and detail pages. Original PNGs were retained.

| Final path | Generation prompt |
| --- | --- |
| public/images/services/tv-display.webp | Photorealistic editorial product photograph: modern thin bezel unbranded television on a clean workbench in a light professional electronics workshop, natural landscape on screen, three-quarter angle, neutral colours, natural lighting, horizontal 3:2, no people, text, logos or watermark. |
| public/images/services/tv-diagnosis.webp | Photorealistic editorial photograph: technician hands in a clean navy work shirt inspecting an unplugged unbranded television screen with a handheld diagnostic instrument on an orderly electronics workbench, realistic tools, natural light, neutral workshop, horizontal 3:2, no text, logos or watermark. |
| public/images/services/tv-circuits.webp | Photorealistic macro editorial photograph: unpowered television motherboard and power supply circuit board on an antistatic workbench, capacitors, connectors and soldering station, technician hand holding test probes over the unplugged board, neutral lighting, horizontal 3:2, no text, logos or watermark. |
| public/images/services/tv-connections.webp | Photorealistic close-up editorial photograph: rear input panel of an unbranded television, recognizable HDMI socket and connected cable, network and audio sockets, technician hand checking connector, soft natural light, navy and neutral grey workshop palette, horizontal 3:2, no lettering, logos or watermark. |

## City photographs — built-in imagegen

Original AI-generated illustrative location images; not exact geographic surveys. Natural daylight, neutral colours, editorial travel photography, horizontal 3:2 framing, no text, logos or watermark. Original PNGs are retained, WebP copies optimised for Next.js Image.

| Final path | Final prompt subject |
| --- | --- |
| public/images/areas/dubai.webp | Downtown Dubai skyline with iconic tall slender Burj Khalifa across a calm urban waterfront, contemporary high-rise buildings, clear warm morning light. |
| public/images/areas/sharjah.webp | Sharjah Al Majaz waterfront facing Khalid Lagoon, broad promenade, palm trees, mosque with dome and minarets, residential high-rise skyline across water, clear warm morning light. |
| public/images/areas/ajman.webp | Ajman Corniche along the Arabian Gulf, wide pale sandy beach, palm-lined seafront promenade and city apartment towers, calm blue water, clear warm morning light. |
