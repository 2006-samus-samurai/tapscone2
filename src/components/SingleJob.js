import React from 'react';
import axios from 'axios';

export default class SingleJob extends React.Component {
  render() {
    return (
      <div>
        <label>Company</label>
        <input type="text" value={} onChange={} />
        <label>Job title</label>
        <input type="text" value={} onChange={} />
        <label>Deadline</label>
        <input type="text" value={} onChange={} />
        <label>Post URL</label>
        <input type="text" value={} onChange={} />
        <label>Location</label>
        <input type="text" value={} onChange={} />
        <label>Description</label>
        <input type="text" value={} onChange={} />
      </div>
    );
  }
}
