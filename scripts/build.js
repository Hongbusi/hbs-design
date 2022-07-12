const { resolve } = require('path')
const fse = require('fs-extra')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

// 入口文件
const entryFile = resolve(__dirname, './entry.ts')
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
}

// 创建 package.json 文件
const createPackageJson = () => {
  const fileStr = `{
  "name": "hbs-design",
  "version": "1.0.0",
  "description": "A component library for Vue 3.",
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

  fse.outputFile(resolve(outputDir, 'package.json'),
    fileStr,
    'utf-8'
  )
}

const buildLib = async () => {
  await buildAll()
  createPackageJson()
}

buildLib()
