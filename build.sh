#!/bin/sh
rm -rf build
yarn build
echo "*" > build/.gitignore
