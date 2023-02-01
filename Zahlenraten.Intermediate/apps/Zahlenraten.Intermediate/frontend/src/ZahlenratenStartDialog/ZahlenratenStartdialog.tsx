import React from 'react';

import { StartDialogProps} from '../DialogRenderer';

export class ZahlenratenStartDialog extends React.Component<StartDialogProps> {

  private userName: React.RefObject<HTMLInputElement>;
  private lowestNumber: React.RefObject<HTMLInputElement>;
  private highestNumber: React.RefObject<HTMLInputElement>;


  constructor(props: StartDialogProps) {
    super(props);

    this.userName = React.createRef();
    this.lowestNumber = React.createRef();
    this.highestNumber = React.createRef();
  }

  public render(): JSX.Element {
    return (
        <div>
          <p>Willkommen zu Zahlenraten! Errate die richtige Zahl</p>
          <label >Wie lautet dein Name? </label>
          <br />
          <input type="text" ref={this.userName}/>
          <br />
          <br />
          <label > Gib den Zahlenbereich an:</label>
          <br />
          <br />
          <label >lowest Number</label>
          <br />
          <input type="number" ref={this.lowestNumber} />
          <br />
          <label >highest Number</label>
          <br />
          <input type="number" ref={this.highestNumber}/>
          <br />
          <br />
          <br />
          <button onClick={() => this._handleOnClick()}>Zahlenraten starten</button>
        </div>
    );
  }

  private _handleOnClick(): void {
    this.props.startProcess("Zahlenraten", {userName: this.userName.current?.value, lowestNumber: this.lowestNumber.current?.value, highestNumber: this.highestNumber.current?.value});
  }
}
