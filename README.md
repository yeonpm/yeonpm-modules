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

- `commas(1000)`, `commas("1000")`

  "1,000", "1,000"

- `capitalize("hello")`

  "Hello"

- `truncate("Long text here", 5)`

  "Long ..."

### Date/Time formatters

- `dateForm(new Date())`, `dateForm(new Date(), "/")`

  "2024-11-20", "2024/11/20"

- `timeForm(new Date())`, `timeForm(new Date(), true)`

  "15:30", "15:30:00"

- `dateTimeForm(new Date())`, `dateTimeForm(new Date(), "/")`

  "2024-11-20 15:30", "2024/11/20 15:30"

- `timeAgo(new Date(Date.now() - 3600000))`, `timeAgo(new Date(Date.now()))`

  "1 hour ago", "Just now"

### Logging

- `log.info("SUCCESS", "Operation completed successfully")`

  "[SUCCESS] Operation completed successfully" (Colored)

## License

MIT
