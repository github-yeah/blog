(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{404:function(s,t,n){"use strict";n.r(t);var a=n(45),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"发布到github-pages"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#发布到github-pages"}},[s._v("#")]),s._v(" 发布到Github Pages")]),s._v(" "),n("ol",[n("li",[s._v("在"),n("code",[s._v("docs/.vuepress/config.js")]),s._v("中设置正确的"),n("code",[s._v("base")]),s._v("属性\n"),n("ul",[n("li",[s._v("如果发布到"),n("code",[s._v("https://<USERNAME>.github.io/")]),s._v("不需要此步骤，因为"),n("code",[s._v("base")]),s._v("默认就是"),n("code",[s._v("'/'")])]),s._v(" "),n("li",[s._v("如果发布到"),n("code",[s._v("https://<USERNAME>.github.io/<REPO>/")]),s._v("需要设置"),n("code",[s._v("base")]),s._v("为"),n("code",[s._v("'/<REPO>/'")])])])]),s._v(" "),n("li",[s._v("创建自动部署脚本，  根据注释内容自动替换内容")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env sh")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保脚本抛出遇到的错误")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成静态文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run docs:build\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入生成的文件夹")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docs/.vuepress/dist\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果是发布到自定义域名")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo 'www.example.com' > CNAME")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果发布到 https://<USERNAME>.github.io")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f https://github.com/github-yeah/blog-leaf.git master")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果发布到 https://<USERNAME>.github.io/<REPO>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f https://github.com/github-yeah/blog-leaf.git master:gh-pages\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("h2",{attrs:{id:"push代码时触发自动部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#push代码时触发自动部署"}},[s._v("#")]),s._v(" Push代码时触发自动部署")]),s._v(" "),n("h3",{attrs:{id:"使用github-action"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用github-action"}},[s._v("#")]),s._v(" 使用Github Action")]),s._v(" "),n("p",[s._v("GitHub Actions 的配置文件叫做 workflow 文件，存放在代码仓库的."),n("code",[s._v("github/workflows")]),s._v("目录。")]),s._v(" "),n("p",[s._v("workflow 文件采用 YAML 格式，文件名可以任意取，但是后缀名统一为.yml，比如test.yml")]),s._v(" "),n("p",[s._v("workflow 内可以有多个"),n("code",[s._v(".yml")]),s._v("文件，Github会自动检测这些"),n("code",[s._v(".yml")]),s._v("文件并运行")]),s._v(" "),n("ol",[n("li",[s._v("创建Github秘钥： 用户 -> settings -> Developer settings -> Personal access tokens -> Generate new token")]),s._v(" "),n("li",[s._v("仓库设置token：仓库 -> Settings -> Screts -> Repository secrets | New repository secret")]),s._v(" "),n("li",[s._v("创建Github Action: 仓库 -> 顶部菜单Actions -> Get started with GitHub Actions -> Get started with GitHub Actions")])]),s._v(" "),n("p",[s._v("本Blog的workflow使用的"),n("a",{attrs:{href:"https://github.com/marketplace/actions/deploy-to-github-pages",target:"_blank",rel:"noopener noreferrer"}},[s._v("第三方action"),n("OutboundLink")],1),s._v("：")]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This is a basic workflow to help you get started with Actions")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Build and Deploy\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Controls when the action will run. ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Triggers the workflow on push or pull request events but only for the master branch")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branches")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" master "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Allows you to run this workflow manually from the Actions tab")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("workflow_dispatch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# A workflow run is made up of one or more jobs that can run sequentially or in parallel")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# This workflow contains a single job called "build"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build-and-deploy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The type of runner that the job will run on")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Steps represent a sequence of tasks that will be executed as part of the job")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" CheckOut \n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@master\n      \n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Install and Build\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n          npm install\n          npm run docs:build")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里使用了别人写好的action")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deploy\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" JamesIves/github"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("deploy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("action@4.1.1\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The branch the action should deploy to.")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("folder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docs/.vuepress/dist "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The folder the action should deploy.")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# GITHUBACTION_TOKEN就是上文创建的Github秘钥的名字")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ACCESS_TOKEN")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.GITHUBACTION_TOKEN "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("BRANCH")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("FOLDER")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docs/.vuepress/dist\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# BUILD_SCRIPT: npm install && npm run docs:build")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br")])]),n("p",[s._v("每次仓库有文件提交，Github Action就会自动运行这个workflow（更新->初始化项目->构建项目->部署到pages）")])])}),[],!1,null,null,null);t.default=e.exports}}]);