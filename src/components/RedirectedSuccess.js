import { useRouter } from 'next/router'

const Redirect = ({ URL }) => {
	const router = useRouter();
	router.push(URL)
	
	return (
		<div className='column_wrapper'>
			<h2 className='title'>You are being redirected to: <h3 className='subtitle'> {URL}</h3> </h2>
			<img src="https://res.cloudinary.com/dlt51mt3f/image/upload/v1618983207/Saly-1_zkutr7.png" alt="3d rocket illustiration" width='300px'/>
		</div>
	)
}
export default Redirect;