import React from 'react'
import './App.css';



function Portfolio() {
    return (
        <div id="all">
            <div className="view view-first">
                <img className="projects" src="./bullet.jpg" alt="" />
                <div className="mask">
                    <h2>Bullet</h2>
                    <p>An abbreviated journal app created with React, JavaScript, custom CSS and HTML on the front-end and Ruby on Rails for the back-end. Full auth implemented with JWT and cloud based photo uploader Cloudinary used for images.</p>
                    <a href="https://github.com/Micaonthego/bullet-client" className="info">Repository</a>
                    <a href="https://github.com/Micaonthego/bullet-client" className="info">Demo</a>
                </div>
            </div>
            <div className="view view-second">
                <img className="projects" src="./AwfullyDelicious.jpg" alt="" />
                <div className="mask">
                    <h2>Awfully Delicious</h2>
                    <p>A user driven NYC dessert finding app where comments and locations are shared. Created with Ruby, Ruby on Rails, HTML, CSS and Semantic UI. Active storage used for file uploads. </p><br />
                    <a href="https://github.com/Micaonthego/awfullydelicious" className="info">Repository</a>
                    <a href="https://github.com/Micaonthego/awfullydelicious" className="info">Demo</a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;