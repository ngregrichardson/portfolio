import React, { Component } from "react";
import Card from "./Card";

class Works extends Component {
  state = {};
  render() {
    return (
      <div className="content" id="works">
        <Card
          title="Team Tracker"
          link="http://teamtracker.nrdesign.xyz"
          githubLink="https://github.com/ngregrichardson/TeamTracker"
          body="Team Tracker is a new way to watch FIRST Robotics Competitions. With many different worldwide events every weekend, watching all of the teams you like can be tough. Team Tracker provides a way to track every team you want to as if they are all at one event."
        />
        <Card
          title="BertBot"
          link=""
          githubLink="https://github.com/ngregrichardson/BertBot"
          body="BertBot is a Discord bot built mainly for FRC teams, but can be used and customized for many applications. BertBot includes Trello notifications, a moderation suite, custom commands, and much more."
        />
        <Card
          title="Comic Sams"
          link="https://comicsams.nrdesign.xyz"
          githubLink="https://github.com/ngregrichardson/Comic-Sams"
          body="Comic Sams is a Google Chrome extension originally built for pranking friends, but you might find you ACTUALLY like it (doubtful, though). It has multiple options, some of which include replacing all fonts with Comic Sams, replacing images with a customizeable gif, and adding lots of flashing colors to your page."
        />
        <Card
          title="Library Roulette"
          link="https://libraryroulette.nrdesign.xyz"
          githubLink="https://github.com/ngregrichardson/LibraryRoulette"
          body="Library Roulette is a simple game to play while sitting with some friends in a quiet space, in which you JUST might have a very loud sound played at random."
        />
        <Card
          title="BertInventory"
          link=""
          githubLink="https://github.com/ngregrichardson/BertInventory"
          body="BertInventory is a local inventory system built for FRC team #4750. It allows easy addition and removal of items, as well as seeing when items are out of stock, highlighting any duplicate items, and generating order forms."
        />
        <Card
          title="You Spoon"
          link="https://youspoon.nrdesign.xyz"
          githubLink="https://github.com/ngregrichardson/YouSpoon"
          body="You Spoon is a very simple insult generator for those times when you need to call someone a 'hotshot caterpillar'"
        />
      </div>
    );
  }
}

export default Works;
