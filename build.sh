#!/bin/sh

export $(cat .env.prod | xargs)
npx next build
