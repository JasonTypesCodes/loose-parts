#!/usr/bin/fish

set last 0
for next in (seq 100)
  ffmpeg -i ./cbr/mermaid$last.mp3 \-acodec mp3 \-b:a 224k ./cbr/mermaid$next.mp3
  set last $next
end

set last 0
for next in (seq 100)
  ffmpeg -i ./vbr/mermaid$last.mp3 \-acodec mp3 \-q:a 1 ./vbr/mermaid$next.mp3
  set last $next
end

echo Done!

