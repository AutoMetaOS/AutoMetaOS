<script>
  import { iFrameLink, iFrameShow, hide } from "../store";
  import { SvgIcon } from "$lib/components";
</script>

<article id="frame" class="w-100 flex" style="display:{$iFrameShow};">
  <div class="flex" style="position:absolute;top:7vh;left:7vw;">
    <div class="a" on:click={hide} style="background:#f8a;">
      <SvgIcon>
        <path d="M2 30 L30 2 M30 30 L2 2" />
      </SvgIcon>
    </div>
    <a href={$iFrameLink} target="_blank" style="background:#a8f;">
      <SvgIcon>
        <path d="M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18" />
      </SvgIcon>
    </a>
  </div>
  <iframe src={$iFrameLink} title="News Item" frameborder="0" />
</article>

<style>
  article {
    padding-top: 5vh;
    position: relative;
    z-index: 2;
    justify-content: center;
    align-items: center;
  }
  iframe {
    border-radius: 5px;
    width: 90%;
    height: 90vh;
    background: #fff;
  }
  a,
  .a {
    border-radius: 10px;
    padding: 5px;
    margin: 5px;
  }
</style>
