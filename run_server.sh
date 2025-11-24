#!/bin/bash
# Jekyll 本地服务器启动脚本

cd "$(dirname "$0")"
bundle exec jekyll serve --host 0.0.0.0 --port 4000