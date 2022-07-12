const { resolve } = require('path')
const fs = require('fs')
const fse = require('fs-extra')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

// 入口文件
const entryFile = resolve(__dirname, './entry.ts')
// 组件目录
const componentsDir = resolve(__dirname, '../src/components')
// 输出目录
const outputDir = resolve(__dirname, '../build')

const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [
    vue(),
    vueJsx()
  ]
})

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

// 创建 package.json 文件
const createPackageJson = (name) => {
  const fileStr = `{
  "name": "${name || 'hbs-design'}",
  "version": "1.0.1",
  "description": "A component library for Vue 3.",
  "main": "${name ? 'index.umd.js' : 'hbs-design.umd.js'}",
  "module": "${name ? 'index.es.js' : 'hbs-design.es.js'}",
  "author": "Hongbusi",
  "license": "MIT",
  "homepage": "https://github.com/Hongbusi/hbs-design#readme",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Hongbusi/hbs-design.git"
  },
  "bugs": {
    "url": "https://github.com/Hongbusi/hbs-design/issues"
  },
  "keywords": [
    "hbs-design",
    "component library",
    "ui framework",
    "ui",
    "vue",
    "vue3"
  ]
}`

  const targetDir = name ? `${name}/package.json` : 'package.json'
  fse.outputFile(resolve(outputDir, targetDir), fileStr, 'utf-8')
}

// 单组件按需构建
const buildSingle = async (name) => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: resolve(componentsDir, name),
          name: 'index',
          fileName: 'index',
          formats: ['es', 'umd']
        },
        outDir: resolve(outputDir, name)
      }
    })
  )
  createPackageJson(name)
}

// 全量构建
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: entryFile,
          name: 'hbs-design',
          fileName: 'hbs-design',
          formats: ['es', 'umd']
        },
        outDir: outputDir
      }
    })
  )
  createPackageJson()
}

const buildLib = async () => {
  await buildAll()
  fs.readdirSync(componentsDir).filter((name) => {
    // 过滤组件目录：只要目录不要文件，且目录中包含 index.ts
    const componentDir = resolve(componentsDir, name)
    const isDir = fs.lstatSync(componentDir).isDirectory()
    return isDir && fs.readdirSync(componentDir).includes('index.ts')
  }).forEach(async (name) => {
    await buildSingle(name)
  })
}

buildLib()
