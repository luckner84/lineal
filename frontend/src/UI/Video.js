import React from 'react'
const Video = () => {
  return (

        <section className="bottom-slider">
		<div className="course_demo1">
			<ul className="container">
				<li>
					<div className="blog-item">
						<img src="images/1.jpg" alt=" " className="img-fluid" />
						<button type="button" className="btn btn-primary play" data-toggle="modal" data-target="#exampleModal">
							<i className="fas fa-play"></i>
						</button>

						<div className="floods-text">
							<h3>The fed and inequality
								<span>Blogger
									<label>|</label>
									<i>Adom Smith</i>
								</span>
							</h3>

						</div>
					</div>
				</li>
				<li>
					<div className="blog-item">
						<img src="images/2.jpg" alt=" " className="img-fluid" />
						<button type="button" className="btn btn-primary play" data-toggle="modal" data-target="#exampleModal">
							<i className="fas fa-play"></i>
						</button>

						<div className="floods-text">
							<h3>The fastest insect in the world
								<span>Blogger
									<label>|</label>
									<i>Adom Smith</i>
								</span>
							</h3>

						</div>
					</div>
				</li>
				<li>
					<div className="blog-item">
						<img src="images/3.jpg" alt=" " className="img-fluid" />
						<button type="button" className="btn btn-primary play" data-toggle="modal" data-target="#exampleModal">
							<i className="fas fa-play"></i>
						</button>


						<div className="floods-text">
							<h3>Billionaires versus Millionaires
								<span>Blogger
									<label>|</label>
									<i>Adom Smith</i>
								</span>
							</h3>

						</div>
					</div>
				</li>
				<li>
					<div className="blog-item">
						<img src="images/4.jpg" alt=" " className="img-fluid" />
						<button type="button" className="btn btn-primary play" data-toggle="modal" data-target="#exampleModal">
							<i className="fas fa-play"></i>
						</button>


						<div className="floods-text">
							<h3>Billionaires versus Millionaires
								<span>Blogger
									<label>|</label>
									<i>Adom Smith</i>
								</span>
							</h3>

						</div>
					</div>
				</li>
			</ul>
		</div>
		<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-hidden="true">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<div className="embed-responsive embed-responsive-21by9">
							<iframe src="https://player.vimeo.com/video/145787219"></iframe>
						</div>
					</div>

				</div>
			</div>
		</div>
	</section>
   
  )
}

export default Video