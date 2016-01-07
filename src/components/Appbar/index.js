import React from 'react';
import styles from './style.scss';
import {Link} from 'react-router';
function Appbar({path}){
		return <div className={styles.root}>
			<ul className={styles.links}>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/blog'>Blog</Link></li>
				<li><Link to='/contact'>Contact</Link></li>
			</ul>
		</div>;
}

export default Appbar;