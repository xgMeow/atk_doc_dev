import assert from 'node:assert/strict';
import { extractCommandEntries, buildCommandGroups } from './extractCommandInfo.mjs';

const singleCommand = `# New

作用：新建场景或新建对象

用法：
\`\`\`
New <ApplicationPath> <ClassPath> <NewObjectName> {NewOptions}
\`\`\`
`;

assert.deepEqual(extractCommandEntries(singleCommand, '/docs/New.html'), [
  {
    command: 'New',
    effect: '新建场景或新建对象',
    usage: 'New <ApplicationPath> <ClassPath> <NewObjectName> {NewOptions}',
    path: '/docs/New.html',
  },
]);

const multiCommand = `# Lambert段

## CentralBodyCode

作用：设置摄动力中心天体

用法：
\`\`\`
Astrogator <Satellite Object Path> SetValue <Attribute Path>.{Attribute} <Value>
\`\`\`

## Propagator

作用：设置轨道预报器参数

用法：

\`\`\`
Astrogator <Satellite Object Path> SetValue <Attribute Path>.ForceModel.{Parameters} {Value}
\`\`\`
`;

assert.deepEqual(extractCommandEntries(multiCommand, '/docs/Lambert.html'), [
  {
    command: 'CentralBodyCode',
    effect: '设置摄动力中心天体',
    usage: 'Astrogator <Satellite Object Path> SetValue <Attribute Path>.{Attribute} <Value>',
    path: '/docs/Lambert.html#centralbodycode',
  },
  {
    command: 'Propagator',
    effect: '设置轨道预报器参数',
    usage: 'Astrogator <Satellite Object Path> SetValue <Attribute Path>.ForceModel.{Parameters} {Value}',
    path: '/docs/Lambert.html#propagator',
  },
]);

const modules = {
  '../../../二次开发教程/2-二次开发CONNECT模式/2-Connect命令库/README.md': '# Root',
  '../../../二次开发教程/2-二次开发CONNECT模式/2-Connect命令库/场景/README.md': '# 场景',
  '../../../二次开发教程/2-二次开发CONNECT模式/2-Connect命令库/场景/New.md': singleCommand,
  '../../../二次开发教程/2-二次开发CONNECT模式/2-Connect命令库/轨道/Lambert.md': multiCommand,
};

assert.deepEqual(
  buildCommandGroups(modules, '/二次开发教程/2-二次开发CONNECT模式/2-Connect命令库/场景/'),
  [
    {
      category: '场景',
      entries: [
        {
          command: 'New',
          effect: '新建场景或新建对象',
          usage: 'New <ApplicationPath> <ClassPath> <NewObjectName> {NewOptions}',
          path: encodeURI('/二次开发教程/2-二次开发CONNECT模式/2-Connect命令库/场景/New.html'),
          category: '场景',
        },
      ],
    },
  ],
);

assert.equal(buildCommandGroups(modules, '/二次开发教程/2-二次开发CONNECT模式/2-Connect命令库/').length, 2);

const directOnlyModules = {
  '../../../二次开发教程/2-二次开发CONNECT模式/2-Connect命令库/车辆/SetPosition.md': singleCommand,
};

assert.deepEqual(
  buildCommandGroups(directOnlyModules, encodeURI('/二次开发教程/2-二次开发CONNECT模式/2-Connect命令库/车辆/'))
    .map(group => group.category),
  ['车辆'],
);

const mixedModules = {
  '../../../二次开发教程/2-二次开发CONNECT模式/2-Connect命令库/卫星/Unload.md': singleCommand,
  '../../../二次开发教程/2-二次开发CONNECT模式/2-Connect命令库/卫星/轨道/Lambert.md': multiCommand,
};

assert.deepEqual(
  new Set(buildCommandGroups(mixedModules, encodeURI('/二次开发教程/2-二次开发CONNECT模式/2-Connect命令库/卫星/'))
    .map(group => group.category)),
  new Set(['卫星', '轨道']),
);

console.log('extractCommandInfo tests passed');
