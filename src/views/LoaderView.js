import React from 'react';

import Loader from '../components/Loader';

export default class LoaderView extends React.Component {
	render() {

		return (
      <div>

      <h3>Simple Loader</h3>
      <Loader overLap={true} state="active" text="loading">
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <input type="text" />
      </Loader>

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
      </div>
		);
	}
}
