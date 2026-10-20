# Recreate the .claude\skills -> .agents\skills directory junction.
#
# Why: DSH natively scans <repo>/.agents/skills, while Claude Code only scans
# <repo>/.claude/skills. A directory junction lets both tools read one physical
# copy of every skill, so adding a skill dir under .agents is enough.
#
# Usage (from anywhere):
#   powershell -NoProfile -ExecutionPolicy Bypass -File scripts/link-skills.ps1
#
# Safe to re-run: exits 0 when the junction already exists, and refuses to
# replace a real directory.

$ErrorActionPreference = 'Stop'

$repo = Split-Path -Parent $PSScriptRoot
$canonical = Join-Path $repo '.agents\skills'
$link = Join-Path $repo '.claude\skills'

if (-not (Test-Path -LiteralPath $canonical)) {
  throw "canonical skill directory not found: $canonical"
}

if (Test-Path -LiteralPath $link) {
  $item = Get-Item -LiteralPath $link -Force
  if ($item.LinkType -eq 'Junction' -or $item.LinkType -eq 'SymbolicLink') {
    Write-Host "already linked: $link -> $($item.Target)"
    exit 0
  }
  throw "path exists and is not a link, refusing to touch it: $link"
}

$parent = Split-Path -Parent $link
if (-not (Test-Path -LiteralPath $parent)) {
  New-Item -ItemType Directory -Path $parent -Force | Out-Null
}

cmd /c mklink /J "$link" "$canonical" | Out-Null
if ($LASTEXITCODE -ne 0) {
  throw "mklink failed with exit code $LASTEXITCODE"
}

Write-Host "linked: $link -> $canonical"
