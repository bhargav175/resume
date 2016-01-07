import React from 'react';
import styles from './style.scss';
class Contact extends React.Component{
	render(){
		return <div className={styles.root}>
			<ul className={styles.links}>
				<li><a>Github</a></li>
				<li><a>Stackoverflow</a></li>
				<li><a>Twitter</a></li>
				<li><a>Linkedin</a></li>
			</ul>
		</div>;
	}
}

export default Contact;