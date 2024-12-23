#!/bin/bash

# load environment variables from .env

if [ -f .env ]; then
 set -a #all variables defined in .env
 source .env
 set +a #turnoff allexport
fi

#git related things
export GITHUB_SHA=${git rev-parse --short HEAD}
export GITHUB_BRANCH=${git rev-parse --abbrev-ref HEAD}