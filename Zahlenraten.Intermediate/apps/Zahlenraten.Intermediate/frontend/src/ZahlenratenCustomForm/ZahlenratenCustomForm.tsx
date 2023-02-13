import React from 'react';

import { CustomFormProps } from '../DialogRenderer';

import './ZahlenratenCustomForm.css';

export class ZahlenratenCustomForm extends React.Component<CustomFormProps> {
  private userInput: React.RefObject<HTMLInputElement>;
  private payload;

  constructor(props: CustomFormProps) {
    super(props);
    this.userInput = React.createRef();
    this.payload = this.props.userTask.tokens[0].payload;
  }  

  public render(): JSX.Element {
    return (
      <div className='test-class'>

        <h1>Du hast noch {this.props.userTask.tokens[0].payload.leftTries} Versuche</h1>
        <br />
        <h2>Deine Zahl liegt zwischen {this.payload.lowestNumber} und {this.payload.highestNumber} </h2>
        <label>Gib eine Zahl ein: </label>
        <input type='number' ref={this.userInput} />
        <button onClick={this._handleFormSubmit.bind(this)}>
          Confirm
        </button>
      </div>
    );
  }

  private _handleFormSubmit(): void {
    this.props.finishUserTask({ input: this.userInput.current?.value, tries: this.payload.tries += 1, leftTries: this.payload.leftTries -= 1 });
    
  }
}
