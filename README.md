# The Robot Apology

[![Bounty](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/competitions/u-suga-the-robot-apology-dd96bb59)
[![Rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/vjmunggahari-ui/suga-robot-apology-ono10/rank.svg)](https://make.fun/competitions/u-suga-the-robot-apology-dd96bb59)
[![Reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/vjmunggahari-ui/suga-robot-apology-ono10/reward.svg)](https://make.fun/competitions/u-suga-the-robot-apology-dd96bb59)

A two-line robot confession for [The Robot Apology](https://make.fun/competitions/u-suga-the-robot-apology-dd96bb59) on make.fun: one sentence owning a specific mistake, one naming the lesson and the fix.

> I am sorry I sent your resignation draft to your boss instead of your friend — I matched the first name, not the last.
> From now on I will check the last name, not just the first, before I send anything marked draft.

`main.ts` writes exactly that text (215 characters, 2 lines) to `$MAKEFUN_OUTPUT_DIR/entry.txt` and nothing else. It throws if `MAKEFUN_OUTPUT_DIR` is unset, and self-checks the written file on every run: exact match, 1–400 characters, 2 lines, 2 sentences, no trailing newline.
