import React from 'react';

import { CustomFormProps } from '../DialogRenderer';

import './ZahlenratenCustomForm.css';

export class ZahlZuNiedrigCustomForm extends React.Component<CustomFormProps> {

  private guess;
  private randomNumber;
  private text;
  private range;
  private tries;
  private distance;
  

  constructor(props: CustomFormProps) {
    super(props);
    this.range = 10
    this.guess = this.props.userTask.tokens[0].payload.guess;
    this.randomNumber = this.props.userTask.tokens[0].payload.randomNumber;
    this.distance = Math.abs(this.randomNumber - this.guess);
    this.tries = this.props.userTask.tokens[0].payload.tries;
    this.text = this.showText();
  }

  showText() {
    if (this.tries === 1) {
      return this.distance <  this.range ? "Warm!" : "Kalt!";
    }
    else {
      const oldDistance = Math.abs(this.randomNumber -  this.props.userTask.tokens[0].payload.lastGuess);
      return this.distance < oldDistance ? "Wärmer" : "Kälter";
    }
  }

  public render(): JSX.Element {
    return (
        <div className='test-class'>
          <h1>{this.text}</h1>
          <br />
          <h2>Deine Zahl war zu Niedrig!  </h2>
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

