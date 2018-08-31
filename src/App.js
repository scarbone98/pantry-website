import React, {Component} from 'react';
import './App.css';
import {teamData, pantryIcon} from './TeamData';

class App extends Component {


    componentDidMount() {
        let anchorlinks = document.querySelectorAll('a[href^="#"]');

        for (let item of anchorlinks) {
            item.addEventListener('click', (e) => {
                let hashval = item.getAttribute('href');
                let target = document.querySelector(hashval);
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                e.preventDefault()
            })
        }
    }

    generateSections() {
        const sections = [];
        teamData.map((element, index) => {
            let leftItem = (<div className="Sticky-Element">
                <div style={{display: 'flex', flexDirection: 'row', padding: 30}}>
                    <img src={element.icon} style={{height: '5vw'}}/>
                    <div>
                        <h1>{element.name}</h1>
                    </div>
                </div>
            </div>);
            let rightItem = (<article style={{padding: 30}} className="Person-Data">
                <p>{element.bio}</p>
            </article>);
            if (index % 2 !== 0) {
                let temp = leftItem;
                leftItem = rightItem;
                rightItem = temp;
            }
            sections.push(
                <section style={{
                    backgroundColor: element.color,
                    overflow: 'none',
                    display: 'flex',
                    alignItems: 'flex-start'
                }} id={element.name}>
                    {leftItem}
                    {rightItem}
                </section>
            );
        });
        return sections;
    }

    render() {
        const sections = this.generateSections();
        return (
            <div>
                <div className="Grid-Container">
                    <div className="Top-Content">
                        <div className="Filter">
                            <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                                <h1 className="Title">Pantry</h1>
                                <img src={pantryIcon} style={{height: '5vw', padding: '0.5rem'}}/>
                            </div>
                            <div className="Team-Container">
                                {
                                    teamData.map((element) => {
                                        return (
                                            <a href={`#${element.name}`}>
                                                <div className="Icon">
                                                    <img src={element.icon} style={{height: '10vw'}}/>
                                                    <div>{element.name}</div>
                                                </div>
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="Background"/>
                    </div>
                    <div className="Middle-Content">
                        {sections}
                    </div>
                    <div className="Bottom-Content">
                        <div style={{
                            display: 'flex',
                            flex: 1,
                            alignContent: 'center',
                            alignItems: 'center',
                            justifyContent: 'space-around'
                        }}>
                            <span>About Us</span>
                            <span>Contact</span>
                            <span>Projects</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
