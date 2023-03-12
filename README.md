# @shihongxins/jsutils

Personal Javascript Utils Library by shihongxins.

## Installation

```bash
  pnpm add @shihongxins/jsutils
```

## Usage

### ESModule

```ts [ESModule]
import { ColorUtils } from "@shihongxins/jsutils";
console.log(ColorUtils.hex2rgb("#ff0000"));
// output "rgb(255, 0, 0)"
```

### CommonJS

```ts [CommonJS]
const SHXsJSUtils = require("@shihongxins/jsutils");
console.log(SHXsJSUtils.DateUtils.nativeFormat(new Date(1678607231000), "YYYY-MM-DD"));
// output 2023-03-12
```

### Browser

```html [Browser]
<script src="node_modules/@shihongxins/jsutils/lib/bundle.browser.js"></script>
<script>
  console.log(window.SHXsJSUtils.ElementUtils.isDocumentInFullscreenMode());
  // false
</script>
```
