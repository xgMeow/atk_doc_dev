<template>
  <div class="atk-architecture-container">
    
    <!-- 标准平台模块 -->
    <div class="module-wrapper">
      <div class="module-hexagon">
        <span class="module-title">标准<br>平台</span>
        <div class="hexagon-glow"></div>
      </div>
      <div class="module-content">
        <div class="content-row">
          <div class="content-item">内核算法库</div>
          <a href="/4.基础使用指南/可视化/二维可视化.html" class="content-item link-item">二维可视化</a>
        </div>
        <div class="content-row">
          <div class="content-item">仿真平台</div>
          <a href="/4.基础使用指南/可视化/三维可视化.html" class="content-item link-item">三维可视化</a>
        </div>
        <div class="content-row">
          <a href="/4.基础使用指南/2-插入对象/" class="content-item link-item">对象管理</a>
          <a href="/5.专业使用指南/17-矢量几何工具.html" class="content-item link-item">矢量几何</a>
        </div>
        <div class="content-row">
          <a href="/4.基础使用指南/0-ATK工作区介绍/01-菜单栏介绍/05-输出.html" class="content-item link-item">图文报告</a>
          <div class="content-item">模型管理</div>
        </div>
      </div>
    </div>

    <!-- 可见性与覆盖模块 -->
    <div class="module-wrapper">
      <div class="module-hexagon">
        <span class="module-title">可见性<br>与覆盖</span>
        <div class="hexagon-glow"></div>
      </div>
      <div class="module-content">
        <div class="content-row">
          <a href="/5.专业使用指南/1-可见性工具.html" class="content-item link-item">可见性分析</a>
          <a href="/5.专业使用指南/9-区域覆盖模块.html" class="content-item link-item">区域覆盖</a>
        </div>
        <div class="content-row">
          <a href="/5.专业使用指南/2-覆盖工具.html" class="content-item link-item">覆盖分析</a>
          <div class="content-item">通信链路</div>
        </div>
      </div>
    </div>

    <!-- 任务分析模块 -->
    <div class="module-wrapper">
      <div class="module-hexagon">
        <span class="module-title">任务<br>分析</span>
        <div class="hexagon-glow"></div>
      </div>
      <div class="module-content">
        <div class="content-row">
          <a href="/5.专业使用指南/5-接近分析工具.html" class="content-item link-item">接近分析</a>
          <a href="/5.专业使用指南/4-批量坐标转换工具.html" class="content-item link-item">批量坐标转换</a>
        </div>
        <div class="content-row">
          <a href="/5.专业使用指南/20-高级接近分析模块.html" class="content-item link-item">高级接近</a>
          <a href="/5.专业使用指南/12-偏差分析.html" class="content-item link-item">偏差分析</a>
        </div>
        <div class="content-row">
          <a href="/5.专业使用指南/19-发射窗口接近分析工具.html" class="content-item link-item">发射窗口接近</a>
          <a href="/5.专业使用指南/16-寿命预报模块.html" class="content-item link-item">寿命预报</a>
        </div>
        <div class="content-row">
          <a href="/5.专业使用指南/6-碰撞规避工具.html" class="content-item link-item">碰撞规避</a>
          <a href="/4.基础使用指南/2-插入对象/10-对象属性/卫星系统.html" class="content-item link-item">卫星系统</a>
        </div>
      </div>
    </div>

    <!-- 轨道设计模块 -->
    <div class="module-wrapper">
      <div class="module-hexagon">
        <span class="module-title">轨道<br>设计</span>
        <div class="hexagon-glow"></div>
      </div>
      <div class="module-content">
        <div class="content-row">
          <a href="/5.专业使用指南/3-轨道机动规划工具/" class="content-item link-item">机动规划</a>
          <a href="/5.专业使用指南/11-高级星座设计功能模块.html" class="content-item link-item">高级星座</a>
        </div>
        <div class="content-row">
          <a href="/5.专业使用指南/13-RPO功能模块.html" class="content-item link-item">RPO工具</a>
          <a href="/5.专业使用指南/10-巨型星座设计模块.html" class="content-item link-item">巨型星座</a>
        </div>
        <div class="content-row">
          <a href="/5.专业使用指南/7-星座设计工具.html" class="content-item link-item">星座设计</a>
        </div>
      </div>
    </div>

    <!-- 二次开发模块 -->
    <div class="module-wrapper">
      <div class="module-hexagon">
        <span class="module-title">二次<br>开发</span>
        <div class="hexagon-glow"></div>
      </div>
      <div class="module-content">
        <div class="content-row">
          <a href="/二次开发教程/4-二次开发COMPONENT模式/" class="content-item link-item">ATK.Component</a>
          <a href="/二次开发教程/3-MBSE接口/" class="content-item link-item">ATK.MBSE</a>
        </div>
        <div class="content-row">
          <a href="/二次开发教程/2-二次开发CONNECT模式/" class="content-item link-item">ATK.Connect</a>
          <a href="/5.专业使用指南/18-脚本工具/" class="content-item link-item">内置脚本</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 无额外逻辑，纯展示组件
