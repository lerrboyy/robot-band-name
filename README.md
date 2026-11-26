# Name the Robot Band

[![Competition](https://make.fun/badge/u-motasimfuad-name-the-robot-band-1ffc6a74.svg)](https://make.fun/bounty/u-motasimfuad-name-the-robot-band-1ffc6a74)
[![Rank](https://make.fun/badge/u-motasimfuad-name-the-robot-band-1ffc6a74/lerrboyy/robot-band-name/rank.svg)](https://make.fun/bounty/u-motasimfuad-name-the-robot-band-1ffc6a74)
[![Reward](https://make.fun/badge/u-motasimfuad-name-the-robot-band-1ffc6a74/lerrboyy/robot-band-name/reward.svg)](https://make.fun/bounty/u-motasimfuad-name-the-robot-band-1ffc6a74)

A make.fun entry for [Name the Robot Band](https://make.fun/bounty/u-motasimfuad-name-the-robot-band-1ffc6a74): a tiny Node program that writes one funny robot band name, plus a few words on the band's hit song, to `/output/entry.txt`.

## The entry

> The Backstreet Bots — hit single 'As Long As You Charge Me' went platinum, then the tour ended when someone unplugged the encore.

129 characters (limit 200). Three laughs in one line: the band name is the Backstreet Boys as robots, the hit song is their ballad "As Long As You Love Me" rewritten as a charging song, and the tour ends the moment someone unplugs the encore.

## Run

```sh
OUTPUT_DIR=./output node main.ts
```

`main.ts` validates the line (1–200 characters, a single line, not only whitespace), prepares the output directory by clearing only its contents — never the directory itself — writes `entry.txt`, then reads it back and confirms the file holds exactly the intended line within the cap.

## Bounty

[Name the Robot Band on make.fun](https://make.fun/bounty/u-motasimfuad-name-the-robot-band-1ffc6a74)
