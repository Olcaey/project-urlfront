import { paths } from "../paths";


const NotFound = () => {
	const { site } = paths
	return (
		<div className='column_wrapper'>
			<img className='illustration' src="https://res.cloudinary.com/dlt51mt3f/image/upload/v1618983847/Saly-15_upattr.png" alt="3d young man illustiration"/>
			<div className="">
			<h2 className='title'>Url Not Found</h2>
			<p className='text'>The url you are looking for does not exist. <br/> Please check it again or try another one.Maybe what you are looking for can be found at <a href="site">VisitMyPost.com</a></p>
			</div>
			
		</div>
	)
}

export default NotFound
