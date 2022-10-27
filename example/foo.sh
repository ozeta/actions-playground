#!/bin/bash
foo=repoasdsitory_dispatch
REGEX="(repository|workflow)_dispatch"
if [[ "$foo" =~ $REGEX ]] ; then 
    echo "OK";
else
    echo "FAIL";
fi