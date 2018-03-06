import { Component } from '@stencil/core';


@Component({
  tag: 'community-page',
  styleUrl: 'community-page.scss'
})
export class CommunityPage {

  constructor() {
    document.title = 'Community';
  }

  render() {
    return (
      <div>
        <h1>Community</h1>

        <section>
          <h2>The Stencil Community</h2>

          <h4>Slack</h4>
          <p>
            Building cool things with Stencil? Need help using Stencil? Or maybe just looking for an awesome community to discuss web components, PWAs and the web?
            <a href='https://stencil-worldwide.herokuapp.com/'>Consider joining our slack!</a>.
          </p>

          <h4>Twitter</h4>
          <p>
            To get all the latest news on Stencil you can <a href='https://twitter.com/stenciljs'>follow us on Twitter</a>
          </p>
        </section>

        <section>
          <h2>Core Contributors</h2>
          <p>Thanks to everyone in the community for helping make Stencil awesome!</p>

          <div id='contribs'>
            <div class='contributor'>
              <img src='https://pbs.twimg.com/profile_images/909075942320025600/hfYqicUk_400x400.jpg'></img>
              <h4>Adam Bradley</h4>
            </div>

            <div class='contributor'>
              <img src='https://pbs.twimg.com/profile_images/897859316513783808/exBCIyz0_400x400.jpg'></img>
              <h4>Josh Thomas</h4>
            </div>

            <div class='contributor'>
              <img src='https://pbs.twimg.com/profile_images/750836288635359237/1GqenPM5_400x400.jpg'></img>
              <h4>Justin Willis</h4>
            </div>
          </div>
        </section>
      </div>
    );
  }
}