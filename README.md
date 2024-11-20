# yeonpm-modules

Collection of frequently used functions for projects

## Installation

```bash
npm install yeonpm-modules
```

## Features

- Number/String formatters
- Colored console logging

## Usage

### Formatters

```typescript
import { commas } from "yeonpm-modules";
// Add commas to numbers
console.log(commas(1000000)); // "1,000,000"
console.log(commas("1000000")); // "1,000,000"
```

### Logging

```typescript
import { log } from "yeonpm-modules";
// Colored info logging
log.info("SUCCESS", "Operation completed successfully");
```

## License

MIT
