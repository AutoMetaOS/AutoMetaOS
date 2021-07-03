<script>
  export let google = [{ articles: [] }];
</script>

<details class="blurW rpm-5 w-100" style="padding:15px;" open>
  <summary class="w-100 f-wt7" style="font-size:1.25em;">Top News</summary>
  <p>
    {#each google as news}
      <a class="boxy m-5 p-10 flex" href={news.articles[0].url}>
        <div style="padding:20px 50x;">
          <div class="f-wt4" style="font-size:0.75em;">
            {news.articles[0].source}
          </div>
          <div class="f-wt5">
            {@html news.articles[0].title}
          </div>
          <div class="f-wt4" style="color:#aaa;font-size:0.75em;">
            {news.title}
          </div>
        </div>
        <img
          src={news.image}
          height="100px"
          width="100px"
          style="margin-left:100px;"
          alt=""
        />
      </a>
    {/each}
  </p>
</details>

<style type="text/scss">
  .boxy {
    justify-content: space-between;
    &:hover {
      background: #3338;
    }
    img {
      border-radius: 5px;
      object-fit: cover;
    }
  }
</style>
