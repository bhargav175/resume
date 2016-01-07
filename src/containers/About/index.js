import React from 'react';
import styles from './style.scss';
class About extends React.Component{
	render(){
		return <div className={styles.root}>
			<h3 className={styles.header}>About Me</h3>
			<p className={styles.content1}>Open Source Enthusiast, Full Stack Developer, dog lover, cricket maniac.</p>
			<p className={styles.content2}>I love building things on the internet.</p>
		</div>;
	}
}

export default About;