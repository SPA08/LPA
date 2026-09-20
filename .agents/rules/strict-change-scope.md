---
trigger: always_on
---

# SIDDHU Project Strict Change Rules

1. Follow the user's latest instruction exactly. Do not add, remove, redesign, rewrite, rename, move, or improve anything that was not explicitly requested.

2. Make only the requested change. Preserve all other content, code, layout, styling, colours, images, animations, links, data, functionality, spacing, and responsive behaviour exactly as they are.

3. Before editing, identify the exact file, component, selector, function, or code block responsible for the requested change.

4. Before editing any file, create a recoverable backup or Git checkpoint. Never delete an existing working component unless the user explicitly asks for deletion.

5. Prefer the smallest possible code change. Do not replace a complete section or component when one property, path, value, or line can be corrected.

6. Do not modify unrelated files. Do not perform cleanup, refactoring, dependency upgrades, formatting of the full file, or “helpful improvements” without explicit instruction.

7. Never guess missing requirements. If a required detail is unclear, preserve the current implementation and ask one short question before changing it.

8. When the user supplies a reference image, use it only for the specifically requested change. Do not copy unrelated styling or replace the existing design.

9. For every requested edit:
   - State what exact element will change.
   - State which file(s) will be modified.
   - Apply only that change.
   - Test the affected feature on desktop and mobile.
   - Report the exact lines/components changed.
   - Show a screenshot or preview before declaring completion.

10. If the requested change breaks another working feature, restore the last working version immediately and explain the conflict.

11. Do not use destructive commands, reset the project, overwrite the full file, or delete assets without the user’s explicit approval.

12. For the animated Pakistan map:
   - Preserve its texture, animation, size, colours, Chichawatni marker and badge.
   - Change only the specific map detail requested.
   - Never replace it with a plain SVG, black polygon, new component, or unrelated map.
   - Preserve AJK and Gilgit-Baltistan in the required outline.
   - Create a backup before every map edit.

13. Before finishing, compare the result with the version immediately before the edit. Confirm that only the requested change occurred.

14. If the user says “only this,” treat everything else as locked.