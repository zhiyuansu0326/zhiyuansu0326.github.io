// 现代主页交互脚本 - 艺术优雅版

document.addEventListener('DOMContentLoaded', function () {
  console.log('=== Page loaded ===');
  
  // ========== 粒子系统 ==========
  initParticleSystem();

  // ========== 导航栏交互 ==========
  initNavigation();

  // ========== 滚动动画 ==========
  initScrollAnimations();

  // ========== REDnote 悬停 ==========
  console.log('Initializing REDnote hover...');
  initRednoteHover();

  // ========== 视差效果 ==========
  initParallax();
});

// 网格热敏效果初始化
function initParticleSystem() {
  const heroSection = document.querySelector('.hero-section');
  if (!heroSection) return;

  // 创建canvas
  const canvas = document.createElement('canvas');
  canvas.className = 'particle-canvas';
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '1';
  heroSection.style.position = 'relative';

  // 确保heroSection有正确的层级
  const heroContent = heroSection.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.position = 'relative';
    heroContent.style.zIndex = '2';
  }

  heroSection.insertBefore(canvas, heroSection.firstChild);

  const ctx = canvas.getContext('2d');
  let gridPoints = [];
  let mouse = { x: null, y: null, radius: 120 };
  const gridSpacing = 40; // 网格间距

  // 设置canvas尺寸
  function resizeCanvas() {
    canvas.width = heroSection.offsetWidth;
    canvas.height = heroSection.offsetHeight;
    initGrid();
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // 鼠标移动追踪 - 同时监听heroSection和document
  function updateMousePosition(e) {
    const rect = heroSection.getBoundingClientRect();
    const clientX = e.clientX;
    const clientY = e.clientY;

    // 检查鼠标是否在Hero区域内
    if (clientX >= rect.left && clientX <= rect.right &&
      clientY >= rect.top && clientY <= rect.bottom) {
      mouse.x = clientX - rect.left;
      mouse.y = clientY - rect.top;
    } else {
      mouse.x = null;
      mouse.y = null;
    }
  }

  document.addEventListener('mousemove', updateMousePosition);

  heroSection.addEventListener('mouseleave', function () {
    mouse.x = null;
    mouse.y = null;
  });

  // 网格点类
  class GridPoint {
    constructor(x, y) {
      this.baseX = x;
      this.baseY = y;
      this.x = x;
      this.y = y;
      this.brightness = 0.2; // 基础亮度
    }

    update() {
      // 计算与鼠标的距离
      if (mouse.x != null && mouse.y != null) {
        const dx = mouse.x - this.baseX;
        const dy = mouse.y - this.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          // 热敏效果：距离越近越亮
          this.brightness = 0.8 - (distance / mouse.radius) * 0.6;
        } else {
          // 逐渐恢复到基础亮度
          this.brightness += (0.2 - this.brightness) * 0.1;
        }
      } else {
        this.brightness += (0.2 - this.brightness) * 0.1;
      }
    }

    draw() {
      // 绘制网格点
      ctx.fillStyle = `rgba(174, 11, 42, ${this.brightness})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // 初始化网格
  function initGrid() {
    gridPoints = [];
    for (let x = 0; x < canvas.width; x += gridSpacing) {
      for (let y = 0; y < canvas.height; y += gridSpacing) {
        gridPoints.push(new GridPoint(x, y));
      }
    }
  }
  initGrid();

  // 绘制网格线
  function drawGrid() {
    ctx.strokeStyle = 'rgba(174, 11, 42, 0.1)';
    ctx.lineWidth = 1;

    // 横线
    for (let y = 0; y < canvas.height; y += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // 竖线
    for (let x = 0; x < canvas.width; x += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
  }

  // 动画循环
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 绘制基础网格
    drawGrid();

    // 更新和绘制网格点
    gridPoints.forEach(point => {
      point.update();
      point.draw();
    });

    requestAnimationFrame(animate);
  }
  animate();
}

// 导航栏初始化
function initNavigation() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const topNav = document.querySelector('.top-nav');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });

    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });
  }

  // 导航栏滚动效果 + 波纹动画
  let lastScroll = 0;
  window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      topNav.style.boxShadow = '0 4px 20px rgba(174, 11, 42, 0.15)';
    } else {
      topNav.style.boxShadow = '0 2px 8px rgba(174, 11, 42, 0.1)';
    }

    lastScroll = currentScroll;
  });

  // 导航按钮波纹效果
  const navButtons = document.querySelectorAll('.nav-menu a');
  navButtons.forEach(button => {
    button.addEventListener('mouseenter', function (e) {
      const ripple = document.createElement('span');
      ripple.className = 'nav-ripple';
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });
}

// 滚动动画初始化（已禁用淡入效果）
function initScrollAnimations() {
  // 不再添加滚动淡入动画，内容直接显示
  // 保留函数框架以防其他地方调用
}

// REDnote 悬停效果
function initRednoteHover() {
  console.log('initRednoteHover called');
  const rednoteLink = document.querySelector('.rednote-link');
  console.log('REDnote link element:', rednoteLink);
  
  if (!rednoteLink) {
    console.error('REDnote link not found!');
    // 尝试查找所有链接
    const allLinks = document.querySelectorAll('.hero-links a');
    console.log('All hero links:', allLinks);
    return;
  }

  const imageUrl = rednoteLink.getAttribute('data-image');
  console.log('REDnote image URL:', imageUrl);
  console.log('Image file should be at:', imageUrl);

  let hoverImage = null;
  let updatePositionHandler = null;

  // 阻止默认链接行为
  rednoteLink.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('REDnote clicked (prevented)');
  });

  rednoteLink.addEventListener('mouseenter', function (e) {
    console.log('=== REDnote mouseenter triggered ===');
    console.log('Event:', e);
    
    if (!hoverImage) {
      console.log('Creating new hover image...');
      hoverImage = document.createElement('img');
      hoverImage.src = imageUrl;
      hoverImage.className = 'rednote-hover-image';
      hoverImage.alt = 'REDnote QR Code';
      
      // 添加加载事件监听
      hoverImage.onload = function() {
        console.log('Image loaded successfully!');
      };
      hoverImage.onerror = function() {
        console.error('Image failed to load!', imageUrl);
      };
      
      console.log('Appending image to body...');
      document.body.appendChild(hoverImage);
      console.log('Image element:', hoverImage);

      updatePositionHandler = () => {
        const rect = rednoteLink.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const top = rect.bottom + scrollTop + 10;
        const left = rect.left + rect.width / 2;
        
        hoverImage.style.top = top + 'px';
        hoverImage.style.left = left + 'px';
        hoverImage.style.transform = 'translateX(-50%)';
        
        console.log('Image positioned at:', { top, left });
      };

      updatePositionHandler();
      
      // 立即显示
      requestAnimationFrame(() => {
        hoverImage.style.opacity = '1';
        console.log('Image opacity set to 1');
      });

      window.addEventListener('scroll', updatePositionHandler);
      window.addEventListener('resize', updatePositionHandler);
    } else {
      console.log('Reusing existing image');
      hoverImage.style.opacity = '1';
      if (updatePositionHandler) {
        updatePositionHandler();
      }
    }
  });

  rednoteLink.addEventListener('mouseleave', function () {
    console.log('REDnote mouseleave triggered');
    if (hoverImage) {
      hoverImage.style.opacity = '0';
      setTimeout(() => {
        if (hoverImage && hoverImage.parentNode) {
          console.log('Removing image from DOM');
          hoverImage.parentNode.removeChild(hoverImage);
          hoverImage = null;
        }
        if (updatePositionHandler) {
          window.removeEventListener('scroll', updatePositionHandler);
          window.removeEventListener('resize', updatePositionHandler);
          updatePositionHandler = null;
        }
      }, 300);
    }
  });
  
  console.log('REDnote hover initialized successfully');
}

// 视差效果
function initParallax() {
  const heroContent = document.querySelector('.hero-content');
  if (!heroContent) return;

  window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.3;

    if (scrolled < window.innerHeight) {
      heroContent.style.transform = `translateY(${rate}px)`;
      heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
  });
}
