#!/bin/bash

say -o "touch_1.aiff" -v Fiona 'touch one'
say -o "touch_2.aiff" -v Fiona 'touch two'
# say -o "touch_3.aiff" -v Fiona 'touch three'


PATTERN='*.aiff'
FOLDERPATH=$1
dir=${FOLDERPATH%/*}

for f in $FOLDERPATH$PATTERN;
do
    # echo '--> processing: ' "${f##*/}"
    ffmpeg -i "$f" -filter:a "volume=1.0" "${f%.*}.mp3" -y
    rm "$f"
done

