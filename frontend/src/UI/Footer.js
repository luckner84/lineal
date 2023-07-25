import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
		<div className="container">
			
			
			<div className="footer-cpy text-center">
				<div className="footer-social">
					<div className="copyrighttop">
						<ul>
							<li className="mx-3">
								<Link className="facebook" to="#">
									<i className="fab fa-facebook-f"></i>
									<span>Facebook</span>
								</Link>
							</li>
							<li>
								<Link className="facebook" to="#">
									<i className="fab fa-twitter"></i>
									<span>Twitter</span>
								</Link>
							</li>
							<li className="mx-3">
								<Link className="facebook" to="#">
									<i className="fab fa-google-plus-g"></i>
									<span>Google+</span>
								</Link>
							</li>
							<li>
								<Link className="facebook" to="#">
									<i className="fab fa-pinterest-p"></i>
									<span>Pinterest</span>
								</Link>
							</li>
						</ul>

					</div>
				</div>
				<div className="copyrightbottom">
					<p style={{color:'whitesmoke'}}>© 2023 Lineal Construction. All Rights Reserved.</p>
				</div>
			</div>

			
		</div>
	</footer>
  )
}

export default Footer