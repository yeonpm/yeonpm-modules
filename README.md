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
import { commas, capitalize, truncate } from "yeonpm-modules";
// Add commas to numbers
console.log(commas(1000000), commas("1000000")); // "1,000,000 1,000,000"
// Capitalize first letter
console.log(capitalize("hello")); // "Hello"
// Truncate string
console.log(truncate("Long text here", 5)); // "Long ..."
```

### Date/Time formatters

```typescript
import { dateForm, timeForm, dateTimeForm, timeAgo } from "yeonpm-modules";
// Formats a date into YYYY-MM-DD format
console.log(dateForm(new Date()), dateForm(new Date(), "/")); // "2024-11-20 2024/11/20"
// Formats time into HH:mm or HH:mm:ss format
console.log(timeForm(new Date()), timeForm(new Date(), true)); // "15:30 15:30:00"
// Formats a date into YYYY-MM-DD HH:mm format
console.log(dateTimeForm(new Date()), dateTimeForm(new Date(), "/")); // "2024-11-20 15:30 2024/11/20 15:30"
// Get relative time
console.log(timeAgo(new Date(Date.now() - 3600000))); // "1 hour ago"
```

### Logging

```typescript
import { log } from "yeonpm-modules";
// Colored info logging
log.info("SUCCESS", "Operation completed successfully");
```

## License

MIT
