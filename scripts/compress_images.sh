#!/bin/bash

# Image Compression Script for Web
# Converts PNG images to WebP format (Aggressive compression)
# Only outputs WebP files

# Enable globbing options
shopt -s nullglob nocaseglob

# Configuration
if [ -n "$1" ]; then
    INPUT_DIR="${1%/}" # Remove trailing slash if present
else
    INPUT_DIR="$(dirname "$0")"
fi

OUTPUT_DIR="${INPUT_DIR}/compressed_images"

# Quality settings
# Switching to Lossy WebP for aggressive compression
USE_LOSSLESS_WEBP=false
WEBP_QUALITY=80 

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Create output directories
mkdir -p "$OUTPUT_DIR"

# Check for tools
HAS_CWEBP=false
HAS_PNGQUANT=false
HAS_FFMPEG=false
HAS_SIPS=false

if command -v cwebp &> /dev/null; then HAS_CWEBP=true; fi
if command -v pngquant &> /dev/null; then HAS_PNGQUANT=true; fi
if command -v ffmpeg &> /dev/null; then HAS_FFMPEG=true; fi
if command -v sips &> /dev/null; then HAS_SIPS=true; fi

# Function to get file size
get_file_size() {
    local file="$1"
    if [[ "$OSTYPE" == "darwin"* ]]; then
        stat -f%z "$file" 2>/dev/null
    else
        stat --printf="%s" "$file" 2>/dev/null
    fi
}

format_size() {
    local size=$1
    if [ -z "$size" ]; then echo "0 B"; return; fi
    if [ $size -ge 1048576 ]; then
        echo "$(echo "scale=2; $size/1048576" | bc) MB"
    elif [ $size -ge 1024 ]; then
        echo "$(echo "scale=2; $size/1024" | bc) KB"
    else
        echo "$size B"
    fi
}

# Function to compress/convert to WebP
process_webp() {
    local input="$1"
    local base_filename=$(basename "$input")
    local filename="${base_filename%.*}"
    local output="${OUTPUT_DIR}/${filename}.webp"
    
    # Skip if input is not a PNG (case insensitive regex check)
    if [[ ! "$input" =~ \.[pP][nN][gG]$ ]]; then return; fi

    echo -e "${BLUE}[WEBP]${NC} Processing: ${base_filename}"
    
    if [ "$HAS_CWEBP" = true ]; then
        local args="-quiet -mt"
        if [ "$USE_LOSSLESS_WEBP" = true ]; then
            args="$args -lossless"
        else
            args="$args -q $WEBP_QUALITY"
        fi
        
        cwebp $args "$input" -o "$output"
        
    elif [ "$HAS_FFMPEG" = true ]; then
        # Fallback to ffmpeg for webp
        local args="-c:v libwebp"
        if [ "$USE_LOSSLESS_WEBP" = true ]; then
            args="$args -lossless 1"
        else
            args="$args -q:v $WEBP_QUALITY"
        fi
        
        ffmpeg -y -v error -i "$input" $args "$output"
    else
        echo -e "${RED}  ✗ No WebP tool found (install cwebp or ffmpeg)${NC}"
        return
    fi
    
    if [ -f "$output" ]; then
        local orig_size=$(get_file_size "$input")
        local new_size=$(get_file_size "$output")
        local savings=$(echo "scale=1; (1 - $new_size/$orig_total) * 100" | bc 2>/dev/null) # percent calculation might be complex here
        echo -e "${GREEN}  ✓${NC} Generated WebP: $(format_size $orig_size) → $(format_size $new_size)"
    fi
}

# Main execution
echo ""
echo "=================================================="
echo "   Image Compression Script for Web"
echo "   PNG → WebP (Aggressive, Quality: $WEBP_QUALITY)"
echo "=================================================="
echo ""

# Find PNG files
images=("$INPUT_DIR"/*.png)
count=${#images[@]}

if [ "$count" -eq 0 ]; then
    echo -e "${RED}No PNG files found in ${INPUT_DIR}${NC}"
    exit 1
fi

echo "Found ${count} PNG files to process"
echo "Using tools: "
[ "$HAS_CWEBP" = true ] && echo "  - cwebp (WebP generation)" || echo "  - ffmpeg (WebP fallback)"
echo ""

for img in "${images[@]}"; do
    if [ -f "$img" ]; then
        process_webp "$img"
        echo ""
    fi
done

echo -e "${GREEN}Done!${NC}"
echo "Output directory: ${OUTPUT_DIR}"
echo ""
