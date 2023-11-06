import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faLink, faBuilding } from '@fortawesome/free-solid-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import Cat from './images/Bitmap.png'



function ThirdDark () {
    return (
        <div className='third third_dark'>
            <img src={Cat} />
            <div className="content">
                <h1 className='h1_dark'>The Octocat</h1>
                <p className="nickname">@octocat</p>
                <p className="bio bio_dark">This profile has no bio</p>
                <p className="join_date join_date_dark">Joined 25 Jan 2011</p>
                <div className="details_1 details_1_dark">
                    <div className="repos_div">
                        <p className="repos_text">Repos</p>
                        <p className="repos_num">8</p>
                    </div>
                    <div className="followers_div">
                        <p className="followers_text">Followers</p>
                        <p className="followers_num">3938</p>
                    </div>
                    <div className="following_div">
                        <p className="following_text">Following</p>
                        <p className="following_num">9</p>
                    </div>
                </div>
                <div className="details_2">
                    <div className='location'>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <p className='location_name'>San Francisco</p>
                    </div>
                    <div className='twitter'>
                        <FontAwesomeIcon icon={faTwitter} />
                        <p className='twitter_name'>Not Available</p>
                    </div>
                    <div className='blog'>
                        <FontAwesomeIcon icon={faLink} />
                        <p className='blog_name'>https://github.blog</p>
                    </div>
                    <div className='work'>
                        <FontAwesomeIcon icon={faBuilding} />
                        <p className='blog_name'>@github</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ThirdDark;