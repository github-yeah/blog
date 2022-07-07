(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{311:function(s,t,n){"use strict";n.r(t);var a=n(14),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"发布到github-pages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布到github-pages"}},[s._v("#")]),s._v(" 发布到Github Pages")]),s._v(" "),t("ol",[t("li",[s._v("在"),t("code",[s._v("docs/.vuepress/config.js")]),s._v("中设置正确的"),t("code",[s._v("base")]),s._v("属性\n"),t("ul",[t("li",[s._v("如果发布到"),t("code",[s._v("https://<USERNAME>.github.io/")]),s._v("不需要此步骤，因为"),t("code",[s._v("base")]),s._v("默认就是"),t("code",[s._v("'/'")])]),s._v(" "),t("li",[s._v("如果发布到"),t("code",[s._v("https://<USERNAME>.github.io/<REPO>/")]),s._v("需要设置"),t("code",[s._v("base")]),s._v("为"),t("code",[s._v("'/<REPO>/'")])])])]),s._v(" "),t("li",[s._v("创建自动部署脚本，  根据注释内容自动替换内容")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env sh")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保脚本抛出遇到的错误")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成静态文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run docs:build\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入生成的文件夹")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docs/.vuepress/dist\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果是发布到自定义域名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo 'www.example.com' > CNAME")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果发布到 https://<USERNAME>.github.io")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f https://github.com/github-yeah/blog-leaf.git master")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果发布到 https://<USERNAME>.github.io/<REPO>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f https://github.com/github-yeah/blog-leaf.git master:gh-pages\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("h2",{attrs:{id:"push代码时触发自动部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#push代码时触发自动部署"}},[s._v("#")]),s._v(" Push代码时触发自动部署")]),s._v(" "),t("h3",{attrs:{id:"使用github-action"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用github-action"}},[s._v("#")]),s._v(" 使用Github Action")]),s._v(" "),t("p",[s._v("GitHub Actions 的配置文件叫做 workflow 文件，存放在代码仓库的."),t("code",[s._v("github/workflows")]),s._v("目录。")]),s._v(" "),t("p",[s._v("workflow 文件采用 YAML 格式，文件名可以任意取，但是后缀名统一为.yml，比如test.yml")]),s._v(" "),t("p",[s._v("workflow 内可以有多个"),t("code",[s._v(".yml")]),s._v("文件，Github会自动检测这些"),t("code",[s._v(".yml")]),s._v("文件并运行")]),s._v(" "),t("ol",[t("li",[s._v("创建Github秘钥： 用户 -> settings -> Developer settings -> Personal access tokens -> Generate new token （记得勾选"),t("code",[s._v("repo")]),s._v("选项）")]),s._v(" "),t("li",[s._v("仓库设置token：仓库 -> Settings -> Screts -> Repository secrets | New repository secret")]),s._v(" "),t("li",[s._v("创建Github Action: 仓库 -> 顶部菜单Actions -> Get started with GitHub Actions -> Get started with GitHub Actions")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("如果发布失败请检查"),t("code",[s._v("Personal access tokens")]),s._v("是否过期")]),s._v(" "),t("p",[t("code",[s._v("用户 -> settings -> Developer settings -> Personal access tokens")])]),s._v(" "),t("p",[s._v("如果过期请点击"),t("code",[s._v("Generate new token")]),s._v("新建一个，同时在"),t("code",[s._v("Repository secrets")]),s._v("内更新")])]),s._v(" "),t("p",[s._v("本Blog的workflow使用的"),t("a",{attrs:{href:"https://github.com/marketplace/actions/deploy-to-github-pages",target:"_blank",rel:"noopener noreferrer"}},[s._v("第三方action"),t("OutboundLink")],1),s._v("：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This is a basic workflow to help you get started with Actions")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Blog "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" Build & Deploy\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Controls when the action will run.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Triggers the workflow on push or pull request events but only for the master branch")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("push")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branches")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Allows you to run this workflow manually from the Actions tab")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("workflow_dispatch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# A workflow run is made up of one or more jobs that can run sequentially or in parallel")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# This workflow contains a single job called "build"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("blog-build-and-deploy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The type of runner that the job will run on")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Steps represent a sequence of tasks that will be executed as part of the job")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" CheckOut\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@master\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Install and Build\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n          npm install\n          npm run docs:build")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里使用了别人写好的action")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deploy\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" JamesIves/github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("deploy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("action@v4\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 仓库 -> Settings -> Secrets -> Repository secrets")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发布失败有可能时Repository secrets过期")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查是否过期：用户 -> settings -> Developer settings -> Personal access tokens")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("token")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.ACTION_TOKEN "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将要发布的目标仓库（如果目标仓库和本仓库是同一个，可以忽略此项）")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("repository-name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("yeah/blog\n          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将要发布的目标仓库分支")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages\n          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将本仓库中此目录下的文件发布到目标仓库")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("folder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docs/.vuepress/dist\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br")])]),t("p",[s._v("每次仓库有文件提交，Github Action就会自动运行这个workflow（更新->初始化项目->构建项目->部署到pages）")])])}),[],!1,null,null,null);t.default=e.exports}}]);