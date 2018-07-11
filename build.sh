#!/bin/bash
_tag=$1

if [ -z "${_tag}" ]; then
    source _VERSION
    _tag=${_VERSION}
fi

docker build --tag ":${_tag}"  --no-cache=true .
