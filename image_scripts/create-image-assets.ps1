# PowerShell Script to Create Image Assets for Website
# Requires: ImageMagick or PowerShell with System.Drawing

Write-Host "Creating image assets from app_icon.png..." -ForegroundColor Cyan

# Check if ImageMagick is installed
$magickInstalled = $null -ne (Get-Command magick -ErrorAction SilentlyContinue)

if (-not $magickInstalled) {
    Write-Host "ImageMagick not found. Installing with winget..." -ForegroundColor Yellow
    Write-Host "If winget is not available, install ImageMagick from: https://imagemagick.org/script/download.php" -ForegroundColor Yellow
    Read-Host "Press Enter to continue or Ctrl+C to cancel"
}

$sourceImage = ".\public\app_icon.png"
$publicDir = ".\public"

# Define image specifications
$images = @(
    @{Name="og-image.png"; Width=1200; Height=630; Description="Open Graph image for social sharing"},
    @{Name="twitter-image.png"; Width=1200; Height=600; Description="Twitter card image"},
    @{Name="logo.png"; Width=512; Height=512; Description="Organization logo"},
    @{Name="apple-touch-icon.png"; Width=180; Height=180; Description="Apple touch icon"},
    @{Name="favicon-32x32.png"; Width=32; Height=32; Description="Favicon 32px"},
    @{Name="favicon-16x16.png"; Width=16; Height=16; Description="Favicon 16px"},
    @{Name="android-chrome-192x192.png"; Width=192; Height=192; Description="Android Chrome icon"},
    @{Name="android-chrome-512x512.png"; Width=512; Height=512; Description="Android Chrome icon large"}
)

# Create images using ImageMagick
if ($magickInstalled) {
    foreach ($img in $images) {
        $output = Join-Path $publicDir $img.Name
        Write-Host "Creating $($img.Name) ($($img.Width)x$($img.Height))..." -ForegroundColor Green
        
        if ($img.Width -eq $img.Height) {
            # Square images - simple resize with white background
            magick convert $sourceImage -resize "$($img.Width)x$($img.Height)" -background white -alpha remove -alpha off $output
        } else {
            # Rectangular images (OG, Twitter) - center the logo with padding
            magick convert -size "$($img.Width)x$($img.Height)" canvas:white `
                $sourceImage -resize "800x800" -gravity center -composite $output
        }
        
        if (Test-Path $output) {
            Write-Host "  ✓ Created: $($img.Name)" -ForegroundColor Green
        } else {
            Write-Host "  ✗ Failed: $($img.Name)" -ForegroundColor Red
        }
    }
} else {
    Write-Host "`nImageMagick is required to generate images automatically." -ForegroundColor Red
    Write-Host "Please install it using one of these methods:" -ForegroundColor Yellow
    Write-Host "1. winget install ImageMagick.ImageMagick" -ForegroundColor White
    Write-Host "2. Download from: https://imagemagick.org/script/download.php" -ForegroundColor White
    Write-Host "`nAlternatively, use an online tool:" -ForegroundColor Yellow
    Write-Host "- https://realfavicongenerator.net/" -ForegroundColor White
    Write-Host "- https://www.websiteplanet.com/webtools/favicon-generator/" -ForegroundColor White
}

Write-Host "`nImage Assets Summary:" -ForegroundColor Cyan
Write-Host "Needed for SEO & Social Sharing:" -ForegroundColor Yellow
foreach ($img in $images) {
    $exists = Test-Path (Join-Path $publicDir $img.Name)
    $status = if ($exists) { "✓" } else { "✗" }
    Write-Host "  $status $($img.Name) - $($img.Description)" -ForegroundColor $(if ($exists) { "Green" } else { "Red" })
}

Write-Host "`nNote: For og-image.png and twitter-image.png, consider adding:" -ForegroundColor Yellow
Write-Host "  - App name/tagline text" -ForegroundColor White
Write-Host "  - App screenshot or mockup" -ForegroundColor White
Write-Host "  - Branded background" -ForegroundColor White
Write-Host "`nFor screenshot.png, take an actual app screenshot showing key features." -ForegroundColor Yellow
