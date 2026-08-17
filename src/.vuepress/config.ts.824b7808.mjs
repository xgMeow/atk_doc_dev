// .vuepress/shared/config.js
var repo = typeof process !== "undefined" && process.env ? process.env.GITHUB_REPOSITORY?.split("/")[1] : void 0;
var siteBase = repo ? `/${repo}/` : "/";

// .vuepress/config.ts
import { defineUserConfig } from "vuepress";

// .vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// .vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var useNavbar = ({ type }) => {
  let standalone = type == "standalone";
  let gitlab = type == "gitlab";
  return navbar([
    { text: "\u5E2E\u52A9\u6587\u6863", link: "/" },
    { text: "\u4E8C\u6B21\u5F00\u53D1\u6559\u7A0B", link: "/\u4E8C\u6B21\u5F00\u53D1\u6559\u7A0B/" },
    { text: "\u7EFC\u5408\u6848\u4F8B", link: "/\u7EFC\u5408\u6848\u4F8B/" }
  ]);
};

// .vuepress/sidebar.ts
import { sidebar } from "vuepress-theme-hope";
var sidebar_default = sidebar({
  "/\u7EFC\u5408\u6848\u4F8B/": "structure",
  "/\u4E8C\u6B21\u5F00\u53D1\u6559\u7A0B/": "structure",
  "/": [
    // "",
    {
      text: "\u5B89\u88C5",
      prefix: "01-\u5B89\u88C5/",
      children: "structure",
      collapsible: true
    },
    {
      text: "\u6848\u4F8B\u6559\u7A0B",
      prefix: "02-\u6848\u4F8B\u6559\u7A0B/",
      children: "structure",
      collapsible: true
    },
    {
      text: "\u57FA\u7840\u4F7F\u7528\u6307\u5357",
      prefix: "03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/",
      children: "structure",
      collapsible: true
    },
    {
      text: "\u7406\u8BBA\u57FA\u7840",
      prefix: "04-\u7406\u8BBA\u57FA\u7840/",
      children: "structure",
      collapsible: true
    },
    {
      text: "\u4E13\u4E1A\u4F7F\u7528\u6307\u5357",
      prefix: "5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/",
      children: "structure",
      collapsible: true
    },
    {
      text: "\u53D8\u66F4\u4E0E\u652F\u6301",
      prefix: "\u53D1\u5E03\u8BF4\u660E/",
      children: "structure",
      collapsible: true
    }
  ]
});

// .vuepress/redirect.ts
var redirect_default = {
  // 给ATK界面用的重定向网页，需要给ATK提供`/topics/`后面的关键词，界面点击`帮助`即可跳转到相应的界面
  config: {
    // 高级工具（路径尽可能短一点，将ProfessionalTools改为Tool，下面这些不动了，也别添加新的了）
    "/topics/ProfessionalTools/Access": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/01-\u53EF\u89C1\u6027\u4E0E\u8986\u76D6\u5206\u6790/01-\u53EF\u89C1\u6027\u5DE5\u5177.html",
    //在工具-可见性弹出的右下角增加“help”按钮 
    "/topics/ProfessionalTools/Coverage": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/01-\u53EF\u89C1\u6027\u4E0E\u8986\u76D6\u5206\u6790/02-\u8986\u76D6\u6027\u5DE5\u5177.html",
    //在工具-覆盖性弹出的右下角增加“help”按钮 
    "/topics/ProfessionalTools/BatchedCoordTransformation": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/04-\u6279\u91CF\u5750\u6807\u8F6C\u6362\u5DE5\u5177.html",
    //在工具-批量坐标转换弹出的右下角增加“help”按钮 
    "/topics/ProfessionalTools/CAT": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/07-\u63A5\u8FD1\u5206\u6790.html",
    //在工具-接近分析弹出的右下角增加“help”按钮 
    "/topics/ProfessionalTools/CamSafetyAnalysis": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/08-\u78B0\u649E\u89C4\u907F.html",
    //在工具-碰撞规避弹出的右下角增加“help”按钮 
    "/topics/ProfessionalTools/ConstellationAnalysis": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/05-\u661F\u5EA7\u8BBE\u8BA1\u5DE5\u5177.html",
    //在工具-星座设计弹出的右下角增加“help”按钮 
    "/topics/ProfessionalTools/RegionCoverage": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/01-\u53EF\u89C1\u6027\u4E0E\u8986\u76D6\u5206\u6790/03-\u533A\u57DF\u8986\u76D6\u5206\u6790.html",
    //在工具-区域覆盖弹出的右下角增加“help”按钮 
    "/topics/ProfessionalTools/CUiConstellationDesign": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/06-\u9AD8\u7EA7\u661F\u5EA7\u8BBE\u8BA1.html",
    //在工具-高级星座设计弹出的右下角增加“help”按钮 
    "/topics/ProfessionalTools/Maneuer": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/13-\u8F68\u9053\u673A\u52A8\u89C4\u5212\u5DE5\u5177/1-\u673A\u52A8\u89C4\u5212\u529F\u80FD\u4ECB\u7ECD.html",
    //在工具-机动分析弹出的右下角增加“help”按钮 
    "/topics/ProfessionalTools/ReentryRecovery": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/09-\u518D\u5165\u56DE\u6536\u5206\u6790.html",
    //在工具-再入回收弹出的右下角增加“help”按钮 
    "/topics/ProfessionalTools/LifeTime": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/11-\u536B\u661F\u5DE5\u5177/16-\u5BFF\u547D\u9884\u62A5\u6A21\u5757.html",
    //在工具-寿命预报弹出的右下角增加“help”按钮 
    "/topics/ProfessionalTools/VectorGeometryTool": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/10-\u77E2\u91CF\u51E0\u4F55\u5DE5\u5177.html",
    //在工具-矢量几何工具弹出的右下角增加“help”按钮 
    "/topics/ProfessionalTools/ScriptTool": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/18-\u811A\u672C\u5DE5\u5177/1-\u811A\u672C\u5DE5\u5177.html",
    // 工具
    "/topics/Tool/Access": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/01-\u53EF\u89C1\u6027\u4E0E\u8986\u76D6\u5206\u6790/01-\u53EF\u89C1\u6027\u5DE5\u5177.html",
    //在工具-可见性弹出的右下角增加“help”按钮 
    "/topics/Tool/Coverage": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/01-\u53EF\u89C1\u6027\u4E0E\u8986\u76D6\u5206\u6790/02-\u8986\u76D6\u6027\u5DE5\u5177.html",
    //在工具-覆盖性弹出的右下角增加“help”按钮 
    "/topics/Tool/BatchedCoordTransformation": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/04-\u6279\u91CF\u5750\u6807\u8F6C\u6362\u5DE5\u5177.html",
    //在工具-批量坐标转换弹出的右下角增加“help”按钮 
    "/topics/Tool/CAT": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/07-\u63A5\u8FD1\u5206\u6790.html",
    //在工具-接近分析弹出的右下角增加“help”按钮 
    "/topics/Tool/CamSafetyAnalysis": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/08-\u78B0\u649E\u89C4\u907F.html",
    //在工具-碰撞规避弹出的右下角增加“help”按钮 
    "/topics/Tool/ConstellationAnalysis": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/05-\u661F\u5EA7\u8BBE\u8BA1\u5DE5\u5177.html",
    //在工具-星座设计弹出的右下角增加“help”按钮 
    "/topics/Tool/RegionCoverage": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/01-\u53EF\u89C1\u6027\u4E0E\u8986\u76D6\u5206\u6790/03-\u533A\u57DF\u8986\u76D6\u5206\u6790.html",
    //在工具-区域覆盖弹出的右下角增加“help”按钮 
    "/topics/Tool/CUiConstellationDesign": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/06-\u9AD8\u7EA7\u661F\u5EA7\u8BBE\u8BA1.html",
    //在工具-高级星座设计弹出的右下角增加“help”按钮 
    "/topics/Tool/Maneuer": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/13-\u8F68\u9053\u673A\u52A8\u89C4\u5212\u5DE5\u5177/1-\u673A\u52A8\u89C4\u5212\u529F\u80FD\u4ECB\u7ECD.html",
    //在工具-机动分析弹出的右下角增加“help”按钮 
    "/topics/Tool/ReentryRecovery": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/09-\u518D\u5165\u56DE\u6536\u5206\u6790.html",
    //在工具-再入回收弹出的右下角增加“help”按钮 
    "/topics/Tool/LifeTime": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/11-\u536B\u661F\u5DE5\u5177/16-\u5BFF\u547D\u9884\u62A5\u6A21\u5757.html",
    //在工具-寿命预报弹出的右下角增加“help”按钮 
    "/topics/Tool/VectorGeometryTool": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/10-\u77E2\u91CF\u51E0\u4F55\u5DE5\u5177.html",
    //在工具-矢量几何工具弹出的右下角增加“help”按钮 
    "/topics/Tool/ScriptTool": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/18-\u811A\u672C\u5DE5\u5177/1-\u811A\u672C\u5DE5\u5177.html",
    "/topics/Tool/LWCAT": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/19-\u53D1\u5C04\u7A97\u53E3\u63A5\u8FD1\u5206\u6790\u5DE5\u5177.html",
    //在工具-发射窗口接近分析弹出的右下角增加“help”按钮
    "/topics/Tool/AdvCAT/Main": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/05-\u9AD8\u7EA7\u63A5\u8FD1\u5206\u6790.html#\u4E3B\u914D\u7F6E\u754C\u9762",
    //在对象-高级接近分析主配置界面，右下角的“help”按钮
    "/topics/Tool/AdvCAT/Advanced": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/05-\u9AD8\u7EA7\u63A5\u8FD1\u5206\u6790.html#\u9AD8\u7EA7\u754C\u9762",
    //在对象-高级接近分析高级界面，右下角的“help”按钮
    "/topics/Tool/AdvCAT/Nonelinear": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/05-\u9AD8\u7EA7\u63A5\u8FD1\u5206\u6790.html#\u975E\u7EBF\u6027\u8BA1\u7B97\u754C\u9762",
    //在对象-高级接近分析非线性计算界面，右下角的“help”按钮
    "/topics/Tool/AdvCAT/Display": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/05-\u9AD8\u7EA7\u63A5\u8FD1\u5206\u6790.html#\u663E\u793A\u754C\u9762",
    //在对象-高级接近分析显示界面，右下角的“help”按钮
    "/topics/Tool/LaserCAT": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/21-\u6FC0\u5149\u63A5\u8FD1\u5206\u6790\u5DE5\u5177.html",
    //在工具-激光接近分析弹出的右下角增加“help”按钮
    // 机动规划 AstroMaster
    "/topics/AstroMaster/InitialState": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/13-\u8F68\u9053\u673A\u52A8\u89C4\u5212\u5DE5\u5177/2-\u521D\u59CB\u6BB5.html",
    "/topics/AstroMaster/Maneuver": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/13-\u8F68\u9053\u673A\u52A8\u89C4\u5212\u5DE5\u5177/4-\u673A\u52A8\u6BB5.html",
    "/topics/AstroMaster/Propagate": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/13-\u8F68\u9053\u673A\u52A8\u89C4\u5212\u5DE5\u5177/5-\u9884\u62A5\u6BB5.html",
    "/topics/AstroMaster/Follow": "/5.\u4E13\u4E1A\u4F7F\u7528\u6307\u5357/13-\u8F68\u9053\u673A\u52A8\u89C4\u5212\u5DE5\u5177/6-\u8DDF\u968F\u6BB5.html",
    // ATK对象
    "/topics/Objects/Satellite/index": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/02-\u5C5E\u6027\u914D\u7F6E/\u536B\u661F.html",
    //卫星-属性；右下角的“help”按钮 
    "/topics/Objects/Satellite/Orbit": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/02-\u5C5E\u6027\u914D\u7F6E/\u536B\u661F.html#\u8F68\u9053",
    //卫星-属性-点击轨道后；右下角的“help”按钮 
    "/topics/Objects/Satellite/Attitude": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/02-\u5C5E\u6027\u914D\u7F6E/\u536B\u661F.html#\u59FF\u6001",
    //卫星-属性-点击姿态后；右下角的“help”按钮 
    "/topics/Objects/Satellite/Mass": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/02-\u5C5E\u6027\u914D\u7F6E/\u536B\u661F.html#\u8D28\u91CF",
    //卫星-属性-点击质量后；右下角的“help”按钮 
    "/topics/Objects/Satellite/PassBreak": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/02-\u5C5E\u6027\u914D\u7F6E/\u536B\u661F.html#\u8F68\u9053\u5708\u6570",
    //卫星-属性-点击轨道圈数后；右下角的“help”按钮 
    "/topics/Objects/Satellite/2DGraphics": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/02-\u5C5E\u6027\u914D\u7F6E/\u536B\u661F.html#\u4E8C\u7EF4\u89C6\u56FE",
    //卫星-属性-点击二维视图及其下属后；右下角的“help”按钮 
    "/topics/Objects/Satellite/3DGraphics": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/02-\u5C5E\u6027\u914D\u7F6E/\u536B\u661F.html#\u4E09\u7EF4\u89C6\u56FE",
    //卫星-属性-点击三维视图及其下属后；右下角的“help”按钮 
    "/topics/Objects/Satellite/Constraints": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/02-\u5C5E\u6027\u914D\u7F6E/\u536B\u661F.html#\u7EA6\u675F",
    //卫星-属性-点击约束后；右下角的“help”按钮 
    "/topics/Objects/Satellite/OrbitPlanning": "/02-\u6848\u4F8B\u6559\u7A0B/3.4\u8F68\u9053\u673A\u52A8\u89C4\u5212\u5DE5\u5177\u6848\u4F8B/3.4.1\u970D\u66FC\u8F6C\u79FB.html",
    //卫星属性-轨道-轨道预报器：机动规划；右下角的“help”按钮 
    "/topics/Objects/Satellite/OrbitPlanningRPO": "/02-\u6848\u4F8B\u6559\u7A0B/12-RPO\u6848\u4F8B.html",
    //卫星属性-轨道-轨道预报器-机动规划-选中RPO后；右下角的“help”按钮 
    "/topics/Objects/Satellite/AstroUq": "/02-\u6848\u4F8B\u6559\u7A0B/13-\u504F\u5DEE\u5206\u6790\u6848\u4F8B.html",
    //卫星属性-轨道-轨道预报器-偏差分析；右下角的“help”按钮
    "/topics/Objects/Facility": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/02-\u5C5E\u6027\u914D\u7F6E/\u5730\u9762\u7AD9.html",
    //地面站-属性；右下角的“help”按钮 
    "/topics/Objects/Sensor": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/02-\u5C5E\u6027\u914D\u7F6E/\u4F20\u611F\u5668.html",
    //传感器-属性；右下角的“help”按钮 
    "/topics/Objects/Receiver": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/02-\u5C5E\u6027\u914D\u7F6E/\u63A5\u6536\u5668.html",
    //接收器-属性；右下角的“help”按钮 
    "/topics/Objects/Transmitter": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/02-\u5C5E\u6027\u914D\u7F6E/\u53D1\u5C04\u5668.html",
    //发射器-属性；右下角的“help”按钮 
    "/topics/Objects/SatelliteCollection": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/02-\u5C5E\u6027\u914D\u7F6E/\u536B\u661F\u96C6\u7FA4.html",
    //卫星集群-属性：右下角的“help”按钮 
    "/topics/Objects/CoverageDefinition": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/02-\u5C5E\u6027\u914D\u7F6E/\u8986\u76D6\u5B9A\u4E49.html",
    //覆盖定义-属性：右下角的“help”按钮 
    "/topics/Scenario/CoverageDefinition": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/02-\u573A\u666F\u7BA1\u7406/03-\u573A\u666F\u5C5E\u6027\u914D\u7F6E/",
    //场景-属性：右下角的“help”按钮
    "/topics/Intergrating/Client": "/\u4E8C\u6B21\u5F00\u53D1\u6559\u7A0B/2-\u4E8C\u6B21\u5F00\u53D1CONNECT\u6A21\u5F0F/1-ATK\u5BA2\u6237\u7AEF.html",
    "/topics/Intergrating/Introduction": "/\u4E8C\u6B21\u5F00\u53D1\u6559\u7A0B/1-\u4E8C\u6B21\u5F00\u53D1\u4ECB\u7ECD.html",
    "/topics/Release/ChangeLog": "/\u53D1\u5E03\u8BF4\u660E/\u53D1\u5E03\u8BF4\u660E.html",
    "/topics/Attitude/AttitudeFixedInAxes": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/06-\u59FF\u6001\u5B9A\u4E49/1-\u56FA\u5B9A\u59FF\u6001.html",
    "/topics/Attitude/AttitudeFixedInCBF": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/06-\u59FF\u6001\u5B9A\u4E49/2-\u56FA\u5B9A\u4E8E\u5929\u4F53\u56FA\u5B9A\u7CFB\u59FF\u6001.html",
    "/topics/Attitude/AttitudeFixedInCBI": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/06-\u59FF\u6001\u5B9A\u4E49/3-\u56FA\u5B9A\u4E8E\u5929\u4F53\u60EF\u6027\u7CFB\u59FF\u6001.html",
    "/topics/Attitude/AttitudeAlignedConstrained": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/06-\u59FF\u6001\u5B9A\u4E49/4-\u5BF9\u9F50\u7EA6\u675F\u59FF\u6001.html",
    "/topics/Attitude/AttitudeMutilSegment": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/06-\u59FF\u6001\u5B9A\u4E49/5-\u591A\u5206\u6BB5\u59FF\u6001.html",
    "/topics/Attitude/AttitudeRealTime": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/06-\u59FF\u6001\u5B9A\u4E49/6-\u5B9E\u65F6\u59FF\u6001.html",
    "/topics/Attitude/AttitudeSTKAttitude": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/06-\u59FF\u6001\u5B9A\u4E49/7-STK\u6587\u4EF6\u59FF\u6001.html",
    "/topics/Attitude/AttitudeSpinning": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/06-\u59FF\u6001\u5B9A\u4E49/9-\u65CB\u8F6C\u59FF\u6001.html",
    "/topics/Attitude/AttitudeTargetPointing": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/06-\u59FF\u6001\u5B9A\u4E49/10-\u76EE\u6807\u6307\u5411\u59FF\u6001.html",
    "/topics/Attitude/AttitudeVVLHCBI": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/06-\u59FF\u6001\u5B9A\u4E49/12-\u60EF\u6027\u7CFBVVLH\u59FF\u6001.html",
    "/topics/Attitude/AttitudeVVLHCBF": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/06-\u59FF\u6001\u5B9A\u4E49/13-\u56FA\u8FDE\u7CFBVVLH\u59FF\u6001.html",
    "/topics/Attitude/AttitudeEcfAligndVel": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/06-\u59FF\u6001\u5B9A\u4E49/15-ECF\u5BF9\u901F\u5EA6\u5B9A\u5411.html",
    "/topics/Attitude/AttitudeEciAligndVel": "/03-\u57FA\u7840\u4F7F\u7528\u6307\u5357/03-\u5BF9\u8C61\u7BA1\u7406/06-\u59FF\u6001\u5B9A\u4E49/16-ECI\u5BF9\u901F\u5EA6\u5B9A\u5411.html"
  }
};

// .vuepress/theme.ts
var useHopeTheme = ({ type, plat = "" }) => {
  let standalone = type == "standalone";
  let gitlab = type == "gitlab";
  let kylin = plat == "kylin";
  return hopeTheme(
    {
      // 是否显示打印按钮
      print: true,
      //pure: true,
      darkmode: "disable",
      //"toggle",
      // 全屏按钮
      // fullscreen: true,
      // 当前网站部署到的域名
      hostname: "https://atkdocs.smsat.space",
      author: {
        name: "\u56FD\u9632\u79D1\u6280\u5927\u5B66\u7A7A\u5929\u79D1\u5B66\u5B66\u9662",
        email: "atk_nudt@163.com"
      },
      // iconAssets: "fontawesome-with-brands",
      logo: "/images/logoDark.png",
      logoDark: "/images/logoDark.png",
      // 用于在导航栏中显示仓库链接
      repo: "https://gitcode.com/jinke18/atk-doc",
      docsDir: "/",
      docsRepo: gitlab ? "http://192.168.0.254:8899/jinke18/atk-doc" : "https://gitcode.com/jinke18/atk-doc",
      docsBranch: gitlab ? "dev" : "master",
      editLinkPattern: gitlab ? "http://192.168.0.254:8899/-/ide/project/jinke18/atk-doc/tree/:branch/-/:path" : ":repo/edit/:branch/:path",
      editLink: true,
      // 导航栏
      navbar: useNavbar({ type }),
      sidebarSorter: ["readme", "order", "filename", "title"],
      // 侧边栏
      sidebar: sidebar_default,
      // 页脚
      footer: "\u52A0\u5FEB\u5DE5\u4E1A\u8F6F\u4EF6\u56FD\u4EA7\u5316\uFF0C\u670D\u52A1\u822A\u5929\u5F3A\u56FD\u5EFA\u8BBE",
      displayFooter: true,
      // 加密配置
      // encrypt: {
      //   config: {
      //     "/demo/encrypt.html": ["1234"],
      //   },
      // },
      // 多语言配置
      // 页面信息配置：隐藏作者(Author)和写作日期(Date)，只显示分类、标签、阅读时间、字数
      pageInfo: ["Category", "Tag", "ReadingTime", "Word"],
      metaLocales: {
        /**
         * 编辑此页文字
         */
        // TOC标题
        toc: "\u672C\u6587\u76EE\u5F55",
        lastUpdated: "\u6700\u540E\u66F4\u65B0"
        // 修改更新时间显示文字，原来是"上次编辑于"
        // editLink: "在 GitHub 上编辑此页",
      },
      // TOC目录配置 - 显示h2-h6级标题
      toc: {
        levels: "deep",
        selector: ".theme-hope-content > h2, .theme-hope-content > h3, .theme-hope-content > h4, .theme-hope-content > h5, .theme-hope-content > h6"
      },
      // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
      // hotReload: true,
      // 在这里配置主题提供的插件
      plugins: {
        redirect: redirect_default,
        // 注意: 仅用于测试! 你必须自行生成并在生产环境中使用自己的评论服务
        // comment: {
        //   provider: "Giscus",
        //   repo: "vuepress-theme-hope/giscus-discussions",
        //   repoId: "R_kgDOG_Pt2A",
        //   category: "Announcements",
        //   categoryId: "DIC_kwDOG_Pt2M4COD69",
        // },
        git: {
          // Git 信息配置：隐藏写作日期和贡献者，保留更新时间
          createdTime: false,
          // 隐藏标题下的写作日期
          contributors: false,
          // 隐藏文章底部的贡献者
          updatedTime: true
          // 保留最后更新时间
        },
        seo: !standalone,
        sitemap: !standalone,
        readingTime: false,
        // 开启搜索
        searchPro: kylin ? false : {
          autoSuggestions: false,
          queryHistoryCount: 5,
          resultHistoryCount: 5,
          indexContent: false,
          worker: `atk-search.worker.js`
        },
        search: !!kylin,
        components: {
          components: ["Badge", "VPCard"]
        },
        // 此处开启了很多功能用于演示，你应仅保留用到的功能。
        mdEnhance: {
          align: true,
          attrs: true,
          codetabs: true,
          component: true,
          demo: true,
          figure: true,
          imgLazyload: true,
          imgSize: true,
          //imgMark: true,
          include: true,
          mark: true,
          stylize: [
            {
              matcher: "Recommended",
              replacer: ({ tag }) => {
                if (tag === "em")
                  return {
                    tag: "Badge",
                    attrs: { type: "tip" },
                    content: "Recommended"
                  };
              }
            }
          ],
          sub: true,
          sup: true,
          tabs: true,
          tasklist: true,
          vPre: true,
          // 在启用之前安装 chart.js
          // chart: true,
          // insert component easily
          // 在启用之前安装 echarts
          // echarts: true,
          // 在启用之前安装 flowchart.ts
          // flowchart: true,
          // gfm requires mathjax-full to provide tex support
          gfm: true,
          // 在启用之前安装 katex
          // katex: true,
          // 在启用之前安装 mathjax-full
          mathjax: {
            tex: {
              tags: "all"
            }
          }
          // 在启用之前安装 mermaid
          // mermaid: true,
          // playground: {
          //   presets: ["ts", "vue"],
          // },
          // 在启用之前安装 reveal.js
          // revealJs: {
          //   plugins: ["highlight", "math", "search", "notes", "zoom"],
          // },
          // 在启用之前安装 @vue/repl
          // vuePlayground: true,
          // install sandpack-vue3 before enabling it
          // sandpack: true,
        }
        // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
        // pwa: {
        //   favicon: "/favicon.ico",
        //   cacheHTML: true,
        //   cachePic: true,
        //   appendBase: true,
        //   apple: {
        //     icon: "/assets/icon/apple-icon-152.png",
        //     statusBarColor: "black",
        //   },
        //   msTile: {
        //     image: "/assets/icon/ms-icon-144.png",
        //     color: "#ffffff",
        //   },
        //   manifest: {
        //     icons: [
        //       {
        //         src: "/assets/icon/chrome-mask-512.png",
        //         sizes: "512x512",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-mask-192.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-512.png",
        //         sizes: "512x512",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-192.png",
        //         sizes: "192x192",
        //         type: "image/png",
        //       },
        //     ],
        //     shortcuts: [
        //       {
        //         name: "Demo",
        //         short_name: "Demo",
        //         url: "/demo/",
        //         icons: [
        //           {
        //             src: "/assets/icon/guide-maskable.png",
        //             sizes: "192x192",
        //             purpose: "maskable",
        //             type: "image/png",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // },
      }
    },
    // behavior
    {
      custom: true
    }
  );
};

