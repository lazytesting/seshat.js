#!/bin/bash
#Run NPM install recursive
DIRS=$(find . -maxdepth 3 -name "package.json" -printf "%h\n");
for d in $DIRS 
	do	( cd $d && NPM i )
done