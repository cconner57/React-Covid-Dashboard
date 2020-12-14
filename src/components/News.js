import React from 'react';
// import axios from 'axios';

const News = () => {
	// const [newsData, setNewsData] = useState([]);

	// useEffect(() => {
		// const fetchData = async () => {
		// 	const newsApi = await axios(
		// 		'https://api.smartable.ai/coronavirus/news/US'
		// 	);
		// 	setNewsData(newsApi.data.articles);
		// };
		// fetchData();
	// }, []);

	// const newsArticles = newsData.map((news, key) => {
	// 	return (
	// 		<a
	// 			target='_blank'
	// 			rel='noopener noreferrer'
	// 			href={news.url}
	// 			className='article-link'>
	// 			<div id={key} className='article'>
	// 				<img src={news.urlToImage} alt={news.title} />
	// 				<div className='article-content'>
	// 					<p className='title'>{news.title}</p>
	// 					<p className='description'>{news.description}</p>
	// 					<p className='author'>Article Source: {news.author}</p>
	// 					<p className='author'>Date Published: {news.publishedAt}</p>
	// 				</div>
	// 			</div>
	// 		</a>
	// 	);
	// });

	return (
		// <div className='news-container'>
		// 	<h5>News</h5>
		// 	{/* <div className='news-articles'>{newsArticles}</div> */}
		// </div>
		<div className='testing-container'>
			<h5>News</h5>
			<div className='testing'>
				<h5>In Development</h5>
			</div>
		</div>
	);
};

export default News;
