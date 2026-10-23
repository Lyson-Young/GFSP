# GSFP 气固流动与感知团队

GSFP（Gas-Solid Flow Perception）中文网站的静态发布文件。
仓库：Lyson-Young/GFSP。网站入口以仓库 Settings > Pages 显示的实际发布地址为准。

## 首次发布（通过浏览器）

1. 使用仓库拥有者账号管理发布。
2. GitHub Free 使用 Pages 时仓库需要 Public；这意味着仓库文件可公开查看和复制，但他人不能直接修改原仓库。若需要私有源码，先核对 GitHub 支持该功能的付费计划。
3. 解压本包。在仓库 Add file > Upload files 上传解压后的文件与目录，保持层级，确保 index.html 在仓库根目录。不能只上传 ZIP。包含 .nojekyll；若系统隐藏该文件，可在仓库 Add file > Create new file 手动建立名为 .nojekyll 的文件。
4. 在默认分支（通常为 main）提交文件。
5. 仓库 Settings > Pages > Build and deployment：Source 选择 Deploy from a branch，Branch 选择包含网站的分支（通常为 main），Folder 选择 / (root)，Save。
6. 等待发布完成，使用 Settings > Pages 实际显示的地址。
7. 先关闭 VPN/代理，用手机流量与校园网验证首页、我们及我们所关注的、三列成员布局、已毕业学生标签、全部快讯详情和照片。GitHub Pages 不能保证各地大陆网络可达，实测合格后再确定是否购买和绑定独立域名。

## 维护

修改后将新静态输出提交到发布分支，Pages 会重新发布。维护源码与本站发布目录分开保管；本仓库用于托管静态输出。不要上传账号凭据、未公开资料或本地原始研究文件。

## 官方说明

- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
