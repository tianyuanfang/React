import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';

function CustomLink() {
    return (
        <Router>
            <div>
                <OldLink activeOnlyWhenExact={true} to="/" label="Home" />
                <OldLink to="/about" label="About" />
                <hr />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>
        </Router>
    )
}
function OldSchoolMenuLink(props) {
    let isClick = props.to==props.location.pathname;
    // console.log(props);
    return (<li>
        <Link exact={props.activeOnlyWhenExact} to={props.to} className={isClick ? 'active' : ''}>
            {props.label}
        </Link>
    </li>)
}
//withRouter():包装OldSchoolMenuLink组件并返回新组件OldLink，使其props有history,location等属性
const OldLink = withRouter(OldSchoolMenuLink);

function Home(props) {
    // console.log(props);
    return <h2>Home组件</h2>
}
function About() {
    return <h2>About组件</h2>
}
export default CustomLink;

