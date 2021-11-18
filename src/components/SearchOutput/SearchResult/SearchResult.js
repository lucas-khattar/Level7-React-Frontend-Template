import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    var date = new Date(1970, 0, 1);
    var seconds = date.setSeconds(props.providerPublishTime);
    var publishDate = new Date(seconds).toDateString();
    var time = new Date(seconds).toLocaleTimeString('en-US');
    var hour = new Date(seconds).getHours()-8;
    var minute = new Date(seconds).getMinutes();
    console.log(props);
    return (
        <article className={classes.Result}>
            <h1>Title: {props.title}</h1>
            <h3>Author: {props.publisher} ({publishDate}, {hour}:{minute})</h3>

            <a href={props.link} rel="noopener noreferrer" target="_blank">{props.link}</a>
        </article>
    );
}

export default SearchResult;