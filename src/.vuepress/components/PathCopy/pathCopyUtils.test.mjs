import assert from 'node:assert/strict'
import { normalizePath, joinPath, resolveViewerTarget, getRootPathHint, resolvePathEntry } from './pathCopyUtils.mjs'

assert.equal(normalizePath('D:/ProgramTool/ATK/'), 'D:\\ProgramTool\\ATK')
assert.equal(joinPath('D:/ProgramTool/ATK/', 'Help/Examples/J2000Coord.txt'), 'D:\\ProgramTool\\ATK\\Help\\Examples\\J2000Coord.txt')
assert.equal(joinPath('D:/ProgramTool/ATK/', 'Help\\\\Examples\\\\J2000Coord.txt'), 'D:\\ProgramTool\\ATK\\Help\\Examples\\J2000Coord.txt')
assert.equal(joinPath('', 'Help/Examples/J2000Coord.txt'), 'Help\\Examples\\J2000Coord.txt')
assert.equal(resolveViewerTarget(), '#PathViewer')
assert.equal(resolveViewerTarget('file-list'), '#file-list')
assert.equal(getRootPathHint(''), '当前未配置软件安装路径，展示的是相对路径，配置后可复制完整绝对路径')
assert.equal(getRootPathHint('D:/ProgramTool/ATK'), '')
assert.deepEqual(resolvePathEntry({ path: 'Help\\Examples\\05-批量坐标转换案例\\J2000Coord.txt', name: 'J2000Coord.txt' }), {
  path: 'Help\\Examples\\05-批量坐标转换案例\\J2000Coord.txt',
  label: 'J2000Coord.txt',
})
assert.deepEqual(resolvePathEntry({ path: 'Help\\Examples\\05-批量坐标转换案例\\ECF.txt', label: 'ECF.txt' }), {
  path: 'Help\\Examples\\05-批量坐标转换案例\\ECF.txt',
  label: 'ECF.txt',
})

console.log('pathCopyUtils tests passed')
