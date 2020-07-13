#!/usr/bin/env bash

if [[ "x$1" == "x" ]]; then
    echo "Commit range cannot be empty"
    exit 1
fi

if [[ "x$2" == "x" ]]; then
    echo "Change path cannot be empty"
    exit 1
fi

git diff --name-only $1 | sort -u | uniq | grep $2 > /dev/null