</script>

<style scoped>
/* ==================== 全局容器 ==================== */
.atk-architecture-container {
  width: 85%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px 24px;
  font-family: "Microsoft YaHei", -apple-system, BlinkMacSystemFont, sans-serif;
}

/* ==================== 模块包装器 ==================== */
.module-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 36px;
  position: relative;
}

/* ==================== 六边形模块标题 ==================== */
.module-hexagon {
  width: 130px;
  height: 75px;
  background: linear-gradient(135deg, #1e3a8a 0%, #1551a3 50%, #1d4ed8 100%);
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  text-align: center;
  letter-spacing: 0.5px;
  box-shadow: 
    0 4px 12px rgba(21, 81, 163, 0.3),
    0 8px 24px rgba(21, 81, 163, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.module-hexagon:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 
    0 8px 20px rgba(21, 81, 163, 0.4),
    0 16px 40px rgba(21, 81, 163, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

/* 六边形上下三角 */
.module-hexagon::before,
.module-hexagon::after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 65px solid transparent;
  border-right: 65px solid transparent;
}

.module-hexagon::before {
  bottom: 100%;
  border-bottom: 37.5px solid #1551a3;
  filter: brightness(1.1);
}

.module-hexagon::after {
  top: 100%;
  border-top: 37.5px solid #1551a3;
  filter: brightness(0.95);
}

/* 六边形光晕效果 */
.hexagon-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: radial-gradient(ellipse at center, rgba(0, 161, 233, 0.15) 0%, transparent 70%);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.module-hexagon:hover .hexagon-glow {
  opacity: 1;
}

/* ==================== 虚线连接框 ==================== */
.module-content {
  flex: 1;
  margin-left: 24px;
  padding: 28px 32px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.95) 100%);
  border: 2px dashed #00a1e9;
  border-radius: 16px;
  position: relative;
  z-index: 1;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.04),
    0 4px 16px rgba(0, 0, 0, 0.02),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
}

.module-content:hover {
  border-color: #0891b2;
  box-shadow: 
    0 4px 12px rgba(0, 161, 233, 0.1),
    0 8px 24px rgba(0, 161, 233, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

/* ==================== 内容行 ==================== */
.content-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 16px;
}

.content-row:last-child {
  margin-bottom: 0;
}

/* ==================== 内容项 ==================== */
.content-item {
  width: calc(50% - 8px);
  padding: 10px 18px;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, transparent 100%);
  border-radius: 8px;
  font-size: 17px;
  color: #1e293b;
  font-weight: 600;
  text-align: left;
  border: 1px solid transparent;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

/* 微光泽效果 */
.content-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  transition: left 0.5s ease;
}

.content-item:hover::before {
  left: 100%;
}

/* ==================== 链接项 ==================== */
.link-item {
  text-decoration: none;
  color: #1551a3;
  cursor: pointer;
  position: relative;
}

.link-item:hover {
  background: linear-gradient(135deg, #1551a3 0%, #0369a1 50%, #0891b2 100%);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 
    0 4px 12px rgba(21, 81, 163, 0.25),
    0 2px 4px rgba(21, 81, 163, 0.1);
}

/* 链接箭头指示 */
.link-item::after {
  content: '→';
  position: absolute;
  right: 12px;
  opacity: 0;
  transform: translateX(-8px);
  transition: all 0.3s ease;
}

.link-item:hover::after {
  opacity: 1;
  transform: translateX(0);
}

/* ==================== 响应式适配 ==================== */
@media (max-width: 900px) {
  .atk-architecture-container {
    width: 95%;
    padding: 24px 16px;
  }
  
  .module-wrapper {
    flex-direction: column;
    align-items: flex-start;
  }

  .module-content {
    margin-left: 0;
    margin-top: 20px;
    width: 100%;
    padding: 20px 24px;
  }

  .content-item {
    font-size: 15px;
    padding: 8px 14px;
  }
  
  .module-hexagon {
    width: 110px;
    height: 63.5px;
    font-size: 18px;
  }
  
  .module-hexagon::before,
  .module-hexagon::after {
    border-left-width: 55px;
    border-right-width: 55px;
  }
  
  .module-hexagon::before {
    border-bottom-width: 31.75px;
  }
  
  .module-hexagon::after {
    border-top-width: 31.75px;
  }
}

@media (max-width: 600px) {
  .content-row {
    flex-direction: column;
    gap: 10px;
  }
  
  .content-item {
    width: 100%;
  }
}
</style>
