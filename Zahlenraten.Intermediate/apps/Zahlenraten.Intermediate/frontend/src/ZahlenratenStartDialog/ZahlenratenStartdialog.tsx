import React from 'react';

import { StartDialogProps} from '../DialogRenderer';

export class ZahlenratenStartDialog extends React.Component<StartDialogProps> {

  private userName: React.RefObject<HTMLInputElement>;

  constructor(props: StartDialogProps) {
    super(props);

    this.userName = React.createRef();
  }

  public render(): JSX.Element {
    return (
        <div>
          <p>Willkommen zu Zahlenraten! Errate die richtige Zahl</p>
          <label >Wie lautet dein Name? </label>
          <input type="text" ref={this.userName}/>
          <br />
          <button onClick={() => this._handleOnClick()}>Zahlenraten starten</button>
        </div>
    );
  }

  private _handleOnClick(): void {
    this.props.startProcess("Zahlenraten", {userName: this.userName.current?.value });
  }
}
