#!/bin/bash

echo "🚀 准备上传到GitHub..."
echo ""

# 清理临时文件
echo "步骤1: 清理临时文件"
./上传前清理.sh
echo ""

# 显示待上传的文件
echo "步骤2: 检查待上传的文件"
git status
echo ""

# 询问确认
read -p "确认要上传这些更改吗？(y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo ""
    echo "步骤3: 添加文件到Git"
    git add .
    
    echo ""
    echo "步骤4: 提交更改"
    git commit -m "完成主页优化：现代艺术风格 + 网格热敏效果 + 优化交互

- Hero区域：网格热敏背景 + 布局优化
- Publications：方形会议标签 + 统一高度
- 导航栏：hover即时显示名称
- REDnote：悬停显示二维码
- 样式：优化阴影效果 + 人像放大到200px
- 动画：删除页面加载淡入效果
"
    
    echo ""
    echo "步骤5: 推送到GitHub"
    git push origin main
    
    echo ""
    echo "✅ 上传完成！"
    echo ""
    echo "📝 后续步骤："
    echo "  1. 等待 1-2 分钟让GitHub构建网站"
    echo "  2. 访问你的GitHub Pages查看效果"
    echo "  3. 按F12打开控制台测试REDnote功能"
    echo ""
else
    echo ""
    echo "❌ 已取消上传"
    echo ""
fi

