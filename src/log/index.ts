const log = {
  info: (title: string, ...args: any[]) => {
    console.info(`[\x1b[1m\x1b[32m${title}\x1b[0m]`, ...args);
  },
};

export default log;
