import React, { useState, useContext, useEffect} from "react";
import { useHistory, Link } from "react-router-dom";

import { GlobalContext } from "./GlobalState";

import FeaturedCard from '../components/sections/featured_card/featuredCard';
import FeaturedCardPreview from './images/feature-card.jpg';

import QuickLinks from '../components/sections/quick_links/quickLinks';
import QuickLinksPreview from './images/quick-link.jpg';

import SectionFlorida from '../components/sections/section_florida/sectionFlorida';
import SectionFloriaPreview from './images/section-florida.jpg';

import SectionGeorgia from '../components/sections/section_georgia/SectionGeorgia';
import SectionGeorgiaPreview from './images/section-ga.jpg';


export class EditSection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value={QuickLinks}>QuickLinks</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
