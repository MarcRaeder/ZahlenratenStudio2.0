import React from 'react';

import { StartDialogProps} from '../DialogRenderer';

export class ZahlenratenStartDialog extends React.Component<StartDialogProps> {

  public render(): JSX.Element {
    return (
        <div>
          <p>Willkommen zu Zahlenraten! Errate die richtige Zahl</p>
          <button onClick={() => this._handleOnClick()}>Zahlenraten starten</button>
        </div>
    );
  }

  private _handleOnClick(): void {
    this.props.startProcess("Zahlenraten");
  }
}
