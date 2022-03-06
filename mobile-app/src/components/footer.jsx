
import "./fooetr.css"
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';

export const Footer = ()=>{
	return (<>
	<div className="foot-container" >
		<div className="foot-right" >
			<FiFacebook/>
			<FiTwitter/>
		</div>
		<div className="foot-clear" ></div>
		<div className="foot-services" >
			Product &gt;
		</div>
		<div className="foot-services">
			Our Science &gt;
		</div>
		<div className="foot-services">
			Vision & Mission &gt;
		</div>
		<div className="foot-services">
			About Us &gt;
		</div>
		<div className="foot-line"></div>
		<p>Subscribe to our Newsletter</p>
		<input className="foot-input" type="text" placeholder="Enter your email..."/>
		<button className="foot-btn"><FiMail className="foot-icon-mail" /> Activate</button>
	</div>
	</>)
}