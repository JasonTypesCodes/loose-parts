#!/bin/bash
echo Going to convert all the MOD files in here to mp4.

for inputFile in ./INPUT/*.MOD ; do
  echo ===========================================
  echo $inputFile
  outputFile=`echo "$inputFile" | cut -d . -f 2 | cut -d / -f 3`
  echo $outputFile
  echo ++++++++++++++++++++++++++++++++++++++++++
  ffmpeg -i $inputFile -strict experimental -acodec aac -ab 128k -vcodec mpeg4 -b:v 2000k -s 560x315 -aspect 16:9 ./OUTPUT/$outputFile.mp4
done

echo Done!
