import React from 'react';

import Loader from '../components/Loader';
import Image from '../components/Image';

export default class LoaderView extends React.Component {
	render() {

		return (
      <div>

      <h3>Simple Loader</h3>
      <Loader overLap={true} state="active" text="loading">
        <Image src="/assets/images/wireframe/short-paragraph.png" />
      </Loader>
      
      <h3>Loader</h3>
      <Loader overLap={true}>
	      <Image src="/assets/images/wireframe/short-paragraph.png" />
	  </Loader>
      
      <h3>text Loader</h3>
      <Loader overLap={true} text="Loading">
	      <Image src="/assets/images/wireframe/short-paragraph.png" />
	  </Loader>
      
      <h3>text invered Loader</h3>
      <Loader overLap={true} text="Loadning" inverted={true} >
	      <Image src="/assets/images/wireframe/short-paragraph.png" />
	  </Loader>
      
      <h3>indeterminate Loader</h3>
      <Loader overLap={true} text="Preparing Files" state="indeterminate">
	      <Image src="/assets/images/wireframe/short-paragraph.png" />
	  </Loader>
      
      <h3>no child active Loader</h3>
      <Loader overLap={false} state="active">
	      <Image src="/assets/images/wireframe/short-paragraph.png" />
	  </Loader>
      
      <h3>no child disalbed Loader</h3>
      <Loader overLap={false} state="disabled">
	      <Image src="/assets/images/wireframe/short-paragraph.png" />
	  </Loader>
      
      <h3>inline Loader</h3>
      <Loader overLap={true} inline={true}>
	      <Image src="/assets/images/wireframe/short-paragraph.png" />
	  </Loader>
      
      <h3>nochild inline Loader</h3>
      <Loader overLap={false} state="active" inline={true}>
	      <Image src="/assets/images/wireframe/short-paragraph.png" />
	  </Loader>
      
      <h3>inline center Loader</h3>
      <Loader overLap={true} inlineCenter={true}>
	      <Image src="/assets/images/wireframe/short-paragraph.png" />
	  </Loader>
      
      <h3>nochild inline center Loader</h3>
      <Loader overLap={false} state="active" inlineCenter={true}>
	      <Image src="/assets/images/wireframe/short-paragraph.png" />
	  </Loader>
      
      <h3>size Loader</h3>
      <Loader overLap={true} size="mini" text="mini">
	      <Image src="/assets/images/wireframe/short-paragraph.png" />
	  </Loader>
      <Loader overLap={true} size="tiny" text="tiny">
	      <Image src="/assets/images/wireframe/short-paragraph.png" />
	  </Loader>
      <Loader overLap={true} size="small" text="small">
	      <Image src="/assets/images/wireframe/short-paragraph.png" />
	  </Loader>
      <Loader overLap={true} size="medium" text="medium">
	      <Image src="/assets/images/wireframe/short-paragraph.png" />
	  </Loader>
      <Loader overLap={true} size="large" text="large">
	      <Image src="/assets/images/wireframe/short-paragraph.png" />
	  </Loader>
      
      <h3>no child inverted Loader</h3>
      <Loader overLap={false} state="active" inverted={true}>
	      <Image src="/assets/images/wireframe/short-paragraph.png" />
	  </Loader>
      
      <h3>inverted Loader</h3>
      <Loader overLap={true} inverted={true}>
	      <Image src="/assets/images/wireframe/short-paragraph.png" />
	  </Loader>
      {/*
      <h3>Simple no child Loader</h3>
      <Loader overLap={true} state="active" text="loading" />

      <h3>no overLap Loader</h3>
      <Loader overLap={false} state="active" text="loading" />

      <h3>no overLap size Loader</h3>
      <Loader overLap={false} size="massive" state="active" text="loading" />

      <h3>no overLap inline Loader</h3>
      <Loader overLap={false} inline={true} state="active" text="loading" />

      <h3>no overLap centered inline Loader</h3>
      <Loader overLap={false} inlineCenter={true} state="active" text="loading" />

      <h3>test</h3>
        <div className="ui segment">
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <input type="text" />
          <div className="ui active dimmer">
            <div className="ui loader"></div>
          </div>
        </div>

        <h3>test nodimmer</h3>
        <div className="ui segment">
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <input type="text" />
          <div className="ui active">
            <div className="ui loader"></div>
          </div>
        </div>

        <h3>test1</h3>
        <div className="ui segment">
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <input type="text" />
          <div className="ui inverted loader"></div>
        </div>

          <h3>test1</h3>
          <div className="ui inverted segment">
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <input type="text" />
            <div className="ui active inverted loader"></div>
          </div>

          <h3>indeterminate test</h3>
          <div className="ui segment">
            <div className="ui active dimmer">
              <div className="ui indeterminate text loader">Preparing Files</div>
            </div>
            <p></p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <input type="text" />
          </div>

          <h3>indeterminate disabled test</h3>
          <div className="ui segment">
            <div className="ui active dimmer">
              <div className="ui indeterminate disabled text loader">Preparing Files</div>
            </div>
            <p></p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <input type="text" />
          </div>

          <h3>indeterminate disabled test</h3>
          <div className="ui segment">
            <div className="ui active dimmer">
              <div className="ui disabled indeterminate text loader">Preparing Files</div>
            </div>
            <p></p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <input type="text" />
          </div>

          <h3>no indeterminate test</h3>
          <div className="ui segment">
            <div className="ui active dimmer">
              <div className="ui text loader">Preparing Files</div>
            </div>
            <p></p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <input type="text" />
          </div>

          <h3>overlap inline test</h3>
          <div className="ui segment">
            <div className="ui line active dimmer">
              <div className="ui text loader">Preparing Files</div>
            </div>
            <p></p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <input type="text" />
          </div>

          <h3>overlap child inline test</h3>
          <div className="ui segment">
            <div className="ui active dimmer">
              <div className="ui inline text loader">Preparing Files</div>
            </div>
            <p></p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <input type="text" />
          </div>

          <h3>inline test</h3>
          <div className="ui segment">
            <div className="ui active centered inline text loader">Preparing Files</div>
            <p></p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <input type="text" />
          </div>

          <h3>no overlap tiny size test</h3>
          <div className="ui inverted segment">
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <input type="text" />
            <div className="ui active inverted tiny loader"></div>
          </div>

          <h3>no overlap massive size test</h3>
          <div className="ui inverted segment">
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <input type="text" />
            <div className="ui active inverted massive loader"></div>
          </div>
          */}
      </div>
		);
	}
}
