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

### General formatters

```typescript
import { commas } from "yeonpm-modules";
// Add commas to numbers
console.log(commas(1000000)); // "1,000,000"
console.log(commas("1000000")); // "1,000,000"
```

### Date/Time formatters

```typescript
import { dateForm, timeForm, dateTimeForm } from "yeonpm-modules";
// Formats a date into YYYY-MM-DD format
console.log(dateForm(new Date())); // "2024-11-20"
// Formats time into HH:mm or HH:mm:ss format
console.log(timeForm(new Date())); // "15:30" or "15:30:00"
// Formats a date into YYYY-MM-DD HH:mm format
console.log(dateTimeForm(new Date())); // "2024-11-20 15:30"
```

### Logging

```typescript
import { log } from "yeonpm-modules";
// Colored info logging
log.info("SUCCESS", "Operation completed successfully");
```

## License

MIT
