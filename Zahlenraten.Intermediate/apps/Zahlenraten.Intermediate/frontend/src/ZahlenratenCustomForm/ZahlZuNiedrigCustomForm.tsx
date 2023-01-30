import React from 'react';

import { CustomFormProps } from '../DialogRenderer';

import './ZahlenratenCustomForm.css';

export class ZahlZuNiedrigCustomForm extends React.Component<CustomFormProps> {

  constructor(props: CustomFormProps) {
    super(props);

  }

  public render(): JSX.Element {
    return (
        <div className='test-class'>
          <label>Deine Zahl war zu Niedrig!  </label>
          <br />
          <button onClick={this._handleFormSubmit.bind(this)}>
            OK
          </button>
        </div>
    );
  }

  private _handleFormSubmit(): void {
    this.props.finishUserTask({ input: null });
  }
}