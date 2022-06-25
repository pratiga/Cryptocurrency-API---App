import React,{useState,useEffect} from "react";
import axios from 'axios';
import '../style/crypto-news.css'

function FetchNews() {
  const [news, setNews] = useState([ ]) 
 
  
  useEffect(() => {
  axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-05-25&sortBy=publishedAt&apiKey=5ab6c20cf6ae45ae9003f38bcf5020d1")
     .then(res =>{
     console.log(res)
      setNews(res.data.articles)
    })
    .catch(err => {
      console.log(err)
    })
  })
 
  return(
    <div class="news-container">
      

    <div className="news-card">
    {
      news.map((value) => {
        return (
          <>
          <div className="news-box">
          <div class="news-image">
            <img src={value.urlToImage} alt="image" />
          </div>
          <div class="news-details">
            <h1>{value.title}</h1>
            <p>{value.description}</p>
          </div>
          </div>
          </>
        )
      })
    }
      
    </div>
    </div>
  )

  }
export default FetchNews











//  import React from 'react'
// // import { Select, Typography, Row, Col, Avatar, Card  } from 'antd';
// // import moment from "moment"
//  import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

// // const { Text, Title } = Typography;
// // const {Option} = Select;


//  const News = ({ simplified }) => {
//    const {data: cryptoNews } = useGetCryptoNewsQuery({newsCategory: 'Cryptocurrency', count: simplified ? 10 : 100});
//     console.log(cryptoNews)

// //    if(!cryptoNews?.value) return 'Loading..';
// //   return (
// //     <Row gutter={[ 24, 24 ]}>
// //       {cryptoNews.value.map((news, i) => (
// //         <col xs = {24} sm= {12} lg={8} key={i}>
// //           <Card hoverable className='news-card'>
// //           <a href ={news.url} target = "_blank" rel="noreferrer">
// //           <div className='news-image-container'>
// //             <Title className='news-title' level={4}>
// //             {news.name}
// //             </Title>
// //           </div>
// //           </a>
// //           </Card>
// //         </col>
// //       ))}
// //     </Row>
// //   )
// // }

// // export default News




//   return (
//     <div>News</div>
//   )
// }

// export default News