<div align="center">
<img src="https://api.nukes.in/cms/icon?name=amos:amos.svg" alt="amos" width="300px" height="300px"/>
<h1>AMOS v8</h1>
<div>Run on the BASE Stack <br>

[**B**un](http://bun.sh/) &bullet;
[**A**PIs](https://www.ibm.com/cloud/learn/rest-apis) &bullet;
[**S**velte](https://svelte.dev) &bullet;
[**E**dge](https://workers.cloudflare.com)

</div>
</div>

<style>
table img{
    width: 50px;
    height: 50px;
}
</style>


<script>
    const apicon= 'https://api.nukes.in/cms/icon?name=';
    window.$docsify.vueMounts['#Structure']= {
    data () {
          return {
            structure: [
          {
            icon: apicon+'amos:cmos.svg',
            title: "AMOS Web",
            description: "Everything Front & Center",
            base: "Svelte",
            repo: "AutoMetaOS/Web"
          },
          {
            icon: apicon+'amos:ui.svg',
            title: "AMOS UI",
            description: "@AMOS/Web UI css & icons",
            base: "Vanilla",
            repo: "AutoMetaOS/UI"
          },
          {
            icon: apicon+'amos:x10.svg',
            title: "Swift AppExtension",
            description: "Primary Script & Style Injection",
            base: "Swift",
            repo: "AutoMetaOS/X10"
          },
          {
            icon: apicon+'amos:x10sn.svg',
            title: "JavaScript WebExtension",
            description: "Custom Bionic Speed Reader",
            base: "WebExtension",
            repo: "AutoMetaOS/x10s"
          },
          {
            icon: apicon+'amos:ursus.svg',
            title: "Ursus Maritimus",
            description: "Cloudflare Workers KV & API",
            base: "Edge (CF Wrangler)",
            repo: "AutoMetaOS/Ursus"
          }
        ]
        }
    }
}
</script>


# Structure
<table id="Structure">
  <thead>
    <tr>
      <th>Icon</th>
      <th>App</th>
      <th>Base</th>
      <th>Repo</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="repo in structure">
      <td><img :src="repo.icon" alt=""></td>
      <td><strong>{{repo.title}}</strong><br>{{repo.description}}</td>
      <td>{{repo.base}}</td>
      <td><a href="https://github.com/{{repo.repo}}">@{{repo.repo}}</a></td>
    </tr>
  </tbody>
</table>

<!--
| Icon         | App                   | Base |
| ------------- | ----------------------- |--|
| <img src="{{apicon}}amos:cmos.svg" alt=""/>        | **AMOS Web**<br>Everything Front & Center | Svelte|
| <img src="{{apicon}}amos:ui.svg" alt=""/>        | **AMOS UI**<br>@AMOS/Web UI `css` & `icons` | Vanilla |
| <img src="{{apicon}}amos:x10.svg" alt=""/>        | **Swift AppExtension**<br>Primary Script & Style Injection | Swift |
| <img src="{{apicon}}amos:x10sn.svg" alt=""/>         | **JavaScript WebExtension**<br>Custom Bionic Speed Reader |  WebExtension|
| <img src="{{apicon}}amos:ursus.svg" alt=""/>         | **Ursus Maritimus**<br>Cloudflare Workers KV & API |  Edge (CF Wrangler)|

# Others

| Icon         | App                   | State|
| ------------- | ----------------------- |-----------------|
| <img src="{{apicon}}amos:orcinus.svg" alt=""/>         | **Orcinus**<br>General Habit Tracker |  Under Constr |
| <img src="{{apicon}}amos:helios.svg" alt=""/>         | **Helios**<br>Complementary iOS App |  ON HOLD <br> Till Field Develops |
| <img src="https://raw.githubusercontent.com/AutoMetaOS/Toolkit/main/static/AMKit.svg" alt=""/>         | **AMOSKit**<br>General WebDev  Toolkit | Under Constr |
| <img src="https://raw.githubusercontent.com/AutoMetaOS/vecon/main/shared/icon.svg" alt=""/>         | **VECOn**<br>VErsion CONtrol Assist | [Package](https://www.npmjs.com/package/vecon) | -->


# Todos
- **UN APIs**
- - [WorkBank Knowledgebase](https://datahelpdesk.worldbank.org/knowledgebase/articles/)
- - [WorkBank API Information](https://datahelpdesk.worldbank.org/knowledgebase/topics/125589-developer-information)
- **AssemblyScript**
- - [Google Chrome Developers Youtube](https://www.youtube.com/watch?v=u0Jgz6QVJqg)
- - [AssemblyScript Docs Homepage](https://www.assemblyscript.org/introduction.html)
- [Free-Apis.github.io](https://free-apis.github.io/#/categories)
- [StegCloak](https://github.com/KuroLabs/stegcloak)
- **EXPLORE**
- - Web Excel - @mengshukeji/Luckysheet
- - Browser Storage - @marcuswestin/store.js
- - https://github.com/sorrycc/awesome-javascript#boilerplates