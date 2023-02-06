import React from 'react';

import { CustomFormProps } from '../DialogRenderer';

import './ZahlenratenCustomForm.css';

export class ZahlZuHochCustomForm extends React.Component<CustomFormProps> {
  private guess;
  private randomNumber;
  private text;
  private range;
  private tries;
  private distance;
  private payload;
  

  constructor(props: CustomFormProps) {
    super(props);
    this.range = 10;
    this.payload = this.props.userTask.tokens[0].payload;
    this.guess = this.payload.guess;
    this.randomNumber = this.payload.randomNumber;
    this.distance = Math.abs(this.randomNumber - this.guess);
    this.tries = this.payload.tries;
    this.text = this.showText();
    
  }

  showText(): string {
    if (this.tries === 1) {
      return this.distance < this.range ? 'Warm!' : 'Kalt!';
    } else {
      const oldDistance = Math.abs(this.randomNumber - this.payload.lastGuess);
      return this.distance < oldDistance ? 'Wärmer' : 'Kälter';
    }
  }

  public render(): JSX.Element {
    return (
      <div className='test-class'>
        <h1>{this.text}</h1>
        <br />
        <h2>Deine Zahl war zu Hoch!  </h2>
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
