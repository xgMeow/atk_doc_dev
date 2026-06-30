
## 生成文件规则

本目录下的以下 4 个文件由 `npm run gen-lang` 从 `atkCommand.mixcode.md` 自动生成：

- `atkCommand-cpp.md`
- `atkCommand-java.md`
- `atkCommand-matlab.md`
- `atkCommand-python.md`

**不要手动修改这 4 个文件。** 需要修改内容时，改 `atkCommand.mixcode.md` 模板，然后运行 `npm run gen-lang` 重新生成。
