#!/bin/bash

# Image Optimization Script for Palm Candy Website
# Usage: ./optimize-images.sh [input-image] [output-name]

if [ $# -lt 2 ]; then
    echo "Usage: $0 [input-image] [output-name]"
    echo "Example: $0 my-image.png header-optimized"
    exit 1
fi

INPUT_IMAGE=$1
OUTPUT_NAME=$2

echo "Optimizing image: $INPUT_IMAGE"

# Create optimized PNG (high quality, larger size)
echo "Creating optimized PNG..."
magick "$INPUT_IMAGE" \
    -quality 95 \
    -resize 3000x1000 \
    -sharpen 0x1 \
    -strip \
    "${OUTPUT_NAME}-optimized.png"

# Create WebP version (better compression, smaller size)
echo "Creating optimized WebP..."
magick "$INPUT_IMAGE" \
    -quality 95 \
    -resize 3000x1000 \
    -sharpen 0x1 \
    -strip \
    "${OUTPUT_NAME}-optimized.webp"

# Create additional WebP with cwebp for comparison
echo "Creating cwebp version..."
cwebp -q 95 -sharp_yuv -mt -v "$INPUT_IMAGE" -o "${OUTPUT_NAME}-cwebp.webp"

echo "Optimization complete!"
echo "Files created:"
echo "  - ${OUTPUT_NAME}-optimized.png"
echo "  - ${OUTPUT_NAME}-optimized.webp"
echo "  - ${OUTPUT_NAME}-cwebp.webp"

# Show file sizes
echo ""
echo "File sizes:"
ls -lh "${OUTPUT_NAME}"-*
