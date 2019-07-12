#!/bin/bash
# to run:
# $sh run.sh

if [ "$(whereis static-server)" != "static server:\n" ] ; then
  static-server --ip 127.0.0.1 -p 7878
fi
