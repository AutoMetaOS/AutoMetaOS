```js
import {
    Dropdown,
    Button,
    Accordion,
    CheckBox,
    ClickableTile,
} from "$lib/kimono";


//  <Accordion title="Natural Language Processing" disabled>
<Accordion open>
    <div slot="title">
        <h5>Natural Language Understanding</h5>
        <div>AI / Machine Learning</div>
    </div>
    <p>
        Analyze text to extract meta-data from content such as concepts,
        entities, emotion, relations, sentiment and more.
    </p>
</Accordion>


// <ClickableTile light href="https://www.carbondesignsystem.com/">
<ClickableTile disabled href="https://www.carbondesignsystem.com/">
  Carbon Design System
</ClickableTile>


<Button kind="secondary" forceClass="†c">ƒ</Button>
<Button kind="ghost" disabled>ƒ</Button>
<Button
    kind="danger-ghost"
    icon="<circle cx='14' cy='14' r='12' /><path d='M23 23 L30 30'  />"
    iconView="0 0 32 32">
    Danger tertiary button
</Button>

<Dropdown light type="inline" href="/">Go there</Dropdown>
<Dropdown href="/">Go there</Dropdown>




```