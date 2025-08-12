#!/bin/bash

#command for renaming all the files
#a=1; for f in *.jpg; do mv "$f" "$a.jpg"; ((a++)); done

# Directory containing your images (change if needed)
IMG_DIR="/Users/marcus.allen84/Documents/Holiday photos/London"

# Loop through all jpg and JPG files in the directory
for file in "$IMG_DIR"/*.jpg "$IMG_DIR"/*.JPG; do
    # Skip if no match (prevents printing "*.jpg" when no files found)
    [ -e "$file" ] || continue

    # Get filename without extension
    filename=$(basename "$file" .jpg)
    filename=$(basename "$filename" .JPG)

    # Build output filename
    output="${IMG_DIR}/${filename}_compressed.jpg"

    # Run ImageMagick command
    magick "$file" -quality 20 "$output"

    echo "Compressed: $file -> $output"
done