// .vuepress/bundler-standalone/index.js
import {
  colors,
  debug,
  fs as fs5,
  importFileDefault,
  withSpinner
} from "@vuepress/utils";
import webpack2 from "webpack";
import { merge } from "webpack-merge";
import { createRequire as createRequire6 } from "module";
import { fs as fs3 } from "@vuepress/utils";
import CopyWebpackPlugin from "copy-webpack-plugin";
import MiniCssExtractPlugin2 from "mini-css-extract-plugin";
import Config from "webpack-chain";
import { fs } from "@vuepress/utils";
import { createRequire } from "module";
import { createRequire as createRequire2 } from "module";
import autoprefixer from "autoprefixer";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import postcssCsso from "postcss-csso";
import { createRequire as createRequire3 } from "module";
import { createRequire as createRequire4 } from "module";
import { VueLoaderPlugin } from "vue-loader";
import { createRequire as createRequire5 } from "module";
import webpack from "webpack";
import { fs as fs2 } from "@vuepress/utils";
import { createRequire as createRequire7 } from "module";
import { fs as fs4, renderHead } from "@vuepress/utils";
import { ssrContextKey } from "vue";
import { path } from "@vuepress/utils";
import { colors as colors2, logger, ora } from "@vuepress/utils";
import webpack4 from "webpack";
import WebpackDevServer from "webpack-dev-server";
import HtmlPlugin from "html-webpack-plugin";
import webpack3 from "webpack";
import { sep } from "path";
import { path as path2 } from "@vuepress/utils";
var __vite_injected_original_import_meta_url = "file:///F:/moneyProject/ATK/smsat/atk-doc/.vuepress/bundler-standalone/index.js";
var resolveWebpackConfig = ({
  config,
  options,
  isServer,
  isBuild
}) => {
  options.chainWebpack?.(config, isServer, isBuild);
  const webpackConfig = config.toConfig();
  const configureWebpackResult = options.configureWebpack?.(
    webpackConfig,
    isServer,
    isBuild
  );
  if (configureWebpackResult) {
    return merge(webpackConfig, configureWebpackResult);
  }
  return webpackConfig;
};
var handleDevtool = ({
  app,
  config,
  isBuild
}) => {
  if (app.env.isDebug) {
    config.devtool("source-map");
  } else if (!isBuild) {
    config.devtool("eval-cheap-module-source-map");
  }
};
var handleEntry = ({
  app,
  config
}) => {
  config.entry("app").add(
    app.dir.client(
      fs.readJsonSync(app.dir.client("package.json")).exports["./app"]
    )
  );
};
var handleMode = ({
  app,
  config,
  isBuild
}) => {
  config.mode(!isBuild || app.env.isDebug ? "development" : "production");
};
var handleModuleAssets = ({
  app,
  config
}) => {
  config.module.rule("images").test(/\.(png|jpe?g|gif|webp|bmp|ico)(\?.*)?$/).type("asset").set("generator", {
    filename: "assets/img/[name].[contenthash:8][ext]"
  });
  config.module.rule("svg").test(/\.(svg)(\?.*)?$/).type("asset/resource").set("generator", {
    filename: "assets/img/[name].[contenthash:8][ext]"
  });
  config.module.rule("media").test(/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/).type("asset/resource").set("generator", {
    filename: "assets/media/[name].[contenthash:8][ext]"
  });
  config.module.rule("fonts").test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i).type("asset/resource").set("generator", {
    filename: "assets/fonts/[name].[contenthash:8][ext]"
  });
};
var resolveEsbuildJsxOptions = () => ({
  jsxFactory: "jsx",
  jsxFragment: "Fragment"
});
var require2 = createRequire(__vite_injected_original_import_meta_url);
var handleModuleJs = ({
  options,
  config,
  isBuild,
  isServer
}) => {
  if (options.evergreen !== false || !isBuild || isServer) {
    return;
  }
  config.module.rule("js").test(/\.jsx?$/).exclude.add((filePath) => {
    if (/\.vue\.jsx?$/.test(filePath)) {
      return false;
    }
    if (/(@vuepress[/\\][^/\\]*|vuepress-[^/\\]*)[/\\](?!node_modules).*\.js$/.test(
      filePath
    )) {
      return false;
    }
    return /node_modules/.test(filePath);
  }).end().use("esbuild-loader").loader(require2.resolve("esbuild-loader")).options({
    target: "es2015",
    ...resolveEsbuildJsxOptions()
  }).end();
};
var handleModulePug = ({ config }) => {
  config.module.rule("pug").test(/\.pug$/).use("pug-plain-loader").loader("pug-plain-loader");
};
var require3 = createRequire2(__vite_injected_original_import_meta_url);
var handleModuleStyles = ({
  options,
  config,
  isBuild,
  isServer
}) => {
  const createStyleRules = ({
    lang,
    test
  }) => {
    const baseRule = config.module.rule(lang).test(test);
    const modulesRule = baseRule.oneOf("modules").resourceQuery(/module/);
    const normalRule = baseRule.oneOf("normal");
    return {
      modulesRule,
      normalRule
    };
  };
  const applyStyleHandlers = ({
    rule,
    cssModules,
    loaderName,
    loaderOptions = {}
  }) => {
    if (!isServer) {
      if (isBuild) {
        rule.use("extract-css-loader").loader(MiniCssExtractPlugin.loader);
      } else {
        rule.use("style-loader").loader(require3.resolve("style-loader"));
      }
    }
    rule.use("css-loader").loader(require3.resolve("css-loader")).options({
      modules: cssModules ? {
        localIdentName: `[local]_[contenthash:base64:8]`,
        exportOnlyLocals: isServer
      } : false,
      importLoaders: 1
    });
    rule.use("postcss-loader").loader(require3.resolve("postcss-loader")).options({
      postcssOptions: {
        plugins: [autoprefixer, postcssCsso]
      },
      ...options.postcss
    });
    if (loaderName) {
      rule.use(loaderName).loader(loaderName).options(loaderOptions);
    }
  };
  const handleStyle = ({
    lang,
    test,
    loaderName,
    loaderOptions
  }) => {
    const { modulesRule, normalRule } = createStyleRules({
      lang,
      test
    });
    applyStyleHandlers({
      rule: modulesRule,
      cssModules: true,
      loaderName,
      loaderOptions
    });
    applyStyleHandlers({
      rule: normalRule,
      cssModules: false,
      loaderName,
      loaderOptions
    });
  };
  handleStyle({
    lang: "css",
    test: /\.css$/
  });
  handleStyle({
    lang: "postcss",
    test: /\.p(ost)?css$/
  });
  handleStyle({
    lang: "scss",
    test: /\.scss$/,
    loaderName: "sass-loader",
    loaderOptions: options.scss
  });
  handleStyle({
    lang: "sass",
    test: /\.sass$/,
    loaderName: "sass-loader",
    loaderOptions: options.sass
  });
  handleStyle({
    lang: "less",
    test: /\.less$/,
    loaderName: "less-loader",
    loaderOptions: options.less
  });
  handleStyle({
    lang: "stylus",
    test: /\.styl(us)?$/,
    loaderName: "stylus-loader",
    loaderOptions: {
      stylusOptions: {
        // allow literal css import
        includeCSS: true,
        // no need to compress with stylus
        // we will handle it by postcss-loader
        compress: false
      },
      ...options.stylus
    }
  });
};
var require4 = createRequire3(__vite_injected_original_import_meta_url);
var handleModuleTs = ({
  app,
  config
}) => {
  config.module.rule("ts").test(/\.tsx?/).use("esbuild-loader").loader(require4.resolve("esbuild-loader")).options({
    target: "es2018",
    loader: "tsx",
    ...resolveEsbuildJsxOptions()
  }).end();
};
var require5 = createRequire4(__vite_injected_original_import_meta_url);
var handleModuleVue = ({
  app,
  options,
  config,
  isServer
}) => {
  config.module.rule("vue").test(/\.vue$/).use("vue-loader").loader(require5.resolve("vue-loader")).options({
    ...options.vue,
    isServerBuild: isServer
  }).end();
  config.plugin("vue-loader").use(VueLoaderPlugin);
};
var handleModule = ({
  app,
  options,
  config,
  isBuild,
  isServer
}) => {
  config.module.noParse(
    /(^(vue|vue-router|vuex|vuex-router-sync)$)|(^@vue\/[^/]*$)/
  );
  handleModuleVue({ app, options, config, isServer });
  handleModulePug({ config });
  handleModuleAssets({ app, config });
  handleModuleJs({ options, config, isBuild, isServer });
  handleModuleTs({ app, config });
  handleModuleStyles({ options, config, isBuild, isServer });
};
var handleNode = ({ config }) => {
  config.node.merge({
    __filename: false,
    __dirname: false,
    global: false
  });
};
var require6 = createRequire5(__vite_injected_original_import_meta_url);
var handleOtherOptions = ({
  app,
  config,
  isBuild,
  isServer
}) => {
  config.set("infrastructureLogging", {
    level: app.env.isDebug ? "info" : "error"
  });
  config.set("cache", {
    type: "filesystem",
    cacheDirectory: app.dir.cache(),
    version: JSON.stringify({
      // vuepress identifiers
      isBuild,
      isServer,
      "version": app.version,
      // dependencies
      "esbuild-loader": require6("esbuild-loader/package.json").version,
      "vue-loader": require6("vue-loader/package.json").version,
      "webpack": require6("webpack/package.json").version
    })
  });
};
var handlePluginDefine = async ({
  app,
  config,
  isBuild,
  isServer
}) => {
  config.plugin("define").use(webpack.DefinePlugin, [
    {
      __VUEPRESS_VERSION__: JSON.stringify(app.version),
      __VUEPRESS_BASE__: JSON.stringify(app.options.base),
      __VUEPRESS_DEV__: JSON.stringify(!isBuild),
      __VUEPRESS_SSR__: JSON.stringify(isServer),
      // @see http://link.vuejs.org/feature-flags
      // enable options API by default
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(app.env.isDebug),
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false)
    }
  ]);
  const defineResult = await app.pluginApi.hooks.define.process(app, isServer);
  config.plugin("define").tap(([options]) => {
    defineResult.forEach(
      (defineObject) => Object.entries(defineObject).forEach(([key, value]) => {
        options[key] = JSON.stringify(value);
      })
    );
    return [options];
  });
};
var handleResolve = async ({
  app,
  config,
  isServer
}) => {
  config.resolve.alias.set("@source", app.dir.source()).set("@temp", app.dir.temp()).set("@internal", app.dir.temp("internal"));
  config.merge({
    resolve: {
      extensionAlias: {
        ".js": [".js", ".ts"],
        ".mjs": [".mjs", ".mts"]
      },
      extensions: [".js", ".jsx", ".ts", ".tsx", ".vue", ".json"]
    }
  });
  config.resolve.extensions.merge([
    ".js",
    ".jsx",
    ".ts",
    ".tsx",
    ".vue",
    ".json"
  ]);
  const aliasResult = await app.pluginApi.hooks.alias.process(app, isServer);
  aliasResult.forEach(
    (aliasObject) => Object.entries(aliasObject).forEach(([key, value]) => {
      config.resolve.alias.set(key, value);
    })
  );
};
var createBaseConfig = async ({
  app,
  options,
  isBuild,
  isServer
}) => {
  const config = new Config();
  handleEntry({ app, config });
  handleMode({ app, config, isBuild });
  handleNode({ config });
  handleDevtool({ app, config, isBuild });
  await handleResolve({ app, config, isServer });
  handleModule({ app, options, config, isBuild, isServer });
  await handlePluginDefine({ app, config, isBuild, isServer });
  handleOtherOptions({ app, config, isBuild, isServer });
  return config;
};
var createClientBaseConfig = async ({
  app,
  options,
  isBuild
}) => {
  const config = await createBaseConfig({
    app,
    options,
    isServer: false,
    isBuild
  });
  config.output.path(app.dir.dest()).filename(
    isBuild ? "assets/js/[name].js" : "assets/js/[name].js"
  ).publicPath(app.options.base);
  return config;
};
var isJS = (file) => /\.js(\?[^.]+)?$/.test(file);
var isCSS = (file) => /\.css(\?[^.]+)?$/.test(file);
var createClientPlugin = (outputFile) => {
  const clientPlugin = {
    apply(compiler) {
      compiler.hooks.emit.tapPromise(
        "vuepress-client-plugin",
        async (compilation) => {
          const {
            assets = [],
            modules = [],
            entrypoints = {},
            chunks = []
          } = compilation.getStats().toJson();
          const allFiles = assets.map((a) => a.name);
          const initialFiles = Object.keys(entrypoints).map((name) => entrypoints[name].assets.map((item) => item.name)).reduce((assets2, all) => all.concat(assets2), []).filter((file) => isJS(file) || isCSS(file));
          const asyncFiles = allFiles.filter(
            (file) => (isJS(file) || isCSS(file)) && !initialFiles.includes(file)
          );
          const assetModules = modules.filter(
            (m) => !!(m.assets && m.assets.length)
          );
          const manifestModules = {};
          const fileToIndex = (file) => allFiles.indexOf(file);
          modules.forEach((m) => {
            if (m.chunks.length !== 1) {
              return;
            }
            const cid = m.chunks[0];
            const chunk = chunks.find((c) => c.id === cid);
            if (!chunk || !chunk.files) {
              return;
            }
            const request = m.identifier.replace(/\|\w+$/, "");
            const files = [...chunk.files.map(fileToIndex)];
            assetModules.forEach((m2) => {
              if (m2.chunks.some((id) => id === cid)) {
                files.push(...m2.assets.map(fileToIndex));
              }
            });
            manifestModules[request] = files;
          });
          const clientManifest = {
            all: allFiles,
            initial: initialFiles,
            async: asyncFiles,
            modules: manifestModules
          };
          const clientManifestJson = JSON.stringify(clientManifest, null, 2);
          await fs2.outputFile(outputFile, clientManifestJson);
        }
      );
    }
  };
  return clientPlugin;
};
var require7 = createRequire6(__vite_injected_original_import_meta_url);
var clientManifestFilename = ".server/client-manifest.json";
var createClientConfig = async (app, options) => {
  const config = await createClientBaseConfig({
    app,
    options,
    isBuild: true
  });
  config.module.rule("vue").test(/\.vue$/).use("vuepress-loader").before("vue-loader").loader(require7.resolve("./vuepress-loader.cjs")).end();
  config.plugin("vuepress-client").use(createClientPlugin(app.dir.temp(clientManifestFilename)));
  if (fs3.pathExistsSync(app.dir.public())) {
    config.plugin("copy").use(CopyWebpackPlugin, [
      {
        patterns: [{ from: app.dir.public(), to: app.dir.dest() }]
      }
    ]);
  }
  config.plugin("extract-css").use(MiniCssExtractPlugin2, [
    {
      filename: "assets/css/styles.[chunkhash:8].css"
    }
  ]);
  config.optimization.splitChunks({
    cacheGroups: {
      // ensure all css are extracted together.
      // since most of the CSS will be from the theme and very little
      // CSS will be from async chunks
      styles: {
        idHint: "styles",
        // necessary to ensure async chunks are also extracted
        test: (m) => /css\/mini-extract/.test(m.type),
        chunks: "all",
        enforce: true,
        reuseExistingChunk: true
      },
      // extract external library to a standalone chunk
      vendor: {
        idHint: "vendor",
        test: /node_modules/,
        chunks: "all",
        priority: -10,
        reuseExistingChunk: true
      }
    }
  });
  config.optimization.runtimeChunk(true);
  if (!app.env.isDebug) {
    config.performance.hints(false);
  }
  return config;
};
var require8 = createRequire7(__vite_injected_original_import_meta_url);
var createServerConfig = async (app, options) => {
  const isBuild = true;
  const isServer = true;
  const config = await createBaseConfig({
    app,
    options,
    isBuild,
    isServer
  });
  config.output.path(app.dir.temp(".server")).filename("app.cjs").publicPath(app.options.base).libraryTarget("commonjs2");
  config.target("node");
  config.externals(["vue"]);
  config.devtool("source-map");
  config.optimization.minimize(false);
  config.module.rule("vue").test(/\.vue$/).use("vuepress-loader").before("vue-loader").loader(require8.resolve("./vuepress-loader.cjs")).end();
  return config;
};
var renderPagePrefetchLinks = ({
  app,
  asyncFilesMeta,
  pageClientFilesMeta
}) => {
  const shouldPrefetch = app.options.shouldPrefetch;
  if (shouldPrefetch === false) {
    return "";
  }
  const prefetchFilesMeta = asyncFilesMeta.filter(
    ({ file }) => !pageClientFilesMeta.some((f) => f.file === file)
  );
  return prefetchFilesMeta.map(({ file, type }) => {
    if (shouldPrefetch !== true && !shouldPrefetch(file, type)) {
      return "";
    }
    return `<link rel="prefetch" href="${app.options.base}${file}" as="${type}">`;
  }).join("");
};
var renderPagePreloadLinks = ({
  app,
  initialFilesMeta,
  pageClientFilesMeta
}) => {
  const shouldPreload = app.options.shouldPreload;
  if (shouldPreload === false) {
    return "";
  }
  const preloadFilesMeta = [...initialFilesMeta, ...pageClientFilesMeta];
  return preloadFilesMeta.map(({ file, extension, type }) => {
    if (shouldPreload === true && type !== "script" && type !== "style") {
      return "";
    }
    if (shouldPreload !== true && !shouldPreload(file, type)) {
      return "";
    }
    return `<link rel="preload" href="${app.options.base}${file}"${type !== "" ? ` as="${type}"` : ""}${type === "font" ? ` type="font/${extension}" crossorigin` : ""}>`;
  }).join("");
};
var renderPageScripts = ({
  app,
  initialFilesMeta,
  pageClientFilesMeta
}) => (
  // include initial JS files and other async JS files of current page
  [...pageClientFilesMeta, ...initialFilesMeta].filter(({ type }) => type === "script").map(
    ({ file }) => `<script src="${app.options.base}${file}" defer></script>`
  ).join("")
);
var renderPageStyles = ({
  app,
  initialFilesMeta,
  pageClientFilesMeta
}) => (
  // include initial CSS files and other async CSS files of current page
  // notice here we put async CSS files after initial CSS files
  [...initialFilesMeta, ...pageClientFilesMeta].filter(({ type }) => type === "style").map(
    ({ file }) => `<link rel="stylesheet" href="${app.options.base}${file}">`
  ).join("")
);
var resolvePageClientFilesMeta = ({
  moduleRequests,
  moduleFilesMetaMap
}) => {
  const files = /* @__PURE__ */ new Set();
  moduleRequests.forEach((request) => {
    moduleFilesMetaMap[request]?.forEach((file) => files.add(file));
  });
  return Array.from(files);
};
var renderPage = async ({
  app,
  page,
  vueApp,
  vueRouter,
  renderToString,
  ssrTemplate,
  initialFilesMeta,
  asyncFilesMeta,
  moduleFilesMetaMap
}) => {
  await vueRouter.push(page.path);
  await vueRouter.isReady();
  delete vueApp._context.provides[ssrContextKey];
  const ssrContext = {
    _registeredComponents: /* @__PURE__ */ new Set(),
    lang: "en",
    head: []
  };
  const pageRendered = await renderToString(vueApp, ssrContext);
  const pageClientFilesMeta = resolvePageClientFilesMeta({
    moduleRequests: Array.from(ssrContext._registeredComponents),
    moduleFilesMetaMap
  });
  const html = await app.options.templateBuildRenderer(ssrTemplate, {
    content: pageRendered,
    head: ssrContext.head.map(renderHead).join(""),
    lang: ssrContext.lang,
    prefetch: renderPagePrefetchLinks({
      app,
      asyncFilesMeta,
      pageClientFilesMeta
    }),
    preload: renderPagePreloadLinks({
      app,
      initialFilesMeta,
      pageClientFilesMeta
    }),
    scripts: renderPageScripts({ app, initialFilesMeta, pageClientFilesMeta }),
    styles: renderPageStyles({ app, initialFilesMeta, pageClientFilesMeta }),
    version: app.version
  });
  await fs4.outputFile(page.htmlFilePath, html);
};
var resolveFileMetaType = (extension) => {
  if (extension === "js") {
    return "script";
  }
  if (extension === "css") {
    return "style";
  }
  if (/jpe?g|png|svg|gif|webp|ico/.test(extension)) {
    return "image";
  }
  if (/woff2?|ttf|otf|eot/.test(extension)) {
    return "font";
  }
  return "";
};
var resolveFileMeta = (file) => {
  const extension = path.extname(file).slice(1);
  return {
    file,
    extension,
    type: resolveFileMetaType(extension)
  };
};
var resolveClientManifestMeta = ({
  all,
  initial,
  async,
  modules
}) => {
  const allFilesMeta = all.map(resolveFileMeta);
  const initialFilesMeta = initial.map(resolveFileMeta);
  const asyncFilesMeta = async.map(resolveFileMeta);
  const moduleFilesMetaMap = Object.fromEntries(
    Object.entries(modules).map(([moduleRequest, assetFilesIndex]) => {
      return [
        moduleRequest,
        assetFilesIndex.map((fileIndex) => allFilesMeta[fileIndex]).filter(
          ({ file, type }) => async.includes(file) || type !== "style" && type !== "script"
        )
      ];
    })
  );
  return {
    allFilesMeta,
    initialFilesMeta,
    asyncFilesMeta,
    moduleFilesMetaMap
  };
};
var log = debug("vuepress:bundler-webpack/build");
var build = async (options, app) => {
  await app.pluginApi.hooks.extendsBundlerOptions.process(options, app);
  log("offline compiling start");
  await withSpinner("Compiling client and server online with webpack")(async () => {
    const clientConfig = resolveWebpackConfig({
      config: await createClientConfig(app, options),
      options,
      isServer: false,
      isBuild: true
    });
    const serverConfig = resolveWebpackConfig({
      config: await createServerConfig(app, options),
      options,
      isServer: true,
      isBuild: true
    });
    await new Promise((resolve, reject) => {
      webpack2([clientConfig, serverConfig], (err, stats) => {
        if (err) {
          reject(err);
        } else if (stats?.hasErrors()) {
          stats.toJson().errors?.forEach((err2) => {
            console.error(err2);
          });
          reject(new Error("Failed to compile with errors"));
        } else {
          if (stats?.hasWarnings()) {
            stats.toJson().warnings?.forEach((warning) => {
              console.warn(warning);
            });
          }
          resolve();
        }
      });
    });
  });
  log("compiling finish");
  await withSpinner(`Rendering ${app.pages.length} pages`)(async (spinner) => {
    const clientManifestPath = app.dir.temp(clientManifestFilename);
    const clientManifest = await fs5.readJson(clientManifestPath);
    const { initialFilesMeta, asyncFilesMeta, moduleFilesMetaMap } = resolveClientManifestMeta(clientManifest);
    const serverEntryPath = app.dir.temp(".server/app.cjs");
    const { createVueApp } = await importFileDefault(serverEntryPath);
    const { app: vueApp, router: vueRouter } = await createVueApp();
    const { renderToString } = await import("vue/server-renderer");
    const ssrTemplate = await fs5.readFile(app.options.templateBuild, {
      encoding: "utf8"
    });
    for (const page of app.pages) {
      if (spinner) {
        spinner.text = `Rendering pages ${colors.magenta(page.path)}`;
      }
      await renderPage({
        app,
        page,
        vueApp,
        vueRouter,
        renderToString,
        ssrTemplate,
        initialFilesMeta,
        asyncFilesMeta,
        moduleFilesMetaMap
      });
    }
  });
  if (!app.env.isDebug) {
    await fs5.remove(app.dir.temp(".server"));
  }
  await withSpinner("Compiling client offline with webpack")(async () => {
    const make_empty_vue = (dirpath) => {
      const files = fs.readdirSync(dirpath);
      files.forEach((file) => {
        const filePath = `${dirpath}/${file}`;
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
          make_empty_vue(filePath);
        } else if (file.endsWith(".vue")) {
          fs.writeFileSync(filePath, `
          <template>
            <div>
            </div>
          </template>
          `);
        }
      });
    };
    let pages_dir = app.dir.temp("pages");
    fs.removeSync(app.dir.dest("assets/js"));
    let cssfiles = fs.readdirSync(app.dir.dest("assets/css"));
    const clientConfig = resolveWebpackConfig({
      config: await createClientConfig(app, options),
      options,
      isServer: false,
      isBuild: true
    });
    await new Promise((resolve, reject) => {
      webpack2([clientConfig], (err, stats) => {
        if (err) {
          reject(err);
        } else if (stats?.hasErrors()) {
          stats.toJson().errors?.forEach((err2) => {
            console.error(err2);
          });
          reject(new Error("Failed to compile with errors"));
        } else {
          if (stats?.hasWarnings()) {
            stats.toJson().warnings?.forEach((warning) => {
              console.warn(warning);
            });
          }
          resolve();
        }
      });
    });
    let css_files_all = fs.readdirSync(app.dir.dest("assets/css"));
    css_files_all.forEach((file) => {
      if (cssfiles.indexOf(file) >= 0) {
      } else {
        fs.removeSync(path.resolve(app.dir.dest("assets/css"), file));
      }
    });
  });
};
var webpackBundler = (options = {}) => ({
  name: "@vuepress/bundler-webpack",
  // dev: (app) => dev(options, app),
  build: (app) => build(options, app)
});

