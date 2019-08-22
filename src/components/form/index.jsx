import React from 'react';
import Input from '../input';
import Button from '../button';
import './style.css'

export default function Form() {
  return (
    <form>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3 offset-md-2">
          <Input name="city" placeholder="City" autoComplete="off" />
        </div>
        <div className="col-md-3">
          <Input name="country" placeholder="Country" autoComplete="off" />
        </div>
        <div className="col-md-3 mt-md-0 text-md-left">
          <Button classes="btn btn-success" label="Get Weather" />
        </div>
      </div>
    </div>
    </form>
  );
}
