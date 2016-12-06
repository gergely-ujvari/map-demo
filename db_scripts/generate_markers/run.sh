#!/bin/sh

cd $(dirname $0)

mongo --eval "var REGION=\"$1\"; var NUMBER=$2;" run.js