// .vuepress/config.ts
import path3 from "path";
import viteBundler from "@vuepress/bundler-vite";
import { include } from "@mdit/plugin-include";
var __vite_injected_original_dirname = "F:/moneyProject/ATK/smsat/atk-doc/.vuepress";
var useConfig = ({ type, plat = "" }) => {
  let standalone = type == "standalone";
  return defineUserConfig({
    // GitHub Pages 部署路径。仓库名是 atk_doc，所以网站在 /atk_doc/ 子目录下
    base: siteBase,
    lang: "zh-CN",
    title: standalone ? "Aerospace Tool Kit(\u79BB\u7EBF\u7248)" : "Aerospace Tool Kit",
    description: "\u52A0\u5FEB\u5DE5\u4E1A\u8F6F\u4EF6\u56FD\u4EA7\u5316\uFF0C\u670D\u52A1\u822A\u5929\u5F3A\u56FD\u5EFA\u8BBE",
    // 配置网站图标
    head: [["link", { rel: "icon", href: "/images/logo.png" }]],
    alias: {
      "@theme-hope/components/PageNav": path3.resolve(__vite_injected_original_dirname, "./components/PageNav.js"),
      //"@theme-hope/components/transitions/index": path.resolve(__dirname,"./components/transitions/index",),
      "@theme-hope/modules/sidebar/components/Sidebar": path3.resolve(__vite_injected_original_dirname, "./modules/sidebar/components/Sidebar"),
      "@theme-hope/modules/sidebar/components/SidebarChild": path3.resolve(__vite_injected_original_dirname, "./modules/sidebar/components/SidebarChild"),
      "@theme-hope/modules/sidebar/components/SidebarGroup": path3.resolve(__vite_injected_original_dirname, "./modules/sidebar/components/SidebarGroup"),
      "@theme-hope/modules/sidebar/components/SidebarLinks": path3.resolve(__vite_injected_original_dirname, "./modules/sidebar/components/SidebarLinks"),
      "@theme-hope/modules/sidebar/utils/index": path3.resolve(__vite_injected_original_dirname, "./modules/sidebar/utils/index"),
      "@components": path3.resolve(__vite_injected_original_dirname, "./components")
    },
    markdown: {
      // toc: { includeLevel: [2, 3, 4, 5, 6] },
      headers: { level: [2, 6] },
      code: {
        lineNumbers: 5,
      },
      // 新增：集成 include 插件
      extendsMarkdown: (md) => {
        md.use(include, {
          currentPath: (env) => env.filePath
        });
      }
    },
    extendsPage: (page) => {
      let order = page.frontmatter.order;
      if (!order) {
        let name;
        if (page.slug.toUpperCase() == "README") {
          name = path3.basename(path3.dirname(page.filePathRelative));
        } else {
          name = page.slug;
        }
        let res = name.match(/([0-9\.]*)/);
        if (res && res[1]) {
          let chapter = res[1].replace(/\.$/, "");
          let list = chapter.split(".");
          order = parseInt(list[list.length - 1]) || void 0;
        }
      }
      page.routeMeta = {
        ...page.routeMeta,
        // 目录标题
        title: page.title,
        order,
        description: page.frontmatter.description,
        thumbnail: page.frontmatter.thumbnail,
        icon: page.frontmatter.icon
      };
    },
    shouldPrefetch: false,
    theme: useHopeTheme({ type, plat }),
    bundler: standalone ? webpackBundler({
      configureWebpack(config, isServer) {
        if (!isServer && standalone) {
          if (!config.output) {
            config.output = {};
          }
          config.output.asyncChunks = false;
        }
      },
      chainWebpack(config, isServer, isBuild) {
        if (!isServer) {
          config.module.rule("js").test(/\.js$/).use("babel-loader").loader("babel-loader").end();
        }
      }
      // evergreen: true,
    }) : viteBundler()
    // 和 PWA 一起启用
    // shouldPrefetch: false,
  });
};
var config_default = useConfig({ type: "online" });
export {
  config_default as default,
  useConfig
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZ1ZXByZXNzL3NoYXJlZC9jb25maWcuanMiLCAiLnZ1ZXByZXNzL2NvbmZpZy50cyIsICIudnVlcHJlc3MvdGhlbWUudHMiLCAiLnZ1ZXByZXNzL25hdmJhci50cyIsICIudnVlcHJlc3Mvc2lkZWJhci50cyIsICIudnVlcHJlc3MvcmVkaXJlY3QudHMiLCAiLnZ1ZXByZXNzL2J1bmRsZXItc3RhbmRhbG9uZS9pbmRleC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6L21vbmV5UHJvamVjdC9BVEsvc21zYXQvYXRrLWRvYy8udnVlcHJlc3Mvc2hhcmVkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxtb25leVByb2plY3RcXFxcQVRLXFxcXHNtc2F0XFxcXGF0ay1kb2NcXFxcLnZ1ZXByZXNzXFxcXHNoYXJlZFxcXFxjb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L21vbmV5UHJvamVjdC9BVEsvc21zYXQvYXRrLWRvYy8udnVlcHJlc3Mvc2hhcmVkL2NvbmZpZy5qc1wiOy8vIFx1NjU4N1x1Njg2M1x1N0FEOVx1NzBCOVx1NzY4NCBiYXNlIFx1OERFRlx1NUY4NFx1RkYwQ1x1NjI0MFx1NjcwOVx1OTg3NVx1OTc2Mlx1OTRGRVx1NjNBNVx1OTBGRFx1NzZGOFx1NUJGOVx1NEU4RVx1NkI2NFx1OERFRlx1NUY4NFxyXG4vLyBHaXRIdWIgQWN0aW9ucyBcdTY3ODRcdTVFRkFcdTY1RjZcdTkwMUFcdThGQzcgR0lUSFVCX1JFUE9TSVRPUlkgXHU4MUVBXHU1MkE4XHU2OEMwXHU2RDRCXHU0RUQzXHU1RTkzXHU1NDBEXHU1RTc2XHU4QkJFXHU3RjZFIGJhc2VcdUZGMUFcclxuLy8gICBhdGtfZG9jIFx1MjE5MiAvYXRrX2RvYy9cdUZGMENhdGtfZG9jX2RldiBcdTIxOTIgL2F0a19kb2NfZGV2L1x1RkYwQ1x1NEVFNVx1NkI2NFx1N0M3Qlx1NjNBOFxyXG4vLyBcdTY3MkNcdTU3MzBcdTVGMDBcdTUzRDFcdTY1RjYgR0lUSFVCX1JFUE9TSVRPUlkgXHU0RTBEXHU1QjU4XHU1NzI4XHVGRjBDXHU5RUQ4XHU4QkE0XHU0RjdGXHU3NTI4ICcvJ1xyXG4vLyBcdTZDRThcdUZGMUFcdTRGN0ZcdTc1MjggdHlwZW9mIFx1NUI4OFx1NTM2Qlx1OTYzMlx1NkI2Mlx1NkQ0Rlx1ODlDOFx1NTY2OFx1N0FFRiBwcm9jZXNzIGlzIG5vdCBkZWZpbmVkIFx1OTUxOVx1OEJFRlxyXG5jb25zdCByZXBvID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52XHJcbiAgPyBwcm9jZXNzLmVudi5HSVRIVUJfUkVQT1NJVE9SWT8uc3BsaXQoJy8nKVsxXVxyXG4gIDogdW5kZWZpbmVkXHJcbmV4cG9ydCBjb25zdCBzaXRlQmFzZSA9IHJlcG8gPyBgLyR7cmVwb30vYCA6ICcvJ1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6L21vbmV5UHJvamVjdC9BVEsvc21zYXQvYXRrLWRvYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXG1vbmV5UHJvamVjdFxcXFxBVEtcXFxcc21zYXRcXFxcYXRrLWRvY1xcXFwudnVlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9tb25leVByb2plY3QvQVRLL3Ntc2F0L2F0ay1kb2MvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IHNpdGVCYXNlIH0gZnJvbSBcIi4vc2hhcmVkL2NvbmZpZy5qc1wiO1xyXG5pbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XHJcbmltcG9ydCB7dXNlSG9wZVRoZW1lfSBmcm9tIFwiLi90aGVtZS5qc1wiO1xyXG5pbXBvcnQgeyBzdGFuZGFsb25lQnVuZGxlciB9IGZyb20gJy4vYnVuZGxlci1zdGFuZGFsb25lL2luZGV4LmpzJ1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiXHJcbmltcG9ydCB2aXRlQnVuZGxlciBmcm9tIFwiQHZ1ZXByZXNzL2J1bmRsZXItdml0ZVwiO1xyXG5pbXBvcnQgd2VicGFja0J1bmRsZXIgZnJvbSBcIkB2dWVwcmVzcy9idW5kbGVyLXdlYnBhY2tcIjtcclxuaW1wb3J0IHsgaW5jbHVkZSB9IGZyb20gXCJAbWRpdC9wbHVnaW4taW5jbHVkZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUNvbmZpZyA9ICh7dHlwZSwgcGxhdD1cIlwifSkgPT4ge1xyXG4gIGxldCBzdGFuZGFsb25lID0gdHlwZSA9PSBcInN0YW5kYWxvbmVcIjtcclxuICByZXR1cm4gZGVmaW5lVXNlckNvbmZpZyh7XHJcbiAgICAvLyBHaXRIdWIgUGFnZXMgXHU5MEU4XHU3RjcyXHU4REVGXHU1Rjg0XHUzMDAyXHU0RUQzXHU1RTkzXHU1NDBEXHU2NjJGIGF0a19kb2NcdUZGMENcdTYyNDBcdTRFRTVcdTdGNTFcdTdBRDlcdTU3MjggL2F0a19kb2MvIFx1NUI1MFx1NzZFRVx1NUY1NVx1NEUwQlxyXG4gICAgYmFzZTogc2l0ZUJhc2UsXHJcbiAgICBsYW5nOiBcInpoLUNOXCIsXHJcbiAgICB0aXRsZTogc3RhbmRhbG9uZSA/IFwiQWVyb3NwYWNlIFRvb2wgS2l0KFx1NzlCQlx1N0VCRlx1NzI0OClcIjogXCJBZXJvc3BhY2UgVG9vbCBLaXRcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlx1NTJBMFx1NUZFQlx1NURFNVx1NEUxQVx1OEY2Rlx1NEVGNlx1NTZGRFx1NEVBN1x1NTMxNlx1RkYwQ1x1NjcwRFx1NTJBMVx1ODIyQVx1NTkyOVx1NUYzQVx1NTZGRFx1NUVGQVx1OEJCRVwiLFxyXG4gICAgLy8gXHU5MTREXHU3RjZFXHU3RjUxXHU3QUQ5XHU1NkZFXHU2ODA3XHJcbiAgICBoZWFkOiBbWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy9pbWFnZXMvbG9nby5wbmcnfV1dLFxyXG4gICAgYWxpYXM6e1xyXG4gICAgICBcIkB0aGVtZS1ob3BlL2NvbXBvbmVudHMvUGFnZU5hdlwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLFwiLi9jb21wb25lbnRzL1BhZ2VOYXYuanNcIiwpLFxyXG4gICAgICAvL1wiQHRoZW1lLWhvcGUvY29tcG9uZW50cy90cmFuc2l0aW9ucy9pbmRleFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLFwiLi9jb21wb25lbnRzL3RyYW5zaXRpb25zL2luZGV4XCIsKSxcclxuICAgICAgXCJAdGhlbWUtaG9wZS9tb2R1bGVzL3NpZGViYXIvY29tcG9uZW50cy9TaWRlYmFyXCI6ICBwYXRoLnJlc29sdmUoX19kaXJuYW1lLFwiLi9tb2R1bGVzL3NpZGViYXIvY29tcG9uZW50cy9TaWRlYmFyXCIsKSxcclxuICAgICAgXCJAdGhlbWUtaG9wZS9tb2R1bGVzL3NpZGViYXIvY29tcG9uZW50cy9TaWRlYmFyQ2hpbGRcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSxcIi4vbW9kdWxlcy9zaWRlYmFyL2NvbXBvbmVudHMvU2lkZWJhckNoaWxkXCIsKSxcclxuICAgICAgXCJAdGhlbWUtaG9wZS9tb2R1bGVzL3NpZGViYXIvY29tcG9uZW50cy9TaWRlYmFyR3JvdXBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSxcIi4vbW9kdWxlcy9zaWRlYmFyL2NvbXBvbmVudHMvU2lkZWJhckdyb3VwXCIsKSxcclxuICAgICAgXCJAdGhlbWUtaG9wZS9tb2R1bGVzL3NpZGViYXIvY29tcG9uZW50cy9TaWRlYmFyTGlua3NcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSxcIi4vbW9kdWxlcy9zaWRlYmFyL2NvbXBvbmVudHMvU2lkZWJhckxpbmtzXCIsKSxcclxuICAgICAgXCJAdGhlbWUtaG9wZS9tb2R1bGVzL3NpZGViYXIvdXRpbHMvaW5kZXhcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSxcIi4vbW9kdWxlcy9zaWRlYmFyL3V0aWxzL2luZGV4XCIsKSxcclxuICAgICAgXCJAY29tcG9uZW50c1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLFwiLi9jb21wb25lbnRzXCIsKSxcclxuICAgIH0sXHJcbiAgICBtYXJrZG93bjp7XHJcbiAgICAgIC8vIHRvYzogeyBpbmNsdWRlTGV2ZWw6IFsyLCAzLCA0LCA1LCA2XSB9LFxyXG4gICAgICBoZWFkZXJzOiB7IGxldmVsOiBbMiwgNl0gfSxcclxuICAgICAgY29kZTp7XHJcbiAgICAgICAgbGluZU51bWJlcnM6IDUsXHJcbiAgICAgICAgY29sbGFwc2VkTGluZXM6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGhpZ2hsaWdodGVyOiB7XHJcbiAgICAgICAgY29sbGFwc2VkTGluZXM6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIFx1NjVCMFx1NTg5RVx1RkYxQVx1OTZDNlx1NjIxMCBpbmNsdWRlIFx1NjNEMlx1NEVGNlxyXG4gICAgICBleHRlbmRzTWFya2Rvd246IChtZCkgPT4ge1xyXG4gICAgICAgIG1kLnVzZShpbmNsdWRlLCB7XHJcbiAgICAgICAgICBjdXJyZW50UGF0aDogKGVudikgPT4gZW52LmZpbGVQYXRoLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGV4dGVuZHNQYWdlOiAocGFnZSkgPT4ge1xyXG4gICAgICBsZXQgb3JkZXIgPSBwYWdlLmZyb250bWF0dGVyLm9yZGVyO1xyXG4gICAgICBpZighb3JkZXIpe1xyXG4gICAgICAgIGxldCBuYW1lO1xyXG4gICAgICAgIGlmKHBhZ2Uuc2x1Zy50b1VwcGVyQ2FzZSgpID09IFwiUkVBRE1FXCIpe1xyXG4gICAgICAgICAgbmFtZSA9IHBhdGguYmFzZW5hbWUocGF0aC5kaXJuYW1lKHBhZ2UuZmlsZVBhdGhSZWxhdGl2ZSkpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBuYW1lID0gcGFnZS5zbHVnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzID0gbmFtZS5tYXRjaCgvKFswLTlcXC5dKikvKTtcclxuICAgICAgICBpZihyZXMgJiYgcmVzWzFdKXtcclxuICAgICAgICAgIGxldCBjaGFwdGVyID0gcmVzWzFdLnJlcGxhY2UoL1xcLiQvLCBcIlwiKTtcclxuICAgICAgICAgIGxldCBsaXN0ID0gY2hhcHRlci5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgICBvcmRlciA9IHBhcnNlSW50KCBsaXN0W2xpc3QubGVuZ3RoLTFdICl8fCB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIFx1NTcyOCByb3V0ZU1ldGEgXHU0RTJEXHU4QkJFXHU3RjZFXHU3NkVFXHU1RjU1XHU0RkUxXHU2MDZGXHJcbiAgICAgIHBhZ2Uucm91dGVNZXRhID0ge1xyXG4gICAgICAgIC4uLnBhZ2Uucm91dGVNZXRhLFxyXG4gICAgICAgIC8vIFx1NzZFRVx1NUY1NVx1NjgwN1x1OTg5OFxyXG4gICAgICAgIHRpdGxlOiBwYWdlLnRpdGxlLFxyXG4gICAgICAgIG9yZGVyOiBvcmRlcixcclxuICAgICAgICBkZXNjcmlwdGlvbjogcGFnZS5mcm9udG1hdHRlci5kZXNjcmlwdGlvbixcclxuICAgICAgICB0aHVtYm5haWw6IHBhZ2UuZnJvbnRtYXR0ZXIudGh1bWJuYWlsLFxyXG4gICAgICAgIGljb246IHBhZ2UuZnJvbnRtYXR0ZXIuaWNvbixcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNob3VsZFByZWZldGNoOiBmYWxzZSxcclxuICAgIHRoZW1lOiB1c2VIb3BlVGhlbWUoe3R5cGUsIHBsYXR9KSxcclxuXHJcbiAgICBidW5kbGVyOiBzdGFuZGFsb25lP1xyXG4gICAgICBzdGFuZGFsb25lQnVuZGxlcih7XHJcbiAgICAgICAgY29uZmlndXJlV2VicGFjayhjb25maWcsIGlzU2VydmVyKXtcclxuICAgICAgICAgIGlmKCFpc1NlcnZlciAmJiBzdGFuZGFsb25lKXtcclxuICAgICAgICAgICAgaWYoIWNvbmZpZy5vdXRwdXQpe1xyXG4gICAgICAgICAgICAgIGNvbmZpZy5vdXRwdXQgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25maWcub3V0cHV0LmFzeW5jQ2h1bmtzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIGNvbmZpZy5vcHRpbWl6YXRpb24uc3BsaXRDaHVua3M9IHtjaHVua3M6XCJhbGxcIn07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFpbldlYnBhY2soY29uZmlnLCBpc1NlcnZlciwgaXNCdWlsZCkge1xyXG4gICAgICAgICAgaWYoIWlzU2VydmVyKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBjb25maWcubW9kdWxlXHJcbiAgICAgICAgICAgIC5ydWxlKCdqcycpXHJcbiAgICAgICAgICAgIC50ZXN0KC9cXC5qcyQvKVxyXG4gICAgICAgICAgICAudXNlKFwiYmFiZWwtbG9hZGVyXCIpXHJcbiAgICAgICAgICAgIC5sb2FkZXIoXCJiYWJlbC1sb2FkZXJcIilcclxuICAgICAgICAgICAgLmVuZCgpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gZXZlcmdyZWVuOiB0cnVlLFxyXG4gICAgICB9KTogXHJcbiAgICAgIHZpdGVCdW5kbGVyKClcclxuICAgICxcclxuICAgIC8vIFx1NTQ4QyBQV0EgXHU0RTAwXHU4RDc3XHU1NDJGXHU3NTI4XHJcbiAgICAvLyBzaG91bGRQcmVmZXRjaDogZmFsc2UsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VDb25maWcoe3R5cGU6XCJvbmxpbmVcIn0pOyIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjovbW9uZXlQcm9qZWN0L0FUSy9zbXNhdC9hdGstZG9jLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcbW9uZXlQcm9qZWN0XFxcXEFUS1xcXFxzbXNhdFxcXFxhdGstZG9jXFxcXC52dWVwcmVzc1xcXFx0aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovbW9uZXlQcm9qZWN0L0FUSy9zbXNhdC9hdGstZG9jLy52dWVwcmVzcy90aGVtZS50c1wiO2ltcG9ydCB7IGhvcGVUaGVtZSB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcbmltcG9ydCB7IHVzZU5hdmJhciB9IGZyb20gXCIuL25hdmJhci5qc1wiO1xyXG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi9zaWRlYmFyLmpzXCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcclxuaW1wb3J0IHJlZGlyZWN0Y29uZmlnIGZyb20gXCIuL3JlZGlyZWN0LmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlSG9wZVRoZW1lID0gKHsgdHlwZSwgcGxhdD1cIlwiIH0pID0+IFxyXG57XHJcbiAgbGV0IHN0YW5kYWxvbmUgPSB0eXBlID09IFwic3RhbmRhbG9uZVwiO1xyXG4gIGxldCBnaXRsYWIgPSB0eXBlID09IFwiZ2l0bGFiXCI7XHJcbiAgbGV0IGt5bGluID0gcGxhdCA9PSBcImt5bGluXCJcclxuICByZXR1cm4gaG9wZVRoZW1lKFxyXG4gIHtcclxuICAgIC8vIFx1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQVx1NjI1M1x1NTM3MFx1NjMwOVx1OTRBRVxyXG4gICAgcHJpbnQ6IHRydWUsXHJcbiAgICAvL3B1cmU6IHRydWUsXHJcbiAgICBkYXJrbW9kZTogXCJkaXNhYmxlXCIsIC8vXCJ0b2dnbGVcIixcclxuICAgIC8vIFx1NTE2OFx1NUM0Rlx1NjMwOVx1OTRBRVxyXG4gICAgLy8gZnVsbHNjcmVlbjogdHJ1ZSxcclxuICAgIC8vIFx1NUY1M1x1NTI0RFx1N0Y1MVx1N0FEOVx1OTBFOFx1N0Y3Mlx1NTIzMFx1NzY4NFx1NTdERlx1NTQwRFxyXG4gICAgaG9zdG5hbWU6IFwiaHR0cHM6Ly9hdGtkb2NzLnNtc2F0LnNwYWNlXCIsXHJcblxyXG4gICAgYXV0aG9yOiB7XHJcbiAgICAgIG5hbWU6IFwiXHU1NkZEXHU5NjMyXHU3OUQxXHU2MjgwXHU1OTI3XHU1QjY2XHU3QTdBXHU1OTI5XHU3OUQxXHU1QjY2XHU1QjY2XHU5NjYyXCIsXHJcbiAgICAgIGVtYWlsOiBcImF0a19udWR0QDE2My5jb21cIixcclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIGljb25Bc3NldHM6IFwiZm9udGF3ZXNvbWUtd2l0aC1icmFuZHNcIixcclxuXHJcbiAgICBsb2dvOiAnL2ltYWdlcy9sb2dvRGFyay5wbmcnLFxyXG4gICAgbG9nb0Rhcms6IFwiL2ltYWdlcy9sb2dvRGFyay5wbmdcIixcclxuXHJcbiAgICAvLyBcdTc1MjhcdTRFOEVcdTU3MjhcdTVCRkNcdTgyMkFcdTY4MEZcdTRFMkRcdTY2M0VcdTc5M0FcdTRFRDNcdTVFOTNcdTk0RkVcdTYzQTVcclxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRjb2RlLmNvbS9qaW5rZTE4L2F0ay1kb2NcIixcclxuXHJcbiAgICBkb2NzRGlyOiBcIi9cIixcclxuICAgIGRvY3NSZXBvOiBnaXRsYWI/IFwiaHR0cDovLzE5Mi4xNjguMC4yNTQ6ODg5OS9qaW5rZTE4L2F0ay1kb2NcIjpcImh0dHBzOi8vZ2l0Y29kZS5jb20vamlua2UxOC9hdGstZG9jXCIsXHJcbiAgICBkb2NzQnJhbmNoOiBnaXRsYWI/XCJkZXZcIjpcIm1hc3RlclwiLFxyXG4gICAgZWRpdExpbmtQYXR0ZXJuOiBnaXRsYWI/IFwiaHR0cDovLzE5Mi4xNjguMC4yNTQ6ODg5OS8tL2lkZS9wcm9qZWN0L2ppbmtlMTgvYXRrLWRvYy90cmVlLzpicmFuY2gvLS86cGF0aFwiIDpcIjpyZXBvL2VkaXQvOmJyYW5jaC86cGF0aFwiLFxyXG4gICAgZWRpdExpbms6IHRydWUsXHJcbiAgICAvLyBcdTVCRkNcdTgyMkFcdTY4MEZcclxuICAgIG5hdmJhcjogdXNlTmF2YmFyKHsgdHlwZSB9KSxcclxuICAgIHNpZGViYXJTb3J0ZXI6IFtcInJlYWRtZVwiLCBcIm9yZGVyXCIsIFwiZmlsZW5hbWVcIiwgXCJ0aXRsZVwiXSxcclxuICAgIC8vIFx1NEZBN1x1OEZCOVx1NjgwRlxyXG4gICAgc2lkZWJhcixcclxuXHJcbiAgICAvLyBcdTk4NzVcdTgxMUFcclxuICAgIGZvb3RlcjogXCJcdTUyQTBcdTVGRUJcdTVERTVcdTRFMUFcdThGNkZcdTRFRjZcdTU2RkRcdTRFQTdcdTUzMTZcdUZGMENcdTY3MERcdTUyQTFcdTgyMkFcdTU5MjlcdTVGM0FcdTU2RkRcdTVFRkFcdThCQkVcIixcclxuICAgIGRpc3BsYXlGb290ZXI6IHRydWUsXHJcblxyXG4gICAgLy8gXHU1MkEwXHU1QkM2XHU5MTREXHU3RjZFXHJcbiAgICAvLyBlbmNyeXB0OiB7XHJcbiAgICAvLyAgIGNvbmZpZzoge1xyXG4gICAgLy8gICAgIFwiL2RlbW8vZW5jcnlwdC5odG1sXCI6IFtcIjEyMzRcIl0sXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIFx1NTkxQVx1OEJFRFx1OEEwMFx1OTE0RFx1N0Y2RVxyXG4gICAgLy8gXHU5ODc1XHU5NzYyXHU0RkUxXHU2MDZGXHU5MTREXHU3RjZFXHVGRjFBXHU5NjkwXHU4NUNGXHU0RjVDXHU4MDA1KEF1dGhvcilcdTU0OENcdTUxOTlcdTRGNUNcdTY1RTVcdTY3MUYoRGF0ZSlcdUZGMENcdTUzRUFcdTY2M0VcdTc5M0FcdTUyMDZcdTdDN0JcdTMwMDFcdTY4MDdcdTdCN0VcdTMwMDFcdTk2MDVcdThCRkJcdTY1RjZcdTk1RjRcdTMwMDFcdTVCNTdcdTY1NzBcclxuICAgIHBhZ2VJbmZvOiBbXCJDYXRlZ29yeVwiLCBcIlRhZ1wiLCBcIlJlYWRpbmdUaW1lXCIsIFwiV29yZFwiXSxcclxuICAgIG1ldGFMb2NhbGVzOiB7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBcdTdGMTZcdThGOTFcdTZCNjRcdTk4NzVcdTY1ODdcdTVCNTdcclxuICAgICAgICovXHJcbiAgICAgIC8vIFRPQ1x1NjgwN1x1OTg5OFxyXG4gICAgICB0b2M6IFwiXHU2NzJDXHU2NTg3XHU3NkVFXHU1RjU1XCIsXHJcbiAgICAgIGxhc3RVcGRhdGVkOiBcIlx1NjcwMFx1NTQwRVx1NjZGNFx1NjVCMFwiLCAvLyBcdTRGRUVcdTY1MzlcdTY2RjRcdTY1QjBcdTY1RjZcdTk1RjRcdTY2M0VcdTc5M0FcdTY1ODdcdTVCNTdcdUZGMENcdTUzOUZcdTY3NjVcdTY2MkZcIlx1NEUwQVx1NkIyMVx1N0YxNlx1OEY5MVx1NEU4RVwiXHJcbiAgICAgIC8vIGVkaXRMaW5rOiBcIlx1NTcyOCBHaXRIdWIgXHU0RTBBXHU3RjE2XHU4RjkxXHU2QjY0XHU5ODc1XCIsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFRPQ1x1NzZFRVx1NUY1NVx1OTE0RFx1N0Y2RSAtIFx1NjYzRVx1NzkzQWgyLWg2XHU3RUE3XHU2ODA3XHU5ODk4XHJcbiAgICB0b2M6IHtcclxuICAgICAgbGV2ZWxzOiBcImRlZXBcIixcclxuICAgICAgc2VsZWN0b3I6IFwiLnRoZW1lLWhvcGUtY29udGVudCA+IGgyLCAudGhlbWUtaG9wZS1jb250ZW50ID4gaDMsIC50aGVtZS1ob3BlLWNvbnRlbnQgPiBoNCwgLnRoZW1lLWhvcGUtY29udGVudCA+IGg1LCAudGhlbWUtaG9wZS1jb250ZW50ID4gaDZcIixcclxuICAgIH0sXHJcblxyXG4gICAgLy8gXHU1OTgyXHU2NzlDXHU2MEYzXHU4OTgxXHU1QjlFXHU2NUY2XHU2N0U1XHU3NzBCXHU0RUZCXHU0RjU1XHU2NTM5XHU1M0Q4XHVGRjBDXHU1NDJGXHU3NTI4XHU1QjgzXHUzMDAyXHU2Q0U4OiBcdThGRDlcdTVCRjlcdTY2RjRcdTY1QjBcdTYwMjdcdTgwRkRcdTY3MDlcdTVGODhcdTU5MjdcdThEMUZcdTk3NjJcdTVGNzFcdTU0Q0RcclxuICAgIC8vIGhvdFJlbG9hZDogdHJ1ZSxcclxuXHJcbiAgICAvLyBcdTU3MjhcdThGRDlcdTkxQ0NcdTkxNERcdTdGNkVcdTRFM0JcdTk4OThcdTYzRDBcdTRGOUJcdTc2ODRcdTYzRDJcdTRFRjZcclxuICAgIHBsdWdpbnM6IHtcclxuICAgICAgcmVkaXJlY3Q6IHJlZGlyZWN0Y29uZmlnLFxyXG4gICAgICAvLyBcdTZDRThcdTYxMEY6IFx1NEVDNVx1NzUyOFx1NEU4RVx1NkQ0Qlx1OEJENSEgXHU0RjYwXHU1RkM1XHU5ODdCXHU4MUVBXHU4ODRDXHU3NTFGXHU2MjEwXHU1RTc2XHU1NzI4XHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU0RTJEXHU0RjdGXHU3NTI4XHU4MUVBXHU1REYxXHU3Njg0XHU4QkM0XHU4QkJBXHU2NzBEXHU1MkExXHJcbiAgICAgIC8vIGNvbW1lbnQ6IHtcclxuICAgICAgLy8gICBwcm92aWRlcjogXCJHaXNjdXNcIixcclxuICAgICAgLy8gICByZXBvOiBcInZ1ZXByZXNzLXRoZW1lLWhvcGUvZ2lzY3VzLWRpc2N1c3Npb25zXCIsXHJcbiAgICAgIC8vICAgcmVwb0lkOiBcIlJfa2dET0dfUHQyQVwiLFxyXG4gICAgICAvLyAgIGNhdGVnb3J5OiBcIkFubm91bmNlbWVudHNcIixcclxuICAgICAgLy8gICBjYXRlZ29yeUlkOiBcIkRJQ19rd0RPR19QdDJNNENPRDY5XCIsXHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIGdpdDoge1xyXG4gICAgICAgIC8vIEdpdCBcdTRGRTFcdTYwNkZcdTkxNERcdTdGNkVcdUZGMUFcdTk2OTBcdTg1Q0ZcdTUxOTlcdTRGNUNcdTY1RTVcdTY3MUZcdTU0OENcdThEMjFcdTczMkVcdTgwMDVcdUZGMENcdTRGRERcdTc1NTlcdTY2RjRcdTY1QjBcdTY1RjZcdTk1RjRcclxuICAgICAgICBjcmVhdGVkVGltZTogZmFsc2UsICAgLy8gXHU5NjkwXHU4NUNGXHU2ODA3XHU5ODk4XHU0RTBCXHU3Njg0XHU1MTk5XHU0RjVDXHU2NUU1XHU2NzFGXHJcbiAgICAgICAgY29udHJpYnV0b3JzOiBmYWxzZSwgICAvLyBcdTk2OTBcdTg1Q0ZcdTY1ODdcdTdBRTBcdTVFOTVcdTkwRThcdTc2ODRcdThEMjFcdTczMkVcdTgwMDVcclxuICAgICAgICB1cGRhdGVkVGltZTogdHJ1ZSwgICAgIC8vIFx1NEZERFx1NzU1OVx1NjcwMFx1NTQwRVx1NjZGNFx1NjVCMFx1NjVGNlx1OTVGNFxyXG4gICAgICB9LFxyXG4gICAgICBzZW86ICFzdGFuZGFsb25lLFxyXG4gICAgICBzaXRlbWFwOiAhc3RhbmRhbG9uZSxcclxuICAgICAgcmVhZGluZ1RpbWU6IGZhbHNlLFxyXG4gICAgICAvLyBcdTVGMDBcdTU0MkZcdTY0MUNcdTdEMjJcclxuICAgICAgc2VhcmNoUHJvOiBreWxpbiA/IGZhbHNlIDogXHJcbiAgICAgIHtcclxuICAgICAgICBhdXRvU3VnZ2VzdGlvbnM6IGZhbHNlLFxyXG4gICAgICAgIHF1ZXJ5SGlzdG9yeUNvdW50OiA1LFxyXG4gICAgICAgIHJlc3VsdEhpc3RvcnlDb3VudDogNSxcclxuICAgICAgICBpbmRleENvbnRlbnQ6IGZhbHNlLFxyXG4gICAgICAgIHdvcmtlcjogYGF0ay1zZWFyY2gud29ya2VyLmpzYCxcclxuICAgICAgfSxcclxuICAgICAgc2VhcmNoOiAhIWt5bGluLFxyXG5cclxuICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIGNvbXBvbmVudHM6IFtcIkJhZGdlXCIsIFwiVlBDYXJkXCJdLFxyXG4gICAgICB9LFxyXG5cclxuXHJcbiAgICAgIC8vIFx1NkI2NFx1NTkwNFx1NUYwMFx1NTQyRlx1NEU4Nlx1NUY4OFx1NTkxQVx1NTI5Rlx1ODBGRFx1NzUyOFx1NEU4RVx1NkYxNFx1NzkzQVx1RkYwQ1x1NEY2MFx1NUU5NFx1NEVDNVx1NEZERFx1NzU1OVx1NzUyOFx1NTIzMFx1NzY4NFx1NTI5Rlx1ODBGRFx1MzAwMlxyXG4gICAgICBtZEVuaGFuY2U6IHtcclxuICAgICAgICBhbGlnbjogdHJ1ZSxcclxuICAgICAgICBhdHRyczogdHJ1ZSxcclxuICAgICAgICBjb2RldGFiczogdHJ1ZSxcclxuICAgICAgICBjb21wb25lbnQ6IHRydWUsXHJcbiAgICAgICAgZGVtbzogdHJ1ZSxcclxuICAgICAgICBmaWd1cmU6IHRydWUsXHJcbiAgICAgICAgaW1nTGF6eWxvYWQ6IHRydWUsXHJcbiAgICAgICAgaW1nU2l6ZTogdHJ1ZSxcclxuICAgICAgICAvL2ltZ01hcms6IHRydWUsXHJcbiAgICAgICAgaW5jbHVkZTogdHJ1ZSxcclxuICAgICAgICBtYXJrOiB0cnVlLFxyXG4gICAgICAgIHN0eWxpemU6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWF0Y2hlcjogXCJSZWNvbW1lbmRlZFwiLFxyXG4gICAgICAgICAgICByZXBsYWNlcjogKHsgdGFnIH0pID0+IHtcclxuICAgICAgICAgICAgICBpZiAodGFnID09PSBcImVtXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICB0YWc6IFwiQmFkZ2VcIixcclxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0aXBcIiB9LFxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlJlY29tbWVuZGVkXCIsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHN1YjogdHJ1ZSxcclxuICAgICAgICBzdXA6IHRydWUsXHJcbiAgICAgICAgdGFiczogdHJ1ZSxcclxuICAgICAgICB0YXNrbGlzdDogdHJ1ZSxcclxuICAgICAgICB2UHJlOiB0cnVlLFxyXG5cclxuICAgICAgICAvLyBcdTU3MjhcdTU0MkZcdTc1MjhcdTRFNEJcdTUyNERcdTVCODlcdTg4QzUgY2hhcnQuanNcclxuICAgICAgICAvLyBjaGFydDogdHJ1ZSxcclxuXHJcbiAgICAgICAgLy8gaW5zZXJ0IGNvbXBvbmVudCBlYXNpbHlcclxuXHJcbiAgICAgICAgLy8gXHU1NzI4XHU1NDJGXHU3NTI4XHU0RTRCXHU1MjREXHU1Qjg5XHU4OEM1IGVjaGFydHNcclxuICAgICAgICAvLyBlY2hhcnRzOiB0cnVlLFxyXG5cclxuICAgICAgICAvLyBcdTU3MjhcdTU0MkZcdTc1MjhcdTRFNEJcdTUyNERcdTVCODlcdTg4QzUgZmxvd2NoYXJ0LnRzXHJcbiAgICAgICAgLy8gZmxvd2NoYXJ0OiB0cnVlLFxyXG5cclxuICAgICAgICAvLyBnZm0gcmVxdWlyZXMgbWF0aGpheC1mdWxsIHRvIHByb3ZpZGUgdGV4IHN1cHBvcnRcclxuICAgICAgICBnZm06IHRydWUsXHJcblxyXG4gICAgICAgIC8vIFx1NTcyOFx1NTQyRlx1NzUyOFx1NEU0Qlx1NTI0RFx1NUI4OVx1ODhDNSBrYXRleFxyXG4gICAgICAgIC8vIGthdGV4OiB0cnVlLFxyXG5cclxuICAgICAgICAvLyBcdTU3MjhcdTU0MkZcdTc1MjhcdTRFNEJcdTUyNERcdTVCODlcdTg4QzUgbWF0aGpheC1mdWxsXHJcbiAgICAgICAgbWF0aGpheDoge1xyXG4gICAgICAgICAgdGV4OiB7XHJcbiAgICAgICAgICAgIHRhZ3M6IFwiYWxsXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBcdTU3MjhcdTU0MkZcdTc1MjhcdTRFNEJcdTUyNERcdTVCODlcdTg4QzUgbWVybWFpZFxyXG4gICAgICAgIC8vIG1lcm1haWQ6IHRydWUsXHJcblxyXG4gICAgICAgIC8vIHBsYXlncm91bmQ6IHtcclxuICAgICAgICAvLyAgIHByZXNldHM6IFtcInRzXCIsIFwidnVlXCJdLFxyXG4gICAgICAgIC8vIH0sXHJcblxyXG4gICAgICAgIC8vIFx1NTcyOFx1NTQyRlx1NzUyOFx1NEU0Qlx1NTI0RFx1NUI4OVx1ODhDNSByZXZlYWwuanNcclxuICAgICAgICAvLyByZXZlYWxKczoge1xyXG4gICAgICAgIC8vICAgcGx1Z2luczogW1wiaGlnaGxpZ2h0XCIsIFwibWF0aFwiLCBcInNlYXJjaFwiLCBcIm5vdGVzXCIsIFwiem9vbVwiXSxcclxuICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICAvLyBcdTU3MjhcdTU0MkZcdTc1MjhcdTRFNEJcdTUyNERcdTVCODlcdTg4QzUgQHZ1ZS9yZXBsXHJcbiAgICAgICAgLy8gdnVlUGxheWdyb3VuZDogdHJ1ZSxcclxuXHJcbiAgICAgICAgLy8gaW5zdGFsbCBzYW5kcGFjay12dWUzIGJlZm9yZSBlbmFibGluZyBpdFxyXG4gICAgICAgIC8vIHNhbmRwYWNrOiB0cnVlLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8gXHU1OTgyXHU2NzlDXHU0RjYwXHU5NzAwXHU4OTgxIFBXQVx1MzAwMlx1NUI4OVx1ODhDNSBAdnVlcHJlc3MvcGx1Z2luLXB3YSBcdTVFNzZcdTUzRDZcdTZEODhcdTRFMEJcdTY1QjlcdTZDRThcdTkxQ0FcclxuICAgICAgLy8gcHdhOiB7XHJcbiAgICAgIC8vICAgZmF2aWNvbjogXCIvZmF2aWNvbi5pY29cIixcclxuICAgICAgLy8gICBjYWNoZUhUTUw6IHRydWUsXHJcbiAgICAgIC8vICAgY2FjaGVQaWM6IHRydWUsXHJcbiAgICAgIC8vICAgYXBwZW5kQmFzZTogdHJ1ZSxcclxuICAgICAgLy8gICBhcHBsZToge1xyXG4gICAgICAvLyAgICAgaWNvbjogXCIvYXNzZXRzL2ljb24vYXBwbGUtaWNvbi0xNTIucG5nXCIsXHJcbiAgICAgIC8vICAgICBzdGF0dXNCYXJDb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vICAgbXNUaWxlOiB7XHJcbiAgICAgIC8vICAgICBpbWFnZTogXCIvYXNzZXRzL2ljb24vbXMtaWNvbi0xNDQucG5nXCIsXHJcbiAgICAgIC8vICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gICBtYW5pZmVzdDoge1xyXG4gICAgICAvLyAgICAgaWNvbnM6IFtcclxuICAgICAgLy8gICAgICAge1xyXG4gICAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLW1hc2stNTEyLnBuZ1wiLFxyXG4gICAgICAvLyAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcclxuICAgICAgLy8gICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXHJcbiAgICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgLy8gICAgICAgfSxcclxuICAgICAgLy8gICAgICAge1xyXG4gICAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLW1hc2stMTkyLnBuZ1wiLFxyXG4gICAgICAvLyAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcclxuICAgICAgLy8gICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXHJcbiAgICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgLy8gICAgICAgfSxcclxuICAgICAgLy8gICAgICAge1xyXG4gICAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLTUxMi5wbmdcIixcclxuICAgICAgLy8gICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXHJcbiAgICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgLy8gICAgICAgfSxcclxuICAgICAgLy8gICAgICAge1xyXG4gICAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLTE5Mi5wbmdcIixcclxuICAgICAgLy8gICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXHJcbiAgICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgLy8gICAgICAgfSxcclxuICAgICAgLy8gICAgIF0sXHJcbiAgICAgIC8vICAgICBzaG9ydGN1dHM6IFtcclxuICAgICAgLy8gICAgICAge1xyXG4gICAgICAvLyAgICAgICAgIG5hbWU6IFwiRGVtb1wiLFxyXG4gICAgICAvLyAgICAgICAgIHNob3J0X25hbWU6IFwiRGVtb1wiLFxyXG4gICAgICAvLyAgICAgICAgIHVybDogXCIvZGVtby9cIixcclxuICAgICAgLy8gICAgICAgICBpY29uczogW1xyXG4gICAgICAvLyAgICAgICAgICAge1xyXG4gICAgICAvLyAgICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2d1aWRlLW1hc2thYmxlLnBuZ1wiLFxyXG4gICAgICAvLyAgICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXHJcbiAgICAgIC8vICAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcclxuICAgICAgLy8gICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgLy8gICAgICAgICAgIH0sXHJcbiAgICAgIC8vICAgICAgICAgXSxcclxuICAgICAgLy8gICAgICAgfSxcclxuICAgICAgLy8gICAgIF0sXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICAvLyBiZWhhdmlvclxyXG4gIHtcclxuICAgIGN1c3RvbTogdHJ1ZVxyXG4gIH1cclxuICApO1xyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjovbW9uZXlQcm9qZWN0L0FUSy9zbXNhdC9hdGstZG9jLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcbW9uZXlQcm9qZWN0XFxcXEFUS1xcXFxzbXNhdFxcXFxhdGstZG9jXFxcXC52dWVwcmVzc1xcXFxuYXZiYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L21vbmV5UHJvamVjdC9BVEsvc21zYXQvYXRrLWRvYy8udnVlcHJlc3MvbmF2YmFyLnRzXCI7aW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VOYXZiYXIgPSAoeyB0eXBlIH0pID0+IHtcclxuICBsZXQgc3RhbmRhbG9uZSA9IHR5cGUgPT0gXCJzdGFuZGFsb25lXCI7XHJcbiAgbGV0IGdpdGxhYiA9IHR5cGUgPT0gXCJnaXRsYWJcIlxyXG4gIHJldHVybiBuYXZiYXIoW1xyXG4gICAgeyB0ZXh0OiBcIlx1NUUyRVx1NTJBOVx1NjU4N1x1Njg2M1wiLCBsaW5rOiBcIi9cIiB9LFxyXG4gICAgeyB0ZXh0OiBcIlx1NEU4Q1x1NkIyMVx1NUYwMFx1NTNEMVx1NjU1OVx1N0EwQlwiLCBsaW5rOiBcIi9cdTRFOENcdTZCMjFcdTVGMDBcdTUzRDFcdTY1NTlcdTdBMEIvXCIgfSxcclxuICAgIHsgdGV4dDogXCJcdTdFRkNcdTU0MDhcdTY4NDhcdTRGOEJcIiwgbGluazogXCIvXHU3RUZDXHU1NDA4XHU2ODQ4XHU0RjhCL1wiIH0sXHJcbiAgXSlcclxufTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOi9tb25leVByb2plY3QvQVRLL3Ntc2F0L2F0ay1kb2MvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxtb25leVByb2plY3RcXFxcQVRLXFxcXHNtc2F0XFxcXGF0ay1kb2NcXFxcLnZ1ZXByZXNzXFxcXHNpZGViYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L21vbmV5UHJvamVjdC9BVEsvc21zYXQvYXRrLWRvYy8udnVlcHJlc3Mvc2lkZWJhci50c1wiO2ltcG9ydCB7IHNpZGViYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhcih7XHJcbiAgXCIvXHU3RUZDXHU1NDA4XHU2ODQ4XHU0RjhCL1wiOiBcInN0cnVjdHVyZVwiLFxyXG4gIFwiL1x1NEU4Q1x1NkIyMVx1NUYwMFx1NTNEMVx1NjU1OVx1N0EwQi9cIjogXCJzdHJ1Y3R1cmVcIixcclxuICBcIi9cIjogW1xyXG4gICAgLy8gXCJcIixcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJcdTVCODlcdTg4QzVcIixcclxuICAgICAgcHJlZml4OiBcIjAxLVx1NUI4OVx1ODhDNS9cIixcclxuICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJcdTY4NDhcdTRGOEJcdTY1NTlcdTdBMEJcIixcclxuICAgICAgcHJlZml4OiBcIjAyLVx1Njg0OFx1NEY4Qlx1NjU1OVx1N0EwQi9cIixcclxuICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJcdTU3RkFcdTc4NDBcdTRGN0ZcdTc1MjhcdTYzMDdcdTUzNTdcIixcclxuICAgICAgcHJlZml4OiBcIjAzLVx1NTdGQVx1Nzg0MFx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny9cIixcclxuICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJcdTc0MDZcdThCQkFcdTU3RkFcdTc4NDBcIixcclxuICAgICAgcHJlZml4OiBcIjA0LVx1NzQwNlx1OEJCQVx1NTdGQVx1Nzg0MC9cIixcclxuICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJcdTRFMTNcdTRFMUFcdTRGN0ZcdTc1MjhcdTYzMDdcdTUzNTdcIixcclxuICAgICAgcHJlZml4OiBcIjUuXHU0RTEzXHU0RTFBXHU0RjdGXHU3NTI4XHU2MzA3XHU1MzU3L1wiLFxyXG4gICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcclxuICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlx1NTNEOFx1NjZGNFx1NEUwRVx1NjUyRlx1NjMwMVwiLFxyXG4gICAgICBwcmVmaXg6IFwiXHU1M0QxXHU1RTAzXHU4QkY0XHU2NjBFL1wiLFxyXG4gICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcclxuICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pOyIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjovbW9uZXlQcm9qZWN0L0FUSy9zbXNhdC9hdGstZG9jLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcbW9uZXlQcm9qZWN0XFxcXEFUS1xcXFxzbXNhdFxcXFxhdGstZG9jXFxcXC52dWVwcmVzc1xcXFxyZWRpcmVjdC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovbW9uZXlQcm9qZWN0L0FUSy9zbXNhdC9hdGstZG9jLy52dWVwcmVzcy9yZWRpcmVjdC50c1wiO2V4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8vIFx1N0VEOUFUS1x1NzU0Q1x1OTc2Mlx1NzUyOFx1NzY4NFx1OTFDRFx1NUI5QVx1NTQxMVx1N0Y1MVx1OTg3NVx1RkYwQ1x1OTcwMFx1ODk4MVx1N0VEOUFUS1x1NjNEMFx1NEY5QmAvdG9waWNzL2BcdTU0MEVcdTk3NjJcdTc2ODRcdTUxNzNcdTk1MkVcdThCQ0RcdUZGMENcdTc1NENcdTk3NjJcdTcwQjlcdTUxRkJgXHU1RTJFXHU1MkE5YFx1NTM3M1x1NTNFRlx1OERGM1x1OEY2Q1x1NTIzMFx1NzZGOFx1NUU5NFx1NzY4NFx1NzU0Q1x1OTc2MlxyXG4gICAgY29uZmlnOnsgXHJcbiAgICAgICAgLy8gXHU5QUQ4XHU3RUE3XHU1REU1XHU1MTc3XHVGRjA4XHU4REVGXHU1Rjg0XHU1QzNEXHU1M0VGXHU4MEZEXHU3N0VEXHU0RTAwXHU3MEI5XHVGRjBDXHU1QzA2UHJvZmVzc2lvbmFsVG9vbHNcdTY1MzlcdTRFM0FUb29sXHVGRjBDXHU0RTBCXHU5NzYyXHU4RkQ5XHU0RTlCXHU0RTBEXHU1MkE4XHU0RTg2XHVGRjBDXHU0RTVGXHU1MjJCXHU2REZCXHU1MkEwXHU2NUIwXHU3Njg0XHU0RTg2XHVGRjA5XHJcbiAgICAgICAgXCIvdG9waWNzL1Byb2Zlc3Npb25hbFRvb2xzL0FjY2Vzc1wiOiAgICAgICAgICAgICAgICAgICAgICAgXCIvNS5cdTRFMTNcdTRFMUFcdTRGN0ZcdTc1MjhcdTYzMDdcdTUzNTcvMDEtXHU1M0VGXHU4OUMxXHU2MDI3XHU0RTBFXHU4OTg2XHU3NkQ2XHU1MjA2XHU2NzkwLzAxLVx1NTNFRlx1ODlDMVx1NjAyN1x1NURFNVx1NTE3Ny5odG1sXCIsICAgICAvL1x1NTcyOFx1NURFNVx1NTE3Ny1cdTUzRUZcdTg5QzFcdTYwMjdcdTVGMzlcdTUxRkFcdTc2ODRcdTUzRjNcdTRFMEJcdTg5RDJcdTU4OUVcdTUyQTBcdTIwMUNoZWxwXHUyMDFEXHU2MzA5XHU5NEFFIFxyXG4gICAgICAgIFwiL3RvcGljcy9Qcm9mZXNzaW9uYWxUb29scy9Db3ZlcmFnZVwiOiAgICAgICAgICAgICAgICAgICAgIFwiLzUuXHU0RTEzXHU0RTFBXHU0RjdGXHU3NTI4XHU2MzA3XHU1MzU3LzAxLVx1NTNFRlx1ODlDMVx1NjAyN1x1NEUwRVx1ODk4Nlx1NzZENlx1NTIwNlx1Njc5MC8wMi1cdTg5ODZcdTc2RDZcdTYwMjdcdTVERTVcdTUxNzcuaHRtbFwiLCAgICAgICAvL1x1NTcyOFx1NURFNVx1NTE3Ny1cdTg5ODZcdTc2RDZcdTYwMjdcdTVGMzlcdTUxRkFcdTc2ODRcdTUzRjNcdTRFMEJcdTg5RDJcdTU4OUVcdTUyQTBcdTIwMUNoZWxwXHUyMDFEXHU2MzA5XHU5NEFFIFxyXG4gICAgICAgIFwiL3RvcGljcy9Qcm9mZXNzaW9uYWxUb29scy9CYXRjaGVkQ29vcmRUcmFuc2Zvcm1hdGlvblwiOiAgIFwiLzUuXHU0RTEzXHU0RTFBXHU0RjdGXHU3NTI4XHU2MzA3XHU1MzU3LzA0LVx1NjI3OVx1OTFDRlx1NTc1MFx1NjgwN1x1OEY2Q1x1NjM2Mlx1NURFNVx1NTE3Ny5odG1sXCIsICAgLy9cdTU3MjhcdTVERTVcdTUxNzctXHU2Mjc5XHU5MUNGXHU1NzUwXHU2ODA3XHU4RjZDXHU2MzYyXHU1RjM5XHU1MUZBXHU3Njg0XHU1M0YzXHU0RTBCXHU4OUQyXHU1ODlFXHU1MkEwXHUyMDFDaGVscFx1MjAxRFx1NjMwOVx1OTRBRSBcclxuICAgICAgICBcIi90b3BpY3MvUHJvZmVzc2lvbmFsVG9vbHMvQ0FUXCI6ICAgICAgICAgICAgICAgICAgICAgICAgICBcIi81Llx1NEUxM1x1NEUxQVx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8wNy1cdTYzQTVcdThGRDFcdTUyMDZcdTY3OTAuaHRtbFwiLCAgICAgICAvL1x1NTcyOFx1NURFNVx1NTE3Ny1cdTYzQTVcdThGRDFcdTUyMDZcdTY3OTBcdTVGMzlcdTUxRkFcdTc2ODRcdTUzRjNcdTRFMEJcdTg5RDJcdTU4OUVcdTUyQTBcdTIwMUNoZWxwXHUyMDFEXHU2MzA5XHU5NEFFIFxyXG4gICAgICAgIFwiL3RvcGljcy9Qcm9mZXNzaW9uYWxUb29scy9DYW1TYWZldHlBbmFseXNpc1wiOiAgICAgICAgICAgIFwiLzUuXHU0RTEzXHU0RTFBXHU0RjdGXHU3NTI4XHU2MzA3XHU1MzU3LzA4LVx1NzhCMFx1NjQ5RVx1ODlDNFx1OTA3Ri5odG1sXCIsICAgICAgICAgICAvL1x1NTcyOFx1NURFNVx1NTE3Ny1cdTc4QjBcdTY0OUVcdTg5QzRcdTkwN0ZcdTVGMzlcdTUxRkFcdTc2ODRcdTUzRjNcdTRFMEJcdTg5RDJcdTU4OUVcdTUyQTBcdTIwMUNoZWxwXHUyMDFEXHU2MzA5XHU5NEFFIFxyXG4gICAgICAgIFwiL3RvcGljcy9Qcm9mZXNzaW9uYWxUb29scy9Db25zdGVsbGF0aW9uQW5hbHlzaXNcIjogICAgICAgIFwiLzUuXHU0RTEzXHU0RTFBXHU0RjdGXHU3NTI4XHU2MzA3XHU1MzU3LzA1LVx1NjYxRlx1NUVBN1x1OEJCRVx1OEJBMVx1NURFNVx1NTE3Ny5odG1sXCIsICAgICAgICAgICAvL1x1NTcyOFx1NURFNVx1NTE3Ny1cdTY2MUZcdTVFQTdcdThCQkVcdThCQTFcdTVGMzlcdTUxRkFcdTc2ODRcdTUzRjNcdTRFMEJcdTg5RDJcdTU4OUVcdTUyQTBcdTIwMUNoZWxwXHUyMDFEXHU2MzA5XHU5NEFFIFxyXG4gICAgICAgIFwiL3RvcGljcy9Qcm9mZXNzaW9uYWxUb29scy9SZWdpb25Db3ZlcmFnZVwiOiAgICAgICAgICAgICAgIFwiLzUuXHU0RTEzXHU0RTFBXHU0RjdGXHU3NTI4XHU2MzA3XHU1MzU3LzAxLVx1NTNFRlx1ODlDMVx1NjAyN1x1NEUwRVx1ODk4Nlx1NzZENlx1NTIwNlx1Njc5MC8wMy1cdTUzM0FcdTU3REZcdTg5ODZcdTc2RDZcdTUyMDZcdTY3OTAuaHRtbFwiLCAgICAgIC8vXHU1NzI4XHU1REU1XHU1MTc3LVx1NTMzQVx1NTdERlx1ODk4Nlx1NzZENlx1NUYzOVx1NTFGQVx1NzY4NFx1NTNGM1x1NEUwQlx1ODlEMlx1NTg5RVx1NTJBMFx1MjAxQ2hlbHBcdTIwMURcdTYzMDlcdTk0QUUgXHJcbiAgICAgICAgXCIvdG9waWNzL1Byb2Zlc3Npb25hbFRvb2xzL0NVaUNvbnN0ZWxsYXRpb25EZXNpZ25cIjogICAgICAgXCIvNS5cdTRFMTNcdTRFMUFcdTRGN0ZcdTc1MjhcdTYzMDdcdTUzNTcvMDYtXHU5QUQ4XHU3RUE3XHU2NjFGXHU1RUE3XHU4QkJFXHU4QkExLmh0bWxcIiwgICAvL1x1NTcyOFx1NURFNVx1NTE3Ny1cdTlBRDhcdTdFQTdcdTY2MUZcdTVFQTdcdThCQkVcdThCQTFcdTVGMzlcdTUxRkFcdTc2ODRcdTUzRjNcdTRFMEJcdTg5RDJcdTU4OUVcdTUyQTBcdTIwMUNoZWxwXHUyMDFEXHU2MzA5XHU5NEFFIFxyXG4gICAgICAgIFwiL3RvcGljcy9Qcm9mZXNzaW9uYWxUb29scy9NYW5ldWVyXCI6ICAgICAgICAgICAgICAgICAgICAgIFwiLzUuXHU0RTEzXHU0RTFBXHU0RjdGXHU3NTI4XHU2MzA3XHU1MzU3LzEzLVx1OEY2OFx1OTA1M1x1NjczQVx1NTJBOFx1ODlDNFx1NTIxMlx1NURFNVx1NTE3Ny8xLVx1NjczQVx1NTJBOFx1ODlDNFx1NTIxMlx1NTI5Rlx1ODBGRFx1NEVDQlx1N0VDRC5odG1sXCIsICAgLy9cdTU3MjhcdTVERTVcdTUxNzctXHU2NzNBXHU1MkE4XHU1MjA2XHU2NzkwXHU1RjM5XHU1MUZBXHU3Njg0XHU1M0YzXHU0RTBCXHU4OUQyXHU1ODlFXHU1MkEwXHUyMDFDaGVscFx1MjAxRFx1NjMwOVx1OTRBRSBcclxuICAgICAgICBcIi90b3BpY3MvUHJvZmVzc2lvbmFsVG9vbHMvUmVlbnRyeVJlY292ZXJ5XCI6ICAgICAgICAgICAgICBcIi81Llx1NEUxM1x1NEUxQVx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8wOS1cdTUxOERcdTUxNjVcdTU2REVcdTY1MzZcdTUyMDZcdTY3OTAuaHRtbFwiLCAgIC8vXHU1NzI4XHU1REU1XHU1MTc3LVx1NTE4RFx1NTE2NVx1NTZERVx1NjUzNlx1NUYzOVx1NTFGQVx1NzY4NFx1NTNGM1x1NEUwQlx1ODlEMlx1NTg5RVx1NTJBMFx1MjAxQ2hlbHBcdTIwMURcdTYzMDlcdTk0QUUgXHJcbiAgICAgICAgXCIvdG9waWNzL1Byb2Zlc3Npb25hbFRvb2xzL0xpZmVUaW1lXCI6ICAgICAgICAgICAgICAgICAgICAgXCIvNS5cdTRFMTNcdTRFMUFcdTRGN0ZcdTc1MjhcdTYzMDdcdTUzNTcvMTEtXHU1MzZCXHU2NjFGXHU1REU1XHU1MTc3LzE2LVx1NUJGRlx1NTQ3RFx1OTg4NFx1NjJBNVx1NkEyMVx1NTc1Ny5odG1sXCIsICAgLy9cdTU3MjhcdTVERTVcdTUxNzctXHU1QkZGXHU1NDdEXHU5ODg0XHU2MkE1XHU1RjM5XHU1MUZBXHU3Njg0XHU1M0YzXHU0RTBCXHU4OUQyXHU1ODlFXHU1MkEwXHUyMDFDaGVscFx1MjAxRFx1NjMwOVx1OTRBRSBcclxuICAgICAgICBcIi90b3BpY3MvUHJvZmVzc2lvbmFsVG9vbHMvVmVjdG9yR2VvbWV0cnlUb29sXCI6ICAgICAgICAgICBcIi81Llx1NEUxM1x1NEUxQVx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8xMC1cdTc3RTJcdTkxQ0ZcdTUxRTBcdTRGNTVcdTVERTVcdTUxNzcuaHRtbFwiLCAgIC8vXHU1NzI4XHU1REU1XHU1MTc3LVx1NzdFMlx1OTFDRlx1NTFFMFx1NEY1NVx1NURFNVx1NTE3N1x1NUYzOVx1NTFGQVx1NzY4NFx1NTNGM1x1NEUwQlx1ODlEMlx1NTg5RVx1NTJBMFx1MjAxQ2hlbHBcdTIwMURcdTYzMDlcdTk0QUUgXHJcbiAgICAgICAgXCIvdG9waWNzL1Byb2Zlc3Npb25hbFRvb2xzL1NjcmlwdFRvb2xcIjogICAgICAgICAgICAgICAgICAgXCIvNS5cdTRFMTNcdTRFMUFcdTRGN0ZcdTc1MjhcdTYzMDdcdTUzNTcvMTgtXHU4MTFBXHU2NzJDXHU1REU1XHU1MTc3LzEtXHU4MTFBXHU2NzJDXHU1REU1XHU1MTc3Lmh0bWxcIiwgICBcclxuICAgICAgICBcclxuICAgICAgICAvLyBcdTVERTVcdTUxNzdcclxuICAgICAgICBcIi90b3BpY3MvVG9vbC9BY2Nlc3NcIjogICAgICAgICAgICAgICAgICAgICAgIFwiLzUuXHU0RTEzXHU0RTFBXHU0RjdGXHU3NTI4XHU2MzA3XHU1MzU3LzAxLVx1NTNFRlx1ODlDMVx1NjAyN1x1NEUwRVx1ODk4Nlx1NzZENlx1NTIwNlx1Njc5MC8wMS1cdTUzRUZcdTg5QzFcdTYwMjdcdTVERTVcdTUxNzcuaHRtbFwiLCAgICAgICAgICAgICAvL1x1NTcyOFx1NURFNVx1NTE3Ny1cdTUzRUZcdTg5QzFcdTYwMjdcdTVGMzlcdTUxRkFcdTc2ODRcdTUzRjNcdTRFMEJcdTg5RDJcdTU4OUVcdTUyQTBcdTIwMUNoZWxwXHUyMDFEXHU2MzA5XHU5NEFFIFxyXG4gICAgICAgIFwiL3RvcGljcy9Ub29sL0NvdmVyYWdlXCI6ICAgICAgICAgICAgICAgICAgICAgXCIvNS5cdTRFMTNcdTRFMUFcdTRGN0ZcdTc1MjhcdTYzMDdcdTUzNTcvMDEtXHU1M0VGXHU4OUMxXHU2MDI3XHU0RTBFXHU4OTg2XHU3NkQ2XHU1MjA2XHU2NzkwLzAyLVx1ODk4Nlx1NzZENlx1NjAyN1x1NURFNVx1NTE3Ny5odG1sXCIsICAgICAgICAgICAgICAgLy9cdTU3MjhcdTVERTVcdTUxNzctXHU4OTg2XHU3NkQ2XHU2MDI3XHU1RjM5XHU1MUZBXHU3Njg0XHU1M0YzXHU0RTBCXHU4OUQyXHU1ODlFXHU1MkEwXHUyMDFDaGVscFx1MjAxRFx1NjMwOVx1OTRBRSBcclxuICAgICAgICBcIi90b3BpY3MvVG9vbC9CYXRjaGVkQ29vcmRUcmFuc2Zvcm1hdGlvblwiOiAgIFwiLzUuXHU0RTEzXHU0RTFBXHU0RjdGXHU3NTI4XHU2MzA3XHU1MzU3LzA0LVx1NjI3OVx1OTFDRlx1NTc1MFx1NjgwN1x1OEY2Q1x1NjM2Mlx1NURFNVx1NTE3Ny5odG1sXCIsICAgICAgIC8vXHU1NzI4XHU1REU1XHU1MTc3LVx1NjI3OVx1OTFDRlx1NTc1MFx1NjgwN1x1OEY2Q1x1NjM2Mlx1NUYzOVx1NTFGQVx1NzY4NFx1NTNGM1x1NEUwQlx1ODlEMlx1NTg5RVx1NTJBMFx1MjAxQ2hlbHBcdTIwMURcdTYzMDlcdTk0QUUgXHJcbiAgICAgICAgXCIvdG9waWNzL1Rvb2wvQ0FUXCI6ICAgICAgICAgICAgICAgICAgICAgICAgICBcIi81Llx1NEUxM1x1NEUxQVx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8wNy1cdTYzQTVcdThGRDFcdTUyMDZcdTY3OTAuaHRtbFwiLCAgICAgICAgICAgLy9cdTU3MjhcdTVERTVcdTUxNzctXHU2M0E1XHU4RkQxXHU1MjA2XHU2NzkwXHU1RjM5XHU1MUZBXHU3Njg0XHU1M0YzXHU0RTBCXHU4OUQyXHU1ODlFXHU1MkEwXHUyMDFDaGVscFx1MjAxRFx1NjMwOVx1OTRBRSBcclxuICAgICAgICBcIi90b3BpY3MvVG9vbC9DYW1TYWZldHlBbmFseXNpc1wiOiAgICAgICAgICAgIFwiLzUuXHU0RTEzXHU0RTFBXHU0RjdGXHU3NTI4XHU2MzA3XHU1MzU3LzA4LVx1NzhCMFx1NjQ5RVx1ODlDNFx1OTA3Ri5odG1sXCIsICAgICAgICAgICAvL1x1NTcyOFx1NURFNVx1NTE3Ny1cdTc4QjBcdTY0OUVcdTg5QzRcdTkwN0ZcdTVGMzlcdTUxRkFcdTc2ODRcdTUzRjNcdTRFMEJcdTg5RDJcdTU4OUVcdTUyQTBcdTIwMUNoZWxwXHUyMDFEXHU2MzA5XHU5NEFFIFxyXG4gICAgICAgIFwiL3RvcGljcy9Ub29sL0NvbnN0ZWxsYXRpb25BbmFseXNpc1wiOiAgICAgICAgXCIvNS5cdTRFMTNcdTRFMUFcdTRGN0ZcdTc1MjhcdTYzMDdcdTUzNTcvMDUtXHU2NjFGXHU1RUE3XHU4QkJFXHU4QkExXHU1REU1XHU1MTc3Lmh0bWxcIiwgICAgICAgICAgIC8vXHU1NzI4XHU1REU1XHU1MTc3LVx1NjYxRlx1NUVBN1x1OEJCRVx1OEJBMVx1NUYzOVx1NTFGQVx1NzY4NFx1NTNGM1x1NEUwQlx1ODlEMlx1NTg5RVx1NTJBMFx1MjAxQ2hlbHBcdTIwMURcdTYzMDlcdTk0QUUgXHJcbiAgICAgICAgXCIvdG9waWNzL1Rvb2wvUmVnaW9uQ292ZXJhZ2VcIjogICAgICAgICAgICAgICBcIi81Llx1NEUxM1x1NEUxQVx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8wMS1cdTUzRUZcdTg5QzFcdTYwMjdcdTRFMEVcdTg5ODZcdTc2RDZcdTUyMDZcdTY3OTAvMDMtXHU1MzNBXHU1N0RGXHU4OTg2XHU3NkQ2XHU1MjA2XHU2NzkwLmh0bWxcIiwgICAgICAgICAgIC8vXHU1NzI4XHU1REU1XHU1MTc3LVx1NTMzQVx1NTdERlx1ODk4Nlx1NzZENlx1NUYzOVx1NTFGQVx1NzY4NFx1NTNGM1x1NEUwQlx1ODlEMlx1NTg5RVx1NTJBMFx1MjAxQ2hlbHBcdTIwMURcdTYzMDlcdTk0QUUgXHJcbiAgICAgICAgXCIvdG9waWNzL1Rvb2wvQ1VpQ29uc3RlbGxhdGlvbkRlc2lnblwiOiAgICAgICBcIi81Llx1NEUxM1x1NEUxQVx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8wNi1cdTlBRDhcdTdFQTdcdTY2MUZcdTVFQTdcdThCQkVcdThCQTEuaHRtbFwiLCAgIC8vXHU1NzI4XHU1REU1XHU1MTc3LVx1OUFEOFx1N0VBN1x1NjYxRlx1NUVBN1x1OEJCRVx1OEJBMVx1NUYzOVx1NTFGQVx1NzY4NFx1NTNGM1x1NEUwQlx1ODlEMlx1NTg5RVx1NTJBMFx1MjAxQ2hlbHBcdTIwMURcdTYzMDlcdTk0QUUgXHJcbiAgICAgICAgXCIvdG9waWNzL1Rvb2wvTWFuZXVlclwiOiAgICAgICAgICAgICAgICAgICAgICBcIi81Llx1NEUxM1x1NEUxQVx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8xMy1cdThGNjhcdTkwNTNcdTY3M0FcdTUyQThcdTg5QzRcdTUyMTJcdTVERTVcdTUxNzcvMS1cdTY3M0FcdTUyQThcdTg5QzRcdTUyMTJcdTUyOUZcdTgwRkRcdTRFQ0JcdTdFQ0QuaHRtbFwiLCAgICAgICAvL1x1NTcyOFx1NURFNVx1NTE3Ny1cdTY3M0FcdTUyQThcdTUyMDZcdTY3OTBcdTVGMzlcdTUxRkFcdTc2ODRcdTUzRjNcdTRFMEJcdTg5RDJcdTU4OUVcdTUyQTBcdTIwMUNoZWxwXHUyMDFEXHU2MzA5XHU5NEFFIFxyXG4gICAgICAgIFwiL3RvcGljcy9Ub29sL1JlZW50cnlSZWNvdmVyeVwiOiAgICAgICAgICAgICAgXCIvNS5cdTRFMTNcdTRFMUFcdTRGN0ZcdTc1MjhcdTYzMDdcdTUzNTcvMDktXHU1MThEXHU1MTY1XHU1NkRFXHU2NTM2XHU1MjA2XHU2NzkwLmh0bWxcIiwgICAgICAgICAgIC8vXHU1NzI4XHU1REU1XHU1MTc3LVx1NTE4RFx1NTE2NVx1NTZERVx1NjUzNlx1NUYzOVx1NTFGQVx1NzY4NFx1NTNGM1x1NEUwQlx1ODlEMlx1NTg5RVx1NTJBMFx1MjAxQ2hlbHBcdTIwMURcdTYzMDlcdTk0QUUgXHJcbiAgICAgICAgXCIvdG9waWNzL1Rvb2wvTGlmZVRpbWVcIjogICAgICAgICAgICAgICAgICAgICBcIi81Llx1NEUxM1x1NEUxQVx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8xMS1cdTUzNkJcdTY2MUZcdTVERTVcdTUxNzcvMTYtXHU1QkZGXHU1NDdEXHU5ODg0XHU2MkE1XHU2QTIxXHU1NzU3Lmh0bWxcIiwgICAgICAgICAgIC8vXHU1NzI4XHU1REU1XHU1MTc3LVx1NUJGRlx1NTQ3RFx1OTg4NFx1NjJBNVx1NUYzOVx1NTFGQVx1NzY4NFx1NTNGM1x1NEUwQlx1ODlEMlx1NTg5RVx1NTJBMFx1MjAxQ2hlbHBcdTIwMURcdTYzMDlcdTk0QUUgXHJcbiAgICAgICAgXCIvdG9waWNzL1Rvb2wvVmVjdG9yR2VvbWV0cnlUb29sXCI6ICAgICAgICAgICBcIi81Llx1NEUxM1x1NEUxQVx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8xMC1cdTc3RTJcdTkxQ0ZcdTUxRTBcdTRGNTVcdTVERTVcdTUxNzcuaHRtbFwiLCAgICAgICAgICAgLy9cdTU3MjhcdTVERTVcdTUxNzctXHU3N0UyXHU5MUNGXHU1MUUwXHU0RjU1XHU1REU1XHU1MTc3XHU1RjM5XHU1MUZBXHU3Njg0XHU1M0YzXHU0RTBCXHU4OUQyXHU1ODlFXHU1MkEwXHUyMDFDaGVscFx1MjAxRFx1NjMwOVx1OTRBRSBcclxuICAgICAgICBcIi90b3BpY3MvVG9vbC9TY3JpcHRUb29sXCI6ICAgICAgICAgICAgICAgICAgIFwiLzUuXHU0RTEzXHU0RTFBXHU0RjdGXHU3NTI4XHU2MzA3XHU1MzU3LzE4LVx1ODExQVx1NjcyQ1x1NURFNVx1NTE3Ny8xLVx1ODExQVx1NjcyQ1x1NURFNVx1NTE3Ny5odG1sXCIsICAgICBcclxuICAgICAgICBcIi90b3BpY3MvVG9vbC9MV0NBVFwiOiAgICAgICAgICAgICAgICAgICAgICAgIFwiLzUuXHU0RTEzXHU0RTFBXHU0RjdGXHU3NTI4XHU2MzA3XHU1MzU3LzE5LVx1NTNEMVx1NUMwNFx1N0E5N1x1NTNFM1x1NjNBNVx1OEZEMVx1NTIwNlx1Njc5MFx1NURFNVx1NTE3Ny5odG1sXCIsICAgICAgICAgICAgLy9cdTU3MjhcdTVERTVcdTUxNzctXHU1M0QxXHU1QzA0XHU3QTk3XHU1M0UzXHU2M0E1XHU4RkQxXHU1MjA2XHU2NzkwXHU1RjM5XHU1MUZBXHU3Njg0XHU1M0YzXHU0RTBCXHU4OUQyXHU1ODlFXHU1MkEwXHUyMDFDaGVscFx1MjAxRFx1NjMwOVx1OTRBRVxyXG4gICAgICAgIFwiL3RvcGljcy9Ub29sL0FkdkNBVC9NYWluXCI6ICAgICAgICAgICAgICAgICAgXCIvNS5cdTRFMTNcdTRFMUFcdTRGN0ZcdTc1MjhcdTYzMDdcdTUzNTcvMDUtXHU5QUQ4XHU3RUE3XHU2M0E1XHU4RkQxXHU1MjA2XHU2NzkwLmh0bWwjXHU0RTNCXHU5MTREXHU3RjZFXHU3NTRDXHU5NzYyXCIsICAgICAgLy9cdTU3MjhcdTVCRjlcdThDNjEtXHU5QUQ4XHU3RUE3XHU2M0E1XHU4RkQxXHU1MjA2XHU2NzkwXHU0RTNCXHU5MTREXHU3RjZFXHU3NTRDXHU5NzYyXHVGRjBDXHU1M0YzXHU0RTBCXHU4OUQyXHU3Njg0XHUyMDFDaGVscFx1MjAxRFx1NjMwOVx1OTRBRVxyXG4gICAgICAgIFwiL3RvcGljcy9Ub29sL0FkdkNBVC9BZHZhbmNlZFwiOiAgICAgICAgICAgICAgXCIvNS5cdTRFMTNcdTRFMUFcdTRGN0ZcdTc1MjhcdTYzMDdcdTUzNTcvMDUtXHU5QUQ4XHU3RUE3XHU2M0E1XHU4RkQxXHU1MjA2XHU2NzkwLmh0bWwjXHU5QUQ4XHU3RUE3XHU3NTRDXHU5NzYyXCIsICAgICAgICAvL1x1NTcyOFx1NUJGOVx1OEM2MS1cdTlBRDhcdTdFQTdcdTYzQTVcdThGRDFcdTUyMDZcdTY3OTBcdTlBRDhcdTdFQTdcdTc1NENcdTk3NjJcdUZGMENcdTUzRjNcdTRFMEJcdTg5RDJcdTc2ODRcdTIwMUNoZWxwXHUyMDFEXHU2MzA5XHU5NEFFXHJcbiAgICAgICAgXCIvdG9waWNzL1Rvb2wvQWR2Q0FUL05vbmVsaW5lYXJcIjogICAgICAgICAgICBcIi81Llx1NEUxM1x1NEUxQVx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8wNS1cdTlBRDhcdTdFQTdcdTYzQTVcdThGRDFcdTUyMDZcdTY3OTAuaHRtbCNcdTk3NUVcdTdFQkZcdTYwMjdcdThCQTFcdTdCOTdcdTc1NENcdTk3NjJcIiwgIC8vXHU1NzI4XHU1QkY5XHU4QzYxLVx1OUFEOFx1N0VBN1x1NjNBNVx1OEZEMVx1NTIwNlx1Njc5MFx1OTc1RVx1N0VCRlx1NjAyN1x1OEJBMVx1N0I5N1x1NzU0Q1x1OTc2Mlx1RkYwQ1x1NTNGM1x1NEUwQlx1ODlEMlx1NzY4NFx1MjAxQ2hlbHBcdTIwMURcdTYzMDlcdTk0QUVcclxuICAgICAgICBcIi90b3BpY3MvVG9vbC9BZHZDQVQvRGlzcGxheVwiOiAgICAgICAgICAgICAgIFwiLzUuXHU0RTEzXHU0RTFBXHU0RjdGXHU3NTI4XHU2MzA3XHU1MzU3LzA1LVx1OUFEOFx1N0VBN1x1NjNBNVx1OEZEMVx1NTIwNlx1Njc5MC5odG1sI1x1NjYzRVx1NzkzQVx1NzU0Q1x1OTc2MlwiLCAgICAgICAgLy9cdTU3MjhcdTVCRjlcdThDNjEtXHU5QUQ4XHU3RUE3XHU2M0E1XHU4RkQxXHU1MjA2XHU2NzkwXHU2NjNFXHU3OTNBXHU3NTRDXHU5NzYyXHVGRjBDXHU1M0YzXHU0RTBCXHU4OUQyXHU3Njg0XHUyMDFDaGVscFx1MjAxRFx1NjMwOVx1OTRBRVxyXG4gICAgICAgIFwiL3RvcGljcy9Ub29sL0xhc2VyQ0FUXCI6ICAgICAgICAgICAgICAgICAgICAgXCIvNS5cdTRFMTNcdTRFMUFcdTRGN0ZcdTc1MjhcdTYzMDdcdTUzNTcvMjEtXHU2RkMwXHU1MTQ5XHU2M0E1XHU4RkQxXHU1MjA2XHU2NzkwXHU1REU1XHU1MTc3Lmh0bWxcIiwgICAgICAgICAgICAgICAgLy9cdTU3MjhcdTVERTVcdTUxNzctXHU2RkMwXHU1MTQ5XHU2M0E1XHU4RkQxXHU1MjA2XHU2NzkwXHU1RjM5XHU1MUZBXHU3Njg0XHU1M0YzXHU0RTBCXHU4OUQyXHU1ODlFXHU1MkEwXHUyMDFDaGVscFx1MjAxRFx1NjMwOVx1OTRBRVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvLyBcdTY3M0FcdTUyQThcdTg5QzRcdTUyMTIgQXN0cm9NYXN0ZXJcclxuICAgICAgICBcIi90b3BpY3MvQXN0cm9NYXN0ZXIvSW5pdGlhbFN0YXRlXCI6ICAgICAgICAgICAgICAgICAgXCIvNS5cdTRFMTNcdTRFMUFcdTRGN0ZcdTc1MjhcdTYzMDdcdTUzNTcvMTMtXHU4RjY4XHU5MDUzXHU2NzNBXHU1MkE4XHU4OUM0XHU1MjEyXHU1REU1XHU1MTc3LzItXHU1MjFEXHU1OUNCXHU2QkI1Lmh0bWxcIixcclxuICAgICAgICBcIi90b3BpY3MvQXN0cm9NYXN0ZXIvTWFuZXV2ZXJcIjogICAgICAgICAgICAgICAgICAgICAgXCIvNS5cdTRFMTNcdTRFMUFcdTRGN0ZcdTc1MjhcdTYzMDdcdTUzNTcvMTMtXHU4RjY4XHU5MDUzXHU2NzNBXHU1MkE4XHU4OUM0XHU1MjEyXHU1REU1XHU1MTc3LzQtXHU2NzNBXHU1MkE4XHU2QkI1Lmh0bWxcIixcclxuICAgICAgICBcIi90b3BpY3MvQXN0cm9NYXN0ZXIvUHJvcGFnYXRlXCI6ICAgICAgICAgICAgICAgICAgICAgXCIvNS5cdTRFMTNcdTRFMUFcdTRGN0ZcdTc1MjhcdTYzMDdcdTUzNTcvMTMtXHU4RjY4XHU5MDUzXHU2NzNBXHU1MkE4XHU4OUM0XHU1MjEyXHU1REU1XHU1MTc3LzUtXHU5ODg0XHU2MkE1XHU2QkI1Lmh0bWxcIixcclxuICAgICAgICBcIi90b3BpY3MvQXN0cm9NYXN0ZXIvRm9sbG93XCI6ICAgICAgICAgICAgICAgICAgICAgICAgXCIvNS5cdTRFMTNcdTRFMUFcdTRGN0ZcdTc1MjhcdTYzMDdcdTUzNTcvMTMtXHU4RjY4XHU5MDUzXHU2NzNBXHU1MkE4XHU4OUM0XHU1MjEyXHU1REU1XHU1MTc3LzYtXHU4RERGXHU5NjhGXHU2QkI1Lmh0bWxcIixcclxuXHJcbiAgICAgICAgLy8gQVRLXHU1QkY5XHU4QzYxXHJcbiAgICAgICAgXCIvdG9waWNzL09iamVjdHMvU2F0ZWxsaXRlL2luZGV4XCI6ICAgICAgICAgICAgICAgICAgICBcIi8wMy1cdTU3RkFcdTc4NDBcdTRGN0ZcdTc1MjhcdTYzMDdcdTUzNTcvMDMtXHU1QkY5XHU4QzYxXHU3QkExXHU3NDA2LzAyLVx1NUM1RVx1NjAyN1x1OTE0RFx1N0Y2RS9cdTUzNkJcdTY2MUYuaHRtbFwiLCAgICAgLy9cdTUzNkJcdTY2MUYtXHU1QzVFXHU2MDI3XHVGRjFCXHU1M0YzXHU0RTBCXHU4OUQyXHU3Njg0XHUyMDFDaGVscFx1MjAxRFx1NjMwOVx1OTRBRSBcclxuICAgICAgICBcIi90b3BpY3MvT2JqZWN0cy9TYXRlbGxpdGUvT3JiaXRcIjogICAgICAgICAgICAgICAgICAgIFwiLzAzLVx1NTdGQVx1Nzg0MFx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8wMy1cdTVCRjlcdThDNjFcdTdCQTFcdTc0MDYvMDItXHU1QzVFXHU2MDI3XHU5MTREXHU3RjZFL1x1NTM2Qlx1NjYxRi5odG1sI1x1OEY2OFx1OTA1M1wiLCAgICAgICAgICAvL1x1NTM2Qlx1NjYxRi1cdTVDNUVcdTYwMjctXHU3MEI5XHU1MUZCXHU4RjY4XHU5MDUzXHU1NDBFXHVGRjFCXHU1M0YzXHU0RTBCXHU4OUQyXHU3Njg0XHUyMDFDaGVscFx1MjAxRFx1NjMwOVx1OTRBRSBcclxuICAgICAgICBcIi90b3BpY3MvT2JqZWN0cy9TYXRlbGxpdGUvQXR0aXR1ZGVcIjogICAgICAgICAgICAgICAgIFwiLzAzLVx1NTdGQVx1Nzg0MFx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8wMy1cdTVCRjlcdThDNjFcdTdCQTFcdTc0MDYvMDItXHU1QzVFXHU2MDI3XHU5MTREXHU3RjZFL1x1NTM2Qlx1NjYxRi5odG1sI1x1NTlGRlx1NjAwMVwiLCAgICAgICAgICAvL1x1NTM2Qlx1NjYxRi1cdTVDNUVcdTYwMjctXHU3MEI5XHU1MUZCXHU1OUZGXHU2MDAxXHU1NDBFXHVGRjFCXHU1M0YzXHU0RTBCXHU4OUQyXHU3Njg0XHUyMDFDaGVscFx1MjAxRFx1NjMwOVx1OTRBRSBcclxuICAgICAgICBcIi90b3BpY3MvT2JqZWN0cy9TYXRlbGxpdGUvTWFzc1wiOiAgICAgICAgICAgICAgICAgICAgIFwiLzAzLVx1NTdGQVx1Nzg0MFx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8wMy1cdTVCRjlcdThDNjFcdTdCQTFcdTc0MDYvMDItXHU1QzVFXHU2MDI3XHU5MTREXHU3RjZFL1x1NTM2Qlx1NjYxRi5odG1sI1x1OEQyOFx1OTFDRlwiLCAgICAgICAgICAvL1x1NTM2Qlx1NjYxRi1cdTVDNUVcdTYwMjctXHU3MEI5XHU1MUZCXHU4RDI4XHU5MUNGXHU1NDBFXHVGRjFCXHU1M0YzXHU0RTBCXHU4OUQyXHU3Njg0XHUyMDFDaGVscFx1MjAxRFx1NjMwOVx1OTRBRSBcclxuICAgICAgICBcIi90b3BpY3MvT2JqZWN0cy9TYXRlbGxpdGUvUGFzc0JyZWFrXCI6ICAgICAgICAgICAgICAgIFwiLzAzLVx1NTdGQVx1Nzg0MFx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8wMy1cdTVCRjlcdThDNjFcdTdCQTFcdTc0MDYvMDItXHU1QzVFXHU2MDI3XHU5MTREXHU3RjZFL1x1NTM2Qlx1NjYxRi5odG1sI1x1OEY2OFx1OTA1M1x1NTcwOFx1NjU3MFwiLCAgICAgICAvL1x1NTM2Qlx1NjYxRi1cdTVDNUVcdTYwMjctXHU3MEI5XHU1MUZCXHU4RjY4XHU5MDUzXHU1NzA4XHU2NTcwXHU1NDBFXHVGRjFCXHU1M0YzXHU0RTBCXHU4OUQyXHU3Njg0XHUyMDFDaGVscFx1MjAxRFx1NjMwOVx1OTRBRSBcclxuICAgICAgICBcIi90b3BpY3MvT2JqZWN0cy9TYXRlbGxpdGUvMkRHcmFwaGljc1wiOiAgICAgICAgICAgICAgIFwiLzAzLVx1NTdGQVx1Nzg0MFx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8wMy1cdTVCRjlcdThDNjFcdTdCQTFcdTc0MDYvMDItXHU1QzVFXHU2MDI3XHU5MTREXHU3RjZFL1x1NTM2Qlx1NjYxRi5odG1sI1x1NEU4Q1x1N0VGNFx1ODlDNlx1NTZGRVwiLCAgICAgICAgICAvL1x1NTM2Qlx1NjYxRi1cdTVDNUVcdTYwMjctXHU3MEI5XHU1MUZCXHU0RThDXHU3RUY0XHU4OUM2XHU1NkZFXHU1M0NBXHU1MTc2XHU0RTBCXHU1QzVFXHU1NDBFXHVGRjFCXHU1M0YzXHU0RTBCXHU4OUQyXHU3Njg0XHUyMDFDaGVscFx1MjAxRFx1NjMwOVx1OTRBRSBcclxuICAgICAgICBcIi90b3BpY3MvT2JqZWN0cy9TYXRlbGxpdGUvM0RHcmFwaGljc1wiOiAgICAgICAgICAgICAgIFwiLzAzLVx1NTdGQVx1Nzg0MFx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8wMy1cdTVCRjlcdThDNjFcdTdCQTFcdTc0MDYvMDItXHU1QzVFXHU2MDI3XHU5MTREXHU3RjZFL1x1NTM2Qlx1NjYxRi5odG1sI1x1NEUwOVx1N0VGNFx1ODlDNlx1NTZGRVwiLCAgICAgICAgICAvL1x1NTM2Qlx1NjYxRi1cdTVDNUVcdTYwMjctXHU3MEI5XHU1MUZCXHU0RTA5XHU3RUY0XHU4OUM2XHU1NkZFXHU1M0NBXHU1MTc2XHU0RTBCXHU1QzVFXHU1NDBFXHVGRjFCXHU1M0YzXHU0RTBCXHU4OUQyXHU3Njg0XHUyMDFDaGVscFx1MjAxRFx1NjMwOVx1OTRBRSBcclxuICAgICAgICBcIi90b3BpY3MvT2JqZWN0cy9TYXRlbGxpdGUvQ29uc3RyYWludHNcIjogICAgICAgICAgICAgIFwiLzAzLVx1NTdGQVx1Nzg0MFx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8wMy1cdTVCRjlcdThDNjFcdTdCQTFcdTc0MDYvMDItXHU1QzVFXHU2MDI3XHU5MTREXHU3RjZFL1x1NTM2Qlx1NjYxRi5odG1sI1x1N0VBNlx1Njc1RlwiLCAgICAgICAgICAgICAvL1x1NTM2Qlx1NjYxRi1cdTVDNUVcdTYwMjctXHU3MEI5XHU1MUZCXHU3RUE2XHU2NzVGXHU1NDBFXHVGRjFCXHU1M0YzXHU0RTBCXHU4OUQyXHU3Njg0XHUyMDFDaGVscFx1MjAxRFx1NjMwOVx1OTRBRSBcclxuICAgICAgICBcIi90b3BpY3MvT2JqZWN0cy9TYXRlbGxpdGUvT3JiaXRQbGFubmluZ1wiOiAgICAgICAgICAgIFwiLzAyLVx1Njg0OFx1NEY4Qlx1NjU1OVx1N0EwQi8zLjRcdThGNjhcdTkwNTNcdTY3M0FcdTUyQThcdTg5QzRcdTUyMTJcdTVERTVcdTUxNzdcdTY4NDhcdTRGOEIvMy40LjFcdTk3MERcdTY2RkNcdThGNkNcdTc5RkIuaHRtbFwiLCAgICAgLy9cdTUzNkJcdTY2MUZcdTVDNUVcdTYwMjctXHU4RjY4XHU5MDUzLVx1OEY2OFx1OTA1M1x1OTg4NFx1NjJBNVx1NTY2OFx1RkYxQVx1NjczQVx1NTJBOFx1ODlDNFx1NTIxMlx1RkYxQlx1NTNGM1x1NEUwQlx1ODlEMlx1NzY4NFx1MjAxQ2hlbHBcdTIwMURcdTYzMDlcdTk0QUUgXHJcbiAgICAgICAgXCIvdG9waWNzL09iamVjdHMvU2F0ZWxsaXRlL09yYml0UGxhbm5pbmdSUE9cIjogICAgICAgICBcIi8wMi1cdTY4NDhcdTRGOEJcdTY1NTlcdTdBMEIvMTItUlBPXHU2ODQ4XHU0RjhCLmh0bWxcIiwgICAgICAgICAgICAgICAgICAgIC8vXHU1MzZCXHU2NjFGXHU1QzVFXHU2MDI3LVx1OEY2OFx1OTA1My1cdThGNjhcdTkwNTNcdTk4ODRcdTYyQTVcdTU2NjgtXHU2NzNBXHU1MkE4XHU4OUM0XHU1MjEyLVx1OTAwOVx1NEUyRFJQT1x1NTQwRVx1RkYxQlx1NTNGM1x1NEUwQlx1ODlEMlx1NzY4NFx1MjAxQ2hlbHBcdTIwMURcdTYzMDlcdTk0QUUgXHJcbiAgICAgICAgXCIvdG9waWNzL09iamVjdHMvU2F0ZWxsaXRlL0FzdHJvVXFcIjogICAgICAgICAgICAgICAgICBcIi8wMi1cdTY4NDhcdTRGOEJcdTY1NTlcdTdBMEIvMTMtXHU1MDRGXHU1REVFXHU1MjA2XHU2NzkwXHU2ODQ4XHU0RjhCLmh0bWxcIiwgICAgICAgICAgICAgICAgIC8vXHU1MzZCXHU2NjFGXHU1QzVFXHU2MDI3LVx1OEY2OFx1OTA1My1cdThGNjhcdTkwNTNcdTk4ODRcdTYyQTVcdTU2NjgtXHU1MDRGXHU1REVFXHU1MjA2XHU2NzkwXHVGRjFCXHU1M0YzXHU0RTBCXHU4OUQyXHU3Njg0XHUyMDFDaGVscFx1MjAxRFx1NjMwOVx1OTRBRVxyXG4gICAgICAgIFwiL3RvcGljcy9PYmplY3RzL0ZhY2lsaXR5XCI6ICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvMDMtXHU1N0ZBXHU3ODQwXHU0RjdGXHU3NTI4XHU2MzA3XHU1MzU3LzAzLVx1NUJGOVx1OEM2MVx1N0JBMVx1NzQwNi8wMi1cdTVDNUVcdTYwMjdcdTkxNERcdTdGNkUvXHU1NzMwXHU5NzYyXHU3QUQ5Lmh0bWxcIiwgICAgICAvL1x1NTczMFx1OTc2Mlx1N0FEOS1cdTVDNUVcdTYwMjdcdUZGMUJcdTUzRjNcdTRFMEJcdTg5RDJcdTc2ODRcdTIwMUNoZWxwXHUyMDFEXHU2MzA5XHU5NEFFIFxyXG4gICAgICAgIFwiL3RvcGljcy9PYmplY3RzL1NlbnNvclwiOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvMDMtXHU1N0ZBXHU3ODQwXHU0RjdGXHU3NTI4XHU2MzA3XHU1MzU3LzAzLVx1NUJGOVx1OEM2MVx1N0JBMVx1NzQwNi8wMi1cdTVDNUVcdTYwMjdcdTkxNERcdTdGNkUvXHU0RjIwXHU2MTFGXHU1NjY4Lmh0bWxcIiwgICAgICAvL1x1NEYyMFx1NjExRlx1NTY2OC1cdTVDNUVcdTYwMjdcdUZGMUJcdTUzRjNcdTRFMEJcdTg5RDJcdTc2ODRcdTIwMUNoZWxwXHUyMDFEXHU2MzA5XHU5NEFFIFxyXG4gICAgICAgIFwiL3RvcGljcy9PYmplY3RzL1JlY2VpdmVyXCI6ICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvMDMtXHU1N0ZBXHU3ODQwXHU0RjdGXHU3NTI4XHU2MzA3XHU1MzU3LzAzLVx1NUJGOVx1OEM2MVx1N0JBMVx1NzQwNi8wMi1cdTVDNUVcdTYwMjdcdTkxNERcdTdGNkUvXHU2M0E1XHU2NTM2XHU1NjY4Lmh0bWxcIiwgICAgICAvL1x1NjNBNVx1NjUzNlx1NTY2OC1cdTVDNUVcdTYwMjdcdUZGMUJcdTUzRjNcdTRFMEJcdTg5RDJcdTc2ODRcdTIwMUNoZWxwXHUyMDFEXHU2MzA5XHU5NEFFIFxyXG4gICAgICAgIFwiL3RvcGljcy9PYmplY3RzL1RyYW5zbWl0dGVyXCI6ICAgICAgICAgICAgICAgICAgICAgICAgXCIvMDMtXHU1N0ZBXHU3ODQwXHU0RjdGXHU3NTI4XHU2MzA3XHU1MzU3LzAzLVx1NUJGOVx1OEM2MVx1N0JBMVx1NzQwNi8wMi1cdTVDNUVcdTYwMjdcdTkxNERcdTdGNkUvXHU1M0QxXHU1QzA0XHU1NjY4Lmh0bWxcIiwgICAgICAvL1x1NTNEMVx1NUMwNFx1NTY2OC1cdTVDNUVcdTYwMjdcdUZGMUJcdTUzRjNcdTRFMEJcdTg5RDJcdTc2ODRcdTIwMUNoZWxwXHUyMDFEXHU2MzA5XHU5NEFFIFxyXG4gICAgICAgIFwiL3RvcGljcy9PYmplY3RzL1NhdGVsbGl0ZUNvbGxlY3Rpb25cIjogICAgICAgICAgICAgICAgXCIvMDMtXHU1N0ZBXHU3ODQwXHU0RjdGXHU3NTI4XHU2MzA3XHU1MzU3LzAzLVx1NUJGOVx1OEM2MVx1N0JBMVx1NzQwNi8wMi1cdTVDNUVcdTYwMjdcdTkxNERcdTdGNkUvXHU1MzZCXHU2NjFGXHU5NkM2XHU3RkE0Lmh0bWxcIiwgICAgICAgICAgICAgLy9cdTUzNkJcdTY2MUZcdTk2QzZcdTdGQTQtXHU1QzVFXHU2MDI3XHVGRjFBXHU1M0YzXHU0RTBCXHU4OUQyXHU3Njg0XHUyMDFDaGVscFx1MjAxRFx1NjMwOVx1OTRBRSBcclxuICAgICAgICBcIi90b3BpY3MvT2JqZWN0cy9Db3ZlcmFnZURlZmluaXRpb25cIjogICAgICAgICAgICAgICAgIFwiLzAzLVx1NTdGQVx1Nzg0MFx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8wMy1cdTVCRjlcdThDNjFcdTdCQTFcdTc0MDYvMDItXHU1QzVFXHU2MDI3XHU5MTREXHU3RjZFL1x1ODk4Nlx1NzZENlx1NUI5QVx1NEU0OS5odG1sXCIsICAgICAvL1x1ODk4Nlx1NzZENlx1NUI5QVx1NEU0OS1cdTVDNUVcdTYwMjdcdUZGMUFcdTUzRjNcdTRFMEJcdTg5RDJcdTc2ODRcdTIwMUNoZWxwXHUyMDFEXHU2MzA5XHU5NEFFIFxyXG4gICAgICAgIFwiL3RvcGljcy9TY2VuYXJpby9Db3ZlcmFnZURlZmluaXRpb25cIjogICAgICAgICAgICAgICAgXCIvMDMtXHU1N0ZBXHU3ODQwXHU0RjdGXHU3NTI4XHU2MzA3XHU1MzU3LzAyLVx1NTczQVx1NjY2Rlx1N0JBMVx1NzQwNi8wMy1cdTU3M0FcdTY2NkZcdTVDNUVcdTYwMjdcdTkxNERcdTdGNkUvXCIsICAgICAvL1x1NTczQVx1NjY2Ri1cdTVDNUVcdTYwMjdcdUZGMUFcdTUzRjNcdTRFMEJcdTg5RDJcdTc2ODRcdTIwMUNoZWxwXHUyMDFEXHU2MzA5XHU5NEFFXHJcbiAgICAgICAgXCIvdG9waWNzL0ludGVyZ3JhdGluZy9DbGllbnRcIjogICAgICAgICAgICAgICAgICAgICAgICBcIi9cdTRFOENcdTZCMjFcdTVGMDBcdTUzRDFcdTY1NTlcdTdBMEIvMi1cdTRFOENcdTZCMjFcdTVGMDBcdTUzRDFDT05ORUNUXHU2QTIxXHU1RjBGLzEtQVRLXHU1QkEyXHU2MjM3XHU3QUVGLmh0bWxcIixcclxuICAgICAgICBcIi90b3BpY3MvSW50ZXJncmF0aW5nL0ludHJvZHVjdGlvblwiOiAgICAgICAgICAgICAgICAgIFwiL1x1NEU4Q1x1NkIyMVx1NUYwMFx1NTNEMVx1NjU1OVx1N0EwQi8xLVx1NEU4Q1x1NkIyMVx1NUYwMFx1NTNEMVx1NEVDQlx1N0VDRC5odG1sXCIsXHJcbiAgICAgICAgXCIvdG9waWNzL1JlbGVhc2UvQ2hhbmdlTG9nXCI6ICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9cdTUzRDFcdTVFMDNcdThCRjRcdTY2MEUvXHU1M0QxXHU1RTAzXHU4QkY0XHU2NjBFLmh0bWxcIixcclxuICAgICAgICBcIi90b3BpY3MvQXR0aXR1ZGUvQXR0aXR1ZGVGaXhlZEluQXhlc1wiOiAgICAgICAgICAgICAgIFwiLzAzLVx1NTdGQVx1Nzg0MFx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8wMy1cdTVCRjlcdThDNjFcdTdCQTFcdTc0MDYvMDYtXHU1OUZGXHU2MDAxXHU1QjlBXHU0RTQ5LzEtXHU1NkZBXHU1QjlBXHU1OUZGXHU2MDAxLmh0bWxcIixcclxuICAgICAgICBcIi90b3BpY3MvQXR0aXR1ZGUvQXR0aXR1ZGVGaXhlZEluQ0JGXCI6ICAgICAgICAgICAgICAgIFwiLzAzLVx1NTdGQVx1Nzg0MFx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8wMy1cdTVCRjlcdThDNjFcdTdCQTFcdTc0MDYvMDYtXHU1OUZGXHU2MDAxXHU1QjlBXHU0RTQ5LzItXHU1NkZBXHU1QjlBXHU0RThFXHU1OTI5XHU0RjUzXHU1NkZBXHU1QjlBXHU3Q0ZCXHU1OUZGXHU2MDAxLmh0bWxcIixcclxuICAgICAgICBcIi90b3BpY3MvQXR0aXR1ZGUvQXR0aXR1ZGVGaXhlZEluQ0JJXCI6ICAgICAgICAgICAgICAgIFwiLzAzLVx1NTdGQVx1Nzg0MFx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8wMy1cdTVCRjlcdThDNjFcdTdCQTFcdTc0MDYvMDYtXHU1OUZGXHU2MDAxXHU1QjlBXHU0RTQ5LzMtXHU1NkZBXHU1QjlBXHU0RThFXHU1OTI5XHU0RjUzXHU2MEVGXHU2MDI3XHU3Q0ZCXHU1OUZGXHU2MDAxLmh0bWxcIixcclxuICAgICAgICBcIi90b3BpY3MvQXR0aXR1ZGUvQXR0aXR1ZGVBbGlnbmVkQ29uc3RyYWluZWRcIjogICAgICAgIFwiLzAzLVx1NTdGQVx1Nzg0MFx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8wMy1cdTVCRjlcdThDNjFcdTdCQTFcdTc0MDYvMDYtXHU1OUZGXHU2MDAxXHU1QjlBXHU0RTQ5LzQtXHU1QkY5XHU5RjUwXHU3RUE2XHU2NzVGXHU1OUZGXHU2MDAxLmh0bWxcIixcclxuICAgICAgICBcIi90b3BpY3MvQXR0aXR1ZGUvQXR0aXR1ZGVNdXRpbFNlZ21lbnRcIjogICAgICAgICAgICAgIFwiLzAzLVx1NTdGQVx1Nzg0MFx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8wMy1cdTVCRjlcdThDNjFcdTdCQTFcdTc0MDYvMDYtXHU1OUZGXHU2MDAxXHU1QjlBXHU0RTQ5LzUtXHU1OTFBXHU1MjA2XHU2QkI1XHU1OUZGXHU2MDAxLmh0bWxcIixcclxuICAgICAgICBcIi90b3BpY3MvQXR0aXR1ZGUvQXR0aXR1ZGVSZWFsVGltZVwiOiAgICAgICAgICAgICAgICAgIFwiLzAzLVx1NTdGQVx1Nzg0MFx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8wMy1cdTVCRjlcdThDNjFcdTdCQTFcdTc0MDYvMDYtXHU1OUZGXHU2MDAxXHU1QjlBXHU0RTQ5LzYtXHU1QjlFXHU2NUY2XHU1OUZGXHU2MDAxLmh0bWxcIixcclxuICAgICAgICBcIi90b3BpY3MvQXR0aXR1ZGUvQXR0aXR1ZGVTVEtBdHRpdHVkZVwiOiAgICAgICAgICAgICAgIFwiLzAzLVx1NTdGQVx1Nzg0MFx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8wMy1cdTVCRjlcdThDNjFcdTdCQTFcdTc0MDYvMDYtXHU1OUZGXHU2MDAxXHU1QjlBXHU0RTQ5LzctU1RLXHU2NTg3XHU0RUY2XHU1OUZGXHU2MDAxLmh0bWxcIixcclxuICAgICAgICBcIi90b3BpY3MvQXR0aXR1ZGUvQXR0aXR1ZGVTcGlubmluZ1wiOiAgICAgICAgICAgICAgICAgIFwiLzAzLVx1NTdGQVx1Nzg0MFx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8wMy1cdTVCRjlcdThDNjFcdTdCQTFcdTc0MDYvMDYtXHU1OUZGXHU2MDAxXHU1QjlBXHU0RTQ5LzktXHU2NUNCXHU4RjZDXHU1OUZGXHU2MDAxLmh0bWxcIixcclxuICAgICAgICBcIi90b3BpY3MvQXR0aXR1ZGUvQXR0aXR1ZGVUYXJnZXRQb2ludGluZ1wiOiAgICAgICAgICAgIFwiLzAzLVx1NTdGQVx1Nzg0MFx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8wMy1cdTVCRjlcdThDNjFcdTdCQTFcdTc0MDYvMDYtXHU1OUZGXHU2MDAxXHU1QjlBXHU0RTQ5LzEwLVx1NzZFRVx1NjgwN1x1NjMwN1x1NTQxMVx1NTlGRlx1NjAwMS5odG1sXCIsXHJcbiAgICAgICAgXCIvdG9waWNzL0F0dGl0dWRlL0F0dGl0dWRlVlZMSENCSVwiOiAgICAgICAgICAgICAgICAgICBcIi8wMy1cdTU3RkFcdTc4NDBcdTRGN0ZcdTc1MjhcdTYzMDdcdTUzNTcvMDMtXHU1QkY5XHU4QzYxXHU3QkExXHU3NDA2LzA2LVx1NTlGRlx1NjAwMVx1NUI5QVx1NEU0OS8xMi1cdTYwRUZcdTYwMjdcdTdDRkJWVkxIXHU1OUZGXHU2MDAxLmh0bWxcIixcclxuICAgICAgICBcIi90b3BpY3MvQXR0aXR1ZGUvQXR0aXR1ZGVWVkxIQ0JGXCI6ICAgICAgICAgICAgICAgICAgIFwiLzAzLVx1NTdGQVx1Nzg0MFx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8wMy1cdTVCRjlcdThDNjFcdTdCQTFcdTc0MDYvMDYtXHU1OUZGXHU2MDAxXHU1QjlBXHU0RTQ5LzEzLVx1NTZGQVx1OEZERVx1N0NGQlZWTEhcdTU5RkZcdTYwMDEuaHRtbFwiLFxyXG4gICAgICAgIFwiL3RvcGljcy9BdHRpdHVkZS9BdHRpdHVkZUVjZkFsaWduZFZlbFwiOiAgICAgICAgICAgICAgXCIvMDMtXHU1N0ZBXHU3ODQwXHU0RjdGXHU3NTI4XHU2MzA3XHU1MzU3LzAzLVx1NUJGOVx1OEM2MVx1N0JBMVx1NzQwNi8wNi1cdTU5RkZcdTYwMDFcdTVCOUFcdTRFNDkvMTUtRUNGXHU1QkY5XHU5MDFGXHU1RUE2XHU1QjlBXHU1NDExLmh0bWxcIixcclxuICAgICAgICBcIi90b3BpY3MvQXR0aXR1ZGUvQXR0aXR1ZGVFY2lBbGlnbmRWZWxcIjogICAgICAgICAgICAgIFwiLzAzLVx1NTdGQVx1Nzg0MFx1NEY3Rlx1NzUyOFx1NjMwN1x1NTM1Ny8wMy1cdTVCRjlcdThDNjFcdTdCQTFcdTc0MDYvMDYtXHU1OUZGXHU2MDAxXHU1QjlBXHU0RTQ5LzE2LUVDSVx1NUJGOVx1OTAxRlx1NUVBNlx1NUI5QVx1NTQxMS5odG1sXCJcclxuICAgIH1cclxufSIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjovbW9uZXlQcm9qZWN0L0FUSy9zbXNhdC9hdGstZG9jLy52dWVwcmVzcy9idW5kbGVyLXN0YW5kYWxvbmVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXG1vbmV5UHJvamVjdFxcXFxBVEtcXFxcc21zYXRcXFxcYXRrLWRvY1xcXFwudnVlcHJlc3NcXFxcYnVuZGxlci1zdGFuZGFsb25lXFxcXGluZGV4LmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9tb25leVByb2plY3QvQVRLL3Ntc2F0L2F0ay1kb2MvLnZ1ZXByZXNzL2J1bmRsZXItc3RhbmRhbG9uZS9pbmRleC5qc1wiOy8vIHNyYy9idWlsZC9idWlsZC50c1xyXG5pbXBvcnQge1xyXG4gIGNvbG9ycyxcclxuICBkZWJ1ZyxcclxuICBmcyBhcyBmczUsXHJcbiAgaW1wb3J0RmlsZURlZmF1bHQsXHJcbiAgd2l0aFNwaW5uZXJcclxufSBmcm9tIFwiQHZ1ZXByZXNzL3V0aWxzXCI7XHJcbmltcG9ydCB3ZWJwYWNrMiBmcm9tIFwid2VicGFja1wiO1xyXG5cclxuLy8gc3JjL3Jlc29sdmVXZWJwYWNrQ29uZmlnLnRzXHJcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSBcIndlYnBhY2stbWVyZ2VcIjtcclxudmFyIHJlc29sdmVXZWJwYWNrQ29uZmlnID0gKHtcclxuICBjb25maWcsXHJcbiAgb3B0aW9ucyxcclxuICBpc1NlcnZlcixcclxuICBpc0J1aWxkXHJcbn0pID0+IHtcclxuICBvcHRpb25zLmNoYWluV2VicGFjaz8uKGNvbmZpZywgaXNTZXJ2ZXIsIGlzQnVpbGQpO1xyXG4gIGNvbnN0IHdlYnBhY2tDb25maWcgPSBjb25maWcudG9Db25maWcoKTtcclxuICBjb25zdCBjb25maWd1cmVXZWJwYWNrUmVzdWx0ID0gb3B0aW9ucy5jb25maWd1cmVXZWJwYWNrPy4oXHJcbiAgICB3ZWJwYWNrQ29uZmlnLFxyXG4gICAgaXNTZXJ2ZXIsXHJcbiAgICBpc0J1aWxkXHJcbiAgKTtcclxuICBpZiAoY29uZmlndXJlV2VicGFja1Jlc3VsdCkge1xyXG4gICAgcmV0dXJuIG1lcmdlKHdlYnBhY2tDb25maWcsIGNvbmZpZ3VyZVdlYnBhY2tSZXN1bHQpO1xyXG4gIH1cclxuICByZXR1cm4gd2VicGFja0NvbmZpZztcclxufTtcclxuXHJcbi8vIHNyYy9idWlsZC9jcmVhdGVDbGllbnRDb25maWcudHNcclxuaW1wb3J0IHsgY3JlYXRlUmVxdWlyZSBhcyBjcmVhdGVSZXF1aXJlNiB9IGZyb20gXCJtb2R1bGVcIjtcclxuaW1wb3J0IHsgZnMgYXMgZnMzIH0gZnJvbSBcIkB2dWVwcmVzcy91dGlsc1wiO1xyXG5pbXBvcnQgQ29weVdlYnBhY2tQbHVnaW4gZnJvbSBcImNvcHktd2VicGFjay1wbHVnaW5cIjtcclxuaW1wb3J0IE1pbmlDc3NFeHRyYWN0UGx1Z2luMiBmcm9tIFwibWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cIjtcclxuXHJcbi8vIHNyYy9jb25maWcvY3JlYXRlQmFzZUNvbmZpZy50c1xyXG5pbXBvcnQgQ29uZmlnIGZyb20gXCJ3ZWJwYWNrLWNoYWluXCI7XHJcblxyXG4vLyBzcmMvY29uZmlnL2hhbmRsZURldnRvb2wudHNcclxudmFyIGhhbmRsZURldnRvb2wgPSAoe1xyXG4gIGFwcCxcclxuICBjb25maWcsXHJcbiAgaXNCdWlsZFxyXG59KSA9PiB7XHJcbiAgaWYgKGFwcC5lbnYuaXNEZWJ1Zykge1xyXG4gICAgY29uZmlnLmRldnRvb2woXCJzb3VyY2UtbWFwXCIpO1xyXG4gIH0gZWxzZSBpZiAoIWlzQnVpbGQpIHtcclxuICAgIGNvbmZpZy5kZXZ0b29sKFwiZXZhbC1jaGVhcC1tb2R1bGUtc291cmNlLW1hcFwiKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBzcmMvY29uZmlnL2hhbmRsZUVudHJ5LnRzXHJcbmltcG9ydCB7IGZzIH0gZnJvbSBcIkB2dWVwcmVzcy91dGlsc1wiO1xyXG52YXIgaGFuZGxlRW50cnkgPSAoe1xyXG4gIGFwcCxcclxuICBjb25maWdcclxufSkgPT4ge1xyXG4gIGNvbmZpZy5lbnRyeShcImFwcFwiKS5hZGQoXHJcbiAgICBhcHAuZGlyLmNsaWVudChcclxuICAgICAgZnMucmVhZEpzb25TeW5jKGFwcC5kaXIuY2xpZW50KFwicGFja2FnZS5qc29uXCIpKS5leHBvcnRzW1wiLi9hcHBcIl1cclxuICAgIClcclxuICApO1xyXG59O1xyXG5cclxuLy8gc3JjL2NvbmZpZy9oYW5kbGVNb2RlLnRzXHJcbnZhciBoYW5kbGVNb2RlID0gKHtcclxuICBhcHAsXHJcbiAgY29uZmlnLFxyXG4gIGlzQnVpbGRcclxufSkgPT4ge1xyXG4gIGNvbmZpZy5tb2RlKCFpc0J1aWxkIHx8IGFwcC5lbnYuaXNEZWJ1ZyA/IFwiZGV2ZWxvcG1lbnRcIiA6IFwicHJvZHVjdGlvblwiKTtcclxufTtcclxuXHJcbi8vIHNyYy9jb25maWcvaGFuZGxlTW9kdWxlQXNzZXRzLnRzXHJcbnZhciBoYW5kbGVNb2R1bGVBc3NldHMgPSAoe1xyXG4gIGFwcCxcclxuICBjb25maWdcclxufSkgPT4ge1xyXG4gIGNvbmZpZy5tb2R1bGUucnVsZShcImltYWdlc1wiKS50ZXN0KC9cXC4ocG5nfGpwZT9nfGdpZnx3ZWJwfGJtcHxpY28pKFxcPy4qKT8kLykudHlwZShcImFzc2V0XCIpLnNldChcImdlbmVyYXRvclwiLCB7XHJcbiAgICBmaWxlbmFtZTogXCJhc3NldHMvaW1nL1tuYW1lXS5bY29udGVudGhhc2g6OF1bZXh0XVwiXHJcbiAgfSk7XHJcbiAgY29uZmlnLm1vZHVsZS5ydWxlKFwic3ZnXCIpLnRlc3QoL1xcLihzdmcpKFxcPy4qKT8kLykudHlwZShcImFzc2V0L3Jlc291cmNlXCIpLnNldChcImdlbmVyYXRvclwiLCB7XHJcbiAgICBmaWxlbmFtZTogXCJhc3NldHMvaW1nL1tuYW1lXS5bY29udGVudGhhc2g6OF1bZXh0XVwiXHJcbiAgfSk7XHJcbiAgY29uZmlnLm1vZHVsZS5ydWxlKFwibWVkaWFcIikudGVzdCgvXFwuKG1wNHx3ZWJtfG9nZ3xtcDN8d2F2fGZsYWN8YWFjKShcXD8uKik/JC8pLnR5cGUoXCJhc3NldC9yZXNvdXJjZVwiKS5zZXQoXCJnZW5lcmF0b3JcIiwge1xyXG4gICAgZmlsZW5hbWU6IFwiYXNzZXRzL21lZGlhL1tuYW1lXS5bY29udGVudGhhc2g6OF1bZXh0XVwiXHJcbiAgfSk7XHJcbiAgY29uZmlnLm1vZHVsZS5ydWxlKFwiZm9udHNcIikudGVzdCgvXFwuKHdvZmYyP3xlb3R8dHRmfG90ZikoXFw/LiopPyQvaSkudHlwZShcImFzc2V0L3Jlc291cmNlXCIpLnNldChcImdlbmVyYXRvclwiLCB7XHJcbiAgICBmaWxlbmFtZTogXCJhc3NldHMvZm9udHMvW25hbWVdLltjb250ZW50aGFzaDo4XVtleHRdXCJcclxuICB9KTtcclxufTtcclxuXHJcbi8vIHNyYy9jb25maWcvaGFuZGxlTW9kdWxlSnMudHNcclxuaW1wb3J0IHsgY3JlYXRlUmVxdWlyZSB9IGZyb20gXCJtb2R1bGVcIjtcclxuXHJcbi8vIHNyYy9jb25maWcvcmVzb2x2ZUVzYnVpbGRKc3hPcHRpb25zLnRzXHJcbnZhciByZXNvbHZlRXNidWlsZEpzeE9wdGlvbnMgPSAoKSA9PiAoe1xyXG4gIGpzeEZhY3Rvcnk6IFwianN4XCIsXHJcbiAganN4RnJhZ21lbnQ6IFwiRnJhZ21lbnRcIlxyXG59KTtcclxuXHJcbi8vIHNyYy9jb25maWcvaGFuZGxlTW9kdWxlSnMudHNcclxudmFyIHJlcXVpcmUyID0gY3JlYXRlUmVxdWlyZShpbXBvcnQubWV0YS51cmwpO1xyXG52YXIgaGFuZGxlTW9kdWxlSnMgPSAoe1xyXG4gIG9wdGlvbnMsXHJcbiAgY29uZmlnLFxyXG4gIGlzQnVpbGQsXHJcbiAgaXNTZXJ2ZXJcclxufSkgPT4ge1xyXG4gIGlmIChvcHRpb25zLmV2ZXJncmVlbiAhPT0gZmFsc2UgfHwgIWlzQnVpbGQgfHwgaXNTZXJ2ZXIpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY29uZmlnLm1vZHVsZS5ydWxlKFwianNcIikudGVzdCgvXFwuanN4PyQvKS5leGNsdWRlLmFkZCgoZmlsZVBhdGgpID0+IHtcclxuICAgIGlmICgvXFwudnVlXFwuanN4PyQvLnRlc3QoZmlsZVBhdGgpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICgvKEB2dWVwcmVzc1svXFxcXF1bXi9cXFxcXSp8dnVlcHJlc3MtW14vXFxcXF0qKVsvXFxcXF0oPyFub2RlX21vZHVsZXMpLipcXC5qcyQvLnRlc3QoXHJcbiAgICAgIGZpbGVQYXRoXHJcbiAgICApKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiAvbm9kZV9tb2R1bGVzLy50ZXN0KGZpbGVQYXRoKTtcclxuICB9KS5lbmQoKS51c2UoXCJlc2J1aWxkLWxvYWRlclwiKS5sb2FkZXIocmVxdWlyZTIucmVzb2x2ZShcImVzYnVpbGQtbG9hZGVyXCIpKS5vcHRpb25zKHtcclxuICAgIHRhcmdldDogXCJlczIwMTVcIixcclxuICAgIC4uLnJlc29sdmVFc2J1aWxkSnN4T3B0aW9ucygpXHJcbiAgfSkuZW5kKCk7XHJcbn07XHJcblxyXG4vLyBzcmMvY29uZmlnL2hhbmRsZU1vZHVsZVB1Zy50c1xyXG52YXIgaGFuZGxlTW9kdWxlUHVnID0gKHsgY29uZmlnIH0pID0+IHtcclxuICBjb25maWcubW9kdWxlLnJ1bGUoXCJwdWdcIikudGVzdCgvXFwucHVnJC8pLnVzZShcInB1Zy1wbGFpbi1sb2FkZXJcIikubG9hZGVyKFwicHVnLXBsYWluLWxvYWRlclwiKTtcclxufTtcclxuXHJcbi8vIHNyYy9jb25maWcvaGFuZGxlTW9kdWxlU3R5bGVzLnRzXHJcbmltcG9ydCB7IGNyZWF0ZVJlcXVpcmUgYXMgY3JlYXRlUmVxdWlyZTIgfSBmcm9tIFwibW9kdWxlXCI7XHJcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSBcImF1dG9wcmVmaXhlclwiO1xyXG5pbXBvcnQgTWluaUNzc0V4dHJhY3RQbHVnaW4gZnJvbSBcIm1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXCI7XHJcbmltcG9ydCBwb3N0Y3NzQ3NzbyBmcm9tIFwicG9zdGNzcy1jc3NvXCI7XHJcbnZhciByZXF1aXJlMyA9IGNyZWF0ZVJlcXVpcmUyKGltcG9ydC5tZXRhLnVybCk7XHJcbnZhciBoYW5kbGVNb2R1bGVTdHlsZXMgPSAoe1xyXG4gIG9wdGlvbnMsXHJcbiAgY29uZmlnLFxyXG4gIGlzQnVpbGQsXHJcbiAgaXNTZXJ2ZXJcclxufSkgPT4ge1xyXG4gIGNvbnN0IGNyZWF0ZVN0eWxlUnVsZXMgPSAoe1xyXG4gICAgbGFuZyxcclxuICAgIHRlc3RcclxuICB9KSA9PiB7XHJcbiAgICBjb25zdCBiYXNlUnVsZSA9IGNvbmZpZy5tb2R1bGUucnVsZShsYW5nKS50ZXN0KHRlc3QpO1xyXG4gICAgY29uc3QgbW9kdWxlc1J1bGUgPSBiYXNlUnVsZS5vbmVPZihcIm1vZHVsZXNcIikucmVzb3VyY2VRdWVyeSgvbW9kdWxlLyk7XHJcbiAgICBjb25zdCBub3JtYWxSdWxlID0gYmFzZVJ1bGUub25lT2YoXCJub3JtYWxcIik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBtb2R1bGVzUnVsZSxcclxuICAgICAgbm9ybWFsUnVsZVxyXG4gICAgfTtcclxuICB9O1xyXG4gIGNvbnN0IGFwcGx5U3R5bGVIYW5kbGVycyA9ICh7XHJcbiAgICBydWxlLFxyXG4gICAgY3NzTW9kdWxlcyxcclxuICAgIGxvYWRlck5hbWUsXHJcbiAgICBsb2FkZXJPcHRpb25zID0ge31cclxuICB9KSA9PiB7XHJcbiAgICBpZiAoIWlzU2VydmVyKSB7XHJcbiAgICAgIGlmIChpc0J1aWxkKSB7XHJcbiAgICAgICAgcnVsZS51c2UoXCJleHRyYWN0LWNzcy1sb2FkZXJcIikubG9hZGVyKE1pbmlDc3NFeHRyYWN0UGx1Z2luLmxvYWRlcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcnVsZS51c2UoXCJzdHlsZS1sb2FkZXJcIikubG9hZGVyKHJlcXVpcmUzLnJlc29sdmUoXCJzdHlsZS1sb2FkZXJcIikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBydWxlLnVzZShcImNzcy1sb2FkZXJcIikubG9hZGVyKHJlcXVpcmUzLnJlc29sdmUoXCJjc3MtbG9hZGVyXCIpKS5vcHRpb25zKHtcclxuICAgICAgbW9kdWxlczogY3NzTW9kdWxlcyA/IHtcclxuICAgICAgICBsb2NhbElkZW50TmFtZTogYFtsb2NhbF1fW2NvbnRlbnRoYXNoOmJhc2U2NDo4XWAsXHJcbiAgICAgICAgZXhwb3J0T25seUxvY2FsczogaXNTZXJ2ZXJcclxuICAgICAgfSA6IGZhbHNlLFxyXG4gICAgICBpbXBvcnRMb2FkZXJzOiAxXHJcbiAgICB9KTtcclxuICAgIHJ1bGUudXNlKFwicG9zdGNzcy1sb2FkZXJcIikubG9hZGVyKHJlcXVpcmUzLnJlc29sdmUoXCJwb3N0Y3NzLWxvYWRlclwiKSkub3B0aW9ucyh7XHJcbiAgICAgIHBvc3Rjc3NPcHRpb25zOiB7XHJcbiAgICAgICAgcGx1Z2luczogW2F1dG9wcmVmaXhlciwgcG9zdGNzc0Nzc29dXHJcbiAgICAgIH0sXHJcbiAgICAgIC4uLm9wdGlvbnMucG9zdGNzc1xyXG4gICAgfSk7XHJcbiAgICBpZiAobG9hZGVyTmFtZSkge1xyXG4gICAgICBydWxlLnVzZShsb2FkZXJOYW1lKS5sb2FkZXIobG9hZGVyTmFtZSkub3B0aW9ucyhsb2FkZXJPcHRpb25zKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVN0eWxlID0gKHtcclxuICAgIGxhbmcsXHJcbiAgICB0ZXN0LFxyXG4gICAgbG9hZGVyTmFtZSxcclxuICAgIGxvYWRlck9wdGlvbnNcclxuICB9KSA9PiB7XHJcbiAgICBjb25zdCB7IG1vZHVsZXNSdWxlLCBub3JtYWxSdWxlIH0gPSBjcmVhdGVTdHlsZVJ1bGVzKHtcclxuICAgICAgbGFuZyxcclxuICAgICAgdGVzdFxyXG4gICAgfSk7XHJcbiAgICBhcHBseVN0eWxlSGFuZGxlcnMoe1xyXG4gICAgICBydWxlOiBtb2R1bGVzUnVsZSxcclxuICAgICAgY3NzTW9kdWxlczogdHJ1ZSxcclxuICAgICAgbG9hZGVyTmFtZSxcclxuICAgICAgbG9hZGVyT3B0aW9uc1xyXG4gICAgfSk7XHJcbiAgICBhcHBseVN0eWxlSGFuZGxlcnMoe1xyXG4gICAgICBydWxlOiBub3JtYWxSdWxlLFxyXG4gICAgICBjc3NNb2R1bGVzOiBmYWxzZSxcclxuICAgICAgbG9hZGVyTmFtZSxcclxuICAgICAgbG9hZGVyT3B0aW9uc1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBoYW5kbGVTdHlsZSh7XHJcbiAgICBsYW5nOiBcImNzc1wiLFxyXG4gICAgdGVzdDogL1xcLmNzcyQvXHJcbiAgfSk7XHJcbiAgaGFuZGxlU3R5bGUoe1xyXG4gICAgbGFuZzogXCJwb3N0Y3NzXCIsXHJcbiAgICB0ZXN0OiAvXFwucChvc3QpP2NzcyQvXHJcbiAgfSk7XHJcbiAgaGFuZGxlU3R5bGUoe1xyXG4gICAgbGFuZzogXCJzY3NzXCIsXHJcbiAgICB0ZXN0OiAvXFwuc2NzcyQvLFxyXG4gICAgbG9hZGVyTmFtZTogXCJzYXNzLWxvYWRlclwiLFxyXG4gICAgbG9hZGVyT3B0aW9uczogb3B0aW9ucy5zY3NzXHJcbiAgfSk7XHJcbiAgaGFuZGxlU3R5bGUoe1xyXG4gICAgbGFuZzogXCJzYXNzXCIsXHJcbiAgICB0ZXN0OiAvXFwuc2FzcyQvLFxyXG4gICAgbG9hZGVyTmFtZTogXCJzYXNzLWxvYWRlclwiLFxyXG4gICAgbG9hZGVyT3B0aW9uczogb3B0aW9ucy5zYXNzXHJcbiAgfSk7XHJcbiAgaGFuZGxlU3R5bGUoe1xyXG4gICAgbGFuZzogXCJsZXNzXCIsXHJcbiAgICB0ZXN0OiAvXFwubGVzcyQvLFxyXG4gICAgbG9hZGVyTmFtZTogXCJsZXNzLWxvYWRlclwiLFxyXG4gICAgbG9hZGVyT3B0aW9uczogb3B0aW9ucy5sZXNzXHJcbiAgfSk7XHJcbiAgaGFuZGxlU3R5bGUoe1xyXG4gICAgbGFuZzogXCJzdHlsdXNcIixcclxuICAgIHRlc3Q6IC9cXC5zdHlsKHVzKT8kLyxcclxuICAgIGxvYWRlck5hbWU6IFwic3R5bHVzLWxvYWRlclwiLFxyXG4gICAgbG9hZGVyT3B0aW9uczoge1xyXG4gICAgICBzdHlsdXNPcHRpb25zOiB7XHJcbiAgICAgICAgLy8gYWxsb3cgbGl0ZXJhbCBjc3MgaW1wb3J0XHJcbiAgICAgICAgaW5jbHVkZUNTUzogdHJ1ZSxcclxuICAgICAgICAvLyBubyBuZWVkIHRvIGNvbXByZXNzIHdpdGggc3R5bHVzXHJcbiAgICAgICAgLy8gd2Ugd2lsbCBoYW5kbGUgaXQgYnkgcG9zdGNzcy1sb2FkZXJcclxuICAgICAgICBjb21wcmVzczogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgLi4ub3B0aW9ucy5zdHlsdXNcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbi8vIHNyYy9jb25maWcvaGFuZGxlTW9kdWxlVHMudHNcclxuaW1wb3J0IHsgY3JlYXRlUmVxdWlyZSBhcyBjcmVhdGVSZXF1aXJlMyB9IGZyb20gXCJtb2R1bGVcIjtcclxudmFyIHJlcXVpcmU0ID0gY3JlYXRlUmVxdWlyZTMoaW1wb3J0Lm1ldGEudXJsKTtcclxudmFyIGhhbmRsZU1vZHVsZVRzID0gKHtcclxuICBhcHAsXHJcbiAgY29uZmlnXHJcbn0pID0+IHtcclxuICBjb25maWcubW9kdWxlLnJ1bGUoXCJ0c1wiKS50ZXN0KC9cXC50c3g/LykudXNlKFwiZXNidWlsZC1sb2FkZXJcIikubG9hZGVyKHJlcXVpcmU0LnJlc29sdmUoXCJlc2J1aWxkLWxvYWRlclwiKSkub3B0aW9ucyh7XHJcbiAgICB0YXJnZXQ6IFwiZXMyMDE4XCIsXHJcbiAgICBsb2FkZXI6IFwidHN4XCIsXHJcbiAgICAuLi5yZXNvbHZlRXNidWlsZEpzeE9wdGlvbnMoKVxyXG4gIH0pLmVuZCgpO1xyXG59O1xyXG5cclxuLy8gc3JjL2NvbmZpZy9oYW5kbGVNb2R1bGVWdWUudHNcclxuaW1wb3J0IHsgY3JlYXRlUmVxdWlyZSBhcyBjcmVhdGVSZXF1aXJlNCB9IGZyb20gXCJtb2R1bGVcIjtcclxuaW1wb3J0IHsgVnVlTG9hZGVyUGx1Z2luIH0gZnJvbSBcInZ1ZS1sb2FkZXJcIjtcclxudmFyIHJlcXVpcmU1ID0gY3JlYXRlUmVxdWlyZTQoaW1wb3J0Lm1ldGEudXJsKTtcclxudmFyIGhhbmRsZU1vZHVsZVZ1ZSA9ICh7XHJcbiAgYXBwLFxyXG4gIG9wdGlvbnMsXHJcbiAgY29uZmlnLFxyXG4gIGlzU2VydmVyXHJcbn0pID0+IHtcclxuICBjb25maWcubW9kdWxlLnJ1bGUoXCJ2dWVcIikudGVzdCgvXFwudnVlJC8pLnVzZShcInZ1ZS1sb2FkZXJcIikubG9hZGVyKHJlcXVpcmU1LnJlc29sdmUoXCJ2dWUtbG9hZGVyXCIpKS5vcHRpb25zKHtcclxuICAgIC4uLm9wdGlvbnMudnVlLFxyXG4gICAgaXNTZXJ2ZXJCdWlsZDogaXNTZXJ2ZXJcclxuICB9KS5lbmQoKTtcclxuICBjb25maWcucGx1Z2luKFwidnVlLWxvYWRlclwiKS51c2UoVnVlTG9hZGVyUGx1Z2luKTtcclxufTtcclxuXHJcbi8vIHNyYy9jb25maWcvaGFuZGxlTW9kdWxlLnRzXHJcbnZhciBoYW5kbGVNb2R1bGUgPSAoe1xyXG4gIGFwcCxcclxuICBvcHRpb25zLFxyXG4gIGNvbmZpZyxcclxuICBpc0J1aWxkLFxyXG4gIGlzU2VydmVyXHJcbn0pID0+IHtcclxuICBjb25maWcubW9kdWxlLm5vUGFyc2UoXHJcbiAgICAvKF4odnVlfHZ1ZS1yb3V0ZXJ8dnVleHx2dWV4LXJvdXRlci1zeW5jKSQpfCheQHZ1ZVxcL1teL10qJCkvXHJcbiAgKTtcclxuICBoYW5kbGVNb2R1bGVWdWUoeyBhcHAsIG9wdGlvbnMsIGNvbmZpZywgaXNTZXJ2ZXIgfSk7XHJcbiAgaGFuZGxlTW9kdWxlUHVnKHsgY29uZmlnIH0pO1xyXG4gIGhhbmRsZU1vZHVsZUFzc2V0cyh7IGFwcCwgY29uZmlnIH0pO1xyXG4gIGhhbmRsZU1vZHVsZUpzKHsgb3B0aW9ucywgY29uZmlnLCBpc0J1aWxkLCBpc1NlcnZlciB9KTtcclxuICBoYW5kbGVNb2R1bGVUcyh7IGFwcCwgY29uZmlnIH0pO1xyXG4gIGhhbmRsZU1vZHVsZVN0eWxlcyh7IG9wdGlvbnMsIGNvbmZpZywgaXNCdWlsZCwgaXNTZXJ2ZXIgfSk7XHJcbn07XHJcblxyXG4vLyBzcmMvY29uZmlnL2hhbmRsZU5vZGUudHNcclxudmFyIGhhbmRsZU5vZGUgPSAoeyBjb25maWcgfSkgPT4ge1xyXG4gIGNvbmZpZy5ub2RlLm1lcmdlKHtcclxuICAgIF9fZmlsZW5hbWU6IGZhbHNlLFxyXG4gICAgX19kaXJuYW1lOiBmYWxzZSxcclxuICAgIGdsb2JhbDogZmFsc2VcclxuICB9KTtcclxufTtcclxuXHJcbi8vIHNyYy9jb25maWcvaGFuZGxlT3RoZXJPcHRpb25zLnRzXHJcbmltcG9ydCB7IGNyZWF0ZVJlcXVpcmUgYXMgY3JlYXRlUmVxdWlyZTUgfSBmcm9tIFwibW9kdWxlXCI7XHJcbnZhciByZXF1aXJlNiA9IGNyZWF0ZVJlcXVpcmU1KGltcG9ydC5tZXRhLnVybCk7XHJcbnZhciBoYW5kbGVPdGhlck9wdGlvbnMgPSAoe1xyXG4gIGFwcCxcclxuICBjb25maWcsXHJcbiAgaXNCdWlsZCxcclxuICBpc1NlcnZlclxyXG59KSA9PiB7XHJcbiAgY29uZmlnLnNldChcImluZnJhc3RydWN0dXJlTG9nZ2luZ1wiLCB7XHJcbiAgICBsZXZlbDogYXBwLmVudi5pc0RlYnVnID8gXCJpbmZvXCIgOiBcImVycm9yXCJcclxuICB9KTtcclxuICBjb25maWcuc2V0KFwiY2FjaGVcIiwge1xyXG4gICAgdHlwZTogXCJmaWxlc3lzdGVtXCIsXHJcbiAgICBjYWNoZURpcmVjdG9yeTogYXBwLmRpci5jYWNoZSgpLFxyXG4gICAgdmVyc2lvbjogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAvLyB2dWVwcmVzcyBpZGVudGlmaWVyc1xyXG4gICAgICBpc0J1aWxkLFxyXG4gICAgICBpc1NlcnZlcixcclxuICAgICAgXCJ2ZXJzaW9uXCI6IGFwcC52ZXJzaW9uLFxyXG4gICAgICAvLyBkZXBlbmRlbmNpZXNcclxuICAgICAgXCJlc2J1aWxkLWxvYWRlclwiOiByZXF1aXJlNihcImVzYnVpbGQtbG9hZGVyL3BhY2thZ2UuanNvblwiKS52ZXJzaW9uLFxyXG4gICAgICBcInZ1ZS1sb2FkZXJcIjogcmVxdWlyZTYoXCJ2dWUtbG9hZGVyL3BhY2thZ2UuanNvblwiKS52ZXJzaW9uLFxyXG4gICAgICBcIndlYnBhY2tcIjogcmVxdWlyZTYoXCJ3ZWJwYWNrL3BhY2thZ2UuanNvblwiKS52ZXJzaW9uXHJcbiAgICB9KVxyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8gc3JjL2NvbmZpZy9oYW5kbGVQbHVnaW5EZWZpbmUudHNcclxuaW1wb3J0IHdlYnBhY2sgZnJvbSBcIndlYnBhY2tcIjtcclxudmFyIGhhbmRsZVBsdWdpbkRlZmluZSA9IGFzeW5jICh7XHJcbiAgYXBwLFxyXG4gIGNvbmZpZyxcclxuICBpc0J1aWxkLFxyXG4gIGlzU2VydmVyXHJcbn0pID0+IHtcclxuICBjb25maWcucGx1Z2luKFwiZGVmaW5lXCIpLnVzZSh3ZWJwYWNrLkRlZmluZVBsdWdpbiwgW1xyXG4gICAge1xyXG4gICAgICBfX1ZVRVBSRVNTX1ZFUlNJT05fXzogSlNPTi5zdHJpbmdpZnkoYXBwLnZlcnNpb24pLFxyXG4gICAgICBfX1ZVRVBSRVNTX0JBU0VfXzogSlNPTi5zdHJpbmdpZnkoYXBwLm9wdGlvbnMuYmFzZSksXHJcbiAgICAgIF9fVlVFUFJFU1NfREVWX186IEpTT04uc3RyaW5naWZ5KCFpc0J1aWxkKSxcclxuICAgICAgX19WVUVQUkVTU19TU1JfXzogSlNPTi5zdHJpbmdpZnkoaXNTZXJ2ZXIpLFxyXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9saW5rLnZ1ZWpzLm9yZy9mZWF0dXJlLWZsYWdzXHJcbiAgICAgIC8vIGVuYWJsZSBvcHRpb25zIEFQSSBieSBkZWZhdWx0XHJcbiAgICAgIF9fVlVFX09QVElPTlNfQVBJX186IEpTT04uc3RyaW5naWZ5KHRydWUpLFxyXG4gICAgICBfX1ZVRV9QUk9EX0RFVlRPT0xTX186IEpTT04uc3RyaW5naWZ5KGFwcC5lbnYuaXNEZWJ1ZyksXHJcbiAgICAgIF9fVlVFX1BST0RfSFlEUkFUSU9OX01JU01BVENIX0RFVEFJTFNfXzogSlNPTi5zdHJpbmdpZnkoZmFsc2UpXHJcbiAgICB9XHJcbiAgXSk7XHJcbiAgY29uc3QgZGVmaW5lUmVzdWx0ID0gYXdhaXQgYXBwLnBsdWdpbkFwaS5ob29rcy5kZWZpbmUucHJvY2VzcyhhcHAsIGlzU2VydmVyKTtcclxuICBjb25maWcucGx1Z2luKFwiZGVmaW5lXCIpLnRhcCgoW29wdGlvbnNdKSA9PiB7XHJcbiAgICBkZWZpbmVSZXN1bHQuZm9yRWFjaChcclxuICAgICAgKGRlZmluZU9iamVjdCkgPT4gT2JqZWN0LmVudHJpZXMoZGVmaW5lT2JqZWN0KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICBvcHRpb25zW2tleV0gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIFtvcHRpb25zXTtcclxuICB9KTtcclxufTtcclxuXHJcbi8vIHNyYy9jb25maWcvaGFuZGxlUmVzb2x2ZS50c1xyXG52YXIgaGFuZGxlUmVzb2x2ZSA9IGFzeW5jICh7XHJcbiAgYXBwLFxyXG4gIGNvbmZpZyxcclxuICBpc1NlcnZlclxyXG59KSA9PiB7XHJcbiAgY29uZmlnLnJlc29sdmUuYWxpYXMuc2V0KFwiQHNvdXJjZVwiLCBhcHAuZGlyLnNvdXJjZSgpKS5zZXQoXCJAdGVtcFwiLCBhcHAuZGlyLnRlbXAoKSkuc2V0KFwiQGludGVybmFsXCIsIGFwcC5kaXIudGVtcChcImludGVybmFsXCIpKTtcclxuICBjb25maWcubWVyZ2Uoe1xyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBleHRlbnNpb25BbGlhczoge1xyXG4gICAgICAgIFwiLmpzXCI6IFtcIi5qc1wiLCBcIi50c1wiXSxcclxuICAgICAgICBcIi5tanNcIjogW1wiLm1qc1wiLCBcIi5tdHNcIl1cclxuICAgICAgfSxcclxuICAgICAgZXh0ZW5zaW9uczogW1wiLmpzXCIsIFwiLmpzeFwiLCBcIi50c1wiLCBcIi50c3hcIiwgXCIudnVlXCIsIFwiLmpzb25cIl1cclxuICAgIH1cclxuICB9KTtcclxuICBjb25maWcucmVzb2x2ZS5leHRlbnNpb25zLm1lcmdlKFtcclxuICAgIFwiLmpzXCIsXHJcbiAgICBcIi5qc3hcIixcclxuICAgIFwiLnRzXCIsXHJcbiAgICBcIi50c3hcIixcclxuICAgIFwiLnZ1ZVwiLFxyXG4gICAgXCIuanNvblwiXHJcbiAgXSk7XHJcbiAgY29uc3QgYWxpYXNSZXN1bHQgPSBhd2FpdCBhcHAucGx1Z2luQXBpLmhvb2tzLmFsaWFzLnByb2Nlc3MoYXBwLCBpc1NlcnZlcik7XHJcbiAgYWxpYXNSZXN1bHQuZm9yRWFjaChcclxuICAgIChhbGlhc09iamVjdCkgPT4gT2JqZWN0LmVudHJpZXMoYWxpYXNPYmplY3QpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICBjb25maWcucmVzb2x2ZS5hbGlhcy5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICB9KVxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBzcmMvY29uZmlnL2NyZWF0ZUJhc2VDb25maWcudHNcclxudmFyIGNyZWF0ZUJhc2VDb25maWcgPSBhc3luYyAoe1xyXG4gIGFwcCxcclxuICBvcHRpb25zLFxyXG4gIGlzQnVpbGQsXHJcbiAgaXNTZXJ2ZXJcclxufSkgPT4ge1xyXG4gIGNvbnN0IGNvbmZpZyA9IG5ldyBDb25maWcoKTtcclxuICBoYW5kbGVFbnRyeSh7IGFwcCwgY29uZmlnIH0pO1xyXG4gIGhhbmRsZU1vZGUoeyBhcHAsIGNvbmZpZywgaXNCdWlsZCB9KTtcclxuICBoYW5kbGVOb2RlKHsgY29uZmlnIH0pO1xyXG4gIGhhbmRsZURldnRvb2woeyBhcHAsIGNvbmZpZywgaXNCdWlsZCB9KTtcclxuICBhd2FpdCBoYW5kbGVSZXNvbHZlKHsgYXBwLCBjb25maWcsIGlzU2VydmVyIH0pO1xyXG4gIGhhbmRsZU1vZHVsZSh7IGFwcCwgb3B0aW9ucywgY29uZmlnLCBpc0J1aWxkLCBpc1NlcnZlciB9KTtcclxuICBhd2FpdCBoYW5kbGVQbHVnaW5EZWZpbmUoeyBhcHAsIGNvbmZpZywgaXNCdWlsZCwgaXNTZXJ2ZXIgfSk7XHJcbiAgaGFuZGxlT3RoZXJPcHRpb25zKHsgYXBwLCBjb25maWcsIGlzQnVpbGQsIGlzU2VydmVyIH0pO1xyXG4gIHJldHVybiBjb25maWc7XHJcbn07XHJcblxyXG4vLyBzcmMvY29uZmlnL2NyZWF0ZUNsaWVudEJhc2VDb25maWcudHNcclxudmFyIGNyZWF0ZUNsaWVudEJhc2VDb25maWcgPSBhc3luYyAoe1xyXG4gIGFwcCxcclxuICBvcHRpb25zLFxyXG4gIGlzQnVpbGRcclxufSkgPT4ge1xyXG4gIGNvbnN0IGNvbmZpZyA9IGF3YWl0IGNyZWF0ZUJhc2VDb25maWcoe1xyXG4gICAgYXBwLFxyXG4gICAgb3B0aW9ucyxcclxuICAgIGlzU2VydmVyOiBmYWxzZSxcclxuICAgIGlzQnVpbGRcclxuICB9KTtcclxuICBjb25maWcub3V0cHV0LnBhdGgoYXBwLmRpci5kZXN0KCkpLmZpbGVuYW1lKFxyXG4gICAgaXNCdWlsZCA/IFwiYXNzZXRzL2pzL1tuYW1lXS5qc1wiIDogXCJhc3NldHMvanMvW25hbWVdLmpzXCJcclxuICApLnB1YmxpY1BhdGgoYXBwLm9wdGlvbnMuYmFzZSk7XHJcbiAgcmV0dXJuIGNvbmZpZztcclxufTtcclxuXHJcbi8vIHNyYy9idWlsZC9zc3IvY3JlYXRlQ2xpZW50UGx1Z2luLnRzXHJcbmltcG9ydCB7IGZzIGFzIGZzMiB9IGZyb20gXCJAdnVlcHJlc3MvdXRpbHNcIjtcclxuXHJcbi8vIHNyYy9idWlsZC9zc3IvdXRpbHMudHNcclxudmFyIGlzSlMgPSAoZmlsZSkgPT4gL1xcLmpzKFxcP1teLl0rKT8kLy50ZXN0KGZpbGUpO1xyXG52YXIgaXNDU1MgPSAoZmlsZSkgPT4gL1xcLmNzcyhcXD9bXi5dKyk/JC8udGVzdChmaWxlKTtcclxuXHJcbi8vIHNyYy9idWlsZC9zc3IvY3JlYXRlQ2xpZW50UGx1Z2luLnRzXHJcbnZhciBjcmVhdGVDbGllbnRQbHVnaW4gPSAob3V0cHV0RmlsZSkgPT4ge1xyXG4gIGNvbnN0IGNsaWVudFBsdWdpbiA9IHtcclxuICAgIGFwcGx5KGNvbXBpbGVyKSB7XHJcbiAgICAgIGNvbXBpbGVyLmhvb2tzLmVtaXQudGFwUHJvbWlzZShcclxuICAgICAgICBcInZ1ZXByZXNzLWNsaWVudC1wbHVnaW5cIixcclxuICAgICAgICBhc3luYyAoY29tcGlsYXRpb24pID0+IHtcclxuICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgYXNzZXRzID0gW10sXHJcbiAgICAgICAgICAgIG1vZHVsZXMgPSBbXSxcclxuICAgICAgICAgICAgZW50cnlwb2ludHMgPSB7fSxcclxuICAgICAgICAgICAgY2h1bmtzID0gW11cclxuICAgICAgICAgIH0gPSBjb21waWxhdGlvbi5nZXRTdGF0cygpLnRvSnNvbigpO1xyXG4gICAgICAgICAgY29uc3QgYWxsRmlsZXMgPSBhc3NldHMubWFwKChhKSA9PiBhLm5hbWUpO1xyXG4gICAgICAgICAgY29uc3QgaW5pdGlhbEZpbGVzID0gT2JqZWN0LmtleXMoZW50cnlwb2ludHMpLm1hcCgobmFtZSkgPT4gZW50cnlwb2ludHNbbmFtZV0uYXNzZXRzLm1hcCgoaXRlbSkgPT4gaXRlbS5uYW1lKSkucmVkdWNlKChhc3NldHMyLCBhbGwpID0+IGFsbC5jb25jYXQoYXNzZXRzMiksIFtdKS5maWx0ZXIoKGZpbGUpID0+IGlzSlMoZmlsZSkgfHwgaXNDU1MoZmlsZSkpO1xyXG4gICAgICAgICAgY29uc3QgYXN5bmNGaWxlcyA9IGFsbEZpbGVzLmZpbHRlcihcclxuICAgICAgICAgICAgKGZpbGUpID0+IChpc0pTKGZpbGUpIHx8IGlzQ1NTKGZpbGUpKSAmJiAhaW5pdGlhbEZpbGVzLmluY2x1ZGVzKGZpbGUpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgYXNzZXRNb2R1bGVzID0gbW9kdWxlcy5maWx0ZXIoXHJcbiAgICAgICAgICAgIChtKSA9PiAhIShtLmFzc2V0cyAmJiBtLmFzc2V0cy5sZW5ndGgpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgbWFuaWZlc3RNb2R1bGVzID0ge307XHJcbiAgICAgICAgICBjb25zdCBmaWxlVG9JbmRleCA9IChmaWxlKSA9PiBhbGxGaWxlcy5pbmRleE9mKGZpbGUpO1xyXG4gICAgICAgICAgbW9kdWxlcy5mb3JFYWNoKChtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtLmNodW5rcy5sZW5ndGggIT09IDEpIHtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY2lkID0gbS5jaHVua3NbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IGNodW5rID0gY2h1bmtzLmZpbmQoKGMpID0+IGMuaWQgPT09IGNpZCk7XHJcbiAgICAgICAgICAgIGlmICghY2h1bmsgfHwgIWNodW5rLmZpbGVzKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBtLmlkZW50aWZpZXIucmVwbGFjZSgvXFx8XFx3KyQvLCBcIlwiKTtcclxuICAgICAgICAgICAgY29uc3QgZmlsZXMgPSBbLi4uY2h1bmsuZmlsZXMubWFwKGZpbGVUb0luZGV4KV07XHJcbiAgICAgICAgICAgIGFzc2V0TW9kdWxlcy5mb3JFYWNoKChtMikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChtMi5jaHVua3Muc29tZSgoaWQpID0+IGlkID09PSBjaWQpKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlcy5wdXNoKC4uLm0yLmFzc2V0cy5tYXAoZmlsZVRvSW5kZXgpKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBtYW5pZmVzdE1vZHVsZXNbcmVxdWVzdF0gPSBmaWxlcztcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc3QgY2xpZW50TWFuaWZlc3QgPSB7XHJcbiAgICAgICAgICAgIGFsbDogYWxsRmlsZXMsXHJcbiAgICAgICAgICAgIGluaXRpYWw6IGluaXRpYWxGaWxlcyxcclxuICAgICAgICAgICAgYXN5bmM6IGFzeW5jRmlsZXMsXHJcbiAgICAgICAgICAgIG1vZHVsZXM6IG1hbmlmZXN0TW9kdWxlc1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGNvbnN0IGNsaWVudE1hbmlmZXN0SnNvbiA9IEpTT04uc3RyaW5naWZ5KGNsaWVudE1hbmlmZXN0LCBudWxsLCAyKTtcclxuICAgICAgICAgIGF3YWl0IGZzMi5vdXRwdXRGaWxlKG91dHB1dEZpbGUsIGNsaWVudE1hbmlmZXN0SnNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIGNsaWVudFBsdWdpbjtcclxufTtcclxuXHJcbi8vIHNyYy9idWlsZC9jcmVhdGVDbGllbnRDb25maWcudHNcclxudmFyIHJlcXVpcmU3ID0gY3JlYXRlUmVxdWlyZTYoaW1wb3J0Lm1ldGEudXJsKTtcclxudmFyIGNsaWVudE1hbmlmZXN0RmlsZW5hbWUgPSBcIi5zZXJ2ZXIvY2xpZW50LW1hbmlmZXN0Lmpzb25cIjtcclxudmFyIGNyZWF0ZUNsaWVudENvbmZpZyA9IGFzeW5jIChhcHAsIG9wdGlvbnMpID0+IHtcclxuICBjb25zdCBjb25maWcgPSBhd2FpdCBjcmVhdGVDbGllbnRCYXNlQ29uZmlnKHtcclxuICAgIGFwcCxcclxuICAgIG9wdGlvbnMsXHJcbiAgICBpc0J1aWxkOiB0cnVlXHJcbiAgfSk7XHJcbiAgY29uZmlnLm1vZHVsZS5ydWxlKFwidnVlXCIpLnRlc3QoL1xcLnZ1ZSQvKS51c2UoXCJ2dWVwcmVzcy1sb2FkZXJcIikuYmVmb3JlKFwidnVlLWxvYWRlclwiKS5sb2FkZXIocmVxdWlyZTcucmVzb2x2ZShcIi4vdnVlcHJlc3MtbG9hZGVyLmNqc1wiKSkuZW5kKCk7XHJcbiAgY29uZmlnLnBsdWdpbihcInZ1ZXByZXNzLWNsaWVudFwiKS51c2UoY3JlYXRlQ2xpZW50UGx1Z2luKGFwcC5kaXIudGVtcChjbGllbnRNYW5pZmVzdEZpbGVuYW1lKSkpO1xyXG4gIGlmIChmczMucGF0aEV4aXN0c1N5bmMoYXBwLmRpci5wdWJsaWMoKSkpIHtcclxuICAgIGNvbmZpZy5wbHVnaW4oXCJjb3B5XCIpLnVzZShDb3B5V2VicGFja1BsdWdpbiwgW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0dGVybnM6IFt7IGZyb206IGFwcC5kaXIucHVibGljKCksIHRvOiBhcHAuZGlyLmRlc3QoKSB9XVxyXG4gICAgICB9XHJcbiAgICBdKTtcclxuICB9XHJcbiAgY29uZmlnLnBsdWdpbihcImV4dHJhY3QtY3NzXCIpLnVzZShNaW5pQ3NzRXh0cmFjdFBsdWdpbjIsIFtcclxuICAgIHtcclxuICAgICAgZmlsZW5hbWU6IFwiYXNzZXRzL2Nzcy9zdHlsZXMuW2NodW5raGFzaDo4XS5jc3NcIlxyXG4gICAgfVxyXG4gIF0pO1xyXG4gIGNvbmZpZy5vcHRpbWl6YXRpb24uc3BsaXRDaHVua3Moe1xyXG4gICAgY2FjaGVHcm91cHM6IHtcclxuICAgICAgLy8gZW5zdXJlIGFsbCBjc3MgYXJlIGV4dHJhY3RlZCB0b2dldGhlci5cclxuICAgICAgLy8gc2luY2UgbW9zdCBvZiB0aGUgQ1NTIHdpbGwgYmUgZnJvbSB0aGUgdGhlbWUgYW5kIHZlcnkgbGl0dGxlXHJcbiAgICAgIC8vIENTUyB3aWxsIGJlIGZyb20gYXN5bmMgY2h1bmtzXHJcbiAgICAgIHN0eWxlczoge1xyXG4gICAgICAgIGlkSGludDogXCJzdHlsZXNcIixcclxuICAgICAgICAvLyBuZWNlc3NhcnkgdG8gZW5zdXJlIGFzeW5jIGNodW5rcyBhcmUgYWxzbyBleHRyYWN0ZWRcclxuICAgICAgICB0ZXN0OiAobSkgPT4gL2Nzc1xcL21pbmktZXh0cmFjdC8udGVzdChtLnR5cGUpLFxyXG4gICAgICAgIGNodW5rczogXCJhbGxcIixcclxuICAgICAgICBlbmZvcmNlOiB0cnVlLFxyXG4gICAgICAgIHJldXNlRXhpc3RpbmdDaHVuazogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICAvLyBleHRyYWN0IGV4dGVybmFsIGxpYnJhcnkgdG8gYSBzdGFuZGFsb25lIGNodW5rXHJcbiAgICAgIHZlbmRvcjoge1xyXG4gICAgICAgIGlkSGludDogXCJ2ZW5kb3JcIixcclxuICAgICAgICB0ZXN0OiAvbm9kZV9tb2R1bGVzLyxcclxuICAgICAgICBjaHVua3M6IFwiYWxsXCIsXHJcbiAgICAgICAgcHJpb3JpdHk6IC0xMCxcclxuICAgICAgICByZXVzZUV4aXN0aW5nQ2h1bms6IHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbmZpZy5vcHRpbWl6YXRpb24ucnVudGltZUNodW5rKHRydWUpO1xyXG4gIGlmICghYXBwLmVudi5pc0RlYnVnKSB7XHJcbiAgICBjb25maWcucGVyZm9ybWFuY2UuaGludHMoZmFsc2UpO1xyXG4gIH1cclxuICByZXR1cm4gY29uZmlnO1xyXG59O1xyXG5cclxuLy8gc3JjL2J1aWxkL2NyZWF0ZVNlcnZlckNvbmZpZy50c1xyXG5pbXBvcnQgeyBjcmVhdGVSZXF1aXJlIGFzIGNyZWF0ZVJlcXVpcmU3IH0gZnJvbSBcIm1vZHVsZVwiO1xyXG52YXIgcmVxdWlyZTggPSBjcmVhdGVSZXF1aXJlNyhpbXBvcnQubWV0YS51cmwpO1xyXG52YXIgY3JlYXRlU2VydmVyQ29uZmlnID0gYXN5bmMgKGFwcCwgb3B0aW9ucykgPT4ge1xyXG4gIGNvbnN0IGlzQnVpbGQgPSB0cnVlO1xyXG4gIGNvbnN0IGlzU2VydmVyID0gdHJ1ZTtcclxuICBjb25zdCBjb25maWcgPSBhd2FpdCBjcmVhdGVCYXNlQ29uZmlnKHtcclxuICAgIGFwcCxcclxuICAgIG9wdGlvbnMsXHJcbiAgICBpc0J1aWxkLFxyXG4gICAgaXNTZXJ2ZXJcclxuICB9KTtcclxuICBjb25maWcub3V0cHV0LnBhdGgoYXBwLmRpci50ZW1wKFwiLnNlcnZlclwiKSkuZmlsZW5hbWUoXCJhcHAuY2pzXCIpLnB1YmxpY1BhdGgoYXBwLm9wdGlvbnMuYmFzZSkubGlicmFyeVRhcmdldChcImNvbW1vbmpzMlwiKTtcclxuICBjb25maWcudGFyZ2V0KFwibm9kZVwiKTtcclxuICBjb25maWcuZXh0ZXJuYWxzKFtcInZ1ZVwiXSk7XHJcbiAgY29uZmlnLmRldnRvb2woXCJzb3VyY2UtbWFwXCIpO1xyXG4gIGNvbmZpZy5vcHRpbWl6YXRpb24ubWluaW1pemUoZmFsc2UpO1xyXG4gIGNvbmZpZy5tb2R1bGUucnVsZShcInZ1ZVwiKS50ZXN0KC9cXC52dWUkLykudXNlKFwidnVlcHJlc3MtbG9hZGVyXCIpLmJlZm9yZShcInZ1ZS1sb2FkZXJcIikubG9hZGVyKHJlcXVpcmU4LnJlc29sdmUoXCIuL3Z1ZXByZXNzLWxvYWRlci5janNcIikpLmVuZCgpO1xyXG4gIHJldHVybiBjb25maWc7XHJcbn07XHJcblxyXG4vLyBzcmMvYnVpbGQvcmVuZGVyUGFnZS50c1xyXG5pbXBvcnQgeyBmcyBhcyBmczQsIHJlbmRlckhlYWQgfSBmcm9tIFwiQHZ1ZXByZXNzL3V0aWxzXCI7XHJcbmltcG9ydCB7IHNzckNvbnRleHRLZXkgfSBmcm9tIFwidnVlXCI7XHJcblxyXG4vLyBzcmMvYnVpbGQvcmVuZGVyUGFnZVByZWZldGNoTGlua3MudHNcclxudmFyIHJlbmRlclBhZ2VQcmVmZXRjaExpbmtzID0gKHtcclxuICBhcHAsXHJcbiAgYXN5bmNGaWxlc01ldGEsXHJcbiAgcGFnZUNsaWVudEZpbGVzTWV0YVxyXG59KSA9PiB7XHJcbiAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBhcHAub3B0aW9ucy5zaG91bGRQcmVmZXRjaDtcclxuICBpZiAoc2hvdWxkUHJlZmV0Y2ggPT09IGZhbHNlKSB7XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcbiAgY29uc3QgcHJlZmV0Y2hGaWxlc01ldGEgPSBhc3luY0ZpbGVzTWV0YS5maWx0ZXIoXHJcbiAgICAoeyBmaWxlIH0pID0+ICFwYWdlQ2xpZW50RmlsZXNNZXRhLnNvbWUoKGYpID0+IGYuZmlsZSA9PT0gZmlsZSlcclxuICApO1xyXG4gIHJldHVybiBwcmVmZXRjaEZpbGVzTWV0YS5tYXAoKHsgZmlsZSwgdHlwZSB9KSA9PiB7XHJcbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggIT09IHRydWUgJiYgIXNob3VsZFByZWZldGNoKGZpbGUsIHR5cGUpKSB7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGA8bGluayByZWw9XCJwcmVmZXRjaFwiIGhyZWY9XCIke2FwcC5vcHRpb25zLmJhc2V9JHtmaWxlfVwiIGFzPVwiJHt0eXBlfVwiPmA7XHJcbiAgfSkuam9pbihcIlwiKTtcclxufTtcclxuXHJcbi8vIHNyYy9idWlsZC9yZW5kZXJQYWdlUHJlbG9hZExpbmtzLnRzXHJcbnZhciByZW5kZXJQYWdlUHJlbG9hZExpbmtzID0gKHtcclxuICBhcHAsXHJcbiAgaW5pdGlhbEZpbGVzTWV0YSxcclxuICBwYWdlQ2xpZW50RmlsZXNNZXRhXHJcbn0pID0+IHtcclxuICBjb25zdCBzaG91bGRQcmVsb2FkID0gYXBwLm9wdGlvbnMuc2hvdWxkUHJlbG9hZDtcclxuICBpZiAoc2hvdWxkUHJlbG9hZCA9PT0gZmFsc2UpIHtcclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuICBjb25zdCBwcmVsb2FkRmlsZXNNZXRhID0gWy4uLmluaXRpYWxGaWxlc01ldGEsIC4uLnBhZ2VDbGllbnRGaWxlc01ldGFdO1xyXG4gIHJldHVybiBwcmVsb2FkRmlsZXNNZXRhLm1hcCgoeyBmaWxlLCBleHRlbnNpb24sIHR5cGUgfSkgPT4ge1xyXG4gICAgaWYgKHNob3VsZFByZWxvYWQgPT09IHRydWUgJiYgdHlwZSAhPT0gXCJzY3JpcHRcIiAmJiB0eXBlICE9PSBcInN0eWxlXCIpIHtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgICBpZiAoc2hvdWxkUHJlbG9hZCAhPT0gdHJ1ZSAmJiAhc2hvdWxkUHJlbG9hZChmaWxlLCB0eXBlKSkge1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBgPGxpbmsgcmVsPVwicHJlbG9hZFwiIGhyZWY9XCIke2FwcC5vcHRpb25zLmJhc2V9JHtmaWxlfVwiJHt0eXBlICE9PSBcIlwiID8gYCBhcz1cIiR7dHlwZX1cImAgOiBcIlwifSR7dHlwZSA9PT0gXCJmb250XCIgPyBgIHR5cGU9XCJmb250LyR7ZXh0ZW5zaW9ufVwiIGNyb3Nzb3JpZ2luYCA6IFwiXCJ9PmA7XHJcbiAgfSkuam9pbihcIlwiKTtcclxufTtcclxuXHJcbi8vIHNyYy9idWlsZC9yZW5kZXJQYWdlU2NyaXB0cy50c1xyXG52YXIgcmVuZGVyUGFnZVNjcmlwdHMgPSAoe1xyXG4gIGFwcCxcclxuICBpbml0aWFsRmlsZXNNZXRhLFxyXG4gIHBhZ2VDbGllbnRGaWxlc01ldGFcclxufSkgPT4gKFxyXG4gIC8vIGluY2x1ZGUgaW5pdGlhbCBKUyBmaWxlcyBhbmQgb3RoZXIgYXN5bmMgSlMgZmlsZXMgb2YgY3VycmVudCBwYWdlXHJcbiAgWy4uLnBhZ2VDbGllbnRGaWxlc01ldGEsIC4uLmluaXRpYWxGaWxlc01ldGFdLmZpbHRlcigoeyB0eXBlIH0pID0+IHR5cGUgPT09IFwic2NyaXB0XCIpLm1hcChcclxuICAgICh7IGZpbGUgfSkgPT4gYDxzY3JpcHQgc3JjPVwiJHthcHAub3B0aW9ucy5iYXNlfSR7ZmlsZX1cIiBkZWZlcj48L3NjcmlwdD5gXHJcbiAgKS5qb2luKFwiXCIpXHJcbik7XHJcblxyXG4vLyBzcmMvYnVpbGQvcmVuZGVyUGFnZVN0eWxlcy50c1xyXG52YXIgcmVuZGVyUGFnZVN0eWxlcyA9ICh7XHJcbiAgYXBwLFxyXG4gIGluaXRpYWxGaWxlc01ldGEsXHJcbiAgcGFnZUNsaWVudEZpbGVzTWV0YVxyXG59KSA9PiAoXHJcbiAgLy8gaW5jbHVkZSBpbml0aWFsIENTUyBmaWxlcyBhbmQgb3RoZXIgYXN5bmMgQ1NTIGZpbGVzIG9mIGN1cnJlbnQgcGFnZVxyXG4gIC8vIG5vdGljZSBoZXJlIHdlIHB1dCBhc3luYyBDU1MgZmlsZXMgYWZ0ZXIgaW5pdGlhbCBDU1MgZmlsZXNcclxuICBbLi4uaW5pdGlhbEZpbGVzTWV0YSwgLi4ucGFnZUNsaWVudEZpbGVzTWV0YV0uZmlsdGVyKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gXCJzdHlsZVwiKS5tYXAoXHJcbiAgICAoeyBmaWxlIH0pID0+IGA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIiR7YXBwLm9wdGlvbnMuYmFzZX0ke2ZpbGV9XCI+YFxyXG4gICkuam9pbihcIlwiKVxyXG4pO1xyXG5cclxuLy8gc3JjL2J1aWxkL3Jlc29sdmVQYWdlQ2xpZW50RmlsZXNNZXRhLnRzXHJcbnZhciByZXNvbHZlUGFnZUNsaWVudEZpbGVzTWV0YSA9ICh7XHJcbiAgbW9kdWxlUmVxdWVzdHMsXHJcbiAgbW9kdWxlRmlsZXNNZXRhTWFwXHJcbn0pID0+IHtcclxuICBjb25zdCBmaWxlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XHJcbiAgbW9kdWxlUmVxdWVzdHMuZm9yRWFjaCgocmVxdWVzdCkgPT4ge1xyXG4gICAgbW9kdWxlRmlsZXNNZXRhTWFwW3JlcXVlc3RdPy5mb3JFYWNoKChmaWxlKSA9PiBmaWxlcy5hZGQoZmlsZSkpO1xyXG4gIH0pO1xyXG4gIHJldHVybiBBcnJheS5mcm9tKGZpbGVzKTtcclxufTtcclxuXHJcbi8vIHNyYy9idWlsZC9yZW5kZXJQYWdlLnRzXHJcbnZhciByZW5kZXJQYWdlID0gYXN5bmMgKHtcclxuICBhcHAsXHJcbiAgcGFnZSxcclxuICB2dWVBcHAsXHJcbiAgdnVlUm91dGVyLFxyXG4gIHJlbmRlclRvU3RyaW5nLFxyXG4gIHNzclRlbXBsYXRlLFxyXG4gIGluaXRpYWxGaWxlc01ldGEsXHJcbiAgYXN5bmNGaWxlc01ldGEsXHJcbiAgbW9kdWxlRmlsZXNNZXRhTWFwXHJcbn0pID0+IHtcclxuICBhd2FpdCB2dWVSb3V0ZXIucHVzaChwYWdlLnBhdGgpO1xyXG4gIGF3YWl0IHZ1ZVJvdXRlci5pc1JlYWR5KCk7XHJcbiAgZGVsZXRlIHZ1ZUFwcC5fY29udGV4dC5wcm92aWRlc1tzc3JDb250ZXh0S2V5XTtcclxuICBjb25zdCBzc3JDb250ZXh0ID0ge1xyXG4gICAgX3JlZ2lzdGVyZWRDb21wb25lbnRzOiAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpLFxyXG4gICAgbGFuZzogXCJlblwiLFxyXG4gICAgaGVhZDogW11cclxuICB9O1xyXG4gIGNvbnN0IHBhZ2VSZW5kZXJlZCA9IGF3YWl0IHJlbmRlclRvU3RyaW5nKHZ1ZUFwcCwgc3NyQ29udGV4dCk7XHJcbiAgY29uc3QgcGFnZUNsaWVudEZpbGVzTWV0YSA9IHJlc29sdmVQYWdlQ2xpZW50RmlsZXNNZXRhKHtcclxuICAgIG1vZHVsZVJlcXVlc3RzOiBBcnJheS5mcm9tKHNzckNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSxcclxuICAgIG1vZHVsZUZpbGVzTWV0YU1hcFxyXG4gIH0pO1xyXG4gIGNvbnN0IGh0bWwgPSBhd2FpdCBhcHAub3B0aW9ucy50ZW1wbGF0ZUJ1aWxkUmVuZGVyZXIoc3NyVGVtcGxhdGUsIHtcclxuICAgIGNvbnRlbnQ6IHBhZ2VSZW5kZXJlZCxcclxuICAgIGhlYWQ6IHNzckNvbnRleHQuaGVhZC5tYXAocmVuZGVySGVhZCkuam9pbihcIlwiKSxcclxuICAgIGxhbmc6IHNzckNvbnRleHQubGFuZyxcclxuICAgIHByZWZldGNoOiByZW5kZXJQYWdlUHJlZmV0Y2hMaW5rcyh7XHJcbiAgICAgIGFwcCxcclxuICAgICAgYXN5bmNGaWxlc01ldGEsXHJcbiAgICAgIHBhZ2VDbGllbnRGaWxlc01ldGFcclxuICAgIH0pLFxyXG4gICAgcHJlbG9hZDogcmVuZGVyUGFnZVByZWxvYWRMaW5rcyh7XHJcbiAgICAgIGFwcCxcclxuICAgICAgaW5pdGlhbEZpbGVzTWV0YSxcclxuICAgICAgcGFnZUNsaWVudEZpbGVzTWV0YVxyXG4gICAgfSksXHJcbiAgICBzY3JpcHRzOiByZW5kZXJQYWdlU2NyaXB0cyh7IGFwcCwgaW5pdGlhbEZpbGVzTWV0YSwgcGFnZUNsaWVudEZpbGVzTWV0YSB9KSxcclxuICAgIHN0eWxlczogcmVuZGVyUGFnZVN0eWxlcyh7IGFwcCwgaW5pdGlhbEZpbGVzTWV0YSwgcGFnZUNsaWVudEZpbGVzTWV0YSB9KSxcclxuICAgIHZlcnNpb246IGFwcC52ZXJzaW9uXHJcbiAgfSk7XHJcbiAgYXdhaXQgZnM0Lm91dHB1dEZpbGUocGFnZS5odG1sRmlsZVBhdGgsIGh0bWwpO1xyXG59O1xyXG5cclxuLy8gc3JjL2J1aWxkL3Jlc29sdmVGaWxlTWV0YS50c1xyXG5pbXBvcnQgeyBwYXRoIH0gZnJvbSBcIkB2dWVwcmVzcy91dGlsc1wiO1xyXG5cclxuLy8gc3JjL2J1aWxkL3Jlc29sdmVGaWxlTWV0YVR5cGUudHNcclxudmFyIHJlc29sdmVGaWxlTWV0YVR5cGUgPSAoZXh0ZW5zaW9uKSA9PiB7XHJcbiAgaWYgKGV4dGVuc2lvbiA9PT0gXCJqc1wiKSB7XHJcbiAgICByZXR1cm4gXCJzY3JpcHRcIjtcclxuICB9XHJcbiAgaWYgKGV4dGVuc2lvbiA9PT0gXCJjc3NcIikge1xyXG4gICAgcmV0dXJuIFwic3R5bGVcIjtcclxuICB9XHJcbiAgaWYgKC9qcGU/Z3xwbmd8c3ZnfGdpZnx3ZWJwfGljby8udGVzdChleHRlbnNpb24pKSB7XHJcbiAgICByZXR1cm4gXCJpbWFnZVwiO1xyXG4gIH1cclxuICBpZiAoL3dvZmYyP3x0dGZ8b3RmfGVvdC8udGVzdChleHRlbnNpb24pKSB7XHJcbiAgICByZXR1cm4gXCJmb250XCI7XHJcbiAgfVxyXG4gIHJldHVybiBcIlwiO1xyXG59O1xyXG5cclxuLy8gc3JjL2J1aWxkL3Jlc29sdmVGaWxlTWV0YS50c1xyXG52YXIgcmVzb2x2ZUZpbGVNZXRhID0gKGZpbGUpID0+IHtcclxuICBjb25zdCBleHRlbnNpb24gPSBwYXRoLmV4dG5hbWUoZmlsZSkuc2xpY2UoMSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGZpbGUsXHJcbiAgICBleHRlbnNpb24sXHJcbiAgICB0eXBlOiByZXNvbHZlRmlsZU1ldGFUeXBlKGV4dGVuc2lvbilcclxuICB9O1xyXG59O1xyXG5cclxuLy8gc3JjL2J1aWxkL3Jlc29sdmVDbGllbnRNYW5pZmVzdE1ldGEudHNcclxudmFyIHJlc29sdmVDbGllbnRNYW5pZmVzdE1ldGEgPSAoe1xyXG4gIGFsbCxcclxuICBpbml0aWFsLFxyXG4gIGFzeW5jLFxyXG4gIG1vZHVsZXNcclxufSkgPT4ge1xyXG4gIGNvbnN0IGFsbEZpbGVzTWV0YSA9IGFsbC5tYXAocmVzb2x2ZUZpbGVNZXRhKTtcclxuICBjb25zdCBpbml0aWFsRmlsZXNNZXRhID0gaW5pdGlhbC5tYXAocmVzb2x2ZUZpbGVNZXRhKTtcclxuICBjb25zdCBhc3luY0ZpbGVzTWV0YSA9IGFzeW5jLm1hcChyZXNvbHZlRmlsZU1ldGEpO1xyXG4gIGNvbnN0IG1vZHVsZUZpbGVzTWV0YU1hcCA9IE9iamVjdC5mcm9tRW50cmllcyhcclxuICAgIE9iamVjdC5lbnRyaWVzKG1vZHVsZXMpLm1hcCgoW21vZHVsZVJlcXVlc3QsIGFzc2V0RmlsZXNJbmRleF0pID0+IHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBtb2R1bGVSZXF1ZXN0LFxyXG4gICAgICAgIGFzc2V0RmlsZXNJbmRleC5tYXAoKGZpbGVJbmRleCkgPT4gYWxsRmlsZXNNZXRhW2ZpbGVJbmRleF0pLmZpbHRlcihcclxuICAgICAgICAgICh7IGZpbGUsIHR5cGUgfSkgPT4gYXN5bmMuaW5jbHVkZXMoZmlsZSkgfHwgdHlwZSAhPT0gXCJzdHlsZVwiICYmIHR5cGUgIT09IFwic2NyaXB0XCJcclxuICAgICAgICApXHJcbiAgICAgIF07XHJcbiAgICB9KVxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGFsbEZpbGVzTWV0YSxcclxuICAgIGluaXRpYWxGaWxlc01ldGEsXHJcbiAgICBhc3luY0ZpbGVzTWV0YSxcclxuICAgIG1vZHVsZUZpbGVzTWV0YU1hcFxyXG4gIH07XHJcbn07XHJcblxyXG4vLyBzcmMvYnVpbGQvYnVpbGQudHNcclxudmFyIGxvZyA9IGRlYnVnKFwidnVlcHJlc3M6YnVuZGxlci13ZWJwYWNrL2J1aWxkXCIpO1xyXG52YXIgYnVpbGQgPSBhc3luYyAob3B0aW9ucywgYXBwKSA9PiB7XHJcbiAgYXdhaXQgYXBwLnBsdWdpbkFwaS5ob29rcy5leHRlbmRzQnVuZGxlck9wdGlvbnMucHJvY2VzcyhvcHRpb25zLCBhcHApO1xyXG4gIGxvZyhcIm9mZmxpbmUgY29tcGlsaW5nIHN0YXJ0XCIpO1xyXG4gIGF3YWl0IHdpdGhTcGlubmVyKFwiQ29tcGlsaW5nIGNsaWVudCBhbmQgc2VydmVyIG9ubGluZSB3aXRoIHdlYnBhY2tcIikoYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY2xpZW50Q29uZmlnID0gcmVzb2x2ZVdlYnBhY2tDb25maWcoe1xyXG4gICAgICBjb25maWc6IGF3YWl0IGNyZWF0ZUNsaWVudENvbmZpZyhhcHAsIG9wdGlvbnMpLFxyXG4gICAgICBvcHRpb25zLFxyXG4gICAgICBpc1NlcnZlcjogZmFsc2UsXHJcbiAgICAgIGlzQnVpbGQ6IHRydWVcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc2VydmVyQ29uZmlnID0gcmVzb2x2ZVdlYnBhY2tDb25maWcoe1xyXG4gICAgICBjb25maWc6IGF3YWl0IGNyZWF0ZVNlcnZlckNvbmZpZyhhcHAsIG9wdGlvbnMpLFxyXG4gICAgICBvcHRpb25zLFxyXG4gICAgICBpc1NlcnZlcjogdHJ1ZSxcclxuICAgICAgaXNCdWlsZDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHdlYnBhY2syKFtjbGllbnRDb25maWcsIHNlcnZlckNvbmZpZ10sIChlcnIsIHN0YXRzKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0cz8uaGFzRXJyb3JzKCkpIHtcclxuICAgICAgICAgIHN0YXRzLnRvSnNvbigpLmVycm9ycz8uZm9yRWFjaCgoZXJyMikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycjIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIGNvbXBpbGUgd2l0aCBlcnJvcnNcIikpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoc3RhdHM/Lmhhc1dhcm5pbmdzKCkpIHtcclxuICAgICAgICAgICAgc3RhdHMudG9Kc29uKCkud2FybmluZ3M/LmZvckVhY2goKHdhcm5pbmcpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4od2FybmluZyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBsb2coXCJjb21waWxpbmcgZmluaXNoXCIpO1xyXG4gIGF3YWl0IHdpdGhTcGlubmVyKGBSZW5kZXJpbmcgJHthcHAucGFnZXMubGVuZ3RofSBwYWdlc2ApKGFzeW5jIChzcGlubmVyKSA9PiB7XHJcbiAgICBjb25zdCBjbGllbnRNYW5pZmVzdFBhdGggPSBhcHAuZGlyLnRlbXAoY2xpZW50TWFuaWZlc3RGaWxlbmFtZSk7XHJcbiAgICBjb25zdCBjbGllbnRNYW5pZmVzdCA9IGF3YWl0IGZzNS5yZWFkSnNvbihjbGllbnRNYW5pZmVzdFBhdGgpO1xyXG4gICAgY29uc3QgeyBpbml0aWFsRmlsZXNNZXRhLCBhc3luY0ZpbGVzTWV0YSwgbW9kdWxlRmlsZXNNZXRhTWFwIH0gPSByZXNvbHZlQ2xpZW50TWFuaWZlc3RNZXRhKGNsaWVudE1hbmlmZXN0KTtcclxuICAgIGNvbnN0IHNlcnZlckVudHJ5UGF0aCA9IGFwcC5kaXIudGVtcChcIi5zZXJ2ZXIvYXBwLmNqc1wiKTtcclxuICAgIGNvbnN0IHsgY3JlYXRlVnVlQXBwIH0gPSBhd2FpdCBpbXBvcnRGaWxlRGVmYXVsdChzZXJ2ZXJFbnRyeVBhdGgpO1xyXG4gICAgY29uc3QgeyBhcHA6IHZ1ZUFwcCwgcm91dGVyOiB2dWVSb3V0ZXIgfSA9IGF3YWl0IGNyZWF0ZVZ1ZUFwcCgpO1xyXG4gICAgY29uc3QgeyByZW5kZXJUb1N0cmluZyB9ID0gYXdhaXQgaW1wb3J0KFwidnVlL3NlcnZlci1yZW5kZXJlclwiKTtcclxuICAgIGNvbnN0IHNzclRlbXBsYXRlID0gYXdhaXQgZnM1LnJlYWRGaWxlKGFwcC5vcHRpb25zLnRlbXBsYXRlQnVpbGQsIHtcclxuICAgICAgZW5jb2Rpbmc6IFwidXRmOFwiXHJcbiAgICB9KTtcclxuICAgIGZvciAoY29uc3QgcGFnZSBvZiBhcHAucGFnZXMpIHtcclxuICAgICAgaWYgKHNwaW5uZXIpIHtcclxuICAgICAgICBzcGlubmVyLnRleHQgPSBgUmVuZGVyaW5nIHBhZ2VzICR7Y29sb3JzLm1hZ2VudGEocGFnZS5wYXRoKX1gO1xyXG4gICAgICB9XHJcbiAgICAgIGF3YWl0IHJlbmRlclBhZ2Uoe1xyXG4gICAgICAgIGFwcCxcclxuICAgICAgICBwYWdlLFxyXG4gICAgICAgIHZ1ZUFwcCxcclxuICAgICAgICB2dWVSb3V0ZXIsXHJcbiAgICAgICAgcmVuZGVyVG9TdHJpbmcsXHJcbiAgICAgICAgc3NyVGVtcGxhdGUsXHJcbiAgICAgICAgaW5pdGlhbEZpbGVzTWV0YSxcclxuICAgICAgICBhc3luY0ZpbGVzTWV0YSxcclxuICAgICAgICBtb2R1bGVGaWxlc01ldGFNYXBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgaWYgKCFhcHAuZW52LmlzRGVidWcpIHtcclxuICAgIGF3YWl0IGZzNS5yZW1vdmUoYXBwLmRpci50ZW1wKFwiLnNlcnZlclwiKSk7XHJcbiAgfVxyXG4gIGF3YWl0IHdpdGhTcGlubmVyKFwiQ29tcGlsaW5nIGNsaWVudCBvZmZsaW5lIHdpdGggd2VicGFja1wiKShhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBtYWtlX2VtcHR5X3Z1ZSA9IChkaXJwYXRoKT0+e1xyXG4gICAgICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKGRpcnBhdGgpO1xyXG4gICAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbGVQYXRoID0gYCR7ZGlycGF0aH0vJHtmaWxlfWA7XHJcbiAgICAgICAgY29uc3Qgc3RhdHMgPSBmcy5zdGF0U3luYyhmaWxlUGF0aCk7XHJcbiAgICAgICAgaWYgKHN0YXRzLmlzRGlyZWN0b3J5KCkpIHtcclxuICAgICAgICAgIG1ha2VfZW1wdHlfdnVlKGZpbGVQYXRoKTsgLy8gXHU5MDEyXHU1RjUyXHU5MDREXHU1Mzg2XHU1QjUwXHU3NkVFXHU1RjU1XHJcbiAgICAgICAgfSBlbHNlIGlmKGZpbGUuZW5kc1dpdGgoXCIudnVlXCIpKXtcclxuICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIGBcclxuICAgICAgICAgIDx0ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgYClcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbGV0IHBhZ2VzX2RpciA9IGFwcC5kaXIudGVtcChcInBhZ2VzXCIpO1xyXG4gICAgLy9tYWtlX2VtcHR5X3Z1ZShwYWdlc19kaXIpOyAvLyBcdTUzQkJcdTYzODlcdTc5QkJcdTdFQkZcdTcyNDhcdTY3MkNcdTc2ODRcdTYyNDBcdTY3MDlcdTc2ODRqc1x1NjU4N1x1NEVGNlxyXG4gICAgZnMucmVtb3ZlU3luYyhhcHAuZGlyLmRlc3QoXCJhc3NldHMvanNcIikpXHJcbiAgICBsZXQgY3NzZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhhcHAuZGlyLmRlc3QoXCJhc3NldHMvY3NzXCIpKVxyXG4gICAgLy8gZnMucmVtb3ZlU3luYyhhcHAuZGlyLmRlc3QoXCJhc3NldHMvY3NzXCIpKVxyXG4gICAgY29uc3QgY2xpZW50Q29uZmlnID0gcmVzb2x2ZVdlYnBhY2tDb25maWcoe1xyXG4gICAgICBjb25maWc6IGF3YWl0IGNyZWF0ZUNsaWVudENvbmZpZyhhcHAsIG9wdGlvbnMpLFxyXG4gICAgICBvcHRpb25zLFxyXG4gICAgICBpc1NlcnZlcjogZmFsc2UsXHJcbiAgICAgIGlzQnVpbGQ6IHRydWVcclxuICAgIH0pO1xyXG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3ZWJwYWNrMihbY2xpZW50Q29uZmlnXSwgKGVyciwgc3RhdHMpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXRzPy5oYXNFcnJvcnMoKSkge1xyXG4gICAgICAgICAgc3RhdHMudG9Kc29uKCkuZXJyb3JzPy5mb3JFYWNoKChlcnIyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyMik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY29tcGlsZSB3aXRoIGVycm9yc1wiKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChzdGF0cz8uaGFzV2FybmluZ3MoKSkge1xyXG4gICAgICAgICAgICBzdGF0cy50b0pzb24oKS53YXJuaW5ncz8uZm9yRWFjaCgod2FybmluZykgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgbGV0IGNzc19maWxlc19hbGwgPSBmcy5yZWFkZGlyU3luYyhhcHAuZGlyLmRlc3QoXCJhc3NldHMvY3NzXCIpKTtcclxuICAgIGNzc19maWxlc19hbGwuZm9yRWFjaCgoZmlsZSk9PntcclxuICAgICAgaWYoY3NzZmlsZXMuaW5kZXhPZihmaWxlKT49MCl7XHJcbiAgICAgICAgXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGZzLnJlbW92ZVN5bmMocGF0aC5yZXNvbHZlKGFwcC5kaXIuZGVzdChcImFzc2V0cy9jc3NcIiksIGZpbGUpKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KTtcclxufTtcclxuXHJcbi8vIHNyYy9kZXYvZGV2LnRzXHJcbmltcG9ydCB7IGNvbG9ycyBhcyBjb2xvcnMyLCBsb2dnZXIsIG9yYSB9IGZyb20gXCJAdnVlcHJlc3MvdXRpbHNcIjtcclxuaW1wb3J0IHdlYnBhY2s0IGZyb20gXCJ3ZWJwYWNrXCI7XHJcbmltcG9ydCBXZWJwYWNrRGV2U2VydmVyIGZyb20gXCJ3ZWJwYWNrLWRldi1zZXJ2ZXJcIjtcclxuXHJcbi8vIHNyYy9kZXYvY3JlYXRlRGV2Q29uZmlnLnRzXHJcbmltcG9ydCBIdG1sUGx1Z2luIGZyb20gXCJodG1sLXdlYnBhY2stcGx1Z2luXCI7XHJcbmltcG9ydCB3ZWJwYWNrMyBmcm9tIFwid2VicGFja1wiO1xyXG52YXIgY3JlYXRlRGV2Q29uZmlnID0gYXN5bmMgKGFwcCwgb3B0aW9ucykgPT4ge1xyXG4gIGNvbnN0IGNvbmZpZyA9IGF3YWl0IGNyZWF0ZUNsaWVudEJhc2VDb25maWcoe1xyXG4gICAgYXBwLFxyXG4gICAgb3B0aW9ucyxcclxuICAgIGlzQnVpbGQ6IGZhbHNlXHJcbiAgfSk7XHJcbiAgY29uZmlnLnBsdWdpbihcImh0bWxcIikudXNlKEh0bWxQbHVnaW4sIFtcclxuICAgIHtcclxuICAgICAgdGVtcGxhdGU6IGFwcC5vcHRpb25zLnRlbXBsYXRlRGV2XHJcbiAgICB9XHJcbiAgXSk7XHJcbiAgY29uZmlnLnBsdWdpbihcImhtclwiKS51c2Uod2VicGFjazMuSG90TW9kdWxlUmVwbGFjZW1lbnRQbHVnaW4pO1xyXG4gIHJldHVybiBjb25maWc7XHJcbn07XHJcblxyXG4vLyBzcmMvZGV2L2NyZWF0ZURldlNlcnZlckNvbmZpZy50c1xyXG5pbXBvcnQgeyBzZXAgfSBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyBwYXRoIGFzIHBhdGgyIH0gZnJvbSBcIkB2dWVwcmVzcy91dGlsc1wiO1xyXG5cclxuLy8gc3JjL2Rldi90cmFpbGluZ1NsYXNoTWlkZGxld2FyZS50c1xyXG52YXIgdHJhaWxpbmdTbGFzaE1pZGRsZXdhcmUgPSAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICBpZiAoXHJcbiAgICAvLyBvbmx5IGFkZCB0cmFpbGluZyBzbGFzaCBpbiBHRVQgYW5kIEhFQUQgcmVxdWVzdHNcclxuICAgICFbXCJHRVRcIiwgXCJIRUFEXCJdLmluY2x1ZGVzKHJlcS5tZXRob2QpIHx8IC8vIGlmIHRoZSBsYXN0IHNlY3Rpb24gb2YgdGhlIHBhdGggaGFzIGEgZG90LCB3ZSB0aGluayBpdCBoYXMgZXh0ZW5zaW9uXHJcbiAgICAvLyBhbmQgc2hvdWxkIG5vdCBhZGQgdHJhaWxpbmcgc2xhc2hcclxuICAgIHJlcS5wYXRoLnNwbGl0KFwiL1wiKS5wb3AoKT8uaW5jbHVkZXMoXCIuXCIpIHx8IC8vIGlmIHRoZSBwYXRoIGFscmVhZHkgaGFzIHRyYWlsaW5nIHNsYXNoXHJcbiAgICByZXEucGF0aC5lbmRzV2l0aChcIi9cIilcclxuICApIHtcclxuICAgIHJldHVybiBuZXh0KCk7XHJcbiAgfVxyXG4gIGNvbnN0IHF1ZXJ5ID0gcmVxLnVybC5zbGljZShyZXEucGF0aC5sZW5ndGgpO1xyXG4gIHJlcy5yZWRpcmVjdCgzMDIsIGAke3JlcS5wYXRofS8ke3F1ZXJ5fWApO1xyXG59O1xyXG5cclxuLy8gc3JjL2Rldi9jcmVhdGVEZXZTZXJ2ZXJDb25maWcudHNcclxudmFyIGNyZWF0ZURldlNlcnZlckNvbmZpZyA9IGFzeW5jIChhcHAsIG9wdGlvbnMpID0+ICh7XHJcbiAgYWxsb3dlZEhvc3RzOiBcImFsbFwiLFxyXG4gIGNvbXByZXNzOiB0cnVlLFxyXG4gIGRldk1pZGRsZXdhcmU6IHtcclxuICAgIHB1YmxpY1BhdGg6IGFwcC5vcHRpb25zLmJhc2UsXHJcbiAgICB3cml0ZVRvRGlzazogZmFsc2UsXHJcbiAgICBzdGF0czogYXBwLmVudi5pc0RlYnVnID8gXCJub3JtYWxcIiA6IFwiZXJyb3JzLXdhcm5pbmdzXCJcclxuICB9LFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luXCI6IFwiKlwiXHJcbiAgfSxcclxuICBoaXN0b3J5QXBpRmFsbGJhY2s6IHtcclxuICAgIGRpc2FibGVEb3RSdWxlOiB0cnVlLFxyXG4gICAgcmV3cml0ZXM6IFt7IGZyb206IC8uLywgdG86IHBhdGgyLmpvaW4oYXBwLm9wdGlvbnMuYmFzZSwgXCJpbmRleC5odG1sXCIpIH1dXHJcbiAgfSxcclxuICBob3N0OiBhcHAub3B0aW9ucy5ob3N0LFxyXG4gIGhvdDogdHJ1ZSxcclxuICBzZXR1cE1pZGRsZXdhcmVzOiAobWlkZGxld2FyZXMsIGRldlNlcnZlcikgPT4ge1xyXG4gICAgZGV2U2VydmVyLmFwcD8udXNlKHRyYWlsaW5nU2xhc2hNaWRkbGV3YXJlKTtcclxuICAgIHJldHVybiBvcHRpb25zLmRldlNlcnZlclNldHVwTWlkZGxld2FyZXM/LihtaWRkbGV3YXJlcywgZGV2U2VydmVyKSA/PyBtaWRkbGV3YXJlcztcclxuICB9LFxyXG4gIG9wZW46IGFwcC5vcHRpb25zLm9wZW4sXHJcbiAgcG9ydDogYXBwLm9wdGlvbnMucG9ydCxcclxuICBzdGF0aWM6IHtcclxuICAgIC8vIGBzdGF0aWMuZGlyZWN0b3J5YCB3aWxsIGZhaWwgb24gV2luZG93cyBpZiB3ZSBkbyBub3QgcmVwbGFjZSAvIHdpdGggXFxcclxuICAgIGRpcmVjdG9yeTogYXBwLmRpci5wdWJsaWMoKS5yZXBsYWNlKFwiL1wiLCBzZXApLFxyXG4gICAgcHVibGljUGF0aDogYXBwLm9wdGlvbnMuYmFzZSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIGlnbm9yZUluaXRpYWw6IHRydWUsXHJcbiAgICAgIGlnbm9yZWQ6IFtcclxuICAgICAgICAvLyBEbyBub3Qgd2F0Y2ggbm9kZV9tb2R1bGVzXHJcbiAgICAgICAgXCJub2RlX21vZHVsZXNcIlxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIHNyYy9kZXYvZGV2LnRzXHJcbnZhciBkZXYgPSBhc3luYyAob3B0aW9ucywgYXBwKSA9PiB7XHJcbiAgYXdhaXQgYXBwLnBsdWdpbkFwaS5ob29rcy5leHRlbmRzQnVuZGxlck9wdGlvbnMucHJvY2VzcyhvcHRpb25zLCBhcHApO1xyXG4gIGNvbnN0IHdlYnBhY2tDb25maWcgPSByZXNvbHZlV2VicGFja0NvbmZpZyh7XHJcbiAgICBjb25maWc6IGF3YWl0IGNyZWF0ZURldkNvbmZpZyhhcHAsIG9wdGlvbnMpLFxyXG4gICAgb3B0aW9ucyxcclxuICAgIGlzU2VydmVyOiBmYWxzZSxcclxuICAgIGlzQnVpbGQ6IGZhbHNlXHJcbiAgfSk7XHJcbiAgY29uc3QgY29tcGlsZXIgPSB3ZWJwYWNrNCh3ZWJwYWNrQ29uZmlnKTtcclxuICBjb25zdCBzZXJ2ZXJDb25maWcgPSBhd2FpdCBjcmVhdGVEZXZTZXJ2ZXJDb25maWcoYXBwLCBvcHRpb25zKTtcclxuICBjb25zdCBzZXJ2ZXIgPSBuZXcgV2VicGFja0RldlNlcnZlcihzZXJ2ZXJDb25maWcsIGNvbXBpbGVyKTtcclxuICBjb25zdCBbLCBjbG9zZV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAvLyB3YWl0IGZvciB3ZWJwYWNrLWRldi1zZXJ2ZXIgdG8gc3RhcnRcclxuICAgIHNlcnZlci5zdGFydCgpLFxyXG4gICAgLy8gd2FpdCBmb3Igd2VicGFjayBjb21waWxhdGlvbiB0byBjb21wbGV0ZVxyXG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBzcGlubmVyID0gb3JhKCk7XHJcbiAgICAgIGxldCBoYXNTdGFydGVkID0gZmFsc2U7XHJcbiAgICAgIGxldCBoYXNGaW5pc2hlZCA9IGZhbHNlO1xyXG4gICAgICBjb21waWxlci5ob29rcy5iZWZvcmVDb21waWxlLnRhcChcInZ1ZXByZXNzLWRldlwiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGhhc1N0YXJ0ZWQpXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaGFzU3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgc3Bpbm5lci5zdGFydChcIkNvbXBpbGluZyB3aXRoIHdlYnBhY2suLi5cIik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb21waWxlci5ob29rcy5kb25lLnRhcChcInZ1ZXByZXNzLWRldlwiLCAoeyBlbmRUaW1lLCBzdGFydFRpbWUgfSkgPT4ge1xyXG4gICAgICAgIGlmIChoYXNGaW5pc2hlZClcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBoYXNGaW5pc2hlZCA9IHRydWU7XHJcbiAgICAgICAgc3Bpbm5lci5zdWNjZWVkKGBDb21waWxhdGlvbiBmaW5pc2hlZCBpbiAke2VuZFRpbWUgLSBzdGFydFRpbWV9bXNgKTtcclxuICAgICAgICBjb25zdCB1cmwgPSBgaHR0cDovLyR7c2VydmVyQ29uZmlnLmhvc3QgPT09IFwiMC4wLjAuMFwiID8gXCJsb2NhbGhvc3RcIiA6IHNlcnZlckNvbmZpZy5ob3N0fToke3NlcnZlckNvbmZpZy5wb3J0fSR7YXBwLm9wdGlvbnMuYmFzZX1gO1xyXG4gICAgICAgIGxvZ2dlci5zdWNjZXNzKFxyXG4gICAgICAgICAgYFZ1ZVByZXNzIHdlYnBhY2sgZGV2IHNlcnZlciBpcyBsaXN0ZW5pbmcgYXQgJHtjb2xvcnMyLmN5YW4odXJsKX1gXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXNvbHZlKCgpID0+IHNlcnZlci5zdG9wKCkpO1xyXG4gICAgICB9KTtcclxuICAgICAgY29tcGlsZXIuaG9va3MuZmFpbGVkLnRhcChcInZ1ZXByZXNzLWRldlwiLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgaWYgKGhhc0ZpbmlzaGVkKVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGhhc0ZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICBzcGlubmVyLmZhaWwoXCJDb21waWxhdGlvbiBmYWlsZWRcIik7XHJcbiAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICBdKTtcclxuICByZXR1cm4gY2xvc2U7XHJcbn07XHJcblxyXG4vLyBzcmMvd2VicGFja0J1bmRsZXIudHNcclxudmFyIHdlYnBhY2tCdW5kbGVyID0gKG9wdGlvbnMgPSB7fSkgPT4gKHtcclxuICBuYW1lOiBcIkB2dWVwcmVzcy9idW5kbGVyLXdlYnBhY2tcIixcclxuICAvLyBkZXY6IChhcHApID0+IGRldihvcHRpb25zLCBhcHApLFxyXG4gIGJ1aWxkOiAoYXBwKSA9PiBidWlsZChvcHRpb25zLCBhcHApXHJcbn0pO1xyXG5cclxuLy8gc3JjL2luZGV4LnRzXHJcbnZhciBzcmNfZGVmYXVsdCA9IHdlYnBhY2tCdW5kbGVyO1xyXG5leHBvcnQge1xyXG4gIHNyY19kZWZhdWx0IGFzIGRlZmF1bHQsXHJcbiAgd2VicGFja0J1bmRsZXIgYXMgc3RhbmRhbG9uZUJ1bmRsZXJcclxufTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUtBLElBQU0sT0FBTyxPQUFPLFlBQVksZUFBZSxRQUFRLE1BQ25ELFFBQVEsSUFBSSxtQkFBbUIsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUMzQztBQUNHLElBQU0sV0FBVyxPQUFPLElBQUksSUFBSSxNQUFNOzs7QUNQN0MsU0FBUyx3QkFBd0I7OztBQ0Q2USxTQUFTLGlCQUFpQjs7O0FDQXhCLFNBQVMsY0FBYztBQUVoVSxJQUFNLFlBQVksQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUNyQyxNQUFJLGFBQWEsUUFBUTtBQUN6QixNQUFJLFNBQVMsUUFBUTtBQUNyQixTQUFPLE9BQU87QUFBQSxJQUNaLEVBQUUsTUFBTSw0QkFBUSxNQUFNLElBQUk7QUFBQSxJQUMxQixFQUFFLE1BQU0sd0NBQVUsTUFBTSx5Q0FBVztBQUFBLElBQ25DLEVBQUUsTUFBTSw0QkFBUSxNQUFN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
