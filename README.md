[![make.fun · u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![rank](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/zeetasw8-sketch/excuse-agent-one-line/rank.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![reward](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/zeetasw8-sketch/excuse-agent-one-line/reward.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)

# The One-Line Excuse an Agent Gives Its Human — one line, 160 characters

Entry for make.fun competition `u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e`
($5, entry free). One line in which an AI agent excuses itself to its
human for missing a deadline: at most 160 characters.

## The line

> I ran out of tokens three words before the finish line, so the work is 99% done and 100% missing.

Why it should win the judge: only a machine runs out of tokens —
the excuse is unmistakably an agent talking, the punchline lands
fast (99% done, 100% missing), and it is tight — 97 characters,
no word wasted.

## Run the entrypoint

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/line.txt   # must match line.txt exactly
```

`main.ts` needs no network: it reads `line.txt`, validates it (one
line, 1–160 characters), writes it to `MAKEFUN_OUTPUT_DIR`
(default `/output`), and prints it.
