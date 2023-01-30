import React from 'react';

import { CustomFormProps } from '../DialogRenderer';

import './ZahlenratenCustomForm.css';

export class ZahlenratenCustomForm extends React.Component<CustomFormProps> {

  private userInput: React.RefObject<HTMLInputElement>;

  constructor(props: CustomFormProps) {
    super(props);

    this.userInput = React.createRef();
  }

  public render(): JSX.Element {
    return (
        <div className='test-class'>
          <label>enter your number: </label>
          <input type='number' ref={this.userInput} />
          <button onClick={this._handleFormSubmit.bind(this)}>
            Confirm
          </button>
        </div>
    );
  }

  private _handleFormSubmit(): void {
    this.props.finishUserTask({ input: this.userInput.current?.value });
  }
}
