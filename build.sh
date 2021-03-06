#!/bin/bash

build(){
  dir=$1

  for file in "src/$dir"* ; do

    if [ -d "$file" ] ; then
      build "$file"
    elif [[ "$file" == *.js ]] ; then
      echo "// $file" >> 'bin/app.js'
      cat "$file" >> 'bin/app.js'
    fi
  done
}

printf "Building project\n"

# make the bin folder if it does not exist
[ ! -d 'bin' ] && mkdir 'bin'
# reset app.js
echo "" > "bin/app.js"
# run the build algorithm
build ""

printf "Build finished\n"