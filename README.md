# react-async-rendering-demo

## Introduction

![screen shot 2018-06-08 at 00 40 43](https://user-images.githubusercontent.com/20895743/41113586-a5f27f84-6ab4-11e8-9edc-1e3d3d391f00.jpg)

> React Fiber, the new core architecture was launched in React 16. It opened a new chapter in React, enable features like [Async Rendering](https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html)

This demo is for [my sharing in HKOSCon 2018](https://hkoscon.org/2018/topic/react-async-rendering-paradigm-shift-after-react-fiber/), _React Async Rendering - Paradigm Shift After React Fiber_

## Live Demo

https://ivan-ha.github.io/react-async-rendering-demo/

## Presentation Slides

https://www.slideshare.net/hangolam/react-async-rendering-102558178

## Time Slicing

> ... to ensure that high-priority updates don’t get blocked by a low-priority update.

- Do some rage typing in the input field under Async/Sync Mode, you should feel the difference.
- If not, enable CPU throttling in browser's devtool.

## Suspense

> ... for components to suspend rendering while they load async data.

- Click on any repository name, it should have render the commit history without any spinner.
- Try again with appending `?latency=3000` in URL.

## Development

```
yarn
yarn start
```

## Deploy

```
yarn deploy
```
